# Relatório de Auditoria e Validação Integral de Prova

## 1. Identificação do Concurso e Documentos Originais

- **Órgão:** Prefeitura Municipal de Balneário Camboriú / SC (Secretaria de Gestão Administrativa)
- **Concurso:** Concurso Público • Edital 006/2022
- **Data de Realização da Prova:** 29 de janeiro de 2023
- **Banca Examinadora:** Fundação de Estudos e Pesquisas Socioeconômicos (FEPESE)
- **Cargo:** Agente Fiscal Tributário
- **Código do Cargo:** 6M02
- **Arquivo da Prova:** `provas_pdf/agente_fiscal_tributario 1.pdf`
- **Arquivo do Gabarito:** `gabaritos_pdf/gabarito_agente_fiscal_tributario 1.pdf`
- **Seção Oficial do Gabarito:** Página 2, Bloco `6M02 Agente Fiscal Tributário` (Questões 1 a 40)
- **Arquivo JSON Gerado:** `src/data/imported/agente_fiscal_tributario_1.json`

---

## 2. Resumo Quantitativo da Auditoria

| Métrica | Quantidade | Observações |
| :--- | :---: | :--- |
| **Total de questões identificadas no PDF** | **40** | Questões numeradas sequencialmente de 1 a 40 no caderno |
| **Total de questões estruturadas no JSON** | **40** | 100% das questões extraídas e estruturadas |
| **Questões incompletas ou omitidas** | **0** | Todas as questões possuem enunciado, alternativas A-E e metadados |
| **Questões anuladas no gabarito oficial** | **1** | Questão 29 (Gabarito oficial: `X`) |
| **Questões com imagens/figuras externas** | **0** | Não há gráficos ou figuras pictóricas nos enunciados |
| **Questões com elementos visuais formatados** | **8** | Q1/Q2 (Texto 1), Q5 (sublinhados), Q7 (lacunas), Q9/23/24/27/28/31 (listas) |
| **Testes automatizados executados** | **19** | 11 testes Vitest (TS) + 8 testes unitários (Python) — 100% aprovados |

---

## 3. Mapeamento Integral das Questões (Número, Página, Disciplina e Gabarito)

