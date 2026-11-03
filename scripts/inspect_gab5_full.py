import os
import sys
import pypdf

sys.stdout.reconfigure(encoding='utf-8')

GABARITOS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\gabaritos_pdf"
g_path = os.path.join(GABARITOS_DIR, "gabarito_fiscal_tributario5.pdf")
reader = pypdf.PdfReader(g_path)
full_text = ""
for p in reader.pages:
    full_text += (p.extract_text() or "") + "\n"

print("=== GABARITO COMPLETO FISCAL TRIBUTARIO 5 (ALFREDO CHAVES) ===")
print(full_text)
