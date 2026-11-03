import os
import sys
import json
import re
from exam_mappings import EXAM_MAPPINGS

sys.stdout.reconfigure(encoding='utf-8')

IMPORTED_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data\imported"

report = {
    "total_questoes": 0,
    "total_provas": 0,
    "cat1_alternativas_anomalas": [],      # Texto excessivo, vazamentos de cabeçalho/enunciado, opções faltando
    "cat2_enunciados_cortados_ruidos": [],  # Enunciados curtos, ruídos, caracteres quebrados
    "cat3_gabarito_duvidoso": [],           # Gabaritos que precisam de dupla checagem contra PDFs
    "cat4_disciplinas_desalinhadas": [],    # Disciplinas genéricas ou incorretas
    "cat5_explicacoes_genericas": [],       # Explicações placeholder
}

for exam in EXAM_MAPPINGS:
    json_name = exam['prova'].replace('.pdf', '.json')
    json_path = os.path.join(IMPORTED_DIR, json_name)
    if not os.path.exists(json_path):
        continue

    report["total_provas"] += 1
    with open(json_path, 'r', encoding='utf-8') as f:
        try:
            questions = json.load(f)
        except Exception as e:
            print(f"Erro ao ler {json_name}: {e}")
            continue

    for q in questions:
        report["total_questoes"] += 1
        q_id = q['id']
        enunciado = q.get('enunciado', '')
        alternativas = q.get('alternativas', [])
        gabarito = q.get('gabarito', '')
        disciplina = q.get('disciplina', '')
        explicacao = q.get('explicacao', '')

        # --- CAT 1: Alternativas Anômalas ---
        if len(alternativas) < 2:
            report["cat1_alternativas_anomalas"].append({
                "id": q_id, "prova": json_name, "motivo": f"Menos de 2 alternativas ({len(alternativas)})", "detalhe": str(alternativas)
            })
        
        seen_letters = set()
        for opt in alternativas:
            opt_id = opt.get('id', '')
            opt_text = opt.get('text', '').strip()
            
            if opt_id in seen_letters:
                report["cat1_alternativas_anomalas"].append({
                    "id": q_id, "prova": json_name, "motivo": f"Letra duplicada: {opt_id}", "detalhe": opt_text[:80]
                })
            seen_letters.add(opt_id)

            if len(opt_text) == 0:
                report["cat1_alternativas_anomalas"].append({
                    "id": q_id, "prova": json_name, "motivo": f"Alternativa {opt_id} vazia", "detalhe": ""
                })
            elif len(opt_text) > 600 or (len(opt_text) > 300 and any(k in opt_text for k in ["Quadro I", "1 2 3 4 5", "Pág.", "pcimarkpci"])):
                report["cat1_alternativas_anomalas"].append({
                    "id": q_id, "prova": json_name, "motivo": f"Alternativa {opt_id} excessivamente longa ou com vazamento ({len(opt_text)} chars)", "detalhe": opt_text[:100] + "..."
                })
            
            if any(term in opt_text.lower() for term in ["analise as afirmações", "caderno de provas", "boa prova", "folha de respostas", "rascunho"]):
                report["cat1_alternativas_anomalas"].append({
                    "id": q_id, "prova": json_name, "motivo": f"Vazamento de instrução/enunciado na alternativa {opt_id}", "detalhe": opt_text[:100]
                })

        # --- CAT 2: Enunciados Cortados / Ruídos ---
        if len(enunciado) < 20:
            report["cat2_enunciados_cortados_ruidos"].append({
                "id": q_id, "prova": json_name, "motivo": f"Enunciado muito curto ({len(enunciado)} chars)", "detalhe": enunciado
            })
        if any(re.search(pattern, enunciado, re.IGNORECASE) for pattern in [r"pcimarkpci", r"www\.pciconcursos", r"pág\.\s*\d+\s*de\s*\d+", r"folha de respostas", r"informações gerais"]):
            report["cat2_enunciados_cortados_ruidos"].append({
                "id": q_id, "prova": json_name, "motivo": "Ruído de cabeçalho no enunciado", "detalhe": enunciado[:100]
            })

        # --- CAT 3: Gabarito Inconsistente ---
        valid_opts = [o.get('id') for o in alternativas]
        if gabarito not in valid_opts:
            report["cat3_gabarito_duvidoso"].append({
                "id": q_id, "prova": json_name, "motivo": f"Gabarito '{gabarito}' não existe entre as alternativas {valid_opts}", "detalhe": enunciado[:80]
            })

        # --- CAT 4: Disciplina Desalinhada ---
        enunc_lower = enunciado.lower()
        if "google" in enunc_lower or "windows" in enunc_lower or "software" in enunc_lower or "hardware" in enunc_lower:
            if "informática" not in disciplina.lower() and "tecnologia" not in disciplina.lower():
                report["cat4_disciplinas_desalinhadas"].append({
                    "id": q_id, "prova": json_name, "disciplina_atual": disciplina, "sugerida": "Noções de Informática", "enunciado": enunciado[:80]
                })
        elif "iptu" in enunc_lower or "issqn" in enunc_lower or "itbi" in enunc_lower:
            if "tributário" not in disciplina.lower() and "fiscal" not in disciplina.lower():
                report["cat4_disciplinas_desalinhadas"].append({
                    "id": q_id, "prova": json_name, "disciplina_atual": disciplina, "sugerida": "Direito Tributário e Legislação Municipal", "enunciado": enunciado[:80]
                })

        # --- CAT 5: Explicações Genéricas ---
        if "resposta oficial homologada" in explicacao.lower() or "gabarito oficial" in explicacao.lower():
            report["cat5_explicacoes_genericas"].append({
                "id": q_id, "prova": json_name
            })

print("=" * 80)
print(f"📊 RELATÓRIO GERAL DE AUDITORIA DO BANCO DE QUESTÕES")
print(f"Total de Provas Processadas: {report['total_provas']}")
print(f"Total de Questões Auditadas: {report['total_questoes']}")
print("=" * 80)
print(f"🔹 Categoria 1 (Alternativas Anômalas / Vazamentos): {len(report['cat1_alternativas_anomalas'])} ocorrências")
print(f"🔹 Categoria 2 (Enunciados Cortados / Ruídos de PDF): {len(report['cat2_enunciados_cortados_ruidos'])} ocorrências")
print(f"🔹 Categoria 3 (Inconsistência Gabarito vs Alternativas): {len(report['cat3_gabarito_duvidoso'])} ocorrências")
print(f"🔹 Categoria 4 (Disciplinas Desalinhadas / Detecção Semântica): {len(report['cat4_disciplinas_desalinhadas'])} ocorrências")
print(f"🔹 Categoria 5 (Questões com Explicação Genérica / Sem Dissecador): {len(report['cat5_explicacoes_genericas'])} questões")
print("=" * 80)

report_out_path = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\scripts\audit_deep_report.json"
with open(report_out_path, 'w', encoding='utf-8') as f:
    json.dump(report, f, ensure_ascii=False, indent=2)
print("Relatório detalhado salvo em scripts/audit_deep_report.json")