| Questão | Página Origem | Coluna | Disciplina | Assunto Principal | Gabarito Oficial | Status Validação |
| :---: | :---: | :---: | :--- | :--- | :---: | :---: |
| **1** | Pág. 3 | Esquerda | Língua Portuguesa | Ortografia e Acentuação | **E** | Validada |
| **2** | Pág. 3 | Direita | Língua Portuguesa | Interpretação de Texto | **A** | Validada |
| **3** | Pág. 3 | Direita | Língua Portuguesa | Acentuação Gráfica | **C** | Validada |
| **4** | Pág. 3 | Direita | Língua Portuguesa | Sujeito Indeterminado | **C** | Validada |
| **5** | Pág. 3 | Direita | Língua Portuguesa | Oração Subordinada Adjetiva | **D** | Validada (com `<u>`) |
| **6** | Pág. 3 | Direita | Língua Portuguesa | Colocação Pronominal | **A** | Validada |
| **7** | Pág. 4 | Esquerda | Língua Portuguesa | Crase e Emprego de Há/A | **D** | Validada (lacunas) |
| **8** | Pág. 4 | Esquerda | Língua Portuguesa | Concordância Nominal | **B** | Validada |
| **9** | Pág. 4 | Esquerda | Língua Portuguesa | Vícios de Linguagem | **E** | Validada (tabela) |
| **10** | Pág. 4 | Direita | Língua Portuguesa | Concordância Verbal | **B** | Validada |
| **11** | Pág. 4 | Direita | Conhecimentos Atuais | Oceanos e Continentes | **E** | Validada |
| **12** | Pág. 4 | Direita | Conhecimentos Atuais | Refugiados e Migrações | **A** | Validada |
| **13** | Pág. 5 | Esquerda | Conhecimentos Atuais | Organização das Nações Unidas | **B** | Validada |
| **14** | Pág. 5 | Esquerda | Conhecimentos Atuais | Fundo Monetário Internacional | **D** | Validada |
| **15** | Pág. 5 | Direita | Conhecimentos Atuais | Geografia de Santa Catarina | **C** | Validada |
| **16** | Pág. 5 | Direita | Conhecimentos Específicos | Auto de Infração (Lei 223/1973) | **E** | Validada |
| **17** | Pág. 6 | Esquerda | Conhecimentos Específicos | IPTU - Valor Venal (CTN art. 33) | **A** | Validada |
| **18** | Pág. 6 | Esquerda | Conhecimentos Específicos | Sujeito Passivo Responsável (CTN) | **C** | Validada |
| **19** | Pág. 6 | Esquerda | Conhecimentos Específicos | Imposto de Renda - Conceito (CTN) | **E** | Validada |
| **20** | Pág. 6 | Direita | Conhecimentos Específicos | Moratória e Suspensão (CTN) | **D** | Validada |
| **21** | Pág. 6 | Direita | Conhecimentos Específicos | Crédito Tributário e Privilégios | **C** | Validada |
| **22** | Pág. 6 | Direita | Conhecimentos Específicos | Contribuição de Melhoria | **B** | Validada |
| **23** | Pág. 7 | Esquerda | Conhecimentos Específicos | Taxas Municipais (Lei 223/1973) | **B** | Validada |
| **24** | Pág. 7 | Esquerda | Conhecimentos Específicos | Restituição Tributária | **A** | Validada |
| **25** | Pág. 7 | Direita | Conhecimentos Específicos | Cadastro Imobiliário Urbano | **E** | Validada |
| **26** | Pág. 7 | Direita | Conhecimentos Específicos | Fato Gerador do IPTU Municipal | **D** | Validada |
| **27** | Pág. 7 | Direita | Conhecimentos Específicos | Inscrição no ISSQN (Lei 2326/04) | **B** | Validada |
| **28** | Pág. 8 | Esquerda | Conhecimentos Específicos | Conceito de Zona Urbana | **A** | Validada |
| **29** | Pág. 8 | Esquerda | Conhecimentos Específicos | Reclamação contra Lançamento | **X** | **ANULADA** |
| **30** | Pág. 8 | Direita | Conhecimentos Específicos | ISSQN - Trabalho Pessoal | **B** | Validada |
| **31** | Pág. 8 | Direita | Conhecimentos Específicos | ISSQN por Estimativa | **C** | Validada |
| **32** | Pág. 8 | Direita | Conhecimentos Específicos | Base de Cálculo do ISSQN | **E** | Validada |
| **33** | Pág. 9 | Esquerda | Conhecimentos Específicos | Lançamento de Ofício do ISSQN | **D** | Validada |
| **34** | Pág. 9 | Esquerda | Conhecimentos Específicos | Substituição Tributária do ISSQN | **A** | Validada |
| **35** | Pág. 9 | Esquerda | Conhecimentos Específicos | Incidência do ISSQN | **D** | Validada |
| **36** | Pág. 9 | Direita | Conhecimentos Específicos | Local da Prestação (Andaimes/Palcos) | **C** | Validada |
| **37** | Pág. 9 | Direita | Conhecimentos Específicos | Estabelecimento Prestador | **B** | Validada |
| **38** | Pág. 9 | Direita | Conhecimentos Específicos | Arbitramento da Base de Cálculo | **D** | Validada |
| **39** | Pág. 10 | Esquerda | Conhecimentos Específicos | Concurso de Infrações Fiscais | **C** | Validada |
| **40** | Pág. 10 | Esquerda | Conhecimentos Específicos | Inscrição em Dívida Ativa | **A** | Validada |

---

## 4. Auditoria de Elementos Visuais e Tratamento Estrutural

