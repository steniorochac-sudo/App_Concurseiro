import { describe, it, expect } from 'vitest';
import questionsRaw from '../agente_fiscal_tributario_1.json';
import { Question } from '../../../types';

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
});
