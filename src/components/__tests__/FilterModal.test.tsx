import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FilterModal } from '../FilterModal';

describe('FilterModal Component', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    onStartExam: vi.fn(),
    availableSubjects: ['Direito Tributário', 'Contabilidade Geral', 'Língua Portuguesa'],
    availableBoards: ['FGV', 'Fundação VUNESP', 'Instituto Quadrix', 'Instituto Mais'],
  };

  it('não deve renderizar quando isOpen for false', () => {
    const { container } = render(<FilterModal {...defaultProps} isOpen={false} />);
    expect(container.firstChild).toBeNull();
  });

  it('deve renderizar opções de disciplina, banca e formato de questão', () => {
    render(<FilterModal {...defaultProps} />);

    expect(screen.getByText('Configurar Simulado')).toBeInTheDocument();
    expect(screen.getByText('Disciplina')).toBeInTheDocument();
    expect(screen.getByText('Banca Examinadora')).toBeInTheDocument();
    expect(screen.getByText('Formato de Questão')).toBeInTheDocument();

    // Opções de formato
    expect(screen.getByRole('option', { name: 'Todos os Formatos' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Certo / Errado (C/E)' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Múltipla Escolha (4 ou 5 Opções)' })).toBeInTheDocument();
  });

  it('deve submeter o simulado com o formato Certo / Errado selecionado', () => {
    const handleStartExam = vi.fn();
    render(<FilterModal {...defaultProps} onStartExam={handleStartExam} />);

    // Seleciona formato C/E
    const formatSelect = screen.getAllByRole('combobox')[2]; // 3º select é formato
    fireEvent.change(formatSelect, { target: { value: 'certo_errado' } });

    // Seleciona 10 questões
    const btn10 = screen.getByText('10 questões');
    fireEvent.click(btn10);

    // Clica no botão iniciar
    const startBtn = screen.getByRole('button', { name: /iniciar simulado/i });
    fireEvent.click(startBtn);

    expect(handleStartExam).toHaveBeenCalledWith(
      expect.objectContaining({
        formato: 'certo_errado',
        totalQuestions: 10,
      })
    );
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
