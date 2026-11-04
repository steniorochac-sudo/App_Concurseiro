import { describe, it, expect } from 'vitest';
import { validateExamDocumentV2, ExamDocumentV2 } from '../../../types/examSchemaV2';
import dpeRoData from '../analista_contabil_tipo_1.json';

describe('Auditoria Automatizada e Regressão - analista_contabil_tipo_1.json (FGV / DPE-RO 2015)', () => {
  const doc = dpeRoData as unknown as ExamDocumentV2;

  it('deve ser aprovado sem erros pelo validador ExamSchema v2.0', () => {
    const errors = validateExamDocumentV2(doc);
    expect(errors).toHaveLength(0);
  });

  it('deve refletir a governança de auditoria (gabarito preliminar, não homologado)', () => {
    expect(doc.exam.homologado).toBe(false);
    expect(doc.exam.auditTrail.tipoGabarito).toBe('preliminar');
    // @ts-expect-error statusAuditoria is custom metadata extension
    expect(doc.exam.auditTrail.statusAuditoria).toBe('fidelidade_documental_aprovada_gabarito_preliminar');
  });

  it('deve conter exatamente 70 questões com numeração de 1 a 70', () => {
    expect(doc.questoes).toHaveLength(70);
    const numbers = doc.questoes.map((q) => q.numeroOriginal);
    const expected = Array.from({ length: 70 }, (_, i) => i + 1);
    expect(numbers).toEqual(expected);
  });

  it('deve conter 5 alternativas (A, B, C, D, E) em todas as 70 questões com status preliminar', () => {
    for (const q of doc.questoes) {
      expect(q.tipo).toBe('multipla_escolha');
      expect(q.alternativas).toHaveLength(5);
      const optIds = q.alternativas.map((a) => a.id);
      expect(optIds).toEqual(['A', 'B', 'C', 'D', 'E']);
      for (const a of q.alternativas) {
        expect(a.text.length).toBeGreaterThan(0);
      }
      expect(['A', 'B', 'C', 'D', 'E']).toContain(q.gabaritoOficial);
      expect(q.gabaritoStatus).toBe('preliminar');
    }
  });

  it('deve conter a distribuição oficial factual do Tipo 1 (A=13, B=13, C=15, D=19, E=10)', () => {
    const dist = {
      A: doc.questoes.filter((q) => q.gabaritoOficial === 'A').length,
      B: doc.questoes.filter((q) => q.gabaritoOficial === 'B').length,
      C: doc.questoes.filter((q) => q.gabaritoOficial === 'C').length,
      D: doc.questoes.filter((q) => q.gabaritoOficial === 'D').length,
      E: doc.questoes.filter((q) => q.gabaritoOficial === 'E').length,
    };
    expect(dist).toEqual({ A: 13, B: 13, C: 15, D: 19, E: 10 });
  });

  describe('Testes de Regressão - Falhas Documentais Apontadas na Auditoria Externa', () => {
    const qMap = new Map(doc.questoes.map((q) => [q.numeroOriginal, q]));

    it('Q04: deve conter a imagem da charge referenciada no enunciado e no array imagens', () => {
      const q4 = qMap.get(4)!;
      expect(q4.imagens).toContain('/assets/exams/analista_contabil_tipo_1/q04_charge.png');
      expect(q4.enunciado).toContain('![Charge](/assets/exams/analista_contabil_tipo_1/q04_charge.png)');
    });

    it('Q13: deve conferir e preservar as duas ocorrências sublinhadas de "mesmo"', () => {
      const q13 = qMap.get(13)!;
      expect(q13.enunciado).toContain('<u>Mesmo</u>');
      expect(q13.enunciado).toContain('<u>mesmo</u>');
      expect(q13.metadados.temSublinhado).toBe(true);
    });

    it('Q17: deve recuperar o gráfico de responsabilidade penal por países', () => {
      const q17 = qMap.get(17)!;
      expect(q17.imagens).toContain('/assets/exams/analista_contabil_tipo_1/q17_grafico.png');
      expect(q17.enunciado).toContain('![Gráfico](/assets/exams/analista_contabil_tipo_1/q17_grafico.png)');
    });

    it('Q23: deve conter as duas tabelas de rios e balsas estruturadas em Markdown', () => {
      const q23 = qMap.get(23)!;
      expect(q23.enunciado).toContain('| Rio | Investimento $ |');
      expect(q23.enunciado).toContain('| Rio | Balsa | Valor de Mercado $ |');
      expect(q23.enunciado).toContain('| Tuiuiu | Balsa 1 |');
    });

    it('Q30: deve conter as tabelas acionárias da CAESG e Clean Tubus estruturadas em Markdown', () => {
      const q30 = qMap.get(30)!;
      expect(q30.enunciado).toContain('**CAESG**');
      expect(q30.enunciado).toContain('**Clean Tubus**');
      expect(q30.enunciado).toContain('| Acionistas | Valor - $ | Part. % |');
    });

    it('Q47: alternativa E deve conter apenas "transferências intergovernamentais.", sem vazamento do Quadro I', () => {
      const q47 = qMap.get(47)!;
      const altE = q47.alternativas.find((a) => a.id === 'E')!;
      expect(altE.text).toBe('transferências intergovernamentais.');
      expect(altE.text).not.toContain('Quadro I');
      expect(altE.text).not.toContain('Receitas Correntes');
    });

    it('Q48 e Q49: devem recuperar e associar o Quadro I a ambas as questões', () => {
      const q48 = qMap.get(48)!;
      const q49 = qMap.get(49)!;

      expect(q48.textoCompartilhado).toBeDefined();
      expect(q49.textoCompartilhado).toBeDefined();

      expect(q48.textoCompartilhado?.id).toBe('fgv-dpero-quadro-1');
      expect(q49.textoCompartilhado?.id).toBe('fgv-dpero-quadro-1');

      expect(q48.textoCompartilhado?.title).toContain('Quadro I');
      expect(q48.textoCompartilhado?.content).toContain('| RECEITAS | Previsão | Arrecadação |');
      expect(q48.textoCompartilhado?.content).toContain('| Receitas Correntes | 4.600.000,00 | 4.460.000,00 |');
      expect(q48.textoCompartilhado?.content).toContain('| DESPESAS | Fixação | Empenho |');
      expect(q48.textoCompartilhado?.content).toContain('| Despesas de Capital | 1.100.000,00 | 710.000,00 |');
    });
  });

  describe('Associação de Textos Compartilhados 1 e 2', () => {
    it('deve associar Texto 1 (O mito da maioridade penal) aos itens 1 a 7', () => {
      for (let i = 0; i < 7; i++) {
        const q = doc.questoes[i];
        expect(q.textoCompartilhado?.id).toBe('fgv-dpero-texto-1');
        expect(q.textoCompartilhado?.content).toContain('O mito da maioridade penal');
      }
    });

    it('deve associar Texto 2 (Estatuto da Criança e do Adolescente) aos itens 8 a 21', () => {
      for (let i = 7; i < 21; i++) {
        const q = doc.questoes[i];
        expect(q.textoCompartilhado?.id).toBe('fgv-dpero-texto-2');
        expect(q.textoCompartilhado?.content).toContain('Estatuto da Criança e do Adolescente');
      }
    });
  });
});
