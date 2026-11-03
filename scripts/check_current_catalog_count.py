import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

IMPORTED_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data\imported"

total = 0
for f in os.listdir(IMPORTED_DIR):
    if f.endswith('.json'):
        with open(os.path.join(IMPORTED_DIR, f), 'r', encoding='utf-8') as file:
            qs = json.load(file)
            total += len(qs)
            if f in ['fiscal_tributario5.json', 'fiscal_tributario3.json', 'prova_objetiva_auditor.json', 'analista_contabil.json']:
                print(f"📌 {f}: {len(qs)} questões no JSON")

print(f"\n📊 Total de questões somando os 25 JSONs em imported/: {total}")
