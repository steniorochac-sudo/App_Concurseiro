import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

IMPORTED_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data\imported"

print("=" * 80)
print("1. INSPECIONANDO FISCAL TRIBUTÁRIO 3 (Q14 - Ortografia 's'):")
with open(os.path.join(IMPORTED_DIR, "fiscal_tributario3.json"), 'r', encoding='utf-8') as f:
    qs = json.load(f)
for q in qs:
    if "14" in q['id']:
        print(f"ID: {q['id']} | Gabarito: {q['gabarito']} | Disciplina: {q['disciplina']}")
        print(f"Enunciado:\n{q['enunciado']}")
        for a in q['alternativas']:
            print(f"  [{a['id']}]: {a['text']}")

print("\n" + "=" * 80)
print("2. INSPECIONANDO CRC-SP ANALISTA CONTÁBIL (Q36 - Aspas Google):")
with open(os.path.join(IMPORTED_DIR, "analista_contabil.json"), 'r', encoding='utf-8') as f:
    qs = json.load(f)
for q in qs:
    if "36" in q['id']:
        print(f"ID: {q['id']} | Gabarito: {q['gabarito']} | Disciplina: {q['disciplina']}")
        print(f"Enunciado:\n{q['enunciado']}")
        for a in q['alternativas']:
            print(f"  [{a['id']}]: {a['text']}")
