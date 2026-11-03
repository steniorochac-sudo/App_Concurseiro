import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"
p_path = os.path.join(PROVAS_DIR, "fiscal_tributario5.pdf")
reader = pypdf.PdfReader(p_path)

for i, p in enumerate(reader.pages):
    t = p.extract_text() or ""
    if "Código de Ética" in t or "conflito de interesses" in t:
        print(f"--- PÁGINA {i+1} ---")
        print(t)
