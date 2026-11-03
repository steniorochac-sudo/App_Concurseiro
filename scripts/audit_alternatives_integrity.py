import os
import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

IMPORTED_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data\imported"

issues = []

for f in sorted(os.listdir(IMPORTED_DIR)):
    if not f.endswith('.json'):
        continue
    path = os.path.join(IMPORTED_DIR, f)
    with open(path, 'r', encoding='utf-8') as jf:
        try:
            qs = json.load(jf)
        except Exception as e:
            issues.append(f"Erro JSON em {f}: {e}")
            continue

    for q in qs:
        # Verifica anomalias nas alternativas
        opts = q.get('alternativas', [])
        for opt in opts:
            text = opt.get('text', '').strip()
            # Alternativa anormalmente longa ou contendo trechos de enunciado
            if len(text) > 300:
                issues.append(f"[{f}] {q['id']} ({opt['id']}): Alternativa muito longa ({len(text)} chars) -> '{text[:60]}...'")
            if text.startswith("se ") or text.startswith("de ") or text.startswith("para ") or text.startswith("em "):
                if len(text) > 100:
                    issues.append(f"[{f}] {q['id']} ({opt['id']}): Início suspeito de alternativa -> '{text[:60]}...'")
            if "Analise as afirmações" in text or "conflito de interesses" in text:
                issues.append(f"[{f}] {q['id']} ({opt['id']}): Enunciado vazando na alternativa -> '{text[:60]}...'")

print(f"Total de problemas detectados nas alternativas: {len(issues)}")
for iss in issues[:30]:
    print("⚠️ ", iss)
