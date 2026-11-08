import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuestionCard } from '../QuestionCard';
import { Question } from '../../types';

const mockQuestionME: Question = {
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
    { id: 'C', text: 'Municípios' },
  ],
  gabarito: 'A',
  explicacao: 'A União detém competência para instituir o IR (Art. 153, III da CF).',
};

const mockQuestionCE: Question = {
  id: 'q-test-ce',
  banca: 'QUADRIX',
  ano: 2025,
  orgao: 'CRC-SP',
  disciplina: 'Contabilidade Geral',
  assunto: 'Balanço Patrimonial',
  tipo: 'certo_errado',
  enunciado: 'O ativo circulante compreende as disponibilidades e os direitos realizáveis no curso do exercício social subsequente.',
  alternativas: [
    { id: 'C', text: 'CERTO' },
    { id: 'E', text: 'ERRADO' },
  ],
  gabarito: 'C',
  explicacao: 'Conforme art. 179 da Lei 6.404/76.',
};

const mockQuestionWithSharedText: Question = {
  id: 'q-test-shared',
  banca: 'VUNESP',
  ano: 2014,
  orgao: 'PMRP',
  disciplina: 'Língua Portuguesa',
  assunto: 'Interpretação de Texto',
  tipo: 'multipla_escolha',
  textoCompartilhado: {
    id: 'txt-test-01',
    title: 'TEXTO 1 - A Revolução Tecnológica',
    content: 'O avanço veloz da tecnologia transformou os meios de produção e o trabalho.',
  },
  enunciado: 'De acordo com o texto, o avanço tecnológico resultou em transformações profundas.',
  alternativas: [
    { id: 'A', text: 'Alternativa A' },
    { id: 'B', text: 'Alternativa B' },
    { id: 'C', text: 'Alternativa C' },
    { id: 'D', text: 'Alternativa D' },
    { id: 'E', text: 'Alternativa E' },
  ],
  gabarito: 'A',
  explicacao: 'Depreende-se diretamente do primeiro parágrafo.',
};

const mockQuestionWithTableAndImages: Question = {
  id: 'q-test-media',
  banca: 'FGV',
  ano: 2015,
  orgao: 'DPE-RO',
  disciplina: 'Contabilidade',
  assunto: 'Balanço Orçamentário',
  tipo: 'multipla_escolha',
  enunciado: 'Considere a tabela abaixo:\n\n| Rubrica | Valor (R$) |\n|---|---|\n| Receita Tributária | 100.000 |\n| Receita de Serviços | 50.000 |\n\nE analise a figura:\n\n![Gráfico Orçamentário](/questoes/grafico.png)',
  alternativas: [
    { id: 'A', text: '![Opção A Imagem](/questoes/opt_a.png)' },
    { id: 'B', text: 'Opção B Texto' },
  ],
  gabarito: 'A',
  explicacao: 'Balanço confere.',
};

