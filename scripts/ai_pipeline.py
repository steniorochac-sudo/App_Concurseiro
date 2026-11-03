import os
import sys
import json
import re
import time
import argparse
import urllib.request
import urllib.error
import pypdf
from dotenv import load_dotenv
from exam_mappings import EXAM_MAPPINGS, PROVAS_DIR, GABARITOS_DIR, OUTPUT_DIR

# Suporte a caracteres acentuados no terminal Windows
sys.stdout.reconfigure(encoding='utf-8')

# Carregar variáveis de ambiente do .env
from gemini_config import (
    key_manager,
    get_configured_model,
    MODERN_GEMINI_MODELS
)

load_dotenv()
GEMINI_KEY = key_manager.get_current_key()
GROQ_KEY = os.getenv("GROQ_API_KEY")
GEMINI_MODEL = get_configured_model()

os.makedirs(OUTPUT_DIR, exist_ok=True)

def clean_pdf_noise(text):
    """Remove ruídos, rodapés e marcas d'água de páginas."""
    text = re.sub(r'pcimarkpci.*?\n', '', text)
    text = re.sub(r'www\.pciconcursos\.com\.br', '', text)
    text = re.sub(r'Página \d+.*?Concurso Público', '', text)
    text = re.sub(r'Campus Universitário • UFSC.*?\n', '', text)
    return text

def extract_text_from_pdf(pdf_path):
    """Extrai o texto completo de um arquivo PDF."""
    if not os.path.exists(pdf_path):
        return ""
    try:
        reader = pypdf.PdfReader(pdf_path)
        full_text = ""
        for page in reader.pages:
            t = page.extract_text()
            if t:
                full_text += t + "\n"
        return clean_pdf_noise(full_text)
    except Exception as e:
        print(f"Erro ao ler PDF {pdf_path}: {e}")
        return ""

def extract_gabarito_matrix(gabarito_text):
    """Extrai matriz de respostas do gabarito (ex: {1: 'A', 2: 'C', ...})."""
    matrix = {}
    tokens = gabarito_text.split()
    numbers = []
    letters = []
    
    for token in tokens:
        if token.isdigit() and int(token) <= 120:
            numbers.append(int(token))
        elif token.upper() in ['A', 'B', 'C', 'D', 'E', 'X', 'N']:
            letters.append(token.upper())

    if len(numbers) > 0 and len(letters) >= len(numbers):
        for i in range(len(numbers)):
            matrix[numbers[i]] = letters[i]

    matches = re.findall(r'(\d{1,3})\s*[-.)\s:]+\s*([A-Ea-eCXN])\b', gabarito_text)
    for num_str, let in matches:
        matrix[int(num_str)] = let.upper()

    return matrix

