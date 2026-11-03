import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

GABARITOS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\gabaritos_pdf"
g_path = os.path.join(GABARITOS_DIR, "gabarito_fiscal_tributario5.pdf")
reader = pypdf.PdfReader(g_path)
full_text = ""
for p in reader.pages:
    full_text += (p.extract_text() or "") + "\n"

print("--- TODOS OS CARGOS NO GABARITO FISCAL 5 ---")
for m in re.finditer(r'Cargo:\s*([^\n]+)', full_text, re.IGNORECASE):
    print(m.group(1).strip())

print("\n--- SEÇÃO FISCAL NO GABARITO ---")
for m in re.finditer(r'Cargo:[^\n]*?FISCAL[^\n]*?\n(.*?)(?=Cargo:|\Z)', full_text, re.DOTALL | re.IGNORECASE):
    print(m.group(0))
