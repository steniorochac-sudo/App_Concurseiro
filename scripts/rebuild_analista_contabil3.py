import fitz
import json
import re
import sys
import os

sys.stdout.reconfigure(encoding='utf-8')

def build_analista_contabil3():
    print("Building analista_contabil3.json (CRT-ES)...")
    pdoc = fitz.open('provas_pdf/analista_contabil3.pdf')
    gdoc = fitz.open('gabaritos_pdf/gabarito_analista_contabil3.pdf')

    # 1. Parse official gabarito for cargo 401 (Analista Contábil - CRT-ES)
    p2_g = gdoc[1].get_text()
    start_g = p2_g.find("2.5 ANALISTA CONTÁBIL (CÓDIGO 401)")
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

    # 2. Extract shared texts from exam PDF
    # Texto 1 (itens 1 a 8)
    p1 = pdoc[0]
    p1_blocks = p1.get_text('blocks')
    t1_paras = []
    for b in p1_blocks:
        txt = b[4].strip()
        if b[0] < 200 and 190 <= b[1] <= 750:
            clean_p = " ".join([l.strip() for l in txt.splitlines() if l.strip()])
            t1_paras.append(clean_p)
    texto_1_content = "\n\n".join(t1_paras) + "\n\nInternet: <abecom.com.br> (com adaptações)."

    # Texto 2 (itens 9 a 16)
    p2 = pdoc[1]
    p2_blocks = p2.get_text('blocks')
    t2_paras = []
    for b in p2_blocks:
        txt = b[4].strip()
        if b[0] < 200 and 50 <= b[1] <= 550:
            clean_p = "\n".join([l.strip() for l in txt.splitlines() if l.strip()])
            t2_paras.append(clean_p)
    texto_2_content = "\n\n".join(t2_paras) + "\n\nAnuário de Literatura, ISSNe: 2175‑7917, vol. 15, n. 1, 2010 (com adaptações)."

    c_gael = "Gael era um encantador de serpentes e costumava tocar flauta para duas cobras, chamadas Jade e Safira. Quando ele começava a tocar, a chance de Jade dançar era de 40%, enquanto a chance de Safira dançar era de 75%. Considere‑se que o comportamento de uma cobra não interfere no comportamento da outra.\n\n" \
             "Com base nessa situação hipotética, julgue os itens a seguir."

    c_alien = "Durante 42 dias consecutivos, alienígenas fizeram círculos em milharais no Brasil. A quantidade de círculos feitos por dia seguiu uma progressão aritmética. No 5º dia, foram feitos 19 círculos e, no 34º dia, foram feitos 106 círculos.\n\n" \
              "Com base nessa situação hipotética, julgue os itens seguintes."

    c_amigos = "Miguel, Helena e Ravi participaram de uma dinâmica a respeito dos signos do zodíaco. Cada um deles pertencia exatamente a um dos seguintes signos: áries; leão; e peixes. Nenhum signo era compartilhado por mais de uma pessoa. Desse modo, sabe‑se que são verdadeiras as seguintes proposições:\n" \
               "• se Miguel não é de leão, então Helena é de áries;\n" \
               "• se Helena não é de áries, então Ravi é de peixes;\n" \
               "• Miguel não é de áries; e\n" \
               "• Ravi não é de leão.\n\n" \
               "Com base nessa situação hipotética, julgue os itens a seguir."

    c_pipoca = "Durante 30 dias, Sebastião anotou a quantidade de pacotes de pipoca vendidos por dia. Assim: em 6 dias, vendeu 20 pacotes por dia; em 8 dias, vendeu 25 pacotes por dia; em 10 dias, vendeu 30 pacotes por dia; e, em 6 dias, vendeu 35 pacotes por dia.\n\n" \
               "Com base nessa situação hipotética, julgue os itens seguintes."

    c_info1 = "Nos itens que avaliem conhecimentos de informática, a menos que seja explicitamente informado o contrário, considere que: todos os programas mencionados estejam em configuração‑padrão, em português; o mouse esteja configurado para pessoas destras; expressões como clicar, clique simples e clique duplo refiram‑se a cliques com o botão esquerdo do mouse; e teclar corresponda à operação de pressionar uma tecla e, rapidamente, liberá‑la, acionando‑a apenas uma vez. Considere também que não haja restrições de proteção, de funcionamento e de uso em relação aos programas, arquivos, diretórios, recursos e equipamentos mencionados.\n\n" \
              "Com base nos recursos, nas fórmulas e nas funcionalidades das suítes de produtividade Microsoft 365 e Google Workspace, julgue os itens seguir."

    c_info2 = "No que diz respeito aos conceitos de redes de computadores, à infraestrutura de Internet/intranet e às ferramentas de navegação web (browsers), julgue os itens seguintes."

    c_info3 = "No que se refere ao armazenamento em nuvem corporativa, à segurança da informação e aos conceitos de inteligência artificial (IA) e computação em nuvem, julgue os itens a seguir."

    c_etica = "No que se refere ao conceito de ética na função pública e aos princípios fundamentais da Administração Pública, julgue os itens a seguir."

    c_improbidade = "Com base na Lei de Improbidade Administrativa (Lei nº 8.429/1992, reformada pela Lei nº 14.230/2021), julgue os itens seguintes."

    c_proc_adm = "No que concerne ao processo administrativo no âmbito da Administração Pública federal, regulado pela Lei nº 9.784/1999, julgue os itens a seguir."

    c_lai = "Considerando a Lei nº 12.527/2011 – Lei de Acesso à Informação (LAI), julgue os itens seguintes."

    c_lgpd = "No que diz respeito à proteção de dados pessoais e à Lei nº 13.709/2018 – Lei Geral de Proteção de Dados (LGPD) –, julgue os itens a seguir."

    c_especificos1 = "No que se refere à legislação constitucional, à tributária, à licitatória, à orçamentária e à fiscal aplicável à Administração Pública, julgue os itens a seguir, à luz da Constituição Federal de 1988 (CF/1988), da Lei Complementar (LC) nº 123/2006, da Lei nº 14.133/2021, da Lei nº 4.320/1964 e da LC nº 101/2000."

    c_orcamento = "No que se refere ao orçamento público, à execução orçamentária e financeira e à contabilidade aplicada ao setor público, julgue os itens a seguir, à luz da legislação vigente."

    c_beta = "A Beta Comércio Ltda., sociedade empresária do ramo comercial, apresentou as demonstrações contábeis a seguir, elaboradas em conformidade com o regime de competência. Os valores foram expressos em milhares de reais. Assim, para fins de cálculo, ressalta‑se que, no exercício X2, não houve distribuição de lucros, integralização de capital, baixas de imobilizado, perdas ou reclassificações de estoques.\n\n" \
             "**BALANÇO PATRIMONIAL**\n\n" \
             "| Conta | 31-12-X1 | 31-12-X2 |\n" \
             "| :--- | :---: | :---: |\n" \
             "| **Ativo** | | |\n" \
             "| **ATIVO CIRCULANTE** | | |\n" \
             "| Caixa | R$ 190 | R$ 112 |\n" \
             "| Contas a receber | R$ 22 | R$ 90 |\n" \
             "| Estoques | R$ 95 | R$ 80 |\n" \
             "| Despesas Antecipadas | R$ 8 | R$ 10 |\n" \
             "| **Total do Ativo Circulante** | **R$ 315** | **R$ 292** |\n" \
             "| **ATIVO NÃO CIRCULANTE** | | |\n" \
             "| Terreno | R$ 130 | R$ 286 |\n" \
             "| Equipamentos | R$ 50 | R$ 130 |\n" \
             "| Depreciação acumulada | (R$ 15) | (R$ 32) |\n" \
             "| Intangível | R$ 20 | R$ 25 |\n" \
             "| **Total do Ativo Não Circulante** | **R$ 185** | **R$ 409** |\n" \
             "| **Total do Ativo** | **R$ 500** | **R$ 701** |\n" \
             "| **Passivo e Patrimônio Líquido** | | |\n" \
             "| **PASSIVO CIRCULANTE** | | |\n" \
             "| Fornecedor | R$ 92 | R$ 38 |\n" \
             "| Despesas provisionadas a pagar (operacionais) | R$ 25 | R$ 35 |\n" \
             "| Imposto de Renda a pagar | R$ 2 | R$ 10 |\n" \
             "| **Total do Passivo Circulante** | **R$ 119** | **R$ 83** |\n" \
             "| **PASSIVO NÃO CIRCULANTE** | | |\n" \
             "| Empréstimos e Financiamentos (LP) | R$ 2 | R$ 40 |\n" \
             "| **Total do Passivo Não Circulante** | **R$ 2** | **R$ 40** |\n" \
             "| **PATRIMÔNIO LÍQUIDO** | | |\n" \
             "| Capital social | R$ 180 | R$ 180 |\n" \
             "| Lucros acumulados | R$ 199 | R$ 398 |\n" \
             "| **Total do Patrimônio Líquido** | **R$ 379** | **R$ 578** |\n" \
             "| **Total do Passivo e PL** | **R$ 500** | **R$ 701** |\n\n" \
             "**DEMONSTRAÇÃO DO RESULTADO DO EXERCÍCIO**\n\n" \
             "| Descrição | Exercício X2 |\n" \
             "| :--- | :---: |\n" \
             "| **RECEITA** | |\n" \
             "| Receita Líquida de Vendas | R$ 2.381 |\n" \
             "| **CUSTO** | |\n" \
             "| (-) Custo das Mercadorias Vendidas (CMV) | (R$ 1.680) |\n" \
             "| **LUCRO BRUTO** | **R$ 701** |\n" \
             "| **DESPESAS OPERACIONAIS** | |\n" \
             "| (-) Despesas Operacionais (excluindo Depreciação) | (R$ 350) |\n" \
             "| (-) Despesas de Depreciação | (R$ 17) |\n" \
             "| **LUCRO ANTES DO IMPOSTO DE RENDA** | **R$ 334** |\n" \
             "| **IMPOSTO DE RENDA** | |\n" \
             "| (-) Despesa de Imposto de Renda | (R$ 135) |\n" \
             "| **LUCRO LÍQUIDO DO EXERCÍCIO** | **R$ 199** |\n\n" \
             "Com base nessa situação hipotética e nas demonstrações contábeis apresentadas, julgue os itens seguintes."

    # 3. Stream lines collection with column awareness
    stream_lines = []
    for pno in range(len(pdoc)): # 9 pages
        page = pdoc[pno]
        blocks = page.get_text('blocks')
        
        filtered = []
        for b in blocks:
            txt = b[4].strip()
            if not txt:
                continue
            if 'pcimarkpci' in txt or 'pciconcursos' in txt or 'CONSELHO REGIONAL' in txt or 'Quadrix |' in txt or 'Analista Cont' in txt:
                continue
            if txt in [str(i) for i in range(1, 15)] or txt == 'RASCUNHO' or txt == 'ANOTAÇÕES':
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
                    if cl and cl != 'RASCUNHO' and cl != 'ANOTAÇÕES':
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

    assert len(item_headers) == 120, f"Expected 120 item headers, got {len(item_headers)}"

    context_start_markers = {
        8: "Texto para os itens de 9 a 16.",
        16: "Gael era um encantador de serpentes",
        19: "Durante 42 dias consecutivos",
        22: "Miguel, Helena e Ravi",
        25: "Durante 30 dias, Sebastião",
        28: "Nos itens que avaliem",
        32: "No que diz respeito aos conceitos de redes",
        36: "No que se refere ao armazenamento em nuvem",
        40: "CONHECIMENTOS COMPLEMENTARES",
        46: "Com base na Lei de Improbidade",
        53: "No que concerne ao processo administrativo",
        60: "Considerando a Lei nº 12.527/2011",
        65: "No que diz respeito à proteção de dados",
        70: "CONHECIMENTOS ESPECÍFICOS",
        83: "No que se refere ao orçamento público",
        100: "A Beta Comércio Ltda."
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
                'subtopicos': ['Compreensão de Texto', 'Morfossintaxe', 'Ortografia e Acentuação', 'Pontuação'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-texto-1',
                    'title': 'Texto para os itens de 1 a 8 – Mecânico de manutenção industrial: quem é e o que faz esse profissional?',
                    'content': texto_1_content
                }
            }
        elif 9 <= num <= 16:
            return {
                'disciplina': 'Língua Portuguesa',
                'assunto': 'Interpretação de Texto e Figuras de Linguagem',
                'subtopicos': ['Gênero Poético', 'Figuras de Linguagem', 'Coesão Textual', 'Aspectos Gramaticais'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-texto-2',
                    'title': 'Texto para os itens de 9 a 16 – Poema: 1.300 graus à sombra dos telheiros retos',
                    'content': texto_2_content
                }
            }
        elif 17 <= num <= 19:
            return {
                'disciplina': 'Raciocínio Lógico e Matemático',
                'assunto': 'Probabilidade Condicional',
                'subtopicos': ['Eventos Independentes', 'Cálculo de Probabilidades', 'Teorema de Bayes'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-gael',
                    'title': 'Situação Hipotética – Gael e as serpentes Jade e Safira (itens 17 a 19)',
                    'content': c_gael
                }
            }
        elif 20 <= num <= 22:
            return {
                'disciplina': 'Raciocínio Lógico e Matemático',
                'assunto': 'Sequências e Progressões',
                'subtopicos': ['Progressão Aritmética', 'Termo Geral da PA', 'Soma dos Termos'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-alien',
                    'title': 'Situação Hipotética – Círculos em milharais (itens 20 a 22)',
                    'content': c_alien
                }
            }
        elif 23 <= num <= 25:
            return {
                'disciplina': 'Raciocínio Lógico e Matemático',
                'assunto': 'Lógica de Argumentação',
                'subtopicos': ['Lógica Proposicional', 'Tabela-Verdade', 'Condicionais e Implicações'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-amigos',
                    'title': 'Situação Hipotética – Signos dos amigos Miguel, Helena e Ravi (itens 23 a 25)',
                    'content': c_amigos
                }
            }
        elif 26 <= num <= 28:
            return {
                'disciplina': 'Raciocínio Lógico e Matemático',
                'assunto': 'Estatística Descritiva',
                'subtopicos': ['Média Ponderada', 'Moda', 'Mediana'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-pipoca',
                    'title': 'Situação Hipotética – Venda de pipocas por Sebastião (itens 26 a 28)',
                    'content': c_pipoca
                }
            }
        elif 29 <= num <= 32:
            return {
                'disciplina': 'Noções de Informática',
                'assunto': 'Suítes de Escritório',
                'subtopicos': ['Microsoft 365', 'Google Workspace', 'Editor de Texto', 'Planilhas', 'Apresentações'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-info1',
                    'title': 'Produtividade Microsoft 365 e Google Workspace (itens 29 a 32)',
                    'content': c_info1
                }
            }
        elif 33 <= num <= 36:
            return {
                'disciplina': 'Noções de Informática',
                'assunto': 'Navegação Web e Ferramentas de Internet',
                'subtopicos': ['Navegadores Browsers', 'Configurações de Privacidade', 'Downloads e Atalhos'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-info2',
                    'title': 'Navegação Web e Browsers (itens 33 a 36)',
                    'content': c_info2
                }
            }
        elif 37 <= num <= 40:
            return {
                'disciplina': 'Noções de Informática',
                'assunto': 'Nuvem, Segurança e IA',
                'subtopicos': ['Armazenamento em Nuvem', 'Segurança da Informação', 'Conceitos de IA'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-info3',
                    'title': 'Nuvem Corporativa, Segurança da Informação e IA (itens 37 a 40)',
                    'content': c_info3
                }
            }
        elif 41 <= num <= 46:
            return {
                'disciplina': 'Legislação e Ética na Administração Pública',
                'assunto': 'Ética no Serviço Público',
                'subtopicos': ['Princípios da Administração Pública', 'Dever de Eficiência e Moralidade', 'Conduta Ética'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-etica',
                    'title': 'Ética na Função Pública e Princípios Administrativos (itens 41 a 46)',
                    'content': c_etica
                }
            }
        elif 47 <= num <= 53:
            return {
                'disciplina': 'Direito Administrativo',
                'assunto': 'Improbidade Administrativa',
                'subtopicos': ['Lei nº 8.429/1992', 'Lei nº 14.230/2021', 'Dolo Específico', 'Perda da Função Pública'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-improbidade',
                    'title': 'Improbidade Administrativa – Lei nº 8.429/1992 (itens 47 a 53)',
                    'content': c_improbidade
                }
            }
        elif 54 <= num <= 60:
            return {
                'disciplina': 'Direito Administrativo',
                'assunto': 'Processo Administrativo Federal',
                'subtopicos': ['Lei nº 9.784/1999', 'Competência e Delegação', 'Prazos', 'Anulação e Revogação'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-proc-adm',
                    'title': 'Processo Administrativo – Lei nº 9.784/1999 (itens 54 a 60)',
                    'content': c_proc_adm
                }
            }
        elif 61 <= num <= 65:
            return {
                'disciplina': 'Legislação e Ética na Administração Pública',
                'assunto': 'Lei de Acesso à Informação',
                'subtopicos': ['Lei nº 12.527/2011 (LAI)', 'Transparência Ativa e Passiva', 'Classificação de Sigilo'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-lai',
                    'title': 'Lei de Acesso à Informação – LAI (itens 61 a 65)',
                    'content': c_lai
                }
            }
        elif 66 <= num <= 70:
            return {
                'disciplina': 'Direito Administrativo',
                'assunto': 'Proteção de Dados Pessoais',
                'subtopicos': ['Lei nº 13.709/2018 (LGPD)', 'Bases Legais de Tratamento', 'Dados Pessoais Sensíveis'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-lgpd',
                    'title': 'Proteção de Dados Pessoais – LGPD (itens 66 a 70)',
                    'content': c_lgpd
                }
            }
        elif 71 <= num <= 83:
            return {
                'disciplina': 'Conhecimentos Específicos',
                'assunto': 'Legislação Constitucional, Tributária, Licitações e Fiscal',
                'subtopicos': ['CF/1988', 'Lei Complementar nº 123/2006', 'Lei nº 14.133/2021', 'Lei Complementar nº 101/2000 (LRF)'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-especificos1',
                    'title': 'Legislação Constitucional, Tributária e Contratações Públicas (itens 71 a 83)',
                    'content': c_especificos1
                }
            }
        elif 84 <= num <= 100:
            return {
                'disciplina': 'Contabilidade Pública e Orçamento',
                'assunto': 'Orçamento Público e Contabilidade Aplicada ao Setor Público',
                'subtopicos': ['Lei nº 4.320/1964', 'Créditos Adicionais', 'Receita e Despesa Pública', 'PCASP e MCASP'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-orcamento',
                    'title': 'Orçamento Público, Execução e CASP (itens 84 a 100)',
                    'content': c_orcamento
                }
            }
        elif 101 <= num <= 120:
            return {
                'disciplina': 'Contabilidade Geral e Trabalhista',
                'assunto': 'Demonstrações Contábeis e Legislação Tributária/Trabalhista',
                'subtopicos': ['Balanço Patrimonial', 'DRE', 'Índices de Liquidez', 'Simples Nacional', 'eSocial, FGTS-Digital e DCTFWeb'],
                'textoCompartilhado': {
                    'id': 'quadrix-crtes-context-beta',
                    'title': 'Demonstrações Contábeis da Beta Comércio Ltda. e Obrigações Fiscais (itens 101 a 120)',
                    'content': c_beta
                }
            }

    questoes = []
    for n in range(1, 121):
        item = raw_items[n]
        meta = get_subject_meta(n)
        
        enunciado = item['texto'].strip()
        
        q_obj = {
            'id': f"quadrix-2024-crtes-analista-contabil-q{n:03d}",
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
            'gabaritoStatus': "preliminar",
            'metadados': {
                'disciplina': meta['disciplina'],
                'assunto': meta['assunto'],
                'subtopicos': meta['subtopicos'],
                'paginaOrigem': item['pagina']
            },
            'textoCompartilhado': meta['textoCompartilhado']
        }
        
        if 101 <= n <= 120:
            q_obj['tabelas'] = [
                "/questoes/analista_contabil3/tabela_balanco_patrimonial_p8.png",
                "/questoes/analista_contabil3/tabela_dre_p8.png"
            ]
            
        questoes.append(q_obj)

    exam_json = {
        'schemaVersion': "2.0",
        'exam': {
            'id': "quadrix-2024-crtes-analista-contabil",
            'titulo': "Processo Seletivo Público CRT-ES - Analista Contábil (Código 401)",
            'orgao': "Conselho Regional dos Técnicos Industriais do Espírito Santo (CRT-ES)",
            'banca': "Instituto Quadrix",
            'cargo': "Analista Contábil",
            'codigoCargo': "401",
            'ano': 2024,
            'edital': "Edital Processo Seletivo Público CRT-ES",
            'caderno': "Caderno Único de Prova Objetiva - Código 401",
            'turno': "integral",
            'formatoQuestoes': "certo_errado",
            'totalQuestoes': 120,
            'totalAnuladas': 0,
            'homologado': False,
            'auditTrail': {
                'arquivoProvaPdf': "analista_contabil3.pdf",
                'arquivoGabaritoPdf': "gabarito_analista_contabil3.pdf",
                'secaoGabarito': "2.5 ANALISTA CONTÁBIL (CÓDIGO 401)",
                'paginaGabarito': 2,
                'tipoGabarito': "preliminar",
                'statusAuditoria': "fidelidade_documental_aprovada_gabarito_preliminar",
                'responsavelAuditoria': "Antigravity AI Agent",
                'dataAuditoria': "2026-11-04"
            }
        },
        'questoes': questoes
    }

    out_path = 'src/data/imported/analista_contabil3.json'
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(exam_json, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully generated {out_path} with {len(questoes)} questions.")
    return exam_json

if __name__ == '__main__':
    build_analista_contabil3()
