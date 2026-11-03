import os
import sys
import pypdf
import re
from exam_mappings import EXAM_MAPPINGS, GABARITOS_DIR

sys.stdout.reconfigure(encoding='utf-8')

def extract_cargo_specific_matrix(gabarito_text, cargo_name):
    """Extrai a tabela exata do cargo ignorando os outros 40 cargos do PDF."""
    if not gabarito_text:
        return {}

    # Procura seção do cargo (ex: "35 - Fiscal Tributário", "2.4 ANALISTA CONTÁBIL", etc.)
    clean_words = [w for w in re.split(r'[\s\-_/]+', cargo_name.upper()) if len(w) > 3 and w not in ['TIPO', 'PROVA', 'MANHÃ', 'TARDE', 'MUNICIPAL']]
    
    section_text = gabarito_text
    for kw in clean_words:
        # Padrão: número/código + nome do cargo
        m = re.search(rf'(?:^|\n)\s*(?:\d{1,3}\s*[-–.]\s*|\bCÓDIGO\b\s*\d*\s*|\bCARGO:\s*)[^\n]*?{kw}[^\n]*?\n(.*?)(?=\n\s*(?:\d{1,3}\s*[-–.]\s*[A-Z]|\bCÓDIGO\b|\bCARGO:)|\Z)', gabarito_text, re.DOTALL | re.IGNORECASE)
        if m:
            section_text = m.group(0)
            break

    # Padrão "01 - E", "01. A", "1-A", "01-C"
    matrix = {}
    matches = re.findall(r'(\d{1,3})\s*[-–.:)\s]+\s*([A-Ea-eCXN])\b', section_text)
    if len(matches) >= 10:
        for num_str, let in matches:
            matrix[int(num_str)] = let.upper()
        return matrix

    # Padrão tabelado (Linha de Números e Linha de Letras)
    lines = [l.strip() for l in section_text.split('\n') if l.strip()]
    for i in range(len(lines) - 1):
        num_line = lines[i]
        let_line = lines[i+1]
        
        nums = [int(n) for n in num_line.split() if n.isdigit() and int(n) <= 120]
        lets = [l.upper() for l in let_line.split() if l.upper() in ['C', 'E', 'A', 'B', 'D', 'X', 'N']]
        
        if len(nums) > 0 and len(nums) == len(lets):
            for n, l in zip(nums, lets):
                matrix[n] = l

    return matrix

for exam in EXAM_MAPPINGS:
    g_path = os.path.join(GABARITOS_DIR, exam['gabarito'])
    if not os.path.exists(g_path):
        continue
    reader = pypdf.PdfReader(g_path)
    full_text = ""
    for p in reader.pages:
        full_text += (p.extract_text() or "") + "\n"

    m = extract_cargo_specific_matrix(full_text, exam['cargo'])
    q14 = m.get(14)
    print(f"{exam['id']} ({exam['cargo']}): {len(m)} itens mapeados. Item 14 = {q14}")
