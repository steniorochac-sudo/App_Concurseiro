import { describe, it, expect } from 'vitest';
import { getMasterAiPrompt, MasterPromptOptions } from '../aiPromptTemplate';

describe('aiPromptTemplate', () => {
  it('deve gerar o prompt mestre padrão com instruções de fidelidade e schema JSON', () => {
    const prompt = getMasterAiPrompt();
    expect(prompt).toContain('FIDELIDADE ABSOLUTA');
    expect(prompt).toContain('GABARITO OFICIAL');
    expect(prompt).toContain('```json');
    expect(prompt).toContain('"numeroOriginal"');
    expect(prompt).toContain('"gabaritoOficial"');
  });

  it('deve permitir customizar o intervalo de questões (ex: Q1 a Q35) para contornar limites de tokens', () => {
    const options: MasterPromptOptions = {
      intervaloQuestoes: 'questões de 1 a 35',
      cargo: 'Auditor Fiscal',
      banca: 'FGV',
    };
    const prompt = getMasterAiPrompt(options);
    expect(prompt).toContain('questões de 1 a 35');
    expect(prompt).toContain('Auditor Fiscal');
    expect(prompt).toContain('FGV');
  });

  it('deve incluir instrução específica para certo e errado quando solicitado', () => {
    const options: MasterPromptOptions = {
      formato: 'certo_errado',
    };
    const prompt = getMasterAiPrompt(options);
    expect(prompt).toContain('certo/errado');
    expect(prompt).toContain('"gabaritoOficial": "C"');
  });
});