def call_gemini_api(prompt, api_key, timeout=120):
    """Chama a API oficial do Gemini Flash com response_schema nativo para máxima eficiência de tokens."""
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent?key={api_key}"
    
    payload = {
        "contents": [
            {
                "parts": [
                    {"text": prompt}
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.2,
            "response_mime_type": "application/json",
            "response_schema": {
                "type": "ARRAY",
                "items": {
                    "type": "OBJECT",
                    "properties": {
                        "id": {"type": "STRING"},
                        "explicacao": {"type": "STRING"},
                        "baseLegal": {"type": "STRING"},
                        "fontePesquisa": {"type": "STRING"},
                        "alertaProfessor": {"type": "STRING"},
                        "subtopicos": {
                            "type": "ARRAY",
                            "items": {"type": "STRING"}
                        },
                        "dificuldade": {
                            "type": "STRING",
                            "enum": ["fácil", "médio", "difícil"]
                        }
                    },
                    "required": ["id", "explicacao", "baseLegal", "fontePesquisa", "subtopicos", "dificuldade"]
                }
            }
        }
    }
    
    headers = {"Content-Type": "application/json"}
    req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers=headers)
    
    try:
        with urllib.request.urlopen(req, timeout=timeout) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            text_response = res_data['candidates'][0]['content']['parts'][0]['text']
            return json.loads(text_response)
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        print(f"    [API Error] Gemini HTTP {e.code}: {error_body[:200]}")
        return None
    except Exception as e:
        print(f"    [API Error] Falha na requisição Gemini: {e}")
        return None

def extract_base_questions(exam_info, raw_text, gabarito_matrix):
    """Extrai localmente a estrutura base de todas as questões antes do enriquecimento."""
    q_blocks = re.split(r'\n(?=\s*\d{1,3}[\.\s\-])', raw_text)
    questions = []
    current_subj = exam_info['disciplina_default']
    
    for block in q_blocks:
        if "Língua Portuguesa" in block:
            current_subj = "Língua Portuguesa"
        elif "Direito Constitucional" in block:
            current_subj = "Direito Constitucional"
        elif "Direito Tributário" in block:
            current_subj = "Direito Tributário"
        elif "Contabilidade" in block:
            current_subj = "Contabilidade"
        elif "Informática" in block or "Tecnologia" in block:
            current_subj = "Tecnologia da Informação"

        match = re.match(r'^\s*(\d{1,3})[\.\s\-]+(.*)', block, re.DOTALL)
        if not match:
            continue

        q_num_int = int(match.group(1))
        content = match.group(2).strip()

        opts = re.findall(r'([a-eA-E])[\.\)]\s+(?:Check-square|SQUARE)?\s*(.*?)(?=\n[a-eA-E][\.\)]|\Z)', content, re.DOTALL)

        alternativas = []
        gabarito = gabarito_matrix.get(q_num_int, "A")

        if len(opts) >= 2:
            for l, t in opts:
                let_u = l.upper()
                alternativas.append({
                    "id": let_u,
                    "text": t.replace("Check-square", "").replace("SQUARE", "").strip().replace('\n', ' ')
                })
                if "Check-square" in block and f"{l}." in block:
                    lines = block.split('\n')
                    for line in lines:
                        if line.strip().startswith(f"{l}.") and "Check-square" in line:
                            gabarito = let_u
        else:
            alternativas = [
                {"id": "A", "text": "CERTO"},
                {"id": "B", "text": "ERRADO"}
            ]
            if gabarito in ['C', 'E']:
                gabarito = "A" if gabarito == 'C' else "B"

        clean_enunciado = re.split(r'\n?[a-eA-E][\.\)]\s+', content)[0].strip()
        if len(clean_enunciado) < 15:
            continue

        q_id = f"q-{exam_info['id']}-{str(q_num_int).zfill(2)}"
        questions.append({
            "id": q_id,
            "banca": exam_info['banca'],
            "ano": exam_info['ano'],
            "orgao": exam_info['orgao'],
            "cargo": exam_info['cargo'],
            "disciplina": current_subj,
            "assunto": "Questões de Concurso",
            "subtopicos": [current_subj],
            "enunciado": f"{q_num_int}. {clean_enunciado}",
            "alternativas": alternativas,
            "gabarito": gabarito,
            "explicacao": f"Questão {q_num_int} da prova oficial de {exam_info['cargo']} ({exam_info['banca']}). Resposta oficial: alternativa {gabarito}.",
            "baseLegal": f"Gabarito Oficial {exam_info['banca']}.",
            "fontePesquisa": f"Edital e Caderno Oficial de Prova {exam_info['orgao']} - {exam_info['ano']}",
            "dificuldade": "médio"
        })

    return questions

def enrich_questions_batch_with_ai(questions_batch, api_key):
    """Enriquece um lote pequeno (5 questões) com análise de pegadinhas, subtópicos e alertas."""
    prompt = f"""Você é um professor e auditor fiscal especialista em bancas de concursos públicos (FGV, Cebraspe, FCC, FEPESE, AOCP).
Para as questões abaixo, gere:
1. 'explicacao': Deve OBRIGATORIAMENTE conter:
   - 🎯 Por que a alternativa correta é a verdadeira (conceito e regra).
   - 🔍 Dissecação das alternativas erradas (análise de pegadinhas de cada letra descartada: A, B, C, D...).
2. 'baseLegal': Artigo de lei exato (CF/88, CTN, Leis, Súmulas STF/STJ) ou regra gramatical oficial.
3. 'fontePesquisa': Fonte para consulta do aluno.
4. 'alertaProfessor': Se a questão envolver jurisprudência recente, divergência ou risco de anulação, preencha um aviso (caso contrário, deixe string vazia "").
5. 'subtopicos': Array com 2 a 4 tags hierárquicas do edital (ex: ["Direito Tributário", "Impostos Municipais", "IPTU"]).
6. 'dificuldade': "fácil", "médio" ou "difícil".

Questões para enriquecer:
{json.dumps([{
    "id": q["id"],
    "enunciado": q["enunciado"],
    "alternativas": q["alternativas"],
    "gabarito": q["gabarito"],
    "disciplina": q["disciplina"]
} for q in questions_batch], ensure_ascii=False, indent=2)}
"""
    return call_gemini_api(prompt, api_key, timeout=90)

def process_exam(exam_info, use_ai=True):
    """Processa uma prova individual com enriquecimento em lotes."""
    prova_path = os.path.join(PROVAS_DIR, exam_info['prova'])
    gabarito_path = os.path.join(GABARITOS_DIR, exam_info['gabarito'])
    
    print(f"\n📂 Processando: {exam_info['prova']} ({exam_info['cargo']})...")
    
    if not os.path.exists(prova_path):
        print(f"  ❌ Arquivo de prova não encontrado: {prova_path}")
        return 0

    raw_text = extract_text_from_pdf(prova_path)
    gabarito_text = extract_text_from_pdf(gabarito_path)
    gabarito_matrix = extract_gabarito_matrix(gabarito_text)
    
    base_questions = extract_base_questions(exam_info, raw_text, gabarito_matrix)
    print(f"  📄 {len(base_questions)} questões estruturadas.")

    if use_ai and GEMINI_KEY and len(base_questions) > 0:
        print(f"  🤖 Enriquecendo com IA Gemini ({GEMINI_MODEL}) com Schema Nativo...")
        batch_size = 5
        enriched_count = 0

        for i in range(0, len(base_questions), batch_size):
            batch = base_questions[i:i + batch_size]
            print(f"   -> Enriquecendo questões {i+1} até {min(i+batch_size, len(base_questions))}...", end="", flush=True)
            
            ai_data = enrich_questions_batch_with_ai(batch, GEMINI_KEY)
            if ai_data and isinstance(ai_data, list):
                ai_dict = {item.get("id"): item for item in ai_data if isinstance(item, dict) and "id" in item}
                for q in batch:
                    if q["id"] in ai_dict:
                        enriched_item = ai_dict[q["id"]]
                        if enriched_item.get("explicacao"):
                            q["explicacao"] = enriched_item["explicacao"]
                        if enriched_item.get("baseLegal"):
                            q["baseLegal"] = enriched_item["baseLegal"]
                        if enriched_item.get("fontePesquisa"):
                            q["fontePesquisa"] = enriched_item["fontePesquisa"]
                        if enriched_item.get("alertaProfessor"):
                            q["alertaProfessor"] = enriched_item["alertaProfessor"]
                        if enriched_item.get("subtopicos"):
                            q["subtopicos"] = enriched_item["subtopicos"]
                        if enriched_item.get("dificuldade"):
                            q["dificuldade"] = enriched_item["dificuldade"]
                enriched_count += len(batch)
                print(" ✅")
            else:
                print(" ⚠️ (Mantida estrutura base)")

            time.sleep(2) # Pausa amigável

        print(f"  ✨ {enriched_count} questões enriquecidas com sucesso!")

    out_filename = exam_info['prova'].replace('.pdf', '.json')
    out_path = os.path.join(OUTPUT_DIR, out_filename)
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(base_questions, f, ensure_ascii=False, indent=2)

    print(f"  ✅ Concluído! Salvo em: src/data/imported/{out_filename}")
    return len(base_questions)

def main():
    parser = argparse.ArgumentParser(description="Pipeline de IA para processamento de provas de concursos")
    parser.add_argument("--prova", help="Nome do arquivo PDF específico (ex: analista_contabil.pdf)")
    parser.add_argument("--limit", type=int, default=5, help="Quantidade de provas para processar no lote (padrão: 5)")
    parser.add_argument("--all", action="store_true", help="Processar todas as 26 provas")
    args = parser.parse_args()

    print("=" * 65)
    print("🚀 APP CONCURSEIRO - PIPELINE DE IA COM SCHEMA NATIVO")
    print(f"Provedor: {'Gemini Flash (' + GEMINI_MODEL + ')' if GEMINI_KEY else 'Parser Local'}")
    print("=" * 65)

    mappings = EXAM_MAPPINGS
    if args.prova:
        mappings = [m for m in EXAM_MAPPINGS if m['prova'] == args.prova or m['id'] == args.prova]
        if not mappings:
            print(f"Prova '{args.prova}' não encontrada no mapeamento.")
            return
    elif not args.all:
        mappings = EXAM_MAPPINGS[:args.limit]

    total_provas = len(mappings)
    total_questoes = 0

    for idx, exam in enumerate(mappings, 1):
        print(f"[{idx}/{total_provas}]", end=" ")
        count = process_exam(exam, use_ai=bool(GEMINI_KEY))
        total_questoes += count

    print("\n" + "=" * 65)
    print(f"🎉 SUCESSO! {total_questoes} questões processadas em {total_provas} provas!")
    print(f"📁 Arquivos JSON salvos na pasta: src/data/imported/")
    print("⚡ Atualizando catálogo em tempo real para o app...")
    import subprocess
    subprocess.run([sys.executable, os.path.join(os.path.dirname(__file__), "bundle_exams_for_app.py")])
    print("=" * 65)

if __name__ == '__main__':
    main()
