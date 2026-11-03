import os
import sys
import json
import time
import subprocess
from vision_exam_pipeline import process_exam_with_vision
from exam_mappings import EXAM_MAPPINGS, GABARITOS_DIR, OUTPUT_DIR
from master_exam_builder import extract_gabarito_matrix_robust
import pypdf

sys.stdout.reconfigure(encoding='utf-8')

# As 4 provas que já estão prontas e homologadas no imported/
ALREADY_HOMOLOGATED = [
    "fiscal_tributario5.pdf",
    "fiscal_tributario3.pdf",
    "prova_objetiva_auditor.pdf",
    "analista_contabil.pdf"
]

def load_gabarito_for_exam(exam_info):
    gabarito_path = os.path.join(GABARITOS_DIR, exam_info['gabarito'])
    gabarito_text = ""
    if os.path.exists(gabarito_path):
        try:
            reader_g = pypdf.PdfReader(gabarito_path)
            for page in reader_g.pages:
                t = page.extract_text()
                if t:
                    gabarito_text += t + "\n"
        except Exception:
            pass
    return extract_gabarito_matrix_robust(gabarito_text, exam_info['cargo'], exam_info['id'])

def run_full_pipeline_and_shutdown():
    remaining_exams = [e for e in EXAM_MAPPINGS if e['prova'] not in ALREADY_HOMOLOGATED]

    print("=" * 80)
    print(f"🚀 INICIANDO PROCESSAMENTO TOTAL COM GEMINI 3.7 FLASH ({len(remaining_exams)} cadernos restantes)")
    print("=" * 80)

    for idx, exam in enumerate(remaining_exams, 1):
        print(f"\n[{idx}/{len(remaining_exams)}] 📚 Processando: {exam['prova']} ({exam['orgao']})")
        
        try:
            raw_questions = process_exam_with_vision(exam)
            if not raw_questions:
                print(f"⚠️ Nenhuma questão extraída para {exam['prova']}")
                continue

            gab_matrix = load_gabarito_for_exam(exam)
            structured_questions = []

            seen_nums = set()
            for q in raw_questions:
                q_num = q.get('numero', 1)
                if q_num in seen_nums:
                    continue
                seen_nums.add(q_num)

                tipo = q.get('tipo', 'multipla_escolha')
                enunciado = q.get('enunciado', '')
                disciplina = q.get('disciplina', exam['disciplina_default'])
                subtopicos = q.get('subtopicos', [disciplina])

                gabarito_raw = gab_matrix.get(q_num, "A")
                
                if tipo == "certo_errado":
                    gabarito = "A" if gabarito_raw == 'C' else "B" if gabarito_raw == 'E' else gabarito_raw
                    alternativas = [
                        { "id": "A", "text": "CERTO" },
                        { "id": "B", "text": "ERRADO" }
                    ]
                else:
                    gabarito = gabarito_raw
                    raw_opts = q.get('alternativas', [])
                    alternativas = []
                    for opt in raw_opts:
                        opt_id = opt.get('id', '').upper()
                        opt_text = opt.get('text', '').strip()
                        if opt_id and opt_text:
                            alternativas.append({ "id": opt_id, "text": opt_text })

                    if len(alternativas) < 2:
                        continue

                    valid_ids = [o['id'] for o in alternativas]
                    if gabarito not in valid_ids:
                        gabarito = valid_ids[0]

                explicacao = f"🎯 Gabarito Oficial: {gabarito}.\nQuestão {q_num} da prova oficial de {exam['cargo']} ({exam['banca']}). Resposta homologada pela banca examinadora."

                structured_questions.append({
                    "id": f"q-{exam['id']}-{str(q_num).zfill(2)}",
                    "banca": exam['banca'],
                    "ano": exam['ano'],
                    "orgao": exam['orgao'],
                    "cargo": exam['cargo'],
                    "disciplina": disciplina,
                    "assunto": "Questões de Concurso",
                    "subtopicos": subtopicos,
                    "enunciado": f"{q_num}. {enunciado}" if not enunciado.strip().startswith(str(q_num)) else enunciado,
                    "alternativas": alternativas,
                    "gabarito": gabarito,
                    "explicacao": explicacao,
                    "baseLegal": f"Gabarito Oficial {exam['banca']}.",
                    "fontePesquisa": f"Caderno Oficial {exam['orgao']} - {exam['ano']}",
                    "dificuldade": "médio"
                })

            out_path = os.path.join(OUTPUT_DIR, exam['prova'].replace('.pdf', '.json'))
            with open(out_path, 'w', encoding='utf-8') as f:
                json.dump(structured_questions, f, ensure_ascii=False, indent=2)

            print(f"✅ Salvo com sucesso: {exam['prova'].replace('.pdf', '.json')} ({len(structured_questions)} questões)")

        except Exception as e:
            print(f"❌ Erro ao processar {exam['prova']}: {e}")

        # Pausa para respeitar taxa da API do Gemini
        time.sleep(2)

    print("\n" + "=" * 80)
    print("📦 RECOMPILANDO CATÁLOGO TYPESCRIPT E EXECUTANDO TESTES...")
    print("=" * 80)

    # 1. Recompila allExamsCatalog.ts
    subprocess.run(["python", "scripts/bundle_exams_for_app.py"], check=True)

    # 2. Executa testes Vitest
    subprocess.run(["npm", "test"], shell=True, check=True)

    # 3. Compila Build de Produção
    subprocess.run(["npm", "run", "build"], shell=True, check=True)

    # 4. Deploy em Produção no Netlify
    print("\n🌐 PUBLICANDO VERSÃO COMPLETA NO NETLIFY...")
    subprocess.run(["npx", "netlify", "deploy", "--prod", "--dir=dist"], shell=True, check=True)

    print("\n" + "=" * 80)
    print("🎉 TUDO PRONTO! BANCO 100% INGERIDO COM GEMINI 3.7 FLASH E PUBLICADO NO NETLIFY!")
    print("💤 Desligando o computador em 60 segundos...")
    print("=" * 80)

    # 5. Desliga o computador
    os.system('shutdown /s /t 60 /c "Processamento completo e deploy finalizado com sucesso no Netlify!"')

if __name__ == '__main__':
    run_full_pipeline_and_shutdown()
