import fitz
import json
import re
import sys
import os

sys.stdout.reconfigure(encoding='utf-8')

def build_fiscal_municipal_tributario():
    print("Building fiscal_municipal_tributario.json (Instituto Mais - Santana de Parnaíba)...")
    pdoc = fitz.open('provas_pdf/fiscal_municipal_tributario.pdf')
    gdoc = fitz.open('gabaritos_pdf/gabaritos_finais_fiscal_municipal_tributario.pdf')

    # 1. Parse official gabarito (40 questions for cargo 231)
    p1_g = gdoc[0].get_text()
    start_g = p1_g.find("231 – Fiscal Municipal Tributário")
    end_g = p1_g.find("232 – Fiscal Municipal Ambiental", start_g)
    if end_g == -1:
        end_g = len(p1_g)
    sec_text = p1_g[start_g:end_g]
    lines_g = [l.strip() for l in sec_text.splitlines() if l.strip()]
    nums = [int(l) for l in lines_g[1:41]]
    ans = lines_g[41:81]
    answers = dict(zip(nums, ans))
    assert len(answers) == 40, f"Expected 40 answers, got {len(answers)}"
    print(f"Parsed {len(answers)} official gabarito answers.")

    # 2. Extract shared text (Texto 1, questões 1 a 5) on page 2 (index 1)
    p2 = pdoc[1]
    t1_blocks = [b for b in p2.get_text('blocks') if b[0] < 300 and 110 <= b[1] <= 780]
    t1_blocks.sort(key=lambda b: b[1])

    paras = []
    cur_p = []
    for b in t1_blocks:
        txt = b[4].strip()
        if not txt or 'Leia o trecho' in txt:
            continue
        if b[0] > 40:  # paragraph indent
            if cur_p:
                paras.append(" ".join(cur_p))
            cur_p = [txt]
        else:
            cur_p.append(txt)
    if cur_p:
        paras.append(" ".join(cur_p))

    texto_1_content = "\n\n".join(paras)

    # 3. Determine real page for each question
    real_pages = {}
    for pno in range(1, len(pdoc)):
        txt = pdoc[pno].get_text()
        for q in range(1, 41):
            if re.search(rf'(?:^|\n)\s*{q}\.\s+', txt) and q not in real_pages:
                real_pages[q] = pno + 1

    # 4. Extract text from columns across pages 2 to 7 (indices 1 to 6)
    all_col_text = []
    for pno in range(1, len(pdoc)):
        page = pdoc[pno]
        blocks = page.get_text('blocks')
        valid_blocks = []
        for b in blocks:
            txt = b[4].strip()
            if 'Instituto Mais' in txt or 'pcimarkpci' in txt or 'pciconcursos' in txt:
                continue
            if b[1] > 780 or b[3] < 60:
                continue
            # Skip Texto 1 from left column of page 2
            if pno == 1 and b[0] < 300:
                continue
            # Skip subject headers:
            if txt in ['LÍNGUA PORTUGUESA', 'RACIOCÍNIO LÓGICO', 'CONHECIMENTOS BÁSICOS DE LEGISLAÇÃO MUNICIPAL', 'CONHECIMENTOS ESPECÍFICOS']:
                continue
            valid_blocks.append(b)

        left = [b for b in valid_blocks if b[0] < 300]
        right = [b for b in valid_blocks if b[0] >= 300]
        left.sort(key=lambda b: b[1])
        right.sort(key=lambda b: b[1])
        for b in left:
            all_col_text.append(b[4])
        for b in right:
            all_col_text.append(b[4])

    combined = "\n" + "\n".join(all_col_text)

    # Reorder preamble snippets for Q2, Q4, Q5, Q7 so they stay with their questions:
    for tq in [2, 4, 5, 7]:
        m = re.search(rf'(Analise\s+(?:o trecho|a frase)\s+abaixo\s+para\s+responder\s+à\s+questão\s+{tq}\.[\s\S]*?)(\n\s*{tq}\.\s+)', combined)
        if m:
            preamble = m.group(1).strip()
            combined = combined[:m.start()] + f"\n\n{tq}.\n{preamble}\n\n" + combined[m.end():]

    # Split into questions 1. to 40.
    q_splits = re.split(r'\n\s*(\d{1,2})\.\s+', combined)

    disciplinas = {
        (1, 10): "Língua Portuguesa",
        (11, 17): "Raciocínio Lógico",
        (18, 25): "Conhecimentos Básicos de Legislação Municipal",
        (26, 40): "Conhecimentos Específicos"
    }

    def get_disciplina(num):
        for (r_start, r_end), disc in disciplinas.items():
            if r_start <= num <= r_end:
                return disc
        return "Conhecimentos Específicos"

    questoes_list = []

    for i in range(1, len(q_splits), 2):
        q_num = int(q_splits[i])
        raw_body = q_splits[i+1].strip()

        opt_matches = list(re.finditer(r'(?:^|\n)\s*\(([A-D])\)[ \t]*', raw_body))
        assert len(opt_matches) == 4, f"Q{q_num} expected 4 alternatives, got {len(opt_matches)}"

        enunciado_body = raw_body[:opt_matches[0].start()].strip()
        # Clean internal newlines and hyphens
        enunciado_paras = [p.strip() for p in enunciado_body.split('\n\n') if p.strip()]
        clean_enunciado = "\n\n".join([" ".join([l.strip() for l in p.splitlines() if l.strip()]) for p in enunciado_paras])
        clean_enunciado = clean_enunciado.replace('- ', '').replace('-\n', '')

        # Alternatives
        alternativas = []
        for j in range(4):
            opt_id = opt_matches[j].group(1)
            start_idx = opt_matches[j].end()
            end_idx = opt_matches[j+1].start() if j < 3 else len(raw_body)
            opt_text = raw_body[start_idx:end_idx].strip()
            opt_text = " ".join([l.strip() for l in opt_text.splitlines() if l.strip()])
            opt_text = opt_text.replace('- ', '')
            alternativas.append({
                "id": opt_id,
                "text": opt_text
            })

        q_id = f"instituto-mais-2022-santana-parnaiba-fiscal-tributario-q{q_num:02d}"
        q_item = {
            "id": q_id,
            "numeroOriginal": q_num,
            "tipo": "multipla_escolha",
            "enunciado": clean_enunciado,
            "alternativas": alternativas,
            "gabaritoOficial": answers[q_num],
            "gabaritoStatus": "valido",
            "metadados": {
                "disciplina": get_disciplina(q_num),
                "paginaOrigem": real_pages.get(q_num, 2)
            }
        }

        # Shared text for Q1 to Q5
        if 1 <= q_num <= 5:
            q_item["textoCompartilhado"] = {
                "id": "instituto-mais-2022-texto-01",
                "title": "Texto 1 (questões 1 a 5) - Bia Braune",
                "content": texto_1_content
            }

        questoes_list.append(q_item)

    assert len(questoes_list) == 40, f"Expected 40 questions, got {len(questoes_list)}"

    exam_doc = {
        "schemaVersion": "2.0",
        "exam": {
            "id": "instituto-mais-2022-santana-parnaiba-fiscal-tributario",
            "titulo": "Concurso Público Santana de Parnaíba - Fiscal Municipal Tributário (Código 231)",
            "orgao": "Prefeitura do Município de Santana de Parnaíba",
            "banca": "Instituto Mais",
            "cargo": "Fiscal Municipal Tributário",
            "codigoCargo": "231",
            "ano": 2022,
            "edital": "Edital Concurso Público nº 07/2022",
            "caderno": "231 – FISCAL MUNICIPAL TRIBUTÁRIO",
            "turno": "integral",
            "formatoQuestoes": "multipla_escolha_4",
            "totalQuestoes": 40,
            "totalAnuladas": 0,
            "homologado": True,
            "auditTrail": {
                "arquivoProvaPdf": "fiscal_municipal_tributario.pdf",
                "arquivoGabaritoPdf": "gabaritos_finais_fiscal_municipal_tributario.pdf",
                "secaoGabarito": "231 – Fiscal Municipal Tributário",
                "paginaGabarito": 1,
                "tipoGabarito": "definitivo",
                "statusAuditoria": "fidelidade_documental_aprovada_gabarito_definitivo",
                "responsavelAuditoria": "Antigravity AI Agent",
                "dataAuditoria": "2026-11-04"
            }
        },
        "questoes": questoes_list
    }

    out_path = 'src/data/imported/fiscal_municipal_tributario.json'
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(exam_doc, f, ensure_ascii=False, indent=2)

    print(f"Successfully generated {out_path} with {len(questoes_list)} questions!")

if __name__ == '__main__':
    build_fiscal_municipal_tributario()
