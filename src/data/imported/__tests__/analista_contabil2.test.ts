import { describe, it, expect } from 'vitest';
import { validateExamDocumentV2, ExamDocumentV2 } from '../../../types/examSchemaV2';
import analistaContabil2Data from '../analista_contabil2.json';

describe('Auditoria Automatizada e Regressão - analista_contabil2.json (QUADRIX / CREFITO-17 2024)', () => {
  const doc = analistaContabil2Data as unknown as ExamDocumentV2;

  it('deve ser aprovado sem erros pelo validador ExamSchema v2.0', () => {
    const errors = validateExamDocumentV2(doc);
    expect(errors).toHaveLength(0);
  });

  it('deve refletir a governança de auditoria (gabarito definitivo, homologado)', () => {
    expect(doc.exam.homologado).toBe(true);
    expect(doc.exam.id).toBe('quadrix-2024-crefito17-analista-contabil');
    expect(doc.exam.banca).toBe('Instituto Quadrix');
    expect(doc.exam.cargo).toBe('Analista Contábil');
    expect(doc.exam.codigoCargo).toBe('403');
    expect(doc.exam.totalQuestoes).toBe(120);
    expect(doc.exam.totalAnuladas).toBe(0);
    expect(doc.exam.auditTrail.tipoGabarito).toBe('definitivo');
    // @ts-expect-error statusAuditoria is custom metadata extension
    expect(doc.exam.auditTrail.statusAuditoria).toBe('fidelidade_documental_aprovada_gabarito_definitivo');
  });

  it('deve conter exatamente 120 itens com numeração sequencial de 1 a 120', () => {
    expect(doc.questoes).toHaveLength(120);
    const numbers = doc.questoes.map((q) => q.numeroOriginal);
    const expected = Array.from({ length: 120 }, (_, i) => i + 1);
    expect(numbers).toEqual(expected);
  });

  it('deve conter alternativas de Certo/Errado estritas em todos os itens com status válido ou alterado', () => {
    for (const q of doc.questoes) {
      expect(q.tipo).toBe('certo_errado');
      expect(q.alternativas).toEqual([
        { id: 'C', text: 'CERTO' },
        { id: 'E', text: 'ERRADO' },
      ]);
      expect(['C', 'E']).toContain(q.gabaritoOficial);
      if ([55, 60, 61].includes(q.numeroOriginal)) {
        expect(q.gabaritoStatus).toBe('alterado');
      } else {
        expect(q.gabaritoStatus).toBe('valido');
      }
      expect(q.enunciado).toBeTruthy();
      expect(q.enunciado.trim().length).toBeGreaterThan(10);
    }
  });

  it('deve conter a distribuição oficial exata de 51 C e 69 E (com itens 55, 60 e 61 alterados para E)', () => {
    const cCount = doc.questoes.filter((q) => q.gabaritoOficial === 'C').length;
    const eCount = doc.questoes.filter((q) => q.gabaritoOficial === 'E').length;
    expect(cCount).toBe(51);
    expect(eCount).toBe(69);

    const qMap = new Map(doc.questoes.map((q) => [q.numeroOriginal, q]));
    expect(qMap.get(55)!.gabaritoOficial).toBe('E');
    expect(qMap.get(60)!.gabaritoOficial).toBe('E');
    expect(qMap.get(61)!.gabaritoOficial).toBe('E');
  });

  describe('Validação Estrutural e Textos Compartilhados', () => {
    const qMap = new Map(doc.questoes.map((q) => [q.numeroOriginal, q]));

    it('Itens 1 a 8: devem compartilhar Texto 1 (TRF1 reconhece legitimidade da perícia fisioterapêutica)', () => {
      for (let n = 1; n <= 8; n++) {
        const q = qMap.get(n)!;
        expect(q.metadados.disciplina).toBe('Língua Portuguesa');
        expect(q.textoCompartilhado?.id).toBe('quadrix-crefito17-texto-1');
        expect(q.textoCompartilhado?.content).toContain('TRF1 reconhece legitimidade da perícia fisioterapêutica');
      }
    });

    it('Itens 9 a 16: devem compartilhar Texto 2 (Dia do Ouvidor)', () => {
      for (let n = 9; n <= 16; n++) {
        const q = qMap.get(n)!;
        expect(q.metadados.disciplina).toBe('Língua Portuguesa');
        expect(q.textoCompartilhado?.id).toBe('quadrix-crefito17-texto-2');
        expect(q.textoCompartilhado?.content).toContain('Dia do Ouvidor:');
      }
    });

    it('Itens 17 a 19: RLM Paula Vade Mecum', () => {
      for (let n = 17; n <= 19; n++) {
        const q = qMap.get(n)!;
        expect(q.metadados.disciplina).toBe('Raciocínio Lógico e Matemático');
        expect(q.textoCompartilhado?.id).toBe('quadrix-crefito17-context-paula');
      }
    });

    it('Itens 20 a 22: RLM Oswaldo Audiências com tabela markdown', () => {
      for (let n = 20; n <= 22; n++) {
        const q = qMap.get(n)!;
        expect(q.textoCompartilhado?.content).toContain('| SEMANA | NÚMERO DE AUDIÊNCIAS |');
      }
    });

    it('Itens 23 a 25: RLM Irmãs Amanda, Bárbara e Carolina', () => {
      for (let n = 23; n <= 25; n++) {
        const q = qMap.get(n)!;
        expect(q.textoCompartilhado?.content).toContain('Amanda, Bárbara e Carolina são três irmãs');
      }
    });

    it('Itens 26 a 28: RLM Gael Dados Honestos', () => {
      for (let n = 26; n <= 28; n++) {
        const q = qMap.get(n)!;
        expect(q.textoCompartilhado?.content).toContain('Gael possui 3 dados honestos');
      }
      // Garantir que item 28 não contenha lixo de cabeçalho
      const q28 = qMap.get(28)!;
      expect(q28.enunciado).toBe('A probabilidade de a soma dos números obtidos nos 3 dados ser igual a 3 é superior a 5%.');
    });

    it('Itens 29 a 40: Informática', () => {
      for (let n = 29; n <= 40; n++) {
        const q = qMap.get(n)!;
        expect(q.metadados.disciplina).toBe('Noções de Informática');
      }
    });

    it('Itens 96 a 106: Análise de Balanço Alfa & Ômega S.A. com tabelas vinculadas', () => {
      for (let n = 96; n <= 106; n++) {
        const q = qMap.get(n)!;
        expect(q.textoCompartilhado?.content).toContain('BALANÇO PATRIMONIAL — ALFA & ÔMEGA S.A.');
        expect(q.textoCompartilhado?.content).toContain('DEMONSTRAÇÃO DO RESULTADO DO EXERCÍCIO — ALFA & ÔMEGA S.A.');
        // @ts-expect-error tabelas field is custom asset linkage
        expect(q.tabelas).toEqual([
          '/questoes/analista_contabil2/tabela_balanco_patrimonial_p8.png',
          '/questoes/analista_contabil2/tabela_dre_p8.png'
        ]);
      }
    });

    it('Item 114: deve estar limpo sem marcação de rascunho', () => {
      const q114 = qMap.get(114)!;
      expect(q114.enunciado).not.toContain('RASCUNHO');
      expect(q114.enunciado).toContain('A conciliação contábil eficaz exige não apenas a identificação das diferenças');
    });

    it('Itens 116 a 120: Contabilidade Trabalhista DELTA S.A.', () => {
      for (let n = 116; n <= 120; n++) {
        const q = qMap.get(n)!;
        expect(q.textoCompartilhado?.content).toContain('DELTA S.A.');
        expect(q.textoCompartilhado?.content).toContain('R$ 350.000');
      }
    });
  });
});
