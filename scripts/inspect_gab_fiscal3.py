import os
import sys
import pypdf

sys.stdout.reconfigure(encoding='utf-8')

GABARITOS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\gabaritos_pdf"
PROVAS_DIR = r"c:\Users\stAPI\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"

g_path = os.path.join(GABARITOS_DIR, "gabarito_fiscal_tributario3.pdf")
if os.path.exists(g_path):
    reader = pypdf.PdfReader(g_path)
    full_text = ""
    for p in reader.pages:
        full_text += (p.extract_text() or "") + "\n"
    print("--- GABARITO FISCAL TRIBUTARIO 3 ---")
    print(full_text)
else:
    print(f"Não encontrado: {g_path}")
