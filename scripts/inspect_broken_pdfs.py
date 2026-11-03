import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"

def inspect_exam(pdf_name):
    path = os.path.join(PROVAS_DIR, pdf_name)
    if not os.path.exists(path):
        print(f"Arquivo não encontrado: {pdf_name}")
        return
    
    reader = pypdf.PdfReader(path)
    print(f"\n{'='*70}\nINSPECIONANDO: {pdf_name} ({len(reader.pages)} páginas)\n{'='*70}")
    
    sample_text = ""
    for page_idx in range(min(4, len(reader.pages))):
        sample_text += f"\n--- PÁGINA {page_idx+1} ---\n" + (reader.pages[page_idx].extract_text() or "")
        
    print(sample_text[:2000])

for pdf in [
    "analista_de_informatica.pdf",
    "analista_de_informatica2.pdf",
    "analista_de_informatica3.pdf",
    "fiscal_tributario3.pdf",
    "fiscal_tributario4.pdf",
    "fiscal_tributario6.pdf",
    "prova_objetiva_auditor.pdf"
]:
    inspect_exam(pdf)
