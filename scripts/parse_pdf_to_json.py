import pypdf
import os
import json
import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = os.path.join(os.path.dirname(__file__), '..', 'provas_pdf')
GABARITOS_DIR = os.path.join(os.path.dirname(__file__), '..', 'gabaritos_pdf')
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'imported')

os.makedirs(OUTPUT_DIR, exist_ok=True)

def parse_quadrix_proof(pdf_filename):
    pdf_path = os.path.join(PROVAS_DIR, pdf_filename)
    if not os.path.exists(pdf_path):
        print(f"Arquivo {pdf_filename} não encontrado.")
        return []

    reader = pypdf.PdfReader(pdf_path)
    full_text = ""
    for page in reader.pages:
        full_text += page.extract_text() + "\n"

    # Regex para capturar itens numerados do tipo "12 No trecho..."
    pattern = re.compile(r'(\d{1,3})\s+([A-ZÀ-Ú].*?)(?=\n\d{1,3}\s+[A-ZÀ-Ú]|\Z)', re.DOTALL)
    matches = pattern.findall(full_text)

    questions = []
    for num, text in matches:
        clean_text = text.strip().replace('\n', ' ')
        if len(clean_text) < 15:
            continue
        
        q_id = f"q-{pdf_filename.replace('.pdf', '')}-{num}"
        questions.append({
            "id": q_id,
            "banca": "QUADRIX / FGV",
            "ano": 2025,
            "orgao": "CRC-SP / SEFAZ",
            "cargo": pdf_filename.replace('.pdf', '').replace('_', ' ').title(),
            "disciplina": "Conhecimentos Específicos",
            "assunto": "Geral",
            "enunciado": clean_text,
            "alternativas": [
                { "id": "A", "text": "CERTO" },
                { "id": "B", "text": "ERRADO" }
            ],
            "gabarito": "A", # Padrão inicial
            "explicacao": f"Questão {num} extraída da prova {pdf_filename}."
        })

    return questions

if __name__ == '__main__':
    provas = [f for f in os.listdir(PROVAS_DIR) if f.endswith('.pdf')]
    print(f"Processando {len(provas)} provas PDF...")
    
    total_extracted = 0
    for prova in provas[:3]: # Exemplo com os 3 primeiros
        qs = parse_quadrix_proof(prova)
        if qs:
            out_file = os.path.join(OUTPUT_DIR, prova.replace('.pdf', '.json'))
            with open(out_file, 'w', encoding='utf-8') as f:
                json.dump(qs, f, ensure_ascii=False, indent=2)
            print(f" -> {prova}: {len(qs)} questões extraídas para {out_file}")
            total_extracted += len(qs)

    print(f"\nConcluído! Total de {total_extracted} questões extraídas em arquivos JSON na pasta src/data/imported/")
