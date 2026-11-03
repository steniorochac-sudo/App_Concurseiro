import os
import sys
import json
import urllib.request
import urllib.error
from dotenv import load_dotenv

sys.path.insert(0, os.path.dirname(__file__))
from gemini_config import (
    MODERN_GEMINI_MODELS,
    DEFAULT_MODEL,
    key_manager,
    get_configured_model
)

sys.stdout.reconfigure(encoding='utf-8')
load_dotenv()

print("=" * 70)
print("🔍 DIAGNÓSTICO DE CHAVES E MODELOS GOOGLE GEMINI (2026)")
print("=" * 70)

active_model = get_configured_model()
print(f"🎯 Modelo atualmente ativo no .env: {active_model}")

# Exibe catálogo oficial de modelos modernos
print("\n📋 Catálogo de Modelos Modernos Disponíveis:")
for model_id, info in MODERN_GEMINI_MODELS.items():
    tag = "⭐ RECOMENDADO" if info.get("recommended") else "✅ DISPONÍVEL"
    print(f"  • {model_id:<22} [{tag}] - {info['description']}")

# Exibe status das chaves configuradas
keys_summary = key_manager.get_status_summary()
if not keys_summary:
    print("\n❌ Nenhuma chave GEMINI_API_KEY encontrada no arquivo .env!")
    print("👉 Obtenha sua chave gratuita em: https://aistudio.google.com/app/apikey")
    sys.exit(1)

print(f"\n🔑 Chaves detectadas no ambiente ({len(keys_summary)} configurada(s)):")
for item in keys_summary:
    status_label = "🟢 ATIVA" if item["active"] else "⚪ RESERVA"
    print(f"  [{item['index']}] {item['key_masked']:<20} -> {status_label}")

# Teste de conectividade com cada chave
print("\n🧪 Testando conectividade e cotas das chaves configuradas:")
for idx, key in enumerate(key_manager.keys):
    masked = f"{key[:8]}...{key[-4:]}"
    print(f"\n--- Testando Chave [{idx+1}]: {masked} ---")
    
    # 1. Consulta modelos suportados via v1beta
    models_url = f"https://generativelanguage.googleapis.com/v1beta/models?key={key}"
    try:
        req = urllib.request.Request(models_url, headers={'Content-Type': 'application/json'})
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode('utf-8'))
            print(f"  ✅ Conexão estabelecida com Google Generative Language API!")
    except urllib.error.HTTPError as e:
        print(f"  ❌ Erro HTTP {e.code} ao conectar chave: {e.read().decode('utf-8')[:120]}")
        continue
    except Exception as e:
        print(f"  ❌ Erro de rede: {e}")
        continue

    # 2. Teste rápido de geração com o modelo ativo
    gen_url = f"https://generativelanguage.googleapis.com/v1beta/models/{active_model}:generateContent?key={key}"
    payload = {
        "contents": [{"parts": [{"text": "Diga 'OK' em uma única palavra."}]}]
    }
    req_gen = urllib.request.Request(
        gen_url,
        data=json.dumps(payload).encode('utf-8'),
        headers={'Content-Type': 'application/json'}
    )
    try:
        with urllib.request.urlopen(req_gen, timeout=10) as resp:
            res_data = json.loads(resp.read().decode('utf-8'))
            answer = res_data['candidates'][0]['content']['parts'][0]['text'].strip()
            print(f"  ✅ Modelo '{active_model}' respondeu com sucesso: '{answer}'")
    except urllib.error.HTTPError as e:
        err_text = e.read().decode('utf-8')
        try:
            err_json = json.loads(err_text)
            msg = err_json.get('error', {}).get('message', '')
        except:
            msg = err_text
        print(f"  ⚠️ Modelo '{active_model}' retornou HTTP {e.code}:")
        print(f"     Motivo: {msg[:140]}")
        if e.code == 429:
            print("     💡 DICA: Essa chave atingiu a cota/spending cap mensal do projeto.")
            print("     Você pode cadastrar uma segunda chave no .env como 'GEMINI_API_KEY_2='")
            print("     ou ajustar o limite em https://ai.studio/spend")
    except Exception as e:
        print(f"  ❌ Erro ao chamar modelo: {e}")

print("\n" + "=" * 70)
print("Fim do diagnóstico.")
print("=" * 70)
