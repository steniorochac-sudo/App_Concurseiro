import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

GABARITOS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\gabaritos_pdf"
PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"

# Inspeciona gabarito de analista_contabil
g_path = os.path.join(GABARITOS_DIR, "gabarito_analista_contabil.pdf")
if os.path.exists(g_path):
    reader_g = pypdf.PdfReader(g_path)
    text_g = ""
    for p in reader_g.pages:
        text_g += p.extract_text() or ""
    print("--- GABARITO ANALISTA CONTABIL (Primeiros 1000 chars) ---")
    print(text_g[:1000])

# Inspeciona texto da prova ao redor da questão 36
p_path = os.path.join(PROVAS_DIR, "analista_contabil.pdf")
if os.path.exists(p_path):
    reader_p = pypdf.PdfReader(p_path)
    text_p = ""
    for p in reader_p.pages:
        text_p += p.extract_text() or ""
    
    # Procura onde está a questão 36
    m = re.search(r'(?:NOÇÕES DE INFORMÁTICA|INFORMÁTICA|LÍNGUA PORTUGUESA|CONHECIMENTOS).*?36\s+.*?(?=\n\s*37\b|\Z)', text_p, re.DOTALL | re.IGNORECASE)
    if m:
        print("\n--- TEXTO DA PROVA Q36 ---")
        print(m.group(0)[:800])
