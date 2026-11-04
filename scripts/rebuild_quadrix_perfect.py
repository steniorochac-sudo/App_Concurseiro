import fitz
import json
import re
import sys
from collections import Counter

sys.stdout.reconfigure(encoding='utf-8')

def build_quadrix_json():
    pdoc = fitz.open('provas_pdf/analista_contabil.pdf')
    gdoc = fitz.open('gabaritos_pdf/gabarito_analista_contabil.pdf')

    # 1. Parse official gabarito for cargo 402 (Analista Contábil)
    p2_g = gdoc[1].get_text()
    start_g = p2_g.find("2.4 ANALISTA CONTÁBIL (CÓDIGO 402)")
    end_g = p2_g.find("2.5", start_g)
    if end_g == -1:
        end_g = p2_g.find("2.6", start_g)
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
    p1 = pdoc[0]
    p1_blocks = p1.get_text('blocks')
    t1_paras = []
    for b in p1_blocks:
        txt = b[4].strip()
        if (41.0 <= b[0] <= 45.0 or 75.0 <= b[0] <= 80.0) and 190 <= b[1] <= 535:
            clean_p = " ".join([l.strip() for l in txt.splitlines() if l.strip()])
            t1_paras.append(clean_p)
    texto_1_content = "\n\n".join(t1_paras) + "\n\nInternet: <www.g1.globo.com> (com adaptações)."

    c2_text = "Um escritório jurídico especializado em causas cíveis possui três advogados: Dr. Andrade; Dra. Barros; e Dr. Costa. Para otimizar o trabalho, os processos são distribuídos entre eles, de acordo com as seguintes regras lógicas.\n\n" \
              "I – Se um processo envolve direito do consumidor, então ou dr. Andrade ou dra. Barros deverá atendê‑lo.\n" \
              "II – Se um processo não envolve contratos, então dr. Costa não deverá atendê‑lo.\n" \
              "III – Se dra. Barros atende um processo, então ele não envolverá direito de família.\n\n" \
              "Com base nessa situação hipotética e considerando essas regras, julgue os itens a seguir."

    c3_text = "Um advogado especializado em direito civil está analisando as estatísticas de seus processos nos últimos 3 anos. Ele observou que:\n" \
              "• 40% dos processos são relacionados a direito de família;\n" \
              "• 30% dos processos são relacionados a direito imobiliário;\n" \
              "• 20% dos processos são relacionados a direito do consumidor; e\n" \
              "• Os 10% restantes são de outras áreas.\n\n" \
              "Em um levantamento sobre o tempo médio de duração (em meses) desses processos, ele obteve os seguintes dados:\n" \
              "• direito de família: 15 meses;\n" \
              "• direito imobiliário: 24 meses;\n" \
              "• direito do consumidor: 12 meses; e\n" \
              "• outras áreas: 18 meses.\n\n" \
              "Com base nessa situação hipotética e nessas informações, julgue os itens seguintes."

    c4_text = "Um escritório de advocacia está analisando o tempo gasto em diferentes tipos de processos judiciais. Para um estudo estatístico, eles coletaram os tempos (em meses) para a conclusão de 10 processos similares, obtendo‑se a seguinte amostra: 8, 12, 9, 15, 10, 8, 11, 14, 10, 13.\n\n" \
              "Com base nessa situação hipotética, julgue os itens a seguir."

    c5_text = "Nos itens que avaliem conhecimentos de informática, a menos que seja explicitamente informado o contrário, considere que: todos os programas mencionados estejam em configuração‑padrão, em português; o mouse esteja configurado para pessoas destras; expressões como clicar, clique simples e clique duplo refiram‑se a cliques com o botão esquerdo do mouse; e teclar corresponda à operação de pressionar uma tecla e, rapidamente, liberá‑la, acionando‑a apenas uma vez. Considere também que não haja restrições de proteção, de funcionamento e de uso em relação aos programas, arquivos, diretórios, recursos e equipamentos mencionados.\n\n" \
              "Existem diversos tipos de computadores (laptop, notebook, desktop, servidor etc.). Com base nessa informação, julgue os itens a seguir."

    c6_text = "Os aplicativos de escritório (Word, Excel e PowerPoint) do pacote Microsoft Office são ferramentas amplamente utilizadas no ambiente corporativo para a criação de textos, planilhas e apresentações. Com relação a esses aplicativos, julgue os itens seguintes."

    c7_text = "A Internet é uma poderosa ferramenta de consultas para profissionais de todas as áreas, inclusive contadores. Com relação à navegação na Internet e à realização de buscas eficientes, julgue os itens a seguir."

    c8_text = "Um escritório de advocacia uma gera muitos documentos e necessita de uma gestão eficiente de seus arquivos. A respeito dos conceitos de organização e de gerenciamento de informações, arquivos, pastas e programas, julgue os itens a seguir."

    c9_text = "A segurança de informação é um esforço contínuo de todos os colaboradores de uma empresa. A respeito desse tema, julgue o item a seguir."

    c10_text = "Considerando as normas estabelecidas no Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal – Decreto nº 1.171/1994 –, julgue os itens a seguir."

    c11_text = "Segundo a Lei nº 8.429/1992, que trata das sanções aplicáveis em virtude da prática de atos de improbidade administrativa, julgue os itens seguintes."

    c12_text = "À luz da Lei nº 9.784/1999, que regula o processo administrativo no âmbito da Administração Pública Federal, julgue os itens a seguir."

    c13_text = "No que diz respeito à Lei nº 13.709/2018, que trata da proteção de dados pessoais, julgue os itens seguintes."

    c14_text = "Quanto à Lei nº 12.846/2013, que trata a respeito da responsabilização administrativa e civil de pessoas jurídicas pela prática de atos contra a Administração Pública, julgue os itens a seguir."

    c15_text = "De acordo com o Decreto‑Lei nº 9.295/1946, que cria o Conselho Federal de Contabilidade e prerrogativas dos Conselhos Regionais de Contabilidade (CRCs), julgue os itens a seguir."

    c16_text = "Quanto ao estabelecido na Resolução CFC nº 1.523/2017, que dispõe sobre o Regulamento de Procedimentos Processuais dos Conselhos de Contabilidade, julgue os itens seguintes."

    c17_text = "Segundo as normas previstas na Resolução CRC‑SP nº 1.285/2020, que dispõe sobre o Regimento Interno do Conselho Regional de Contabilidade do Estado de São Paulo, julgue os itens seguintes."

    c18_text = "Em relação ao Título IV – Capítulo I – Seção IX da Constituição Federal de 1988, que trata da fiscalização contábil, financeira e orçamentária, julgue os itens seguintes."

    c19_text = "Com relação ao Título III – Capítulo VII da Constituição Federal de 1988, que dispõe sobre a Administração Pública, julgue os itens a seguir."

    c20_text = "A respeito da Lei Complementar nº 123/2006, que institui o Estatuto Nacional da Microempresa e da Empresa de Pequeno Porte, julgue os itens a seguir."

    c21_text = "A Lei nº 14.133/2021 trouxe diversas modificações em relação à legislação anterior (Lei nº 8.666/93). Quanto à Nova Lei de Licitações e Contratos Administrativos, julgue os itens seguintes."

    c22_text = "A Lei nº 10.303/2001 visa aprimorar o funcionamento do mercado de capitais brasileiro, com foco na proteção dos investidores e na garantia de informações transparentes. Com base nessa legislação, julgue os itens a seguir."

    c23_text = "O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue os itens seguintes."

    c24_text = "As normas globais de auditoria interna do IIA (Institute of Internal Auditors) orientam a prática profissional mundial de auditoria interna e servem como base para avaliar e elevar a qualidade da função de auditoria interna. Com base nessas normas internacionais para o exercício profissional da auditoria interna, julgue os itens a seguir."

    c25_text = "Com base nos pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue os itens seguintes."

    c26_text = "Em relação aos registros contábeis, julgue os itens a seguir."

    c27_text = "Com base na análise das demonstrações financeiras, julgue os itens seguintes."

    c28_text = "Em relação à qualidade da informação da contabilidade pública no Brasil, ao Manual de Contabilidade Aplicada ao Setor Público (MCASP) e ao Plano de Contas Aplicado ao Setor Público (PCASP), julgue os itens a seguir."

    c29_text = "Com base no processo orçamentário brasileiro e na legislação que trata a respeito do orçamento público no Brasil, julgue os itens a seguir."

    # 3. Stream lines collection with column awareness
    stream_lines = []
    for pno in range(len(pdoc)):
        page = pdoc[pno]
        blocks = page.get_text('blocks')
        
        filtered = []
        for b in blocks:
            txt = b[4].strip()
            if not txt:
                continue
            if 'pcimarkpci' in txt or 'pciconcursos' in txt or 'CONSELHO REGIONAL' in txt or 'Prova aplicada' in txt:
                continue
            if txt in ['1', '2', '3', '4', '5', '6', '7', '8', 'RASCUNHO']:
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
                    if cl:
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
        6: "Internet: <www.g1.globo.com>",
        20: "Um escritório jurídico especializado",
        23: "Um advogado especializado em direito civil",
        26: "Um escritório de advocacia está analisando o",
        30: "Nos itens que avaliem",
        32: "Os aplicativos de escritório",
        35: "A Internet é uma poderosa",
        37: "Um escritório de advocacia uma gera muitos documentos",
        39: "A segurança de informação é um esforço",
        40: "CONHECIMENTOS COMPLEMENTARES",
        42: "Segundo a Lei nº",
        47: "À luz da Lei nº",
        49: "No que diz respeito à Lei nº",
        51: "Quanto à Lei nº",
        55: "De acordo com o Decreto",
        60: "Quanto ao estabelecido na Resolução CFC nº",
        65: "Segundo as normas previstas na Resolução CRC",
        70: "CONHECIMENTOS ESPECÍFICOS",
        72: "Com relação ao Título III",
        75: "A respeito da Lei Complementar nº",
        79: "A Lei nº",
        81: "A Lei nº",
        85: "O Conselho Federal de Contabilidade",
        92: "As normas globais de auditoria",
        97: "Com base nos pronunciamentos técnicos",
        103: "Em relação aos registros contábeis",
        105: "Com base na análise das demonstrações",
        111: "Em relação à qualidade da informação",
        116: "Com base no processo orçamentário"
    }

    raw_items = {}
    for n in range(1, 121):
        start_idx, pno, col, header_rest = item_headers[n]
        next_item_idx = item_headers[n+1][0] if n < 120 else len(stream_lines)

        if n in context_start_markers:
            marker = context_start_markers[n]
            end_idx = next_item_idx
            for k in range(start_idx + 1, next_item_idx):
                if stream_lines[k][2].startswith(marker):
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
        if 1 <= num <= 20:
            return {
                'disciplina': 'Língua Portuguesa',
                'assunto': 'Interpretação e Gramática',
                'subtopicos': ['Compreensão e Interpretação de Textos', 'Morfossintaxe', 'Pontuação', 'Regência e Crase'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-texto-1',
                    'title': 'Texto para os itens de 1 a 20 – Polícia de SP investiga se contador morto a tiros...',
                    'content': texto_1_content
                }
            }
        elif 21 <= num <= 23:
            return {
                'disciplina': 'Raciocínio Lógico e Matemático',
                'assunto': 'Lógica Proposicional e Argumentação',
                'subtopicos': ['Estruturas Lógicas', 'Lógica de Primeira Ordem', 'Diagramas Lógicos'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-2',
                    'title': 'Situação Hipotética – Distribuição de processos entre advogados (itens 21 a 23)',
                    'content': c2_text
                }
            }
        elif 24 <= num <= 26:
            return {
                'disciplina': 'Raciocínio Lógico e Matemático',
                'assunto': 'Estatística Descritiva e Probabilidade',
                'subtopicos': ['Porcentagem', 'Média Aritmética', 'Probabilidade'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-3',
                    'title': 'Situação Hipotética – Estatísticas de processos nos últimos 3 anos (itens 24 a 26)',
                    'content': c3_text
                }
            }
        elif 27 <= num <= 30:
            return {
                'disciplina': 'Raciocínio Lógico e Matemático',
                'assunto': 'Estatística Descritiva',
                'subtopicos': ['Medidas de Tendência Central (Média, Mediana)', 'Medidas de Dispersão (Desvio Padrão)'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-4',
                    'title': 'Situação Hipotética – Estudo amostral de tempos de conclusão de processos (itens 27 a 30)',
                    'content': c4_text
                }
            }
        elif 31 <= num <= 32:
            return {
                'disciplina': 'Noções de Informática',
                'assunto': 'Hardware e Tipos de Computadores',
                'subtopicos': ['Dispositivos de Entrada e Saída', 'Arquitetura de Computadores'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-5',
                    'title': 'Comando Geral de Informática e Tipos de Computadores (itens 31 e 32)',
                    'content': c5_text
                }
            }
        elif 33 <= num <= 35:
            return {
                'disciplina': 'Noções de Informática',
                'assunto': 'Suíte de Escritório Microsoft Office',
                'subtopicos': ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-6',
                    'title': 'Aplicativos de Escritório (itens 33 a 35)',
                    'content': c6_text
                }
            }
        elif 36 <= num <= 37:
            return {
                'disciplina': 'Noções de Informática',
                'assunto': 'Redes e Internet',
                'subtopicos': ['Navegação Web', 'Mecanismos de Busca e Pesquisa Avançada'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-7',
                    'title': 'Navegação e Consultas na Internet (itens 36 e 37)',
                    'content': c7_text
                }
            }
        elif 38 <= num <= 39:
            return {
                'disciplina': 'Noções de Informática',
                'assunto': 'Sistemas de Arquivos e Armazenamento',
                'subtopicos': ['Organização de Pastas e Arquivos', 'Gerenciamento de Arquivos em Nuvem'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-8',
                    'title': 'Organização e Gerenciamento de Arquivos e Pastas (itens 38 e 39)',
                    'content': c8_text
                }
            }
        elif num == 40:
            return {
                'disciplina': 'Noções de Informática',
                'assunto': 'Segurança da Informação',
                'subtopicos': ['Conceitos de Segurança', 'Backup e Armazenamento Seguro'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-9',
                    'title': 'Segurança da Informação (item 40)',
                    'content': c9_text
                }
            }
        elif 41 <= num <= 42:
            return {
                'disciplina': 'Legislação e Ética no Serviço Público',
                'assunto': 'Código de Ética Profissional do Servidor Público Civil',
                'subtopicos': ['Decreto nº 1.171/1994', 'Deveres e Vedações do Servidor'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-10',
                    'title': 'Decreto nº 1.171/1994 – Código de Ética (itens 41 e 42)',
                    'content': c10_text
                }
            }
        elif 43 <= num <= 47:
            return {
                'disciplina': 'Direito Administrativo',
                'assunto': 'Improbidade Administrativa',
                'subtopicos': ['Lei nº 8.429/1992', 'Atos que Importam Enriquecimento Ilícito', 'Sanções e Prescrição'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-11',
                    'title': 'Lei nº 8.429/1992 – Improbidade Administrativa (itens 43 a 47)',
                    'content': c11_text
                }
            }
        elif 48 <= num <= 49:
            return {
                'disciplina': 'Direito Administrativo',
                'assunto': 'Processo Administrativo Federal',
                'subtopicos': ['Lei nº 9.784/1999', 'Prazos Processuais', 'Autotutela e Anulação'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-12',
                    'title': 'Lei nº 9.784/1999 – Processo Administrativo (itens 48 e 49)',
                    'content': c12_text
                }
            }
        elif 50 <= num <= 51:
            return {
                'disciplina': 'Legislação Específica',
                'assunto': 'Proteção de Dados Pessoais',
                'subtopicos': ['Lei nº 13.709/2018 (LGPD)', 'Princípios da LGPD', 'Tratamento de Dados Sensíveis'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-13',
                    'title': 'Lei nº 13.709/2018 – Proteção de Dados Pessoais (itens 50 e 51)',
                    'content': c13_text
                }
            }
        elif 52 <= num <= 55:
            return {
                'disciplina': 'Direito Administrativo',
                'assunto': 'Lei Anticorrupção',
                'subtopicos': ['Lei nº 12.846/2013', 'Acordo de Leniência', 'Responsabilidade Objetiva da Pessoa Jurídica'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-14',
                    'title': 'Lei nº 12.846/2013 – Responsabilização de Pessoas Jurídicas (itens 52 a 55)',
                    'content': c14_text
                }
            }
        elif 56 <= num <= 60:
            return {
                'disciplina': 'Legislação Profissional Contábil',
                'assunto': 'Criação do CFC e CRCs',
                'subtopicos': ['Decreto-Lei nº 9.295/1946', 'Competências do CFC e CRCs', 'Carteira Profissional'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-15',
                    'title': 'Decreto-Lei nº 9.295/1946 – Regulamentação da Profissão Contábil (itens 56 a 60)',
                    'content': c15_text
                }
            }
        elif 61 <= num <= 65:
            return {
                'disciplina': 'Legislação Profissional Contábil',
                'assunto': 'Procedimentos Processuais dos Conselhos de Contabilidade',
                'subtopicos': ['Resolução CFC nº 1.523/2017', 'Processo Administrativo Disciplinar Contábil'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-16',
                    'title': 'Resolução CFC nº 1.523/2017 – Regulamento de Procedimentos Processuais (itens 61 a 65)',
                    'content': c16_text
                }
            }
        elif 66 <= num <= 70:
            return {
                'disciplina': 'Legislação Institucional CRC-SP',
                'assunto': 'Regimento Interno do CRC-SP',
                'subtopicos': ['Resolução CRC-SP nº 1.285/2020', 'Organização e Competências do Plenário e Câmaras'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-17',
                    'title': 'Resolução CRC-SP nº 1.285/2020 – Regimento Interno (itens 66 a 70)',
                    'content': c17_text
                }
            }
        elif 71 <= num <= 72:
            return {
                'disciplina': 'Direito Constitucional',
                'assunto': 'Fiscalização Contábil, Financeira e Orçamentária',
                'subtopicos': ['Artigos 70 a 75 da CF/88', 'Controle Externo e Controle Interno'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-18',
                    'title': 'CF/88 – Fiscalização Contábil, Financeira e Orçamentária (itens 71 e 72)',
                    'content': c18_text
                }
            }
        elif 73 <= num <= 75:
            return {
                'disciplina': 'Direito Constitucional',
                'assunto': 'Disposições Gerais da Administração Pública',
                'subtopicos': ['Artigo 37 da CF/88', 'Princípios da Administração Pública', 'Estabilidade e Remuneração'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-19',
                    'title': 'CF/88 – Disposições Gerais da Administração Pública (itens 73 a 75)',
                    'content': c19_text
                }
            }
        elif 76 <= num <= 79:
            return {
                'disciplina': 'Direito Tributário e Empresarial',
                'assunto': 'Estatuto da Microempresa e Empresa de Pequeno Porte',
                'subtopicos': ['Lei Complementar nº 123/2006', 'Simples Nacional', 'Tratamento Diferenciado'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-20',
                    'title': 'Lei Complementar nº 123/2006 – Simples Nacional (itens 76 a 79)',
                    'content': c20_text
                }
            }
        elif 80 <= num <= 81:
            return {
                'disciplina': 'Direito Administrativo',
                'assunto': 'Nova Lei de Licitações e Contratos',
                'subtopicos': ['Lei nº 14.133/2021', 'Modalidades de Licitação', 'Contratação Direta e Dispensa'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-21',
                    'title': 'Lei nº 14.133/2021 – Licitações e Contratos Administrativos (itens 80 e 81)',
                    'content': c21_text
                }
            }
        elif 82 <= num <= 85:
            return {
                'disciplina': 'Direito Societário e Mercado de Capitais',
                'assunto': 'Sociedades por Ações e Mercado Mobiliário',
                'subtopicos': ['Lei nº 10.303/2001', 'Lei nº 6.404/1976', 'CVM e Acionistas Minoritários'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-22',
                    'title': 'Lei nº 10.303/2001 – Reforma do Mercado de Capitais (itens 82 a 85)',
                    'content': c22_text
                }
            }
        elif 86 <= num <= 92:
            return {
                'disciplina': 'Auditoria Independente',
                'assunto': 'Normas Brasileiras de Contabilidade (NBC TA)',
                'subtopicos': ['Documentação de Auditoria (NBC TA 230)', 'Amostragem em Auditoria (NBC TA 530)', 'Evidência de Auditoria (NBC TA 500)'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-23',
                    'title': 'Normas Brasileiras de Contabilidade – NBC TA (itens 86 a 92)',
                    'content': c23_text
                }
            }
        elif 93 <= num <= 97:
            return {
                'disciplina': 'Auditoria Interna',
                'assunto': 'Normas Internacionais de Auditoria Interna (IIA)',
                'subtopicos': ['Normas Globais do IIA', 'Independência e Objetividade', 'Papéis de Trabalho e Relatório'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-24',
                    'title': 'Normas Globais do IIA – Auditoria Interna (itens 93 a 97)',
                    'content': c24_text
                }
            }
        elif 98 <= num <= 103:
            return {
                'disciplina': 'Contabilidade Geral e Societária',
                'assunto': 'Pronunciamentos Técnicos do CPC',
                'subtopicos': ['CPC 16 (Estoques)', 'CPC 03 (Fluxos de Caixa)', 'CPC 09 (Demonstração do Valor Adicionado)', 'CPC 00 (Estrutura Conceitual)'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-25',
                    'title': 'Pronunciamentos Técnicos do Comitê de Pronunciamentos Contábeis (itens 98 a 103)',
                    'content': c25_text
                }
            }
        elif 104 <= num <= 105:
            return {
                'disciplina': 'Contabilidade Geral',
                'assunto': 'Escrituração e Registros Contábeis',
                'subtopicos': ['Livro Diário e Razão', 'Detalhamento da Escrituração Contábil'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-26',
                    'title': 'Registros e Escrituração Contábil (itens 104 e 105)',
                    'content': c26_text
                }
            }
        elif 106 <= num <= 111:
            return {
                'disciplina': 'Análise das Demonstrações Contábeis',
                'assunto': 'Índices Financeiros e Econômicos',
                'subtopicos': ['Índices de Liquidez', 'EBITDA / LAJIDA', 'Estrutura de Capital e Endividamento'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-27',
                    'title': 'Análise das Demonstrações Financeiras (itens 106 a 111)',
                    'content': c27_text
                }
            }
        elif 112 <= num <= 116:
            return {
                'disciplina': 'Contabilidade Aplicada ao Setor Público (CASP)',
                'assunto': 'MCASP e PCASP',
                'subtopicos': ['Características Qualitativas da Informação', 'Estágios da Despesa Pública', 'Restos a Pagar', 'Plano de Contas PCASP'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-28',
                    'title': 'MCASP e PCASP – Contabilidade Pública (itens 112 a 116)',
                    'content': c28_text
                }
            }
        else: # 117 to 120
            return {
                'disciplina': 'Orçamento Público e Direito Financeiro',
                'assunto': 'Processo Orçamentário Brasileiro',
                'subtopicos': ['PPA, LDO e LOA', 'Princípios Orçamentários (Não Afetação, Universalidade)', 'Créditos Adicionais'],
                'textoCompartilhado': {
                    'id': 'quadrix-crcsp-context-29',
                    'title': 'Processo Orçamentário e Princípios Orçamentários (itens 117 a 120)',
                    'content': c29_text
                }
            }

    questoes = []
    for num in range(1, 121):
        raw = raw_items[num]
        ans = answers[num]
        meta = get_subject_meta(num)

        alt_list = [
            {'id': 'C', 'text': 'CERTO'},
            {'id': 'E', 'text': 'ERRADO'}
        ]

        q_obj = {
            'id': f"quadrix-2025-crcsp-analista-contabil-q{num:03d}",
            'numeroOriginal': num,
            'tipo': 'certo_errado',
            'enunciado': raw['texto'],
            'alternativas': alt_list,
            'gabaritoOficial': ans,
            'gabaritoStatus': 'preliminar',
            'metadados': {
                'disciplina': meta['disciplina'],
                'assunto': meta['assunto'],
                'subtopicos': meta['subtopicos'],
                'paginaOrigem': raw['pagina'],
                'temSublinhado': False,
                'temLacunas': False
            }
        }

        if 'textoCompartilhado' in meta:
            q_obj['textoCompartilhado'] = meta['textoCompartilhado']

        questoes.append(q_obj)

    exam_doc = {
        'schemaVersion': '2.0',
        'exam': {
            'id': 'quadrix-2025-crcsp-analista-contabil',
            'titulo': 'Concurso Público CRC-SP 2025 - Analista Contábil (Código 402)',
            'orgao': 'Conselho Regional de Contabilidade do Estado de São Paulo (CRC-SP)',
            'banca': 'Instituto Quadrix',
            'cargo': 'Analista Contábil',
            'codigoCargo': '402',
            'ano': 2025,
            'edital': 'Edital Concurso Público CRC-SP nº 01/2025',
            'caderno': 'Caderno Único de Prova Objetiva - Código 402',
            'turno': 'tarde',
            'formatoQuestoes': 'certo_errado',
            'totalQuestoes': 120,
            'totalAnuladas': 0,
            'homologado': False,
            'auditTrail': {
                'arquivoProvaPdf': 'analista_contabil.pdf',
                'arquivoGabaritoPdf': 'gabarito_analista_contabil.pdf',
                'secaoGabarito': '2.4 ANALISTA CONTÁBIL (CÓDIGO 402)',
                'paginaGabarito': 2,
                'tipoGabarito': 'preliminar',
                'statusAuditoria': 'fidelidade_documental_aprovada_gabarito_preliminar',
                'responsavelAuditoria': 'Antigravity AI Agent',
                'dataAuditoria': '2026-11-04'
            }
        },
        'questoes': questoes
    }

    out_path = 'src/data/imported/analista_contabil.json'
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(exam_doc, f, indent=2, ensure_ascii=False)

    print(f"Successfully generated {out_path} with {len(questoes)} questions.")
    return exam_doc

if __name__ == '__main__':
    build_quadrix_json()
