import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

JSON_PATH = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data\imported\prova_objetiva_auditor.json"
with open(JSON_PATH, 'r', encoding='utf-8') as f:
    qs = json.load(f)

print(f"Total de questões salvas com Gemini 3.7 Flash (FGV Auditor): {len(qs)}")
print("=" * 80)

for q in qs[10:14]:
    print(f"\n📌 {q['id']} | {q['disciplina']} | Gabarito: {q['gabarito']}")
    print(f"Enunciado:\n{q['enunciado']}")
    print("\nAlternativas:")
    for a in q['alternativas']:
        print(f"  [{a['id']}]: {a['text']}")
    print("-" * 50)
