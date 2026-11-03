import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

IMPORTED_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data\imported"

# 1. Auditor da receita 35
with open(os.path.join(IMPORTED_DIR, "auditor_fiscal_tributario_da_receita_municipal_gestao_tributaria_manha.json"), 'r', encoding='utf-8') as f:
    qs = json.load(f)
for q in qs:
    if "35" in q['id']:
        print("=== AUDITOR RECEITA Q35 ===")
        print(f"Enunciado: {q['enunciado']}")
        for a in q['alternativas']:
            print(f" [{a['id']}] ({len(a['text'])}): {a['text']}")

# 2. fiscal 2 Q14
with open(os.path.join(IMPORTED_DIR, "fiscal_tributario2.json"), 'r', encoding='utf-8') as f:
    qs = json.load(f)
for q in qs:
    if "14" in q['id']:
        print("\n=== FISCAL 2 Q14 ===")
        print(f"Disciplina: {q['disciplina']}")
        print(f"Enunciado: {q['enunciado']}")

# 3. fiscal 6 Q16 e Q17
with open(os.path.join(IMPORTED_DIR, "fiscal_tributario6.json"), 'r', encoding='utf-8') as f:
    qs = json.load(f)
for q in qs:
    if "16" in q['id'] or "17" in q['id']:
        print(f"\n=== FISCAL 6 {q['id']} ===")
        print(f"Disciplina: {q['disciplina']}")
        print(f"Enunciado: {q['enunciado']}")
