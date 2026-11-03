import os
import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

IMPORTED_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data\imported"
PROVAS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\provas_pdf"
GABARITOS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\gabaritos_pdf"

def audit_all_json_files():
    files = [f for f in os.listdir(IMPORTED_DIR) if f.endswith('.json')]
    print(f"Encontrados {len(files)} arquivos JSON para auditoria.\n")
    
    total_questions = 0
    issues = []
    
    for filename in sorted(files):
        path = os.path.join(IMPORTED_DIR, filename)
        try:
            with open(path, 'r', encoding='utf-8') as f:
                data = json.load(f)
        except Exception as e:
            issues.append(f"❌ {filename}: Erro ao ler JSON: {e}")
            continue

        if not isinstance(data, list):
            issues.append(f"❌ {filename}: Conteúdo não é uma lista!")
            continue

        q_count = len(data)
        total_questions += q_count
        
        file_issues = 0
        for idx, q in enumerate(data):
            q_id = q.get('id', f'idx_{idx}')
            enunciado = q.get('enunciado', '')
            alternativas = q.get('alternativas', [])
            gabarito = q.get('gabarito', '')
            
            # Checagem de tamanho do enunciado
            if len(enunciado.strip()) < 20:
                issues.append(f"⚠️ {filename} [{q_id}]: Enunciado muito curto ou ruído ({len(enunciado)} chars): '{enunciado[:50]}'")
                file_issues += 1
            
            # Checagem de alternativas
            if len(alternativas) < 2:
                issues.append(f"⚠️ {filename} [{q_id}]: Menos de 2 alternativas ({len(alternativas)})")
                file_issues += 1
                
            # Checagem de alternativas vazias ou com ruído
            for opt in alternativas:
                opt_text = opt.get('text', '')
                if not opt_text or len(opt_text.strip()) == 0:
                    issues.append(f"⚠️ {filename} [{q_id}]: Alternativa {opt.get('id')} vazia!")
                    file_issues += 1
                if 'Check-square' in opt_text or 'SQUARE' in opt_text:
                    issues.append(f"⚠️ {filename} [{q_id}]: Símbolo de PDF na alternativa {opt.get('id')}")
                    file_issues += 1
                    
            # Checagem de gabarito válido
            valid_ids = [opt.get('id') for opt in alternativas]
            if gabarito not in valid_ids and gabarito not in ['A', 'B', 'C', 'D', 'E', 'X', 'N']:
                issues.append(f"⚠️ {filename} [{q_id}]: Gabarito '{gabarito}' inválido. Válidos: {valid_ids}")
                file_issues += 1
                
            # Checagem de ruído de cabeçalho
            if 'pcimarkpci' in enunciado or 'Página ' in enunciado:
                issues.append(f"⚠️ {filename} [{q_id}]: Ruído de cabeçalho no enunciado")
                file_issues += 1

        status_icon = "✅" if file_issues == 0 and q_count > 0 else "⚠️" if q_count > 0 else "❌"
        print(f"{status_icon} {filename}: {q_count} questões ({file_issues} problemas encontrados)")

    print("\n" + "="*70)
    print(f"TOTAL DE QUESTÕES AUDITADAS: {total_questions}")
    print(f"TOTAL DE PROBLEMAS IDENTIFICADOS: {len(issues)}")
    print("="*70)
    
    if issues:
        print("\nLista dos primeiros 25 problemas:")
        for iss in issues[:25]:
            print(iss)

if __name__ == '__main__':
    audit_all_json_files()
