import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"
GABARITOS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\gabaritos_pdf"

def test_fiscal6():
    path = os.path.join(PROVAS_DIR, "fiscal_tributario6.pdf")
    reader = pypdf.PdfReader(path)
    full_text = ""
    for p in reader.pages:
        full_text += (p.extract_text() or "") + "\n"

    # Normalização robusta
    normalized = full_text
    normalized = re.sub(r'(?:Prefeitura Municipal.*?INSTITUTO.*?|FISCAL TRIBUTÁRIO.*?Página \d+ de \d+|pcimarkpci.*?\n|www\.pciconcursos.*?\n)', '', normalized, flags=re.IGNORECASE)
    normalized = re.sub(r'\n\s*QUEST[ÃA]O\s*(\d{1,3})\b', r'\n__QUESTAO_\1__\n', normalized, flags=re.IGNORECASE)

    q_blocks = re.split(r'\n(?=__QUESTAO_\d+__)', normalized)
    print(f"Total de blocos: {len(q_blocks)}")

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

    print(f"Total de questões extraídas com sucesso de fiscal_tributario6: {len(questions)}")
    for q in questions[:5]:
        print(f" Q{q['num']}: {q['enunciado']} ({q['opts_count']} alternativas)")

test_fiscal6()
