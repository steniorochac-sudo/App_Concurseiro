import unittest
import json
import os
import fitz
import sys
import re

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
        self.assertEqual(exam['banca'], 'Instituto Quadrix')
        self.assertEqual(exam['cargo'], 'Analista Contábil')
        self.assertEqual(exam['codigoCargo'], '402')
        self.assertEqual(exam['totalQuestoes'], 120)
        self.assertEqual(exam['totalAnuladas'], 0)
        self.assertEqual(exam['formatoQuestoes'], 'certo_errado')
        # Gabarito is preliminar -> homologado must be False
        self.assertFalse(exam['homologado'])
        self.assertEqual(exam['auditTrail']['tipoGabarito'], 'preliminar')
        self.assertEqual(exam['auditTrail']['statusAuditoria'], 'fidelidade_documental_aprovada_gabarito_preliminar')

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
            self.assertEqual(q['gabaritoStatus'], 'preliminar')

    def test_gabarito_cross_check_and_distribution(self):
        """Cruza respostas com o gabarito oficial da Seção 2.4 do PDF."""
        p2_g = self.g_doc[1].get_text()
        start_idx = p2_g.find("2.4 ANALISTA CONTÁBIL (CÓDIGO 402)")
        end_idx = p2_g.find("2.5", start_idx)
        if end_idx == -1:
            end_idx = p2_g.find("2.6", start_idx)
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
        self.assertEqual(c_count, 60)
        self.assertEqual(e_count, 60)

        for q in self.data['questoes']:
            num = q['numeroOriginal']
            self.assertEqual(q['gabaritoOficial'], answers[num], f"Divergência de gabarito no item {num}!")

    def test_rigorous_full_text_normalized_containment(self):
        """Verifica se segmentos representativos do texto de cada questão existem no PDF original na página correta."""
        def normalize_str(s):
            # Normalize whitespace, hyphens, and quotes
            s = s.replace('\xa0', ' ').replace('‑', '-').replace('–', '-').replace('“', '"').replace('”', '"')
            s = re.sub(r'\s+', ' ', s)
            return s.strip()

        for q in self.data['questoes']:
            num = q['numeroOriginal']
            page_no = q['metadados']['paginaOrigem']
            page_text = normalize_str(self.p_doc[page_no - 1].get_text())
            enunciado = normalize_str(q['enunciado'])
            
            # Extract first 6 words and middle 6 words
            words = enunciado.split()
            first_phrase = " ".join(words[:min(6, len(words))])
            self.assertIn(first_phrase, page_text, f"Item {num} (p.{page_no}): frase inicial '{first_phrase}' não encontrada no PDF!")
            
            if len(words) > 12:
                mid_start = len(words) // 2
                mid_phrase = " ".join(words[mid_start:mid_start+5])
                self.assertIn(mid_phrase, page_text, f"Item {num} (p.{page_no}): frase intermediária '{mid_phrase}' não encontrada no PDF!")

    def test_regression_audit_defects(self):
        """Testes específicos de regressão para os 7 itens apontados na auditoria externa."""
        qmap = {q['numeroOriginal']: q for q in self.data['questoes']}

        # Q2: Deve ser sobre imperativo 'veja' e interatividade; NÃO estatística
        q2 = qmap[2]
        self.assertIn("No título, a forma “veja”, por estar no imperativo", q2['enunciado'])
        self.assertNotIn("desvio padrão", q2['enunciado'])
        self.assertNotIn("nova média", q2['enunciado'])

        # Q3: Deve ser sobre pronome reflexivo 'se'; NÃO direito imobiliário / 50%
        q3 = qmap[3]
        self.assertIn("A palavra “se”, no trecho", q3['enunciado'])
        self.assertIn("pronome reflexivo", q3['enunciado'])
        self.assertNotIn("direito de família", q3['enunciado'])
        self.assertNotIn("50%", q3['enunciado'])

        # Q6: Deve terminar em 'subordinada adverbial temporal.' sem fragmento de apoio 'Internet:...'
        q6 = qmap[6]
        self.assertTrue(q6['enunciado'].endswith("classifica‑se como subordinada adverbial temporal.") or q6['enunciado'].endswith("classifica-se como subordinada adverbial temporal."))
        self.assertNotIn("Internet: <www.g1.globo.com>", q6['enunciado'])

        # Q23: Não deve conter texto de apoio dos 3 anos
        q23 = qmap[23]
        self.assertEqual(q23['enunciado'], "Se um processo não é atendido pela dra. Barros, então ele envolverá direito de família.")
        self.assertNotIn("Um advogado especializado", q23['enunciado'])

        # Q24: Não deve estar truncado
        q24 = qmap[24]
        self.assertIn("últimos 3 anos", q24['enunciado'])
        self.assertTrue(q24['enunciado'].endswith("processos de direito imobiliário foi igual a 60."))

        # Q25: Não deve estar truncado
        q25 = qmap[25]
        self.assertIn("Escolhendo aleatoriamente", q25['enunciado'])
        self.assertTrue(q25['enunciado'].endswith("direito do consumidor será maior que 50%."))

        # Q30: Não deve estar truncado
        q30 = qmap[30]
        self.assertIn("forem somados 2 meses", q30['enunciado'])
        self.assertTrue(q30['enunciado'].endswith("desvio padrão não será alterado."))

        # Q82: Não deve estar truncado
        q82 = qmap[82]
        self.assertIn("A Lei nº", q82['enunciado'])
        self.assertTrue(q82['enunciado'].endswith("alienação de controle."))

    def test_shared_context_association(self):
        """Verifica se os blocos contextuais compartilhados estão devidamente vinculados."""
        qmap = {q['numeroOriginal']: q for q in self.data['questoes']}

        # Q1-Q20: Texto 1 (morte do contador)
        for i in range(1, 21):
            self.assertEqual(qmap[i]['textoCompartilhado']['id'], 'quadrix-crcsp-texto-1')
            self.assertIn("Polícia de SP investiga", qmap[i]['textoCompartilhado']['title'])
            self.assertIn("Internet: <www.g1.globo.com>", qmap[i]['textoCompartilhado']['content'])

        # Q21-Q23: Regras Dr. Andrade, Barros, Costa
        for i in range(21, 24):
            self.assertEqual(qmap[i]['textoCompartilhado']['id'], 'quadrix-crcsp-context-2')
            self.assertIn("Dr. Andrade", qmap[i]['textoCompartilhado']['content'])

        # Q24-Q26: Estatísticas 3 anos
        for i in range(24, 27):
            self.assertEqual(qmap[i]['textoCompartilhado']['id'], 'quadrix-crcsp-context-3')
            self.assertIn("40% dos processos", qmap[i]['textoCompartilhado']['content'])

        # Q27-Q30: Amostra 10 processos
        for i in range(27, 31):
            self.assertEqual(qmap[i]['textoCompartilhado']['id'], 'quadrix-crcsp-context-4')
            self.assertIn("8, 12, 9, 15, 10, 8, 11, 14, 10, 13", qmap[i]['textoCompartilhado']['content'])

if __name__ == '__main__':
    unittest.main()
