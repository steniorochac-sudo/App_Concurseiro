import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"

for pdf_name in ["analista_de_informatica.pdf", "fiscal_tributario6.pdf"]:
    path = os.path.join(PROVAS_DIR, pdf_name)
    if not os.path.exists(path):
        print(f"Não existe: {pdf_name}")
        continue
    reader = pypdf.PdfReader(path)
    print(f"\n{'='*70}\nINSPECIONANDO: {pdf_name} ({len(reader.pages)} págs)\n{'='*70}")
    
    for p in range(1, min(4, len(reader.pages))):
        t = reader.pages[p].extract_text() or ""
        print(f"\n--- PÁGINA {p+1} ---")
        print(t[:1000])
