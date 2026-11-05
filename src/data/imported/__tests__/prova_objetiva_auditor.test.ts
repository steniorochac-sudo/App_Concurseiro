import { describe, it, expect } from 'vitest';
import { validateExamDocumentV2, ExamDocumentV2 } from '../../../types/examSchemaV2';
import provaAuditorData from '../prova_objetiva_auditor.json';

describe('Auditoria Automatizada e Regressão - prova_objetiva_auditor.json (VUNESP / PMRP 2014)', () => {
  const doc = provaAuditorData as unknown as ExamDocumentV2;

  it('deve ser aprovado com 0 erros pelo validador ExamSchema v2.0', () => {
    const errors = validateExamDocumentV2(doc);
    expect(errors).toHaveLength(0);
  });

  it('deve refletir a governança de auditoria (VUNESP, 80 questões A-E, homologado)', () => {
    expect(doc.exam.homologado).toBe(true);
    expect(doc.exam.id).toBe('vunesp-2014-pmrp-auditor-fiscal-tributario');
    expect(doc.exam.banca).toBe('Fundação VUNESP');
    expect(doc.exam.cargo).toBe('Auditor Fiscal Tributário Municipal');
    expect(doc.exam.codigoCargo).toBe('001');
    expect(doc.exam.ano).toBe(2014);
    expect(doc.exam.formatoQuestoes).toBe('multipla_escolha_5');
    expect(doc.exam.totalQuestoes).toBe(80);
    expect(doc.exam.totalAnuladas).toBe(0);
    expect(doc.exam.auditTrail.tipoGabarito).toBe('definitivo');
    expect(doc.exam.auditTrail.arquivoProvaPdf).toBe('prova_objetiva_auditor.pdf');
    expect(doc.exam.auditTrail.arquivoGabaritoPdf).toBe('gabarito_prova_objetiva_auditor.pdf');
  });

  it('deve conter exatamente 80 questões numeradas sequencialmente de 1 a 80', () => {
    expect(doc.questoes).toHaveLength(80);
    const numbers = doc.questoes.map((q) => q.numeroOriginal);
    const expected = Array.from({ length: 80 }, (_, i) => i + 1);
    expect(numbers).toEqual(expected);
  });

  it('deve conter 5 alternativas estritas (A, B, C, D, E) em cada uma das 80 questões', () => {
    for (const q of doc.questoes) {
      expect(q.tipo).toBe('multipla_escolha');
      expect(q.alternativas).toHaveLength(5);
      const optIds = q.alternativas.map((a) => a.id);
      expect(optIds).toEqual(['A', 'B', 'C', 'D', 'E']);
      expect(['A', 'B', 'C', 'D', 'E']).toContain(q.gabaritoOficial);
      expect(q.gabaritoStatus).toBe('valido');
      expect(q.enunciado).toBeTruthy();
      expect(q.enunciado.trim().length).toBeGreaterThan(15);
      expect(q.metadados.paginaOrigem).toBeGreaterThanOrEqual(3);
      expect(q.metadados.paginaOrigem).toBeLessThanOrEqual(19);
    }
  });

  it('deve reproduzir com 100% de exatidão a distribuição do gabarito oficial', () => {
    const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    for (const q of doc.questoes) {
      counts[q.gabaritoOficial]++;
    }
    expect(counts['A']).toBe(15);
    expect(counts['B']).toBe(13);
    expect(counts['C']).toBe(14);
    expect(counts['D']).toBe(22);
    expect(counts['E']).toBe(16);
    expect(counts['A'] + counts['B'] + counts['C'] + counts['D'] + counts['E']).toBe(80);
  });

  it('deve mapear corretamente as disciplinas por intervalo de questões', () => {
    const qMap = new Map(doc.questoes.map((q) => [q.numeroOriginal, q]));

    // Língua Portuguesa (1 a 10)
    for (let i = 1; i <= 10; i++) {
      expect(qMap.get(i)!.metadados.disciplina).toBe('Língua Portuguesa');
    }

    // Raciocínio Lógico (11 a 20)
    for (let i = 11; i <= 20; i++) {
      expect(qMap.get(i)!.metadados.disciplina).toBe('Raciocínio Lógico');
    }

    // Matemática Financeira (21 a 25)
    for (let i = 21; i <= 25; i++) {
      expect(qMap.get(i)!.metadados.disciplina).toBe('Matemática Financeira');
    }

    // Auditoria (71 a 80)
    for (let i = 71; i <= 80; i++) {
      expect(qMap.get(i)!.metadados.disciplina).toBe('Auditoria');
    }
  });

  it('deve vincular os textos compartilhados para questões 1-5 e 6-10', () => {
    const qMap = new Map(doc.questoes.map((q) => [q.numeroOriginal, q]));

    for (let i = 1; i <= 5; i++) {
      const q = qMap.get(i)!;
      expect(q.textoCompartilhado).toBeDefined();
      expect(q.textoCompartilhado!.title).toContain('Arthur Schopenhauer');
      expect(q.textoCompartilhado!.content).toContain('Deve-se fazer de tudo para ser feliz?');
    }

    for (let i = 6; i <= 10; i++) {
      const q = qMap.get(i)!;
      expect(q.textoCompartilhado).toBeDefined();
      expect(q.textoCompartilhado!.title).toContain('Carlos Drummond de Andrade');
      expect(q.textoCompartilhado!.content).toContain('Você já pintou sua casa?');
    }

    // Questão 11 não deve ter texto compartilhado
    expect(qMap.get(11)!.textoCompartilhado).toBeUndefined();
  });

  it('deve conter referências a diagramas e tabelas nas questões 12, 17, 24, 25 e 65', () => {
    const qMap = new Map(doc.questoes.map((q) => [q.numeroOriginal, q]));

    // Q12 Venn diagram
    const q12 = qMap.get(12)!;
    expect(q12.enunciado).toContain('q12_diagrama.png');
    expect(q12.imagens).toContain('/questoes/prova_objetiva_auditor/q12_diagrama.png');

    // Q17 Sequência de figuras
    const q17 = qMap.get(17)!;
    expect(q17.enunciado).toContain('q17_enunciado.png');
    expect(q17.alternativas[0].text).toContain('q17_alternativa_a.png');
    expect(q17.alternativas[4].text).toContain('q17_alternativa_e.png');

    // Q24 SAC table
    const q24 = qMap.get(24)!;
    expect(q24.enunciado).toContain('| Parcela | Valor da parcela | Amortização | Juros | Saldo devedor |');
    expect(q24.enunciado).toContain('q24_tabela.png');

    // Q25 TIR table
    const q25 = qMap.get(25)!;
    expect(q25.enunciado).toContain('| Mês | Fluxo de caixa |');
    expect(q25.enunciado).toContain('q25_tabela.png');

    // Q65 Accounting entries table
    const q65 = qMap.get(65)!;
    expect(q65.enunciado).toContain('| Item | Valor (R$) |');
    expect(q65.enunciado).toContain('Lucro Líquido do Exercício');
  });
});
