import { describe, it, expect } from 'vitest';
import { validateExamDocumentV2, ExamDocumentV2 } from '../../../types/examSchemaV2';
import analistaContabilData from '../analista_contabil.json';

describe('Auditoria Automatizada e Regressão - analista_contabil.json (QUADRIX / CRC-SP 2025)', () => {
  const doc = analistaContabilData as unknown as ExamDocumentV2;

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
    }
  });

  it('deve conter a distribuição oficial exata de 60 C e 60 E', () => {
    const cCount = doc.questoes.filter((q) => q.gabaritoOficial === 'C').length;
    const eCount = doc.questoes.filter((q) => q.gabaritoOficial === 'E').length;
    expect(cCount).toBe(60);
    expect(eCount).toBe(60);
  });

  describe('Testes de Regressão - Falhas Documentais Apontadas na Auditoria Externa', () => {
    const qMap = new Map(doc.questoes.map((q) => [q.numeroOriginal, q]));

    it('Q02: deve conter o enunciado sobre imperativo "veja" e interatividade (NÃO estatística)', () => {
      const q2 = qMap.get(2)!;
      expect(q2.enunciado).toContain('No título, a forma “veja”, por estar no imperativo');
      expect(q2.enunciado).not.toContain('desvio padrão');
      expect(q2.enunciado).not.toContain('nova média');
    });

    it('Q03: deve conter o enunciado sobre pronome reflexivo "se" (NÃO direito imobiliário/50%)', () => {
      const q3 = qMap.get(3)!;
      expect(q3.enunciado).toContain('A palavra “se”, no trecho');
      expect(q3.enunciado).toContain('pronome reflexivo');
      expect(q3.enunciado).not.toContain('direito de família');
      expect(q3.enunciado).not.toContain('50%');
    });

    it('Q06: deve terminar em "temporal." sem fragmento indevido de texto de apoio', () => {
      const q6 = qMap.get(6)!;
      expect(q6.enunciado).toMatch(/subordinada adverbial temporal\.$/);
      expect(q6.enunciado).not.toContain('Internet: <www.g1.globo.com>');
    });

    it('Q23: deve conter estritamente a afirmação de família sem mistura com texto contextual de 3 anos', () => {
      const q23 = qMap.get(23)!;
      expect(q23.enunciado).toBe('Se um processo não é atendido pela dra. Barros, então ele envolverá direito de família.');
      expect(q23.enunciado).not.toContain('Um advogado especializado');
    });

    it('Q24: não deve estar truncado (deve conter a oração completa com 60 processos)', () => {
      const q24 = qMap.get(24)!;
      expect(q24.enunciado).toContain('últimos 3 anos');
      expect(q24.enunciado).toMatch(/processos de direito imobiliário foi igual a 60\.$/);
    });

    it('Q25: não deve estar truncado (deve conter a oração completa com probabilidade > 50%)', () => {
      const q25 = qMap.get(25)!;
      expect(q25.enunciado).toContain('Escolhendo aleatoriamente');
      expect(q25.enunciado).toMatch(/direito do consumidor será maior que 50%\.$/);
    });

    it('Q30: não deve estar truncado (deve conter a oração completa sobre desvio padrão inalterado)', () => {
      const q30 = qMap.get(30)!;
      expect(q30.enunciado).toContain('forem somados 2 meses');
      expect(q30.enunciado).toMatch(/desvio padrão não será alterado\.$/);
    });

    it('Q82: não deve estar truncado (deve conter a oração completa sobre a Lei 10.303/2001)', () => {
      const q82 = qMap.get(82)!;
      expect(q82.enunciado).toMatch(/A Lei nº\s*10\.303\/2001 alterou a Lei das Sociedades por Ações/);
      expect(q82.enunciado).toMatch(/alienação de controle\.$/);
    });
  });

  describe('Associação de Textos e Situações Hipotéticas Compartilhadas', () => {
    const qMap = new Map(doc.questoes.map((q) => [q.numeroOriginal, q]));

    it('deve associar o Texto 1 aos itens 1 a 20', () => {
      for (let i = 1; i <= 20; i++) {
        const q = qMap.get(i)!;
        expect(q.textoCompartilhado?.id).toBe('quadrix-crcsp-texto-1');
        expect(q.textoCompartilhado?.content).toContain('Polícia de SP investiga se contador');
        expect(q.textoCompartilhado?.content).toContain('Internet: <www.g1.globo.com>');
      }
    });

    it('deve associar a Situação Hipotética dos advogados aos itens 21 a 23', () => {
      for (let i = 21; i <= 23; i++) {
        const q = qMap.get(i)!;
        expect(q.textoCompartilhado?.id).toBe('quadrix-crcsp-context-2');
        expect(q.textoCompartilhado?.content).toContain('Dr. Andrade; Dra. Barros; e Dr. Costa');
      }
    });

    it('deve associar a Situação Hipotética de estatísticas dos 3 anos aos itens 24 a 26', () => {
      for (let i = 24; i <= 26; i++) {
        const q = qMap.get(i)!;
        expect(q.textoCompartilhado?.id).toBe('quadrix-crcsp-context-3');
        expect(q.textoCompartilhado?.content).toContain('40% dos processos são relacionados a direito de família');
      }
    });

    it('deve associar a Amostra de tempos de conclusão aos itens 27 a 30', () => {
      for (let i = 27; i <= 30; i++) {
        const q = qMap.get(i)!;
        expect(q.textoCompartilhado?.id).toBe('quadrix-crcsp-context-4');
        expect(q.textoCompartilhado?.content).toContain('8, 12, 9, 15, 10, 8, 11, 14, 10, 13');
      }
    });

    it('deve preservar a fidelidade literal estrita dos comandos e textos contextuais com o PDF oficial', () => {
      // Context 6 (Word/Excel/PowerPoint)
      expect(qMap.get(33)!.textoCompartilhado?.content).toContain(
        'ferramentas de produtividade fundamentais para um advogado. Com base nessa informação, julgue os itens seguintes.'
      );

      // Context 7 (Internet para advogados)
      expect(qMap.get(36)!.textoCompartilhado?.content).toContain(
        'A Internet é uma poderosa ferramenta de consultas para os advogados. Com base nessa informação, julgue os itens a seguir.'
      );

      // Context 8 (Gestão documental com a grafia literal da banca)
      expect(qMap.get(38)!.textoCompartilhado?.content).toContain(
        'Um escritório de advocacia uma gera muitos documentos e a organização deles é fundamental para poder localizá‑los com rapidez e segurança.'
      );

      // Context 9 (Segurança da informação)
      expect(qMap.get(40)!.textoCompartilhado?.content).toContain(
        'A segurança de informação é um esforço contínuo de todos os envolvidos. Com base nessa informação, julgue o item a seguir.'
      );

      // Context 16 (Código de Conduta - Resolução CFC 1.523/2017)
      expect(qMap.get(61)!.textoCompartilhado?.content).toContain(
        'versa a respeito do Código de Conduta dos Conselheiros, Colaboradores e Funcionários, julgue os itens seguintes.'
      );

      // Context 17 (Regimento Interno CRC-SP - Resolução CRC-SP 1.093/2011)
      expect(qMap.get(66)!.textoCompartilhado?.content).toContain(
        'Resolução CRC‑SP nº 1.093/2011 – Regimento Interno do CRC‑SP –, julgue os itens a seguir.'
      );

      // Context 18 (CF/88 Fiscalização contábil)
      expect(qMap.get(71)!.textoCompartilhado?.content).toContain(
        'que trata da fiscalização contábil, financeira e orçamentária, julgue os itens a seguir.'
      );

      // Context 19 (CF/88 Administração Pública)
      expect(qMap.get(73)!.textoCompartilhado?.content).toContain(
        'que trata da Administração Pública, julgue os itens seguintes.'
      );
    });
  });
});
