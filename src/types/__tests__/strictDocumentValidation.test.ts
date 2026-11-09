import { describe, it, expect } from 'vitest';
import {
  ExamDocumentV2,
  validateExamHomologation,
} from '../examSchemaV2';

describe('Strict Document Validation (P0.1)', () => {
  const createValidDoc = (): ExamDocumentV2 => ({
    schemaVersion: '2.0',
    exam: {
      id: 'fepese-2023-bc-analista-contabil',
      titulo: 'Prefeitura de Balneário Camboriú - Analista Contábil (FEPESE 2023)',
      orgao: 'Prefeitura de Balneário Camboriú',
      banca: 'FEPESE',
      cargo: 'Analista Contábil',
      ano: 2023,
      caderno: 'Caderno Geral',
      formatoQuestoes: 'multipla_escolha_5',
      totalQuestoes: 2,
      totalAnuladas: 0,
      homologado: true,
      statusHomologacao: 'homologado',
      auditTrail: {
        arquivoProvaPdf: 'analista_contabil2.pdf',
        arquivoGabaritoPdf: 'gabarito_analista_contabil2.pdf',
        secaoGabarito: 'Analista Contábil',
        paginaGabarito: 1,
        tipoGabarito: 'definitivo',
        responsavelAuditoria: 'Auditoria Externa',
      },
    },
    questoes: [
      {
        id: 'fepese-2023-bc-analista-contabil-q01',
        numeroOriginal: 1,
        tipo: 'multipla_escolha',
        enunciado: 'Questão de Língua Portuguesa válida.',
        alternativas: [
          { id: 'A', text: 'Opção A' },
          { id: 'B', text: 'Opção B' },
          { id: 'C', text: 'Opção C' },
          { id: 'D', text: 'Opção D' },
          { id: 'E', text: 'Opção E' },
        ],
        gabaritoOficial: 'A',
        gabaritoStatus: 'valido',
        metadados: {
          disciplina: 'Língua Portuguesa',
          paginaOrigem: 2,
        },
      },
      {
        id: 'fepese-2023-bc-analista-contabil-q02',
        numeroOriginal: 2,
        tipo: 'multipla_escolha',
        enunciado: 'Questão de Contabilidade Geral válida.',
        alternativas: [
          { id: 'A', text: 'Opção A' },
          { id: 'B', text: 'Opção B' },
          { id: 'C', text: 'Opção C' },
          { id: 'D', text: 'Opção D' },
          { id: 'E', text: 'Opção E' },
        ],
        gabaritoOficial: 'C',
        gabaritoStatus: 'valido',
        metadados: {
          disciplina: 'Contabilidade Geral',
          paginaOrigem: 2,
        },
      },
    ],
  });

  it('deve aprovar um documento 100% íntegro com zero pendências', () => {
    const doc = createValidDoc();
    const result = validateExamHomologation(doc);
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('deve rejeitar homologação se houver lacuna na numeração sequencial original (gaps)', () => {
    const doc = createValidDoc();
    // Pula da Q1 para a Q3 (faltando Q2)
    doc.questoes[1].numeroOriginal = 3;

    const result = validateExamHomologation(doc);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('Lacuna na numeração original'))).toBe(true);
  });

  it('deve rejeitar se o gabarito oficial não coincidir com nenhuma alternativa existente', () => {
    const doc = createValidDoc();
    // Define gabarito como "Z", que não existe nas alternativas A-E
    doc.questoes[0].gabaritoOficial = 'Z';

    const result = validateExamHomologation(doc);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('não corresponde a nenhuma alternativa'))).toBe(true);
  });

  it('deve validar consistência estrita de questões anuladas (X vs anulado)', () => {
    const doc = createValidDoc();
    // Questão 1 marcada como X mas status valido
    doc.questoes[0].gabaritoOficial = 'X';
    doc.questoes[0].gabaritoStatus = 'valido';

    const result = validateExamHomologation(doc);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('status "anulado"'))).toBe(true);
  });

  it('deve rejeitar se totalAnuladas no cabeçalho divergir das questões anuladas reais', () => {
    const doc = createValidDoc();
    doc.questoes[0].gabaritoOficial = 'X';
    doc.questoes[0].gabaritoStatus = 'anulado';
    // Cabeçalho continua dizendo totalAnuladas = 0
    doc.exam.totalAnuladas = 0;

    const result = validateExamHomologation(doc);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('Discrepância nas questões anuladas'))).toBe(true);
  });

  it('deve rejeitar se arquivos de imagens referenciados não existirem no disco', () => {
    const doc = createValidDoc();
    doc.questoes[0].imagens = ['/assets/exams/imagem_fantasma_inexistente.png'];

    const mockCheckFile = (path: string) => path.includes('imagem_real');
    const result = validateExamHomologation(doc, { checkImageFiles: mockCheckFile });

    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('Arquivo de imagem inexistente'))).toBe(true);
  });

  it('deve rejeitar se faltar auditTrail obrigatório para homologação', () => {
    const doc = createValidDoc();
    delete (doc.exam as any).auditTrail;

    const result = validateExamHomologation(doc);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('auditTrail'))).toBe(true);
  });

  it('deve distinguir rascunho de homologação oficial', () => {
    const doc = createValidDoc();
    doc.exam.homologado = false;
    doc.exam.statusHomologacao = 'rascunho';

    const result = validateExamHomologation(doc);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('Documento marcado como rascunho'))).toBe(true);
  });
});
