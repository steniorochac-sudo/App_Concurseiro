import unittest
import json
from pathlib import Path
import sys

BASE_DIR = Path(__file__).resolve().parent.parent.parent
sys.path.insert(0, str(BASE_DIR))

from scripts.audit_manifest_7_exams import audit, EXAMS

class TestDocumentaryStatusRegistry(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.registry_path = BASE_DIR / "src" / "data" / "documentary_status_registry.json"
        with open(cls.registry_path, "r", encoding="utf-8") as f:
            cls.registry = json.load(f)

    def test_registry_contains_exactly_seven_exams(self):
        """1. O registro documental único deve mapear exatamente os 7 cadernos oficiais do acervo."""
        self.assertEqual(len(self.registry), 7)
        expected_ids = {
            "quadrix-2025-crcsp-analista-contabil",
            "fgv-2015-dpero-analista-contabil",
            "quadrix-2024-crefito17-analista-contabil",
            "quadrix-2024-crtes-analista-contabil",
            "vunesp-2014-pmrp-auditor-fiscal-tributario",
            "instituto-mais-2022-santana-parnaiba-fiscal-tributario",
            "fepese-2023-bc-agente-fiscal-tributario",
        }
        self.assertEqual(set(self.registry.keys()), expected_ids)

    def test_all_seven_exams_are_pending_documentary_verification(self):
        """2. Nenhum dos 7 cadernos pode ter homologação documental presumida (Correção A)."""
        for exam_id, rec in self.registry.items():
            self.assertFalse(rec.get("isDocumentaryVerified"), f"{exam_id} não pode estar como documentally verified")
            self.assertFalse(rec.get("isHomologated"), f"{exam_id} não pode estar como homologado")
            self.assertEqual(rec.get("statusHomologacao"), "validacao_pendente")
            self.assertEqual(rec.get("statusDocumental"), "verificacao_documental_pendente")
            self.assertTrue(rec.get("faseDocumentalPendente"))

    def test_total_questions_sum_to_590(self):
        """3. A soma total de questões no registro oficial deve ser exatamente 590."""
        total = sum(rec.get("totalQuestoes", 0) for rec in self.registry.values())
        self.assertEqual(total, 590)

    def test_fepese_adapter_and_registry_consistency(self):
        """4. FEPESE deve estar sincronizada com 40 questões e status pendente."""
        fepese = self.registry.get("fepese-2023-bc-agente-fiscal-tributario")
        self.assertIsNotNone(fepese)
        self.assertEqual(fepese.get("totalQuestoes"), 40)
        self.assertEqual(fepese.get("banca"), "FEPESE")
        self.assertEqual(fepese.get("statusHomologacao"), "validacao_pendente")

if __name__ == "__main__":
    unittest.main()
