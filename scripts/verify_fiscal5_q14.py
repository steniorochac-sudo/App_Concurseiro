import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

path = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data\imported\fiscal_tributario5.json"
with open(path, 'r', encoding='utf-8') as f:
    qs = json.load(f)

for q in qs:
    if "14" in q['id'] or "14." in q['enunciado']:
        print("=== FISCAL TRIBUTARIO 5 - QUESTÃO 14 ===")
        print(f"ID: {q['id']}")
        print(f"Disciplina: {q['disciplina']}")
        print(f"Gabarito: {q['gabarito']}")
        print(f"Enunciado: {q['enunciado']}")
        print("Alternativas:")
        for a in q['alternativas']:
            print(f"  [{a['id']}]: {a['text']}")
        print(f"Explicação:\n{q['explicacao']}")
