/**
 * ExamSchema v2.0 - Contrato Mínimo, Versionado e Extensível
 * para o Acervo de Provas e Questões do App_Concurseiro.
 * 
 * Projetado para preservar integralmente os cadernos de prova oficiais,
 * garantindo fidelidade documental, rastreabilidade estrita e compatibilidade
 * com múltiplos formatos de bancas brasileiras (A-E, A-D, C/E).
 */

export type QuestionType = 'multipla_escolha' | 'certo_errado';

export type GabaritoStatus = 'valido' | 'anulado' | 'alterado' | 'retificado' | 'pendente' | 'preliminar';

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

export interface StructuralValidationResult {
  isValidStructural: boolean;
  errors: string[];
  warnings: string[];
  totalQuestoes: number;
  totalAnuladas: number;
  totalRetificadas: number;
}

export type TextualFidelityStatus =
  | 'nao_verificada'
  | 'triagem_lexical_aprovada'
  | 'verificacao_parcial'
  | 'verificacao_documental_pendente'
  | 'verificacao_documental_concluida'
  | 'verificada_integralmente'
  | 'divergencia_identificada'
  | 'divergente';

export interface DocumentaryValidationResult {
  isValidDocumentary: boolean;
  errors: string[];
  warnings: string[];
  
  // As 6 evidências documentais distintas exigidas na 3ª auditoria (P0.1)
  provaPdfVerified: boolean; // 1. Existência física do PDF da prova comprovada
  gabaritoPdfVerified: boolean; // 2. Existência física do PDF do gabarito comprovada
  cargoCadernoIdentified: boolean; // 3. Identificação do cargo, código e caderno
  gabaritoDefinitivoReconciled: boolean; // 4. Reconciliação do gabarito oficial definitivo
  textualFidelityStatus: TextualFidelityStatus; // 5. Comprovação de fidelidade textual ao PDF
  homologacaoFormal: boolean; // 6. Homologação formal com aprovação de auditoria

  gabaritoTipo: GabaritoTipoOficial | 'desconhecido';
  imagesVerifiedCount: number;
  missingImages: string[];
}

export interface ExamValidationReport {
  isValid: boolean;
  isStructuralValid: boolean;
  isDocumentaryValid: boolean;
  isHomologated: boolean;
  statusHomologacao: HomologationStatus;
  errors: string[];
  warnings: string[];
  metrics: {
    totalQuestoes: number;
    totalAnuladas: number;
    totalRetificadas: number;
    imagensVerificadas: number;
  };
}

/**
 * 1. Validação Estrutural (P0.1)
 * Verifica conformidade do formato JSON, tipos de dados, numeração sequencial 1..N
 * sem lacunas, integridade das alternativas e consistência interna dos gabaritos.
 */
