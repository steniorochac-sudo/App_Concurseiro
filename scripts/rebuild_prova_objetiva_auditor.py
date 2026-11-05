import fitz
import json
import re
import sys
import os

sys.stdout.reconfigure(encoding='utf-8')

def build_prova_objetiva_auditor():
    print("Building prova_objetiva_auditor.json (VUNESP - PMRP)...")
    pdoc = fitz.open('provas_pdf/prova_objetiva_auditor.pdf')
    gdoc = fitz.open('gabaritos_pdf/gabarito_prova_objetiva_auditor.pdf')

    # 1. Parse official gabarito (80 questions, 1 - A to 80 - A)
    g_text = gdoc[0].get_text()
    raw_gab = re.findall(r'(\d{1,2})\s*-\s*([A-E])', g_text)
    answers = {int(num): ans for num, ans in raw_gab}
    assert len(answers) == 80, f"Expected 80 answers, got {len(answers)}"
    print(f"Parsed {len(answers)} official gabarito answers.")

    # 2. Extract shared texts from exam PDF
    # Texto 1 (questões 01 a 05 - Arthur Schopenhauer) on page 3 (index 2)
    p3 = pdoc[2]
    # left column blocks between Y=100 and Y=680
    t1_blocks = [b for b in p3.get_text('blocks') if b[0] < 300 and 100 <= b[1] <= 680]
    t1_blocks.sort(key=lambda b: b[1])
    t1_paras = []
    for b in t1_blocks:
        txt = b[4].strip()
        if 'Leia o texto' in txt:
            continue
        clean = " ".join([l.strip() for l in txt.splitlines() if l.strip()])
        t1_paras.append(clean)
    texto_1_content = "\n\n".join(t1_paras)

    # Texto 2 (questões 06 a 10 - Carlos Drummond de Andrade) on page 4 (index 3)
    p4 = pdoc[3]
    t2_blocks = [b for b in p4.get_text('blocks') if b[0] < 300 and 210 <= b[1] <= 570]
    t2_blocks.sort(key=lambda b: b[1])
    t2_paras = []
    for b in t2_blocks:
        txt = b[4].strip()
        if 'Leia o texto' in txt:
            continue
        clean = " ".join([l.strip() for l in txt.splitlines() if l.strip()])
        t2_paras.append(clean)
    texto_2_content = "\n\n".join(t2_paras)

    # 3. Extract text from columns across pages 3 to 19 (indices 2 to 18)
    all_col_text = []
    for pno in range(2, 19):
        page = pdoc[pno]
        blocks = page.get_text('blocks')
        valid_blocks = []
        for b in blocks:
            txt = b[4].strip()
            if 'PMRP' in txt or 'pcimarkpci' in txt or 'pciconcursos' in txt or 'CONCURSO PÚBLICO' in txt:
                continue
            if b[1] > 815:
                continue
            # Also skip shared text blocks from left column of p3 and p4 to not mix with questions
            if pno == 2 and b[0] < 300 and b[1] <= 680:
                continue
            if pno == 3 and b[0] < 300 and 210 <= b[1] <= 575:
                continue
            # Skip subject headers:
            headers_list = [
                'CONHECIMENTOS GERAIS', 'Língua Portuguesa', 'Raciocínio Lógico', 
                'CONHECIMENTOS ESPECÍFICOS', 'Matemática Financeira', 'Finanças Públicas',
                'Direito Civil', 'Direito Penal', 'Direito Tributário',
                'Direito Constitucional', 'Direito Administrativo', 'Legislação Tributária Municipal',
                'Contabilidade Geral e Avançada', 'Contabilidade de Custos', 'Auditoria', 
                'Contabilidade Pública', 'RASCUNHO'
            ]
            if txt in headers_list:
                continue
            valid_blocks.append(b)

        left = [b for b in valid_blocks if b[0] < 300]
        right = [b for b in valid_blocks if b[0] >= 300]
        left.sort(key=lambda b: b[1])
        right.sort(key=lambda b: b[1])
        for b in left:
            all_col_text.append((pno + 1, b[4]))
        for b in right:
            all_col_text.append((pno + 1, b[4]))

    combined = ''
    for pno, txt in all_col_text:
        combined += f'\n[PAGE_{pno}]\n' + txt

    # Split into questions 01. to 80.
    q_splits = re.split(r'\n(?:\[PAGE_\d+\]\n)?\s*(\d{2})\.\s+', combined)

    disciplinas = {
        (1, 10): "Língua Portuguesa",
        (11, 20): "Raciocínio Lógico",
        (21, 25): "Matemática Financeira",
        (26, 28): "Finanças Públicas",
        (29, 30): "Direito Civil",
        (31, 32): "Direito Penal",
        (33, 45): "Direito Tributário",
        (46, 50): "Direito Constitucional",
        (51, 55): "Direito Administrativo",
        (56, 60): "Legislação Tributária Municipal",
        (61, 66): "Contabilidade Geral e Avançada",
        (67, 70): "Contabilidade de Custos",
        (71, 80): "Auditoria"
    }

    def get_disciplina(num):
        for (r_start, r_end), disc in disciplinas.items():
            if r_start <= num <= r_end:
                return disc
        return "Conhecimentos Específicos"

    questoes_list = []

    for i in range(1, len(q_splits), 2):
        q_num = int(q_splits[i])
        raw_body = q_splits[i+1]

        # Find page number
        page_matches = re.findall(r'\[PAGE_(\d+)\]', raw_body)
        origin_page = int(page_matches[0]) if page_matches else 3
        # If no page match inside raw_body, look backward in combined
        if not page_matches:
            # find where this question was in combined
            pos = combined.find(f'{q_num:02d}.')
            prior = combined[:pos]
            last_p = re.findall(r'\[PAGE_(\d+)\]', prior)
            origin_page = int(last_p[-1]) if last_p else 3

        # Clean PAGE tags from text
        clean_body = re.sub(r'\[PAGE_\d+\]\n?', '', raw_body).strip()

        # Split into statement and alternatives (A) to (E)
        opt_matches = list(re.finditer(r'(?:^|\n)\s*\(([A-E])\)[ \t]*', clean_body))
        assert len(opt_matches) == 5, f"Q{q_num} does not have 5 alternatives, found {len(opt_matches)}"

        enunciado = clean_body[:opt_matches[0].start()].strip()
        # Clean newlines and hyphens in enunciado
        # Replace line breaks that don't look like intentional paragraphs
        enunciado_paras = [p.strip() for p in enunciado.split('\n\n') if p.strip()]
        clean_enunciado = "\n\n".join([" ".join([l.strip() for l in p.splitlines() if l.strip()]) for p in enunciado_paras])
        clean_enunciado = clean_enunciado.replace('- ', '').replace('-\n', '')

        # Alternatives
        alternativas = []
        for j in range(5):
            opt_id = opt_matches[j].group(1)
            start_idx = opt_matches[j].end()
            end_idx = opt_matches[j+1].start() if j < 4 else len(clean_body)
            opt_text = clean_body[start_idx:end_idx].strip()
            # Clean internal newlines
            opt_text = " ".join([l.strip() for l in opt_text.splitlines() if l.strip()])
            opt_text = opt_text.replace('- ', '')
            alternativas.append({
                "id": opt_id,
                "text": opt_text
            })

        q_id = f"vunesp-2014-pmrp-auditor-fiscal-tributario-q{q_num:02d}"
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
                "paginaOrigem": origin_page
            }
        }

        # Shared texts
        if 1 <= q_num <= 5:
            q_item["textoCompartilhado"] = {
                "id": "vunesp-2014-pmrp-texto-01",
                "title": "Texto 1 (questões 01 a 05) - Arthur Schopenhauer",
                "content": texto_1_content
            }
        elif 6 <= q_num <= 10:
            q_item["textoCompartilhado"] = {
                "id": "vunesp-2014-pmrp-texto-02",
                "title": "Texto 2 (questões 06 a 10) - Carlos Drummond de Andrade",
                "content": texto_2_content
            }

        # Images and diagrams
        if q_num == 12:
            q_item["imagens"] = ["/questoes/prova_objetiva_auditor/q12_diagrama.png"]
            q_item["enunciado"] = clean_enunciado.replace(
                "intersecções.",
                "intersecções.\n\n![Diagrama de Conjuntos](/questoes/prova_objetiva_auditor/q12_diagrama.png)"
            )
        elif q_num == 17:
            q_item["imagens"] = [
                "/questoes/prova_objetiva_auditor/q17_enunciado.png",
                "/questoes/prova_objetiva_auditor/q17_alternativa_a.png",
                "/questoes/prova_objetiva_auditor/q17_alternativa_b.png",
                "/questoes/prova_objetiva_auditor/q17_alternativa_c.png",
                "/questoes/prova_objetiva_auditor/q17_alternativa_d.png",
                "/questoes/prova_objetiva_auditor/q17_alternativa_e.png"
            ]
            q_item["enunciado"] = clean_enunciado.replace(
                "permanece constante.",
                "permanece constante.\n\n![Sequência de Figuras](/questoes/prova_objetiva_auditor/q17_enunciado.png)"
            )
            for opt in q_item["alternativas"]:
                opt_l = opt["id"].lower()
                opt["text"] = f"![Figura ({opt['id']})](/questoes/prova_objetiva_auditor/q17_alternativa_{opt_l}.png)"
        elif q_num == 24:
            q_item["imagens"] = ["/questoes/prova_objetiva_auditor/q24_tabela.png"]
            tabela_md = (
                "\n\n| Parcela | Valor da parcela | Amortização | Juros | Saldo devedor |\n"
                "| :---: | :---: | :---: | :---: | :---: |\n"
                "| 0 | ------- | ------- | ------- | R$ 120.000,00 |\n"
                "| 1 | R$ 1.200,00 | | | |\n"
                "| 2 | | | | |\n"
                "| 3 | | | | |\n"
                "| 4 | | | | |\n"
                "| 5 | | | | |\n"
                "| 6 | ------- | | | |\n\n"
                "![Tabela de Amortização](/questoes/prova_objetiva_auditor/q24_tabela.png)"
            )
            q_item["enunciado"] = clean_enunciado + tabela_md
        elif q_num == 25:
            q_item["imagens"] = ["/questoes/prova_objetiva_auditor/q25_tabela.png"]
            tabela_md = (
                "\n\n| Mês | Fluxo de caixa |\n"
                "| :---: | :---: |\n"
                "| 0 | –2.300 |\n"
                "| 1 | |\n"
                "| 2 | 1.210 |\n"
                "| 3 | 1.331 |\n\n"
                "![Fluxo de Caixa](/questoes/prova_objetiva_auditor/q25_tabela.png)"
            )
            q_item["enunciado"] = clean_enunciado + tabela_md
        elif q_num == 65:
            tabela_md = (
                "\n\n| Item | Valor (R$) |\n"
                "| :--- | :---: |\n"
                "| Aumento de Contas a Pagar | 100.000,00 |\n"
                "| Lucro Líquido do Exercício | 480.000,00 |\n"
                "| Aumento de Fornecedores | 20.000,00 |\n"
                "| Despesas de Depreciação do Imobilizado | 170.000,00 |\n"
                "| Aumento de Recebíveis | 60.000,00 |\n"
                "| Diminuição dos Estoques | 50.000,00 |\n"
                "| Resultado Negativo da Equivalência Patrimonial | 110.000,00 |\n"
            )
            q_item["enunciado"] = clean_enunciado + tabela_md

        questoes_list.append(q_item)

    assert len(questoes_list) == 80, f"Expected 80 questions, got {len(questoes_list)}"

    exam_doc = {
        "schemaVersion": "2.0",
        "exam": {
            "id": "vunesp-2014-pmrp-auditor-fiscal-tributario",
            "titulo": "Concurso Público PMRP - Auditor Fiscal Tributário Municipal (Código 001)",
            "orgao": "Prefeitura Municipal de Ribeirão Preto (PMRP)",
            "banca": "Fundação VUNESP",
            "cargo": "Auditor Fiscal Tributário Municipal",
            "codigoCargo": "001",
            "ano": 2014,
            "edital": "Edital PMRP1407",
            "caderno": "001. PROVA OBJETIVA",
            "turno": "integral",
            "formatoQuestoes": "multipla_escolha_5",
            "totalQuestoes": 80,
            "totalAnuladas": 0,
            "homologado": True,
            "auditTrail": {
                "arquivoProvaPdf": "prova_objetiva_auditor.pdf",
                "arquivoGabaritoPdf": "gabarito_prova_objetiva_auditor.pdf",
                "secaoGabarito": "001. PROVA OBJETIVA - Auditor Fiscal Tributário Municipal",
                "paginaGabarito": 1,
                "tipoGabarito": "definitivo",
                "statusAuditoria": "fidelidade_documental_aprovada_gabarito_definitivo",
                "responsavelAuditoria": "Antigravity AI Agent",
                "dataAuditoria": "2026-11-04"
            }
        },
        "questoes": questoes_list
    }

    out_path = 'src/data/imported/prova_objetiva_auditor.json'
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(exam_doc, f, ensure_ascii=False, indent=2)

    print(f"Successfully generated {out_path} with {len(questoes_list)} questions!")

if __name__ == '__main__':
    build_prova_objetiva_auditor()
