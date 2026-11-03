import os
import sys
import json
import urllib.request
import urllib.error
from dotenv import load_dotenv

sys.stdout.reconfigure(encoding='utf-8')
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

test_models = [
    "gemini-3.8-flash",
    "gemini-3.7-flash",
    "gemini-3.6-flash",
    "gemini-3.5-flash",
    "gemini-3.5-flash-lite",
    "gemini-2.5-flash",
    "gemini-2.5-pro",
    "gemini-flash-latest",
    "gemini-pro-latest",
    "gemini-3.1-flash-lite"
]

print(f"Testing models with key {api_key[:8]}...:")
for model in test_models:
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
    payload = {
        "contents": [{"parts": [{"text": "Diga 'OK' em uma palavra."}]}]
    }
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode('utf-8'),
        headers={'Content-Type': 'application/json'}
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            text = data['candidates'][0]['content']['parts'][0]['text'].strip()
            print(f"✅ {model}: Respondeu com sucesso! -> {text}")
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode('utf-8')
        try:
            err_json = json.loads(err_msg)
            message = err_json.get('error', {}).get('message', '')[:100]
        except:
            message = err_msg[:100]
        print(f"❌ {model}: Erro {e.code} - {message}")
    except Exception as e:
        print(f"❌ {model}: Erro {e}")
