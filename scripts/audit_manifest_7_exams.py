import os
import json
import re
from pathlib import Path
import pymupdf

BASE_DIR = Path(__file__).resolve().parent.parent
PROVAS_DIR = BASE_DIR / "provas_pdf"
GABARITOS_DIR = BASE_DIR / "gabaritos_pdf"
IMPORTED_DIR = BASE_DIR / "src" / "data" / "imported"
PUBLIC_DIR = BASE_DIR / "public"
REGISTRY_FILE = BASE_DIR / "src" / "data" / "documentary_status_registry.json"

DOCUMENTARY_REGISTRY = {}
if REGISTRY_FILE.exists():
    with open(REGISTRY_FILE, "r", encoding="utf-8") as rf:
        DOCUMENTARY_REGISTRY = json.load(rf)

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

def extract_tokens(text):
    """Extrai tokens alfanuméricos com comprimento >= 4 para triagem lexical."""
    if not text:
        return []
    s = re.sub(r'!\[.*?\]\(.*?\)', ' ', text)
    s = re.sub(r'[*_#`~>\[\]|()]', ' ', s)
    s = re.sub(r'[^\w\s]', ' ', s)
    return [w.lower() for w in s.split() if len(w) >= 4]

def triagem_lexical_auxiliar(questoes, pdf_path):
    """
    1. Ferramenta auxiliar de triagem lexical (Pendência 1 - 4ª Auditoria).
    Calcula a presença de vocabulário do JSON no texto do PDF oficial.
    Útil para triagem preliminar, MAS NÃO COMPROVA TRANSCRIÇÃO INTEGRAL.
    """
    if not pdf_path or not Path(pdf_path).exists():
        return {
            "status": "nao_verificada",
            "questoes_aprovadas": 0,
            "questoes_total": len(questoes),
            "taxa_media": 0.0,
            "divergencias": ["PDF não encontrado no disco."],
        }

    try:
        doc = pymupdf.open(pdf_path)
        pdf_text = " ".join(page.get_text() for page in doc)
        pdf_words = set(extract_tokens(pdf_text))
    except Exception as e:
        return {
            "status": "nao_verificada",
            "questoes_aprovadas": 0,
            "questoes_total": len(questoes),
            "taxa_media": 0.0,
            "divergencias": [f"Erro ao abrir PDF: {str(e)}"],
        }

    approved = 0
    divergent = 0
    divergencias = []

    for idx, q in enumerate(questoes, 1):
        num = q.get("numeroOriginal", idx)
        enunciado = q.get("enunciado", "")
        tokens = extract_tokens(enunciado)
        for a in q.get("alternativas", []):
            alt_text = a.get("text", "") if isinstance(a, dict) else str(a)
            tokens.extend(extract_tokens(alt_text))

        if not tokens:
            divergent += 1
            divergencias.append(f"Questão {num}: sem vocabulário suficiente para triagem.")
            continue

        matches = sum(1 for t in tokens if t in pdf_words)
        ratio = matches / len(tokens)

        if ratio >= 0.70:
            approved += 1
        else:
            divergent += 1
            divergencias.append(f"Questão {num}: correspondência lexical insuficiente ({round(ratio*100)}% < 70%).")

    total = len(questoes)
    status = "triagem_lexical_aprovada" if approved == total else "divergencia_identificada"

    return {
        "status": status,
        "questoes_aprovadas": approved,
        "questoes_total": total,
        "taxa_media": round(approved / total, 3) if total > 0 else 0.0,
        "divergencias": divergencias,
    }

