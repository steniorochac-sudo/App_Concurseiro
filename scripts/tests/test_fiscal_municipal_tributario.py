import unittest
import json
import os
import fitz
import sys
import re

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from exam_mappings import PROVAS_DIR, GABARITOS_DIR, OUTPUT_DIR

class TestFiscalMunicipalTributarioExam(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        json_path = os.path.join(OUTPUT_DIR, 'fiscal_municipal_tributario.json')
        with open(json_path, 'r', encoding='utf-8') as f:
            cls.data = json.load(f)
            
        cls.prova_path = os.path.join(PROVAS_DIR, 'fiscal_municipal_tributario.pdf')
        cls.gabarito_path = os.path.join(GABARITOS_DIR, 'gabaritos_finais_fiscal_municipal_tributario.pdf')
        
        cls.p_doc = fitz.open(cls.prova_path)
        cls.g_doc = fitz.open(cls.gabarito_path)

    def test_schema_version_and_exam_meta(self):
        self.assertEqual(self.data.get('schemaVersion'), '2.0')
        exam = self.data['exam']
        self.assertEqual(exam['banca'], 'Instituto Mais')
        self.assertEqual(exam['cargo'], 'Fiscal Municipal Tributário')
        self.assertEqual(exam['codigoCargo'], '231')
        self.assertEqual(exam['totalQuestoes'], 40)
        self.assertEqual(exam['totalAnuladas'], 0)
        self.assertEqual(exam['formatoQuestoes'], 'multipla_escolha_4')
        self.assertTrue(exam['homologado'])
        self.assertEqual(exam['auditTrail']['tipoGabarito'], 'definitivo')
        self.assertEqual(exam['auditTrail']['arquivoProvaPdf'], 'fiscal_municipal_tributario.pdf')

    def test_all_40_items_present_and_unique(self):
        questoes = self.data['questoes']
        self.assertEqual(len(questoes), 40)
        
        nums = [q['numeroOriginal'] for q in questoes]
        self.assertEqual(nums, list(range(1, 41)))
        
        ids = [q['id'] for q in questoes]
        self.assertEqual(len(ids), len(set(ids)))

    def test_multipla_escolha_4_format(self):
        for q in self.data['questoes']:
            self.assertEqual(q['tipo'], 'multipla_escolha')
            self.assertEqual(len(q['alternativas']), 4)
            opt_ids = [a['id'] for a in q['alternativas']]
            self.assertEqual(opt_ids, ['A', 'B', 'C', 'D'])
            self.assertIn(q['gabaritoOficial'], ['A', 'B', 'C', 'D'])
            self.assertEqual(q['gabaritoStatus'], 'valido')
            self.assertTrue(len(q['enunciado'].strip()) > 15)
            self.assertTrue(2 <= q['metadados']['paginaOrigem'] <= 7)

    def test_gabarito_matches_official_pdf(self):
        p1_g = self.g_doc[0].get_text()
        start_g = p1_g.find("231 – Fiscal Municipal Tributário")
        end_g = p1_g.find("232 – Fiscal Municipal Ambiental", start_g)
        sec_text = p1_g[start_g:end_g]
        lines_g = [l.strip() for l in sec_text.splitlines() if l.strip()]
        nums = [int(l) for l in lines_g[1:41]]
        ans = lines_g[41:81]
        raw_gab = dict(zip(nums, ans))
        self.assertEqual(len(raw_gab), 40)
        
        for q in self.data['questoes']:
            self.assertEqual(q['gabaritoOficial'], raw_gab[q['numeroOriginal']], f"Q{q['numeroOriginal']} gabarito mismatch")

    def test_text_containment_in_pdf(self):
        def norm(s):
            s = s.replace('\u00a0', ' ').replace('\u2011', '-').replace('–', '-').replace('—', '-')
            s = re.sub(r'\s+', ' ', s)
            return s.strip()

        full_pdf = norm("\n".join(self.p_doc[pno].get_text() for pno in range(1, len(self.p_doc))))
        for q in self.data['questoes']:
            clean_stmt = norm(re.sub(r'!\[.*?\]\(.*?\)|\|.*?\|', '', q['enunciado']))
            slice_35 = clean_stmt[:35]
            self.assertIn(slice_35, full_pdf, f"Q{q['numeroOriginal']} slice '{slice_35}' not found in PDF")

    def test_shared_text_and_preambles(self):
        q_map = {q['numeroOriginal']: q for q in self.data['questoes']}
        
        # Q1 to Q5 have shared text
        for i in range(1, 6):
            self.assertIn('textoCompartilhado', q_map[i])
            self.assertIn('Bia Braune', q_map[i]['textoCompartilhado']['title'])
        
        self.assertNotIn('textoCompartilhado', q_map[6])
        
        # Preambles in Q2, Q4, Q5, Q7
        self.assertIn('Analise o trecho abaixo para responder à questão 2.', q_map[2]['enunciado'])
        self.assertIn('Analise a frase abaixo para responder à questão 4.', q_map[4]['enunciado'])
        self.assertIn('Analise a frase abaixo para responder à questão 5.', q_map[5]['enunciado'])
        self.assertIn('Analise a frase abaixo para responder à questão 7.', q_map[7]['enunciado'])

if __name__ == '__main__':
    unittest.main()
