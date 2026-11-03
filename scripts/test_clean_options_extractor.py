import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

def extract_options_clean(q_content):
    """Extrai alternativas A, B, C, D, E de forma cirúrgica e segura."""
    # 1. Padrão com parênteses explícitos: (A) ... (B) ... (C) ... (D) ... (E)
    if re.search(r'\([A-Ea-e]\)', q_content):
        # Encontra todas as ocorrências de (A), (B), (C), (D), (E)
        opts = []
        matches = list(re.finditer(r'\(([A-Ea-e])\)\s*', q_content))
        if len(matches) >= 2:
            for i in range(len(matches)):
                letter = matches[i].group(1).upper()
                start = matches[i].end()
                end = matches[i+1].start() if i + 1 < len(matches) else len(q_content)
                opt_text = q_content[start:end].strip()
                opts.append((letter, opt_text))
            return opts

    # 2. Padrão com A), B), C) ou A., B., C. no início de linha ou após espaços
    matches = list(re.finditer(r'(?:^|\n|\s{2,}|\t)\s*([A-Ea-e])[\.\)]\s+', q_content))
    if len(matches) >= 2:
        opts = []
        for i in range(len(matches)):
            letter = matches[i].group(1).upper()
            start = matches[i].end()
            end = matches[i+1].start() if i + 1 < len(matches) else len(q_content)
            opt_text = q_content[start:end].strip()
            opts.append((letter, opt_text))
        return opts

    # 3. Padrão em linha única com A) ... B) ... C)
    matches = list(re.finditer(r'(?:^|\s+)([A-Ea-e])[\.\)]\s+', q_content))
    if len(matches) >= 3:
        # Verifica se as letras formam sequência lógica (A, B, C, D)
        seq = [m.group(1).upper() for m in matches]
        if seq[:len(seq)] == ['A', 'B', 'C', 'D', 'E'][:len(seq)]:
            opts = []
            for i in range(len(matches)):
                letter = matches[i].group(1).upper()
                start = matches[i].end()
                end = matches[i+1].start() if i + 1 < len(matches) else len(q_content)
                opt_text = q_content[start:end].strip()
                opts.append((letter, opt_text))
            return opts

    return []

# Testa no bloco da questão 14 de fiscal_tributario5
PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"
p_path = os.path.join(PROVAS_DIR, "fiscal_tributario5.pdf")
reader = pypdf.PdfReader(p_path)

full_text = ""
for p in reader.pages:
    full_text += (p.extract_text() or "") + "\n"

normalized_text = re.sub(r'\n\s*(\d{1,2})\.\s+(?=[A-ZÀ-Ú“"\'(])', r'\n__QUESTAO_\1__\n', full_text)
q_blocks = re.split(r'\n(?=__QUESTAO_\d+__)', normalized_text)

for block in q_blocks:
    if "__QUESTAO_14__" in block:
        match_header = re.match(r'^\s*__QUESTAO_(\d+)__\s*(.*)', block, re.DOTALL)
        q_content = match_header.group(2).strip()
        opts = extract_options_clean(q_content)
        print("=== OPÇÕES EXTRAÍDAS PARA Q14 ===")
        for letter, txt in opts:
            print(f"[{letter}]: {txt}")
        
        # Enunciado limpo
        first_opt_match = re.search(r'\([A-Ea-e]\)|\n\s*[A-Ea-e][\.\)]', q_content)
        if first_opt_match:
            enunc = q_content[:first_opt_match.start()].strip()
            print("\n=== ENUNCIADO LIMPO ===")
            print(enunc)
