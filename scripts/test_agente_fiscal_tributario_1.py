import json
import sys
import unittest
import pymupdf

sys.stdout.reconfigure(encoding='utf-8')

class TestAgenteFiscalTributario1(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        with open('src/data/imported/agente_fiscal_tributario_1.json', encoding='utf-8') as f:
            cls.questions = json.load(f)
            
        cls.doc_prova = pymupdf.open('provas_pdf/agente_fiscal_tributario 1.pdf')
        cls.doc_gab = pymupdf.open('gabaritos_pdf/gabarito_agente_fiscal_tributario 1.pdf')
        
        # Gabarito oficial para 6M02 Agente Fiscal Tributário
        cls.gabarito_oficial = [
            'E', 'A', 'C', 'C', 'D', 'A', 'D', 'B', 'E', 'B',
            'E', 'A', 'B', 'D', 'C', 'E', 'A', 'C', 'E', 'D',
            'C', 'B', 'B', 'A', 'E', 'D', 'B', 'A', 'X', 'B',
            'C', 'E', 'D', 'A', 'D', 'C', 'B', 'D', 'C', 'A'
        ]

    def test_total_questions(self):
        self.assertEqual(len(self.questions), 40, "Deve haver exatamente 40 questões")

    def test_unique_sequential_ids(self):
        ids = [q['id'] for q in self.questions]
        self.assertEqual(len(ids), len(set(ids)), "IDs devem ser únicos")
        for i, qid in enumerate(ids, 1):
            expected = f"q-agente_fiscal_tributario_1-{i:02d}"
            self.assertEqual(qid, expected)

    def test_metadata_fields(self):
        for q in self.questions:
            self.assertEqual(q['banca'], 'FEPESE')
            self.assertEqual(q['ano'], 2023)
            self.assertEqual(q['orgao'], 'Prefeitura de Balneário Camboriú')
            self.assertEqual(q['cargo'], 'Agente Fiscal Tributário')
            self.assertIn(q['dificuldade'], ['fácil', 'médio', 'difícil'])
            self.assertTrue(len(q['disciplina']) > 0)
            self.assertTrue(len(q['assunto']) > 0)
            self.assertTrue(len(q['subtopicos']) > 0)
            self.assertTrue(len(q['baseLegal']) > 0)
            self.assertTrue(len(q['fontePesquisa']) > 0)

    def test_alternatives_structure(self):
        for q in self.questions:
            alts = q['alternativas']
            self.assertEqual(len(alts), 5, f"Questão {q['id']} deve ter 5 alternativas")
            ids = [a['id'] for a in alts]
            self.assertEqual(ids, ['A', 'B', 'C', 'D', 'E'])
            for a in alts:
                self.assertTrue(len(a['text'].strip()) > 0)
                self.assertNotIn('SQUARE', a['text'])
                self.assertNotIn('Check-square', a['text'])

    def test_gabarito_strict_match(self):
        for i, q in enumerate(self.questions):
            expected = self.gabarito_oficial[i]
            self.assertEqual(q['gabarito'].upper(), expected, f"Gabarito divergente na questão {i+1}")

    def test_question_29_anulada(self):
        q29 = self.questions[28]
        self.assertEqual(q29['gabarito'], 'X')
        self.assertIn('alertaProfessor', q29)
        self.assertIn('ANULADA', q29['alertaProfessor'])
        self.assertIn('ANULADA', q29['explicacao'])

    def test_q5_underlined_clauses(self):
        q5 = self.questions[4]
        for a in q5['alternativas']:
            self.assertIn('<u>', a['text'])
            self.assertIn('</u>', a['text'])

    def test_q1_and_q2_texto_1(self):
        for idx in [0, 1]:
            self.assertIn('> [Texto 1]', self.questions[idx]['enunciado'])
            self.assertIn('Os gatos', self.questions[idx]['enunciado'])

if __name__ == '__main__':
    unittest.main()
