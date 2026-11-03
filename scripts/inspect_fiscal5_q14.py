import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"
GABARITOS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\gabaritos_pdf"

p_path = os.path.join(PROVAS_DIR, "fiscal_tributario5.pdf")
reader = pypdf.PdfReader(p_path)
full_text = ""
for i, p in enumerate(reader.pages):
    full_text += f"\n--- PAGINA {i+1} ---\n" + (p.extract_text() or "")

# Encontra a questão 14
idx = full_text.find("14.")
if idx != -1:
    print(full_text[idx-100:idx+1500])
else:
    print("14. não encontrado com find exato")
    m = re.search(r'14\s*[\.\-].*?(?=15\s*[\.\-]|\Z)', full_text, re.DOTALL)
    if m:
        print(m.group(0))

print("\n--- GABARITO FISCAL 5 ---")
g_path = os.path.join(GABARITOS_DIR, "gabarito_fiscal_tributario5.pdf")
if os.path.exists(g_path):
    reader_g = pypdf.PdfReader(g_path)
    text_g = ""
    for p in reader_g.pages:
        text_g += (p.extract_text() or "") + "\n"
    print(text_g[:1000])