export function validateExamStructure(doc: ExamDocumentV2): StructuralValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!doc) {
    return {
      isValidStructural: false,
      errors: ['Documento nulo ou indefinido.'],
      warnings: [],
      totalQuestoes: 0,
      totalAnuladas: 0,
      totalRetificadas: 0,
    };
  }

  if (doc.schemaVersion !== '2.0') {
    errors.push(`schemaVersion inválida: esperado '2.0', recebido '${doc.schemaVersion}'`);
  }

  if (!doc.exam) {
    errors.push('Campo exam (metadados do exame) é obrigatório.');
    return {
      isValidStructural: false,
      errors,
      warnings,
      totalQuestoes: 0,
      totalAnuladas: 0,
      totalRetificadas: 0,
    };
  }

  const { exam, questoes } = doc;

  if (!exam.id?.trim()) errors.push('exam.id é obrigatório.');
  if (!exam.orgao?.trim()) errors.push('exam.orgao é obrigatório.');
  if (!exam.banca?.trim()) errors.push('exam.banca é obrigatório.');
  if (!exam.cargo?.trim()) errors.push('exam.cargo é obrigatório.');
  if (!exam.caderno?.trim()) errors.push('exam.caderno é obrigatório para identificação da prova.');
  if (!exam.ano || exam.ano < 1990 || exam.ano > 2030) {
    errors.push(`exam.ano inválido: ${exam.ano}`);
  }

  if (!Array.isArray(questoes) || questoes.length === 0) {
    errors.push('questoes deve ser um array não-vazio.');
    return {
      isValidStructural: false,
      errors,
      warnings,
      totalQuestoes: 0,
      totalAnuladas: 0,
      totalRetificadas: 0,
    };
  }

  if (questoes.length !== exam.totalQuestoes) {
    errors.push(`Discrepância no total de questões: declarado ${exam.totalQuestoes}, presentes no array ${questoes.length}`);
  }

  const seenIds = new Set<string>();
  const seenNumbers = new Set<number>();
  let anuladasCount = 0;
  let retificadasCount = 0;

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
      if (!altIds.has(gabUpper)) {
        errors.push(`Questão ${q.numeroOriginal} com gabarito '${gabUpper}' não corresponde a nenhuma alternativa existente.`);
      }
    }

    // Questões Retificadas
    if (q.gabaritoStatus === 'alterado' || q.gabaritoStatus === 'retificado') {
      retificadasCount++;
      if (q.gabaritoDefinitivo) {
        const defUpper = q.gabaritoDefinitivo.trim().toUpperCase();
        if (!altIds.has(defUpper) && defUpper !== 'X') {
          errors.push(`Questão ${q.numeroOriginal} com gabaritoDefinitivo '${defUpper}' não corresponde a nenhuma alternativa.`);
        }
      }
    }

    // Metadados mínimos obrigatórios
    if (!q.metadados || !q.metadados.disciplina?.trim()) {
      errors.push(`Questão ${q.numeroOriginal} sem disciplina informada.`);
    }
    if (!q.metadados || q.metadados.paginaOrigem === undefined || q.metadados.paginaOrigem <= 0) {
      errors.push(`Questão ${q.numeroOriginal} sem paginaOrigem válida.`);
    }
  }

  // Sequencialidade numérica estrita (1 a totalQuestoes)
  for (let expected = 1; expected <= exam.totalQuestoes; expected++) {
    if (!seenNumbers.has(expected)) {
      errors.push(`Lacuna na numeração original: questão ${expected} não encontrada na sequência.`);
    }
  }

  if (anuladasCount !== exam.totalAnuladas) {
    errors.push(`Discrepância nas questões anuladas: declarado ${exam.totalAnuladas}, encontradas ${anuladasCount}`);
  }

  return {
    isValidStructural: errors.length === 0,
    errors,
    warnings,
    totalQuestoes: questoes.length,
    totalAnuladas: anuladasCount,
    totalRetificadas: retificadasCount,
  };
}

/**
 * 2. Validação Documental Estrita (P0.1)
 * Confronta a existência e integridade dos PDFs oficiais, seções do gabarito,
 * status do gabarito (preliminar x definitivo) e integridade de ativos de imagem.
 * ELIMINAÇÃO TOTAL DE PRESUNÇÃO: a ausência de verificador físico (checkFileExists)
 * resulta em prova não comprovada (false), jamais em aprovação presumida.
 */
