import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuestionCard } from '../QuestionCard';
import { Question } from '../../types';

const mockQuestion: Question = {
  id: 'q-test-01',
  banca: 'FGV',
  ano: 2023,
  orgao: 'SEFAZ',
  disciplina: 'Direito Tributário',
  assunto: 'Impostos',
  subtopicos: ['Impostos Federais', 'Imposto de Renda'],
  enunciado: 'O Imposto sobre a Renda é de competência de qual ente?',
  alternativas: [
    { id: 'A', text: 'União' },
    { id: 'B', text: 'Estados' },
    { id: 'C', text: 'Municípios' }
  ],
  gabarito: 'A',
  explicacao: 'A União detém competência para instituir o IR (Art. 153, III da CF).'
};

describe('QuestionCard Component', () => {
  it('deve renderizar os dados da questão, subtópicos e alternativas corretamente', () => {
    render(
      <QuestionCard
        question={mockQuestion}
        onAnswer={vi.fn()}
        onToggleSave={vi.fn()}
        isSaved={false}
        onOpenExplanation={vi.fn()}
      />
    );

    expect(screen.getByText('FGV')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('Direito Tributário')).toBeInTheDocument();
    expect(screen.getByText('Impostos Federais')).toBeInTheDocument();
    expect(screen.getByText('O Imposto sobre a Renda é de competência de qual ente?')).toBeInTheDocument();
    expect(screen.getByText('União')).toBeInTheDocument();
    expect(screen.getByText('Estados')).toBeInTheDocument();
    expect(screen.getByText('Municípios')).toBeInTheDocument();
  });

  it('deve selecionar opção, confirmar com botão "Responder" e liberar explicação', () => {
    const handleAnswer = vi.fn();
    const handleOpenExplanation = vi.fn();

    render(
      <QuestionCard
        question={mockQuestion}
        onAnswer={handleAnswer}
        onToggleSave={vi.fn()}
        isSaved={false}
        onOpenExplanation={handleOpenExplanation}
        showInstantFeedback={true}
      />
    );

    // 1. Toca na alternativa para selecionar
    const optionBtn = screen.getByText('União').closest('button')!;
    fireEvent.click(optionBtn);
    expect(handleAnswer).not.toHaveBeenCalled();

    // 2. Clica no botão "Responder Questão"
    const submitBtn = screen.getByText('Responder Questão');
    expect(submitBtn).not.toBeDisabled();
    fireEvent.click(submitBtn);

    expect(handleAnswer).toHaveBeenCalledWith('A');

    // 3. Botão de explicação surge pós-resposta
    const explanationBtn = screen.getByText('Ver Explicação');
    expect(explanationBtn).toBeInTheDocument();

    fireEvent.click(explanationBtn);
    expect(handleOpenExplanation).toHaveBeenCalled();
  });

  it('deve permitir riscar/eliminar alternativas com o botão de tesoura', () => {
    render(
      <QuestionCard
        question={mockQuestion}
        onAnswer={vi.fn()}
        onToggleSave={vi.fn()}
        isSaved={false}
        onOpenExplanation={vi.fn()}
      />
    );

    const scissorsBtns = screen.getAllByTitle('Riscar / Eliminar alternativa');
    expect(scissorsBtns.length).toBe(3);

    // Clica para riscar a alternativa B (Estados)
    fireEvent.click(scissorsBtns[1]);

    const optionBtn = screen.getByText('Estados').closest('button')!;
    expect(optionBtn.className).toContain('line-through');
  });
});
