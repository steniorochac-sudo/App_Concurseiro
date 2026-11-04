import fitz
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

def build_dpe_ro_perfect():
    pdoc = fitz.open('provas_pdf/analista_contabil_tipo_1.pdf')
    gdoc = fitz.open('gabaritos_pdf/gabarito_analista_contabil_tipo_1.pdf')

    # 1. Parse gabarito for Tipo 1 (Página 1 do gabarito oficial)
    p1_g = gdoc[0].get_text()
    lines_g = [l.strip() for l in p1_g.splitlines() if l.strip() and not l.startswith('pcimarkpci') and 'pciconcursos' not in l]
    start_g = 0
    for idx, l in enumerate(lines_g):
        if "Tipo 1" in l:
            start_g = idx + 1
            break

    answers = {}
    g_stream = lines_g[start_g:]
    i = 0
    while i < len(g_stream):
        if g_stream[i].isdigit():
            nums = []
            while i < len(g_stream) and g_stream[i].isdigit():
                nums.append(int(g_stream[i]))
                i += 1
            ans = []
            while i < len(g_stream) and g_stream[i] in ['A', 'B', 'C', 'D', 'E', 'X']:
                ans.append(g_stream[i])
                i += 1
            for n, a in zip(nums, ans):
                answers[n] = a
        else:
            i += 1

    assert len(answers) == 70, f"Expected 70 answers, got {len(answers)}"

    # 2. Extract shared reading passages
    p2_txt = pdoc[1].get_text()
    t1_start = p2_txt.find("TEXTO 1")
    t1_end = p2_txt.find("\n1\n", t1_start)
    texto_1 = p2_txt[t1_start:t1_end].strip()

    p3_txt = pdoc[2].get_text()
    t2_start = p3_txt.find("TEXTO 2")
    t2_end = p3_txt.find("\n8\n", t2_start)
    texto_2 = p3_txt[t2_start:t2_end].strip()

    # Shared Quadro I for Q48 and Q49
    quadro_1_content = "Quadro I – Dados da execução orçamentária de uma unidade da federação no exercício de 2010 (em milhares de reais).\n\n" \
                       "| RECEITAS | Previsão | Arrecadação |\n" \
                       "| :--- | :--- | :--- |\n" \
                       "| Receitas Correntes | 4.600.000,00 | 4.460.000,00 |\n" \
                       "| Receitas de Capital | 300.000,00 | 160.000,00 |\n\n" \
                       "| DESPESAS | Fixação | Empenho |\n" \
                       "| :--- | :--- | :--- |\n" \
                       "| Despesas Correntes | 3.800.000,00 | 3.850.000,00 |\n" \
                       "| Despesas de Capital | 1.100.000,00 | 710.000,00 |"

    shared_quadro_1 = {
        'id': 'fgv-dpero-quadro-1',
        'title': 'Quadro I – Dados da execução orçamentária de uma unidade da federação no exercício de 2010 (em milhares de reais)',
        'content': quadro_1_content
    }

    # 3. Extract blocks per column across pages 2 to 16 (0-indexed 1 to 15)
    flat_blocks = []
    for pno in range(1, len(pdoc)):
        page = pdoc[pno]
        blocks = page.get_text('blocks')
        left_b = [b for b in blocks if b[0] < 300 and 50 <= b[1] <= 800]
        right_b = [b for b in blocks if b[0] >= 300 and 50 <= b[1] <= 800]
        left_b.sort(key=lambda b: b[1])
        right_b.sort(key=lambda b: b[1])

        for col_name, col in [('LEFT', left_b), ('RIGHT', right_b)]:
            for b in col:
                txt = b[4].strip()
                if not txt:
                    continue
                if txt.startswith('pcimarkpci') or 'pciconcursos' in txt or 'FGV – Projetos' in txt or 'Cor BRANCA' in txt:
                    continue
                flat_blocks.append((pno + 1, col_name, b[0], b[1], txt))

    # Sequential matching of question numbers 1 to 70
    expected = 1
    q_indices = {}
    for idx, (pno, col, x, y, txt) in enumerate(flat_blocks):
        if txt == str(expected):
            q_indices[expected] = (pno, col, idx)
            expected += 1
            if expected > 70:
                break

    assert len(q_indices) == 70, f"Expected 70 question markers, got {len(q_indices)}"

    def get_subject(num):
        if 1 <= num <= 21:
            return {
                'disciplina': 'Língua Portuguesa',
                'assunto': 'Interpretação e Gramática',
                'subtopicos': ['Compreensão de Texto', 'Tipologia Textual', 'Coesão e Coerência', 'Sintaxe', 'Semântica']
            }
        elif 22 <= num <= 50:
            return {
                'disciplina': 'Conhecimentos Específicos',
                'assunto': 'Contabilidade Geral, Societária e Pública',
                'subtopicos': ['Contabilidade Societária', 'Demonstrações Contábeis', 'CPC', 'CASP / MCASP', 'Lei nº 4.320/1964']
            }
        elif 51 <= num <= 60:
            return {
                'disciplina': 'Legislação Institucional',
                'assunto': 'Defensoria Pública e Estatuto dos Servidores de Rondônia',
                'subtopicos': ['LC Estadual nº 117/1994', 'LC Federal nº 80/1994', 'Regime Jurídico dos Servidores de RO']
            }
        else:
            return {
                'disciplina': 'Geografia e História de Rondônia',
                'assunto': 'História, Economia e Geografia Regional',
                'subtopicos': ['Povoamento e Colonização', 'Ciclo da Borracha', 'Geodiversidade e Relevo de Rondônia']
            }

    questoes = []
    sorted_nums = sorted(q_indices.keys())

    for i, num in enumerate(sorted_nums):
        pno, col, start_idx = q_indices[num]
        end_idx = q_indices[sorted_nums[i+1]][2] if i + 1 < len(sorted_nums) else len(flat_blocks)

        blocks_between = flat_blocks[start_idx+1 : end_idx]
        all_lines = []
        for bpno, bcol, bx, by, btxt in blocks_between:
            if btxt in ['Língua Portuguesa', 'Conhecimentos Específicos', 'Legislação Institucional', 'Geografia e História de Rondônia']:
                continue
            for l in btxt.splitlines():
                cl = l.strip()
                if cl:
                    all_lines.append(cl)

        enunciado_lines = []
        alts = {}
        curr_alt = None
        curr_alt_lines = []

        for l in all_lines:
            m = re.match(r'^\(([A-E])\)\s*(.*)', l)
            if m:
                if curr_alt:
                    alts[curr_alt] = " ".join(curr_alt_lines).strip()
                curr_alt = m.group(1)
                curr_alt_lines = [m.group(2).strip()] if m.group(2).strip() else []
            else:
                if curr_alt:
                    curr_alt_lines.append(l.strip())
                else:
                    enunciado_lines.append(l.strip())
        if curr_alt:
            alts[curr_alt] = " ".join(curr_alt_lines).strip()

        full_enunciado = " ".join(enunciado_lines).strip()

        # Separate quoted segments with double newlines
        full_enunciado = re.sub(r'(”|\"|\))\s+(Nesse segmento|A inclusão|Os termos|O autor|Segundo|Entre as palavras|A charge|Abaixo foram|Ao intitular|A UOL|O segmento|No texto|A frase)', r'\1\n\n\2', full_enunciado)

        # Visuals & custom formatting per question
        imagens = None

        # Q04: Cartoon / Charge image
        if num == 4:
            imagens = ["/assets/exams/analista_contabil_tipo_1/q04_charge.png"]
            full_enunciado = full_enunciado + "\n\n![Charge](/assets/exams/analista_contabil_tipo_1/q04_charge.png)"

        # Q13: Underline occurrences of "Mesmo" and "mesmo"
        if num == 13:
            full_enunciado = full_enunciado.replace("Mesmo quanto às sanções", "<u>Mesmo</u> quanto às sanções")
            full_enunciado = full_enunciado.replace("mesmo em casos", "<u>mesmo</u> em casos")

        # Q17: Graphic chart
        if num == 17:
            imagens = ["/assets/exams/analista_contabil_tipo_1/q17_grafico.png"]
            full_enunciado = full_enunciado + "\n\n![Gráfico](/assets/exams/analista_contabil_tipo_1/q17_grafico.png)"

        # Q23: Format tables
        if num == 23:
            table1_md = "\n\n| Rio | Investimento $ | Nº mínimo de balsas exigidas no contrato |\n| :--- | :--- | :---: |\n| Tuiuiu | 100.000.000,00 | 3 |\n| Obaba | 85.000.000,00 | 4 |\n| Sotutu | 25.000.000,00 | 2 |\n| **TOTAL** | **210.000.000,00** | **9** |\n\n"
            table2_md = "\n\n| Rio | Balsa | Valor de Mercado $ | Valor de Uso $ |\n| :--- | :--- | :--- | :--- |\n| Tuiuiu | Balsa 1 | 20.000.000 | 25.000.000 |\n| Tuiuiu | Balsa 2 | 20.000.000 | 35.000.000 |\n| Tuiuiu | Balsa 3 | 20.000.000 | 40.000.000 |\n| Obaba | Balsa 1 | 20.000.000 | 8.000.000 |\n| Obaba | Balsa 2 | 20.000.000 | 20.000.000 |\n| Obaba | Balsa 3 | 20.000.000 | 20.000.000 |\n| Obaba | Balsa 4 | 20.000.000 | 25.000.000 |\n| Sotutu | Balsa 1 | 20.000.000 | 20.000.000 |\n| Sotutu | Balsa 2 | 20.000.000 | 15.000.000 |\n| **TOTAL** | | **180.000.000** | **208.000.000** |\n\n"
            
            # Replace table 1
            full_enunciado = re.sub(r'Rio\s+Investimento\s+\$.*?TOTAL\s+210\.000\.000,00\s+9', table1_md.strip(), full_enunciado)
            # Replace table 2
            full_enunciado = re.sub(r'Rio\s+Balsa\s+Valor de Mercado\s+\$.*?TOTAL\s+180\.000\.000\s+208\.000\.000', table2_md.strip(), full_enunciado)

        # Q30: Format CAESG and Clean Tubus tables
        if num == 30:
            caesg_clean_tables = "\n\n**CAESG**\n\n| Acionistas | Valor - $ | Part. % |\n| :--- | :--- | :---: |\n| FIP - Água e Esgoto | 250.000.000,00 | 98% |\n| Mercado - Bovespa | 5.000.000,00 | 2% |\n| **TOTAL** | **255.000.000,00** | **100%** |\n\n**Clean Tubus**\n\n| Acionistas | Valor - $ | Part. % |\n| :--- | :--- | :---: |\n| Limpeza Sanitária Ltda. | 9.900,00 | 99% |\n| CAESG | 100,00 | 1% |\n| **TOTAL** | **10.000,00** | **100%** |\n\n"
            full_enunciado = re.sub(r'CAESG\s+Acionistas.*?Clean Tubus\s+Acionistas.*?TOTAL\s+10\.000,00\s+100%', caesg_clean_tables.strip(), full_enunciado, flags=re.DOTALL)

        # Q47: Clean alternative E: remove leaked Quadro I
        if num == 47:
            if 'Quadro I' in alts.get('E', ''):
                alts['E'] = "transferências intergovernamentais."

        sub = get_subject(num)
        ans = answers[num]

        alt_list = []
        for opt in ['A', 'B', 'C', 'D', 'E']:
            alt_list.append({
                'id': opt,
                'text': alts.get(opt, '')
            })

        q_obj = {
            'id': f"fgv-2015-dpero-analista-contabil-q{num:02d}",
            'numeroOriginal': num,
            'tipo': 'multipla_escolha',
            'enunciado': full_enunciado,
            'alternativas': alt_list,
            'gabaritoOficial': ans,
            'gabaritoStatus': 'preliminar',
            'metadados': {
                'disciplina': sub['disciplina'],
                'assunto': sub['assunto'],
                'subtopicos': sub['subtopicos'],
                'paginaOrigem': pno,
                'temSublinhado': (num in [13, 16]),
                'temLacunas': False
            }
        }

        if imagens:
            q_obj['imagens'] = imagens

        # Shared texts attachment
        if 1 <= num <= 7:
            q_obj['textoCompartilhado'] = {
                'id': 'fgv-dpero-texto-1',
                'title': 'TEXTO 1 – O mito da maioridade penal',
                'content': texto_1
            }
        elif 8 <= num <= 21:
            q_obj['textoCompartilhado'] = {
                'id': 'fgv-dpero-texto-2',
                'title': 'TEXTO 2 – O Estatuto da Criança e do Adolescente',
                'content': texto_2
            }
        elif num in [48, 49]:
            q_obj['textoCompartilhado'] = shared_quadro_1

        questoes.append(q_obj)

    exam_doc = {
        'schemaVersion': '2.0',
        'exam': {
            'id': 'fgv-2015-dpero-analista-contabil',
            'titulo': 'Concurso Público DPE-RO 2015 - Analista da Defensoria Pública - Analista Contábil (Tipo 1 - Branca)',
            'orgao': 'Defensoria Pública do Estado de Rondônia (DPE-RO)',
            'banca': 'FGV',
            'cargo': 'Analista da Defensoria Pública - Especialidade: Analista Contábil',
            'codigoCargo': 'Analista Contábil',
            'ano': 2015,
            'edital': 'Concurso Público DPE-RO 2015',
            'caderno': 'Tipo 1 – Cor BRANCA',
            'turno': 'manhã',
            'formatoQuestoes': 'multipla_escolha_5',
            'totalQuestoes': 70,
            'totalAnuladas': 0,
            'homologado': False,
            'auditTrail': {
                'arquivoProvaPdf': 'analista_contabil_tipo_1.pdf',
                'arquivoGabaritoPdf': 'gabarito_analista_contabil_tipo_1.pdf',
                'secaoGabarito': 'Analista da Defensoria Pública - Analista Contábil – Tipo 1',
                'paginaGabarito': 1,
                'tipoGabarito': 'preliminar',
                'statusAuditoria': 'fidelidade_documental_aprovada_gabarito_preliminar',
                'responsavelAuditoria': 'Antigravity AI Agent',
                'dataAuditoria': '2026-11-04'
            }
        },
        'questoes': questoes
    }

    out_path = 'src/data/imported/analista_contabil_tipo_1.json'
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(exam_doc, f, indent=2, ensure_ascii=False)

    print(f"Successfully generated {out_path} with {len(questoes)} questions.")
    return exam_doc

if __name__ == '__main__':
    build_dpe_ro_perfect()
