import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"
p_path = os.path.join(PROVAS_DIR, "fiscal_tributario5.pdf")
reader = pypdf.PdfReader(p_path)

full_text = ""
for p in reader.pages:
    full_text += (p.extract_text() or "") + "\n"

# Simula o split
normalized_text = re.sub(r'\n\s*(\d{1,2})\.\s+(?=[A-ZÀ-Ú“"\'(])', r'\n__QUESTAO_\1__\n', full_text)
q_blocks = re.split(r'\n(?=__QUESTAO_\d+__)', normalized_text)

for block in q_blocks:
    if "__QUESTAO_14__" in block:
        print("=== BLOCO BRUTO DA QUESTAO 14 ===")
        print(block)
        
        match_header = re.match(r'^\s*__QUESTAO_(\d+)__\s*(.*)', block, re.DOTALL)
        q_content = match_header.group(2).strip()
        
        opt_pattern = re.compile(r'(?:^|\n|\s{2,})\(?([a-eA-E])\)?[.\-)]\s+(.*?)(?=(?:\s{2,}\(?[a-eA-E]\)?[.\-)]|\n\(?[a-eA-E]\)?[.\-)]|\Z))', re.DOTALL)
        opts_raw = opt_pattern.findall(q_content)
        print("\n=== OPTS RAW PATTERN 1 ===")
        for o in opts_raw:
            print(f"[{o[0]}]: {o[1]}")
            
        opts_raw2 = re.findall(r'\(?([a-eA-E])\)?[.\-)]\s*(.*?)(?=\s*\(?[a-eA-E]\)?[.\-)]|\Z)', q_content, re.DOTALL)
        print("\n=== OPTS RAW PATTERN 2 ===")
        for o in opts_raw2:
            print(f"[{o[0]}]: {o[1]}")
