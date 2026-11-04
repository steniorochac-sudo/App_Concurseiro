import { describe, it, expect } from 'vitest';
import { validateExamDocumentV2, ExamDocumentV2 } from '../../../types/examSchemaV2';
import analistaContabilData from '../analista_contabil.json';

describe('Auditoria Automatizada - analista_contabil.json (QUADRIX / CRC-SP)', () => {
  const doc = analistaContabilData as unknown as ExamDocumentV2;

  it('deve ser aprovado sem erros pelo validador ExamSchema v2.0', () => {
    const errors = validateExamDocumentV2(doc);
    expect(errors).toHaveLength(0);
  });

  it('deve conter exatamente 120 itens com numeração sequencial de 1 a 120', () => {
    expect(doc.questoes).toHaveLength(120);
    const numbers = doc.questoes.map((q) => q.numeroOriginal);
    const expected = Array.from({ length: 120 }, (_, i) => i + 1);
    expect(numbers).toEqual(expected);
  });

  it('deve conter alternativas de Certo/Errado estritas em todos os itens', () => {
    for (const q of doc.questoes) {
      expect(q.tipo).toBe('certo_errado');
      expect(q.alternativas).toEqual([
        { id: 'C', text: 'CERTO' },
        { id: 'E', text: 'ERRADO' },
      ]);
      expect(['C', 'E']).toContain(q.gabaritoOficial);
      expect(q.gabaritoStatus).toBe('valido');
    }
  });

  it('deve conter o texto de apoio compartilhado associado aos itens de 1 a 20', () => {
    for (let i = 0; i < 20; i++) {
      const q = doc.questoes[i];
      expect(q.textoCompartilhado).toBeDefined();
      expect(q.textoCompartilhado?.title).toBe('Texto para os itens de 1 a 20');
      expect(q.textoCompartilhado?.content).toContain('Polícia de SP investiga se contador');
    }
  });

  it('deve ter todos os metadados de disciplinas e páginas de origem preenchidos', () => {
    for (const q of doc.questoes) {
      expect(q.metadados.disciplina).toBeTruthy();
      expect(q.metadados.paginaOrigem).toBeGreaterThanOrEqual(1);
      expect(q.metadados.paginaOrigem).toBeLessThanOrEqual(8);
    }
  });
});
