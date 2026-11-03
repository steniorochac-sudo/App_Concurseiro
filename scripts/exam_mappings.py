import os

PROVAS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'provas_pdf'))
GABARITOS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'gabaritos_pdf'))
OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'imported'))

# Mapeamento detalhado de todas as 26 provas para seus gabaritos
EXAM_MAPPINGS = [
    {
        "id": "agente_fiscal_tributario_1",
        "prova": "agente_fiscal_tributario 1.pdf",
        "gabarito": "gabarito_definitivo_agente_fiscal_tributario 1.pdf",
        "banca": "FEPESE",
        "ano": 2022,
        "orgao": "Prefeitura de Balneário Camboriú",
        "cargo": "Agente Fiscal Tributário",
        "disciplina_default": "Direito Tributário e Legislação Municipal"
    },
    {
        "id": "analista_contabil",
        "prova": "analista_contabil.pdf",
        "gabarito": "gabarito_analista_contabil.pdf",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina_default": "Contabilidade Geral e Legislação do CRC"
    },
    {
        "id": "analista_contabil2",
        "prova": "analista_contabil2.pdf",
        "gabarito": "gabarito_analista_contabil2.pdf",
        "banca": "QUADRIX",
        "ano": 2024,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina_default": "Contabilidade Pública e Auditoria"
    },
    {
        "id": "analista_contabil3",
        "prova": "analista_contabil3.pdf",
        "gabarito": "gabarito_analista_contabil3.pdf",
        "banca": "QUADRIX",
        "ano": 2023,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina_default": "Contabilidade e Administração"
    },
    {
        "id": "analista_contabil_tipo_1",
        "prova": "analista_contabil_tipo_1.pdf",
        "gabarito": "gabarito_analista_contabil_tipo_1.pdf",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "SEFAZ / Câmara",
        "cargo": "Analista Contábil - Tipo 1",
        "disciplina_default": "Contabilidade Avançada e Orçamento Público"
    },
    {
        "id": "analista_da_defensoria_publica_informatica",
        "prova": "analista_da_defensoria_publica_informatica.pdf",
        "gabarito": "gabarito_analista_da_defensoria_publica_informatica.pdf",
        "banca": "CEBRASPE",
        "ano": 2023,
        "orgao": "DPE",
        "cargo": "Analista da Defensoria Pública - Informática",
        "disciplina_default": "Tecnologia da Informação & Engenharia de Software"
    },
    {
        "id": "analista_de_informatica",
        "prova": "analista_de_informatica.pdf",
        "gabarito": "gabarito_analista_de_informatica.pdf",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Tribunal de Justiça / Regional",
        "cargo": "Analista de Informática",
        "disciplina_default": "Banco de Dados, Redes e Governança de TI"
    },
    {
        "id": "analista_de_informatica2",
        "prova": "analista_de_informatica2.pdf",
        "gabarito": "gabarito_analista_de_informatica2.pdf",
        "banca": "AOCP",
        "ano": 2023,
        "orgao": "Prefeitura / Tribunal",
        "cargo": "Analista de Informática II",
        "disciplina_default": "Desenvolvimento de Sistemas e Segurança da Informação"
    },
    {
        "id": "analista_de_informatica3",
        "prova": "analista_de_informatica3.pdf",
        "gabarito": "gabarito_analista_de_informatica3.pdf",
        "banca": "FGV",
        "ano": 2022,
        "orgao": "SEFAZ / Tribunal",
        "cargo": "Analista de Informática III",
        "disciplina_default": "Arquitetura de Software e Infraestrutura"
    },
    {
        "id": "analista_de_informatica4",
        "prova": "analista_de_informatica4.pdf",
        "gabarito": "gabarito_analista_de_informatica4.pdf",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Analista de TI - Sistemas",
        "disciplina_default": "Lógica de Programação e Redes"
    },
    {
        "id": "analista_de_informatica5",
        "prova": "analista_de_informatica5.pdf",
        "gabarito": "gabarito_analista_de_informatica5.pdf",
        "banca": "AOCP",
        "ano": 2022,
        "orgao": "Secretaria Estadual",
        "cargo": "Analista de TI - Infraestrutura",
        "disciplina_default": "Sistemas Operacionais e Nuvem"
    },
    # CASO ESPECIAL: 1 gabarito para Manhã e Tarde
    {
        "id": "aud_fiscal_tribut_gestao_tribu_manha",
        "prova": "aud_fiscal_tribut_gestao_tribu_manha.pdf",
        "gabarito": "gabarito_preliminar_aud_fiscal_tribut_gestao_tribu_manha_e_tarde.pdf",
        "banca": "FGV / CEBRASPE",
        "ano": 2023,
        "orgao": "Receita Municipal",
        "cargo": "Auditor Fiscal Tributário - Gestão Tributária (Manhã)",
        "disciplina_default": "Direito Tributário e Direito Constitucional",
        "bloco": "manha"
    },
    {
        "id": "aud_fiscal_tribut_gestao_tribu_tarde",
        "prova": "aud_fiscal_tribut_gestao_tribu_tarde.pdf",
        "gabarito": "gabarito_preliminar_aud_fiscal_tribut_gestao_tribu_manha_e_tarde.pdf",
        "banca": "FGV / CEBRASPE",
        "ano": 2023,
        "orgao": "Receita Municipal",
        "cargo": "Auditor Fiscal Tributário - Gestão Tributária (Tarde)",
        "disciplina_default": "Legislação Tributária Municipal e Auditoria Fiscal",
        "bloco": "tarde"
    },
    {
        "id": "auditor_fiscal_tributario",
        "prova": "auditor_fiscal_tributario.pdf",
        "gabarito": "gabarito_auditor_fiscal_tributario.pdf",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Secretaria da Fazenda",
        "cargo": "Auditor Fiscal Tributário",
        "disciplina_default": "Direito Tributário, Processo Administrativo Fiscal"
    },
    {
        "id": "auditor_fiscal_tributario2",
        "prova": "auditor_fiscal_tributario2.pdf",
        "gabarito": "gabarito_auditor_fiscal_tributario2.pdf",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "SEFAZ",
        "cargo": "Auditor Fiscal Tributário II",
        "disciplina_default": "Direito Tributário e Contabilidade Geral"
    },
    {
        "id": "auditor_fiscal_tributario_da_receita_municipal_gestao_tributaria_manha",
        "prova": "auditor_fiscal_tributario_da_receita_municipal_gestao_tributaria_manha.pdf",
        "gabarito": "gabarito_auditor_fiscal_tributario_da_receita_municipal_gestao_tributaria_manha.pdf",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Receita Municipal",
        "cargo": "Auditor Fiscal da Receita Municipal",
        "disciplina_default": "Direito Constitucional, Administrativo e Tributário"
    },
    {
        "id": "auditor_fiscal_tributario_municipal",
        "prova": "auditor_fiscal_tributario_municipal.pdf",
        "gabarito": "gabarito_auditor_fiscal_tributario_municipal.pdf",
        "banca": "CEBRASPE",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Auditor Fiscal Tributário Municipal",
        "disciplina_default": "Auditoria e Direito Tributário"
    },
    {
        "id": "auditor_fiscal_tributario_municipal2",
        "prova": "auditor_fiscal_tributario_municipal2.pdf",
        "gabarito": "gabarito_auditor_fiscal_tributario_municipal2.pdf",
        "banca": "CEBRASPE",
        "ano": 2022,
        "orgao": "Prefeitura Municipal",
        "cargo": "Auditor Fiscal Tributário Municipal II",
        "disciplina_default": "Legislação Tributária e ISS"
    },
    {
        "id": "fiscal_municipal_tributario",
        "prova": "fiscal_municipal_tributario.pdf",
        "gabarito": "gabaritos_finais_fiscal_municipal_tributario.pdf",
        "banca": "AOCP",
        "ano": 2022,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Municipal Tributário",
        "disciplina_default": "Direito Tributário e Posturas Municipais"
    },
    {
        "id": "fiscal_tributario",
        "prova": "fiscal_tributario.pdf",
        "gabarito": "gabarito_fiscal_tributario.pdf",
        "banca": "FEPESE",
        "ano": 2022,
        "orgao": "Prefeitura de Balneário Camboriú",
        "cargo": "Fiscal Tributário",
        "disciplina_default": "Direito Administrativo e Tributário"
    },
    {
        "id": "fiscal_tributario2",
        "prova": "fiscal_tributario2.pdf",
        "gabarito": "gabarito_fiscal_tributario2.pdf",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Secretaria de Finanças",
        "cargo": "Fiscal Tributário II",
        "disciplina_default": "Impostos Municipais e IPTU/ISS"
    },
    {
        "id": "fiscal_tributario3",
        "prova": "fiscal_tributario3.pdf",
        "gabarito": "gabarito_fiscal_tributario3.pdf",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina_default": "Direito Tributário e Direito Financeiro"
    },
    {
        "id": "fiscal_tributario4",
        "prova": "fiscal_tributario4.pdf",
        "gabarito": "gabarito_fiscal_tributario4.pdf",
        "banca": "AOCP",
        "ano": 2022,
        "orgao": "Secretaria Municipal da Fazenda",
        "cargo": "Fiscal Tributário IV",
        "disciplina_default": "Direito Tributário e Código Tributário Nacional"
    },
    {
        "id": "fiscal_tributario5",
        "prova": "fiscal_tributario5.pdf",
        "gabarito": "gabarito_fiscal_tributario5.pdf",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina_default": "Direito Constitucional e Tributário"
    },
    {
        "id": "fiscal_tributario6",
        "prova": "fiscal_tributario6.pdf",
        "gabarito": "gabarito_fiscal_tributario6.pdf",
        "banca": "AVANÇA SP",
        "ano": 2025,
        "orgao": "Prefeitura de Potim",
        "cargo": "Fiscal Tributário VI",
        "disciplina_default": "Língua Portuguesa, Matemática e Conhecimentos Específicos"
    },
    {
        "id": "prova_objetiva_auditor",
        "prova": "prova_objetiva_auditor.pdf",
        "gabarito": "gabarito_prova_objetiva_auditor.pdf",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina_default": "Direito Administrativo, Constitucional e Financeiro"
    }
]

def get_mappings():
    return EXAM_MAPPINGS
