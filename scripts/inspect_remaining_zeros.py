import os
import sys
import pypdf

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"

def inspect_exam_pages(pdf_name):
    path = os.path.join(PROVAS_DIR, pdf_name)
    if not os.path.exists(path):
        print(f"Não encontrado: {pdf_name}")
        return
    reader = pypdf.PdfReader(path)
    print(f"\n{'='*70}\nPDF: {pdf_name} (Total Páginas: {len(reader.pages)})\n{'='*70}")
    
    for p_num in range(min(4, len(reader.pages))):
        text = reader.pages[p_num].extract_text() or ""
        print(f"--- PÁGINA {p_num+1} (Primeiros 600 caracteres) ---")
        print(text[:600])

for pdf in [
    "analista_contabil_tipo_1.pdf",
    "analista_de_informatica.pdf",
    "auditor_fiscal_tributario2.pdf",
    "auditor_fiscal_tributario_da_receita_municipal_gestao_tributaria_manha.pdf",
    "fiscal_tributario2.pdf",
    "fiscal_tributario6.pdf"
]:
    inspect_exam_pages(pdf)
