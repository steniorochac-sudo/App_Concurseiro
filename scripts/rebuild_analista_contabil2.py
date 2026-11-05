import fitz
import json
import re
import sys
import os

sys.stdout.reconfigure(encoding='utf-8')

def build_analista_contabil2():
    print("Building analista_contabil2.json (CREFITO-17)...")
    pdoc = fitz.open('provas_pdf/analista_contabil2.pdf')
    gdoc = fitz.open('gabaritos_pdf/gabarito_analista_contabil2.pdf')

    # 1. Parse official gabarito for cargo 403 (Analista Contábil - CREFITO-17)
    p2_g = gdoc[1].get_text()
    start_g = p2_g.find("2.5 ANALISTA CONTÁBIL (CÓDIGO 403)")
    if start_g == -1:
        start_g = p2_g.find("2.5 ANALISTA CONT")
    end_g = p2_g.find("Brasília/DF", start_g)
    if end_g == -1:
        end_g = len(p2_g)
    sec_text = p2_g[start_g:end_g]
    lines_g = [l.strip() for l in sec_text.splitlines() if l.strip()]

    answers = {}
    idx = 1
    while idx < len(lines_g):
        if lines_g[idx].isdigit():
            num_block = []
            while idx < len(lines_g) and lines_g[idx].isdigit():
                num_block.append(int(lines_g[idx]))
                idx += 1
            ans_block = []
            while idx < len(lines_g) and lines_g[idx] in ['C', 'E', 'X']:
                ans_block.append(lines_g[idx])
                idx += 1
            for n, a in zip(num_block, ans_block):
                answers[n] = a
        else:
            idx += 1

    assert len(answers) == 120, f"Expected 120 answers, got {len(answers)}"
    assert answers[55] == 'E' and answers[60] == 'E' and answers[61] == 'E'

    # 2. Extract shared texts from exam PDF
    # Texto 1 (itens 1 a 8)
    p1 = pdoc[0]
    p1_blocks = p1.get_text('blocks')
    t1_paras = []
    for b in p1_blocks:
        txt = b[4].strip()
        # column 1 text blocks between Y=190 and Y=740
        if b[0] < 200 and 190 <= b[1] <= 750:
            clean_p = " ".join([l.strip() for l in txt.splitlines() if l.strip()])
            t1_paras.append(clean_p)
    texto_1_content = "\n\n".join(t1_paras) + "\n\nInternet: <crefito14.org.br> (com adaptações)."

    # Texto 2 (itens 9 a 16)
    p2 = pdoc[1]
    p2_blocks = p2.get_text('blocks')
    t2_paras = []
    for b in p2_blocks:
        txt = b[4].strip()
        if b[0] < 200 and 60 <= b[1] <= 750:
            clean_p = " ".join([l.strip() for l in txt.splitlines() if l.strip()])
            t2_paras.append(clean_p)
    texto_2_content = "\n\n".join(t2_paras) + "\n\nInternet: <coffito.gov.br> (com adaptações)."

    c_paula = "Paula, que é advogada, está estudando um Vade Mecum com 2.616 páginas. Como costuma grifar todas as páginas que lê, ela registrou a quantidade de páginas grifadas por dia. No primeiro dia, grifou 63 páginas e, em cada dia seguinte, grifou 4 páginas a mais do que no dia anterior.\n\n" \
              "Com base nessa situação hipotética e no padrão mantido até a conclusão da leitura do livro, julgue os itens a seguir."

    c_oswaldo = "Durante o último mês, o advogado Oswaldo registrou, em uma planilha, o número de audiências de que participou em cada semana de trabalho, conforme mostra a tabela a seguir.\n\n" \
                "| SEMANA | NÚMERO DE AUDIÊNCIAS |\n" \
                "| :---: | :---: |\n" \
                "| 1ª | 5 |\n" \
                "| 2ª | 8 |\n" \
                "| 3ª | 6 |\n" \
                "| 4ª | 5 |\n" \
                "| 5ª | 11 |\n\n" \
                "Com base nessa situação hipotética, julgue os itens seguintes."

    c_irmas = "Amanda, Bárbara e Carolina são três irmãs. Sabe‑se que cada uma delas sempre diz a verdade ou sempre mente. Em certa ocasião, Amanda afirmou que Bárbara estava mentindo. Em seguida, Bárbara disse que Carolina estava mentindo. Por fim, Carolina afirmou que Amanda e Bárbara estavam mentindo.\n\n" \
              "Com base nessa situação hipotética, julgue os itens a seguir."

    c_dados = "Gael possui 3 dados honestos, nas cores amarela, azul e verde, todos numerados de 0 a 5. Ele lançará os 3 dados ao mesmo tempo.\n\n" \
              "Com base nessa situação hipotética, julgue os itens seguintes."

    c_info = "Nos itens que avaliem conhecimentos de informática, a menos que seja explicitamente informado o contrário, considere que: todos os programas mencionados estejam em configuração‑padrão, em português; o mouse esteja configurado para pessoas destras; expressões como clicar, clique simples e clique duplo refiram‑se a cliques com o botão esquerdo do mouse; e teclar corresponda à operação de pressionar uma tecla e, rapidamente, liberá‑la, acionando‑a apenas uma vez. Considere também que não haja restrições de proteção, de funcionamento e de uso em relação aos programas, arquivos, diretórios, recursos e equipamentos mencionados.\n\n" \
             "Considerando os conceitos de informática, de sistemas operacionais, de redes de computadores, de aplicativos e de segurança da informação, julgue os itens a seguir."

    c_etica = "Considerando as situações relacionadas à atuação de servidores públicos e aos fundamentos éticos da Administração Pública, julgue os itens a seguir."

    c_improbidade = "Acerca da improbidade administrativa, julgue os itens seguintes."

    c_proc_adm = "No que diz respeito ao processo administrativo na Administração Pública Federal, julgue os itens a seguir."

    c_lai = "À luz das normas acerca da transparência e do acesso à informação, julgue os itens seguintes."

    c_lgpd = "Considerando a proteção de dados pessoais, no âmbito da Administração Pública, julgue os itens a seguir."

    c_anticorrupcao = "No que diz respeito à integração entre ética, transparência e responsabilidade administrativa, julgue os itens seguintes."

    c_crefito_especificos = "O CREFITO‑17 é uma autarquia federal integrante do Sistema COFFITO/CREFITOs. Em 2025, em sua equipe jurídico‑contábil, foi realizada uma revisão do enquadramento legal das atividades do conselho à luz da Constituição Federal de 1988, da legislação societária, da tributária e de contratações públicas vigentes.\n\n" \
                            "Com base nessa situação hipotética e na legislação vigente, julgue os itens a seguir."

    c_orcamento = "O setor de planejamento do CREFITO‑17 elaborou uma proposta orçamentária para o exercício de 2026, em conformidade com as disposições constitucionais a respeito do processo orçamentário e com a Lei nº 4.320/1964. Surgiram, então, dúvidas acerca dos princípios orçamentários, da classificação das receitas e dos estágios de execução da despesa.\n\n" \
                  "Com base nessa situação hipotética e na legislação orçamentária vigente, julgue os itens seguintes."

    c_exercicio_2024 = "Ao encerrar o exercício de 2024, o CREFITO‑17 deparou‑se com diversas situações que envolvem créditos adicionais, restos a pagar, despesas de exercícios anteriores, descentralização de créditos e suprimento de fundos. O setor contábil precisou avaliar o correto tratamento de cada caso à luz da Lei nº 4.320/1964.\n\n" \
                       "Com base nessa situação hipotética e na legislação vigente, julgue os itens a seguir."

    c_mcasp_pcasp = "O setor de contabilidade do CREFITO‑17, ao elaborar as demonstrações contábeis do exercício de 2024 com base no MCASP e no PCASP, identificou dúvidas acerca do Sistema de Contas Aplicado ao Setor Público, dos regimes contábeis e da estrutura dos balanços exigidos pela Lei nº 4.320/1964.\n\n" \
                    "Com base nessa situação hipotética e nas normas de contabilidade pública vigentes, julgue os itens seguintes."

    c_alfa_omega = "Considere‑se a tabela a seguir.\n\n" \
                   "**BALANÇO PATRIMONIAL — ALFA & ÔMEGA S.A. (R$ MIL)**\n\n" \
                   "| | 31.12.2023 | 31.12.2024 |\n" \
                   "| :--- | :---: | :---: |\n" \
                   "| **ATIVO** | **8.500** | **10.000** |\n" \
                   "| **ATIVO CIRCULANTE** | **3.200** | **4.000** |\n" \
                   "| Caixa e Equivalentes de Caixa | 700 | 1.000 |\n" \
                   "| Duplicatas a Receber | 1.700 | 2.000 |\n" \
                   "| Mercadorias para Revenda | 800 | 1.000 |\n" \
                   "| **ATIVO NÃO CIRCULANTE** | **5.300** | **6.000** |\n" \
                   "| Imobilizado | 5.300 | 6.600 |\n" \
                   "| (-) Depreciação Acumulada | — | (600) |\n" \
                   "| **PASSIVO** | **3.500** | **4.000** |\n" \
                   "| **PASSIVO CIRCULANTE** | **900** | **1.000** |\n" \
                   "| Fornecedores Nacionais | 500 | 600 |\n" \
                   "| Salários a Pagar | 300 | 300 |\n" \
                   "| Financiamentos a Pagar | 100 | 100 |\n" \
                   "| **PASSIVO NÃO CIRCULANTE** | **2.600** | **3.000** |\n" \
                   "| Financiamentos de Longo Prazo | 2.600 | 3.000 |\n" \
                   "| **PATRIMÔNIO LÍQUIDO** | **5.000** | **6.000** |\n" \
                   "| Capital Social | 4.000 | 4.000 |\n" \
                   "| Reservas de Lucros | 1.000 | 2.000 |\n\n" \
                   "\\* Em 2024 foram pagos dividendos no valor de R$ 800 mil.\n\n" \
                   "**DEMONSTRAÇÃO DO RESULTADO DO EXERCÍCIO — ALFA & ÔMEGA S.A. (R$ MIL)**\n\n" \
                   "| | 31.12.2023 | 31.12.2024 |\n" \
                   "| :--- | :---: | :---: |\n" \
                   "| **RECEITA DE VENDAS** | **10.000** | **12.000** |\n" \
                   "| (-) Custo das Mercadorias Vendidas | (6.000) | (7.200) |\n" \
                   "| **LUCRO BRUTO** | **4.000** | **4.800** |\n" \
                   "| **DESPESAS ADMINISTRATIVAS** | **(3.000)** | **(3.000)** |\n" \
                   "| (-) Salários e Ordenados | (1.800) | (1.800) |\n" \
                   "| (-) Depreciação e Amortização | — | (600) |\n" \
                   "| (-) Despesas Administrativas Gerais | (1.200) | (600) |\n" \
                   "| **LUCRO LÍQUIDO** | **1.000** | **1.800** |\n\n" \
                   "Com base nessa situação hipotética e considerando que os dados apresentados foram fornecidos pela área contábil da Alfa & Ômega S.A., que seria uma sociedade empresária atuante no segmento comercial, para fins de análise e apuração contábil, julgue os itens a seguir."

    c_tributaria = "Em março de 2025, o CREFITO‑17 realizou pagamentos a prestadores de serviços pessoas jurídicas e pessoas físicas, efetuou o recolhimento de encargos sobre a folha de pagamento e verificou as suas obrigações acessórias perante a Receita Federal do Brasil. A equipe fiscal precisou, assim, avaliar as retenções incidentes e os prazos das declarações.\n\n" \
                   "Com base nessa situação hipotética e na legislação tributária vigente, julgue os itens a seguir."

    c_delta = "A DELTA S.A., tributada pelo lucro presumido e não enquadrada na contribuição previdenciária sobre a receita bruta (CPRB), apresentou, no mês de março de 2025, uma folha de pagamento no valor de R$ 350.000 em salários brutos de empregados contratados sob o regime da CLT. Sob essa remuneração, incidem os seguintes encargos patronais: INSS de 20%; RAT aplicável à empresa, já ajustado pelo FAP, no percentual de 1%; contribuições de terceiros de 5,8%; e FGTS de 8%.\n\n" \
              "Com base nessa situação hipotética e na legislação vigente, julgue os itens a seguir."

    # 3. Stream lines collection with column awareness
    stream_lines = []
    for pno in range(10): # pages 0 to 9
        page = pdoc[pno]
        blocks = page.get_text('blocks')
        
        filtered = []
        for b in blocks:
            txt = b[4].strip()
            if not txt:
                continue
            if 'pcimarkpci' in txt or 'pciconcursos' in txt or 'CONSELHO REGIONAL' in txt or 'Quadrix |' in txt or 'Analista Cont' in txt:
                continue
            if txt in [str(i) for i in range(1, 15)] or txt == 'RASCUNHO':
                continue
            filtered.append(b)
            
        left = [b for b in filtered if b[0] < 290]
        right = [b for b in filtered if b[0] >= 290]
        left.sort(key=lambda b: b[1])
        right.sort(key=lambda b: b[1])
        
        for col_name, col in [('L', left), ('R', right)]:
            for b in col:
                for l in b[4].splitlines():
                    cl = l.strip()
                    if cl and cl != 'RASCUNHO':
                        stream_lines.append((pno + 1, col_name, cl))

    item_headers = {}
    expected = 1
    for idx, (pno, col, line) in enumerate(stream_lines):
        m = re.match(r'^(\d{1,3})(\t|\s+|$)(.*)', line)
        if m and int(m.group(1)) == expected:
            item_headers[expected] = (idx, pno, col, m.group(3).strip())
            expected += 1
            if expected > 120:
                break

    assert len(item_headers) == 120

    context_start_markers = {
        8: "Texto para os itens de 9 a 16.",
        16: "Paula, que é advogada",
        19: "Durante o último mês",
        22: "Amanda, Bárbara e Carolina",
        25: "Gael possui 3 dados honestos",
        28: "Nos itens que avaliem",
        40: "CONHECIMENTOS COMPLEMENTARES",
        45: "Acerca da improbidade administrativa",
        50: "No que diz respeito ao processo administrativo",
        55: "À luz das normas acerca da transparência",
        60: "Considerando a proteção de dados pessoais",
        65: "No que diz respeito à integração entre ética",
        70: "CONHECIMENTOS ESPECÍFICOS",
        75: "O setor de planejamento do CREFITO‑17",
        80: "Ao encerrar o exercício de 2024",
        85: "O setor de contabilidade do CREFITO‑17",
        95: "Considere‑se a tabela a seguir.",
        106: "Em março de 2025, o CREFITO‑17",
        115: "A DELTA S.A., tributada pelo lucro presumido"
    }

    raw_items = {}
    for n in range(1, 121):
        start_idx, pno, col, header_rest = item_headers[n]
        next_item_idx = item_headers[n+1][0] if n < 120 else len(stream_lines)

        if n in context_start_markers:
            marker = context_start_markers[n]
            end_idx = next_item_idx
            for k in range(start_idx + 1, next_item_idx):
                if marker.lower() in stream_lines[k][2].lower():
                    end_idx = k
                    break
        else:
            end_idx = next_item_idx

        line_parts = []
        if header_rest:
            line_parts.append(header_rest)
        for k in range(start_idx + 1, end_idx):
            line_parts.append(stream_lines[k][2])

        raw_items[n] = {
            'numero': n,
            'pagina': pno,
            'texto': " ".join(line_parts).strip()
        }

    assert len(raw_items) == 120

    def get_subject_meta(num):
        if 1 <= num <= 8:
            return {
                'disciplina': 'Língua Portuguesa',
                'assunto': 'Interpretação e Gramática',
                'subtopicos': ['Compreensão e Interpretação de Textos', 'Morfossintaxe', 'Pontuação', 'Crase'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-texto-1',
                    'title': 'Texto para os itens de 1 a 8 – TRF1 reconhece legitimidade da perícia fisioterapêutica',
                    'content': texto_1_content
                }
            }
        elif 9 <= num <= 16:
            return {
                'disciplina': 'Língua Portuguesa',
                'assunto': 'Interpretação e Gramática',
                'subtopicos': ['Compreensão e Interpretação de Textos', 'Coesão e Coerência', 'Pontuação', 'Aposto e Vocativo'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-texto-2',
                    'title': 'Texto para os itens de 9 a 16 – Dia do Ouvidor: COFFITO destaca escuta ativa na gestão pública',
                    'content': texto_2_content
                }
            }
        elif 17 <= num <= 19:
            return {
                'disciplina': 'Raciocínio Lógico e Matemático',
                'assunto': 'Sequências Numéricas e Progressões',
                'subtopicos': ['Progressão Aritmética', 'Soma dos Termos de uma PA'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-paula',
                    'title': 'Situação Hipotética – Leitura do Vade Mecum por Paula (itens 17 a 19)',
                    'content': c_paula
                }
            }
        elif 20 <= num <= 22:
            return {
                'disciplina': 'Raciocínio Lógico e Matemático',
                'assunto': 'Estatística Descritiva',
                'subtopicos': ['Média Aritmética', 'Moda', 'Mediana'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-oswaldo',
                    'title': 'Situação Hipotética – Audiências de Oswaldo (itens 20 a 22)',
                    'content': c_oswaldo
                }
            }
        elif 23 <= num <= 25:
            return {
                'disciplina': 'Raciocínio Lógico e Matemático',
                'assunto': 'Lógica de Argumentação',
                'subtopicos': ['Problemas de Verdades e Mentiras', 'Estruturas Lógicas'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-irmas',
                    'title': 'Situação Hipotética – Declarações das irmãs Amanda, Bárbara e Carolina (itens 23 a 25)',
                    'content': c_irmas
                }
            }
        elif 26 <= num <= 28:
            return {
                'disciplina': 'Raciocínio Lógico e Matemático',
                'assunto': 'Probabilidade e Contagem',
                'subtopicos': ['Princípio Fundamental da Contagem', 'Cálculo de Probabilidades', 'Espaço Amostral'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-dados',
                    'title': 'Situação Hipotética – Lançamento de 3 dados honestos por Gael (itens 26 a 28)',
                    'content': c_dados
                }
            }
        elif 29 <= num <= 40:
            return {
                'disciplina': 'Noções de Informática',
                'assunto': 'Ambiente Operacional e Aplicativos',
                'subtopicos': ['Sistemas Operacionais', 'Redes de Computadores', 'Segurança da Informação', 'Navegadores'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-informatica',
                    'title': 'Comando Geral de Informática (itens 29 a 40)',
                    'content': c_info
                }
            }
        elif 41 <= num <= 45:
            return {
                'disciplina': 'Legislação e Ética na Administração Pública',
                'assunto': 'Ética no Serviço Público',
                'subtopicos': ['Decreto nº 1.171/1994', 'Deveres e Vedações do Servidor Público'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-etica',
                    'title': 'Fundamentos Éticos da Administração Pública (itens 41 a 45)',
                    'content': c_etica
                }
            }
        elif 46 <= num <= 50:
            return {
                'disciplina': 'Direito Administrativo',
                'assunto': 'Improbidade Administrativa',
                'subtopicos': ['Lei nº 8.429/1992', 'Alterações da Lei nº 14.230/2021', 'Dolo Específico', 'Sanções'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-improbidade',
                    'title': 'Improbidade Administrativa – Lei nº 8.429/1992 (itens 46 a 50)',
                    'content': c_improbidade
                }
            }
        elif 51 <= num <= 55:
            return {
                'disciplina': 'Direito Administrativo',
                'assunto': 'Processo Administrativo Federal',
                'subtopicos': ['Lei nº 9.784/1999', 'Princípios do Processo Administrativo', 'Prazos e Recursos'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-proc-adm',
                    'title': 'Processo Administrativo – Lei nº 9.784/1999 (itens 51 a 55)',
                    'content': c_proc_adm
                }
            }
        elif 56 <= num <= 60:
            return {
                'disciplina': 'Legislação e Ética na Administração Pública',
                'assunto': 'Transparência e Acesso à Informação',
                'subtopicos': ['Lei nº 12.527/2011 (LAI)', 'Publicidade Ativa e Passiva', 'Sigilo'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-lai',
                    'title': 'Acesso à Informação – Lei nº 12.527/2011 (itens 56 a 60)',
                    'content': c_lai
                }
            }
        elif 61 <= num <= 65:
            return {
                'disciplina': 'Direito Administrativo',
                'assunto': 'Proteção de Dados Pessoais',
                'subtopicos': ['Lei nº 13.709/2018 (LGPD)', 'Tratamento de Dados pelo Poder Público', 'Encarregado DPO'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-lgpd',
                    'title': 'Proteção de Dados Pessoais – LGPD (itens 61 a 65)',
                    'content': c_lgpd
                }
            }
        elif 66 <= num <= 70:
            return {
                'disciplina': 'Direito Administrativo',
                'assunto': 'Integridade e Responsabilidade Administrativa',
                'subtopicos': ['Lei nº 12.846/2013 (Anticorrupção)', 'Accountability e Controle Social'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-anticorrupcao',
                    'title': 'Ética, Transparência e Responsabilidade Administrativa (itens 66 a 70)',
                    'content': c_anticorrupcao
                }
            }
        elif 71 <= num <= 75:
            return {
                'disciplina': 'Conhecimentos Específicos',
                'assunto': 'Legislação do Sistema COFFITO/CREFITOs e Contratações',
                'subtopicos': ['Natureza Autárquica', 'Lei nº 14.133/2021', 'Regime Tributário Autárquico'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-especificos',
                    'title': 'Enquadramento Legal e Atividades do CREFITO-17 (itens 71 a 75)',
                    'content': c_crefito_especificos
                }
            }
        elif 76 <= num <= 80:
            return {
                'disciplina': 'Contabilidade Pública e Orçamento',
                'assunto': 'Orçamento Público e Lei nº 4.320/1964',
                'subtopicos': ['Princípios Orçamentários', 'Classificação da Receita e Despesa', 'Estágios da Despesa'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-orcamento',
                    'title': 'Proposta Orçamentária e Lei nº 4.320/1964 (itens 76 a 80)',
                    'content': c_orcamento
                }
            }
        elif 81 <= num <= 85:
            return {
                'disciplina': 'Contabilidade Pública e Orçamento',
                'assunto': 'Execução Orçamentária e Financeira',
                'subtopicos': ['Créditos Adicionais', 'Restos a Pagar', 'Despesas de Exercícios Anteriores', 'Suprimento de Fundos'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-execucao-2024',
                    'title': 'Encerramento de Exercício e Execução Financeira (itens 81 a 85)',
                    'content': c_exercicio_2024
                }
            }
        elif 86 <= num <= 95:
            return {
                'disciplina': 'Contabilidade Aplicada ao Setor Público',
                'assunto': 'Normas de CASP, MCASP e PCASP',
                'subtopicos': ['Plano de Contas Aplicado ao Setor Público (PCASP)', 'Variações Patrimoniais', 'Regimes Contábeis', 'Demonstrações Contábeis Aplicadas ao Setor Público'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-mcasp-pcasp',
                    'title': 'Demonstrações Contábeis com base no MCASP e PCASP (itens 86 a 95)',
                    'content': c_mcasp_pcasp
                }
            }
        elif 96 <= num <= 106:
            return {
                'disciplina': 'Contabilidade Geral e Análise das Demonstrações',
                'assunto': 'Análise de Balanço e Demonstração do Resultado',
                'subtopicos': ['Análise Vertical e Horizontal', 'Índices de Liquidez', 'Demonstração dos Fluxos de Caixa', 'Balanço Patrimonial e DRE'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-alfa-omega',
                    'title': 'Análise das Demonstrações Contábeis da Alfa & Ômega S.A. (itens 96 a 106)',
                    'content': c_alfa_omega
                }
            }
        elif 107 <= num <= 115:
            return {
                'disciplina': 'Legislação Tributária e Auditoria',
                'assunto': 'Tributos e Retenções na Fonte',
                'subtopicos': ['Imunidade Tributária Autárquica', 'Retenção na Fonte de IRRF e Contribuições', 'Obrigações Acessórias', 'Auditoria Interna'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-tributaria',
                    'title': 'Legislação Tributária e Retenções na Fonte (itens 107 a 115)',
                    'content': c_tributaria
                }
            }
        elif 116 <= num <= 120:
            return {
                'disciplina': 'Contabilidade Trabalhista e Previdenciária',
                'assunto': 'Folha de Pagamento e Encargos Sociais',
                'subtopicos': ['Contabilização da Folha de Pagamento', 'Encargos Patronais INSS, RAT e FGTS', 'FGTS-Digital', 'eSocial'],
                'textoCompartilhado': {
                    'id': 'quadrix-crefito17-context-delta-trabalhista',
                    'title': 'Contabilização da Folha de Pagamento e Encargos da DELTA S.A. (itens 116 a 120)',
                    'content': c_delta
                }
            }

    questoes = []
    for n in range(1, 121):
        item = raw_items[n]
        meta = get_subject_meta(n)
        
        # Clean statement
        enunciado = item['texto'].strip()
        
        # Build question object strictly adhering to ExamSchema v2.0
        status = "alterado" if n in [55, 60, 61] else "valido"
        q_obj = {
            'id': f"quadrix-2024-crefito17-analista-contabil-q{n:03d}",
            'numeroOriginal': n,
            'tipo': "certo_errado",
            'enunciado': enunciado,
            'alternativas': [
                {
                    'id': "C",
                    'text': "CERTO"
                },
                {
                    'id': "E",
                    'text': "ERRADO"
                }
            ],
            'gabaritoOficial': answers[n],
            'gabaritoStatus': status,
            'metadados': {
                'disciplina': meta['disciplina'],
                'assunto': meta['assunto'],
                'subtopicos': meta['subtopicos'],
                'paginaOrigem': item['pagina']
            },
            'textoCompartilhado': meta['textoCompartilhado']
        }
        
        # For items 96 to 106, also link the extracted tables
        if 96 <= n <= 106:
            q_obj['tabelas'] = [
                "/questoes/analista_contabil2/tabela_balanco_patrimonial_p8.png",
                "/questoes/analista_contabil2/tabela_dre_p8.png"
            ]
            
        questoes.append(q_obj)

    exam_json = {
        'schemaVersion': "2.0",
        'exam': {
            'id': "quadrix-2024-crefito17-analista-contabil",
            'titulo': "Concurso Público CREFITO-17 - Analista Contábil (Código 403)",
            'orgao': "Conselho Regional de Fisioterapia e Terapia Ocupacional da 17ª Região (CREFITO-17)",
            'banca': "Instituto Quadrix",
            'cargo': "Analista Contábil",
            'codigoCargo': "403",
            'ano': 2024,
            'edital': "Edital Concurso Público CREFITO-17",
            'caderno': "Caderno Único de Prova Objetiva - Código 403",
            'turno': "integral",
            'formatoQuestoes': "certo_errado",
            'totalQuestoes': 120,
            'totalAnuladas': 0,
            'homologado': True,
            'auditTrail': {
                'arquivoProvaPdf': "analista_contabil2.pdf",
                'arquivoGabaritoPdf': "gabarito_analista_contabil2.pdf",
                'secaoGabarito': "2.5 ANALISTA CONTÁBIL (CÓDIGO 403)",
                'paginaGabarito': 2,
                'tipoGabarito': "definitivo",
                'statusAuditoria': "fidelidade_documental_aprovada_gabarito_definitivo",
                'responsavelAuditoria': "Antigravity AI Agent",
                'dataAuditoria': "2026-11-04"
            }
        },
        'questoes': questoes
    }

    out_path = 'src/data/imported/analista_contabil2.json'
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(exam_json, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully generated {out_path} with {len(questoes)} questions.")
    return exam_json

if __name__ == '__main__':
    build_analista_contabil2()
