import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

JSON_PATH = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data\imported\fiscal_tributario5.json"
with open(JSON_PATH, 'r', encoding='utf-8') as f:
    qs = json.load(f)

print(f"Total de questões salvas com Gemini 3.7 Flash: {len(qs)}")
print("=" * 80)

for q in qs[:5]:
    print(f"\n📌 {q['id']} | {q['disciplina']} | Gabarito: {q['gabarito']}")
    print(f"Enunciado: {q['enunciado'][:120]}...")
    print("Alternativas:")
    for a in q['alternativas']:
        print(f"  [{a['id']}]: {a['text'][:80]}")

print("\n" + "=" * 80)
print("🔍 INSPECIONANDO QUESTÃO 14 (Que antes vinha corrompida pelo 'Considera-se'):")
for q in qs:
    if "14" in q['id']:
        print(f"\n📌 {q['id']} | {q['disciplina']} | Gabarito: {q['gabarito']}")
        print(f"Enunciado:\n{q['enunciado']}")
        print("\nAlternativas:")
        for a in q['alternativas']:
            print(f"  [{a['id']}]: {a['text']}")
