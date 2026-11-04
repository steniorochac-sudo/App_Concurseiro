import unittest
import json

class TestExamSchemaV2(unittest.TestCase):
    def validate_exam_dict(self, doc):
        errors = []
        if doc.get('schemaVersion') != '2.0':
            errors.append("schemaVersion deve ser '2.0'")
        exam = doc.get('exam')
        if not exam:
            errors.append("Campo 'exam' obrigatório")
            return errors
            
        for req in ['id', 'orgao', 'banca', 'cargo', 'ano', 'formatoQuestoes', 'totalQuestoes', 'totalAnuladas', 'auditTrail']:
            if req not in exam:
                errors.append(f"Campo obrigatório no exame ausente: {req}")
                
        questoes = doc.get('questoes', [])
        if not isinstance(questoes, list) or len(questoes) == 0:
            errors.append("'questoes' deve ser lista não-vazia")
            return errors
            
        if len(questoes) != exam.get('totalQuestoes'):
            errors.append(f"Discrepância no total de questões: declarado {exam.get('totalQuestoes')}, presentes {len(questoes)}")
            
        seen_ids = set()
        seen_nums = set()
        anuladas_count = 0
        
        for q in questoes:
            qid = q.get('id')
            if not qid or qid in seen_ids:
                errors.append(f"ID inválido ou duplicado: {qid}")
            seen_ids.add(qid)
            
            num = q.get('numeroOriginal')
            if not num or num in seen_nums:
                errors.append(f"Número original inválido ou duplicado: {num}")
            seen_nums.add(num)
            
            tipo = q.get('tipo')
            alts = q.get('alternativas', [])
            if tipo == 'multipla_escolha':
                if len(alts) not in (4, 5):
                    errors.append(f"Questão {num} deve ter 4 ou 5 alternativas")
            elif tipo == 'certo_errado':
                if len(alts) != 2:
                    errors.append(f"Questão {num} C/E deve ter 2 alternativas")
            else:
                errors.append(f"Tipo desconhecido na questão {num}: {tipo}")
                
            gab = q.get('gabaritoOficial', '').upper()
            if gab not in ['A', 'B', 'C', 'D', 'E', 'X']:
                errors.append(f"Gabarito inválido na questão {num}: {gab}")
                
            if gab == 'X' or q.get('gabaritoStatus') == 'anulado':
                anuladas_count += 1
                
        if anuladas_count != exam.get('totalAnuladas'):
            errors.append(f"Discrepância nas anulações: declarado {exam.get('totalAnuladas')}, encontradas {anuladas_count}")
            
        return errors

    def test_valid_doc(self):
        doc = {
            'schemaVersion': '2.0',
            'exam': {
                'id': 'teste_py',
                'orgao': 'Órgão Teste',
                'banca': 'FGV',
                'cargo': 'Analista',
                'ano': 2024,
                'formatoQuestoes': 'multipla_escolha_5',
                'totalQuestoes': 1,
                'totalAnuladas': 0,
                'auditTrail': {
                    'arquivoProvaPdf': 'p.pdf',
                    'arquivoGabaritoPdf': 'g.pdf',
                    'secaoGabarito': 'Analista',
                    'paginaGabarito': 1,
                    'tipoGabarito': 'preliminar',
                    'responsavelAuditoria': 'Auditor'
                }
            },
            'questoes': [{
                'id': 'q01',
                'numeroOriginal': 1,
                'tipo': 'multipla_escolha',
                'enunciado': 'Enunciado de teste',
                'alternativas': [
                    {'id': 'A', 'text': 'A'},
                    {'id': 'B', 'text': 'B'},
                    {'id': 'C', 'text': 'C'},
                    {'id': 'D', 'text': 'D'},
                    {'id': 'E', 'text': 'E'}
                ],
                'gabaritoOficial': 'A',
                'gabaritoStatus': 'valido',
                'metadados': {
                    'disciplina': 'Português',
                    'paginaOrigem': 1
                }
            }]
        }
        errs = self.validate_exam_dict(doc)
        self.assertEqual(len(errs), 0)

if __name__ == '__main__':
    unittest.main()
