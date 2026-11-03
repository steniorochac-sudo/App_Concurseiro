import os
import sys
import json
import re
import base64
import time
import urllib.request
import urllib.error
import pymupdf as fitz  # PyMuPDF
from dotenv import load_dotenv
from exam_mappings import EXAM_MAPPINGS, PROVAS_DIR, GABARITOS_DIR, OUTPUT_DIR

from gemini_config import (
    key_manager,
    get_configured_model,
    get_next_fallback_model,
    MODERN_GEMINI_MODELS
)

sys.stdout.reconfigure(encoding='utf-8')
load_dotenv()

MODEL_NAME = get_configured_model()

if not key_manager.has_available_key():
    print("❌ ERRO: Nenhuma GEMINI_API_KEY válida encontrada no arquivo .env!")
    sys.exit(1)

# Schema estrito para estruturação visual das questões
VISION_PROMPT = """Você é um especialista e revisor oficial de bancas de concursos públicos do Brasil (FGV, Cebraspe, Vunesp, Fundatec, Quadrix, FCC).

Analise visualmente a imagem desta página de prova em alta resolução com máxima fidelidade tipográfica:
1. Respeite rigorosamente a diagramação de colunas (leia a coluna da esquerda inteira antes de ir para a coluna da direita).
2. Não confunda palavras hifenizadas no final da linha (ex: 'considera-se') com a letra da alternativa A.
3. Se a questão for de múltipla escolha (A, B, C, D, E), extraia todas as alternativas completas sem cortar o texto.
4. Se for julgamento de itens Certo/Errado (Cebraspe/Quadrix), extraia o número do item e a afirmação a ser julgada.
5. Se houver textos de apoio (ex: 'Texto 1', 'Texto para as questões 1 a 5', tabelas, quadros ou leis), inclua no enunciado da questão correspondente de forma formatada em Markdown.
6. Identifique a disciplina precisa (ex: 'Língua Portuguesa', 'Noções de Informática', 'Direito Tributário e Legislação Municipal', 'Legislação Municipal e Ética Pública', 'Direito Constitucional', 'Direito Administrativo', 'Contabilidade Geral e Auditoria', 'Raciocínio Lógico e Matemático').

Retorne SOMENTE um JSON válido (sem tags markdown de código extras) com a seguinte estrutura:
{
  "questoes": [
    {
      "numero": 1,
      "tipo": "multipla_escolha", // ou "certo_errado"
      "disciplina": "Língua Portuguesa",
      "subtopicos": ["Ortografia", "Acentuação Gráfica"],
      "enunciado": "Texto integral da questão...",
      "alternativas": [
        { "id": "A", "text": "Texto completo da alternativa A" },
        { "id": "B", "text": "Texto completo da alternativa B" },
        { "id": "C", "text": "Texto completo da alternativa C" },
        { "id": "D", "text": "Texto completo da alternativa D" },
        { "id": "E", "text": "Texto completo da alternativa E" }
      ]
    }
  ]
}
"""

def render_pdf_page_to_png_bytes(doc, page_num, dpi=200):
    """Renderiza uma página do PDF em imagem PNG em alta resolução."""
    page = doc.load_page(page_num)
    pix = page.get_pixmap(dpi=dpi)
    return pix.tobytes("png")

