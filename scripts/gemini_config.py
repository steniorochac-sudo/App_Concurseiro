import os
import sys
import re
from typing import List, Dict, Optional, Any
from dotenv import load_dotenv

# Garante saída UTF-8 no terminal
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

load_dotenv()

# ==============================================================================
# CATÁLOGO DE MODELOS MODERNOS DO GOOGLE GEMINI (2026)
# ==============================================================================
MODERN_GEMINI_MODELS: Dict[str, Dict[str, Any]] = {
    "gemini-3.8-flash": {
        "displayName": "Gemini 3.8 Flash",
        "tier": "flash",
        "recommended": True,
        "vision": True,
        "description": "Modelo de ponta mais recente da Google (Ultra-rápido + Visão Multimodal de alta resolução)"
    },
    "gemini-3.7-flash": {
        "displayName": "Gemini 3.7 Flash",
        "tier": "flash",
        "recommended": True,
        "vision": True,
        "description": "Raciocínio multimodal estendido e leitura de diagramação complexa e tabelas"
    },
    "gemini-3.6-flash": {
        "displayName": "Gemini 3.6 Flash",
        "tier": "flash",
        "recommended": False,
        "vision": True,
        "description": "Alta resiliência e estabilidade para processamento em lotes de grande porte"
    },
    "gemini-3.5-flash": {
        "displayName": "Gemini 3.5 Flash",
        "tier": "flash",
        "recommended": False,
        "vision": True,
        "description": "Modelo estável de produção consolidada"
    },
    "gemini-3.5-flash-lite": {
        "displayName": "Gemini 3.5 Flash-Lite",
        "tier": "lite",
        "recommended": False,
        "vision": True,
        "description": "Baixíssima latência e consumo reduzido de tokens"
    },
    "gemini-3.1-flash-lite": {
        "displayName": "Gemini 3.1 Flash-Lite",
        "tier": "lite",
        "recommended": False,
        "vision": True,
        "description": "Processamento de altíssimo throughput"
    },
    "gemini-flash-latest": {
        "displayName": "Gemini Flash Latest",
        "tier": "dynamic",
        "recommended": True,
        "vision": True,
        "description": "Alias oficial do Google que aponta para a versão estável mais atual do Flash"
    },
    "gemini-pro-latest": {
        "displayName": "Gemini Pro Latest",
        "tier": "dynamic",
        "recommended": False,
        "vision": True,
        "description": "Alias oficial do Google que aponta para a versão mais recente do Pro"
    },
    "gemini-3.1-pro-preview": {
        "displayName": "Gemini 3.1 Pro Preview",
        "tier": "pro",
        "recommended": False,
        "vision": True,
        "description": "Capacidade máxima de raciocínio profundo para análises jurídicas e contábeis"
    }
}

DEFAULT_MODEL = "gemini-3.8-flash"
FALLBACK_CASCADE = [
    "gemini-3.8-flash",
    "gemini-3.7-flash",
    "gemini-3.6-flash",
    "gemini-flash-latest",
    "gemini-3.5-flash",
    "gemini-3.5-flash-lite"
]