describe('QuestionCard Component', () => {
  it('deve renderizar os dados da questão, subtópicos e alternativas corretamente', () => {
    render(
      <QuestionCard
        question={mockQuestionME}
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
        question={mockQuestionME}
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

    // 3. Botão de busca de explicação surge pós-resposta
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    const explanationBtn = screen.getByText('Buscar Explicação');
    expect(explanationBtn).toBeInTheDocument();

    fireEvent.click(explanationBtn);
    expect(handleOpenExplanation).toHaveBeenCalled();
    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining('https://www.google.com/search?q='),
      '_blank',
      'noopener,noreferrer'
    );
    openSpy.mockRestore();
  });

  it('deve permitir riscar/eliminar alternativas com o botão de tesoura', () => {
    render(
      <QuestionCard
        question={mockQuestionME}
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

  it('deve renderizar o layout dual horizontal [ CERTO ] e [ ERRADO ] para questões C/E', () => {
    const handleAnswer = vi.fn();

    render(
      <QuestionCard
        question={mockQuestionCE}
        onAnswer={handleAnswer}
        onToggleSave={vi.fn()}
        isSaved={false}
        onOpenExplanation={vi.fn()}
      />
    );

    // Badge C / E
    expect(screen.getByText('C / E')).toBeInTheDocument();

    // Dois botões lado a lado
    const certoBtn = screen.getByRole('button', { name: /certo/i });
    const erradoBtn = screen.getByRole('button', { name: /errado/i });

    expect(certoBtn).toBeInTheDocument();
    expect(erradoBtn).toBeInTheDocument();

    // Seleciona CERTO
    fireEvent.click(certoBtn);

    // Submete resposta
    const submitBtn = screen.getByText('Responder Questão');
    fireEvent.click(submitBtn);

    expect(handleAnswer).toHaveBeenCalledWith('C');
  });

  it('deve permitir selecionar ERRADO e submeter resposta em questão C/E', () => {
    const handleAnswer = vi.fn();

    render(
      <QuestionCard
        question={mockQuestionCE}
        onAnswer={handleAnswer}
        onToggleSave={vi.fn()}
        isSaved={false}
        onOpenExplanation={vi.fn()}
      />
    );

    const erradoBtn = screen.getByRole('button', { name: /errado/i });
    fireEvent.click(erradoBtn);

    const submitBtn = screen.getByText('Responder Questão');
    fireEvent.click(submitBtn);

    expect(handleAnswer).toHaveBeenCalledWith('E');
  });

  it('deve renderizar o texto compartilhado retrátil (accordion) e permitir alternar expansão', () => {
    render(
      <QuestionCard
        question={mockQuestionWithSharedText}
        onAnswer={vi.fn()}
        onToggleSave={vi.fn()}
        isSaved={false}
        onOpenExplanation={vi.fn()}
      />
    );

    // Título do texto de apoio visível
    expect(screen.getByText('TEXTO 1 - A Revolução Tecnológica')).toBeInTheDocument();

    // Conteúdo visível inicialmente
    expect(
      screen.getByText('O avanço veloz da tecnologia transformou os meios de produção e o trabalho.')
    ).toBeInTheDocument();

    // Clica no cabeçalho do accordion para recolher
    const accordionHeader = screen.getByText('TEXTO 1 - A Revolução Tecnológica').closest('button')!;
    fireEvent.click(accordionHeader);

    // Conteúdo não deve mais estar visível
    expect(
      screen.queryByText('O avanço veloz da tecnologia transformou os meios de produção e o trabalho.')
    ).not.toBeInTheDocument();

    // Clica novamente para reabrir
    fireEvent.click(accordionHeader);
    expect(
      screen.getByText('O avanço veloz da tecnologia transformou os meios de produção e o trabalho.')
    ).toBeInTheDocument();
  });

  it('deve renderizar tabelas GFM e imagens em markdown dentro do enunciado e alternativas', () => {
    render(
      <QuestionCard
        question={mockQuestionWithTableAndImages}
        onAnswer={vi.fn()}
        onToggleSave={vi.fn()}
        isSaved={false}
        onOpenExplanation={vi.fn()}
      />
    );

    // Tabela GFM
    expect(screen.getByText('Rubrica')).toBeInTheDocument();
    expect(screen.getByText('Valor (R$)')).toBeInTheDocument();
    expect(screen.getByText('Receita Tributária')).toBeInTheDocument();
    expect(screen.getByText('100.000')).toBeInTheDocument();

    // Imagem do enunciado
    const imgEnunciado = screen.getByAltText('Gráfico Orçamentário');
    expect(imgEnunciado).toBeInTheDocument();
    expect(imgEnunciado.getAttribute('src')).toBe('/questoes/grafico.png');

    // Imagem da alternativa A
    const imgAlternativa = screen.getByAltText('Opção A Imagem');
    expect(imgAlternativa).toBeInTheDocument();
    expect(imgAlternativa.getAttribute('src')).toBe('/questoes/opt_a.png');
  });
});
