import { describe, it, expect } from 'vitest';
import { validateExamDocumentV2, ExamDocumentV2 } from '../../../types/examSchemaV2';
import analistaContabil3Data from '../analista_contabil3.json';

describe('Auditoria Automatizada e Regressão - analista_contabil3.json (QUADRIX / CRT-ES 2024)', () => {
  const doc = analistaContabil3Data as unknown as ExamDocumentV2;

  it('deve ser aprovado sem erros pelo validador ExamSchema v2.0', () => {
    const errors = validateExamDocumentV2(doc);
    expect(errors).toHaveLength(0);
  });

  it('deve refletir a governança de auditoria (gabarito preliminar, não homologado)', () => {
    expect(doc.exam.homologado).toBe(false);
    expect(doc.exam.id).toBe('quadrix-2024-crtes-analista-contabil');
    expect(doc.exam.banca).toBe('Instituto Quadrix');
    expect(doc.exam.cargo).toBe('Analista Contábil');
    expect(doc.exam.codigoCargo).toBe('401');
    expect(doc.exam.totalQuestoes).toBe(120);
    expect(doc.exam.totalAnuladas).toBe(0);
    expect(doc.exam.auditTrail.tipoGabarito).toBe('preliminar');
    // @ts-expect-error statusAuditoria is custom metadata extension
    expect(doc.exam.auditTrail.statusAuditoria).toBe('fidelidade_documental_aprovada_gabarito_preliminar');
  });

  it('deve conter exatamente 120 itens com numeração sequencial de 1 a 120', () => {
    expect(doc.questoes).toHaveLength(120);
    const numbers = doc.questoes.map((q) => q.numeroOriginal);
    const expected = Array.from({ length: 120 }, (_, i) => i + 1);
    expect(numbers).toEqual(expected);
  });

  it('deve conter alternativas de Certo/Errado estritas em todos os itens com status preliminar', () => {
    for (const q of doc.questoes) {
      expect(q.tipo).toBe('certo_errado');
      expect(q.alternativas).toEqual([
        { id: 'C', text: 'CERTO' },
        { id: 'E', text: 'ERRADO' },
      ]);
      expect(['C', 'E']).toContain(q.gabaritoOficial);
      expect(q.gabaritoStatus).toBe('preliminar');
      expect(q.enunciado).toBeTruthy();
      expect(q.enunciado.trim().length).toBeGreaterThan(10);
    }
  });

  it('deve conter a distribuição oficial exata de 59 C e 61 E', () => {
    const cCount = doc.questoes.filter((q) => q.gabaritoOficial === 'C').length;
    const eCount = doc.questoes.filter((q) => q.gabaritoOficial === 'E').length;
    expect(cCount).toBe(59);
    expect(eCount).toBe(61);
  });

  describe('Validação Estrutural e Textos Compartilhados', () => {
    const qMap = new Map(doc.questoes.map((q) => [q.numeroOriginal, q]));

    it('Itens 1 a 8: devem compartilhar Texto 1 (Mecânico de manutenção industrial)', () => {
      for (let n = 1; n <= 8; n++) {
        const q = qMap.get(n)!;
        expect(q.metadados.disciplina).toBe('Língua Portuguesa');
        expect(q.textoCompartilhado?.id).toBe('quadrix-crtes-texto-1');
        expect(q.textoCompartilhado?.content).toContain('Mecânico de manutenção industrial');
      }
    });

    it('Itens 9 a 16: devem compartilhar Texto 2 (Poema: 1.300 graus à sombra dos telheiros retos)', () => {
      for (let n = 9; n <= 16; n++) {
        const q = qMap.get(n)!;
        expect(q.metadados.disciplina).toBe('Língua Portuguesa');
        expect(q.textoCompartilhado?.id).toBe('quadrix-crtes-texto-2');
        expect(q.textoCompartilhado?.content).toContain('1.300 graus à sombra dos telheiros retos');
      }
    });

    it('Itens 17 a 19: RLM Gael encantador de serpentes', () => {
      for (let n = 17; n <= 19; n++) {
        const q = qMap.get(n)!;
        expect(q.metadados.disciplina).toBe('Raciocínio Lógico e Matemático');
        expect(q.textoCompartilhado?.id).toBe('quadrix-crtes-context-gael');
        expect(q.textoCompartilhado?.content).toContain('Jade e Safira');
      }
    });

    it('Itens 20 a 22: RLM Círculos em milharais', () => {
      for (let n = 20; n <= 22; n++) {
        const q = qMap.get(n)!;
        expect(q.textoCompartilhado?.id).toBe('quadrix-crtes-context-alien');
        expect(q.textoCompartilhado?.content).toContain('alienígenas fizeram círculos em milharais');
      }
    });

    it('Itens 23 a 25: RLM Miguel, Helena e Ravi signos', () => {
      for (let n = 23; n <= 25; n++) {
        const q = qMap.get(n)!;
        expect(q.textoCompartilhado?.id).toBe('quadrix-crtes-context-amigos');
        expect(q.textoCompartilhado?.content).toContain('Miguel, Helena e Ravi participaram de uma dinâmica');
      }
    });

    it('Itens 26 a 28: RLM Sebastião pipocas', () => {
      for (let n = 26; n <= 28; n++) {
        const q = qMap.get(n)!;
        expect(q.textoCompartilhado?.id).toBe('quadrix-crtes-context-pipoca');
        expect(q.textoCompartilhado?.content).toContain('Sebastião anotou a quantidade de pacotes de pipoca');
      }
      const q28 = qMap.get(28)!;
      expect(q28.enunciado).toBe('A mediana da quantidade diária de pacotes vendidos foi igual a 25.');
    });

    it('Itens 29 a 40: Informática', () => {
      for (let n = 29; n <= 40; n++) {
        const q = qMap.get(n)!;
        expect(q.metadados.disciplina).toBe('Noções de Informática');
      }
    });

    it('Itens 41 a 70: Conhecimentos Complementares', () => {
      expect(qMap.get(41)!.metadados.disciplina).toBe('Legislação e Ética na Administração Pública');
      expect(qMap.get(47)!.metadados.disciplina).toBe('Direito Administrativo');
      expect(qMap.get(54)!.metadados.disciplina).toBe('Direito Administrativo');
      expect(qMap.get(61)!.metadados.disciplina).toBe('Legislação e Ética na Administração Pública');
      expect(qMap.get(66)!.metadados.disciplina).toBe('Direito Administrativo');
    });

    it('Itens 101 a 120: Análise de Balanço e DRE Beta Comércio Ltda. com tabelas vinculadas', () => {
      for (let n = 101; n <= 120; n++) {
        const q = qMap.get(n)!;
        expect(q.textoCompartilhado?.content).toContain('A Beta Comércio Ltda.');
        expect(q.textoCompartilhado?.content).toContain('BALANÇO PATRIMONIAL');
        expect(q.textoCompartilhado?.content).toContain('DEMONSTRAÇÃO DO RESULTADO DO EXERCÍCIO');
        // @ts-expect-error tabelas field is custom asset linkage
        expect(q.tabelas).toEqual([
          '/questoes/analista_contabil3/tabela_balanco_patrimonial_p8.png',
          '/questoes/analista_contabil3/tabela_dre_p8.png'
        ]);
      }
    });
  });
});
