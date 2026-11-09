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

if __name__ == "__main__":
    unittest.main()
