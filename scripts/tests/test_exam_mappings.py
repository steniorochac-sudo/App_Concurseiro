import unittest
import os
import fitz
import sys

# Ensure scripts can be imported
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from exam_mappings import EXAM_MAPPINGS, PROVAS_DIR, GABARITOS_DIR

class TestExamMappings(unittest.TestCase):
    def test_total_count(self):
        self.assertEqual(len(EXAM_MAPPINGS), 26, "O catálogo deve conter exatamente 26 cadernos de prova mapeados.")

    def test_unique_ids(self):
        ids = [m['id'] for m in EXAM_MAPPINGS]
        self.assertEqual(len(ids), len(set(ids)), "Cada exame deve ter um ID único no catálogo.")

    def test_files_exist_and_pages_valid(self):
        for m in EXAM_MAPPINGS:
            p_path = os.path.join(PROVAS_DIR, m['prova'])
            g_path = os.path.join(GABARITOS_DIR, m['gabarito'])
            
            self.assertTrue(os.path.isfile(p_path), f"Arquivo de prova não encontrado: {p_path}")
            self.assertTrue(os.path.isfile(g_path), f"Arquivo de gabarito não encontrado: {g_path}")
            
            p_doc = fitz.open(p_path)
            self.assertGreater(len(p_doc), 0, f"Prova vazia: {m['prova']}")
            
            g_doc = fitz.open(g_path)
            self.assertGreater(len(g_doc), 0, f"Gabarito vazio: {m['gabarito']}")
            
            # Check gabarito page range
            pag = m.get('gabarito_pagina')
            self.assertIsNotNone(pag, f"Gabarito sem página indicada: {m['id']}")
            self.assertGreaterEqual(pag, 1, f"Página de gabarito inválida (< 1): {m['id']}")
            self.assertLessEqual(pag, len(g_doc), f"Página de gabarito {pag} excede total {len(g_doc)} em {m['gabarito']}")

    def test_mandatory_fields(self):
        required = ['id', 'prova', 'gabarito', 'orgao', 'banca', 'cargo', 'ano', 'formato', 'total_questoes', 'gabarito_secao', 'gabarito_pagina', 'gabarito_status']
        for m in EXAM_MAPPINGS:
            for field in required:
                self.assertIn(field, m, f"Campo obrigatório '{field}' ausente em {m.get('id')}")
            self.assertGreater(m['total_questoes'], 0, f"total_questoes deve ser > 0 em {m['id']}")
            self.assertIn(m['formato'], ['multipla_escolha_4', 'multipla_escolha_5', 'certo_errado', 'misto'])

if __name__ == '__main__':
    unittest.main()