def call_gemini_vision(png_bytes, model_name=None):
    """Envia a imagem da página para a API do Gemini Vision com rotação de chaves e tratamento resiliente."""
    current_model = model_name or get_configured_model()
    b64_image = base64.b64encode(png_bytes).decode('utf-8')
    
    payload = {
        "contents": [
            {
                "parts": [
                    { "text": VISION_PROMPT },
                    {
                        "inline_data": {
                            "mime_type": "image/png",
                            "data": b64_image
                        }
                    }
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.2,
            "responseMimeType": "application/json"
        },
        "safetySettings": [
            { "category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE" },
            { "category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE" },
            { "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE" },
            { "category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE" },
            { "category": "HARM_CATEGORY_CIVIC_INTEGRITY", "threshold": "BLOCK_NONE" }
        ]
    }
    
    payload_bytes = json.dumps(payload).encode('utf-8')

    max_attempts = 5
    for attempt in range(max_attempts):
        active_key = key_manager.get_current_key()
        if not active_key:
            print("❌ Nenhuma chave de API disponível (todas esgotadas).")
            return None

        url = f"https://generativelanguage.googleapis.com/v1beta/models/{current_model}:generateContent?key={active_key}"
        req = urllib.request.Request(
            url,
            data=payload_bytes,
            headers={'Content-Type': 'application/json'}
        )

        try:
            with urllib.request.urlopen(req, timeout=60) as response:
                res_data = json.loads(response.read().decode('utf-8'))
                candidates = res_data.get('candidates', [])
                if not candidates:
                    print(f"⚠️ Resposta sem candidates: {res_data}")
                    time.sleep(2)
                    continue

                parts = candidates[0].get('content', {}).get('parts', [])
                raw_text = ""
                for part in parts:
                    if 'text' in part:
                        raw_text += part['text']
                
                if not raw_text:
                    print(f"⚠️ Resposta sem texto válido: {candidates[0]}")
                    time.sleep(2)
                    continue

                # Remove eventuais blocos ```json ... ``` se houver
                clean_json_str = re.sub(r'^```json\s*', '', raw_text.strip())
                clean_json_str = re.sub(r'\s*```$', '', clean_json_str.strip())
                return json.loads(clean_json_str)
        except urllib.error.HTTPError as e:
            err_body = e.read().decode('utf-8')
            masked_k = f"{active_key[:8]}...{active_key[-4:]}"
            print(f"⚠️ Tentativa {attempt+1} [Modelo: {current_model} | Chave: {masked_k}] - Erro HTTP {e.code}")

            if e.code == 429:
                # Esgotou cota ou spending cap desta chave
                next_key = key_manager.mark_key_exhausted(active_key, "HTTP 429 Quota / Spending Cap")
                if next_key:
                    next_masked = f"{next_key[:8]}...{next_key[-4:]}"
                    print(f"🔄 Comutando automaticamente para próxima chave disponível: {next_masked}")
                    time.sleep(1)
                    continue
                else:
                    print("⚠️ Todas as chaves configuradas esgotaram suas cotas/spending caps.")
                    time.sleep(5 * (attempt + 1))
            elif e.code == 404:
                # Modelo descontinuado ou indisponível: tenta fallback
                fallback = get_next_fallback_model(current_model)
                if fallback and fallback != current_model:
                    print(f"⚠️ Modelo '{current_model}' retornou 404. Acionando fallback para '{fallback}'...")
                    current_model = fallback
                    continue
            else:
                time.sleep(2)
        except Exception as e:
            print(f"⚠️ Tentativa {attempt+1} - Erro de rede: {e}")
            time.sleep(2)
            
    return None

def process_exam_with_vision(exam_info):
    """Processa um caderno de prova página por página com visão do Gemini."""
    pdf_path = os.path.join(PROVAS_DIR, exam_info['prova'])
    if not os.path.exists(pdf_path):
        print(f"❌ PDF não encontrado: {pdf_path}")
        return []

    print(f"\n=======================================================")
    print(f"👁️ PROCESSANDO COM GEMINI 3.7 FLASH: {exam_info['prova']}")
    print(f"🏛️ Órgão: {exam_info['orgao']} | Cargo: {exam_info['cargo']}")
    print(f"=======================================================")

    doc = fitz.open(pdf_path)
    total_pages = len(doc)
    print(f"📄 Total de páginas encontradas: {total_pages}")

    all_page_questions = []

    for page_idx in range(total_pages):
        print(f"  ▶️ Lendo visualmente Página {page_idx + 1}/{total_pages}...", end="", flush=True)
        png_bytes = render_pdf_page_to_png_bytes(doc, page_idx, dpi=200)
        
        t0 = time.time()
        result = call_gemini_vision(png_bytes)
        elapsed = time.time() - t0
        
        if result and "questoes" in result:
            qs = result["questoes"]
            print(f" ✅ ({len(qs)} questões detectadas em {elapsed:.1f}s)")
            all_page_questions.extend(qs)
        else:
            print(f" ⚠️ (Nenhuma questão ou falha de leitura em {elapsed:.1f}s)")

        # Pequena pausa para respeitar o rate limit da API gratuita
        time.sleep(1.5)

    doc.close()
    return all_page_questions

if __name__ == '__main__':
    print("Motor de Visão Gemini 3.7 Flash pronto.")
