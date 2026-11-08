import { describe, it, expect } from 'vitest';
import {
  extractJsonFromAiResponse,
  sanitizeJsonText,
  parseAndValidateExamJson,
  mergeQuestionsIntoExam,
} from '../aiJsonParser';
import { ExamDocumentV2 } from '../../types/examSchemaV2';

describe('aiJsonParser', () => {
  const validExamDocument: ExamDocumentV2 = {
    schemaVersion: '2.0',
    exam: {
      id: 'tj_sp_escrevente_2023',
      titulo: 'TJ-SP - Escrevente Técnico Judiciário',
      banca: 'VUNESP',
      ano: 2023,
      orgao: 'TJ-SP',
      cargo: 'Escrevente Técnico Judiciário',
      caderno: 'Tipo 1',
      formatoQuestoes: 'multipla_escolha_5',
      totalQuestoes: 2,
      totalAnuladas: 0,
      homologado: false,
      auditTrail: {
        arquivoProvaPdf: 'tj_sp_2023.pdf',
        arquivoGabaritoPdf: 'gabarito_tj_sp_2023.pdf',
        secaoGabarito: 'Escrevente',
        paginaGabarito: 1,
        tipoGabarito: 'definitivo',
        responsavelAuditoria: 'IA Importador',
      },
    },
    questoes: [
      {
        id: 'tj_sp-q01',
        numeroOriginal: 1,
        tipo: 'multipla_escolha',
        enunciado: 'Assinale a alternativa correta quanto à concordância verbal.',
        alternativas: [
          { id: 'A', text: 'Houveram muitos problemas.' },
          { id: 'B', text: 'Houve muitos problemas.' },
        ],
        gabaritoOficial: 'B',
        gabaritoStatus: 'valido',
        metadados: {
          disciplina: 'Língua Portuguesa',
          paginaOrigem: 1,
        },
      },
      {
        id: 'tj_sp-q02',
        numeroOriginal: 2,
        tipo: 'multipla_escolha',
        enunciado: 'Todos são iguais perante a lei.',
        alternativas: [
          { id: 'A', text: 'Sem distinção de qualquer natureza.' },
          { id: 'B', text: 'Com distinções legais.' },
        ],
        gabaritoOficial: 'A',
        gabaritoStatus: 'valido',
        metadados: {
          disciplina: 'Direito Constitucional',
          paginaOrigem: 1,
        },
      },
    ],
  };

  describe('extractJsonFromAiResponse', () => {
    it('deve extrair JSON encapsulado em bloco ```json ... ```', () => {
      const aiResponse = `
Aqui está o JSON que você pediu:

\`\`\`json
{
  "nome": "teste"
}
\`\`\`

Qualquer dúvida estou à disposição!
      `;
      const extracted = extractJsonFromAiResponse(aiResponse);
      expect(extracted).toBe('{\n  "nome": "teste"\n}');
    });

    it('deve extrair JSON encapsulado em bloco genérico ``` ... ```', () => {
      const aiResponse = '```\n{"chave": "valor"}\n```';
      expect(extractJsonFromAiResponse(aiResponse)).toBe('{"chave": "valor"}');
    });

    it('deve extrair JSON sem blocos markdown quando delimitado por chaves { ... }', () => {
      const raw = 'Segue o resultado: {"chave": 123} espero que goste!';
      expect(extractJsonFromAiResponse(raw)).toBe('{"chave": 123}');
    });

    it('deve extrair array JSON delimitado por colchetes [ ... ]', () => {
      const raw = 'Aqui estão as questões: [{"numeroOriginal": 1}] fim.';
      expect(extractJsonFromAiResponse(raw)).toBe('[{"numeroOriginal": 1}]');
    });
  });

  describe('sanitizeJsonText', () => {
    it('deve remover vírgulas sobrando antes de fechar chaves ou colchetes (trailing commas)', () => {
      const malformed = '{"a": 1, "b": 2, }\n[1, 2, 3, ]';
      const sanitized = sanitizeJsonText(malformed);
      expect(sanitized).toBe('{"a": 1, "b": 2}\n[1, 2, 3]');
    });

    it('deve remover caracteres BOM e espaços invisíveis', () => {
      const withBom = '\uFEFF{"status": true}';
      expect(sanitizeJsonText(withBom)).toBe('{"status": true}');
    });
  });

  describe('parseAndValidateExamJson', () => {
    it('deve fazer o parse com sucesso de uma resposta completa de IA com markdown', () => {
      const aiMessage = `
Com certeza! Segue o arquivo estruturado no padrão v2:
\`\`\`json
${JSON.stringify(validExamDocument, null, 2)}
\`\`\`
Pode colar no aplicativo!
      `;

      const result = parseAndValidateExamJson(aiMessage);
      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
      expect(result.data?.exam.id).toBe('tj_sp_escrevente_2023');
      expect(result.data?.questoes.length).toBe(2);
    });

    it('deve normalizar formato simplificado de IA (onde gabarito é informado em vez de gabaritoOficial)', () => {
      const simplifiedAiMessage = `
\`\`\`json
{
  "prova": {
    "titulo": "Concurso Teste",
    "banca": "FGV",
    "ano": 2024,
    "orgao": "MPE",
    "cargo": "Promotor"
  },
  "questoes": [
    {
      "numero": 1,
      "enunciado": "Questão simplificada",
      "alternativas": [
        { "id": "A", "text": "Opção A" },
        { "id": "B", "text": "Opção B" }
      ],
      "gabarito": "A"
    }
  ]
}
\`\`\`
      `;

      const result = parseAndValidateExamJson(simplifiedAiMessage);
      expect(result.success).toBe(true);
      expect(result.data?.questoes.length).toBe(1);
      expect(result.data?.questoes[0].gabaritoOficial).toBe('A');
      expect(result.data?.questoes[0].numeroOriginal).toBe(1);
      expect(result.data?.exam.banca).toBe('FGV');
    });

    it('deve aceitar array de questões e gerar uma estrutura de prova válida provisória', () => {
      const arrayAiMessage = `
\`\`\`json
[
  {
    "numeroOriginal": 10,
    "enunciado": "Questão isolada",
    "alternativas": [
      { "id": "A", "text": "Opção A" },
      { "id": "B", "text": "Opção B" }
    ],
    "gabarito": "A",
    "tipo": "multipla_escolha"
  }
]
\`\`\`
      `;

      const result = parseAndValidateExamJson(arrayAiMessage);
      expect(result.success).toBe(true);
      expect(result.data?.questoes.length).toBe(1);
      expect(result.data?.questoes[0].numeroOriginal).toBe(10);
      expect(result.data?.questoes[0].gabaritoOficial).toBe('A');
    });

    it('deve retornar erro claro se o JSON for sintaticamente inválido e irrecuperável', () => {
      const broken = '```json\n{ "incompleto": \n```';
      const result = parseAndValidateExamJson(broken);
      expect(result.success).toBe(false);
      expect(result.error).toContain('Sintaxe JSON inválida');
    });

    it('deve retornar erro explicativo se faltar o gabarito de alguma questão', () => {
      const missingAnswer = {
        schemaVersion: '2.0',
        exam: {
          id: 'teste_sem_gabarito',
          titulo: 'Teste',
          banca: 'FGV',
          ano: 2024,
          orgao: 'TJ',
          cargo: 'Analista',
        },
        questoes: [
          {
            numeroOriginal: 5,
            enunciado: 'Enunciado sem resposta',
            alternativas: [{ id: 'A', text: '1' }],
            gabaritoOficial: '', // Gabarito ausente
          },
        ],
      };

      const result = parseAndValidateExamJson(JSON.stringify(missingAnswer));
      expect(result.success).toBe(false);
      expect(result.error).toMatch(/questão.*5.*gabarito/i);
    });

    it('deve retornar erro se o texto fornecido for vazio', () => {
      const result = parseAndValidateExamJson('   ');
      expect(result.success).toBe(false);
      expect(result.error).toContain('Nenhum conteúdo');
    });
  });

  describe('mergeQuestionsIntoExam', () => {
    it('deve anexar novas questões a uma prova existente sem duplicar números originais', () => {
      const baseExam = { ...validExamDocument };
      const newQuestions = [
        {
          id: 'tj_sp-q03',
          numeroOriginal: 3,
          tipo: 'multipla_escolha' as const,
          enunciado: 'Questão 3 nova',
          alternativas: [{ id: 'A', text: 'A' }, { id: 'B', text: 'B' }],
          gabaritoOficial: 'A',
          gabaritoStatus: 'valido' as const,
          metadados: { disciplina: 'Português', paginaOrigem: 2 },
        },
      ];

      const merged = mergeQuestionsIntoExam(baseExam, newQuestions);
      expect(merged.questoes.length).toBe(3);
      expect(merged.exam.totalQuestoes).toBe(3);
      expect(merged.questoes[2].numeroOriginal).toBe(3);
    });

    it('deve sobrescrever questão existente se o numeroOriginal for idêntico (atualização)', () => {
      const baseExam = { ...validExamDocument };
      const updatedQ2 = [
        {
          id: 'tj_sp-q02-updated',
          numeroOriginal: 2,
          tipo: 'multipla_escolha' as const,
          enunciado: 'Enunciado atualizado da questão 2',
          alternativas: [{ id: 'A', text: 'A' }, { id: 'B', text: 'B' }],
          gabaritoOficial: 'B',
          gabaritoStatus: 'valido' as const,
          metadados: { disciplina: 'Constitucional', paginaOrigem: 1 },
        },
      ];

      const merged = mergeQuestionsIntoExam(baseExam, updatedQ2);
      expect(merged.questoes.length).toBe(2);
      const q2 = merged.questoes.find((q) => q.numeroOriginal === 2);
      expect(q2?.enunciado).toBe('Enunciado atualizado da questão 2');
      expect(q2?.gabaritoOficial).toBe('B');
    });
  });
});
