import os
import sys
import json
from collections import Counter

sys.stdout.reconfigure(encoding='utf-8')

report_path = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\scripts\audit_deep_report.json"
with open(report_path, 'r', encoding='utf-8') as f:
    rep = json.load(f)

print("=== DETALHES POR CATEGORIA ===\n")

print(f"1. ALTERNATIVAS ANÔMALAS ({len(rep['cat1_alternativas_anomalas'])} casos):")
c1_provas = Counter([item['prova'] for item in rep['cat1_alternativas_anomalas']])
for prova, count in c1_provas.most_common():
    print(f"  • {prova}: {count} casos")
for item in rep['cat1_alternativas_anomalas'][:6]:
    print(f"    - [{item['id']}]: {item['motivo']} -> {item['detalhe'][:60]}...")

print(f"\n2. ENUNCIADOS CORTADOS / RUÍDOS ({len(rep['cat2_enunciados_cortados_ruidos'])} casos):")
c2_provas = Counter([item['prova'] for item in rep['cat2_enunciados_cortados_ruidos']])
for prova, count in c2_provas.most_common():
    print(f"  • {prova}: {count} casos")
for item in rep['cat2_enunciados_cortados_ruidos'][:6]:
    print(f"    - [{item['id']}]: {item['motivo']} -> {item['detalhe'][:60]}...")

print(f"\n3. INCONSISTÊNCIA GABARITO ({len(rep['cat3_gabarito_duvidoso'])} casos):")
c3_provas = Counter([item['prova'] for item in rep['cat3_gabarito_duvidoso']])
for prova, count in c3_provas.most_common():
    print(f"  • {prova}: {count} casos")
for item in rep['cat3_gabarito_duvidoso'][:6]:
    print(f"    - [{item['id']}]: {item['motivo']}")

print(f"\n4. DISCIPLINAS DESALINHADAS ({len(rep['cat4_disciplinas_desalinhadas'])} casos):")
c4_provas = Counter([item['prova'] for item in rep['cat4_disciplinas_desalinhadas']])
for prova, count in c4_provas.most_common():
    print(f"  • {prova}: {count} casos")
for item in rep['cat4_disciplinas_desalinhadas'][:6]:
    print(f"    - [{item['id']}]: '{item['disciplina_atual']}' -> Sugestão: '{item['sugerida']}'")
