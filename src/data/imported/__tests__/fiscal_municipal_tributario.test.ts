import { describe, it, expect } from 'vitest';
import { validateExamDocumentV2, ExamDocumentV2 } from '../../../types/examSchemaV2';
import fiscalMaisData from '../fiscal_municipal_tributario.json';

describe('Auditoria Automatizada e Regressão - fiscal_municipal_tributario.json (Instituto Mais / Santana de Parnaíba 2022)', () => {
  const doc = fiscalMaisData as unknown as ExamDocumentV2;

  it('deve ser aprovado com 0 erros pelo validador ExamSchema v2.0', () => {
    const errors = validateExamDocumentV2(doc);
    expect(errors).toHaveLength(0);
  });

  it('deve refletir a governança de auditoria (Instituto Mais, 40 questões A-D, homologado)', () => {
    expect(doc.exam.homologado).toBe(true);
    expect(doc.exam.id).toBe('instituto-mais-2022-santana-parnaiba-fiscal-tributario');
    expect(doc.exam.banca).toBe('Instituto Mais');
    expect(doc.exam.cargo).toBe('Fiscal Municipal Tributário');
    expect(doc.exam.codigoCargo).toBe('231');
    expect(doc.exam.ano).toBe(2022);
    expect(doc.exam.formatoQuestoes).toBe('multipla_escolha_4');
    expect(doc.exam.totalQuestoes).toBe(40);
    expect(doc.exam.totalAnuladas).toBe(0);
    expect(doc.exam.auditTrail.tipoGabarito).toBe('definitivo');
    expect(doc.exam.auditTrail.arquivoProvaPdf).toBe('fiscal_municipal_tributario.pdf');
    expect(doc.exam.auditTrail.arquivoGabaritoPdf).toBe('gabaritos_finais_fiscal_municipal_tributario.pdf');
  });

  it('deve conter exatamente 40 questões numeradas sequencialmente de 1 a 40', () => {
    expect(doc.questoes).toHaveLength(40);
    const numbers = doc.questoes.map((q) => q.numeroOriginal);
    const expected = Array.from({ length: 40 }, (_, i) => i + 1);
    expect(numbers).toEqual(expected);
  });

  it('deve conter exatamente 4 alternativas estritas (A, B, C, D) em cada uma das 40 questões', () => {
    for (const q of doc.questoes) {
      expect(q.tipo).toBe('multipla_escolha');
      expect(q.alternativas).toHaveLength(4);
      const optIds = q.alternativas.map((a) => a.id);
      expect(optIds).toEqual(['A', 'B', 'C', 'D']);
      expect(['A', 'B', 'C', 'D']).toContain(q.gabaritoOficial);
      expect(q.gabaritoStatus).toBe('valido');
      expect(q.enunciado).toBeTruthy();
      expect(q.enunciado.trim().length).toBeGreaterThan(15);
      expect(q.metadados.paginaOrigem).toBeGreaterThanOrEqual(2);
      expect(q.metadados.paginaOrigem).toBeLessThanOrEqual(7);
    }
  });

  it('deve reproduzir com 100% de exatidão a distribuição do gabarito oficial', () => {
    const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
    for (const q of doc.questoes) {
      counts[q.gabaritoOficial]++;
    }
    expect(counts['A']).toBe(10);
    expect(counts['B']).toBe(8);
    expect(counts['C']).toBe(12);
    expect(counts['D']).toBe(10);
    expect(counts['A'] + counts['B'] + counts['C'] + counts['D']).toBe(40);
  });

  it('deve mapear corretamente as disciplinas por intervalo de questões', () => {
    const qMap = new Map(doc.questoes.map((q) => [q.numeroOriginal, q]));

    // Língua Portuguesa (1 a 10)
    for (let i = 1; i <= 10; i++) {
      expect(qMap.get(i)!.metadados.disciplina).toBe('Língua Portuguesa');
    }

    // Raciocínio Lógico (11 a 17)
    for (let i = 11; i <= 17; i++) {
      expect(qMap.get(i)!.metadados.disciplina).toBe('Raciocínio Lógico');
    }

    // Conhecimentos Básicos de Legislação Municipal (18 a 25)
    for (let i = 18; i <= 25; i++) {
      expect(qMap.get(i)!.metadados.disciplina).toBe('Conhecimentos Básicos de Legislação Municipal');
    }

    // Conhecimentos Específicos (26 a 40)
    for (let i = 26; i <= 40; i++) {
      expect(qMap.get(i)!.metadados.disciplina).toBe('Conhecimentos Específicos');
    }
  });

  it('deve vincular o texto compartilhado (Bia Braune) para as questões 1 a 5', () => {
    const qMap = new Map(doc.questoes.map((q) => [q.numeroOriginal, q]));

    for (let i = 1; i <= 5; i++) {
      const q = qMap.get(i)!;
      expect(q.textoCompartilhado).toBeDefined();
      expect(q.textoCompartilhado!.title).toContain('Bia Braune');
      expect(q.textoCompartilhado!.content).toContain('Semana passada, um conhecido morreu de forma trágica');
    }

    // Questão 6 não deve ter texto compartilhado
    expect(qMap.get(6)!.textoCompartilhado).toBeUndefined();
  });

  it('deve preservar os preâmbulos e trechos contextuais nas questões 2, 4, 5 e 7', () => {
    const qMap = new Map(doc.questoes.map((q) => [q.numeroOriginal, q]));

    // Q2
    const q2 = qMap.get(2)!;
    expect(q2.enunciado).toContain('Analise o trecho abaixo para responder à questão 2.');
    expect(q2.enunciado).toContain('Afinal, podemos ir para o céu, para o inferno');

    // Q4
    const q4 = qMap.get(4)!;
    expect(q4.enunciado).toContain('Analise a frase abaixo para responder à questão 4.');
    expect(q4.enunciado).toContain('Deixo lá meus likes como se depositasse ‘pedrinhas’');

    // Q5
    const q5 = qMap.get(5)!;
    expect(q5.enunciado).toContain('Analise a frase abaixo para responder à questão 5.');
    expect(q5.enunciado).toContain('Contudo, nada nos prepara para ‘certas’ ausências');

    // Q7
    const q7 = qMap.get(7)!;
    expect(q7.enunciado).toContain('Analise a frase abaixo para responder à questão 7.');
    expect(q7.enunciado).toContain('Sob potente tsunami emocional revivi lutos acumulados');
  });
});
