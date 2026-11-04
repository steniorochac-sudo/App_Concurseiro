import unittest
import json
import os
import fitz
import sys

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from exam_mappings import PROVAS_DIR, GABARITOS_DIR, OUTPUT_DIR

class TestAnalistaContabilExam(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        json_path = os.path.join(OUTPUT_DIR, 'analista_contabil.json')
        with open(json_path, 'r', encoding='utf-8') as f:
            cls.data = json.load(f)
            
        cls.prova_path = os.path.join(PROVAS_DIR, 'analista_contabil.pdf')
        cls.gabarito_path = os.path.join(GABARITOS_DIR, 'gabarito_analista_contabil.pdf')
        
        cls.p_doc = fitz.open(cls.prova_path)
        cls.g_doc = fitz.open(cls.gabarito_path)

    def test_schema_version_and_exam_meta(self):
        self.assertEqual(self.data.get('schemaVersion'), '2.0')
        exam = self.data['exam']
        self.assertEqual(exam['banca'], 'QUADRIX')
        self.assertEqual(exam['cargo'], 'Analista Contábil')
        self.assertEqual(exam['codigoCargo'], '402')
        self.assertEqual(exam['totalQuestoes'], 120)
        self.assertEqual(exam['totalAnuladas'], 0)
        self.assertEqual(exam['formatoQuestoes'], 'certo_errado')
        self.assertTrue(exam['homologado'])

    def test_all_120_items_present_and_unique(self):
        questoes = self.data['questoes']
        self.assertEqual(len(questoes), 120)
        
        nums = [q['numeroOriginal'] for q in questoes]
        self.assertEqual(nums, list(range(1, 121)))
        
        ids = [q['id'] for q in questoes]
        self.assertEqual(len(ids), len(set(ids)))

    def test_certo_errado_format(self):
        for q in self.data['questoes']:
            self.assertEqual(q['tipo'], 'certo_errado')
            self.assertEqual(len(q['alternativas']), 2)
            self.assertEqual(q['alternativas'][0]['id'], 'C')
            self.assertEqual(q['alternativas'][0]['text'], 'CERTO')
            self.assertEqual(q['alternativas'][1]['id'], 'E')
            self.assertEqual(q['alternativas'][1]['text'], 'ERRADO')
            self.assertIn(q['gabaritoOficial'], ['C', 'E'])

    def test_blind_pdf_text_match(self):
        """Verifica se palavras-chave de cada questão existem no PDF original na página correta."""
        for q in self.data['questoes']:
            num = q['numeroOriginal']
            page_no = q['metadados']['paginaOrigem']
            page_text = self.p_doc[page_no - 1].get_text()
            
            # Extract first 4 words of the enunciado
            words = q['enunciado'].split()[:4]
            sample = " ".join(words)
            # Normalize whitespace/hyphens
            norm_sample = sample.replace('\xa0', ' ').replace('‑', '-')
            norm_page = page_text.replace('\xa0', ' ').replace('‑', '-')
            
            self.assertIn(words[0], norm_page, f"Item {num} (p{page_no}): primeira palavra '{words[0]}' não encontrada no PDF!")

    def test_gabarito_cross_check(self):
        """Cruza respostas com o gabarito oficial da Seção 2.4."""
        g_full = ""
        for p in self.g_doc:
            g_full += p.get_text() + "\n"
        start_idx = g_full.find("2.4 ANALISTA CONTÁBIL (CÓDIGO 402)")
        end_idx = g_full.find("2.5", start_idx)
        sec_text = g_full[start_idx:end_idx]
        lines_g = [l.strip() for l in sec_text.splitlines() if l.strip() and not l.startswith('2.4')]
        
        answers = {}
        i = 0
        while i < len(lines_g):
            if lines_g[i].isdigit():
                nums = []
                while i < len(lines_g) and lines_g[i].isdigit():
                    nums.append(int(lines_g[i]))
                    i += 1
                ans = []
                while i < len(lines_g) and lines_g[i] in ['C', 'E', 'X']:
                    ans.append(lines_g[i])
                    i += 1
                for n, a in zip(nums, ans):
                    answers[n] = a
            else:
                i += 1
                
        for q in self.data['questoes']:
            num = q['numeroOriginal']
            self.assertEqual(q['gabaritoOficial'], answers[num], f"Divergência de gabarito no item {num}!")

if __name__ == '__main__':
    unittest.main()
