import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

report_path = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\scripts\audit_deep_report.json"
with open(report_path, 'r', encoding='utf-8') as f:
    rep = json.load(f)

print("--- CAT 2: OS 4 ENUNCIADOS COM RUÍDO ---")
for item in rep['cat2_enunciados_cortados_ruidos']:
    print(f"[{item['id']}]: {item['motivo']} -> {item['detalhe']}")

print("\n--- CAT 1: AMOSTRA DOS CASOS RESTANTES ---")
for item in rep['cat1_alternativas_anomalas'][:15]:
    print(f"[{item['id']}]: {item['motivo']} -> {item['detalhe'][:70]}...")

print("\n--- CAT 4: AMOSTRA DAS DISCIPLINAS RESTANTES ---")
for item in rep['cat4_disciplinas_desalinhadas'][:15]:
    print(f"[{item['id']}]: '{item['disciplina_atual']}' -> Sugestão: '{item['sugerida']}' | Enunciado: {item['enunciado'][:60]}...")
