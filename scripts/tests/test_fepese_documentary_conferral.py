import unittest
import json
import copy
from pathlib import Path
import pymupdf
import re

from scripts.verify_fepese_all_40_questions import (
    analyze_single_question,
    segment_questions_from_flow,
    extract_flow,
    compute_sha256,
    run_full_verification,
    verify_support_text_1_detailed,
    OFFICIAL_GABARITO_6M02,
    PDF_PATH,
    GABARITO_PDF_PATH,
    JSON_PATH,
    MATRIX_OUTPUT_PATH
)

class TestFepeseDocumentaryConferral(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.doc = pymupdf.open(PDF_PATH)
        cls.gab_doc = pymupdf.open(GABARITO_PDF_PATH)
        with open(JSON_PATH, "r", encoding="utf-8") as f:
            cls.json_data = json.load(f)
        cls.flow = extract_flow(cls.doc)
        cls.pdf_questions = segment_questions_from_flow(cls.flow)
        cls.sha_prova = compute_sha256(PDF_PATH)
        cls.sha_gabarito = compute_sha256(GABARITO_PDF_PATH)

    def test_pdf_structure_and_pages(self):
        """1. O caderno de prova oficial da FEPESE deve conter exatamente 12 páginas."""
        self.assertEqual(len(self.doc), 12)
        p1_text = self.doc[0].get_text()
        self.assertIn("6M02 Agente Fiscal Tributário", p1_text)
        self.assertIn("40 questões", p1_text)
        self.assertIn("Edital 006/2022", p1_text)

    def test_official_gabarito_6m02_reconciliation(self):
        """2. A seção 6M02 do gabarito definitivo oficial na página 2 deve conter as 40 respostas exatas."""
        self.assertEqual(len(self.gab_doc), 3)
        p2_text = self.gab_doc[1].get_text()
        self.assertIn("6M02 Agente Fiscal Tributário", p2_text)
        
        idx_start = p2_text.find("6M02 Agente Fiscal Tributário")
        idx_end = p2_text.find("6M03 Agente Social", idx_start)
        section_text = p2_text[idx_start:idx_end]
        
        lines = [l.strip() for l in section_text.split('\n') if l.strip()]
        idx_40 = lines.index('40')
        answers = lines[idx_40 + 1 : idx_40 + 41]
        self.assertEqual(len(answers), 40)
        upper_answers = [a.upper() for a in answers]
        expected_list = [OFFICIAL_GABARITO_6M02[i] for i in range(1, 41)]
        self.assertEqual(upper_answers, expected_list)

    def test_question_29_is_annulled_in_official_key(self):
        """3. A questão 29 deve ser inequivocamente 'X' (anulada) no gabarito oficial 6M02."""
        self.assertEqual(OFFICIAL_GABARITO_6M02[29], "X")
        q29_json = self.json_data[28]
        self.assertEqual(q29_json["id"], "q-agente_fiscal_tributario_1-29")
        self.assertEqual(q29_json["gabarito"], "X")
        self.assertTrue(q29_json.get("isAnnulled"))

    def test_all_40_questions_in_json_match_official_answers(self):
        """4. Todas as 40 questões no JSON devem coincidir 100% com o gabarito 6M02."""
        self.assertEqual(len(self.json_data), 40)
        for i, q in enumerate(self.json_data):
            q_num = i + 1
            self.assertEqual(q["gabarito"].upper(), OFFICIAL_GABARITO_6M02[q_num], f"Questão {q_num} diverge do gabarito 6M02")

    def test_vector_drawings_for_underlines_q05(self):
        """5. As orações sublinhadas na questão 5 devem ser respaldadas por traços vetoriais no PDF."""
        p3 = self.doc[2] # Página 3
        drawings = [d for d in p3.get_drawings() if d['type'] in ('s', 'f', 'fs')]
        words = p3.get_text('words')
        
        underlined_phrases = []
        for d in drawings:
            r = d['rect']
            if r.y1 - r.y0 > 5:
                continue
            u_words = [w[4] for w in words if abs(w[3] - r.y0) < 5 and not (w[2] < r.x0 or w[0] > r.x1)]
            if u_words:
                underlined_phrases.append(" ".join(u_words))

        full_und = " ".join(underlined_phrases)
        self.assertIn("que eu não vou!", full_und)
        self.assertIn("que você saia da sala.", full_und)
        self.assertIn("quando amanhecia.", full_und)
        self.assertIn("que mente", full_und)
        self.assertIn("que essa novela tenha acabado.", full_und)

    def test_page_mapping_for_all_40_questions(self):
        """6. As 40 questões devem se distribuir estritamente entre as páginas 3 e 10."""
        page_ranges = {
            range(1, 7): 3,
            range(7, 13): 4,
            range(13, 17): 5,
            range(17, 23): 6,
            range(23, 28): 7,
            range(28, 33): 8,
            range(33, 39): 9,
            range(39, 41): 10
        }
        for q_range, expected_page in page_ranges.items():
            for q_num in q_range:
                q_json = self.json_data[q_num - 1]
                self.assertEqual(q_json.get("paginaOrigem"), expected_page, f"Q{q_num} esperada na página {expected_page}")

    def test_q16_typographical_defect_and_editorial_normalization(self):
        """7. Q16: Preservar trecho literal do PDF 'presume- -se' e justificar editorialmente 'presume-se'."""
        q16_json = self.json_data[15]
        conf = q16_json.get("conferenciaDocumental", {})
        self.assertEqual(conf.get("trechoLiteralPdf"), "A intimação relativa ao auto lavrado presume- -se feita quando descrever o fato que constitui a infração e as circunstâncias pertinentes.")
        self.assertEqual(conf.get("textoNormalizadoJson"), "A intimação relativa ao auto lavrado presume-se feita quando descrever o fato que constitui a infração e as circunstâncias pertinentes.")
        self.assertIn("202", conf.get("justificativaEditorial", ""))
        self.assertIn("223/1973", conf.get("justificativaEditorial", ""))

    def test_q29_distinguishes_board_decision_and_didactic_commentary(self):
        """8. Q29: Distinguir decisão oficial da banca ('X' no gabarito definitivo) e comentário didático."""
        q29_json = self.json_data[28]
        conf = q29_json.get("conferenciaDocumental", {})
        self.assertIn("decisaoOficialBanca", conf)
        self.assertIn("comentarioDidatico", conf)
        self.assertIn("Gabarito Oficial Definitivo", conf["decisaoOficialBanca"])
        self.assertIn("não publicou", conf["decisaoOficialBanca"])
        self.assertIn("CTN", conf["comentarioDidatico"])

    def test_full_documentary_matrix_integrity(self):
        """9. A matriz estruturada em docs/ deve cobrir exatamente as 40 questões com zero pendências."""
        self.assertTrue(MATRIX_OUTPUT_PATH.exists(), "Matriz documental JSON deve existir")
        with open(MATRIX_OUTPUT_PATH, "r", encoding="utf-8") as f:
            matrix = json.load(f)
        self.assertEqual(len(matrix), 40)
        for item in matrix:
            self.assertEqual(item["sha256Prova"], self.sha_prova)
            self.assertEqual(item["sha256Gabarito"], self.sha_gabarito)
            self.assertEqual(item["pendencias"], [])
            self.assertEqual(item["statusDocumental"], "verificacao_documental_concluida")

    # =========================================================================
    # TESTES NEGATIVOS EXIGIDOS PELA AUDITORIA EXTERNA (Item C)
    # =========================================================================

    def test_negative_statement_negation_alteration(self):
        """10. Negativo: Inserção de negação ('não') no enunciado deve falhar a verificação."""
        pdf_q1 = self.pdf_questions[1]
        tampered_json_q = copy.deepcopy(self.json_data[0])
        # Altera inserindo negação indevida
        tampered_json_q["enunciado"] = tampered_json_q["enunciado"].replace("De acordo", "Não de acordo")
        
        analysis, is_valid, divergences = analyze_single_question(
            1, pdf_q1, tampered_json_q, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertFalse(is_valid, "Verificação deveria reprovar alteração de negação no enunciado")
        self.assertEqual(analysis["statusDocumental"], "divergencia_relevante_identificada")
        self.assertTrue(any(d["tipo"] == "enunciado_divergente" for d in divergences))

    def test_negative_number_alteration(self):
        """11. Negativo: Alteração de número/ano/lei no enunciado deve falhar a verificação."""
        pdf_q28 = self.pdf_questions[28]
        tampered_json_q = copy.deepcopy(self.json_data[27])
        # Altera número da lei: 223/1973 -> 224/1973
        tampered_json_q["enunciado"] = tampered_json_q["enunciado"].replace("223/1973", "224/1973")
        
        analysis, is_valid, divergences = analyze_single_question(
            28, pdf_q28, tampered_json_q, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertFalse(is_valid, "Verificação deveria reprovar alteração de número da lei")
        self.assertEqual(analysis["statusDocumental"], "divergencia_relevante_identificada")
        self.assertTrue(any(d["tipo"] == "enunciado_divergente" for d in divergences))

    def test_negative_alternative_text_swap(self):
        """12. Negativo: Alteração ou troca no texto de uma alternativa deve falhar a verificação."""
        pdf_q3 = self.pdf_questions[3]
        tampered_json_q = copy.deepcopy(self.json_data[2])
        # Altera alternativa A
        tampered_json_q["alternativas"][0]["text"] = "saude • feiura • história_adulterada"
        
        analysis, is_valid, divergences = analyze_single_question(
            3, pdf_q3, tampered_json_q, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertFalse(is_valid, "Verificação deveria reprovar alteração na alternativa")
        self.assertEqual(analysis["statusDocumental"], "divergencia_relevante_identificada")
        self.assertTrue(any(d["tipo"] == "alternativa_A_divergente" for d in divergences))

    def test_negative_omission_of_passage(self):
        """13. Negativo: Omissão de trecho relevante do enunciado deve falhar a verificação."""
        pdf_q24 = self.pdf_questions[24]
        tampered_json_q = copy.deepcopy(self.json_data[23])
        # Omite uma proposição inteira
        tampered_json_q["enunciado"] = tampered_json_q["enunciado"].replace("3. Ocorrência do fato gerador em momento anterior ao lançamento tributário.\n", "")
        
        analysis, is_valid, divergences = analyze_single_question(
            24, pdf_q24, tampered_json_q, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertFalse(is_valid, "Verificação deveria reprovar omissão de trecho")
        self.assertEqual(analysis["statusDocumental"], "divergencia_relevante_identificada")
        self.assertTrue(any(d["tipo"] == "enunciado_divergente" for d in divergences))

    def test_negative_gabarito_divergence(self):
        """14. Negativo: Gabarito divergente do gabarito oficial 6M02 deve falhar a verificação."""
        pdf_q10 = self.pdf_questions[10]
        tampered_json_q = copy.deepcopy(self.json_data[9])
        # Altera gabarito de B para C
        tampered_json_q["gabarito"] = "C"
        
        analysis, is_valid, divergences = analyze_single_question(
            10, pdf_q10, tampered_json_q, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertFalse(is_valid, "Verificação deveria reprovar divergência de gabarito")
        self.assertEqual(analysis["statusDocumental"], "divergencia_relevante_identificada")
        self.assertTrue(any(d["tipo"] == "gabarito_divergente" for d in divergences))

    # =========================================================================
    # TESTES COMPLEMENTARES DE TEXTO DE APOIO E ELEMENTOS VETORIAIS (Gate Complementar)
    # =========================================================================

    def test_q01_q02_support_text_exact_verification(self):
        """15. Positivo: Q01 e Q02 devem validar integralmente o Texto 1 contra o PDF oficial."""
        for q_idx, q_num in [(0, 1), (1, 2)]:
            q_json = self.json_data[q_idx]
            pdf_q = self.pdf_questions[q_num]
            analysis, is_valid, divergences = analyze_single_question(
                q_num, pdf_q, q_json, self.sha_prova, self.sha_gabarito, self.doc
            )
            self.assertTrue(is_valid, f"Q{q_num} deveria validar integralmente o Texto 1")
            self.assertEqual(analysis["statusDocumental"], "verificacao_documental_concluida")
            self.assertEqual(divergences, [])
            self.assertIn("evidenciaTextoApoio", analysis)
            ev = analysis["evidenciaTextoApoio"]
            self.assertTrue(ev["comprovado"])
            self.assertEqual(ev["confrontoPdfVsShared"], "100%_identico")
            self.assertEqual(ev["confrontoPdfVsEnunciado"], "100%_identico")
            self.assertEqual(ev["confrontoSharedVsEnunciado"], "100%_identico")
            self.assertEqual(ev["paragrafosConferidos"], 4)
            self.assertEqual(ev["lacunasConferidas"], 4)

    def test_support_text_1_direct_function_verification(self):
        """15b. Positivo Direto: verify_support_text_1_detailed deve retornar comprovado sem divergências."""
        is_valid, errors, details = verify_support_text_1_detailed(self.doc, self.json_data[0])
        self.assertTrue(is_valid)
        self.assertEqual(errors, [])
        self.assertEqual(len(details), 4)
        for p_name in ["Parágrafo 1", "Parágrafo 2", "Parágrafo 3", "Fonte"]:
            self.assertTrue(details[p_name]["pdfVsSharedMatch"])
            self.assertTrue(details[p_name]["pdfVsEnuncMatch"])
            self.assertTrue(details[p_name]["sharedVsEnuncMatch"])
            self.assertEqual(details[p_name]["divergencias"], [])

    def test_negative_support_text_removal_of_intermediate_sentence(self):
        """16. Negativo: Remoção de frase intermediária não incluída na antiga lista de palavras obrigatórias."""
        pdf_q1 = self.pdf_questions[1]
        tampered_json_q = copy.deepcopy(self.json_data[0])
        # Frase intermediária do Parágrafo 3 nunca presente na antiga lista de tokens
        phrase_to_remove = "A maioria dos gatos ronrona, mas nem todos."
        self.assertIn(phrase_to_remove, tampered_json_q["textoCompartilhado"]["content"])
        tampered_json_q["textoCompartilhado"]["content"] = tampered_json_q["textoCompartilhado"]["content"].replace(phrase_to_remove, "")
        
        analysis, is_valid, divergences = analyze_single_question(
            1, pdf_q1, tampered_json_q, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertFalse(is_valid, "Conferência deve reprovar remoção de frase intermediária do Texto 1")
        self.assertEqual(analysis["statusDocumental"], "divergencia_relevante_identificada")
        self.assertTrue(any(d["tipo"] == "texto_apoio_divergente" for d in divergences))
        self.assertTrue(any("Parágrafo 3: divergência textual integral" in d["detalhe"] for d in divergences))

    def test_negative_support_text_swap_order_of_periods(self):
        """17. Negativo: Troca da ordem de dois períodos no Texto 1 deve reprovar a conferência."""
        pdf_q1 = self.pdf_questions[1]
        tampered_json_q = copy.deepcopy(self.json_data[0])
        # No Parágrafo 1, troca a ordem dos períodos 2 e 3
        orig_p1 = "Os gatos possuem uma personalidade enigmática que costuma gerar bastante curiosidade nas pessoas. Com ________________ elegantes e extremamente inteligentes, estes felinos conquistaram os corações de diversos tutores e superaram o índice de adoção entre os cachorros. Segundo pesquisa elaborada pela COMAC (Comissão de Animais em Companhia), em 2021, os gatos corresponderam a 84% dos animais de estimação adotados neste ano."
        swapped_p1 = "Os gatos possuem uma personalidade enigmática que costuma gerar bastante curiosidade nas pessoas. Segundo pesquisa elaborada pela COMAC (Comissão de Animais em Companhia), em 2021, os gatos corresponderam a 84% dos animais de estimação adotados neste ano. Com ________________ elegantes e extremamente inteligentes, estes felinos conquistaram os corações de diversos tutores e superaram o índice de adoção entre os cachorros."
        tampered_json_q["textoCompartilhado"]["content"] = tampered_json_q["textoCompartilhado"]["content"].replace(orig_p1, swapped_p1)
        tampered_json_q["enunciado"] = tampered_json_q["enunciado"].replace(orig_p1, swapped_p1)
        
        analysis, is_valid, divergences = analyze_single_question(
            1, pdf_q1, tampered_json_q, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertFalse(is_valid, "Conferência deve reprovar troca da ordem de períodos no Texto 1")
        self.assertEqual(analysis["statusDocumental"], "divergencia_relevante_identificada")
        self.assertTrue(any(d["tipo"] == "texto_apoio_divergente" for d in divergences))
        self.assertTrue(any("Parágrafo 1" in d["detalhe"] for d in divergences))

    def test_negative_support_text_numeric_alteration(self):
        """18. Negativo: Alteração de um dado numérico no Texto 1 (84% -> 85%) deve reprovar a conferência."""
        pdf_q1 = self.pdf_questions[1]
        tampered_json_q = copy.deepcopy(self.json_data[0])
        # Modifica dado numérico no texto compartilhado e no enunciado
        tampered_json_q["textoCompartilhado"]["content"] = tampered_json_q["textoCompartilhado"]["content"].replace("84%", "85%")
        tampered_json_q["enunciado"] = tampered_json_q["enunciado"].replace("84%", "85%")
        
        analysis, is_valid, divergences = analyze_single_question(
            1, pdf_q1, tampered_json_q, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertFalse(is_valid, "Conferência deve reprovar alteração de dado numérico no Texto 1")
        self.assertEqual(analysis["statusDocumental"], "divergencia_relevante_identificada")
        self.assertTrue(any(d["tipo"] == "texto_apoio_divergente" for d in divergences))
        self.assertTrue(any("84%" in tampered_json_q["textoCompartilhado"]["content"] or "Parágrafo 1" in d["detalhe"] for d in divergences))

    def test_negative_support_text_divergence_between_shared_and_enunciado(self):
        """18b. Negativo: Divergência entre textoCompartilhado.content e o texto repetido no enunciado."""
        pdf_q1 = self.pdf_questions[1]
        tampered_json_q = copy.deepcopy(self.json_data[0])
        # Altera apenas o texto no enunciado, mantendo textoCompartilhado idêntico ao PDF
        tampered_json_q["enunciado"] = tampered_json_q["enunciado"].replace("personalidade enigmática", "personalidade misteriosa")
        
        analysis, is_valid, divergences = analyze_single_question(
            1, pdf_q1, tampered_json_q, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertFalse(is_valid, "Conferência deve reprovar divergência entre textoCompartilhado e enunciado")
        self.assertEqual(analysis["statusDocumental"], "divergencia_relevante_identificada")
        self.assertTrue(any(d["tipo"] == "texto_apoio_divergente" for d in divergences))
        self.assertTrue(any("divergência entre textoCompartilhado.content e o texto repetido no enunciado" in d["detalhe"] for d in divergences))

    def test_negative_support_text_suppression_of_complete_paragraph(self):
        """18c. Negativo: Supressão de um parágrafo completo no Texto 1 deve reprovar a conferência."""
        pdf_q1 = self.pdf_questions[1]
        tampered_json_q = copy.deepcopy(self.json_data[0])
        # Remove o Parágrafo 2 completo
        paras = tampered_json_q["textoCompartilhado"]["content"].split("\n\n")
        self.assertEqual(len(paras), 4)
        tampered_json_q["textoCompartilhado"]["content"] = "\n\n".join([paras[0], paras[2], paras[3]])
        
        analysis, is_valid, divergences = analyze_single_question(
            1, pdf_q1, tampered_json_q, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertFalse(is_valid, "Conferência deve reprovar supressão de parágrafo completo")
        self.assertEqual(analysis["statusDocumental"], "divergencia_relevante_identificada")
        self.assertTrue(any(d["tipo"] == "texto_apoio_divergente" for d in divergences))
        self.assertTrue(any("Número incorreto de parágrafos" in d["detalhe"] for d in divergences))

    def test_negative_support_text_lacuna_tampering(self):
        """18d. Negativo: Adulteração na quantidade de lacunas do Texto 1 (4 -> 3) deve reprovar a conferência."""
        pdf_q1 = self.pdf_questions[1]
        tampered_json_q = copy.deepcopy(self.json_data[0])
        # Remove uma das lacunas
        tampered_json_q["textoCompartilhado"]["content"] = tampered_json_q["textoCompartilhado"]["content"].replace("Com ________________ elegantes", "Com elegantes", 1)
        tampered_json_q["enunciado"] = tampered_json_q["enunciado"].replace("Com ________________ elegantes", "Com elegantes", 1)
        
        analysis, is_valid, divergences = analyze_single_question(
            1, pdf_q1, tampered_json_q, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertFalse(is_valid, "Verificação deveria reprovar alteração na quantidade de lacunas do Texto 1")
        self.assertEqual(analysis["statusDocumental"], "divergencia_relevante_identificada")
        self.assertTrue(any(d["tipo"] == "texto_apoio_divergente" for d in divergences))

    def test_q05_vector_underline_exact_1_to_1_correspondence(self):
        """19. Positivo: Q05 deve validar a correspondência 1-para-1 de cada alternativa com traço vetorial."""
        pdf_q5 = self.pdf_questions[5]
        q5_json = self.json_data[4]
        analysis, is_valid, divergences = analyze_single_question(
            5, pdf_q5, q5_json, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertTrue(is_valid, "Q05 deve ser validada com sucesso")
        self.assertEqual(analysis["statusDocumental"], "verificacao_documental_concluida")
        self.assertTrue(analysis["evidenciaVetorial"]["comprovado"])
        self.assertEqual(analysis["evidenciaVetorial"]["tracosConfirmados"], 5)
        
        # Confere cada alternativa
        detalhes = analysis["evidenciaVetorial"]["detalhesPorAlternativa"]
        expected_phrases = {
            "A": "que eu não vou!",
            "B": "que você saia da sala.",
            "C": "quando amanhecia.",
            "D": "que mente",
            "E": "que essa novela tenha acabado."
        }
        for let, expected_phrase in expected_phrases.items():
            self.assertEqual(detalhes[let]["status"], "comprovado_vetorialmente")
            self.assertEqual(detalhes[let]["json_tagged"], expected_phrase)
            self.assertEqual(detalhes[let]["pdf_underlined"], expected_phrase)
            self.assertIsNotNone(detalhes[let]["bbox"])

    def test_negative_q05_vector_underline_removal(self):
        """20. Negativo: Remoção de tag <u> em alternativa da Q05 deve reprovar a conferência."""
        pdf_q5 = self.pdf_questions[5]
        tampered_json_q = copy.deepcopy(self.json_data[4])
        # Remove a tag <u> na alternativa A
        tampered_json_q["alternativas"][0]["text"] = "Acontece que eu não vou!"
        
        analysis, is_valid, divergences = analyze_single_question(
            5, pdf_q5, tampered_json_q, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertFalse(is_valid, "Verificação deveria reprovar Q05 sem tag <u>")
        self.assertFalse(analysis["evidenciaVetorial"]["comprovado"], "evidenciaVetorial.comprovado deve ser False")
        self.assertEqual(analysis["statusDocumental"], "divergencia_relevante_identificada")
        self.assertEqual(analysis["confrontoAlternativas"]["A"], "falha_comprovacao_vetorial")
        self.assertTrue(any(d["tipo"] == "falha_sublinhado_vetorial" for d in divergences))

    def test_negative_q05_vector_underline_displacement(self):
        """21. Negativo: Deslocamento da marcação <u> na Q05 para outra palavra deve reprovar a conferência."""
        pdf_q5 = self.pdf_questions[5]
        tampered_json_q = copy.deepcopy(self.json_data[4])
        # Desloca a tag <u> para 'Acontece' em vez de 'que eu não vou!'
        tampered_json_q["alternativas"][0]["text"] = "<u>Acontece</u> que eu não vou!"
        
        analysis, is_valid, divergences = analyze_single_question(
            5, pdf_q5, tampered_json_q, self.sha_prova, self.sha_gabarito, self.doc
        )
        self.assertFalse(is_valid, "Verificação deveria reprovar Q05 com tag <u> deslocada")
        self.assertFalse(analysis["evidenciaVetorial"]["comprovado"], "evidenciaVetorial.comprovado deve ser False")
        self.assertEqual(analysis["statusDocumental"], "divergencia_relevante_identificada")
        self.assertEqual(analysis["confrontoAlternativas"]["A"], "falha_comprovacao_vetorial")
        self.assertTrue(any(d["tipo"] == "falha_sublinhado_vetorial" for d in divergences))

if __name__ == "__main__":
    unittest.main()