1. **Texto Compartilhado (Texto 1 — "Os gatos"):**
   - Fonte original no PDF: Página 3, coluna esquerda.
   - Base para as questões 1 e 2.
   - Preservado no JSON através de bloco de citação markdown `> [Texto 1]`, o que aciona nativamente o componente retrátil expansível de texto de apoio do `QuestionCard.tsx`.

2. **Oração Sublinhada (Questão 5):**
   - No PDF impresso, a banca desenhou vetores curvos de sublinhado sob termos de cada alternativa.
   - Foi realizada inspeção vetorial detalhada (`pymupdf.get_drawings()`) identificando os limites exatos das palavras sublinhadas.
   - Representação estruturada: tags `<u>...</u>` aplicadas nas alternativas:
     * A: `Acontece <u>que eu não vou!</u>`
     * B: `Peço <u>que você saia da sala.</u>`
     * C: `Chegamos <u>quando amanhecia.</u>`
     * D: `Amigo <u>que mente</u> não merece confiança!`
     * E: `É uma pena <u>que essa novela tenha acabado.</u>`

3. **Lacunas de Preenchimento (Questão 7):**
   - No PDF impresso, as lacunas eram linhas em branco vetorizadas.
   - Preservadas como `________` permitindo visualização inequívoca das posições a serem completadas.

4. **Tabelas de Associação e Listas de Afirmativas (Questões 9, 23, 24, 27, 28 e 31):**
   - Preservadas com quebras de parágrafo duplas (`\n\n`), mantendo as colunas e os números dos itens organizados e de leitura fluida.

5. **Correção de Hifenização de Quebra de Linha:**
   - Palavras partidas ao final de linha foram reunificadas mantendo o léxico padrão (ex: `presume-se feita` na Q16, `superou` na Q2, `lançamento` na Q33).

---

## 5. Análise de Divergências e Pendências de Validação

- **Questão 29 (ANULADA):**
  - **Enunciado:** *"O contribuinte que não concordar com lançamento tributário poderá reclamar no prazo de 20 dias... A respeito dos conhecimentos sobre a reclamação contra lançamento previstos na Lei nº 223/1973, é correto afirmar:"*
  - **No Caderno de Prova / Rascunho:** A alternativa indicada era `E` (*"Terá efeito suspensivo da cobrança dos tributos lançados, até decisão da autoridade competente."*).
  - **No Gabarito Oficial Definitivo da FEPESE:** A resposta consta expressamente como `x` (conforme a legenda da página 3 do gabarito: `x = Questão Anulada`).
  - **Tratamento no JSON:** O gabarito foi registrado como `"gabarito": "X"`, com a inclusão do campo `"alertaProfessor"` advertindo sobre a anulação homologada pela banca e fundamentação completa no campo `"explicacao"`.

---

## 6. Resultado das Verificações de Integridade e Testes Automatizados

1. **Vitest (`src/data/imported/__tests__/agente_fiscal_tributario_1.test.ts`):**
   - 11 testes executados, 11 aprovados (0 falhas).
   - Validações: contagem exata (40), unicidade de IDs, compatibilidade estrita com a interface `Question`, existência de 5 alternativas por questão, aderência de 100% ao gabarito oficial FEPESE, anulação da Q29 e formatação especial de Q1, Q2, Q5, Q7 e Q16.

2. **Python Unittest (`scripts/test_agente_fiscal_tributario_1.py`):**
   - 8 testes executados, 8 aprovados (0 falhas).
   - Validações: correspondência com os arquivos binários dos PDFs (`agente_fiscal_tributario 1.pdf` e `gabarito_agente_fiscal_tributario 1.pdf`), ausência de resquícios de caracteres de controle ou ícones do FontAwesome.

**Conclusão da Auditoria:** A prova de **Agente Fiscal Tributário (FEPESE 2023 - Edital 006/2022)** foi 100% lida, estruturada, conferida e validada com sucesso.
