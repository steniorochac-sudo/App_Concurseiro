import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"
path = os.path.join(PROVAS_DIR, "fiscal_tributario2.pdf")
reader = pypdf.PdfReader(path)

for p_num in range(len(reader.pages)):
    text = reader.pages[p_num].extract_text() or ""
    nums = re.findall(r'\n\s*(\d{1,2})\s*\n', text)
    print(f"Página {p_num+1}: números encontrados -> {nums}")
