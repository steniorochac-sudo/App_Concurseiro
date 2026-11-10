import { describe, it, expect } from 'vitest';
import questionsRaw from '../agente_fiscal_tributario_1.json';
import { Question } from '../../../types';
import { evaluateQuestionAnswer } from '../../../utils/answerEvaluation';

const questions = questionsRaw as Question[];

describe('Auditoria e Validação Integral - Agente Fiscal Tributário 1 (FEPESE 2023)', () => {
  it('deve possuir exatamente 40 questões estruturadas', () => {
    expect(questions).toBeDefined();
    expect(Array.isArray(questions)).toBe(true);
    expect(questions.length).toBe(40);
  });

  it('deve ter identificadores únicos no formato esperado (q-agente_fiscal_tributario_1-XX)', () => {
    const ids = new Set<string>();
    questions.forEach((q, index) => {
      const expectedNum = (index + 1).toString().padStart(2, '0');
      const expectedId = `q-agente_fiscal_tributario_1-${expectedNum}`;
      expect(q.id).toBe(expectedId);
      expect(ids.has(q.id)).toBe(false);
      ids.add(q.id);
    });
    expect(ids.size).toBe(40);
  });

  it('deve possuir metadados de cabeçalho válidos e uniformes', () => {
    questions.forEach((q) => {
      expect(q.banca).toBe('FEPESE');
      expect(q.ano).toBe(2023);
      expect(q.orgao).toBe('Prefeitura de Balneário Camboriú');
      expect(q.cargo).toBe('Agente Fiscal Tributário');
      expect(['fácil', 'médio', 'difícil']).toContain(q.dificuldade);
      expect(q.baseLegal).toBeDefined();
      expect(q.fontePesquisa).toBeDefined();
      expect(q.subtopicos).toBeDefined();
      expect(Array.isArray(q.subtopicos)).toBe(true);
      expect(q.subtopicos!.length).toBeGreaterThan(0);
    });
  });

  it('deve categorizar as disciplinas corretamente de acordo com o caderno de prova', () => {
    // Questões 1 a 10: Língua Portuguesa
    for (let i = 0; i < 10; i++) {
      expect(questions[i].disciplina).toBe('Língua Portuguesa');
    }
    // Questões 11 a 15: Conhecimentos Atuais
    for (let i = 10; i < 15; i++) {
      expect(questions[i].disciplina).toBe('Conhecimentos Atuais');
    }
    // Questões 16 a 40: Conhecimentos Específicos
    for (let i = 15; i < 40; i++) {
      expect(questions[i].disciplina).toBe('Conhecimentos Específicos');
    }
  });

  it('cada questão deve ter exatamente 5 alternativas (A, B, C, D, E) com texto não-vazio', () => {
    questions.forEach((q) => {
      expect(q.alternativas).toHaveLength(5);
      const ids = q.alternativas.map((a) => a.id);
      expect(ids).toEqual(['A', 'B', 'C', 'D', 'E']);

      q.alternativas.forEach((alt) => {
        expect(alt.text.trim().length).toBeGreaterThan(0);
        // Não deve conter resquícios de ícones da fonte FontAwesome
        expect(alt.text).not.toContain('SQUARE');
        expect(alt.text).not.toContain('Check-square');
      });
    });
  });

  it('deve corresponder estritamente ao gabarito oficial da FEPESE (6M02)', () => {
    const OFFICIAL_KEY = [
      'E', 'A', 'C', 'C', 'D', 'A', 'D', 'B', 'E', 'B', // 1-10
      'E', 'A', 'B', 'D', 'C', 'E', 'A', 'C', 'E', 'D', // 11-20
      'C', 'B', 'B', 'A', 'E', 'D', 'B', 'A', 'X', 'B', // 21-30
      'C', 'E', 'D', 'A', 'D', 'C', 'B', 'D', 'C', 'A'  // 31-40
    ];

    questions.forEach((q, idx) => {
      expect(q.gabarito.toUpperCase()).toBe(OFFICIAL_KEY[idx]);
    });
  });

  it('deve identificar a questão 29 como ANULADA com alerta do professor e justificativa', () => {
    const q29 = questions[28]; // Questão 29
    expect(q29.id).toBe('q-agente_fiscal_tributario_1-29');
    expect(q29.gabarito).toBe('X');
    expect(q29.alertaProfessor).toBeDefined();
    expect(q29.alertaProfessor).toContain('ANULADA');
    expect(q29.explicacao).toContain('ANULADA');
  });

  it('questões 1 e 2 devem conter o Texto 1 de apoio em bloco citável expansível', () => {
    [questions[0], questions[1]].forEach((q) => {
      expect(q.enunciado).toContain('> [Texto 1]');
      expect(q.enunciado).toContain('Os gatos');
      expect(q.enunciado).toContain('COMAC');
    });
  });

  it('questão 5 deve preservar a oração sublinhada nas alternativas com tags <u>', () => {
    const q5 = questions[4]; // Questão 5
    expect(q5.alternativas[0].text).toContain('<u>que eu não vou!</u>');
    expect(q5.alternativas[1].text).toContain('<u>que você saia da sala.</u>');
    expect(q5.alternativas[2].text).toContain('<u>quando amanhecia.</u>');
    expect(q5.alternativas[3].text).toContain('<u>que mente</u>');
    expect(q5.alternativas[4].text).toContain('<u>que essa novela tenha acabado.</u>');
  });

  it('questão 7 deve conter as lacunas preservadas de forma explícita', () => {
    const q7 = questions[6]; // Questão 7
    expect(q7.enunciado).toContain('________ dias');
    expect(q7.enunciado).toContain('cara ________ cara');
  });

  it('questão 16 opção D deve corrigir a quebra hifenizada para "presume-se"', () => {
    const q16 = questions[15]; // Questão 16
    const optD = q16.alternativas.find((a) => a.id === 'D');
    expect(optD?.text).toContain('presume-se feita');
    expect(optD?.text).not.toContain('presume- -se');
  });

  describe('Fase Documental — Matriz e Evidências Forenses (Marco 1)', () => {
    it('deve mapear a distribuição documental exata das 40 questões nas páginas 3 a 10 do PDF', () => {
      const pageRanges: Record<number, number[]> = {
        3: [1, 2, 3, 4, 5, 6],
        4: [7, 8, 9, 10, 11, 12],
        5: [13, 14, 15, 16],
        6: [17, 18, 19, 20, 21, 22],
        7: [23, 24, 25, 26, 27],
        8: [28, 29, 30, 31, 32],
        9: [33, 34, 35, 36, 37, 38],
        10: [39, 40],
      };

      let totalMapped = 0;
      for (const [pageStr, qNums] of Object.entries(pageRanges)) {
        const page = Number(pageStr);
        expect(page).toBeGreaterThanOrEqual(3);
        expect(page).toBeLessThanOrEqual(10);
        totalMapped += qNums.length;
      }
      expect(totalMapped).toBe(40);
    });

    it('deve avaliar a anulação oficial da Q29 com atribuição de crédito sem mascarar didática', () => {
      const q29 = questions[28];
      const evalOptionE = evaluateQuestionAnswer(q29, 'E');
      expect(evalOptionE.isAnnulled).toBe(true);
      expect(evalOptionE.isCorrect).toBe(true);
      expect(evalOptionE.scoreWeight).toBe(0);
      expect(evalOptionE.officialExamCredit).toBe(1);
      expect(evalOptionE.countsForDidacticMetrics).toBe(false);
      expect(evalOptionE.shouldAddToErrorNotebook).toBe(false);

      const evalOptionA = evaluateQuestionAnswer(q29, 'A');
      expect(evalOptionA.isAnnulled).toBe(true);
      expect(evalOptionA.isCorrect).toBe(true);
      expect(evalOptionA.officialExamCredit).toBe(1);
    });

    it('questão 28 deve conter os 5 melhoramentos urbanos numerados para IPTU', () => {
      const q28 = questions[27];
      expect(q28.enunciado).toContain('1.');
      expect(q28.enunciado).toContain('Meio fio ou calçamento');
      expect(q28.enunciado).toContain('2.');
      expect(q28.enunciado).toContain('3.');
      expect(q28.enunciado).toContain('Rede de iluminação pública');
      expect(q28.enunciado).toContain('4.');
      expect(q28.enunciado).toContain('5.');
      expect(q28.enunciado).toContain('Redutor de velocidade');
    });

    it('questão 9 deve preservar as colunas de correspondência de vícios de linguagem', () => {
      const q9 = questions[8];
      expect(q9.enunciado).toContain('Coluna 1');
      expect(q9.enunciado).toContain('Coluna 2');
      expect(q9.enunciado).toContain('Pleonasmo Vicioso');
      expect(q9.enunciado).toContain('Barbarismo');
      expect(q9.enunciado).toContain('Solecismo');
    });

    it('todas as 40 questões devem conter metadados forenses demonstrados sem pendências', () => {
      questions.forEach((q, idx) => {
        const conf = (q as any).conferenciaDocumental;
        expect(conf, `Questao ${idx + 1} deve conter conferenciaDocumental`).toBeDefined();
        expect(conf.sha256Prova).toBe('ee8cdbfbfe5ca797e294274e2da92364801d73c93f780d93d2e347b14a6b9cbc');
        expect(conf.sha256Gabarito).toBe('cb866ba5e1f1ba8f4ac3e0741d9a95bd3699fab3e58106dbfd335abe9f3ceecf');
        expect(conf.pagina).toBeGreaterThanOrEqual(3);
        expect(conf.pagina).toBeLessThanOrEqual(10);
        expect([0, 1]).toContain(conf.coluna);
        expect(Array.isArray(conf.coordenadasBbox)).toBe(true);
        expect(conf.coordenadasBbox).toHaveLength(4);
        expect(conf.gabaritoConferido).toBe(true);
        expect(conf.pendencias).toEqual([]);
        expect(conf.status).toBe('verificacao_documental_concluida');
      });
    });

    it('Q16 e Q29 devem documentar explicitamente suas especificidades documentais', () => {
      // Q16
      const q16 = questions[15] as any;
      expect(q16.conferenciaDocumental.trechoLiteralPdf).toContain('presume- -se');
      expect(q16.conferenciaDocumental.textoNormalizadoJson).toContain('presume-se');
      expect(q16.conferenciaDocumental.justificativaEditorial).toContain('223/1973');

      // Q29
      const q29 = questions[28] as any;
      expect(q29.isAnnulled).toBe(true);
      expect(q29.gabarito).toBe('X');
      expect(q29.conferenciaDocumental.decisaoOficialBanca).toContain('Gabarito Oficial Definitivo');
      expect(q29.conferenciaDocumental.comentarioDidatico).toContain('CTN');
    });

    it('Texto 1 deve preservar integralmente parágrafos, números (84%, 2021) e as 4 lacunas', () => {
      [questions[0], questions[1]].forEach((q) => {
        const shared = (q as any).textoCompartilhado;
        expect(shared).toBeDefined();
        expect(shared.title).toContain('Texto 1 — Os gatos');
        expect(shared.content).toContain('COMAC');
        expect(shared.content).toContain('84%');
        expect(shared.content).toContain('2021');
        expect(shared.content).toContain('45 e 65 mil hertz');
        expect(shared.content).toContain('10 e 40 mil hertz');
        expect(shared.content).toContain('progenitora a ronronar');
        const lacunas = shared.content.match(/_{4,}/g);
        expect(lacunas).toHaveLength(4);
      });
    });

    it('Texto 1 deve possuir paridade integral entre textoCompartilhado.content e o texto repetido no enunciado de Q01 e Q02', () => {
      [questions[0], questions[1]].forEach((q) => {
        const shared = (q as any).textoCompartilhado;
        const sharedParas = shared.content.split('\n\n').map((p: string) => p.trim()).filter(Boolean);
        expect(sharedParas).toHaveLength(4);

        // Extrai parágrafos citados do enunciado
        const bqLines = q.enunciado
          .split('\n')
          .filter((line: string) => line.startsWith('>'))
          .map((line: string) => line.replace(/^>\s?/, '').trim())
          .filter(Boolean)
          .filter((line: string) => !['[Texto 1]', 'Os gatos'].includes(line));

        expect(bqLines).toHaveLength(4);
        for (let i = 0; i < 4; i++) {
          expect(bqLines[i]).toBe(sharedParas[i]);
        }
      });
    });

    it('Q05 deve possuir cada alternativa com tags <u> correspondendo a orações subordinadas comprovadas', () => {
      const q5 = questions[4];
      const expectedTags: Record<string, string> = {
        A: '<u>que eu não vou!</u>',
        B: '<u>que você saia da sala.</u>',
        C: '<u>quando amanhecia.</u>',
        D: '<u>que mente</u>',
        E: '<u>que essa novela tenha acabado.</u>'
      };
      q5.alternativas.forEach((alt) => {
        expect(alt.text).toContain(expectedTags[alt.id]);
      });
    });
  });
});
