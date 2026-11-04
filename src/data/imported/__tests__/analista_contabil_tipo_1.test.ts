import { describe, it, expect } from 'vitest';
import { validateExamDocumentV2, ExamDocumentV2 } from '../../../types/examSchemaV2';
import dpeRoData from '../analista_contabil_tipo_1.json';

describe('Auditoria Automatizada - analista_contabil_tipo_1.json (FGV / DPE-RO 2015)', () => {
  const doc = dpeRoData as unknown as ExamDocumentV2;

  it('deve ser aprovado sem erros pelo validador ExamSchema v2.0', () => {
    const errors = validateExamDocumentV2(doc);
    expect(errors).toHaveLength(0);
  });

  it('deve conter exatamente 70 questões com numeração de 1 a 70', () => {
    expect(doc.questoes).toHaveLength(70);
    const numbers = doc.questoes.map((q) => q.numeroOriginal);
    const expected = Array.from({ length: 70 }, (_, i) => i + 1);
    expect(numbers).toEqual(expected);
  });

  it('deve conter 5 alternativas (A, B, C, D, E) em todas as 70 questões', () => {
    for (const q of doc.questoes) {
      expect(q.tipo).toBe('multipla_escolha');
      expect(q.alternativas).toHaveLength(5);
      const optIds = q.alternativas.map((a) => a.id);
      expect(optIds).toEqual(['A', 'B', 'C', 'D', 'E']);
      for (const a of q.alternativas) {
        expect(a.text.length).toBeGreaterThan(0);
      }
      expect(['A', 'B', 'C', 'D', 'E']).toContain(q.gabaritoOficial);
      expect(q.gabaritoStatus).toBe('valido');
    }
  });

  it('deve associar os textos compartilhados Texto 1 (Q1-Q7) e Texto 2 (Q8-Q21)', () => {
    // Texto 1
    for (let i = 0; i < 7; i++) {
      const q = doc.questoes[i];
      expect(q.textoCompartilhado).toBeDefined();
      expect(q.textoCompartilhado?.title).toContain('TEXTO 1');
      expect(q.textoCompartilhado?.content).toContain('O mito da maioridade penal');
    }

    // Texto 2
    for (let i = 7; i < 21; i++) {
      const q = doc.questoes[i];
      expect(q.textoCompartilhado).toBeDefined();
      expect(q.textoCompartilhado?.title).toContain('TEXTO 2');
      expect(q.textoCompartilhado?.content).toContain('Estatuto da Criança e do Adolescente');
    }
  });

  it('deve preservar marcação de sublinhado e tabelas nas questões identificadas', () => {
    // Q13 has <u>Mesmo</u>
    const q13 = doc.questoes.find((q) => q.numeroOriginal === 13);
    expect(q13?.enunciado).toContain('<u>Mesmo</u>');

    // Q23 has markdown table with Balsas
    const q23 = doc.questoes.find((q) => q.numeroOriginal === 23);
    expect(q23?.enunciado).toContain('| Rio | Investimento $ |');
    expect(q23?.enunciado).toContain('| Tuiuiu |');
  });

  it('deve cobrir as 4 disciplinas oficiais do concurso da DPE-RO', () => {
    const disciplinas = new Set(doc.questoes.map((q) => q.metadados.disciplina));
    expect(disciplinas).toContain('Língua Portuguesa');
    expect(disciplinas).toContain('Conhecimentos Específicos');
    expect(disciplinas).toContain('Legislação Institucional');
    expect(disciplinas).toContain('Geografia e História de Rondônia');
  });
});
