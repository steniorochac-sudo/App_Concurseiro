import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  cleanQuestionTextForSearch,
  extractSearchSnippet,
  buildQuestionSearchQuery,
  buildQuestionSearchUrl,
  openQuestionSearchInGoogle,
} from '../searchExplanation';

describe('searchExplanation utils', () => {
  describe('cleanQuestionTextForSearch', () => {
    it('deve remover marcações de imagens markdown', () => {
      const raw = 'Veja a figura abaixo:\n![Gráfico Q17](/images/grafico.png)\nCom base nisso, assinale a opção correta.';
      const cleaned = cleanQuestionTextForSearch(raw);
      expect(cleaned).not.toContain('![Gráfico');
      expect(cleaned).not.toContain('/images/grafico.png');
      expect(cleaned).toBe('Veja a figura abaixo: Com base nisso, assinale a opção correta.');
    });

    it('deve remover tabelas markdown', () => {
      const raw = 'Analise a tabela:\n| Conta | Saldo |\n|---|---|\n| Caixa | 100 |\nO saldo final é:';
      const cleaned = cleanQuestionTextForSearch(raw);
      expect(cleaned).not.toContain('| Caixa |');
      expect(cleaned).toContain('Analise a tabela:');
      expect(cleaned).toContain('O saldo final é:');
    });

    it('deve normalizar quebras de linha e múltiplos espaços', () => {
      const raw = 'Texto   com    muitos\n\nespaços \t e quebras.';
      const cleaned = cleanQuestionTextForSearch(raw);
      expect(cleaned).toBe('Texto com muitos espaços e quebras.');
    });

    it('deve lidar com texto vazio ou nulo sem lançar exceção', () => {
      expect(cleanQuestionTextForSearch('')).toBe('');
      expect(cleanQuestionTextForSearch(undefined as unknown as string)).toBe('');
    });
  });

  describe('extractSearchSnippet', () => {
    it('deve extrair as primeiras 12 a 15 palavras sem cortar palavras ao meio', () => {
      const text = 'Com relação ao regime contábil adotado pelas entidades públicas conforme as normas brasileiras de contabilidade aplicadas ao setor público, assinale a afirmativa correta.';
      const snippet = extractSearchSnippet(text, 12);
      expect(snippet.split(' ').length).toBeLessThanOrEqual(13);
      expect(snippet).toBe('Com relação ao regime contábil adotado pelas entidades públicas conforme as normas');
    });

    it('deve retornar o texto inteiro se for mais curto que o limite', () => {
      const text = 'Julgue o item a seguir.';
      const snippet = extractSearchSnippet(text, 12);
      expect(snippet).toBe('Julgue o item a seguir.');
    });

    it('deve remover aspas internas do snippet para não quebrar a busca exata do Google', () => {
      const text = 'O princípio da "insignificância" aplica-se ao crime de furto simples.';
      const snippet = extractSearchSnippet(text);
      expect(snippet).not.toContain('"');
      expect(snippet).toContain('insignificância');
    });
  });

  describe('buildQuestionSearchQuery', () => {
    it('deve montar a query perfeita com banca, ano, órgão e trecho entre aspas', () => {
      const query = buildQuestionSearchQuery({
        banca: 'FGV',
        ano: 2022,
        orgao: 'DPE-RO',
        cargo: 'Analista Contábil',
        enunciado: 'Com relação ao regime contábil adotado pelas entidades públicas, assinale a opção correta.',
      });

      expect(query).toContain('FGV');
      expect(query).toContain('2022');
      expect(query).toContain('DPE-RO');
      expect(query).toMatch(/"Com relação ao regime contábil/);
    });

    it('deve funcionar quando ano ou órgão não forem informados', () => {
      const query = buildQuestionSearchQuery({
        banca: 'CEBRASPE',
        enunciado: 'Acerca dos direitos e garantias fundamentais previstos na CF/88, julgue o item subsequente.',
      });

      expect(query).toBe('CEBRASPE "Acerca dos direitos e garantias fundamentais previstos na CF/88, julgue o item"');
    });

    it('deve montar busca apenas com o trecho quando não houver metadados', () => {
      const query = buildQuestionSearchQuery({
        enunciado: 'Em relação ao direito administrativo, assinale a alternativa que apresenta um ato administrativo vinculado.',
      });

      expect(query.startsWith('"')).toBe(true);
      expect(query.endsWith('"')).toBe(true);
    });
  });

  describe('buildQuestionSearchUrl', () => {
    it('deve gerar a URL do Google codificada via encodeURIComponent', () => {
      const url = buildQuestionSearchUrl({
        banca: 'FGV',
        ano: 2022,
        enunciado: 'Julgue a questão sobre patrimônio líquido.',
      });

      expect(url.startsWith('https://www.google.com/search?q=')).toBe(true);
      expect(url).toContain(encodeURIComponent('FGV 2022 "Julgue a questão sobre patrimônio líquido."'));
    });
  });

  describe('openQuestionSearchInGoogle', () => {
    let openSpy: any;

    beforeEach(() => {
      openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    });

    afterEach(() => {
      openSpy.mockRestore();
    });

    it('deve chamar window.open com a URL gerada e flags de segurança _blank, noopener, noreferrer', () => {
      openQuestionSearchInGoogle({
        banca: 'VUNESP',
        ano: 2023,
        enunciado: 'A respeito do concurso de pessoas no direito penal brasileiro.',
      });

      expect(openSpy).toHaveBeenCalledTimes(1);
      const [url, target, features] = openSpy.mock.calls[0];
      expect(url).toContain('https://www.google.com/search?q=');
      expect(target).toBe('_blank');
      expect(features).toBe('noopener,noreferrer');
    });
  });
});
