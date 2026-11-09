/**
 * ExamSchema v2.0 - Contrato Mínimo, Versionado e Extensível
 * para o Acervo de Provas e Questões do App_Concurseiro.
 * 
 * Projetado para preservar integralmente os cadernos de prova oficiais,
 * garantindo fidelidade documental, rastreabilidade estrita e compatibilidade
 * com múltiplos formatos de bancas brasileiras (A-E, A-D, C/E).
 */

export type QuestionType = 'multipla_escolha' | 'certo_errado';

export type GabaritoStatus = 'valido' | 'anulado' | 'alterado' | 'pendente' | 'preliminar';

export type GabaritoTipoOficial = 'preliminar' | 'definitivo' | 'retificado';

export type HomologationStatus = 'rascunho' | 'validacao_pendente' | 'homologado';

export interface AlternativeV2 {
  id: string; // "A", "B", "C", "D", "E" ou "C", "E"
  text: string;
}

export interface SharedTextV2 {
  id: string;
  title?: string;
  content: string; // Preserva texto original, quebras de linha e marcação inline (ex: <u>, <b>)
}

export interface QuestionMetadataV2 {
  disciplina: string; // Ex: "Língua Portuguesa", "Direito Tributário"
  assunto?: string;
  subtopicos?: string[];
  dificuldade?: 'fácil' | 'médio' | 'difícil';
  paginaOrigem: number; // Página do PDF da prova onde a questão inicia
  paginaFim?: number; // Para questões que cruzam páginas
  imagens?: string[]; // Caminho para imagens relativas em public/assets/exams/<exam_id>/ ou public/questoes/
  tabelas?: string[]; // Tabelas em formato markdown ou representação fiel
  temSublinhado?: boolean;
  temLacunas?: boolean;
}

export interface ExamQuestionV2 {
  id: string; // Ex: "fepese-2023-bc-aft-q01", "quadrix-2024-crcsp-ac-q120"
  numeroOriginal: number; // Numeração original da questão no caderno oficial (1..120)
  tipo: QuestionType;
  enunciado: string; // Enunciado integral sem resumos ou embelezamentos
  alternativas: AlternativeV2[];
  gabaritoOficial: string; // "A" | "B" | "C" | "D" | "E" | "C" | "E" | "X"
  gabaritoStatus: GabaritoStatus;
  gabaritoDefinitivo?: string; // Se retificado ou alterado pós-recurso
  imagens?: string[];
  textoCompartilhado?: SharedTextV2;
  metadados: QuestionMetadataV2;
  explicacao?: string; // Comentário didático opcional (separado do texto original)
  baseLegal?: string;
}

export interface ExamAuditTrail {
  arquivoProvaPdf: string;
  arquivoGabaritoPdf: string;
  secaoGabarito: string; // Cargo/código exato no gabarito oficial
  paginaGabarito: number; // Página exata do gabarito oficial
  tipoGabarito: GabaritoTipoOficial;
  hashSha256Prova?: string;
  hashSha256Gabarito?: string;
  responsavelAuditoria: string;
  dataHomologacao?: string;
}

export interface ExamMetadataV2 {
  id: string; // Ex: "balneario_camboriu_2022_agente_fiscal_tributario"
  titulo: string;
  orgao: string;
  banca: string;
  cargo: string;
  codigoCargo?: string;
  ano: number;
  edital?: string;
  caderno: string; // Ex: "6M02", "Tipo 1 - Branca", "Caderno Geral"
  turno?: 'manhã' | 'tarde' | 'integral';
  dataAplicacao?: string;
  formatoQuestoes: 'multipla_escolha_4' | 'multipla_escolha_5' | 'certo_errado' | 'misto';
  totalQuestoes: number;
  totalAnuladas: number;
  homologado: boolean;
  statusHomologacao?: HomologationStatus;
  auditTrail: ExamAuditTrail;
}

export interface ExamDocumentV2 {
  schemaVersion: '2.0';
  exam: ExamMetadataV2;
  questoes: ExamQuestionV2[];
}

export interface ExamValidationReport {
  isValid: boolean;
  statusHomologacao: HomologationStatus;
  errors: string[];
  warnings: string[];
  metrics: {
    totalQuestoes: number;
    totalAnuladas: number;
    imagensVerificadas: number;
  };
}

/**
 * Função de validação estrutural básica para um ExamDocumentV2.
 * Garante que a estrutura sintática e campos do schema estejam válidos.
 */
export function validateExamDocumentV2(doc: ExamDocumentV2): string[] {
  const report = validateExamHomologation(doc, { requireHomologatedStatus: false });
  return report.errors;
}

/**
 * Validação Documental Estrita para Homologação de Provas (P0.1).
 * Verifica fidelidade sequencial, ausência de lacunas, consistência
 * de gabarito contra alternativas, integridade de auditTrail e imagens.
 */