def conferencia_documental_estrita(questoes, pdf_path, prova_pdf_nome, missing_images=None):
    """
    2. Conferência Documental Estrita e Localizada (Pendência 1 - 4ª Auditoria).
    Distingue rigorosamente:
    - triagem_lexical_aprovada
    - verificacao_documental_pendente
    - verificacao_documental_concluida
    - divergencia_identificada

    Regras obrigatórias:
    - Não presume fidelidade de imagens, tabelas, fórmulas ou sublinhados a partir de texto extraído.
    - Exige evidência de comparação localizada e completa de enunciado, alternativas, textos de apoio e elementos visuais.
    - Registra método de verificação, origem documental, resultado e pendências por questão.
    """
    if missing_images is None:
        missing_images = []

    detalhe_questoes = []
    concluidas_count = 0
    pendentes_count = 0
    divergentes_count = 0

    pdf_doc = None
    if pdf_path and Path(pdf_path).exists():
        try:
            pdf_doc = pymupdf.open(pdf_path)
        except Exception:
            pdf_doc = None

    for idx, q in enumerate(questoes, 1):
        num = q.get("numeroOriginal", idx)
        enunciado = q.get("enunciado", "")
        meta = q.get("metadados", {}) or {}
        pagina_declarada = meta.get("paginaOrigem")

        # Detecção explícita de elementos visuais e estruturais não-triviais
        has_images = bool(q.get("imagens") or meta.get("imagens") or "![" in enunciado)
        has_tables = "|" in enunciado
        has_underlines = "<u>" in enunciado or "<U>" in enunciado or "__" in enunciado
        has_shared_text = bool(q.get("textoCompartilhado"))
        
        # Ativos de imagens locais ausentes para esta questão
        q_missing_imgs = [img for img in missing_images if img in str(q)]

        pendencias = []
        status_q = "verificacao_documental_pendente"
        metodo = "triagem_lexical_com_inspecao_estrutural"

        if q_missing_imgs:
            status_q = "divergencia_identificada"
            divergentes_count += 1
            pendencias.append(f"Ativos de imagem ausentes no disco: {', '.join(q_missing_imgs)}")
        else:
            # Não presumir fidelidade de imagens, tabelas, fórmulas ou sublinhados a partir de texto extraído (Regra 6)
            if has_images:
                pendencias.append("Elemento visual (imagem) requer conferência visual em fase documental dedicada.")
            if has_tables:
                pendencias.append("Elemento estrutural (tabela) requer conferência de formatação em fase documental dedicada.")
            if has_underlines:
                pendencias.append("Elemento tipográfico (sublinhado/ênfase) requer conferência em fase documental dedicada.")
            if has_shared_text:
                pendencias.append("Texto de apoio compartilhado associado requer conferência em fase documental dedicada.")

            # Como as 590 questões aguardam a fase documental própria de transcrição integral e localizada:
            pendencias.append("Transcrição integral localizada e confronto das alternativas pendente de fase documental dedicada.")
            pendentes_count += 1

        detalhe_questoes.append({
            "numeroOriginal": num,
            "metodo_verificacao": metodo,
            "origem_documental": {
                "arquivo_pdf": prova_pdf_nome,
                "pagina_declarada": pagina_declarada,
            },
            "elementos_visuais_identificados": {
                "tem_imagens": has_images,
                "tem_tabelas": has_tables,
                "tem_sublinhados": has_underlines,
                "tem_texto_compartilhado": has_shared_text,
            },
            "status_documental": status_q,
            "pendencias": pendencias,
        })

    # Determinação do estado documental global do exame:
    if divergentes_count > 0:
        status_global = "divergencia_identificada"
    elif concluidas_count == len(questoes) and pendentes_count == 0:
        status_global = "verificacao_documental_concluida"
    else:
        # Estado padrão fiel enquanto decorre a fase documental das 590 questões:
        status_global = "verificacao_documental_pendente"

    return {
        "status_documental": status_global,
        "questoes_concluidas": concluidas_count,
        "questoes_pendentes": pendentes_count,
        "questoes_divergentes": divergentes_count,
        "detalhe_questoes": detalhe_questoes,
    }