export function validateExamDocumentary(
  doc: ExamDocumentV2,
  options?: {
    checkFileExists?: (filePath: string) => boolean;
    checkImageFiles?: (imagePath: string) => boolean;
    textualFidelityStatus?: TextualFidelityStatus;
  }
): DocumentaryValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const missingImages: string[] = [];
  let imagesCount = 0;

  if (!doc?.exam?.auditTrail) {
    errors.push('exam.auditTrail é obrigatório para comprovação documental.');
    return {
      isValidDocumentary: false,
      errors,
      warnings,
      provaPdfVerified: false,
      gabaritoPdfVerified: false,
      cargoCadernoIdentified: false,
      gabaritoDefinitivoReconciled: false,
      textualFidelityStatus: 'nao_verificada',
      homologacaoFormal: false,
      gabaritoTipo: 'desconhecido',
      imagesVerifiedCount: 0,
      missingImages: [],
    };
  }

  const at = doc.exam.auditTrail;
  let provaPdfVerified = false;
  let gabaritoPdfVerified = false;

  // 1. Verificação do PDF da Prova (sem presunção)
  if (!at.arquivoProvaPdf?.trim()) {
    errors.push('auditTrail.arquivoProvaPdf é obrigatório.');
  } else if (options?.checkFileExists) {
    provaPdfVerified = options.checkFileExists(at.arquivoProvaPdf);
    if (!provaPdfVerified) {
      errors.push(`Arquivo PDF da prova não encontrado no disco: ${at.arquivoProvaPdf}`);
    }
  } else {
    // ELIMINAÇÃO DE PRESUNÇÃO: ausência de checagem física = NÃO COMPROVADO
    provaPdfVerified = false;
    warnings.push(`Verificação física do PDF da prova (${at.arquivoProvaPdf}) não executada nesta validação.`);
  }

  // 2. Verificação do PDF do Gabarito (sem presunção)
  if (!at.arquivoGabaritoPdf?.trim()) {
    errors.push('auditTrail.arquivoGabaritoPdf é obrigatório.');
  } else if (options?.checkFileExists) {
    gabaritoPdfVerified = options.checkFileExists(at.arquivoGabaritoPdf);
    if (!gabaritoPdfVerified) {
      errors.push(`Arquivo PDF do gabarito não encontrado no disco: ${at.arquivoGabaritoPdf}`);
    }
  } else {
    // ELIMINAÇÃO DE PRESUNÇÃO: ausência de checagem física = NÃO COMPROVADO
    gabaritoPdfVerified = false;
    warnings.push(`Verificação física do PDF do gabarito (${at.arquivoGabaritoPdf}) não executada nesta validação.`);
  }

  // 3. Identificação do Cargo, Código e Caderno
  const cargoCadernoIdentified = Boolean(
    doc.exam.cargo?.trim() &&
    doc.exam.caderno?.trim() &&
    at.secaoGabarito?.trim() &&
    at.paginaGabarito && at.paginaGabarito > 0
  );
  if (!cargoCadernoIdentified) {
    errors.push('Identificação documental incompleta: cargo, caderno, seção ou página do gabarito ausente.');
  }

  // 4. Reconciliação do Gabarito Oficial Definitivo
  const gabaritoTipo = at.tipoGabarito || 'desconhecido';
  const gabaritoDefinitivoReconciled = gabaritoTipo === 'definitivo';

  if (gabaritoTipo === 'preliminar') {
    warnings.push('Gabarito registrado como preliminar. Validação documental definitiva requer publicação pós-recurso.');
  } else if (gabaritoTipo !== 'definitivo' && gabaritoTipo !== 'retificado') {
    errors.push(`auditTrail.tipoGabarito inválido ou não suportado: '${gabaritoTipo}'`);
  }

  // 5. Comprovação de Fidelidade Documental aos PDFs (P0.1/P0.2)
  const textualFidelityStatus: TextualFidelityStatus = options?.textualFidelityStatus || 'nao_verificada';
  if (textualFidelityStatus === 'nao_verificada') {
    warnings.push('Fidelidade documental aos PDFs oficiais não foi verificada nesta chamada.');
  } else if (textualFidelityStatus === 'divergente' || textualFidelityStatus === 'divergencia_identificada') {
    errors.push('Fidelidade documental reprovada: divergências identificadas entre o JSON e o documento oficial PDF.');
  } else if (textualFidelityStatus === 'verificacao_documental_pendente' || textualFidelityStatus === 'verificacao_parcial') {
    warnings.push('Fidelidade documental com pendências de conferência integral.');
  } else if (textualFidelityStatus === 'triagem_lexical_aprovada') {
    warnings.push('Triagem lexical aprovada. Conferência documental localizada de enunciados, alternativas e ativos visuais permanece pendente.');
  }

  // 6. Homologação Formal
  const homologacaoFormal = Boolean(
    doc.exam.homologado === true &&
    doc.exam.statusHomologacao !== 'rascunho' &&
    at.responsavelAuditoria?.trim()
  );

  // Verificação exaustiva de imagens (imagens diretas, metadados.imagens e markdown regex)
  const markdownImgRegex = /!\[.*?\]\((.*?)\)/g;
  for (const q of doc.questoes || []) {
    const rawImgs = [
      ...(q.imagens || []),
      ...(q.metadados?.imagens || []),
    ];

    const textToCheck = `${q.enunciado || ''} ${(q.alternativas || []).map(a => a.text).join(' ')}`;
    let match: RegExpExecArray | null;
    while ((match = markdownImgRegex.exec(textToCheck)) !== null) {
      if (match[1]) rawImgs.push(match[1]);
    }

    const uniqueImgs = Array.from(new Set(rawImgs));
    for (const imgPath of uniqueImgs) {
      imagesCount++;
      if (options?.checkImageFiles && !options.checkImageFiles(imgPath)) {
        missingImages.push(imgPath);
        errors.push(`Arquivo de imagem inexistente no disco: ${imgPath} (Questão ${q.numeroOriginal})`);
      }
    }
  }

  const isValidDocumentary =
    errors.length === 0 &&
    provaPdfVerified &&
    gabaritoPdfVerified &&
    cargoCadernoIdentified;

  return {
    isValidDocumentary,
    errors,
    warnings,
    provaPdfVerified,
    gabaritoPdfVerified,
    cargoCadernoIdentified,
    gabaritoDefinitivoReconciled,
    textualFidelityStatus,
    homologacaoFormal,
    gabaritoTipo,
    imagesVerifiedCount: imagesCount,
    missingImages,
  };
}

/**
 * 3. Homologação Estrita (P0.1)
 * Distingue rigorosamente Validação Estrutural, Validação Documental e Homologação.
 * Uma prova SÓ pode ser homologada se tiver validação estrutural aprovada,
 * comprovação documental plena (PDFs verificados sem presunção), gabarito definitivo
 * publicado, fidelidade textual comprovada integralmente e aprovação formal de auditoria.
 */
