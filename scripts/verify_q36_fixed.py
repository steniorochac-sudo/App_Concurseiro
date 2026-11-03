import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

path = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data\imported\analista_contabil.json"
with open(path, 'r', encoding='utf-8') as f:
    qs = json.load(f)

for q in qs:
    if "36" in q['id'] or "36." in q['enunciado']:
        print("--- QUESTÃO 36 APÓS CORREÇÃO ---")
        print(f"ID: {q['id']}")
        print(f"Disciplina: {q['disciplina']}")
        print(f"Subtópicos: {q.get('subtopicos')}")
        print(f"Enunciado: {q['enunciado']}")
        print(f"Gabarito: {q['gabarito']}")
        print(f"Explicação:\n{q['explicacao']}")
