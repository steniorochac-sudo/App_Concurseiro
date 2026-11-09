import unittest
import json
from pathlib import Path
import pymupdf
import re

BASE_DIR = Path(__file__).resolve().parent.parent.parent
PDF_PATH = BASE_DIR / "provas_pdf" / "agente_fiscal_tributario 1.pdf"
GABARITO_PDF_PATH = BASE_DIR / "gabaritos_pdf" / "gabarito_agente_fiscal_tributario 1.pdf"
JSON_PATH = BASE_DIR / "src" / "data" / "imported" / "agente_fiscal_tributario_1.json"

OFFICIAL_GABARITO_6M02 = [
    "E", "A", "C", "C", "D", "A", "D", "B", "E", "B",
    "E", "A", "B", "D", "C", "E", "A", "C", "E", "D",
    "C", "B", "B", "A", "E", "D", "B", "A", "X", "B",
    "C", "E", "D", "A", "D", "C", "B", "D", "C", "A"
]

class TestFepeseDocumentaryConferral(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.doc = pymupdf.open(PDF_PATH)
        cls.gab_doc = pymupdf.open(GABARITO_PDF_PATH)
        with open(JSON_PATH, "r", encoding="utf-8") as f:
            cls.json_data = json.load(f)

    def test_pdf_structure_and_pages(self):
        """1. O caderno de prova oficial da FEPESE deve conter exatamente 12 páginas."""
        self.assertEqual(len(self.doc), 12)
        # Capa na página 1
        p1_text = self.doc[0].get_text()
        self.assertIn("6M02 Agente Fiscal Tributário", p1_text)
        self.assertIn("40 questões", p1_text)
        self.assertIn("Edital 006/2022", p1_text)

    def test_official_gabarito_6m02_reconciliation(self):
        """2. A seção 6M02 do gabarito definitivo oficial na página 2 deve conter as 40 respostas exatas."""
        self.assertEqual(len(self.gab_doc), 3)
        p2_text = self.gab_doc[1].get_text()
        self.assertIn("6M02 Agente Fiscal Tributário", p2_text)
        
        # Extrai as 40 respostas da seção 6M02
        idx_start = p2_text.find("6M02 Agente Fiscal Tributário")
        idx_end = p2_text.find("6M03 Agente Social", idx_start)
        section_text = p2_text[idx_start:idx_end]
        
        lines = [l.strip() for l in section_text.split('\n') if l.strip()]
        idx_40 = lines.index('40')
        answers = lines[idx_40 + 1 : idx_40 + 41]
        self.assertEqual(len(answers), 40)
        upper_answers = [a.upper() for a in answers]
        self.assertEqual(upper_answers, OFFICIAL_GABARITO_6M02)

    def test_question_29_is_annulled_in_official_key(self):
        """3. A questão 29 deve ser inequivocamente 'X' (anulada) no gabarito oficial 6M02."""
        self.assertEqual(OFFICIAL_GABARITO_6M02[28], "X")
        q29_json = self.json_data[28]
        self.assertEqual(q29_json["id"], "q-agente_fiscal_tributario_1-29")
        self.assertEqual(q29_json["gabarito"], "X")

    def test_all_40_questions_in_json_match_official_answers(self):
        """4. Todas as 40 questões no JSON devem coincidir 100% com o gabarito 6M02."""
        self.assertEqual(len(self.json_data), 40)
        for i, q in enumerate(self.json_data):
            self.assertEqual(q["gabarito"].upper(), OFFICIAL_GABARITO_6M02[i], f"Questão {i+1} diverge do gabarito 6M02")

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
        for q_num in range(1, 41):
            expected_page = None
            for r, p in page_ranges.items():
                if q_num in r:
                    expected_page = p
                    break
            self.assertIsNotNone(expected_page)
            p_text = self.doc[expected_page - 1].get_text()
            self.assertIn(f"{q_num}.", p_text, f"Questão {q_num} deve estar na página {expected_page}")

if __name__ == "__main__":
    unittest.main()