export function validateExamHomologation(
  doc: ExamDocumentV2,
  options?: {
    checkFileExists?: (filePath: string) => boolean;
    checkImageFiles?: (imagePath: string) => boolean;
    textualFidelityStatus?: TextualFidelityStatus;
    requireHomologatedStatus?: boolean;
  }
): ExamValidationReport {
  const requireHomologated = options?.requireHomologatedStatus ?? true;

  // 1. Validação Estrutural
  const structResult = validateExamStructure(doc);

  // 2. Validação Documental (sem presunção)
  const docResult = validateExamDocumentary(doc, {
    checkFileExists: options?.checkFileExists,
    checkImageFiles: options?.checkImageFiles,
    textualFidelityStatus: options?.textualFidelityStatus,
  });

  const combinedErrors = [...structResult.errors, ...docResult.errors];
  const combinedWarnings = [...structResult.warnings, ...docResult.warnings];

  // 3. Avaliação de Homologação
  const isDraft = doc?.exam?.statusHomologacao === 'rascunho';
  const claimedHomologated = doc?.exam?.homologado === true;

  // Tentativa inválida de homologar rascunho de IA
  if (isDraft && claimedHomologated) {
    combinedErrors.push("Homologação rejeitada: documentos marcados como rascunho de IA não podem declarar 'homologado: true'.");
  }

  // Tentativa inválida de homologar com gabarito preliminar
  if (claimedHomologated && docResult.gabaritoTipo === 'preliminar') {
    combinedErrors.push("Homologação rejeitada: a prova declara 'homologado: true', mas o gabarito é preliminar. Homologação requer gabarito definitivo.");
  }

  // Tentativa de homologar sem comprovação física dos PDFs
  if (claimedHomologated && (!docResult.provaPdfVerified || !docResult.gabaritoPdfVerified)) {
    combinedErrors.push("Homologação rejeitada: a prova declara 'homologado: true', mas a existência dos PDFs oficiais não foi comprovada fisicamente.");
  }

  const isDocumentaryConcluded =
    docResult.textualFidelityStatus === 'verificada_integralmente' ||
    docResult.textualFidelityStatus === 'verificacao_documental_concluida';

  // Tentativa de homologar sem conferência documental integral
  if (claimedHomologated && !isDocumentaryConcluded) {
    if (docResult.textualFidelityStatus === 'triagem_lexical_aprovada') {
      combinedErrors.push("Homologação rejeitada: 'triagem_lexical_aprovada' indica apenas correspondência de vocabulário, não transcrição integral comprovada. É necessária verificação documental completa de enunciados, alternativas e ativos visuais.");
    } else {
      combinedErrors.push(`Homologação rejeitada: conferência documental integral pendente (status: '${docResult.textualFidelityStatus}').`);
    }
  }

  // Condição estrita para ser formalmente HOMOLOGADO:
  const isHomologated =
    structResult.isValidStructural &&
    docResult.isValidDocumentary &&
    docResult.gabaritoDefinitivoReconciled &&
    isDocumentaryConcluded &&
    docResult.homologacaoFormal &&
    !isDraft &&
    claimedHomologated &&
    combinedErrors.length === 0;

  // Determinação determinística e não-contraditória de statusHomologacao
  let statusHomologacao: HomologationStatus = 'rascunho';
  if (isHomologated) {
    statusHomologacao = 'homologado';
  } else if (structResult.isValidStructural && !isDraft) {
    statusHomologacao = 'validacao_pendente';
  } else {
    statusHomologacao = 'rascunho';
  }

  if (requireHomologated && !isHomologated) {
    combinedErrors.push(`Homologação documental incompleta. Status resultante: '${statusHomologacao}'.`);
  }

  const isValid = requireHomologated ? isHomologated : structResult.isValidStructural;

  return {
    isValid,
    isStructuralValid: structResult.isValidStructural,
    isDocumentaryValid: docResult.isValidDocumentary,
    isHomologated,
    statusHomologacao,
    errors: Array.from(new Set(combinedErrors)),
    warnings: Array.from(new Set(combinedWarnings)),
    metrics: {
      totalQuestoes: structResult.totalQuestoes,
      totalAnuladas: structResult.totalAnuladas,
      totalRetificadas: structResult.totalRetificadas,
      imagensVerificadas: docResult.imagesVerifiedCount,
    },
  };
}

/**
 * Validação estrutural básica para ExamDocumentV2 (retrocompatibilidade).
 */
export function validateExamDocumentV2(doc: ExamDocumentV2): string[] {
  const result = validateExamStructure(doc);
  return result.errors;
}
