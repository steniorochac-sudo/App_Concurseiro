import unittest
import json
import os
import fitz
import sys
import re

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from exam_mappings import PROVAS_DIR, GABARITOS_DIR, OUTPUT_DIR

class TestAnalistaContabil2Exam(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        json_path = os.path.join(OUTPUT_DIR, 'analista_contabil2.json')
        with open(json_path, 'r', encoding='utf-8') as f:
            cls.data = json.load(f)
            
        cls.prova_path = os.path.join(PROVAS_DIR, 'analista_contabil2.pdf')
        cls.gabarito_path = os.path.join(GABARITOS_DIR, 'gabarito_analista_contabil2.pdf')
        
        cls.p_doc = fitz.open(cls.prova_path)
        cls.g_doc = fitz.open(cls.gabarito_path)

    def test_schema_version_and_exam_meta(self):
        self.assertEqual(self.data.get('schemaVersion'), '2.0')
        exam = self.data['exam']
        self.assertEqual(exam['banca'], 'Instituto Quadrix')
        self.assertEqual(exam['cargo'], 'Analista Contábil')
        self.assertEqual(exam['codigoCargo'], '403')
        self.assertEqual(exam['totalQuestoes'], 120)
        self.assertEqual(exam['totalAnuladas'], 0)
        self.assertEqual(exam['formatoQuestoes'], 'certo_errado')
        self.assertTrue(exam['homologado'])
        self.assertEqual(exam['auditTrail']['tipoGabarito'], 'definitivo')
        self.assertEqual(exam['auditTrail']['statusAuditoria'], 'fidelidade_documental_aprovada_gabarito_definitivo')

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
            if q['numeroOriginal'] in [55, 60, 61]:
                self.assertEqual(q['gabaritoStatus'], 'alterado')
            else:
                self.assertEqual(q['gabaritoStatus'], 'valido')
            self.assertTrue(len(q['enunciado'].strip()) > 10)

    def test_gabarito_cross_check_and_distribution(self):
        """Cruza respostas com o gabarito oficial da Seção 2.5 do PDF."""
        p2_g = self.g_doc[1].get_text()
        start_idx = p2_g.find("2.5 ANALISTA CONT")
        end_idx = p2_g.find("Brasília/DF", start_idx)
        sec_text = p2_g[start_idx:end_idx]
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
                
        self.assertEqual(len(answers), 120)
        c_count = sum(1 for a in answers.values() if a == 'C')
        e_count = sum(1 for a in answers.values() if a == 'E')
        self.assertEqual(c_count, 51)
        self.assertEqual(e_count, 69)

        for q in self.data['questoes']:
            num = q['numeroOriginal']
            self.assertEqual(q['gabaritoOficial'], answers[num], f"Divergência de gabarito no item {num}!")

    def test_rigorous_full_text_normalized_containment(self):
        """Verifica se 100% dos enunciados existem literalmente no PDF oficial."""
        def norm(s):
            if not s: return ''
            s = s.replace('\xa0', ' ').replace('‑', '-').replace('–', '-').replace('—', '-')
            s = re.sub(r'\s+', ' ', s)
            return s.strip()

        full_pdf = norm(' '.join(p.get_text() for p in self.p_doc))
        for q in self.data['questoes']:
            stmt = norm(q['enunciado'])
            self.assertIn(stmt, full_pdf, f"Item {q['numeroOriginal']} não encontrado literalmente no PDF!")

    def test_shared_contexts_presence(self):
        """Verifica se 100% dos blocos contextuais compartilhados existem no PDF oficial."""
        def norm(s):
            if not s: return ''
            s = s.replace('\xa0', ' ').replace('‑', '-').replace('–', '-').replace('—', '-')
            s = re.sub(r'\s+', ' ', s)
            return s.strip()

        full_pdf = norm(' '.join(p.get_text() for p in self.p_doc))
        shared = {}
        for q in self.data['questoes']:
            st = q.get('textoCompartilhado')
            if st and st['id'] not in shared:
                shared[st['id']] = st

        self.assertEqual(len(shared), 20)
        for tid, st in shared.items():
            chunks = [c.strip() for c in re.split(r'\|.*\||\n\n', st['content']) if len(c.strip()) > 20]
            for c in chunks:
                if not c.startswith('**') and not c.startswith('\\*'):
                    self.assertIn(norm(c), full_pdf, f"Trecho contextual de {tid} ausente do PDF: {c[:40]}")

if __name__ == '__main__':
    unittest.main()
