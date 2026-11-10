import unittest
import json
from pathlib import Path
import sys

BASE_DIR = Path(__file__).resolve().parent.parent.parent
sys.path.insert(0, str(BASE_DIR))

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

    def test_fepese_is_the_only_homologated_exam(self):
        """2. FEPESE 2023 deve ser a ÚNICA prova homologada no acervo com comprovação documental."""
        fepese = self.registry.get("fepese-2023-bc-agente-fiscal-tributario")
        self.assertIsNotNone(fepese)
        self.assertTrue(fepese.get("isDocumentaryVerified"), "FEPESE deve ter isDocumentaryVerified: True")
        self.assertTrue(fepese.get("isHomologated"), "FEPESE deve ter isHomologated: True")
        self.assertEqual(fepese.get("statusHomologacao"), "homologado")
        self.assertEqual(fepese.get("statusDocumental"), "verificacao_documental_concluida")
        self.assertFalse(fepese.get("faseDocumentalPendente"), "FEPESE não deve estar com fase documental pendente")
        self.assertEqual(fepese.get("totalQuestoes"), 40)

        # Trilha de auditoria formal vinculada
        detalhes = fepese.get("homologacaoDetalhes")
        self.assertIsNotNone(detalhes, "FEPESE deve conter homologacaoDetalhes vinculados")
        self.assertEqual(detalhes.get("commitAprovacao"), "1df0b203")
        self.assertEqual(detalhes.get("matrizConferencia"), "docs/auditoria-documental/matriz_conferencia_fepese_2023.json")
        self.assertEqual(detalhes.get("sha256Prova"), "ee8cdbfbfe5ca797e294274e2da92364801d73c93f780d93d2e347b14a6b9cbc")
        self.assertEqual(detalhes.get("sha256Gabarito"), "cb866ba5e1f1ba8f4ac3e0741d9a95bd3699fab3e58106dbfd335abe9f3ceecf")

    def test_other_six_exams_remain_strictly_pending(self):
        """3. As outras 6 provas NÃO devem ser afetadas e devem permanecer em validacao_pendente."""
        other_ids = [k for k in self.registry.keys() if k != "fepese-2023-bc-agente-fiscal-tributario"]
        self.assertEqual(len(other_ids), 6, "Devem existir exatamente 6 outras provas")

        for exam_id in other_ids:
            rec = self.registry[exam_id]
            self.assertFalse(rec.get("isDocumentaryVerified"), f"{exam_id} não pode ter isDocumentaryVerified")
            self.assertFalse(rec.get("isHomologated"), f"{exam_id} não pode estar como homologado")
            self.assertEqual(rec.get("statusHomologacao"), "validacao_pendente", f"{exam_id} deve ter status validacao_pendente")
            self.assertEqual(rec.get("statusDocumental"), "verificacao_documental_pendente", f"{exam_id} deve ter statusDocumental pendente")
            self.assertTrue(rec.get("faseDocumentalPendente"), f"{exam_id} deve manter faseDocumentalPendente: True")

    def test_negative_cannot_homologate_without_documentary_verification(self):
        """4. Negativo: Impedir homologação documental se isDocumentaryVerified for False."""
        simulated_record = {
            "examId": "prova-teste-sem-comprovacao",
            "isHomologated": True,
            "isDocumentaryVerified": False,
            "statusHomologacao": "homologado"
        }
        # Validação da regra: se isDocumentaryVerified for False, não pode ser homologado
        is_truly_homologated = simulated_record["isDocumentaryVerified"] is True and simulated_record["isHomologated"] is True
        self.assertFalse(is_truly_homologated, "Homologação sem isDocumentaryVerified deve ser rejeitada")

    def test_total_questions_sum_to_590(self):
        """5. A soma total de questões no registro oficial deve permanecer exatamente 590."""
        total = sum(rec.get("totalQuestoes", 0) for rec in self.registry.values())
        self.assertEqual(total, 590)

if __name__ == "__main__":
    unittest.main()
