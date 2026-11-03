import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PracticePage } from '../PracticePage';
import { Question } from '../../types';

const mockQuestionsList: Question[] = [
  {
    id: 'q-01',
    banca: 'FGV',
    ano: 2023,
    orgao: 'TJ-SP',
    disciplina: 'Direito Constitucional',
    assunto: 'Garantias',
    enunciado: 'Primeira questão de teste',
    alternativas: [
      { id: 'A', text: 'Opção A' },
      { id: 'B', text: 'Opção B' }
    ],
    gabarito: 'A',
    explicacao: 'Explicação 01'
  },
  {
    id: 'q-02',
    banca: 'FCC',
    ano: 2023,
    orgao: 'TRT',
    disciplina: 'Língua Portuguesa',
    assunto: 'Crase',
    enunciado: 'Segunda questão de teste',
    alternativas: [
      { id: 'A', text: 'Opção A2' },
      { id: 'B', text: 'Opção B2' }
    ],
    gabarito: 'B',
    explicacao: 'Explicação 02'
  }
];

describe('PracticePage Integration Test', () => {
  it('deve renderizar a questão, confirmar resposta e avançar para a próxima', () => {
    const handleRecordAttempt = vi.fn();
    const handleToggleSave = vi.fn();

    render(
      <PracticePage
        questions={mockQuestionsList}
        onRecordAttempt={handleRecordAttempt}
        onToggleSave={handleToggleSave}
        savedQuestionIds={[]}
      />
    );

    // Alterna para modo sequencial para garantir ordem determinística no teste
    const modeBtn = screen.getByTitle('Alternar para ordem sequencial');
    fireEvent.click(modeBtn);

    expect(screen.getByText('Primeira questão de teste')).toBeInTheDocument();
    expect(screen.getByText(/Questão 1/)).toBeInTheDocument();

    // 1. Seleciona a opção A
    const optionA = screen.getByText('Opção A').closest('button')!;
    fireEvent.click(optionA);

    // 2. Confirma a resposta
    const submitBtn = screen.getByText('Responder Questão');
    fireEvent.click(submitBtn);

    expect(handleRecordAttempt).toHaveBeenCalledWith('q-01', 'A', 6, 'practice');

    // 3. Clica em Próxima
    const nextBtn = screen.getByText('Próxima');
    fireEvent.click(nextBtn);

    // Deve carregar a segunda questão
    expect(screen.getByText('Segunda questão de teste')).toBeInTheDocument();
    expect(screen.getByText(/Questão 2/)).toBeInTheDocument();
  });
});
