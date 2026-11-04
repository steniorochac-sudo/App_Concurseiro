import unittest
import json
import os
import fitz
import sys

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from exam_mappings import PROVAS_DIR, GABARITOS_DIR, OUTPUT_DIR

class TestAnalistaContabilTipo1Exam(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        json_path = os.path.join(OUTPUT_DIR, 'analista_contabil_tipo_1.json')
        with open(json_path, 'r', encoding='utf-8') as f:
            cls.data = json.load(f)
            
        cls.prova_path = os.path.join(PROVAS_DIR, 'analista_contabil_tipo_1.pdf')
        cls.gabarito_path = os.path.join(GABARITOS_DIR, 'gabarito_analista_contabil_tipo_1.pdf')
        
        cls.p_doc = fitz.open(cls.prova_path)
        cls.g_doc = fitz.open(cls.gabarito_path)

    def test_schema_version_and_exam_meta(self):
        self.assertEqual(self.data.get('schemaVersion'), '2.0')
        exam = self.data['exam']
        self.assertEqual(exam['banca'], 'FGV')
        self.assertEqual(exam['orgao'], 'Defensoria Pública do Estado de Rondônia (DPE-RO)')
        self.assertEqual(exam['ano'], 2015)
        self.assertEqual(exam['totalQuestoes'], 70)
        self.assertEqual(exam['totalAnuladas'], 0)
        self.assertEqual(exam['formatoQuestoes'], 'multipla_escolha_5')
        self.assertTrue(exam['homologado'])

    def test_all_70_questions_present_and_unique(self):
        questoes = self.data['questoes']
        self.assertEqual(len(questoes), 70)
        
        nums = [q['numeroOriginal'] for q in questoes]
        self.assertEqual(nums, list(range(1, 71)))
        
        ids = [q['id'] for q in questoes]
        self.assertEqual(len(ids), len(set(ids)))

    def test_alternatives_complete(self):
        for q in self.data['questoes']:
            self.assertEqual(q['tipo'], 'multipla_escolha')
            self.assertEqual(len(q['alternativas']), 5)
            alt_ids = [a['id'] for a in q['alternativas']]
            self.assertEqual(alt_ids, ['A', 'B', 'C', 'D', 'E'])
            for a in q['alternativas']:
                self.assertGreater(len(a['text']), 0, f"Alternativa {a['id']} vazia na Q{q['numeroOriginal']}")
            self.assertIn(q['gabaritoOficial'], ['A', 'B', 'C', 'D', 'E'])

    def test_blind_pdf_text_match(self):
        """Verifica se palavras-chave de cada questão existem no PDF original na página correta."""
        for q in self.data['questoes']:
            num = q['numeroOriginal']
            page_no = q['metadados']['paginaOrigem']
            page_text = self.p_doc[page_no - 1].get_text()
            
            # Extract first 4 words of the enunciado
            words = q['enunciado'].replace('<u>', '').replace('</u>', '').split()[:3]
            sample = " ".join(words)
            norm_sample = sample.replace('\xa0', ' ')
            norm_page = page_text.replace('\xa0', ' ')
            
            self.assertIn(words[0], norm_page, f"Questão {num} (p{page_no}): primeira palavra '{words[0]}' não encontrada no PDF!")

    def test_gabarito_cross_check(self):
        """Cruza respostas com o gabarito oficial da FGV para Tipo 1."""
        p1_g = self.g_doc[0].get_text()
        lines_g = [l.strip() for l in p1_g.splitlines() if l.strip() and not l.startswith('pcimarkpci') and 'pciconcursos' not in l]
        start_g = 0
        for idx, l in enumerate(lines_g):
            if "Tipo 1" in l:
                start_g = idx + 1
                break
                
        answers = {}
        g_stream = lines_g[start_g:]
        i = 0
        while i < len(g_stream):
            if g_stream[i].isdigit():
                nums = []
                while i < len(g_stream) and g_stream[i].isdigit():
                    nums.append(int(g_stream[i]))
                    i += 1
                ans = []
                while i < len(g_stream) and g_stream[i] in ['A', 'B', 'C', 'D', 'E', 'X']:
                    ans.append(g_stream[i])
                    i += 1
                for n, a in zip(nums, ans):
                    answers[n] = a
            else:
                i += 1
                
        for q in self.data['questoes']:
            num = q['numeroOriginal']
            self.assertEqual(q['gabaritoOficial'], answers[num], f"Divergência de gabarito na questão {num}!")

if __name__ == '__main__':
    unittest.main()
