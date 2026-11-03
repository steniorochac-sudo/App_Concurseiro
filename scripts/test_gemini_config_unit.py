import unittest
import os
import sys

# Garante inclusão da pasta scripts no path
sys.path.insert(0, os.path.dirname(__file__))

from gemini_config import (
    MODERN_GEMINI_MODELS,
    DEFAULT_MODEL,
    FALLBACK_CASCADE,
    GeminiKeyManager,
    get_configured_model,
    get_next_fallback_model,
)

class TestGeminiConfig(unittest.TestCase):

    def test_modern_models_catalog_presence(self):
        """Verifica se os modelos mais atuais de 2026 estão todos registrados."""
        expected_models = [
            "gemini-3.8-flash",
            "gemini-3.7-flash",
            "gemini-3.6-flash",
            "gemini-3.5-flash",
            "gemini-3.5-flash-lite",
            "gemini-flash-latest",
            "gemini-pro-latest",
            "gemini-3.1-pro-preview"
        ]
        for model in expected_models:
            self.assertIn(model, MODERN_GEMINI_MODELS, f"Modelo {model} deve constar no catálogo de modelos atuais")
            self.assertTrue(MODERN_GEMINI_MODELS[model]["vision"], f"Modelo {model} deve suportar visão multimodal")

    def test_default_model_is_most_recent(self):
        """Verifica se o modelo padrão selecionado é o de ponta mais recente."""
        self.assertEqual(DEFAULT_MODEL, "gemini-3.8-flash")
        self.assertIn(DEFAULT_MODEL, MODERN_GEMINI_MODELS)
        self.assertTrue(MODERN_GEMINI_MODELS[DEFAULT_MODEL]["recommended"])

    def test_fallback_cascade_order(self):
        """Verifica a ordem do encadeamento de fallback caso um modelo falhe."""
        self.assertEqual(get_next_fallback_model("gemini-3.8-flash"), "gemini-3.7-flash")
        self.assertEqual(get_next_fallback_model("gemini-3.7-flash"), "gemini-3.6-flash")
        self.assertEqual(get_next_fallback_model("gemini-3.6-flash"), "gemini-flash-latest")
        self.assertEqual(get_next_fallback_model("gemini-flash-latest"), "gemini-3.5-flash")

    def test_key_manager_single_key(self):
        """Testa o gerenciador com uma única chave configurada."""
        manager = GeminiKeyManager(keys=["test-key-primary-123456789"])
        self.assertEqual(manager.get_current_key(), "test-key-primary-123456789")
        self.assertTrue(manager.has_available_key())

        # Marca como esgotada
        next_key = manager.mark_key_exhausted("test-key-primary-123456789", "HTTP 429 Quota")
        self.assertIsNone(next_key)
        self.assertFalse(manager.has_available_key())
        self.assertIsNone(manager.get_current_key())

    def test_key_manager_multi_key_rotation(self):
        """Testa rotação automática entre múltiplas chaves (chave 1 -> chave 2 -> chave 3)."""
        keys = ["KEY_ALPHA_123456", "KEY_BETA_789012", "KEY_GAMMA_345678"]
        manager = GeminiKeyManager(keys=keys)

        self.assertEqual(manager.get_current_key(), "KEY_ALPHA_123456")

        # Chave 1 esgotou por spending cap
        next_k = manager.mark_key_exhausted("KEY_ALPHA_123456", "Spending Cap Exceeded")
        self.assertEqual(next_k, "KEY_BETA_789012")
        self.assertEqual(manager.get_current_key(), "KEY_BETA_789012")
        self.assertTrue(manager.has_available_key())

        # Chave 2 esgotou
        next_k2 = manager.mark_key_exhausted("KEY_BETA_789012", "Quota Exceeded")
        self.assertEqual(next_k2, "KEY_GAMMA_345678")
        self.assertEqual(manager.get_current_key(), "KEY_GAMMA_345678")
        self.assertTrue(manager.has_available_key())

        # Chave 3 esgotou (todas esgotadas)
        next_k3 = manager.mark_key_exhausted("KEY_GAMMA_345678", "Out of Quota")
        self.assertIsNone(next_k3)
        self.assertFalse(manager.has_available_key())

        # Teste de reset
        manager.reset_exhaustion()
        self.assertTrue(manager.has_available_key())
        self.assertEqual(manager.get_current_key(), "KEY_ALPHA_123456")

    def test_key_discovery_from_env_vars(self):
        """Testa descoberta de chaves primárias, numeradas e separadas por vírgula no ambiente."""
        original_env = os.environ.copy()
        try:
            os.environ["GEMINI_API_KEY"] = "ENV_KEY_1_AAAAAAAA"
            os.environ["GEMINI_API_KEY_2"] = "ENV_KEY_2_BBBBBBBB"
            os.environ["GEMINI_API_KEYS"] = "ENV_KEY_3_CCCCCCCC, ENV_KEY_4_DDDDDDDD"

            keys = GeminiKeyManager._discover_keys_from_env()
            self.assertIn("ENV_KEY_1_AAAAAAAA", keys)
            self.assertIn("ENV_KEY_2_BBBBBBBB", keys)
            self.assertIn("ENV_KEY_3_CCCCCCCC", keys)
            self.assertIn("ENV_KEY_4_DDDDDDDD", keys)
        finally:
            os.environ.clear()
            os.environ.update(original_env)

    def test_status_summary_masking(self):
        """Testa se o resumo das chaves mascara os dados sensíveis."""
        manager = GeminiKeyManager(keys=["AIzaSyB1234567890SecretKeyX60w"])
        summary = manager.get_status_summary()
        self.assertEqual(len(summary), 1)
        self.assertTrue(summary[0]["key_masked"].startswith("AIzaSyB1..."))
        self.assertTrue(summary[0]["key_masked"].endswith("X60w"))
        self.assertNotIn("SecretKey", summary[0]["key_masked"])

if __name__ == '__main__':
    unittest.main()
