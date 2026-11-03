import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

IMPORTED_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data\imported"

for fname, qid in [
    ("analista_contabil_tipo_1.json", "q-analista_contabil_tipo_1-10"),
    ("analista_de_informatica5.json", "q-analista_de_informatica5-25"),
    ("fiscal_tributario2.json", "q-fiscal_tributario2-05"),
    ("prova_objetiva_auditor.json", "q-prova_objetiva_auditor-05"),
]:
    with open(os.path.join(IMPORTED_DIR, fname), 'r', encoding='utf-8') as f:
        qs = json.load(f)
    for q in qs:
        if q['id'] == qid:
            print(f"=== {qid} ({fname}) ===")
            for a in q['alternativas']:
                if len(a['text']) > 400:
                    print(f"  [{a['id']}] ({len(a['text'])} chars): {a['text']}")
