import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"

def inspect_pages_2_3(pdf_name):
    path = os.path.join(PROVAS_DIR, pdf_name)
    if not os.path.exists(path):
        return
    reader = pypdf.PdfReader(path)
    print(f"\n{'='*70}\nPDF: {pdf_name} (Total Páginas: {len(reader.pages)})\n{'='*70}")
    
    for p_num in range(1, min(3, len(reader.pages))):
        text = reader.pages[p_num].extract_text() or ""
        print(f"--- PÁGINA {p_num+1} (Primeiros 800 caracteres) ---")
        print(text[:800])

for pdf in [
    "analista_de_informatica.pdf",
    "analista_de_informatica2.pdf",
    "analista_de_informatica3.pdf",
    "fiscal_tributario3.pdf",
    "fiscal_tributario4.pdf",
    "fiscal_tributario6.pdf",
    "prova_objetiva_auditor.pdf"
]:
    inspect_pages_2_3(pdf)
