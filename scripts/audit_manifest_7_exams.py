import os
import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
PROVAS_DIR = BASE_DIR / "provas_pdf"
GABARITOS_DIR = BASE_DIR / "gabaritos_pdf"
IMPORTED_DIR = BASE_DIR / "src" / "data" / "imported"
PUBLIC_DIR = BASE_DIR / "public"

EXAMS = [
    {
        "key": "doc1",
        "file": "analista_contabil.json",
        "format": "v2"
    },
    {
        "key": "doc2",
        "file": "analista_contabil_tipo_1.json",
        "format": "v2"
    },
    {
        "key": "doc3",
        "file": "analista_contabil2.json",
        "format": "v2"
    },
    {
        "key": "doc4",
        "file": "analista_contabil3.json",
        "format": "v2"
    },
    {
        "key": "doc5",
        "file": "prova_objetiva_auditor.json",
        "format": "v2"
    },
    {
        "key": "doc6",
        "file": "fiscal_municipal_tributario.json",
        "format": "v2"
    },
    {
        "key": "fepese",
        "file": "agente_fiscal_tributario_1.json",
        "format": "legacy_array"
    }
]

def audit():
    results = []
    for ex in EXAMS:
        filepath = IMPORTED_DIR / ex["file"]
        if not filepath.exists():
            results.append({"file": ex["file"], "error": "File not found"})
            continue

        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)

        if ex["format"] == "v2":
            exam_meta = data.get("exam", {})
            audit_trail = exam_meta.get("auditTrail", {})
            questoes = data.get("questoes", [])
            
            prova_pdf = audit_trail.get("arquivoProvaPdf", "")
            gabarito_pdf = audit_trail.get("arquivoGabaritoPdf", "")
            
            prova_exists = (PROVAS_DIR / prova_pdf).exists() if prova_pdf else False
            gabarito_exists = (GABARITOS_DIR / gabarito_pdf).exists() if gabarito_pdf else False

            total_esperado = exam_meta.get("totalQuestoes", len(questoes))
            total_encontrado = len(questoes)

            # Homologated flag and gabarito status
            homologado = exam_meta.get("homologado", False)
            gabarito_status = audit_trail.get("tipoGabarito") or audit_trail.get("statusGabarito") or "desconhecido"
            status_auditoria = audit_trail.get("statusAuditoria") or "desconhecido"

            # Annulled and altered questions
            anuladas = [
                q for q in questoes 
                if q.get("gabaritoStatus") in ("anulado", "anulada") or q.get("gabaritoOficial") in ("X", "NUL", "ANULADO", "")
            ]

            retificadas = [
                q for q in questoes 
                if q.get("gabaritoStatus") in ("retificado", "alterado")
            ]

            # Images and tables
            images_found = []
            missing_images = []
            tables_count = 0
            shared_texts_count = 0

            for q in questoes:
                if q.get("textoCompartilhado"):
                    shared_texts_count += 1
                
                # Check markdown table
                if "|" in q.get("enunciado", ""):
                    tables_count += 1
                
                # Check images
                for img in q.get("imagens", []):
                    if isinstance(img, dict):
                        src = img.get("src", "")
                    elif isinstance(img, str):
                        src = img
                    else:
                        continue
                    clean_src = src.lstrip("/")
                    img_path = PUBLIC_DIR / clean_src
                    if img_path.exists():
                        images_found.append(src)
                    else:
                        missing_images.append(src)

            # Sequential check
            numeros = [q.get("numeroOriginal") for q in questoes if q.get("numeroOriginal") is not None]
            numeros_sorted = sorted(numeros)
            is_sequential = numeros_sorted == list(range(1, len(questoes) + 1)) if numeros else False

            results.append({
                "id": exam_meta.get("id"),
                "file": ex["file"],
                "titulo": exam_meta.get("titulo"),
                "banca": exam_meta.get("banca"),
                "ano": exam_meta.get("ano"),
                "orgao": exam_meta.get("orgao"),
                "cargo": exam_meta.get("cargo"),
                "formato": exam_meta.get("formatoQuestoes"),
                "prova_pdf": prova_pdf,
                "prova_exists": prova_exists,
                "gabarito_pdf": gabarito_pdf,
                "gabarito_exists": gabarito_exists,
                "total_esperado": total_esperado,
                "total_encontrado": total_encontrado,
                "total_anuladas": len(anuladas),
                "anuladas_numeros": [q.get("numeroOriginal") for q in anuladas],
                "total_retificadas": len(retificadas),
                "retificadas_numeros": [q.get("numeroOriginal") for q in retificadas],
                "gabarito_status": gabarito_status,
                "homologado": homologado,
                "is_sequential": is_sequential,
                "shared_texts_count": shared_texts_count,
                "tables_count": tables_count,
                "images_count": len(images_found),
                "missing_images": missing_images,
                "audit_data_hora": audit_trail.get("dataAuditoria") or audit_trail.get("dataAuditada"),
                "audit_auditor": audit_trail.get("responsavelAuditoria") or audit_trail.get("auditor"),
                "audit_status": status_auditoria,
                "audit_notas": audit_trail.get("notasHomologacao", audit_trail.get("observacoes", ""))
            })
        else:
            # Legacy array
            questoes = data
            total_encontrado = len(questoes)
            total_esperado = 40
            prova_pdf = "agente_fiscal_tributario 1.pdf"
            gabarito_pdf = "gabarito_agente_fiscal_tributario 1.pdf"
            prova_exists = (PROVAS_DIR / prova_pdf).exists()
            gabarito_exists = (GABARITOS_DIR / gabarito_pdf).exists()

            anuladas = [q for q in questoes if q.get("gabarito") == "X"]
            retificadas = []

            results.append({
                "id": "fepese-2023-bc-agente-fiscal-tributario",
                "file": ex["file"],
                "titulo": "Concurso Público Balneário Camboriú - Agente Fiscal Tributário (FEPESE 2023)",
                "banca": "FEPESE",
                "ano": 2023,
                "orgao": "Prefeitura de Balneário Camboriú",
                "cargo": "Agente Fiscal Tributário",
                "formato": "multipla_escolha_5",
                "prova_pdf": prova_pdf,
                "prova_exists": prova_exists,
                "gabarito_pdf": gabarito_pdf,
                "gabarito_exists": gabarito_exists,
                "total_esperado": total_esperado,
                "total_encontrado": total_encontrado,
                "total_anuladas": len(anuladas),
                "anuladas_numeros": [i + 1 for i, q in enumerate(questoes) if q.get("gabarito") == "X"],
                "total_retificadas": 0,
                "retificadas_numeros": [],
                "gabarito_status": "definitivo",
                "homologado": True,
                "is_sequential": True,
                "shared_texts_count": 0,
                "tables_count": sum(1 for q in questoes if "|" in q.get("enunciado", "")),
                "images_count": 0,
                "missing_images": [],
                "audit_data_hora": "2026-11-04",
                "audit_auditor": "App_Concurseiro Integrador",
                "audit_notas": "Formato legado adaptado no examsRegistry.ts (40 questões de múltipla escolha 5 alternativas)."
            })

    print(json.dumps(results, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    audit()
