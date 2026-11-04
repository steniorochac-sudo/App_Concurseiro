import unittest
import json
import os
import fitz
import sys
import re

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
        # Gabarito is preliminar -> homologado must be False
        self.assertFalse(exam['homologado'])
        self.assertEqual(exam['auditTrail']['tipoGabarito'], 'preliminar')
        self.assertEqual(exam['auditTrail']['statusAuditoria'], 'fidelidade_documental_aprovada_gabarito_preliminar')

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
            self.assertEqual(q['gabaritoStatus'], 'preliminar')

    def test_gabarito_cross_check_and_distribution(self):
        """Cruza respostas com o gabarito oficial da FGV para Tipo 1 (Página 1 do gabarito oficial)."""
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
                
        self.assertEqual(len(answers), 70)
        
        # Verify exact official distribution: A=13, B=13, C=15, D=19, E=10
        dist = {k: sum(1 for a in answers.values() if a == k) for k in ['A', 'B', 'C', 'D', 'E']}
        self.assertEqual(dist['A'], 13, f"Esperado A=13, obtido {dist['A']}")
        self.assertEqual(dist['B'], 13, f"Esperado B=13, obtido {dist['B']}")
        self.assertEqual(dist['C'], 15, f"Esperado C=15, obtido {dist['C']}")
        self.assertEqual(dist['D'], 19, f"Esperado D=19, obtido {dist['D']}")
        self.assertEqual(dist['E'], 10, f"Esperado E=10, obtido {dist['E']}")

        for q in self.data['questoes']:
            num = q['numeroOriginal']
            self.assertEqual(q['gabaritoOficial'], answers[num], f"Divergência de gabarito na questão {num}!")

    def test_rigorous_full_text_normalized_containment(self):
        """Verifica se segmentos do texto de cada questão existem no PDF original na página correta."""
        def normalize_str(s):
            s = s.replace('<u>', '').replace('</u>', '')
            s = s.replace('\xa0', ' ').replace('‑', '-').replace('–', '-').replace('“', '"').replace('”', '"')
            s = re.sub(r'!\[.*?\]\(.*?\)', '', s)
            s = re.sub(r'\|.*?\|', '', s)
            s = re.sub(r'\s+', ' ', s)
            return s.strip()

        for q in self.data['questoes']:
            num = q['numeroOriginal']
            page_no = q['metadados']['paginaOrigem']
            page_text = normalize_str(self.p_doc[page_no - 1].get_text())
            enunciado = normalize_str(q['enunciado'])
            
            words = enunciado.split()
            if len(words) >= 4:
                first_phrase = " ".join(words[:4])
                self.assertIn(first_phrase, page_text, f"Questão {num} (p.{page_no}): frase '{first_phrase}' não encontrada no PDF!")

    def test_regression_audit_defects(self):
        """Testes específicos de regressão para os itens apontados na auditoria externa (Q04, Q13, Q17, Q23, Q30, Q47, Q48, Q49)."""
        qmap = {q['numeroOriginal']: q for q in self.data['questoes']}

        # Q04: Charge visual recuperada
        q4 = qmap[4]
        self.assertIsNotNone(q4.get('imagens'))
        self.assertIn("/assets/exams/analista_contabil_tipo_1/q04_charge.png", q4['imagens'])
        charge_path = os.path.join("public", "assets", "exams", "analista_contabil_tipo_1", "q04_charge.png")
        self.assertTrue(os.path.exists(charge_path), f"Arquivo de imagem da charge não existe: {charge_path}")
        self.assertIn("![Charge](/assets/exams/analista_contabil_tipo_1/q04_charge.png)", q4['enunciado'])

        # Q13: Preservar as duas ocorrências sublinhadas de "mesmo"
        q13 = qmap[13]
        self.assertIn("<u>Mesmo</u>", q13['enunciado'])
        self.assertIn("<u>mesmo</u>", q13['enunciado'])

        # Q17: Gráfico de responsabilidade penal recuperado
        q17 = qmap[17]
        self.assertIsNotNone(q17.get('imagens'))
        self.assertIn("/assets/exams/analista_contabil_tipo_1/q17_grafico.png", q17['imagens'])
        grafico_path = os.path.join("public", "assets", "exams", "analista_contabil_tipo_1", "q17_grafico.png")
        self.assertTrue(os.path.exists(grafico_path), f"Arquivo de imagem do gráfico não existe: {grafico_path}")
        self.assertIn("![Gráfico](/assets/exams/analista_contabil_tipo_1/q17_grafico.png)", q17['enunciado'])

        # Q23: Tabelas dos rios e balsas
        q23 = qmap[23]
        self.assertIn("| Rio | Investimento $ |", q23['enunciado'])
        self.assertIn("| Rio | Balsa | Valor de Mercado $ |", q23['enunciado'])

        # Q30: Tabelas CAESG e Clean Tubus
        q30 = qmap[30]
        self.assertIn("**CAESG**", q30['enunciado'])
        self.assertIn("**Clean Tubus**", q30['enunciado'])
        self.assertIn("| Acionistas | Valor - $ | Part. % |", q30['enunciado'])

        # Q47: Alternativa E sem fragmento indevido do Quadro I
        q47 = qmap[47]
        alt_e = [a['text'] for a in q47['alternativas'] if a['id'] == 'E'][0]
        self.assertEqual(alt_e, "transferências intergovernamentais.")
        self.assertNotIn("Quadro I", alt_e)
        self.assertNotIn("Receitas Correntes", alt_e)

        # Q48 & Q49: Quadro I recuperado e associado como textoCompartilhado
        q48 = qmap[48]
        q49 = qmap[49]
        self.assertIsNotNone(q48.get('textoCompartilhado'))
        self.assertIsNotNone(q49.get('textoCompartilhado'))
        self.assertEqual(q48['textoCompartilhado']['id'], 'fgv-dpero-quadro-1')
        self.assertEqual(q49['textoCompartilhado']['id'], 'fgv-dpero-quadro-1')
        self.assertIn("| Receitas Correntes | 4.600.000,00 | 4.460.000,00 |", q48['textoCompartilhado']['content'])
        self.assertIn("| Despesas Correntes | 3.800.000,00 | 3.850.000,00 |", q48['textoCompartilhado']['content'])

if __name__ == '__main__':
    unittest.main()
