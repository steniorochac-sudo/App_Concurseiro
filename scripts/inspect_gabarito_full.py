import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

GABARITOS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\gabaritos_pdf"
g_path = os.path.join(GABARITOS_DIR, "gabarito_analista_contabil.pdf")
reader = pypdf.PdfReader(g_path)
full_text = ""
for p in reader.pages:
    full_text += (p.extract_text() or "") + "\n"

print("--- CARGOS NO GABARITO ---")
for m in re.finditer(r'(2\.\d+\s+[A-ZÁ-Ú\s\(\)\d\-]+)', full_text):
    print(m.group(0))

print("\n--- TEXTO COMPLETO DO GABARITO ---")
print(full_text[:3000])
