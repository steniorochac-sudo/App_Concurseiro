import documentaryRegistryData from './documentary_status_registry.json';
import { HomologationStatus, TextualFidelityStatus } from '../types/examSchemaV2';

export interface ExamDocumentaryEvidenceRecord {
  examId: string;
  titulo: string;
  banca: string;
  ano: number;
  provaPdf: string;
  gabaritoPdf: string;
  tipoGabarito: 'definitivo' | 'preliminar';
  triagemLexicalStatus: 'triagem_lexical_aprovada' | 'divergencia_identificada' | 'nao_verificada';
  statusDocumental: TextualFidelityStatus;
  isDocumentaryVerified: boolean;
  isHomologated: boolean;
  statusHomologacao: HomologationStatus;
  faseDocumentalPendente: boolean;
  totalQuestoes: number;
}

export const EXAMS_DOCUMENTARY_REGISTRY: Record<string, ExamDocumentaryEvidenceRecord> =
  documentaryRegistryData as Record<string, ExamDocumentaryEvidenceRecord>;

/**
 * Resolve o status documental efetivo de um exame (Correção A - 5ª Auditoria).
 * Fonte única de verdade para todo o acervo e aplicação:
 * - O status efetivo reflete a evidência documental comprovada, NÃO uma declaração histórica no JSON.
 * - 'homologado' SÓ pode ser exposto após conferência documental integral comprovada (isDocumentaryVerified === true).
 * - Qualquer exame sem evidência documental comprovada recebe status 'validacao_pendente' e isHomologated: false.
 * - A integração de novos exames segue rigorosamente a mesma regra (Regra 5).
 */
export function resolveEffectiveExamStatus(
  examId: string,
  declaredMeta?: { homologado?: boolean; statusHomologacao?: string }
): {
  statusHomologacao: HomologationStatus;
  isHomologated: boolean;
  fonteDocumental: string;
  documentaryStatus: TextualFidelityStatus;
  faseDocumentalPendente: boolean;
} {
  const record = EXAMS_DOCUMENTARY_REGISTRY[examId];

  // Caso 1: Exame cadastrado no registro documental oficial
  if (record) {
    const isHomologated = record.isDocumentaryVerified === true && record.isHomologated === true;
    const statusHomologacao: HomologationStatus = isHomologated
      ? 'homologado'
      : declaredMeta?.statusHomologacao === 'rascunho'
      ? 'rascunho'
      : 'validacao_pendente';

    const fonteDocumental = isHomologated
      ? 'Oficial Homologado'
      : statusHomologacao === 'rascunho'
      ? 'Rascunho IA (Não Homologado)'
      : 'Validação Documental Pendente';

    return {
      statusHomologacao,
      isHomologated,
      fonteDocumental,
      documentaryStatus: record.statusDocumental,
      faseDocumentalPendente: record.faseDocumentalPendente,
    };
  }

  // Caso 2: Exame novo ou não catalogado no registro de evidências (Regra 5)
  // Segue a mesma regra estrita: sem evidência documental comprovada, JAMAIS é homologado!
  const isDraft = declaredMeta?.statusHomologacao === 'rascunho';
  return {
    statusHomologacao: isDraft ? 'rascunho' : 'validacao_pendente',
    isHomologated: false,
    fonteDocumental: isDraft ? 'Rascunho IA (Não Homologado)' : 'Validação Documental Pendente',
    documentaryStatus: 'verificacao_documental_pendente',
    faseDocumentalPendente: true,
  };
}
