import os
import json

IMPORTED_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'imported')
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'allExamsCatalog.ts')

exams_catalog = []
all_questions = []

for filename in sorted(os.listdir(IMPORTED_DIR)):
    if filename.endswith('.json'):
        filepath = os.path.join(IMPORTED_DIR, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                qs = json.load(f)
                if isinstance(qs, list) and len(qs) > 0:
                    exam_id = filename.replace('.json', '')
                    first_q = qs[0]
                    exams_catalog.append({
                        "id": exam_id,
                        "filename": filename,
                        "title": first_q.get("cargo", exam_id.replace('_', ' ').title()),
                        "banca": first_q.get("banca", "Várias"),
                        "ano": first_q.get("ano", 2023),
                        "orgao": first_q.get("orgao", "Concurso Público"),
                        "totalQuestions": len(qs),
                        "questions": qs
                    })
                    all_questions.extend(qs)
        except Exception as e:
            print(f"Erro ao ler {filename}: {e}")

print(f"Total de provas catalogadas: {len(exams_catalog)}")
print(f"Total de questões: {len(all_questions)}")

ts_content = f"""// Catálogo completo de todas as 26 provas reais para carregamento em 1 clique no celular
import {{ Question }} from '../types';

export interface PreloadedExam {{
  id: string;
  filename: string;
  title: string;
  banca: string;
  ano: number;
  orgao: string;
  totalQuestions: number;
  questions: Question[];
}}

export const PRELOADED_EXAMS: PreloadedExam[] = {json.dumps(exams_catalog, ensure_ascii=False, indent=2)};

export const ALL_IMPORTED_QUESTIONS: Question[] = {json.dumps(all_questions, ensure_ascii=False, indent=2)};
"""

with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Arquivo gerado com sucesso: {OUTPUT_FILE}")
