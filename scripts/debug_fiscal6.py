import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"
path = os.path.join(PROVAS_DIR, "fiscal_tributario6.pdf")

reader = pypdf.PdfReader(path)
full_text = ""
for p in reader.pages:
    full_text += (p.extract_text() or "") + "\n"

normalized = full_text
normalized = re.sub(r'\n\s*QUEST[ÃA]O\s*(\d{1,3})\b', r'\n__QUESTAO_\1__', normalized, flags=re.IGNORECASE)

q_blocks = re.split(r'\n(?=__QUESTAO_\d+__)', normalized)
print(f"Total de blocos divididos: {len(q_blocks)}")

for i, b in enumerate(q_blocks[:5]):
    print(f"\n--- BLOCO {i} ---")
    print(b[:300])
    opt_pattern = re.compile(r'(?:^|\n)\(?([a-eA-E])\)?[.\-)]\s*(.*?)(?=\n\(?[a-eA-E]\)?[.\-)]|\Z)', re.DOTALL)
    opts = opt_pattern.findall(b)
    print(f"Opts encontradas: {len(opts)} -> {[o[0] for o in opts]}")
