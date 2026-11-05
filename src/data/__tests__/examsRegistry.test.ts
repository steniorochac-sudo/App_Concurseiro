import { describe, it, expect } from 'vitest';
import {
  PRELOADED_EXAMS,
  ALL_IMPORTED_QUESTIONS,
  AUDITED_EXAMS,
} from '../examsRegistry';

describe('examsRegistry - Acervo Unificado e Modular', () => {
  it('deve conter exatamente as 7 provas do acervo pré-carregado', () => {
    expect(PRELOADED_EXAMS.length).toBe(7);
    expect(AUDITED_EXAMS.length).toBe(6);
  });

  it('deve totalizar exatamente 590 questões no acervo unificado', () => {
    expect(ALL_IMPORTED_QUESTIONS.length).toBe(590);
    const sumOfExams = PRELOADED_EXAMS.reduce((acc, exam) => acc + exam.questions.length, 0);
    expect(sumOfExams).toBe(590);
  });

  it('deve conter as provas com os metadados e formatos normativos corretos', () => {
    const examMap = new Map(PRELOADED_EXAMS.map((e) => [e.id, e]));

    // 1. Quadrix CRC-SP 2025
    const qx1 = examMap.get('quadrix-2025-crcsp-analista-contabil');
    expect(qx1).toBeDefined();
    expect(qx1?.banca).toBe('Instituto Quadrix');
    expect(qx1?.ano).toBe(2025);
    expect(qx1?.totalQuestions).toBe(120);
    expect(qx1?.formatoQuestoes).toBe('certo_errado');
    expect(qx1?.questions.every((q) => q.tipo === 'certo_errado')).toBe(true);
    expect(qx1?.questions[0].alternativas.map((a) => a.id)).toEqual(['C', 'E']);

    // 2. FGV DPE-RO 2015 Tipo 1
    const fgv = examMap.get('fgv-2015-dpero-analista-contabil');
    expect(fgv).toBeDefined();
    expect(fgv?.banca).toBe('FGV');
    expect(fgv?.ano).toBe(2015);
    expect(fgv?.totalQuestions).toBe(70);
    expect(fgv?.formatoQuestoes).toBe('multipla_escolha_5');
    expect(fgv?.questions.every((q) => q.tipo === 'multipla_escolha')).toBe(true);
    expect(fgv?.questions[0].alternativas.length).toBe(5);

    // 3. Quadrix CREFITO-17 2024
    const qx2 = examMap.get('quadrix-2024-crefito17-analista-contabil');
    expect(qx2).toBeDefined();
    expect(qx2?.banca).toBe('Instituto Quadrix');
    expect(qx2?.ano).toBe(2024);
    expect(qx2?.totalQuestions).toBe(120);
    expect(qx2?.formatoQuestoes).toBe('certo_errado');

    // 4. Quadrix CRT-ES 2024
    const qx3 = examMap.get('quadrix-2024-crtes-analista-contabil');
    expect(qx3).toBeDefined();
    expect(qx3?.banca).toBe('Instituto Quadrix');
    expect(qx3?.ano).toBe(2024);
    expect(qx3?.totalQuestions).toBe(120);
    expect(qx3?.formatoQuestoes).toBe('certo_errado');

    // 5. VUNESP PMRP 2014
    const vunesp = examMap.get('vunesp-2014-pmrp-auditor-fiscal-tributario');
    expect(vunesp).toBeDefined();
    expect(vunesp?.banca).toBe('Fundação VUNESP');
    expect(vunesp?.ano).toBe(2014);
    expect(vunesp?.totalQuestions).toBe(80);
    expect(vunesp?.formatoQuestoes).toBe('multipla_escolha_5');
    expect(vunesp?.questions.every((q) => q.tipo === 'multipla_escolha')).toBe(true);
    expect(vunesp?.questions[0].alternativas.length).toBe(5);

    // 6. Instituto Mais 2022
    const mais = examMap.get('instituto-mais-2022-santana-parnaiba-fiscal-tributario');
    expect(mais).toBeDefined();
    expect(mais?.banca).toBe('Instituto Mais');
    expect(mais?.ano).toBe(2022);
    expect(mais?.totalQuestions).toBe(40);
    expect(mais?.formatoQuestoes).toBe('multipla_escolha_4');
    expect(mais?.questions.every((q) => q.tipo === 'multipla_escolha')).toBe(true);
    expect(mais?.questions[0].alternativas.length).toBe(4);
    expect(mais?.questions[0].alternativas.map((a) => a.id)).toEqual(['A', 'B', 'C', 'D']);

    // 7. FEPESE 2023
    const fepese = examMap.get('fepese-2023-bc-agente-fiscal-tributario');
    expect(fepese).toBeDefined();
    expect(fepese?.banca).toBe('FEPESE');
    expect(fepese?.ano).toBe(2023);
    expect(fepese?.totalQuestions).toBe(40);
  });

  it('deve propagar campos estruturados (textoCompartilhado, imagens, examId, numeroOriginal) via examDocV2ToQuestions', () => {
    const vunesp = PRELOADED_EXAMS.find((e) => e.id === 'vunesp-2014-pmrp-auditor-fiscal-tributario')!;
    const q01 = vunesp.questions.find((q) => q.numeroOriginal === 1)!;
    expect(q01.textoCompartilhado).toBeDefined();
    expect(q01.textoCompartilhado?.title).toContain('Texto 1');
    expect(q01.examId).toBe('vunesp-2014-pmrp-auditor-fiscal-tributario');
    expect(q01.examTitulo).toContain('Auditor Fiscal Tributário');

    // Questão com imagens
    const q12 = vunesp.questions.find((q) => q.numeroOriginal === 12)!;
    expect(q12.imagens && q12.imagens.length > 0).toBe(true);
    expect(q12.imagens![0]).toContain('q12_diagrama.png');
  });
});
