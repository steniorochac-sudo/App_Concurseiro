# Relatório de Conferência Forense e Matriz Documental — FEPESE 2023 (Marco 1)
## Caderno: Agente Fiscal Tributário 1 (40 Questões) • Edital 006/2022 • Cargo 6M02

**Data:** 09/11/2026  
**Ambiente:** Branch de Fase Documental `documentary/fepese-2023-agente-fiscal-1`  
**Repositório:** `steniorochac-sudo/App_Concurseiro`  
**Base de Origem:** Commit `45ef42c6` (`feature/importador-ia-e-busca-explicacao`)  
**Auditor Responsável:** Antigravity AI Agent  
**Status da Homologação no Catálogo Central:** `validacao_pendente` (bloqueio preventivo mantido)

---

## 1. Identificação Documental e Fontes Primárias

A conferência documental foi realizada mediante confronto determinístico bicolunar e vetorial entre os PDFs oficiais da banca e a base de questões do sistema:

1. **Caderno de Prova Oficial:**
   - **Arquivo:** [`provas_pdf/agente_fiscal_tributario 1.pdf`](file:///c:/Users/steni/Desktop/Codification/Programas/App_Concurseiro/provas_pdf/agente_fiscal_tributario%201.pdf)
   - **Hash SHA-256:** `ee8cdbfbfe5ca797e294274e2da92364801d73c93f780d93d2e347b14a6b9cbc`
   - **Concurso:** Município de Balneário Camboriú • Secretaria de Gestão Administrativa • Edital 006/2022
   - **Cargo e Código:** `6M02 Agente Fiscal Tributário`
   - **Estrutura:** 12 páginas (Capa: pág. 1; Verso em branco: pág. 2; Caderno de questões: págs. 3 a 10; Folha de respostas: pág. 11; Verso: pág. 12).
2. **Gabarito Oficial Definitivo:**
   - **Arquivo:** [`gabaritos_pdf/gabarito_agente_fiscal_tributario 1.pdf`](file:///c:/Users/steni/Desktop/Codification/Programas/App_Concurseiro/gabaritos_pdf/gabarito_agente_fiscal_tributario%201.pdf)
   - **Hash SHA-256:** `cb866ba5e1f1ba8f4ac3e0741d9a95bd3699fab3e58106dbfd335abe9f3ceecf`
   - **Seção Oficial:** `6M02 Agente Fiscal Tributário` (Página 2, Bloco 1, itens 1 a 40).
   - **Natureza:** Gabarito Definitivo retificado após recursos administrativos.
3. **Base JSON Auditada:**
   - **Arquivo:** [`src/data/imported/agente_fiscal_tributario_1.json`](file:///c:/Users/steni/Desktop/Codification/Programas/App_Concurseiro/src/data/imported/agente_fiscal_tributario_1.json)
   - **Total de Questões:** 40 registros preservados (`q-agente_fiscal_tributario_1-01` a `q-agente_fiscal_tributario_1-40`).
4. **Matriz Documental Estruturada:**
   - **Arquivo:** [`docs/auditoria-documental/matriz_conferencia_fepese_2023.json`](file:///c:/Users/steni/Desktop/Codification/Programas/App_Concurseiro/docs/auditoria-documental/matriz_conferencia_fepese_2023.json)

---

## 2. Metodologia e Mecanismo de Bloqueio Efetivo de Divergências

Em conformidade com a determinação da Auditoria Externa, **a aprovação documental não decorre de índices de similaridade lexical**:

1. **Segmentação Bicolunar Posicional:**
   - As páginas 3 a 10 foram processadas por fluxo de blocos ordenados por coluna: Coluna Esquerda ($x_0 < 280\,\text{pt}$) e Coluna Direita ($x_0 \ge 280\,\text{pt}$).
   - Bounding boxes ($x_0, y_0, x_1, y_1$) calculadas para cada questão, mapeando precisamente a região física ocupada.
2. **Inspeção Vetorial de Elementos Gráficos:**
   - As 5 alternativas da Questão 05 foram confrontadas diretamente com a tabela de traços vetoriais do PDF (`page.get_drawings()`), confirmando a existência física de 5 linhas de sublinhado correspondentes às tags `<u>...</u>`.
3. **Mecanismo de Falha e Bloqueio em `verify_fepese_all_40_questions.py`:**
   - Qualquer discrepância textual não catalogada como normalização editorial formalmente justificada aciona a classificação `divergencia_relevante_nao_justificada` e encerra a execução do script com **código de saída 1 (sys.exit(1))**.
   - O processo rejeita qualquer tentativa de aprovação automática de conteúdos adulterados.

---

## 3. Matriz de Confronto Documental das 40 Questões

Todas as 40 questões foram analisadas elemento a elemento (enunciado, proposições, alternativas A a E e gabarito):

| Q# | ID Estável | Pág | Col | BBox $(x_0, y_0, x_1, y_1)$ | Gab Oficial (6M02) | Gab JSON | Confronto Enunciado | Confronto Alts (A..E) | Diferenças / Normalizações | Pendências | Status Documental |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **01** | `q-agente_fiscal_tributario_1-01` | 3 | 0 | `[48.8, 547.0, 276.4, 649.4]` | **E** | E | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **02** | `q-agente_fiscal_tributario_1-02` | 3 | 1 | `[304.6, 73.0, 512.9, 235.4]` | **A** | A | Fidelidade Integral | A..E Integrais | Hifenização 'supe-rou' desfeita | 0 | `verificacao_documental_concluida` |
| **03** | `q-agente_fiscal_tributario_1-03` | 3 | 1 | `[304.8, 253.0, 480.9, 343.4]` | **C** | C | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **04** | `q-agente_fiscal_tributario_1-04` | 3 | 1 | `[304.7, 361.0, 529.5, 463.4]` | **C** | C | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **05** | `q-agente_fiscal_tributario_1-05` | 3 | 1 | `[304.8, 481.0, 526.6, 583.4]` | **D** | D | Fidelidade Integral | A..E Comprovadas Vetorialmente | 5 traços vetoriais em `<u>...</u>` | 0 | `verificacao_documental_concluida` |
| **06** | `q-agente_fiscal_tributario_1-06` | 3 | 1 | `[304.9, 601.0, 518.7, 703.4]` | **A** | A | Fidelidade Integral | A..E Integrais | Hifenização 'pronomi-nal' desfeita | 0 | `verificacao_documental_concluida` |
| **07** | `q-agente_fiscal_tributario_1-07` | 4 | 0 | `[49.3, 73.0, 276.6, 235.4]` | **D** | D | Normalização Justificada | A..E Integrais | Lacunas gráficas -> `________` | 0 | `verificacao_documental_concluida` |
| **08** | `q-agente_fiscal_tributario_1-08` | 4 | 0 | `[49.8, 253.0, 523.5, 367.4]` | **B** | B | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **09** | `q-agente_fiscal_tributario_1-09` | 4 | 0 | `[49.3, 385.0, 276.8, 643.4]` | **E** | E | Fidelidade Integral | A..E Integrais | Colunas 1 e 2 preservadas | 0 | `verificacao_documental_concluida` |
| **10** | `q-agente_fiscal_tributario_1-10` | 4 | 1 | `[304.7, 73.0, 530.1, 211.4]` | **B** | B | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **11** | `q-agente_fiscal_tributario_1-11` | 4 | 1 | `[304.7, 247.0, 531.0, 475.4]` | **E** | E | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **12** | `q-agente_fiscal_tributario_1-12` | 4 | 1 | `[304.8, 499.0, 530.4, 715.4]` | **A** | A | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **13** | `q-agente_fiscal_tributario_1-13` | 5 | 0 | `[49.4, 73.0, 275.9, 397.4]` | **B** | B | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **14** | `q-agente_fiscal_tributario_1-14` | 5 | 0 | `[49.7, 421.0, 275.3, 703.4]` | **D** | D | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **15** | `q-agente_fiscal_tributario_1-15` | 5 | 1 | `[304.7, 73.0, 529.6, 367.4]` | **C** | C | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **16** | `q-agente_fiscal_tributario_1-16` | 5 | 1 | `[303.9, 391.0, 531.5, 637.4]` | **E** | E | Fidelidade Integral | A..C,E Integrais; D Normalizada | Defeito banca: `presume- -se` | 0 | `verificacao_documental_concluida` |
| **17** | `q-agente_fiscal_tributario_1-17` | 6 | 0 | `[49.5, 73.0, 276.1, 223.4]` | **A** | A | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **18** | `q-agente_fiscal_tributario_1-18` | 6 | 0 | `[49.6, 247.0, 275.4, 463.4]` | **C** | C | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **19** | `q-agente_fiscal_tributario_1-19` | 6 | 0 | `[49.4, 487.0, 275.4, 715.4]` | **E** | E | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **20** | `q-agente_fiscal_tributario_1-20` | 6 | 1 | `[304.8, 73.0, 530.0, 319.4]` | **D** | D | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **21** | `q-agente_fiscal_tributario_1-21` | 6 | 1 | `[304.7, 343.0, 528.2, 535.4]` | **C** | C | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **22** | `q-agente_fiscal_tributario_1-22` | 6 | 1 | `[304.6, 559.0, 528.0, 715.4]` | **B** | B | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **23** | `q-agente_fiscal_tributario_1-23` | 7 | 0 | `[49.5, 73.0, 275.7, 379.4]` | **B** | B | Fidelidade Integral | A..E Integrais | Proposições 1 a 4 conferidas | 0 | `verificacao_documental_concluida` |
| **24** | `q-agente_fiscal_tributario_1-24` | 7 | 0 | `[49.6, 403.0, 275.8, 691.4]` | **A** | A | Fidelidade Integral | A..E Integrais | Proposições 1 a 4 conferidas | 0 | `verificacao_documental_concluida` |
| **25** | `q-agente_fiscal_tributario_1-25` | 7 | 1 | `[304.8, 73.0, 531.0, 295.4]` | **E** | E | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **26** | `q-agente_fiscal_tributario_1-26` | 7 | 1 | `[304.6, 319.0, 530.0, 475.4]` | **D** | D | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **27** | `q-agente_fiscal_tributario_1-27` | 7 | 1 | `[304.8, 499.0, 529.7, 715.4]` | **B** | B | Fidelidade Integral | A..E Integrais | Proposições 1 a 4 conferidas | 0 | `verificacao_documental_concluida` |
| **28** | `q-agente_fiscal_tributario_1-28` | 8 | 0 | `[49.5, 73.0, 275.5, 343.4]` | **A** | A | Fidelidade Integral | A..E Integrais | Proposições 1 a 5 conferidas | 0 | `verificacao_documental_concluida` |
| **29** | `q-agente_fiscal_tributario_1-29` | 8 | 0 | `[49.3, 367.0, 278.1, 619.4]` | **X** | X | Fidelidade Integral | A..E Integrais | Anulação Oficial 6M02 | 0 | `verificacao_documental_concluida` |
| **30** | `q-agente_fiscal_tributario_1-30` | 8 | 1 | `[304.8, 73.0, 530.4, 259.4]` | **B** | B | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **31** | `q-agente_fiscal_tributario_1-31` | 8 | 1 | `[304.7, 283.0, 530.3, 535.4]` | **C** | C | Fidelidade Integral | A..E Integrais | Proposições 1 a 4 conferidas | 0 | `verificacao_documental_concluida` |
| **32** | `q-agente_fiscal_tributario_1-32` | 8 | 1 | `[304.8, 559.0, 529.7, 715.4]` | **E** | E | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **33** | `q-agente_fiscal_tributario_1-33` | 9 | 0 | `[49.5, 73.0, 275.4, 295.4]` | **D** | D | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **34** | `q-agente_fiscal_tributario_1-34` | 9 | 0 | `[49.7, 319.0, 275.5, 523.4]` | **A** | A | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **35** | `q-agente_fiscal_tributario_1-35` | 9 | 0 | `[49.6, 547.0, 275.8, 715.4]` | **D** | D | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **36** | `q-agente_fiscal_tributario_1-36` | 9 | 1 | `[304.7, 73.0, 529.9, 367.4]` | **C** | C | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **37** | `q-agente_fiscal_tributario_1-37` | 9 | 1 | `[304.7, 391.0, 529.5, 535.4]` | **B** | B | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **38** | `q-agente_fiscal_tributario_1-38` | 9 | 1 | `[304.8, 559.0, 529.8, 715.4]` | **D** | D | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **39** | `q-agente_fiscal_tributario_1-39` | 10 | 0 | `[49.6, 73.0, 275.7, 211.4]` | **C** | C | Fidelidade Integral | A..E Integrais | Nenhuma | 0 | `verificacao_documental_concluida` |
| **40** | `q-agente_fiscal_tributario_1-40` | 10 | 0 | `[49.6, 229.0, 531.5, 466.2]` | **A** | A | Fidelidade Integral | A..D Integrais; E Normalizada | Exclusão marcador rascunho | 0 | `verificacao_documental_concluida` |

---

## 4. Tratamento Exaustivo das Ressalvas Documentais

### Ressalva Q16 (Alternativa D) — Defeito Tipográfico da Banca
- **Trecho Literal Extraído do PDF Oficial (Evidência Bruta):**  
  `"A intimação relativa ao auto lavrado presume- -se feita quando descrever o fato que constitui a infração e as circunstâncias pertinentes."`  
  *(Página 5, Coluna 1, coordenadas $y \approx 487$ pt)*.
- **Trecho Normalizado no JSON:**  
  `"A intimação relativa ao auto lavrado presume-se feita quando descrever o fato que constitui a infração e as circunstâncias pertinentes."`
- **Classificação:** `normalizacao_editorial_justificada`.
- **Justificativa Documental:** Trata-se de um defeito tipográfico incontroverso da própria diagramação da banca (hífen duplo `"presume- -se"` gerado pela hifenização de quebra de linha). A normalização preservou a estrita literalidade semântica exigida pela disciplina tributária e confere exata harmonia com o art. 202 da Lei Municipal nº 223/1973.

### Ressalva Q29 — Anulação Oficial vs. Comentário Didático
- **Confirmação Oficial:** Na seção 6M02 da folha de respostas definitivas (Página 2, Bloco 1, linha 29), a questão 29 está categoricamente marcada com **`X`** (anulada).
- **Decisão Oficial da Banca:**  
  `"Anulação formal no Gabarito Oficial Definitivo publicado pela FEPESE (Edital 006/2022, Seção 6M02, Questão 29 retificada com a marcação 'X'). A banca examinadora não publicou o parecer administrativo dos recursos no arquivo do gabarito."`  
  *(Nenhum motivo extraoficial foi imputado à banca)*.
- **Comentário Didático do Professor:**  
  Registrado separadamente no campo explicativo: no gabarito preliminar constava a opção E, mas em virtude do art. 206 da Lei Municipal nº 223/1973 c/c art. 151, III do CTN, a eficácia suspensiva da impugnação tributária suscitou recursos, culminando na anulação que atribuiu a pontuação a todos os candidatos.
- **Comportamento do Motor (`evaluateQuestionAnswer`):** Atribui crédito oficial sem distorcer o rendimento pedagógico (`isAnnulled: true`, `officialExamCredit: 1`, `scoreWeight: 0`, `countsForDidacticMetrics: false`).

### Ressalva Q07 — Representação Gráfica de Lacunas
- **PDF Oficial:** Espaços em branco sobrepostos a linhas vetoriais de sublinhado.
- **JSON:** Preenchimento por underscores (`________`) para assegurar a renderização das lacunas ao concurseiro.
- **Classificação:** `normalizacao_editorial_justificada`.

### Ressalva Q40 (Alternativa E) — Exclusão de Marcador de Rascunho
- **PDF Oficial:** Final da coluna da página 10 contém o box de rascunho: `"Débitos de terceiros. Coluna em Branco. (rascunho)"`.
- **JSON:** `"Débitos de terceiros."`.
- **Classificação:** `normalizacao_editorial_justificada`.

---

## 5. Bateria de Testes Negativos e Blindagem de Integridade

Para atender prioritariamente à regra de criação de testes e comprovar o bloqueio contra adulterações, foram implementados **5 cenários de teste negativo** em [`scripts/tests/test_fepese_documentary_conferral.py`](file:///c:/Users/steni/Desktop/Codification/Programas/App_Concurseiro/scripts/tests/test_fepese_documentary_conferral.py):

1. **Alteração de Negação no Enunciado (`test_negative_statement_negation_alteration`):**  
   Inserção espúria de `"Não"` em Q01 provocou imediata rejeição (`divergencia_relevante_identificada`).
2. **Alteração Numérica / Legal (`test_negative_number_alteration`):**  
   Modificação do número da lei em Q28 (`223/1973` para `224/1973`) resultou em falha da verificação.
3. **Adulteração de Texto de Alternativa (`test_negative_alternative_text_swap`):**  
   Troca vocabular em alternativa de Q03 foi detectada e reprovada.
4. **Omissão de Trecho / Proposição (`test_negative_omission_of_passage`):**  
   Supressão da proposição 3 de Q24 causou bloqueio imediato por divergência de enunciado.
5. **Divergência de Gabarito (`test_negative_gabarito_divergence`):**  
   Modificação do gabarito em Q10 gerou falha formal de validação contra a seção 6M02.

---

## 6. Resultados dos Gates Automatizados

- **Suíte Vitest (Frontend & Types):** **218 testes aprovados** (21 arquivos de teste, 0 falhas).
  - Teste dedicado [`agente_fiscal_tributario_1.test.ts`](file:///c:/Users/steni/Desktop/Codification/Programas/App_Concurseiro/src/data/imported/__tests__/agente_fiscal_tributario_1.test.ts): **17 testes aprovados**.
- **Suíte Python (PyMuPDF & Unittest):** **63 testes aprovados** (0 erros, 0 falhas).
  - Teste dedicado [`test_fepese_documentary_conferral.py`](file:///c:/Users/steni/Desktop/Codification/Programas/App_Concurseiro/scripts/tests/test_fepese_documentary_conferral.py): **14 testes aprovados** (9 positivos + 5 negativos).
- **Compilação de Produção:** `npm run build` (`tsc && vite build`) concluído com **código 0**.

---

## 7. Proposta de Homologação Documental

- **Total de Questões da Prova:** 40
- **Efetivamente Conferidas com Prova Documental Cabal:** **40 (100%)**
- **Divergências Não Justificadas / Pendências:** **0 (0%)**
- **Status Central no Catálogo:** Mantido sob `validacao_pendente` (`isHomologated = false`), em estrito cumprimento da instrução da Auditoria Externa.

Submete-se o presente relatório e a matriz [`matriz_conferencia_fepese_2023.json`](file:///c:/Users/steni/Desktop/Codification/Programas/App_Concurseiro/docs/auditoria-documental/matriz_conferencia_fepese_2023.json) à homologação formal da **Auditoria Externa**.
