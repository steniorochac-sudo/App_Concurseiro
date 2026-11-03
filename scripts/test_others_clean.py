import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"

def test_exam(pdf_name):
    path = os.path.join(PROVAS_DIR, pdf_name)
    reader = pypdf.PdfReader(path)
    full_text = ""
    for p in reader.pages:
        full_text += (p.extract_text() or "") + "\n"

    normalized = full_text
    normalized = re.sub(r'pcimarkpci.*?\n', '\n', normalized)
    normalized = re.sub(r'www\.pciconcursos.*?\n', '\n', normalized)
    normalized = re.sub(r'\n\s*QUEST[ÃA]O\s*(\d{1,3})\b', r'\n__QUESTAO_\1__\n', normalized, flags=re.IGNORECASE)
    normalized = re.sub(r'\n\s*Q\.\s*(\d{1,3})\b', r'\n__QUESTAO_\1__\n', normalized, flags=re.IGNORECASE)
    normalized = re.sub(r'\n\s*(\d{1,2})\.\s+(?=[A-ZÀ-Ú“"\'(])', r'\n__QUESTAO_\1__\n', normalized)
    normalized = re.sub(r'\n\s*(\d{1,2})\s*\n(?=[A-ZÀ-Ú“"\'(])', r'\n__QUESTAO_\1__\n', normalized)

    q_blocks = re.split(r'\n(?=__QUESTAO_\d+__)', normalized)
    
    questions = []
    for b in q_blocks:
        match = re.match(r'^\s*__QUESTAO_(\d+)__\s*(.*)', b, re.DOTALL)
        if not match:
            continue
        q_num = int(match.group(1))
        content = match.group(2).strip()

        opt_pattern = re.compile(r'(?:^|\n)\(?([a-eA-E])\)?[.\-)]\s*(.*?)(?=\n\(?[a-eA-E]\)?[.\-)]|\Z)', re.DOTALL)
        opts = opt_pattern.findall(content)
        
        if len(opts) >= 3:
            enunciado = re.split(r'\n\(?[a-eA-E]\)?[.\-)]\s+', content)[0].strip()
            questions.append({
                "num": q_num,
                "enunciado": enunciado[:60],
                "opts_count": len(opts)
            })

    print(f"{pdf_name}: {len(questions)} questões extraídas!")

test_exam("auditor_fiscal_tributario2.pdf")
test_exam("fiscal_tributario2.pdf")
