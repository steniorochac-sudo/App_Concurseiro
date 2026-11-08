import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ImportModal } from '../ImportModal';

describe('ImportModal Component', () => {
  const mockOnImport = vi.fn().mockReturnValue({ added: 2, total: 2 });
  const mockOnImportExamDocument = vi.fn().mockReturnValue({ added: 2, updated: 0, total: 2 });
  const mockOnExport = vi.fn();
  const mockOnClearAll = vi.fn();
  const mockOnResetFactory = vi.fn();
  const mockOnLoadPreloadedExam = vi.fn().mockReturnValue(10);
  const mockOnLoadAllPreloadedExams = vi.fn().mockReturnValue(50);

  beforeEach(() => {
    vi.clearAllMocks();
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  const renderComponent = () =>
    render(
      <ImportModal
        onImport={mockOnImport}
        onImportExamDocument={mockOnImportExamDocument}
        onExport={mockOnExport}
        onClearAll={mockOnClearAll}
        onResetFactory={mockOnResetFactory}
        onLoadPreloadedExam={mockOnLoadPreloadedExam}
        onLoadAllPreloadedExams={mockOnLoadAllPreloadedExams}
        totalQuestions={0}
      />
    );

  it('deve exibir o cabeçalho e a seção do Prompt Mestre para IA', () => {
    renderComponent();
    expect(screen.getByText(/Central de Provas & IA/i)).toBeInTheDocument();
    expect(screen.getByText(/Copiar Prompt Mestre/i)).toBeInTheDocument();
  });

  it('deve copiar o prompt mestre para a área de transferência ao clicar no botão', async () => {
    renderComponent();
    const copyBtn = screen.getByText(/Copiar Prompt Mestre/i);
    fireEvent.click(copyBtn);

    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      expect.stringContaining('FIDELIDADE ABSOLUTA')
    );

    await waitFor(() => {
      expect(screen.getByText(/Copiado com Sucesso!/i)).toBeInTheDocument();
    });
  });

  it('deve permitir colar o JSON da IA no campo de texto e importar com sucesso', async () => {
    renderComponent();

    const rawAiJson = `
Aqui está o seu JSON:
\`\`\`json
{
  "versao": "2.0",
  "prova": {
    "id": "concurso_teste_2024",
    "titulo": "Concurso de Teste 2024",
    "banca": "FGV",
    "ano": 2024,
    "orgao": "TJ",
    "cargo": "Analista"
  },
  "questoes": [
    {
      "numeroOriginal": 1,
      "enunciado": "Primeira questão de teste",
      "alternativas": [
        { "id": "A", "text": "Opção A" },
        { "id": "B", "text": "Opção B" }
      ],
      "gabaritoOficial": "A"
    }
  ]
}
\`\`\`
    `;

    const textarea = screen.getByPlaceholderText(/Cole aqui a resposta da IA/i);
    fireEvent.change(textarea, { target: { value: rawAiJson } });

    const submitBtn = screen.getByText(/Validar e Carregar Simulado/i);
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockOnImportExamDocument).toHaveBeenCalledTimes(1);
      expect(screen.getByText(/Sucesso! Prova importada/i)).toBeInTheDocument();
    });
  });

  it('deve exibir mensagem de erro amigável se o usuário colar um texto inválido ou cortado', async () => {
    renderComponent();

    const brokenText = '```json\n{ "erro_de_sintaxe": \n```';
    const textarea = screen.getByPlaceholderText(/Cole aqui a resposta da IA/i);
    fireEvent.change(textarea, { target: { value: brokenText } });

    const submitBtn = screen.getByText(/Validar e Carregar Simulado/i);
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Sintaxe JSON inválida/i)).toBeInTheDocument();
      expect(mockOnImportExamDocument).not.toHaveBeenCalled();
    });
  });

  it('deve permitir carregar a prova demonstrativa de degustação', () => {
    renderComponent();

    const demoBtn = screen.getByText(/Carregar Prova Demonstrativa/i);
    fireEvent.click(demoBtn);

    expect(mockOnLoadPreloadedExam).toHaveBeenCalled();
  });
});