# ==============================================================================
# GERENCIADOR DE CHAVES COM ROTAÇÃO AUTOMÁTICA (MULTI-KEY ROTATION)
# ==============================================================================
class GeminiKeyManager:
    """
    Gerencia múltiplas chaves de API do Google Gemini com suporte a rotação
    automática em caso de exaustão de cota ou spending cap (HTTP 429).
    """
    def __init__(self, keys: Optional[List[str]] = None):
        if keys is not None:
            self.keys = [k.strip() for k in keys if k and k.strip()]
        else:
            self.keys = self._discover_keys_from_env()

        self.current_index = 0
        self.exhausted_keys: Dict[str, str] = {}  # key -> reason

    @staticmethod
    def _discover_keys_from_env() -> List[str]:
        found_keys: List[str] = []

        # 1. Chave primária padrão
        primary = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
        if primary and primary.strip():
            found_keys.append(primary.strip())

        # 2. Lista separada por vírgula em GEMINI_API_KEYS
        multi = os.getenv("GEMINI_API_KEYS", "")
        if multi:
            for k in re.split(r'[,;]+', multi):
                k = k.strip()
                if k and k not in found_keys:
                    found_keys.append(k)

        # 3. Chaves numeradas (ex: GEMINI_API_KEY_2, GEMINI_API_KEY_3...)
        for i in range(2, 11):
            k = os.getenv(f"GEMINI_API_KEY_{i}") or os.getenv(f"GOOGLE_API_KEY_{i}")
            if k and k.strip() and k.strip() not in found_keys:
                found_keys.append(k.strip())

        return found_keys

    def get_current_key(self) -> Optional[str]:
        """Retorna a chave atualmente ativa que ainda não foi esgotada."""
        available = [k for k in self.keys if k not in self.exhausted_keys]
        if not available:
            return None
        
        # Garante índice dentro do range disponível
        if self.current_index >= len(self.keys):
            self.current_index = 0

        # Se a chave do índice atual está esgotada, avança para a primeira disponível
        if self.keys[self.current_index] in self.exhausted_keys:
            for idx, k in enumerate(self.keys):
                if k not in self.exhausted_keys:
                    self.current_index = idx
                    break

        return self.keys[self.current_index]

    def mark_key_exhausted(self, key: str, reason: str = "Quota / Spending Cap (HTTP 429)") -> Optional[str]:
        """
        Marca uma chave como esgotada e avança automaticamente para a próxima chave disponível.
        Retorna a nova chave ativa se houver, ou None se todas estiverem esgotadas.
        """
        self.exhausted_keys[key] = reason
        next_key = self.get_current_key()
        return next_key

    def rotate_to_next(self) -> Optional[str]:
        """Avança manualmente para a próxima chave disponível."""
        if not self.keys:
            return None
        self.current_index = (self.current_index + 1) % len(self.keys)
        return self.get_current_key()

    def has_available_key(self) -> bool:
        """Verifica se ainda existe ao menos uma chave não esgotada."""
        return any(k not in self.exhausted_keys for k in self.keys)

    def reset_exhaustion(self) -> None:
        """Reseta o status de chaves esgotadas."""
        self.exhausted_keys.clear()
        self.current_index = 0

    def get_status_summary(self) -> List[Dict[str, Any]]:
        """Retorna resumo com visualização mascarada das chaves e seus status."""
        summary = []
        for idx, k in enumerate(self.keys):
            masked = f"{k[:8]}...{k[-4:]}" if len(k) > 12 else "***"
            is_active = (idx == self.current_index and k not in self.exhausted_keys)
            is_exhausted = k in self.exhausted_keys
            summary.append({
                "index": idx + 1,
                "key_masked": masked,
                "active": is_active,
                "exhausted": is_exhausted,
                "reason": self.exhausted_keys.get(k, "Disponível")
            })
        return summary


# ==============================================================================
# SELETOR E FALLBACK DE MODELOS
# ==============================================================================
def get_configured_model() -> str:
    """Retorna o modelo configurado no .env ou o padrão mais atual."""
    return os.getenv("GEMINI_MODEL", DEFAULT_MODEL)

def get_next_fallback_model(current_model: str) -> Optional[str]:
    """Retorna o próximo modelo na cadeia de fallback caso o atual falhe."""
    if current_model in FALLBACK_CASCADE:
        idx = FALLBACK_CASCADE.index(current_model)
        if idx + 1 < len(FALLBACK_CASCADE):
            return FALLBACK_CASCADE[idx + 1]
    # Se o modelo atual não está na lista ou é o último, tenta o alias latest
    if current_model != "gemini-flash-latest":
        return "gemini-flash-latest"
    return None

# Instância global compartilhada do gerenciador de chaves
key_manager = GeminiKeyManager()
