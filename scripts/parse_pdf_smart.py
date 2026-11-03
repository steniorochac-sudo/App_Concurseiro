import pypdf
import os
import json
import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = os.path.join(os.path.dirname(__file__), '..', 'provas_pdf')
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'imported')

os.makedirs(OUTPUT_DIR, exist_ok=True)

def clean_noise(text):
    # Remove marcações de rodapé e PCI Concursos
    text = re.sub(r'pcimarkpci.*?\n', '', text)
    text = re.sub(r'www\.pciconcursos\.com\.br', '', text)
    text = re.sub(r'Página \d+.*?Agente Fiscal Tributário', '', text)
    text = re.sub(r'Município de Balneário Camboriú.*?\n', '', text)
    return text

def parse_fepese_proof(pdf_filename):
    pdf_path = os.path.join(PROVAS_DIR, pdf_filename)
    if not os.path.exists(pdf_path):
        return []

    reader = pypdf.PdfReader(pdf_path)
    full_text = ""
    for page in reader.pages:
        full_text += page.extract_text() + "\n"

    full_text = clean_noise(full_text)

    # Divisão por número da questão: " 1. ", " 2. ", etc.
    q_blocks = re.split(r'\n(?=\d{1,2}\.\s+)', full_text)

    questions = []
    current_subject = "Conhecimentos Gerais"

    for block in q_blocks:
        # Verificar se há cabeçalho de disciplina
        if "Língua Portuguesa" in block:
            current_subject = "Língua Portuguesa"
        elif "Conhecimentos Atuais" in block:
            current_subject = "Conhecimentos Atuais"
        elif "Conhecimentos Específicos" in block:
            current_subject = "Conhecimentos Específicos"

        # Extrair número da questão
        match_num = re.match(r'^\s*(\d{1,2})\.\s+(.*)', block, re.DOTALL)
        if not match_num:
            continue

        q_num = match_num.group(1)
        q_content = match_num.group(2)

        # Encontrar as alternativas a., b., c., d., e.
        opt_pattern = re.compile(r'([a-e])\.\s+(?:Check-square|SQUARE)?\s*(.*?)(?=\n[a-e]\.|\Z)', re.DOTALL)
        opts_raw = opt_pattern.findall(q_content)

        if len(opts_raw) < 4:
            continue

        # Separa o enunciado (tudo antes da opção a.)
        enunciado_part = re.split(r'\n?[a-e]\.\s+', q_content)[0].strip()

        alternativas = []
        gabarito = "A"

        for letter, opt_text in opts_raw:
            letter_upper = letter.upper()
            clean_opt = opt_text.strip().replace('\n', ' ')

            # Se a opção continha "Check-square", é a correta
            if "Check-square" in block and f"{letter}." in block:
                # Verificar se este bloco de opção específica é o marcado
                lines = block.split('\n')
                for line in lines:
                    if line.strip().startswith(f"{letter}.") and "Check-square" in line:
                        gabarito = letter_upper

            alternativas.append({
                "id": letter_upper,
                "text": clean_opt.replace("Check-square", "").replace("SQUARE", "").strip()
            })

        q_id = f"q-{pdf_filename.replace('.pdf', '')}-{q_num.zfill(2)}"
        questions.append({
            "id": q_id,
            "banca": "FEPESE",
            "ano": 2022,
            "orgao": "Prefeitura de Balneário Camboriú",
            "cargo": "Agente Fiscal Tributário",
            "disciplina": current_subject,
            "assunto": "Questões de Concurso",
            "enunciado": f"{q_num}. {enunciado_part}",
            "alternativas": alternativas,
            "gabarito": gabarito,
            "explicacao": f"Questão {q_num} extraída da prova oficial de Agente Fiscal Tributário ({current_subject})."
        })

    return questions

if __name__ == '__main__':
    filename = "agente_fiscal_tributario 1.pdf"
    qs = parse_fepese_proof(filename)
    out_file = os.path.join(OUTPUT_DIR, filename.replace('.pdf', '.json'))
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(qs, f, ensure_ascii=False, indent=2)
    print(f"Sucesso! Extraídas {len(qs)} questões limpas e individuais para {out_file}")
