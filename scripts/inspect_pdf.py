import pypdf
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = os.path.join("provas_pdf", "analista_contabil.pdf")
gab_path = os.path.join("gabaritos_pdf", "gabarito_analista_contabil.pdf")

if os.path.exists(pdf_path):
    reader = pypdf.PdfReader(pdf_path)
    print("--- PAGINA 2 PROVA ---")
    print(reader.pages[1].extract_text()[:1500])

if os.path.exists(gab_path):
    reader_g = pypdf.PdfReader(gab_path)
    print("\n--- GABARITO ---")
    print(reader_g.pages[0].extract_text()[:1000])
