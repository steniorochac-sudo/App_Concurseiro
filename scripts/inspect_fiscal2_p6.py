import os
import sys
import pypdf

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"
path = os.path.join(PROVAS_DIR, "fiscal_tributario2.pdf")
reader = pypdf.PdfReader(path)
print(reader.pages[5].extract_text()[:1500])
