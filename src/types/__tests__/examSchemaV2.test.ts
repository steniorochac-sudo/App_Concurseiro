import { describe, it, expect } from 'vitest';
import {
  ExamDocumentV2,
  validateExamDocumentV2,
  ExamQuestionV2,
} from '../examSchemaV2';

describe('ExamSchema v2.0 - Validação de Contrato de Dados', () => {
  it('deve validar com sucesso uma prova de Múltipla Escolha com 5 alternativas (A-E)', () => {
    const doc: ExamDocumentV2 = {
      schemaVersion: '2.0',
      exam: {
        id: 'balneario_camboriu_2022_aft',
        titulo: 'Concurso Público Edital 006/2022 - Agente Fiscal Tributário',
        orgao: 'Prefeitura Municipal de Balneário Camboriú',
        banca: 'FEPESE',
        cargo: 'Agente Fiscal Tributário',
        codigoCargo: '6M02',
        ano: 2023,
        edital: '006/2022',
        caderno: '6M02',
        turno: 'tarde',
        formatoQuestoes: 'multipla_escolha_5',
        totalQuestoes: 2,
        totalAnuladas: 0,
        homologado: true,
        auditTrail: {
          arquivoProvaPdf: 'agente_fiscal_tributario 1.pdf',
          arquivoGabaritoPdf: 'gabarito_agente_fiscal_tributario 1.pdf',
          secaoGabarito: '6M02 Agente Fiscal Tributário',
          paginaGabarito: 2,
          tipoGabarito: 'definitivo',
          responsavelAuditoria: 'Antigravity AI Agent',
        },
      },
      questoes: [
        {
          id: 'bc-aft-q01',
          numeroOriginal: 1,
          tipo: 'multipla_escolha',
          enunciado: 'Enunciado integral da questão 1...',
          alternativas: [
            { id: 'A', text: 'Opção A' },
            { id: 'B', text: 'Opção B' },
            { id: 'C', text: 'Opção C' },
            { id: 'D', text: 'Opção D' },
            { id: 'E', text: 'Opção E' },
          ],
          gabaritoOficial: 'E',
          gabaritoStatus: 'valido',
          metadados: {
            disciplina: 'Língua Portuguesa',
            paginaOrigem: 1,
          },
        },
        {
          id: 'bc-aft-q02',
          numeroOriginal: 2,
          tipo: 'multipla_escolha',
          enunciado: 'Enunciado integral da questão 2...',
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
            paginaOrigem: 1,
          },
        },
      ],
    };

    const errors = validateExamDocumentV2(doc);
    expect(errors).toHaveLength(0);
  });

  it('deve validar com sucesso uma prova no formato Certo/Errado (Quadrix/Cespe)', () => {
    const doc: ExamDocumentV2 = {
      schemaVersion: '2.0',
      exam: {
        id: 'crcsp_2024_analista_contabil',
        titulo: 'Concurso Público 2024 - Analista Contábil',
        orgao: 'Conselho Regional de Contabilidade de SP',
        banca: 'QUADRIX',
        cargo: 'Analista Contábil',
        codigoCargo: '402',
        ano: 2024,
        caderno: 'Caderno Único',
        formatoQuestoes: 'certo_errado',
        totalQuestoes: 2,
        totalAnuladas: 0,
        homologado: false,
        auditTrail: {
          arquivoProvaPdf: 'analista_contabil.pdf',
          arquivoGabaritoPdf: 'gabarito_analista_contabil.pdf',
          secaoGabarito: '2.4 ANALISTA CONTÁBIL (CÓDIGO 402)',
          paginaGabarito: 1,
          tipoGabarito: 'preliminar',
          responsavelAuditoria: 'Antigravity AI Agent',
        },
      },
      questoes: [
        {
          id: 'quadrix-crcsp-q01',
          numeroOriginal: 1,
          tipo: 'certo_errado',
          enunciado: 'Acerca da contabilidade pública, julgue o item...',
          alternativas: [
            { id: 'C', text: 'CERTO' },
            { id: 'E', text: 'ERRADO' },
          ],
          gabaritoOficial: 'E',
          gabaritoStatus: 'valido',
          metadados: {
            disciplina: 'Contabilidade Geral',
            paginaOrigem: 1,
          },
        },
        {
          id: 'quadrix-crcsp-q02',
          numeroOriginal: 2,
          tipo: 'certo_errado',
          enunciado: 'Com relação aos princípios orçamentários, julgue o item...',
          alternativas: [
            { id: 'C', text: 'CERTO' },
            { id: 'E', text: 'ERRADO' },
          ],
          gabaritoOficial: 'C',
          gabaritoStatus: 'valido',
          metadados: {
            disciplina: 'Contabilidade Geral',
            paginaOrigem: 1,
          },
        },
      ],
    };

    const errors = validateExamDocumentV2(doc);
    expect(errors).toHaveLength(0);
  });

  it('deve registrar corretamente questão anulada com gabarito X e status anulado', () => {
    const doc: ExamDocumentV2 = {
      schemaVersion: '2.0',
      exam: {
        id: 'teste_anulada',
        titulo: 'Exame de Teste',
        orgao: 'Órgão X',
        banca: 'Banca Y',
        cargo: 'Cargo Z',
        ano: 2024,
        caderno: 'Tipo 1',
        formatoQuestoes: 'multipla_escolha_4',
        totalQuestoes: 1,
        totalAnuladas: 1,
        homologado: true,
        auditTrail: {
          arquivoProvaPdf: 'prova.pdf',
          arquivoGabaritoPdf: 'gabarito.pdf',
          secaoGabarito: 'Cargo Z',
          paginaGabarito: 1,
          tipoGabarito: 'definitivo',
          responsavelAuditoria: 'Auditor',
        },
      },
      questoes: [
        {
          id: 'teste-q01',
          numeroOriginal: 1,
          tipo: 'multipla_escolha',
          enunciado: 'Questão que teve recurso deferido e foi anulada.',
          alternativas: [
            { id: 'A', text: 'Opção A' },
            { id: 'B', text: 'Opção B' },
            { id: 'C', text: 'Opção C' },
            { id: 'D', text: 'Opção D' },
          ],
          gabaritoOficial: 'X',
          gabaritoStatus: 'anulado',
          metadados: {
            disciplina: 'Direito Tributário',
            paginaOrigem: 3,
          },
        },
      ],
    };

    const errors = validateExamDocumentV2(doc);
    expect(errors).toHaveLength(0);
  });

  it('deve acusar erro se houver discrepância no número total ou nas questões anuladas', () => {
    const docInvalido: ExamDocumentV2 = {
      schemaVersion: '2.0',
      exam: {
        id: 'teste_discrepancia',
        titulo: 'Exame Inválido',
        orgao: 'Órgão',
        banca: 'Banca',
        cargo: 'Cargo',
        ano: 2024,
        caderno: 'Tipo 1',
        formatoQuestoes: 'multipla_escolha_5',
        totalQuestoes: 5, // Declarado 5, mas só enviou 1
        totalAnuladas: 2, // Declarado 2, mas só tem 0
        homologado: false,
        auditTrail: {
          arquivoProvaPdf: 'prova.pdf',
          arquivoGabaritoPdf: 'gabarito.pdf',
          secaoGabarito: 'Geral',
          paginaGabarito: 1,
          tipoGabarito: 'preliminar',
          responsavelAuditoria: 'Tester',
        },
      },
      questoes: [
        {
          id: 'teste-q01',
          numeroOriginal: 1,
          tipo: 'multipla_escolha',
          enunciado: 'Questão 1',
          alternativas: [
            { id: 'A', text: 'A' },
            { id: 'B', text: 'B' },
            { id: 'C', text: 'C' },
            { id: 'D', text: 'D' },
            { id: 'E', text: 'E' },
          ],
          gabaritoOficial: 'A',
          gabaritoStatus: 'valido',
          metadados: {
            disciplina: 'Português',
            paginaOrigem: 1,
          },
        },
      ],
    };

    const errors = validateExamDocumentV2(docInvalido);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors.some((e) => e.includes('Discrepância no total de questões'))).toBe(true);
    expect(errors.some((e) => e.includes('Discrepância nas questões anuladas'))).toBe(true);
  });

  it('deve acusar erro se houver numeração original ou ID duplicado', () => {
    const docDuplicado: ExamDocumentV2 = {
      schemaVersion: '2.0',
      exam: {
        id: 'teste_dup',
        titulo: 'Teste',
        orgao: 'Órgão',
        banca: 'Banca',
        cargo: 'Cargo',
        ano: 2024,
        caderno: 'Único',
        formatoQuestoes: 'certo_errado',
        totalQuestoes: 2,
        totalAnuladas: 0,
        homologado: false,
        auditTrail: {
          arquivoProvaPdf: 'p.pdf',
          arquivoGabaritoPdf: 'g.pdf',
          secaoGabarito: 'S',
          paginaGabarito: 1,
          tipoGabarito: 'preliminar',
          responsavelAuditoria: 'T',
        },
      },
      questoes: [
        {
          id: 'q-dup',
          numeroOriginal: 1,
          tipo: 'certo_errado',
          enunciado: 'Item 1',
          alternativas: [
            { id: 'C', text: 'C' },
            { id: 'E', text: 'E' },
          ],
          gabaritoOficial: 'C',
          gabaritoStatus: 'valido',
          metadados: { disciplina: 'D', paginaOrigem: 1 },
        },
        {
          id: 'q-dup', // ID duplicado!
          numeroOriginal: 1, // Número original duplicado!
          tipo: 'certo_errado',
          enunciado: 'Item 1 duplicado',
          alternativas: [
            { id: 'C', text: 'C' },
            { id: 'E', text: 'E' },
          ],
          gabaritoOficial: 'E',
          gabaritoStatus: 'valido',
          metadados: { disciplina: 'D', paginaOrigem: 1 },
        },
      ],
    };

    const errors = validateExamDocumentV2(docDuplicado);
    expect(errors.some((e) => e.includes('ID duplicado'))).toBe(true);
    expect(errors.some((e) => e.includes('Número de questão duplicado'))).toBe(true);
  });
});
