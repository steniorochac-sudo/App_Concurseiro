import unittest
import json
import os
import fitz
import sys
import re

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from exam_mappings import PROVAS_DIR, GABARITOS_DIR, OUTPUT_DIR

class TestProvaObjetivaAuditorExam(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        json_path = os.path.join(OUTPUT_DIR, 'prova_objetiva_auditor.json')
        with open(json_path, 'r', encoding='utf-8') as f:
            cls.data = json.load(f)
            
        cls.prova_path = os.path.join(PROVAS_DIR, 'prova_objetiva_auditor.pdf')
        cls.gabarito_path = os.path.join(GABARITOS_DIR, 'gabarito_prova_objetiva_auditor.pdf')
        
        cls.p_doc = fitz.open(cls.prova_path)
        cls.g_doc = fitz.open(cls.gabarito_path)

    def test_schema_version_and_exam_meta(self):
        self.assertEqual(self.data.get('schemaVersion'), '2.0')
        exam = self.data['exam']
        self.assertEqual(exam['banca'], 'Fundação VUNESP')
        self.assertEqual(exam['cargo'], 'Auditor Fiscal Tributário Municipal')
        self.assertEqual(exam['codigoCargo'], '001')
        self.assertEqual(exam['totalQuestoes'], 80)
        self.assertEqual(exam['totalAnuladas'], 0)
        self.assertEqual(exam['formatoQuestoes'], 'multipla_escolha_5')
        self.assertTrue(exam['homologado'])
        self.assertEqual(exam['auditTrail']['tipoGabarito'], 'definitivo')
        self.assertEqual(exam['auditTrail']['arquivoProvaPdf'], 'prova_objetiva_auditor.pdf')

    def test_all_80_items_present_and_unique(self):
        questoes = self.data['questoes']
        self.assertEqual(len(questoes), 80)
        
        nums = [q['numeroOriginal'] for q in questoes]
        self.assertEqual(nums, list(range(1, 81)))
        
        ids = [q['id'] for q in questoes]
        self.assertEqual(len(ids), len(set(ids)))

    def test_multipla_escolha_5_format(self):
        for q in self.data['questoes']:
            self.assertEqual(q['tipo'], 'multipla_escolha')
            self.assertEqual(len(q['alternativas']), 5)
            opt_ids = [a['id'] for a in q['alternativas']]
            self.assertEqual(opt_ids, ['A', 'B', 'C', 'D', 'E'])
            self.assertIn(q['gabaritoOficial'], ['A', 'B', 'C', 'D', 'E'])
            self.assertEqual(q['gabaritoStatus'], 'valido')
            self.assertTrue(len(q['enunciado'].strip()) > 15)
            self.assertTrue(3 <= q['metadados']['paginaOrigem'] <= 19)

    def test_gabarito_matches_official_pdf(self):
        g_text = self.g_doc[0].get_text()
        raw_gab = dict(re.findall(r'(\d{1,2})\s*-\s*([A-E])', g_text))
        self.assertEqual(len(raw_gab), 80)
        
        for q in self.data['questoes']:
            num_str = str(q['numeroOriginal'])
            self.assertEqual(q['gabaritoOficial'], raw_gab[num_str], f"Q{q['numeroOriginal']} gabarito mismatch")

    def test_text_containment_in_pdf(self):
        def norm(s):
            s = s.replace('\u00a0', ' ').replace('\u2011', '-').replace('–', '-').replace('—', '-')
            s = re.sub(r'\s+', ' ', s)
            return s.strip()

        full_pdf = norm("\n".join(self.p_doc[pno].get_text() for pno in range(2, 19)))
        for q in self.data['questoes']:
            clean_stmt = norm(re.sub(r'!\[.*?\]\(.*?\)|\|.*?\|', '', q['enunciado']))
            slice_35 = clean_stmt[:35]
            self.assertIn(slice_35, full_pdf, f"Q{q['numeroOriginal']} slice '{slice_35}' not found in PDF")

    def test_visual_assets_and_tables(self):
        q_map = {q['numeroOriginal']: q for q in self.data['questoes']}
        
        # Q12
        self.assertIn('q12_diagrama.png', q_map[12]['enunciado'])
        
        # Q17
        self.assertIn('q17_enunciado.png', q_map[17]['enunciado'])
        self.assertIn('q17_alternativa_a.png', q_map[17]['alternativas'][0]['text'])
        
        # Q24 SAC
        self.assertIn('q24_tabela.png', q_map[24]['enunciado'])
        self.assertIn('| Parcela | Valor da parcela |', q_map[24]['enunciado'])
        
        # Q25 TIR
        self.assertIn('q25_tabela.png', q_map[25]['enunciado'])
        self.assertIn('| Mês | Fluxo de caixa |', q_map[25]['enunciado'])
        
        # Q65 Accounting
        self.assertIn('| Item | Valor (R$) |', q_map[65]['enunciado'])

if __name__ == '__main__':
    unittest.main()