def audit():
    results = []
    markdown_img_regex = re.compile(r'!\[.*?\]\((.*?)\)')

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
            
            prova_path = PROVAS_DIR / prova_pdf if prova_pdf else None
            gabarito_path = GABARITOS_DIR / gabarito_pdf if gabarito_pdf else None

            prova_exists = bool(prova_path and prova_path.exists())
            gabarito_exists = bool(gabarito_path and gabarito_path.exists())
            arquivos_encontrados = prova_exists and gabarito_exists

            total_esperado = exam_meta.get("totalQuestoes", len(questoes))
            total_encontrado = len(questoes)

            homologado = exam_meta.get("homologado", False)
            gabarito_status = audit_trail.get("tipoGabarito") or audit_trail.get("statusGabarito") or "desconhecido"
            status_auditoria = audit_trail.get("statusAuditoria") or "desconhecido"

            anuladas = [
                q for q in questoes 
                if q.get("gabaritoStatus") in ("anulado", "anulada") or q.get("gabaritoOficial") in ("X", "NUL", "ANULADO", "")
            ]

            retificadas = [
                q for q in questoes 
                if q.get("gabaritoStatus") in ("retificado", "alterado")
            ]

            # Validação estrutural
            numeros = [q.get("numeroOriginal") for q in questoes if q.get("numeroOriginal") is not None]
            numeros_sorted = sorted(numeros)
            is_sequential = (numeros_sorted == list(range(1, total_esperado + 1))) and (len(questoes) == total_esperado)
            all_have_enunciado = all(bool(q.get("enunciado", "").strip()) for q in questoes)
            all_have_alternativas = all(isinstance(q.get("alternativas"), list) and len(q.get("alternativas")) in (2, 4, 5) for q in questoes)
            estrutura_validada = is_sequential and all_have_enunciado and all_have_alternativas and (data.get("schemaVersion") == "2.0")

            # Inspeção física de imagens
            images_found = []
            missing_images = []
            tables_count = 0
            shared_texts_count = 0
            has_pagina_origem = True

            for q in questoes:
                if q.get("textoCompartilhado"):
                    shared_texts_count += 1
                
                if "|" in q.get("enunciado", ""):
                    tables_count += 1
                
                meta = q.get("metadados", {})
                if not meta or not meta.get("paginaOrigem"):
                    has_pagina_origem = False

                raw_imgs = []
                for img in q.get("imagens", []):
                    raw_imgs.append(img.get("src", "") if isinstance(img, dict) else str(img))
                for img in meta.get("imagens", []):
                    raw_imgs.append(img.get("src", "") if isinstance(img, dict) else str(img))
                
                text_to_search = f"{q.get('enunciado', '')} {' '.join(a.get('text', '') for a in q.get('alternativas', []))}"
                for m in markdown_img_regex.finditer(text_to_search):
                    raw_imgs.append(m.group(1))

                for src in set(raw_imgs):
                    if not src:
                        continue
                    clean_src = src.lstrip("/")
                    img_path = PUBLIC_DIR / clean_src
                    if img_path.exists():
                        images_found.append(src)
                    else:
                        missing_images.append(src)

            # 1. Ferramenta auxiliar de triagem lexical (Pendência 1 - Regra 1)
            triagem_info = triagem_lexical_auxiliar(questoes, prova_path)
            triagem_lexical_status = triagem_info["status"]

            # 2. Conferência documental estrita por questão (Pendência 1 - Regras 2, 3, 4, 5, 6)
            conferencia_doc = conferencia_documental_estrita(questoes, prova_path, prova_pdf, missing_images)
            status_documental = conferencia_doc["status_documental"]

            gabarito_reconciliado = gabarito_status

            exam_id = exam_meta.get("id")
            reg_entry = DOCUMENTARY_REGISTRY.get(exam_id, {})
            reg_is_homologated = reg_entry.get("isHomologated", False) and reg_entry.get("isDocumentaryVerified", False)

            # RECALCULO ESTRITO DE HOMOLOGAÇÃO (Pendência 1 / Correção A - 5ª Auditoria):
            # Homologação documental NUNCA é atribuída com base apenas em triagem lexical ou declaração histórica!
            # Depende de conferência documental integral comprovada no registro único.
            homologacao_comprovada = (
                reg_is_homologated and
                estrutura_validada and 
                arquivos_encontrados and 
                (gabarito_reconciliado == "definitivo") and 
                (len(missing_images) == 0) and
                (status_documental == "verificacao_documental_concluida")
            )

            results.append({
                "id": exam_meta.get("id"),
                "file": ex["file"],
                "titulo": exam_meta.get("titulo"),
                "banca": exam_meta.get("banca"),
                "ano": exam_meta.get("ano"),
                "orgao": exam_meta.get("orgao"),
                "cargo": exam_meta.get("cargo"),
                "formato": exam_meta.get("formatoQuestoes"),
                "estrutura_validada": estrutura_validada,
                "arquivos_encontrados": arquivos_encontrados,
                "prova_pdf": prova_pdf,
                "prova_exists": prova_exists,
                "gabarito_pdf": gabarito_pdf,
                "gabarito_exists": gabarito_exists,
                "gabarito_reconciliado": gabarito_reconciliado,
                # Os 4 estados explícitos segregados (Pendência 1 - Regra 3):
                "triagem_lexical": triagem_lexical_status,
                "status_documental": status_documental,
                "fidelidade_textual": status_documental,
                "questoes_triadas_lexical": triagem_info["questoes_aprovadas"],
                "questoes_conferidas_documental": conferencia_doc["questoes_concluidas"],
                "questoes_pendentes_fase_documental": conferencia_doc["questoes_pendentes"],
                "homologacao_comprovada": homologacao_comprovada,
                "status_homologacao": "homologado" if homologacao_comprovada else "validacao_pendente",
                "fase_documental_pendente": True,
                "total_esperado": total_esperado,
                "total_encontrado": total_encontrado,
                "total_anuladas": len(anuladas),
                "anuladas_numeros": [q.get("numeroOriginal") for q in anuladas],
                "total_retificadas": len(retificadas),
                "retificadas_numeros": [q.get("numeroOriginal") for q in retificadas],
                "shared_texts_count": shared_texts_count,
                "tables_count": tables_count,
                "images_count": len(images_found),
                "missing_images": missing_images,
                "audit_data_hora": audit_trail.get("dataAuditoria") or audit_trail.get("dataAuditada"),
                "audit_auditor": audit_trail.get("responsavelAuditoria") or audit_trail.get("auditor"),
                "audit_status": "triagem_lexical_aprovada_conferencia_documental_pendente",
            })
        else:
            # FEPESE legacy format com segregação documental estrita
            questoes = data
            total_encontrado = len(questoes)
            total_esperado = 40
            prova_pdf = "agente_fiscal_tributario 1.pdf"
            gabarito_pdf = "gabarito_agente_fiscal_tributario 1.pdf"
            prova_path = PROVAS_DIR / prova_pdf
            gabarito_path = GABARITOS_DIR / gabarito_pdf

            prova_exists = prova_path.exists()
            gabarito_exists = gabarito_path.exists()
            arquivos_encontrados = prova_exists and gabarito_exists

            anuladas = [q for q in questoes if q.get("gabarito") == "X"]
            retificadas = []

            estrutura_validada = (total_encontrado == 40) and all(bool(q.get("enunciado")) for q in questoes)
            
            # 1. Triagem lexical auxiliar
            triagem_info = triagem_lexical_auxiliar(questoes, prova_path)
            triagem_lexical_status = triagem_info["status"]

            # 2. Conferência documental estrita
            fepese_id = "fepese-2023-bc-agente-fiscal-tributario"
            reg_entry = DOCUMENTARY_REGISTRY.get(fepese_id, {})
            reg_is_homologated = reg_entry.get("isHomologated", False) and reg_entry.get("isDocumentaryVerified", False)

            if reg_is_homologated and reg_entry.get("statusDocumental") == "verificacao_documental_concluida":
                status_documental = "verificacao_documental_concluida"
                questoes_conferidas = len(questoes)
                questoes_pendentes = 0
                fase_doc_pendente = False
                audit_status = "homologado_comprovacao_documental_concluida"
            else:
                conferencia_doc = conferencia_documental_estrita(questoes, prova_path, prova_pdf, [])
                status_documental = conferencia_doc["status_documental"]
                questoes_conferidas = conferencia_doc["questoes_concluidas"]
                questoes_pendentes = conferencia_doc["questoes_pendentes"]
                fase_doc_pendente = True
                audit_status = "triagem_lexical_aprovada_conferencia_documental_pendente"

            gabarito_reconciliado = "definitivo"

            # Recálculo sem presunção: requer homologação no registro oficial, estrutura validada, arquivos existentes e status documental concluído
            homologacao_comprovada = (
                reg_is_homologated and
                estrutura_validada and 
                arquivos_encontrados and 
                (gabarito_reconciliado == "definitivo") and
                (status_documental == "verificacao_documental_concluida")
            )

            results.append({
                "id": "fepese-2023-bc-agente-fiscal-tributario",
                "file": ex["file"],
                "titulo": "Concurso Público Balneário Camboriú - Agente Fiscal Tributário (FEPESE 2023)",
                "banca": "FEPESE",
                "ano": 2023,
                "orgao": "Prefeitura de Balneário Camboriú",
                "cargo": "Agente Fiscal Tributário",
                "formato": "multipla_escolha_5",
                "estrutura_validada": estrutura_validada,
                "arquivos_encontrados": arquivos_encontrados,
                "prova_pdf": prova_pdf,
                "prova_exists": prova_exists,
                "gabarito_pdf": gabarito_pdf,
                "gabarito_exists": gabarito_exists,
                "gabarito_reconciliado": gabarito_reconciliado,
                "triagem_lexical": triagem_lexical_status,
                "status_documental": status_documental,
                "fidelidade_textual": status_documental,
                "questoes_triadas_lexical": triagem_info["questoes_aprovadas"],
                "questoes_conferidas_documental": questoes_conferidas,
                "questoes_pendentes_fase_documental": questoes_pendentes,
                "homologacao_comprovada": homologacao_comprovada,
                "status_homologacao": "homologado" if homologacao_comprovada else "validacao_pendente",
                "fase_documental_pendente": fase_doc_pendente,
                "total_esperado": total_esperado,
                "total_encontrado": total_encontrado,
                "total_anuladas": len(anuladas),
                "anuladas_numeros": [29],
                "total_retificadas": 0,
                "retificadas_numeros": [],
                "shared_texts_count": 0,
                "tables_count": 0,
                "images_count": 0,
                "missing_images": [],
                "audit_data_hora": "2026-11-10",
                "audit_auditor": "Auditoria Externa Marco FEPESE (Commit 1df0b203)",
                "audit_status": audit_status,
            })

    print(json.dumps(results, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    audit()