export function validateExamHomologation(
  doc: ExamDocumentV2,
  options?: {
    checkImageFiles?: (imagePath: string) => boolean;
    requireHomologatedStatus?: boolean;
  }
): ExamValidationReport {
  const errors: string[] = [];
  const warnings: string[] = [];
  const requireHomologated = options?.requireHomologatedStatus ?? true;

  if (!doc) {
    return {
      isValid: false,
      statusHomologacao: 'rascunho',
      errors: ['Documento nulo ou indefinido.'],
      warnings: [],
      metrics: { totalQuestoes: 0, totalAnuladas: 0, imagensVerificadas: 0 },
    };
  }

  if (doc.schemaVersion !== '2.0') {
    errors.push(`schemaVersion inválida: esperado '2.0', recebido '${doc.schemaVersion}'`);
  }

  if (!doc.exam) {
    errors.push('Campo exam (metadados do exame) é obrigatório.');
    return {
      isValid: false,
      statusHomologacao: 'rascunho',
      errors,
      warnings,
      metrics: { totalQuestoes: 0, totalAnuladas: 0, imagensVerificadas: 0 },
    };
  }

  const { exam, questoes } = doc;

  // 1. Metadados Oficiais Obrigatórios
  if (!exam.id?.trim()) errors.push('exam.id é obrigatório.');
  if (!exam.orgao?.trim()) errors.push('exam.orgao é obrigatório.');
  if (!exam.banca?.trim()) errors.push('exam.banca é obrigatório.');
  if (!exam.cargo?.trim()) errors.push('exam.cargo é obrigatório.');
  if (!exam.caderno?.trim()) errors.push('exam.caderno é obrigatório para identificação da prova.');
  if (!exam.ano || exam.ano < 1990 || exam.ano > 2030) {
    errors.push(`exam.ano inválido: ${exam.ano}`);
  }

  // 2. Status de Homologação (exigido quando requireHomologatedStatus for true)
  if (requireHomologated && (exam.homologado === false || exam.statusHomologacao === 'rascunho')) {
    errors.push("Documento marcado como rascunho ou pendente de validação. Homologação requer status 'homologado'.");
  }

  // 3. Rastreabilidade Documental Estrita (AuditTrail)
  if (!exam.auditTrail) {
    errors.push('exam.auditTrail é obrigatório para rastreabilidade documental.');
  } else {
    const at = exam.auditTrail;
    if (!at.arquivoProvaPdf?.trim()) errors.push('auditTrail.arquivoProvaPdf é obrigatório.');
    if (!at.arquivoGabaritoPdf?.trim()) errors.push('auditTrail.arquivoGabaritoPdf é obrigatório.');
    if (!at.secaoGabarito?.trim()) errors.push('auditTrail.secaoGabarito é obrigatória.');
    if (!at.paginaGabarito || at.paginaGabarito <= 0) errors.push(`auditTrail.paginaGabarito inválida: ${at.paginaGabarito}`);
    if (!at.responsavelAuditoria?.trim()) errors.push('auditTrail.responsavelAuditoria é obrigatório.');
  }

  // 4. Lista de Questões
  if (!Array.isArray(questoes) || questoes.length === 0) {
    errors.push('questoes deve ser um array não-vazio.');
    return {
      isValid: false,
      statusHomologacao: exam.statusHomologacao || 'rascunho',
      errors,
      warnings,
      metrics: { totalQuestoes: 0, totalAnuladas: 0, imagensVerificadas: 0 },
    };
  }

  if (questoes.length !== exam.totalQuestoes) {
    errors.push(`Discrepância no total de questões: declarado ${exam.totalQuestoes}, presentes no array ${questoes.length}`);
  }

  const seenIds = new Set<string>();
  const seenNumbers = new Set<number>();
  let anuladasCount = 0;
  let imagesChecked = 0;

  for (let idx = 0; idx < questoes.length; idx++) {
    const q = questoes[idx];

    // Identificador único
    if (!q.id?.trim()) {
      errors.push(`Questão no índice ${idx} sem id definido.`);
    } else if (seenIds.has(q.id)) {
      errors.push(`ID duplicado de questão: ${q.id}`);
    } else {
      seenIds.add(q.id);
    }

    // Numeração Original
    if (q.numeroOriginal === undefined || q.numeroOriginal <= 0) {
      errors.push(`Questão ${q.id || idx + 1} com numeroOriginal inválido.`);
    } else if (seenNumbers.has(q.numeroOriginal)) {
      errors.push(`Número de questão duplicado: ${q.numeroOriginal}`);
    } else {
      seenNumbers.add(q.numeroOriginal);
    }

    // Enunciado
    if (!q.enunciado || q.enunciado.trim().length === 0) {
      errors.push(`Questão ${q.numeroOriginal} com enunciado vazio.`);
    }

    // Alternativas
    const altIds = new Set<string>();
    if (!Array.isArray(q.alternativas)) {
      errors.push(`Questão ${q.numeroOriginal} não possui array de alternativas.`);
    } else {
      for (const alt of q.alternativas) {
        if (!alt.id?.trim()) {
          errors.push(`Questão ${q.numeroOriginal} contém alternativa com id vazio.`);
        } else if (altIds.has(alt.id.toUpperCase())) {
          errors.push(`Questão ${q.numeroOriginal} contém alternativa duplicada: ${alt.id}`);
        } else {
          altIds.add(alt.id.toUpperCase());
        }
        if (alt.text === undefined || alt.text === null || alt.text.trim().length === 0) {
          errors.push(`Questão ${q.numeroOriginal} contém alternativa ${alt.id} com texto vazio.`);
        }
      }

      // Verificação por formato
      if (q.tipo === 'multipla_escolha') {
        if (q.alternativas.length !== 4 && q.alternativas.length !== 5) {
          errors.push(`Questão ${q.numeroOriginal} de múltipla escolha deve ter 4 ou 5 alternativas (encontradas ${q.alternativas.length}).`);
        }
      } else if (q.tipo === 'certo_errado') {
        if (q.alternativas.length !== 2) {
          errors.push(`Questão ${q.numeroOriginal} de certo/errado deve conter exatamente 2 alternativas (C e E).`);
        } else {
          const hasC = altIds.has('C');
          const hasE = altIds.has('E');
          if (!hasC || !hasE) {
            errors.push(`Questão ${q.numeroOriginal} de certo/errado deve conter alternativas 'C' e 'E'.`);
          }
        }
      } else {
        errors.push(`Questão ${q.numeroOriginal} com tipo desconhecido: ${q.tipo}`);
      }
    }

    // Gabarito Oficial
    const gabUpper = (q.gabaritoOficial || '').trim().toUpperCase();
    const validSymbols = ['A', 'B', 'C', 'D', 'E', 'X'];
    if (!validSymbols.includes(gabUpper)) {
      errors.push(`Questão ${q.numeroOriginal} com gabarito oficial inválido: '${q.gabaritoOficial}'`);
    }

    // Questões Anuladas
    if (gabUpper === 'X' || q.gabaritoStatus === 'anulado') {
      anuladasCount++;
      if (gabUpper === 'X' && q.gabaritoStatus !== 'anulado') {
        errors.push(`Questão ${q.numeroOriginal} com gabarito 'X' deve ter status "anulado".`);
      }
      if (q.gabaritoStatus === 'anulado' && gabUpper !== 'X') {
        errors.push(`Questão ${q.numeroOriginal} com status 'anulado' deve ter gabaritoOficial igual a 'X'.`);
      }
    } else {
      // Gabarito deve corresponder a uma alternativa existente
      if (!altIds.has(gabUpper)) {
        errors.push(`Questão ${q.numeroOriginal} com gabarito '${gabUpper}' não corresponde a nenhuma alternativa existente.`);
      }
    }

    // Metadados
    if (!q.metadados || !q.metadados.disciplina?.trim()) {
      errors.push(`Questão ${q.numeroOriginal} sem disciplina informada.`);
    }
    if (!q.metadados || q.metadados.paginaOrigem === undefined || q.metadados.paginaOrigem <= 0) {
      errors.push(`Questão ${q.numeroOriginal} sem paginaOrigem válida.`);
    }

    // Imagens
    const allImgs = [...(q.imagens || []), ...(q.metadados?.imagens || [])];
    for (const imgPath of allImgs) {
      imagesChecked++;
      if (options?.checkImageFiles && !options.checkImageFiles(imgPath)) {
        errors.push(`Arquivo de imagem inexistente no disco: ${imgPath} (Questão ${q.numeroOriginal})`);
      }
    }
  }

  // 5. Verificação de Lacunas na Sequência Numérica (1 a totalQuestoes)
  for (let expected = 1; expected <= exam.totalQuestoes; expected++) {
    if (!seenNumbers.has(expected)) {
      errors.push(`Lacuna na numeração original: questão ${expected} não encontrada na sequência.`);
    }
  }

  // 6. Consistência do total de anuladas
  if (anuladasCount !== exam.totalAnuladas) {
    errors.push(`Discrepância nas questões anuladas: declarado ${exam.totalAnuladas}, encontradas ${anuladasCount}`);
  }

  const isValid = errors.length === 0;
  const statusHomologacao: HomologationStatus = isValid
    ? 'homologado'
    : exam.statusHomologacao === 'rascunho'
    ? 'rascunho'
    : 'validacao_pendente';

  return {
    isValid,
    statusHomologacao,
    errors,
    warnings,
    metrics: {
      totalQuestoes: questoes.length,
      totalAnuladas: anuladasCount,
      imagensVerificadas: imagesChecked,
    },
  };
}
