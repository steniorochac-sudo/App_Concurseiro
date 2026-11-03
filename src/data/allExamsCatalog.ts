// Catálogo completo de todas as 26 provas reais para carregamento em 1 clique no celular
import { Question } from '../types';

export interface PreloadedExam {
  id: string;
  filename: string;
  title: string;
  banca: string;
  ano: number;
  orgao: string;
  totalQuestions: number;
  questions: Question[];
}

export const PRELOADED_EXAMS: PreloadedExam[] = [
  {
    "id": "analista_contabil",
    "filename": "analista_contabil.json",
    "title": "Analista Contábil",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "q-analista_contabil-01",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Morfologia",
          "Tempos e Modos Verbais",
          "Gêneros Textuais"
        ],
        "enunciado": "1. **Texto para os itens de 1 a 20.**\n\n**Polícia de SP investiga se contador morto a tiros, sem reagir, foi vítima de latrocínio ou execução; veja vídeo**\n\n  A Polícia Civil investiga se um contador morto a tiros, sem reagir, foi vítima de latrocínio ou execução na Zona Sul de São Paulo. O caso ocorreu na manhã da última quarta-feira (29) em frente a empresa de contabilidade onde ele trabalhava, e foi gravado por câmeras de segurança (veja vídeo abaixo; as cenas são fortes).\n  José Horley de Sousa tinha 36 anos e foi baleado quando estava dentro de seu carro, estacionado na Rua Coronel Francisco Inácio, na região do Sacomã. Ele ainda chegou a ser socorrido e levado ao Hospital Heliópolis, onde não resistiu aos ferimentos e morreu.\n  O criminoso é um motociclista, que fugiu após roubar o relógio e a carteira do contador e atirar ao menos quatro vezes nele.\n  Imagens gravadas por câmeras de segurança, e que circulam nas redes sociais, mostram que José não reagiu ao assalto. As cenas mostram que o carro, um Chevrolet Cruize vermelho, está parado na rua, quando um homem numa moto sobe a calçada se aproxima e aponta a arma para o veículo, que estava com os vidros escuros fechados.\n  No vídeo, feito por duas câmeras, ainda é possível ver o contador abrir a porta e entregar os pertences ao criminoso, que atira diversas vezes no motorista.\n  O bandido, que usa mochila e capacete, foge em seguida na sua motocicleta.\n  O caso foi registrado inicialmente como latrocínio, que é o roubo seguido de morte, no 95º Distrito Policial (DP), Cohab-Heliópolis.\n  Mas segundo o delegado que investiga a morte do contador e tenta identificar o criminoso, também está sendo apurada a possibilidade de José ter sido vítima de uma execução.\n  “O caso foi inicialmente registrado como latrocínio, mas a possibilidade de homicídio também é investigada. Estamos trabalhando com as duas vertentes”, afirmou à reportagem o delegado Carlos Miranda. De acordo com a investigação, a moto do criminoso não era roubada, mas estaria usando placa clonada. O celular do contador e um comprovante de transação bancária, no valor de R$ 50 mil, que estavam no automóvel da vítima, foram apreendidos pela polícia.\n  Além de analisar as imagens das câmeras de vídeo, que gravaram a morte do contador, a investigação quer ouvir o depoimento de testemunhas.\n\n*Internet: <www.g1.globo.com> (com adaptações).*\n\n---\n\nCom base no texto, julgue o item a seguir.\n\nNo título, o emprego do presente do indicativo, “investiga”, aponta para fato ocorrido no passado, como em geral acontece em notícias.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 1 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-02",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Morfologia",
          "Modo Imperativo",
          "Funções da Linguagem"
        ],
        "enunciado": "2. Com base no texto, julgue o item a seguir.\n\nNo título, a forma “veja”, por estar no imperativo, indica possibilidade de interatividade com o leitor.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 2 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-03",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Morfossintaxe",
          "Funções do Se",
          "Conjunções"
        ],
        "enunciado": "3. Com base no texto, julgue o item a seguir.\n\nA palavra “se”, no trecho “se um contador morto a tiros, sem reagir, foi vítima de latrocínio ou execução na Zona Sul de São Paulo”, atua como um pronome reflexivo.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 3 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-04",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Ortografia",
          "Crase"
        ],
        "enunciado": "4. Com base no texto, julgue o item a seguir.\n\nNo trecho “em frente a empresa de contabilidade onde ele trabalhava”, é obrigatório o uso do acento indicativo de crase em “em frente a”.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 4 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-05",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Pontuação",
          "Compreensão e Interpretação de Texto"
        ],
        "enunciado": "5. Com base no texto, julgue o item a seguir.\n\nNo primeiro parágrafo, a passagem “(veja vídeo abaixo; as cenas são fortes)” aparece entre parênteses por se tratar de comentário do veículo de comunicação julgando os fatos relatados.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 5 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-06",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sintaxe do Período Composto",
          "Orações Subordinadas Adverbiais"
        ],
        "enunciado": "6. Com base no texto, julgue o item a seguir.\n\nA oração “quando estava dentro de seu carro” classifica-se como subordinada adverbial temporal.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 6 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-07",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sintaxe",
          "Transitividade Verbal"
        ],
        "enunciado": "7. Com base no texto, julgue o item a seguir.\n\nO verbo “morrer”, em “onde não resistiu aos ferimentos e morreu”, é intransitivo.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 7 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-08",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Coesão e Coerência",
          "Pronomes"
        ],
        "enunciado": "8. Com base no texto, julgue o item a seguir.\n\nNo trecho “O criminoso é um motociclista, que fugiu após roubar o relógio e a carteira do contador e atirar ao menos quatro vezes nele”, o pronome em “nele” refere-se ao contador alvo da notícia.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 8 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-09",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sintaxe do Período Composto",
          "Orações Subordinadas Substantivas"
        ],
        "enunciado": "9. Com base no texto, julgue o item a seguir.\n\nNo período “Imagens gravadas por câmeras de segurança, e que circulam nas redes sociais, mostram que José não reagiu ao assalto”, por modificar a forma verbal “mostram”, a oração “que José não reagiu ao assalto” é adverbial.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 9 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-10",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sintaxe dos Termos da Oração",
          "Aposto"
        ],
        "enunciado": "10. Com base no texto, julgue o item a seguir.\n\nNo trecho “As cenas mostram que o carro, um Chevrolet Cruize vermelho, está parado na rua”, o termo “um Chevrolet Cruize vermelho” ajuda a explicar o termo “carro”, funcionando como adjunto adnominal.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 10 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-11",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Morfologia",
          "Tempos e Modos Verbais",
          "Presente Histórico"
        ],
        "enunciado": "11. Com base no texto, julgue o item a seguir.\n\nO emprego do presente do indicativo na passagem “quando um homem numa moto sobe a calçada se aproxima e aponta a arma para o veículo” caracteriza-se pelo uso como presente narrativo (ou histórico).",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 11 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-12",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Morfossintaxe",
          "Classes de Palavras",
          "Adjetivo"
        ],
        "enunciado": "12. No trecho “os vidros escuros fechados”, os dois adjuntos adnominais ligados ao substantivo diferenciam-se pela natureza: um indica uma característica duradoura, enquanto o outro indica uma característica transitória.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 12 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-13",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sintaxe do Período Composto",
          "Orações Subordinadas Adjetivas"
        ],
        "enunciado": "13. No período “No vídeo, feito por duas câmeras, ainda é possível ver o contador abrir a porta e entregar os pertences ao criminoso, que atira diversas vezes no motorista.”, a oração “que atira diversas vezes no motorista”, por caracterizar “criminoso”, funciona como subordinada adjetiva.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 13 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-14",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Regência Verbal",
          "Crase"
        ],
        "enunciado": "14. Para se atender à regência de “em seguida”, no trecho “foge em seguida na sua motocicleta”, a forma “na” deveria ser substituída por “à”.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 14 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-15",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sintaxe dos Termos da Oração",
          "Predicativo do Sujeito"
        ],
        "enunciado": "15. No período “O caso foi registrado inicialmente como latrocínio, que é o roubo seguido de morte, no 95º Distrito Policial (DP), Cohab-Heliópolis.”, o termo “como latrocínio”, por ser o predicativo do sujeito, não poderia ser preposicionado.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 15 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-16",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sintaxe dos Termos da Oração",
          "Complemento Nominal e Adjunto Adnominal"
        ],
        "enunciado": "16. Na estruturação sintática do sintagma “a morte do contador”, observa-se que o termo preposicionado representa a ação implícita na ideia do substantivo “morte”.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 16 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-17",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sintaxe dos Termos da Oração",
          "Vozes Verbais",
          "Sujeito Passivo"
        ],
        "enunciado": "17. No trecho “também está sendo apurada a possibilidade de José ter sido vítima de uma execução”, o substantivo “possibilidade” atua como objeto direto de “está sendo apurada”.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 17 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-18",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Interpretação de Texto",
          "Coesão e Coerência"
        ],
        "enunciado": "18. No trecho “Estamos trabalhando com as duas vertentes”, as duas vertentes referem-se a: latrocínio e homicídio.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 18 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-19",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Concordância Verbal e Nominal"
        ],
        "enunciado": "19. No trecho “ O celular do contador e um comprovante de transação bancária, no valor de R$ 50 mil, que estavam no automóvel da vítima, foram apreendidos pela polícia.”, o termo “apreendidos” concorda tanto com “contador” quanto com “comprovante”.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 19 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-20",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Figuras de Linguagem",
          "Personificação"
        ],
        "enunciado": "20. No período “Além de analisar as imagens das câmeras de vídeo, que gravaram a morte do contador, a investigação quer ouvir o depoimento de testemunhas.”, o termo “investigação” passa por um processo de personificação, como é típico em contextos como o apresentado no texto.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 20 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-21",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lógica de Proposições",
          "Implicação Lógica"
        ],
        "enunciado": "21. Um escritório jurídico especializado em causas cíveis possui três advogados: Dr. Andrade; Dra. Barros; e Dr. Costa. Para otimizar o trabalho, os processos são distribuídos entre eles, de acordo com as seguintes regras lógicas.\n\nI Se um processo envolve direito do consumidor, então ou dr. Andrade ou dra. Barros deverá atendê-lo.\nII Se um processo não envolve contratos, então dr. Costa não deverá atendê-lo.\nIII Se dra. Barros atende um processo, então ele não envolverá direito de família.\n\nCom base nessa situação hipotética e considerando essas regras, julgue os itens a seguir.\n\nSe um processo envolve direito do consumidor e direito de família, então o dr. Andrade deverá atendê-lo.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 21 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-22",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lógica de Proposições",
          "Equivalências Lógicas"
        ],
        "enunciado": "22. Um escritório jurídico especializado em causas cíveis possui três advogados: Dr. Andrade; Dra. Barros; e Dr. Costa. Para otimizar o trabalho, os processos são distribuídos entre eles, de acordo com as seguintes regras lógicas.\n\nI Se um processo envolve direito do consumidor, então ou dr. Andrade ou dra. Barros deverá atendê-lo.\nII Se um processo não envolve contratos, então dr. Costa não deverá atendê-lo.\nIII Se dra. Barros atende um processo, então ele não envolverá direito de família.\n\nCom base nessa situação hipotética e considerando essas regras, julgue os itens a seguir.\n\nSe um processo é atendido pelo dr. Costa, então ele envolverá contratos.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 22 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-23",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lógica de Proposições",
          "Negação e Implicação Lógica"
        ],
        "enunciado": "23. Um escritório jurídico especializado em causas cíveis possui três advogados: Dr. Andrade; Dra. Barros; e Dr. Costa. Para otimizar o trabalho, os processos são distribuídos entre eles, de acordo com as seguintes regras lógicas.\n\nI Se um processo envolve direito do consumidor, então ou dr. Andrade ou dra. Barros deverá atendê-lo.\nII Se um processo não envolve contratos, então dr. Costa não deverá atendê-lo.\nIII Se dra. Barros atende um processo, então ele não envolverá direito de família.\n\nCom base nessa situação hipotética e considerando essas regras, julgue os itens a seguir.\n\nSe um processo não é atendido pela dra. Barros, então ele envolverá direito de família.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 23 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-24",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Porcentagem",
          "Problemas Aritméticos"
        ],
        "enunciado": "24. Um advogado especializado em direito civil está analisando as estatísticas de seus processos nos últimos 3 anos. Ele observou que:\n\n• 40% dos processos são relacionados a direito de família;\n• 30% dos processos são relacionados a direito imobiliário;\n• 20% dos processos são relacionados a direito do consumidor; e\n• Os 10% restantes são de outras áreas.\n\nEm um levantamento sobre o tempo médio de duração (em meses) desses processos, ele obteve os seguintes dados:\n\n• direito de família: 15 meses;\n• direito imobiliário: 24 meses;\n• direito do consumidor: 12 meses; e\n• outras áreas: 18 meses.\n\nCom base nessa situação hipotética e nessas informações, julgue os itens seguintes.\n\nSe o advogado atendeu 200 processos nos últimos 3 anos, então o número de processos de direito imobiliário foi igual a 60.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 24 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-25",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Probabilidade"
        ],
        "enunciado": "25. Um advogado especializado em direito civil está analisando as estatísticas de seus processos nos últimos 3 anos. Ele observou que:\n\n• 40% dos processos são relacionados a direito de família;\n• 30% dos processos são relacionados a direito imobiliário;\n• 20% dos processos são relacionados a direito do consumidor; e\n• Os 10% restantes são de outras áreas.\n\nEm um levantamento sobre o tempo médio de duração (em meses) desses processos, ele obteve os seguintes dados:\n\n• direito de família: 15 meses;\n• direito imobiliário: 24 meses;\n• direito do consumidor: 12 meses; e\n• outras áreas: 18 meses.\n\nCom base nessa situação hipotética e nessas informações, julgue os itens seguintes.\n\nEscolhendo aleatoriamente um processo dos últimos 3 anos, se ele nem é de direito de família, nem de direito imobiliário, então a probabilidade de ser de direito do consumidor será maior que 50%.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 25 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-26",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Média Ponderada",
          "Matemática Financeira"
        ],
        "enunciado": "26. Um advogado especializado em direito civil está analisando as estatísticas de seus processos nos últimos 3 anos. Ele observou que:\n\n• 40% dos processos são relacionados a direito de família;\n• 30% dos processos são relacionados a direito imobiliário;\n• 20% dos processos são relacionados a direito do consumidor; e\n• Os 10% restantes são de outras áreas.\n\nEm um levantamento sobre o tempo médio de duração (em meses) desses processos, ele obteve os seguintes dados:\n\n• direito de família: 15 meses;\n• direito imobiliário: 24 meses;\n• direito do consumidor: 12 meses; e\n• outras áreas: 18 meses.\n\nCom base nessa situação hipotética e nessas informações, julgue os itens seguintes.\n\nSe o advogado cobrou, em média, R$ 3.000 por processo de direito de família, R$ 5.000 por processo de direito imobiliário, R$ 2.500 por processo de direito do consumidor e R$ 4.000 pelos demais, então seu faturamento médio por processo foi maior que R$ 3.800.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 26 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-27",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Estatística",
          "Mediana"
        ],
        "enunciado": "27. Um escritório de advocacia está analisando o tempo gasto em diferentes tipos de processos judiciais. Para um estudo estatístico, eles coletaram os tempos (em meses) para a conclusão de 10 processos similares, obtendo-se a seguinte amostra: 8, 12, 9, 15, 10, 8, 11, 14, 10, 13.\n\nCom base nessa situação hipotética, julgue os itens a seguir.\n\nA mediana do tempo de conclusão desses processos é igual a 10,5 meses.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 27 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-28",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Probabilidade",
          "Estatística"
        ],
        "enunciado": "28. Um escritório de advocacia está analisando o tempo gasto em diferentes tipos de processos judiciais. Para um estudo estatístico, eles coletaram os tempos (em meses) para a conclusão de 10 processos similares, obtendo-se a seguinte amostra: 8, 12, 9, 15, 10, 8, 11, 14, 10, 13.\n\nCom base nessa situação hipotética, julgue os itens a seguir.\n\nA probabilidade de selecionar aleatoriamente um processo dessa amostra cujo tempo de conclusão seja maior que 10 meses é de 50%.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 28 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-29",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Estatística",
          "Média Aritmética"
        ],
        "enunciado": "29. Um escritório de advocacia está analisando o tempo gasto em diferentes tipos de processos judiciais. Para um estudo estatístico, eles coletaram os tempos (em meses) para a conclusão de 10 processos similares, obtendo-se a seguinte amostra: 8, 12, 9, 15, 10, 8, 11, 14, 10, 13.\n\nCom base nessa situação hipotética, julgue os itens a seguir.\n\nSe for adicionado um novo processo à amostra e a média passar a ser 12 meses, então o tempo de conclusão desse novo processo foi inferior a 20 meses.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 29 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-30",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Estatística",
          "Média e Desvio Padrão",
          "Propriedades das Medidas de Dispersão"
        ],
        "enunciado": "30. Um escritório de advocacia está analisando o tempo gasto em diferentes tipos de processos judiciais. Para um estudo estatístico, eles coletaram os tempos (em meses) para a conclusão de 10 processos similares, obtendo-se a seguinte amostra: 8, 12, 9, 15, 10, 8, 11, 14, 10, 13.\n\nCom base nessa situação hipotética, julgue os itens a seguir.\n\nSe, a todos os valores da amostra, forem somados 2 meses, então a nova média da amostra será alterada para 2 meses a mais, e o desvio padrão não será alterado.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 30 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-31",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Hardware",
          "Redes de Computadores",
          "Servidores"
        ],
        "enunciado": "31. Existem diversos tipos de computadores (_laptop_, _notebook_, _desktop_, servidor etc.). Com base nessa informação, julgue o item a seguir.\n\nUm computador do tipo servidor pode ser utilizado em escritórios de advocacia para centralizar arquivos e facilitar o compartilhamento seguro de documentos entre os colaboradores.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 31 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-32",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sistemas Operacionais",
          "Software e Hardware"
        ],
        "enunciado": "32. Existem diversos tipos de computadores (_laptop_, _notebook_, _desktop_, servidor etc.). Com base nessa informação, julgue o item a seguir.\n\nO sistema operacional é um tipo de _software_ que atua como intermediário entre o _hardware_ e os programas de aplicação utilizados pelo usuário.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 32 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-33",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Microsoft Office",
          "Microsoft Word",
          "Controle de Alterações"
        ],
        "enunciado": "33. Os aplicativos de escritório (Word, Excel e PowerPoint) são ferramentas de produtividade fundamentais para um advogado. Com base nessa informação, julgue o item seguinte.\n\nO Microsoft Word, parte do Office 365, permite o uso de controle de alterações, ferramenta essencial para revisar e compartilhar petições ou contratos entre advogados e clientes.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 33 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-34",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Microsoft Office",
          "Microsoft Word",
          "Comentários"
        ],
        "enunciado": "34. Os aplicativos de escritório (Word, Excel e PowerPoint) são ferramentas de produtividade fundamentais para um advogado. Com base nessa informação, julgue o item seguinte.\n\nO Microsoft Word não permite a inserção de comentários em documentos, o que limita sua utilidade para revisão de contratos jurídicos.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 34 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-35",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Microsoft Office",
          "Microsoft Word",
          "Comentários e Revisão Colaborativa"
        ],
        "enunciado": "35. Os aplicativos de escritório (Word, Excel e PowerPoint) são ferramentas de produtividade fundamentais para um advogado. Com base nessa informação, julgue o item seguinte.\n\nO Word possui uma funcionalidade robusta de inserção de comentários, essencial para revisões colaborativas de contratos, petições e pareceres jurídicos.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 35 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-36",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Internet",
          "Mecanismos de Busca",
          "Google"
        ],
        "enunciado": "36. A Internet é uma poderosa ferramenta de consultas para os advogados. Com base nessa informação, julgue o item a seguir.\n\nO uso de aspas (“”) nas pesquisas no Google aumenta a quantidade de resultados e torna a pesquisa mais ampla.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 36 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-37",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Internet",
          "Mecanismos de Busca",
          "Operadores de Busca"
        ],
        "enunciado": "37. A Internet é uma poderosa ferramenta de consultas para os advogados. Com base nessa informação, julgue o item a seguir.\n\nAdvogados podem utilizar operadores como “_site:_” para restringir pesquisas a domínios jurídicos específicos, como tribunais ou órgãos públicos.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 37 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-38",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Armazenamento em Nuvem",
          "Segurança da Informação"
        ],
        "enunciado": "38. Um escritório de advocacia uma gera muitos documentos e a organização deles é fundamental para poder localizá-los com rapidez e segurança. Com base nessa informação, julgue o item seguinte.\n\nArmazenar cópias de arquivos em nuvem, como no OneDrive ou Google Drive, aumenta a segurança e a acessibilidade dos documentos jurídicos.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 38 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-39",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sistemas Operacionais",
          "Gestão de Programas"
        ],
        "enunciado": "39. Um escritório de advocacia uma gera muitos documentos e a organização deles é fundamental para poder localizá-los com rapidez e segurança. Com base nessa informação, julgue o item seguinte.\n\nTodos os programas instalados no computador do advogado devem ser removidos automaticamente após 30 dias, para evitar acúmulo.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 39 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-40",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Segurança da Informação",
          "Gerenciamento de Senhas",
          "Navegadores"
        ],
        "enunciado": "40. A segurança de informação é um esforço contínuo de todos os envolvidos. Com base nessa informação, julgue o item a seguir.\n\nSalvar senhas de acesso a sistemas jurídicos no navegador é uma prática recomendada para facilitar o uso diário.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 40 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-41",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Ética no Serviço Público",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
          "Decreto nº 1.171/1994"
        ],
        "enunciado": "41. Considerando as normas estabelecidas no Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal – Decreto nº 1.171/1994 –, julgue o item a seguir.\n\nA função pública deve ser tida como exercício profissional e, portanto, integra-se à vida particular de cada servidor público. Nesse contexto, é correto afirmar que a embriaguez, mesmo que fortuita e involuntária, constitui falta funcional e representa violação ao Código de Ética.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 41 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-42",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Ética no Serviço Público",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
          "Decreto nº 1.171/1994"
        ],
        "enunciado": "42. Considerando as normas estabelecidas no Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal – Decreto nº 1.171/1994 –, julgue o item a seguir.\n\nEstão sujeitos às disposições do Código de Ética todos aqueles que prestem serviços de natureza permanente, mediante retribuição financeira, excluindo-se, portanto, aqueles que possuam vínculo temporário e sem retribuição financeira.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 42 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-43",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Improbidade Administrativa",
          "Lei nº 8.429/1992"
        ],
        "enunciado": "43. Segundo a Lei nº 8.429/1992, que trata das sanções aplicáveis em virtude da prática de atos de improbidade administrativa, julgue o item seguinte.\n\nA conduta culposa do agente público não é suficiente para caracterizar o ato de improbidade administrativa que importe em enriquecimento ilícito, sendo indispensável a presença do dolo.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 43 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-44",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Improbidade Administrativa",
          "Lei nº 8.429/1992"
        ],
        "enunciado": "44. Segundo a Lei nº 8.429/1992, que trata das sanções aplicáveis em virtude da prática de atos de improbidade administrativa, julgue o item seguinte.\n\nA pena de suspensão dos direitos políticos é aplicada ao agente público, em razão de seu vínculo com a Administração Pública, não se estendendo ao terceiro que, com ele, concorreu para a prática do ato de improbidade.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 44 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-45",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Improbidade Administrativa",
          "Lei nº 8.429/1992"
        ],
        "enunciado": "45. Segundo a Lei nº 8.429/1992, que trata das sanções aplicáveis em virtude da prática de atos de improbidade administrativa, julgue o item seguinte.\n\nA correção monetária e os juros de mora da pena de multa civil devem incidir desde a data do ato de improbidade administrativa.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 45 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-46",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Improbidade Administrativa",
          "Lei nº 8.429/1992"
        ],
        "enunciado": "46. Segundo a Lei nº 8.429/1992, que trata das sanções aplicáveis em virtude da prática de atos de improbidade administrativa, julgue o item seguinte.\n\nA contratação de servidores públicos temporários sem a realização de concurso público, ainda que amparada por legislação local, constitui ato de improbidade administrativa que atenta contra os princípios da Administração Pública.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 46 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-47",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Improbidade Administrativa",
          "Lei nº 8.429/1992"
        ],
        "enunciado": "47. Segundo a Lei nº 8.429/1992, que trata das sanções aplicáveis em virtude da prática de atos de improbidade administrativa, julgue o item seguinte.\n\nA ação de improbidade administrativa somente deve ser recebida pelo juiz quando houver elementos concretos que indiquem a presença de dolo específico por parte do agente e a existência de prejuízo ao erário.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 47 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-48",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Processo Administrativo",
          "Lei nº 9.784/1999"
        ],
        "enunciado": "48. À luz da Lei nº 9.784/1999, que regula o processo administrativo no âmbito da Administração Pública Federal, julgue o item a seguir.\n\nOs prazos fixados em meses ou anos contam-se de data a data. Se, no mês do vencimento, não houver o dia equivalente àquele do início do prazo, tem-se como termo o último dia do mês.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 48 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-49",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Processo Administrativo",
          "Lei nº 9.784/1999",
          "Princípio da Autotutela"
        ],
        "enunciado": "49. À luz da Lei nº 9.784/1999, que regula o processo administrativo no âmbito da Administração Pública Federal, julgue o item a seguir.\n\nCaso a Administração identifique que um ato ilegal gerou efeitos favoráveis para os destinatários, poderá, com base no princípio da autotutela, revogá-lo, no prazo decadencial de cinco anos, respeitando-se, contudo, os direitos adquiridos pelos interessados de boa-fé.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 49 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-50",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei Geral de Proteção de Dados Pessoais (LGPD)",
          "Lei nº 13.709/2018"
        ],
        "enunciado": "50. No que diz respeito à Lei nº 13.709/2018, que trata da proteção de dados pessoais, julgue o item seguinte.\n\nO princípio da adequação consiste na compatibilidade do tratamento de dados com as finalidades informadas ao titular, de acordo com o contexto do tratamento.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 50 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-51",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei Geral de Proteção de Dados Pessoais (LGPD)",
          "Lei nº 13.709/2018"
        ],
        "enunciado": "51. No que diz respeito à Lei nº 13.709/2018, que trata da proteção de dados pessoais, julgue o item seguinte.\n\nO tratamento de dados pessoais sensíveis poderá ocorrer, sem o consentimento do titular, quando for indispensável para a proteção da vida ou da incolumidade física do titular ou de terceiro.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 51 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-52",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei Anticorrupção",
          "Lei nº 12.846/2013"
        ],
        "enunciado": "52. Quanto à Lei nº 12.846/2013, que trata a respeito da responsabilização administrativa e civil de pessoas jurídicas pela prática de atos contra a Administração Pública, julgue o item a seguir.\n\nNa esfera administrativa, a responsabilidade da pessoa jurídica não afasta a possibilidade de sua responsabilização na esfera judicial.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 52 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-53",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei Anticorrupção",
          "Lei nº 12.846/2013",
          "Acordo de Leniência"
        ],
        "enunciado": "53. Quanto à Lei nº 12.846/2013, que trata a respeito da responsabilização administrativa e civil de pessoas jurídicas pela prática de atos contra a Administração Pública, julgue o item a seguir.\n\nOs efeitos do acordo de leniência serão estendidos às pessoas jurídicas que integram o mesmo grupo econômico, de fato e de direito, desde que firmem o acordo em conjunto, respeitadas as condições nele estabelecidas.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 53 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-54",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei Anticorrupção",
          "Lei nº 12.846/2013",
          "Acordo de Leniência"
        ],
        "enunciado": "54. Quanto à Lei nº 12.846/2013, que trata a respeito da responsabilização administrativa e civil de pessoas jurídicas pela prática de atos contra a Administração Pública, julgue o item a seguir.\n\nA celebração do acordo de leniência pelo agente infrator elide a condenação judicial por danos morais coletivos.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 54 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-55",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei Anticorrupção",
          "Lei nº 12.846/2013",
          "Acordo de Leniência"
        ],
        "enunciado": "55. Quanto à Lei nº 12.846/2013, que trata a respeito da responsabilização administrativa e civil de pessoas jurídicas pela prática de atos contra a Administração Pública, julgue o item a seguir.\n\nO Ministério Público Federal é o órgão competente para celebrar os acordos de leniência no âmbito do Poder Executivo federal.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 55 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-56",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação Específica",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Conselho Federal de Contabilidade",
          "Decreto-Lei nº 9.295/1946"
        ],
        "enunciado": "56. De acordo com o Decreto-Lei nº 9.295/1946, que cria o Conselho Federal de Contabilidade e prerrogativas dos Conselhos Regionais de Contabilidade (CRCs), julgue o item a seguir.\n\nCompete ao Conselho Federal de Contabilidade (CFC) aprovar os regimentos internos organizados pelos Conselhos Regionais, modificando o que se tornar necessário, a fim de manter a respectiva unidade de ação.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 56 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-57",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação Específica",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Conselho Federal de Contabilidade",
          "Decreto-Lei nº 9.295/1946"
        ],
        "enunciado": "57. De acordo com o Decreto-Lei nº 9.295/1946, que cria o Conselho Federal de Contabilidade e prerrogativas dos Conselhos Regionais de Contabilidade (CRCs), julgue o item a seguir.\n\nA carteira profissional, visada pelo presidente do CFC, servirá como documento de identidade e terá fé pública.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 57 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-58",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação Específica",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Decreto-Lei nº 9.295/1946",
          "Penalidades e Infrações"
        ],
        "enunciado": "58. A falta de pagamento de multa devidamente confirmada importará, decorridos 30 dias da notificação, em suspensão, por 90 dias, do profissional ou da organização que, nela, tiver incorrido.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 58 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-59",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação Específica",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Decreto-Lei nº 9.295/1946",
          "Processo Administrativo e Recursos"
        ],
        "enunciado": "59. O recurso contra decisões do CRC que aplicarem pena de multa será dirigido ao CFC e terá efeito suspensivo.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 59 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-60",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação Específica",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Decreto-Lei nº 9.295/1946",
          "Registro Profissional e Anuidades"
        ],
        "enunciado": "60. As empresas que atuam no ramo de serviços contábeis devem se registrar e pagar anuidade ao CFC.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 60 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-61",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação e Ética Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Resolução CFC nº 1.523/2017",
          "Código de Conduta dos Conselheiros, Colaboradores e Funcionários"
        ],
        "enunciado": "61. Quanto ao estabelecido na Resolução CFC nº 1.523/2017, que versa a respeito do Código de Conduta dos Conselheiros, Colaboradores e Funcionários, julgue o item seguinte.\n\nSegundo o Código de Conduta, a censura ética é o documento que explicita os comportamentos considerados inaceitáveis, bem como as medidas a serem adotadas para assegurar o cumprimento do referido código, indicando a conduta apropriada no ambiente de trabalho.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 61 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-62",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação e Ética Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Resolução CFC nº 1.523/2017",
          "Comissão de Conduta"
        ],
        "enunciado": "62. Quanto ao estabelecido na Resolução CFC nº 1.523/2017, que versa a respeito do Código de Conduta dos Conselheiros, Colaboradores e Funcionários, julgue o item seguinte.\n\nA comissão de conduta instituída para apuração de infração cometida por conselheiro do Sistema CFC/CRCs será composta de três conselheiros do CFC e dos respectivos substitutos.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 62 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-63",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação e Ética Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Resolução CFC nº 1.523/2017",
          "Comissão de Conduta"
        ],
        "enunciado": "63. Quanto ao estabelecido na Resolução CFC nº 1.523/2017, que versa a respeito do Código de Conduta dos Conselheiros, Colaboradores e Funcionários, julgue o item seguinte.\n\nOs integrantes das comissões de conduta terão mandato de três anos, sendo vedada a recondução.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 63 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-64",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação e Ética Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Resolução CFC nº 1.523/2017",
          "Comissão de Conduta"
        ],
        "enunciado": "64. Quanto ao estabelecido na Resolução CFC nº 1.523/2017, que versa a respeito do Código de Conduta dos Conselheiros, Colaboradores e Funcionários, julgue o item seguinte.\n\nO presidente das comissões será eleito pelo plenário do CFC para mandato de dois anos, sendo permitida a recondução.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 64 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-65",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação e Ética Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Resolução CFC nº 1.523/2017",
          "Comissão de Conduta"
        ],
        "enunciado": "65. Quanto ao estabelecido na Resolução CFC nº 1.523/2017, que versa a respeito do Código de Conduta dos Conselheiros, Colaboradores e Funcionários, julgue o item seguinte.\n\nO integrante da comissão que estiver respondendo a um processo ético, criminal ou administrativo-disciplinar ficará suspenso de suas funções até o trânsito em julgado.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 65 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-66",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação Específica",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Resolução CRC-SP nº 1.093/2011",
          "Regimento Interno do CRC-SP",
          "Conselheiros"
        ],
        "enunciado": "66. Segundo as normas previstas na Resolução CRC-SP nº 1.093/2011 – Regimento Interno do CRC-SP –, julgue o item a seguir.\n\nO cargo de conselheiro, inclusive quando investido na função de membro de órgão deste CRC, é de exercício gratuito, e será considerado serviço relevante.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 66 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-67",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação Específica",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Resolução CRC-SP nº 1.093/2011",
          "Regimento Interno do CRC-SP",
          "Conselho Diretor"
        ],
        "enunciado": "67. Segundo as normas previstas na Resolução CRC-SP nº 1.093/2011 – Regimento Interno do CRC-SP –, julgue o item a seguir.\n\nO conselho diretor é composto do presidente, dos vice-presidentes e de mais três conselheiros efetivos, eleitos pelo plenário, com mandato de dois anos.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 67 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-68",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação Específica",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Resolução CRC-SP nº 1.093/2011",
          "Regimento Interno do CRC-SP",
          "Estrutura Organizacional"
        ],
        "enunciado": "68. Segundo as normas previstas na Resolução CRC-SP nº 1.093/2011 – Regimento Interno do CRC-SP –, julgue o item a seguir.\n\nA Câmara de Política Institucional constitui órgão deliberativo superior do CRC do estado de São Paulo.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 68 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-69",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação Específica",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Resolução CRC-SP nº 1.093/2011",
          "Regimento Interno do CRC-SP",
          "Competências do Conselho Diretor"
        ],
        "enunciado": "69. Segundo as normas previstas na Resolução CRC-SP nº 1.093/2011 – Regimento Interno do CRC-SP –, julgue o item a seguir.\n\nCompete ao conselho diretor conceder licença ao presidente, vice-presidentes e aos demais conselheiros.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 69 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-70",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Legislação Específica",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Resolução CRC-SP nº 1.093/2011",
          "Regimento Interno do CRC-SP",
          "Eleições e Mandatos"
        ],
        "enunciado": "70. Segundo as normas previstas na Resolução CRC-SP nº 1.093/2011 – Regimento Interno do CRC-SP –, julgue o item a seguir.\n\nAo conselheiro que exerceu a presidência no biênio anterior, por período igual ou superior a 40% do mandato, é vedado ocupar uma vice-presidência no biênio imediatamente posterior.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 70 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-71",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Constitucional",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Fiscalização Contábil, Financeira e Orçamentária",
          "Tribunal de Contas da União"
        ],
        "enunciado": "71. Em relação ao Título IV – Capítulo I – Seção IX da Constituição Federal de 1988, que trata da fiscalização contábil, financeira e orçamentária, julgue o item.\n\nÉ vedado ao Tribunal de Contas da União aplicar sanções diretamente a servidores públicos, uma vez que sua atuação está limitada à fiscalização externa e emissão de pareceres.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 71 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-72",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Constitucional",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Fiscalização Contábil, Financeira e Orçamentária",
          "Competências do TCU"
        ],
        "enunciado": "72. Em relação ao Título IV – Capítulo I – Seção IX da Constituição Federal de 1988, que trata da fiscalização contábil, financeira e orçamentária, julgue o item.\n\nÉ competência do Tribunal de Contas da União julgar as contas do presidente da República, emitindo parecer prévio vinculativo ao Congresso Nacional.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 72 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-73",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Constitucional",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Administração Pública",
          "Cargos em Comissão e Funções de Confiança"
        ],
        "enunciado": "73. Com relação ao Título III – Capítulo VII da Constituição Federal de 1988, que trata da Administração Pública, julgue o item seguinte.\n\nOs cargos em comissão, de livre nomeação e exoneração, devem ser exclusivamente destinados a atribuições técnicas ou operacionais, que demandam qualificação específica.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 73 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-74",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Constitucional",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Administração Pública",
          "Estabilidade e Avaliação de Desempenho"
        ],
        "enunciado": "74. Com relação ao Título III – Capítulo VII da Constituição Federal de 1988, que trata da Administração Pública, julgue o item seguinte.\n\nA Constituição Federal de 1988 exige que a Administração Pública realize avaliação periódica de desempenho de seus servidores estáveis, como condição para manutenção no cargo.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 74 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-75",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Constitucional",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Administração Pública",
          "Acumulação de Cargos Públicos"
        ],
        "enunciado": "75. Com relação ao Título III – Capítulo VII da Constituição Federal de 1988, que trata da Administração Pública, julgue o item seguinte.\n\nÉ permitida a acumulação remunerada de cargos públicos de qualquer natureza, desde que haja compatibilidade de horários.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 75 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-76",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Tributário",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Simples Nacional",
          "Lei Complementar nº 123/2006"
        ],
        "enunciado": "76. A respeito da Lei Complementar nº 123/2006, que institui o Estatuto Nacional da Microempresa e da Empresa de Pequeno Porte, julgue o item a seguir.\n\nA Lei Complementar nº 123/2006 institui o regime unificado de arrecadação de tributos e as contribuições, denominado Simples Nacional, aplicável às microempresas e empresas de pequeno porte.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 76 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-77",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Tributário",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Enquadramento de Microempresa",
          "Lei Complementar nº 123/2006"
        ],
        "enunciado": "77. A respeito da Lei Complementar nº 123/2006, que institui o Estatuto Nacional da Microempresa e da Empresa de Pequeno Porte, julgue o item a seguir.\n\nPara fins da Lei Complementar nº 123/2006, considera-se microempresa a pessoa jurídica que aufira, em cada ano-calendário, receita bruta igual ou inferior a R$ 4,8 milhões.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 77 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-78",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Tributário",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Opção pelo Simples Nacional",
          "Lei Complementar nº 123/2006"
        ],
        "enunciado": "78. A respeito da Lei Complementar nº 123/2006, que institui o Estatuto Nacional da Microempresa e da Empresa de Pequeno Porte, julgue o item a seguir.\n\nO ingresso no Simples Nacional é automático para as empresas que se enquadrarem nos limites de receita bruta e que não pratiquem nenhuma vedação legal.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 78 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-79",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito do Trabalho",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Tratamento Diferenciado e Favorecido",
          "Lei Complementar nº 123/2006"
        ],
        "enunciado": "79. A respeito da Lei Complementar nº 123/2006, que institui o Estatuto Nacional da Microempresa e da Empresa de Pequeno Porte, julgue o item a seguir.\n\nAs microempresas e empresas de pequeno porte têm tratamento favorecido quanto ao cumprimento de obrigações trabalhistas e previdenciárias, sem prejuízo dos direitos dos empregados.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 79 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-80",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Modalidades de Licitação",
          "Lei nº 14.133/2021"
        ],
        "enunciado": "80. A Lei nº 14.133/2021 trouxe diversas modificações em relação à legislação anterior (Lei nº 8.666/93). Quanto à Nova Lei de Licitações e Contratos Administrativos, julgue o item seguinte.\n\nA modalidade de licitação denominada \"convite\" permanece válida na Lei nº 14.133/2021, desde que respeitado o limite de valor atualizado.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 80 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-81",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Contratação Direta",
          "Inexigibilidade e Dispensa de Licitação",
          "Lei nº 14.133/2021"
        ],
        "enunciado": "81. A Lei nº 14.133/2021 trouxe diversas modificações em relação à legislação anterior (Lei nº 8.666/93). Quanto à Nova Lei de Licitações e Contratos Administrativos, julgue o item seguinte.\n\nÉ dispensável a licitação para contratação de profissional do setor artístico consagrado pela crítica especializada ou pela opinião pública.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 81 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-82",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Comercial",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sociedades por Ações",
          "Lei nº 10.303/2001",
          "Proteção aos Minoritários"
        ],
        "enunciado": "82. A Lei nº 10.303/2001 visa aprimorar o funcionamento do mercado de capitais brasileiro, com foco na proteção dos investidores e na garantia de informações transparentes. Com base nessa legislação, julgue o item a seguir.\n\nA Lei nº 10.303/2001 alterou a Lei das Sociedades por Ações (Lei nº 6.404/76) para reforçar a proteção dos acionistas minoritários, especialmente em operações de alienação de controle.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 82 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-83",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Comercial",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sociedades Limitadas",
          "Publicação de Demonstrações Financeiras",
          "Lei nº 10.303/2001"
        ],
        "enunciado": "83. A Lei nº 10.303/2001 visa aprimorar o funcionamento do mercado de capitais brasileiro, com foco na proteção dos investidores e na garantia de informações transparentes. Com base nessa legislação, julgue o item a seguir.\n\nCom a alteração promovida pela Lei nº 10.303/2001, passou a ser obrigatória a publicação de demonstrações financeiras por todas as sociedades limitadas, independentemente de seu porte.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 83 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-84",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Comercial",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Capital Autorizado",
          "Lei nº 10.303/2001",
          "Lei nº 6.404/1976"
        ],
        "enunciado": "84. A Lei nº 10.303/2001 visa aprimorar o funcionamento do mercado de capitais brasileiro, com foco na proteção dos investidores e na garantia de informações transparentes. Com base nessa legislação, julgue o item a seguir.\n\nA Lei nº 10.303/2001 modificou dispositivos sobre o capital autorizado, permitindo que o estatuto social fixe limite para aumento de capital sem nova deliberação da assembleia geral.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 84 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-85",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Direito Comercial",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Comissão de Valores Mobiliários (CVM)",
          "Auditoria Independente",
          "Lei nº 10.303/2001"
        ],
        "enunciado": "85. A Lei nº 10.303/2001 visa aprimorar o funcionamento do mercado de capitais brasileiro, com foco na proteção dos investidores e na garantia de informações transparentes. Com base nessa legislação, julgue o item a seguir.\n\nA Lei nº 10.303/2001 retirou da comissão de valores mobiliários (CVM) o poder de regulamentar e fiscalizar os auditores independentes.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 85 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-86",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Normas Brasileiras de Contabilidade",
          "Documentação de Auditoria"
        ],
        "enunciado": "86. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nA documentação de auditoria é o registro dos procedimentos de auditoria executados, da evidência de auditoria relevante obtida e das conclusões alcançadas pelo auditor.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 86 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-87",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Normas Brasileiras de Contabilidade",
          "Conceitos Fundamentais de Auditoria"
        ],
        "enunciado": "87. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nAuditor experiente é um indivíduo (interno ou externo à firma de auditoria) que possui experiência prática de auditoria e certificação profissional de auditor.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 87 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-88",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Amostragem em Auditoria",
          "NBC TA 530"
        ],
        "enunciado": "88. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nA amostragem em auditoria é a aplicação de procedimentos de auditoria em menos de 100% dos itens de uma população relevante, com o objetivo de obter evidência suficiente e apropriada.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 88 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-89",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Planejamento e Execução da Auditoria",
          "NBC TA 300"
        ],
        "enunciado": "89. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nA execução dos testes de auditoria deve ser realizada conforme o planejamento estabelecido, sendo vedada qualquer alteração nos procedimentos durante a execução dos trabalhos.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 89 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-90",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Auditoria Operacional",
          "Auditoria Contábil"
        ],
        "enunciado": "90. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nA auditoria operacional é voltada para a avaliação da conformidade das demonstrações contábeis com os princípios contábeis aplicáveis, sendo, portanto, equivalente à auditoria contábil.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 90 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-91",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Evidência de Auditoria",
          "Procedimentos Substantivos",
          "NBC TA 500"
        ],
        "enunciado": "91. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nEvidência de auditoria é a informação utilizada pelo auditor para fundamentar suas conclusões, devendo, sempre, ser obtida por meio de testes substantivos.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 91 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-92",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Relatório do Auditor",
          "Parágrafo de Ênfase",
          "NBC TA 706"
        ],
        "enunciado": "92. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nSe uma questão relevante é apresentada adequadamente nas demonstrações contábeis, mas o auditor considera importante destacar ao usuário, ele pode incluir um parágrafo de ênfase no relatório, sem modificar sua opinião.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 92 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-93",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Auditoria Interna",
          "Normas Globais de Auditoria Interna do IIA"
        ],
        "enunciado": "93. As normas globais de auditoria interna do IIA (*Institute of Internal Auditors*) orientam a prática profissional mundial de auditoria interna e servem como base para avaliar e elevar a qualidade da função de auditoria interna. Com base nessas normas internacionais para o exercício profissional da auditoria interna, julgue o item a seguir.\n\nAo analisar a prestação de contas de uma viagem a serviço, o auditor interno deve verificar a exatidão dos valores e a formalização dos documentos, sem necessidade de avaliar a pertinência dos gastos, uma vez que esta é responsabilidade do gestor que autorizou a viagem.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 93 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-94",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Auditoria Interna",
          "Ceticismo Profissional",
          "Normas Globais de Auditoria Interna do IIA"
        ],
        "enunciado": "94. As normas globais de auditoria interna do IIA (*Institute of Internal Auditors*) orientam a prática profissional mundial de auditoria interna e servem como base para avaliar e elevar a qualidade da função de auditoria interna. Com base nessas normas internacionais para o exercício profissional da auditoria interna, julgue o item a seguir.\n\nSegundo as normas internacionais de auditoria interna, o auditor interno deve exercer o ceticismo profissional, o que inclui questionar e avaliar criticamente a confiabilidade das informações, mesmo quando fornecidas por gestores de alto escalão.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 94 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-95",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Auditoria Interna",
          "Objetividade e Independência",
          "Normas Globais de Auditoria Interna do IIA"
        ],
        "enunciado": "95. As normas globais de auditoria interna do IIA (*Institute of Internal Auditors*) orientam a prática profissional mundial de auditoria interna e servem como base para avaliar e elevar a qualidade da função de auditoria interna. Com base nessas normas internacionais para o exercício profissional da auditoria interna, julgue o item a seguir.\n\nA objetividade do auditor interno está garantida desde que ele não aceite presentes ou favores de terceiros, não sendo necessário se abster de avaliar atividades pelas quais foi responsável recentemente.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 95 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-96",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Auditoria Interna",
          "Relatório de Auditoria Interna",
          "Normas Globais de Auditoria Interna do IIA"
        ],
        "enunciado": "96. As normas globais de auditoria interna do IIA (*Institute of Internal Auditors*) orientam a prática profissional mundial de auditoria interna e servem como base para avaliar e elevar a qualidade da função de auditoria interna. Com base nessas normas internacionais para o exercício profissional da auditoria interna, julgue o item a seguir.\n\nAo elaborar o relatório de auditoria, o auditor interno deve comunicar as constatações, mesmo que não tenha conseguido reunir evidências suficientes para sustentá-las.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 96 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-97",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Auditoria Interna",
          "Papéis de Trabalho",
          "Normas Globais de Auditoria Interna do IIA"
        ],
        "enunciado": "97. As normas globais de auditoria interna do IIA (*Institute of Internal Auditors*) orientam a prática profissional mundial de auditoria interna e servem como base para avaliar e elevar a qualidade da função de auditoria interna. Com base nessas normas internacionais para o exercício profissional da auditoria interna, julgue o item a seguir.\n\nA análise dos papéis de trabalho elaborados por outros auditores deve levar em consideração o julgamento profissional e os critérios previamente definidos no programa de auditoria.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 97 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-98",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "CPC 16 (R1) - Estoques",
          "Mensuração de Estoques"
        ],
        "enunciado": "98. Com base nos pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue o item seguinte.\n\nDe acordo com o CPC 16 (R1) – Estoques, os estoques devem ser mensurados pelo menor valor entre o custo e o valor realizável líquido.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 98 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-99",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "CPC 16 (R1) - Estoques",
          "Métodos de Avaliação de Estoques"
        ],
        "enunciado": "99. Com base nos pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue o item seguinte.\n\nO CPC 16 (R1) – Estoques permite que os estoques sejam avaliados pelo método Último a Entrar, Primeiro a Sair (UEPS), desde que essa seja a prática usual da entidade.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 99 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-100",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "CPC 03 (R2) - Demonstração dos Fluxos de Caixa (DFC)"
        ],
        "enunciado": "100. Com base nos pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue o item seguinte.\n\nA demonstração dos fluxos de caixa pode ser elaborada pelo método direto ou indireto, sendo que o método direto é obrigatório para todas as entidades.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 100 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-101",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "CPC 09 - Demonstração do Valor Adicionado (DVA)",
          "Lei nº 6.404/1976"
        ],
        "enunciado": "101. Com base nos pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue o item seguinte.\n\nA demonstração do valor adicionado (DVA) é obrigatória para todas as sociedades por ações, conforme determinado pela Lei nº 6.404/1976.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 101 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-102",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "CPC 09 - Demonstração do Valor Adicionado (DVA)",
          "Distribuição do Valor Adicionado"
        ],
        "enunciado": "102. Com base nos pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue o item seguinte.\n\nA demonstração do valor adicionado (DVA) deve apresentar, entre outras informações, o valor adicionado distribuído aos diversos *stakeholders*, como empregados, governo, financiadores e acionistas.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 102 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-103",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Estrutura Conceitual (CPC 00)",
          "Patrimônio Líquido"
        ],
        "enunciado": "103. Com base nos pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue o item seguinte.\n\nO patrimônio líquido é definido como a diferença entre o ativo e o passivo de uma entidade.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 103 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-104",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Escrituração Contábil",
          "Livro Diário",
          "Formalidades da Escrituração"
        ],
        "enunciado": "104. Em relação aos registros contábeis, julgue o item a seguir.\n\nNo livro diário, devem ser lançadas, em ordem cronológica, com individualização, clareza e referência ao documento probante, todas as operações ocorridas, e quaisquer outros fatos que provoquem variações patrimoniais.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 104 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-105",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Escrituração Contábil",
          "Normas Brasileiras de Contabilidade"
        ],
        "enunciado": "105. Em relação aos registros contábeis, julgue o item a seguir.\n\nO nível de detalhamento da escrituração contábil deve estar alinhado às necessidades de informação de seus usuários.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 105 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-106",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Análise das Demonstrações Contábeis",
          "Índices de Liquidez"
        ],
        "enunciado": "106. Com base na análise das demonstrações financeiras, julgue o item seguinte.\n\nA liquidez geral é um indicador utilizado para avaliar a capacidade da empresa em saldar apenas as obrigações de curto prazo.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 106 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-107",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral e Análise das Demonstrações",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Análise de Liquidez",
          "Índices Financeiros"
        ],
        "enunciado": "107. Um índice de liquidez corrente superior a 1,0 garante, necessariamente, uma boa situação financeira da empresa.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 107 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-108",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral e Análise das Demonstrações",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "EBITDA / LAJIDA",
          "Indicadores de Desempenho"
        ],
        "enunciado": "108. A principal vantagem do EBITDA (*Earning Before Interest, Taxes, Depreciation and Amortization*), globalmente, é permitir a comparação de desempenho operacional entre empresas de diferentes países.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 108 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-109",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral e Análise das Demonstrações",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Análise de Demonstrações Contábeis",
          "Interpretação de Índices"
        ],
        "enunciado": "109. A análise isolada de um índice contábil, sem a consideração de tendências históricas ou comparação com padrões do setor, pode conduzir a interpretações incorretas quanto à saúde financeira da entidade.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 109 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-110",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral e Análise das Demonstrações",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Comparabilidade",
          "Séries Históricas e Critérios de Mensuração"
        ],
        "enunciado": "110. O uso de índices compostos em série histórica é limitado pela alteração da base contábil e critérios de mensuração ao longo do tempo, o que compromete a comparabilidade.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 110 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-111",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Geral e Análise das Demonstrações",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Análise de Estrutura de Capital",
          "Índice de Endividamento"
        ],
        "enunciado": "111. Um aumento no índice de endividamento geral indica, necessariamente, deterioração na estrutura financeira da empresa.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 111 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-112",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "NBC TSP Estrutura Conceitual",
          "Características Qualitativas da Informação Contábil"
        ],
        "enunciado": "112. Em relação à qualidade da informação da contabilidade pública no Brasil, ao Manual de Contabilidade Aplicada ao Setor Público (MCASP) e ao Plano de Contas Aplicado ao Setor Público (PCASP), julgue o item a seguir.\n\nA informação contábil útil deve possuir como característica qualitativa essencial a representação fidedigna dos fenômenos econômicos, mesmo que não corresponda à sua forma jurídica.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 112 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-113",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Despesa Pública",
          "Estágios da Despesa Orçamentária"
        ],
        "enunciado": "113. Em relação à qualidade da informação da contabilidade pública no Brasil, ao Manual de Contabilidade Aplicada ao Setor Público (MCASP) e ao Plano de Contas Aplicado ao Setor Público (PCASP), julgue o item a seguir.\n\nO estágio da liquidação da despesa é anterior à fixação da dotação orçamentária.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 113 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-114",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Manual de Contabilidade Aplicada ao Setor Público (MCASP)",
          "Abrangência e Normas"
        ],
        "enunciado": "114. Em relação à qualidade da informação da contabilidade pública no Brasil, ao Manual de Contabilidade Aplicada ao Setor Público (MCASP) e ao Plano de Contas Aplicado ao Setor Público (PCASP), julgue o item a seguir.\n\nO Manual de Contabilidade Aplicado ao Setor Público (MCASP) estabelece regras exclusivamente para o nível federal de governo.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 114 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-115",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Restos a Pagar",
          "Passivo Financeiro e Permanente"
        ],
        "enunciado": "115. Em relação à qualidade da informação da contabilidade pública no Brasil, ao Manual de Contabilidade Aplicada ao Setor Público (MCASP) e ao Plano de Contas Aplicado ao Setor Público (PCASP), julgue o item a seguir.\n\nOs restos a pagar processados devem ser registrados como passivo financeiro.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 115 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-116",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Contabilidade Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Plano de Contas Aplicado ao Setor Público (PCASP)",
          "Natureza da Informação"
        ],
        "enunciado": "116. Em relação à qualidade da informação da contabilidade pública no Brasil, ao Manual de Contabilidade Aplicada ao Setor Público (MCASP) e ao Plano de Contas Aplicado ao Setor Público (PCASP), julgue o item a seguir.\n\nO Plano de Contas Aplicado ao Setor Público (PCASP) classifica as contas segundo a natureza da informação: patrimonial; orçamentária; e de controle.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 116 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-117",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Administração Financeira e Orçamentária",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Processo Orçamentário",
          "Instrumentos de Planejamento (PPA, LDO, LOA)"
        ],
        "enunciado": "117. Com base no processo orçamentário brasileiro e na legislação que trata a respeito do orçamento público no Brasil, julgue o item a seguir.\n\nA Constituição Federal de 1988 estabelece que o Plano Plurianual (PPA), a lei de diretrizes orçamentárias (LDO) e a lei orçamentária anual (LOA) são de iniciativa privativa do Poder Legislativo.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 117 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-118",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Administração Financeira e Orçamentária",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Princípios Orçamentários",
          "Princípio da Não Afetação da Receita"
        ],
        "enunciado": "118. Com base no processo orçamentário brasileiro e na legislação que trata a respeito do orçamento público no Brasil, julgue o item a seguir.\n\nO princípio da não afetação da receita tributária impede qualquer tipo de vinculação, inclusive para saúde e educação.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 118 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-119",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Administração Financeira e Orçamentária",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Princípios Orçamentários",
          "Princípio da Universalidade"
        ],
        "enunciado": "119. Com base no processo orçamentário brasileiro e na legislação que trata a respeito do orçamento público no Brasil, julgue o item a seguir.\n\nO princípio da universalidade determina que o orçamento deve conter todas as receitas e despesas de todos os entes.",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 119 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      },
      {
        "id": "q-analista_contabil-120",
        "banca": "QUADRIX",
        "ano": 2025,
        "orgao": "CRC-SP",
        "cargo": "Analista Contábil",
        "disciplina": "Administração Financeira e Orçamentária",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Créditos Adicionais",
          "Lei Orçamentária Anual"
        ],
        "enunciado": "120. Com base no processo orçamentário brasileiro e na legislação que trata a respeito do orçamento público no Brasil, julgue o item a seguir.\n\nOs créditos adicionais são autorizações de despesa não computadas ou insuficientemente dotadas na lei orçamentária anual (LOA).",
        "alternativas": [
          {
            "id": "A",
            "text": "CERTO"
          },
          {
            "id": "B",
            "text": "ERRADO"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 120 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial QUADRIX.",
        "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
        "dificuldade": "médio"
      }
    ]
  },
  {
    "id": "fiscal_tributario3",
    "filename": "fiscal_tributario3.json",
    "title": "Fiscal Tributário III",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "totalQuestions": 40,
    "questions": [
      {
        "id": "q-fiscal_tributario3-01",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Compreensão e Interpretação de Texto"
        ],
        "enunciado": "1. Como queimadas em terras indígenas aumentaram 76% e deixaram crianças e anciãos “sufocados”\n\n*Por Leandro Prazeres*\n\n01 Quando deixou o Oeste do Amazonas rumo ___ Terra Indígena Capoto-Jarina, em Mato\n02 Grosso, a psicóloga Jaqueline Aparício, indígena da etnia Kokama, sabia que encontraria um\n03 cenário difícil ao desembarcar, mas nada a havia preparado para aquilo. A aldeia Piaraçu estava\n04 engolida pela fumaça. “O nosso território é extensão do nosso corpo. Faz parte da nossa\n05 espiritualidade. Ver a destruição de animais ou de uma árvore é como ver a nossa própria\n06 destruição” ▲ disse ela.\n07 O relato de Jaqueline ilustra um dos aspectos menos visíveis da crise ambiental causada\n08 pelos incêndios florestais no Brasil ◆ a destruição deixada pelo fogo nas terras indígenas\n09 brasileiras. Um levantamento feito pelo Instituto de Pesquisa Ambiental da Amazônia (IPAM)\n10 mostra o tamanho do estrago deixado pelas queimadas nesses territórios: entre janeiro e agosto\n11 deste ano, o fogo destruiu 3,08 milhões de hectares em áreas destinadas aos povos indígenas\n12 do país, o que equivale a 27% dos mais de 11 milhões de hectares de área queimada. Em relação\n13 ao ano passado, o crescimento no tamanho da área queimada em terras indígenas foi de 76%.\n14 Nas comunidades, os efeitos de tanta queimada são sentidos por toda a população,\n15 especialmente por jovens e idosos que sofrem com problemas respiratórios.\n16 O impacto do fogo não é sentido apenas no ar. Lideranças indígenas e ambientalistas\n17 afirmam que os dois principais fatores responsáveis por esse aumento na área queimada em\n18 terras indígenas são os efeitos das mudanças climáticas e o avanço do agronegócio. Procurado,\n19 o Ministério do Meio Ambiente (MMA) disse que contratou mais de três mil brigadistas e que\n20 metade deles é indígena. A nota também informou que o governo liberou R$ 514 milhões a mais\n21 no orçamento para o combate a incêndios em todo o Brasil. O Ministério afirmou, também, que\n22 a resposta do governo federal é coordenada por uma sala de situação, criada em junho, que\n23 envolve diversos Ministérios. Após a publicação da reportagem, o Ministério da Saúde enviou\n24 uma nota afirmando que criou, em 2023, o Comitê de Resposta aos Eventos Extremos na Saúde\n25 Indígena, que tem técnicos especializados no enfrentamento ___ seca, estiagem e queimadas.\n26 A Força Nacional do SUS foi enviada ao Amazonas para apoiar ações preventivas. A pasta\n27 disse, ainda, dar apoio a gestores, equipes e lideranças locais, emitindo alertas sobre exposição\n28 ___ fumaça, oferecendo soluções emergenciais para o abastecimento de água, monitorando sua\n29 qualidade e enviando, antecipadamente, medicamentos e insumos aos territórios. A Fundação\n30 Nacional dos Povos Indígenas (Funai), o Instituto Brasileiro do Meio Ambiente e Recursos\n31 Naturais Renováveis (Ibama) e o Instituto Chico Mendes de Conservação da Biodiversidade\n32 (ICMBio) foram procurados, mas não responderam aos questionamentos.\n\n(Disponível em: www.bbc.com/portuguese/articles/c9819351gq4o – texto adaptado especialmente para esta prova).\n\nQUESTÃO 01 – Com base no exposto pelo texto, assinale a alternativa correta.",
        "alternativas": [
          {
            "id": "A",
            "text": "O texto se concentra em denunciar a falta de ação do governo no combate aos incêndios em terras indígenas, utilizando dados para expor a ineficiência das medidas tomadas."
          },
          {
            "id": "B",
            "text": "Jaqueline Aparício, indígena Kokama, testemunhou a destruição de sua aldeia, Piaraçu, que foi completamente consumida pelo fogo, como relata o texto."
          },
          {
            "id": "C",
            "text": "O principal objetivo do texto é apresentar o trabalho de ONGs e entidades como o IPAM no combate aos incêndios em terras indígenas, destacando suas ações e impacto."
          },
          {
            "id": "D",
            "text": "O texto argumenta que a principal causa do aumento nas queimadas em terras indígenas é a mudança climática, que facilita a propagação do fogo, ignorando outros fatores."
          },
          {
            "id": "E",
            "text": "Além do impacto ambiental, o texto destaca as consequências sociais e de saúde dos incêndios para as comunidades indígenas."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 1 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-02",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Compreensão e Interpretação de Texto"
        ],
        "enunciado": "2. Com base no exposto pelo texto, analise as assertivas a seguir:\n\nI. Além da destruição ambiental, os incêndios causam problemas de saúde e estão ligados a fatores como o avanço do agronegócio.\nII. O texto afirma que os incêndios florestais são um problema recente nas terras indígenas, tendo surgido apenas nos últimos anos.\nIII. O governo federal, em conjunto com ONGs ambientalistas, tem conseguido controlar os incêndios nas terras indígenas, diminuindo significativamente as áreas queimadas.\n\nQuais estão corretas?",
        "alternativas": [
          {
            "id": "A",
            "text": "Apenas I."
          },
          {
            "id": "B",
            "text": "Apenas II."
          },
          {
            "id": "C",
            "text": "Apenas I e III."
          },
          {
            "id": "D",
            "text": "Apenas II e III."
          },
          {
            "id": "E",
            "text": "I, II e III."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 2 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-03",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Gêneros Textuais",
          "Funções da Linguagem"
        ],
        "enunciado": "3. Assinale a alternativa que melhor caracteriza o gênero textual e a função da linguagem predominante no texto.",
        "alternativas": [
          {
            "id": "A",
            "text": "Crônica argumentativa, com função emotiva, evidenciada pelo relato pessoal de Jaqueline Aparício."
          },
          {
            "id": "B",
            "text": "Reportagem, com função referencial, marcada pela presença de dados e informações sobre os incêndios em terras indígenas."
          },
          {
            "id": "C",
            "text": "Editorial, com função apelativa, visando mobilizar o leitor para a causa dos povos indígenas."
          },
          {
            "id": "D",
            "text": "Relato pessoal, com função poética, priorizando a expressividade e a subjetividade na descrição dos incêndios."
          },
          {
            "id": "E",
            "text": "Notícia, com função fática, utilizando linguagem informal para aproximar o leitor do tema abordado."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 3 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-04",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Crase",
          "Regência Verbal"
        ],
        "enunciado": "4. Considerando a regência verbal e o acento indicativo de crase, assinale a alternativa que preenche, correta e respectivamente, as lacunas tracejadas nas linhas 01, 25 e 28.",
        "alternativas": [
          {
            "id": "A",
            "text": "à – a – à"
          },
          {
            "id": "B",
            "text": "a – à – à"
          },
          {
            "id": "C",
            "text": "à – à – à"
          },
          {
            "id": "D",
            "text": "a – à – a"
          },
          {
            "id": "E",
            "text": "à – a – a"
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 4 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-05",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Pontuação"
        ],
        "enunciado": "5. Os símbolos nas linhas 06 e 08 podem ser substituídos, respectivamente, por quais sinais de pontuação?",
        "alternativas": [
          {
            "id": "A",
            "text": "Vírgula e ponto de exclamação."
          },
          {
            "id": "B",
            "text": "Travessão e ponto-final."
          },
          {
            "id": "C",
            "text": "Ponto-final e ponto e vírgula."
          },
          {
            "id": "D",
            "text": "Vírgula e dois-pontos."
          },
          {
            "id": "E",
            "text": "Dois-pontos e ponto-final."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 5 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-06",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Concordância Verbal",
          "Concordância Nominal"
        ],
        "enunciado": "6. No trecho retirado do texto “Nas comunidades, os <u>efeitos</u> de tanta queimada são sentidos por toda a população, especialmente por jovens e idosos que sofrem com problemas respiratórios”, se a palavra sublinhada for substituída por sua forma no singular, quantas outras alterações serão necessárias para manter a correta concordância nesse fragmento?",
        "alternativas": [
          {
            "id": "A",
            "text": "1."
          },
          {
            "id": "B",
            "text": "2."
          },
          {
            "id": "C",
            "text": "3."
          },
          {
            "id": "D",
            "text": "4."
          },
          {
            "id": "E",
            "text": "5."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 6 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-07",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Significação das Palavras",
          "Sinonímia"
        ],
        "enunciado": "7. A palavra \"estrago\" (l. 10) pode ser substituída, sem alteração de sentido, por:",
        "alternativas": [
          {
            "id": "A",
            "text": "Arranjo."
          },
          {
            "id": "B",
            "text": "Esmero."
          },
          {
            "id": "C",
            "text": "Benefício."
          },
          {
            "id": "D",
            "text": "Dano."
          },
          {
            "id": "E",
            "text": "Restauro."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 7 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-08",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Figuras de Linguagem"
        ],
        "enunciado": "8. No trecho retirado do texto \"Ver a destruição dos animais ou de uma árvore é como ver a nossa própria destruição\", qual figura de linguagem é empregada?",
        "alternativas": [
          {
            "id": "A",
            "text": "Antítese."
          },
          {
            "id": "B",
            "text": "Hipérbole."
          },
          {
            "id": "C",
            "text": "Aliteração."
          },
          {
            "id": "D",
            "text": "Pleonasmo."
          },
          {
            "id": "E",
            "text": "Comparação."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 8 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-09",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sintaxe",
          "Vozes Verbais"
        ],
        "enunciado": "9. Analise o trecho a seguir, retirado do texto:\n\n\"Um levantamento feito pelo Instituto de Pesquisa Ambiental da Amazônia (IPAM) mostra o tamanho do estrago deixado pelas queimadas nesses territórios\".\n\nAssinale a alternativa que apresenta o fragmento acima na voz passiva.",
        "alternativas": [
          {
            "id": "A",
            "text": "O tamanho do estrago deixado pelas queimadas nesses territórios é mostrado por um levantamento feito pelo Instituto de Pesquisa Ambiental da Amazônia (IPAM)."
          },
          {
            "id": "B",
            "text": "O Instituto de Pesquisa Ambiental da Amazônia (IPAM) fez um levantamento que mostra o tamanho do estrago deixado pelas queimadas nesses territórios."
          },
          {
            "id": "C",
            "text": "As queimadas deixaram um estrago mostrado por um levantamento feito pelo Instituto de Pesquisa Ambiental da Amazônia (IPAM)."
          },
          {
            "id": "D",
            "text": "Um levantamento, feito pelo Instituto de Pesquisa Ambiental da Amazônia (IPAM), mostrou o tamanho do estrago deixado pelas queimadas nesses territórios."
          },
          {
            "id": "E",
            "text": "Nesses territórios, o tamanho do estrago deixado pelas queimadas é mostrado através de um levantamento feito pelo Instituto de Pesquisa Ambiental da Amazônia (IPAM)."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 9 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-10",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Fonética e Fonologia",
          "Ortografia",
          "Acentuação Gráfica",
          "Uso do Hífen"
        ],
        "enunciado": "10. Analise as assertivas abaixo:\n\nI. A palavra \"Água-de-colônia\" leva hífen porque é uma palavra composta.\nII. As palavras \"cachorro\" e \"menino\" têm seis fonemas cada.\nIII. A palavra \"país\" é acentuada conforme a regra do hiato.\n\nQuais estão corretas?",
        "alternativas": [
          {
            "id": "A",
            "text": "Apenas II."
          },
          {
            "id": "B",
            "text": "Apenas III."
          },
          {
            "id": "C",
            "text": "Apenas I e II."
          },
          {
            "id": "D",
            "text": "Apenas II e III."
          },
          {
            "id": "E",
            "text": "I, II e III."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 10 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-11",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sintaxe",
          "Concordância Verbal",
          "Concordância Nominal"
        ],
        "enunciado": "11. Assinale a alternativa que apresenta a frase com as concordâncias verbal e nominal corretas.",
        "alternativas": [
          {
            "id": "A",
            "text": "Havia muitos alunos no evento que se mostrou interessado."
          },
          {
            "id": "B",
            "text": "Fazem dois anos que ele estuda para o concurso."
          },
          {
            "id": "C",
            "text": "Mais de uma pessoa trouxe seus documentos para a reunião."
          },
          {
            "id": "D",
            "text": "O aluno e a professora estava satisfeita com o resultado da prova."
          },
          {
            "id": "E",
            "text": "Os livros de História e Geografia foi retirados da biblioteca."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 11 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-12",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Morfologia",
          "Classes de Palavras",
          "Advérbio"
        ],
        "enunciado": "12. Em “Os trabalhadores estrangeiros gritavam ferozmente em frente à fábrica”, qual é o advérbio?",
        "alternativas": [
          {
            "id": "A",
            "text": "Estrangeiros."
          },
          {
            "id": "B",
            "text": "Gritavam."
          },
          {
            "id": "C",
            "text": "Trabalhadores."
          },
          {
            "id": "D",
            "text": "Fábrica."
          },
          {
            "id": "E",
            "text": "Ferozmente."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 12 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-13",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Morfossintaxe",
          "Conjunções",
          "Orações Subordinadas"
        ],
        "enunciado": "13. Assinale a alternativa que apresenta uma frase com uma conjunção subordinativa.",
        "alternativas": [
          {
            "id": "A",
            "text": "Ele não foi à festa, pois não estava se sentindo bem."
          },
          {
            "id": "B",
            "text": "O sol brilha e as crianças brincam no parque."
          },
          {
            "id": "C",
            "text": "Ela estuda muito para passar no exame."
          },
          {
            "id": "D",
            "text": "Se você estudar, então conseguirá passar."
          },
          {
            "id": "E",
            "text": "Eu gostaria de viajar, embora não tenha tempo."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 13 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-14",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Ortografia Oficial"
        ],
        "enunciado": "14. Qual das palavras abaixo é escrita com a letra “s”?",
        "alternativas": [
          {
            "id": "A",
            "text": "Sin___ero."
          },
          {
            "id": "B",
            "text": "Desconhe___ido."
          },
          {
            "id": "C",
            "text": "De___astre."
          },
          {
            "id": "D",
            "text": "E___cluir."
          },
          {
            "id": "E",
            "text": "Reali___ar."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 14 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-15",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Semântica",
          "Homônimos e Parônimos",
          "Polissemia"
        ],
        "enunciado": "15. Analise as assertivas a seguir:\n\nI. “Comprimento” e “cumprimento” são palavras homônimas.\nII. Homônimas são as palavras que possuem a mesma grafia ou pronúncia, mas significados diferentes, como em “manga”.\nIII. A palavra “constituição” é polissêmica, havendo mais de um referente para ela.\n\nQuais estão corretas?",
        "alternativas": [
          {
            "id": "A",
            "text": "Apenas II."
          },
          {
            "id": "B",
            "text": "Apenas III."
          },
          {
            "id": "C",
            "text": "Apenas I e II."
          },
          {
            "id": "D",
            "text": "Apenas II e III."
          },
          {
            "id": "E",
            "text": "I, II e III."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 15 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-16",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Conhecimentos Gerais",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "História do Município",
          "Emancipação Política de Passo do Sobrado"
        ],
        "enunciado": "16. Em que ano ocorreu o plebiscito que definiu a emancipação de Passo do Sobrado, com 88% dos votos a favor, dando o grande passo para que a cidade se tornasse independente?",
        "alternativas": [
          {
            "id": "A",
            "text": "1705."
          },
          {
            "id": "B",
            "text": "1802."
          },
          {
            "id": "C",
            "text": "1850."
          },
          {
            "id": "D",
            "text": "1991."
          },
          {
            "id": "E",
            "text": "2018."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 16 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-17",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Conhecimentos Gerais",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Aspectos Econômicos de Passo do Sobrado"
        ],
        "enunciado": "17. De acordo com o site da Câmara dos Vereadores de Passo do Sobrado, qual é a principal atividade econômica do município?",
        "alternativas": [
          {
            "id": "A",
            "text": "Agricultura."
          },
          {
            "id": "B",
            "text": "Comércio."
          },
          {
            "id": "C",
            "text": "Indústria."
          },
          {
            "id": "D",
            "text": "Metalúrgica."
          },
          {
            "id": "E",
            "text": "Construção civil."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 17 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-18",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Conhecimentos Gerais",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Atualidades",
          "Personalidades"
        ],
        "enunciado": "18. Em 2024, faleceu, aos 93 anos, um dos nomes mais importantes do entretenimento da televisão brasileira, Silvio Santos. Em que mês do ano ele faleceu?",
        "alternativas": [
          {
            "id": "A",
            "text": "Fevereiro."
          },
          {
            "id": "B",
            "text": "Março."
          },
          {
            "id": "C",
            "text": "Maio."
          },
          {
            "id": "D",
            "text": "Julho."
          },
          {
            "id": "E",
            "text": "Agosto."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 18 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-19",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Conhecimentos Gerais",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Atualidades 2024"
        ],
        "enunciado": "19. São fatos que ocorreram em 2024, EXCETO:",
        "alternativas": [
          {
            "id": "A",
            "text": "Suspensão da rede social X no Brasil pelo Ministro Alexandre de Moraes."
          },
          {
            "id": "B",
            "text": "Conquista de 20 medalhas para o Brasil nas olimpíadas de Paris."
          },
          {
            "id": "C",
            "text": "Queda de um avião modelo ATR-72-500, em agosto, na cidade de Vinhedo, no interior de São Paulo."
          },
          {
            "id": "D",
            "text": "Julgamento de Donald Trump, o primeiro ex-presidente dos EUA a ser condenado por um crime."
          },
          {
            "id": "E",
            "text": "Morte da jornalista brasileira Glória Maria, no Rio de Janeiro."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 19 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-20",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Conhecimentos Gerais",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Atualidades Internacionais",
          "Patrimônio Histórico e Cultural"
        ],
        "enunciado": "20. Está prevista para o dia 8 de dezembro de 2024 a reabertura de uma das maiores catedrais do mundo, localizada em Paris, que, após sofrer um incêndio em 2019, passou por uma reforma. Qual é o nome dessa catedral?",
        "alternativas": [
          {
            "id": "A",
            "text": "Liverpool."
          },
          {
            "id": "B",
            "text": "Notre-Dame."
          },
          {
            "id": "C",
            "text": "Sagrado Coração."
          },
          {
            "id": "D",
            "text": "Colônia."
          },
          {
            "id": "E",
            "text": "Sagrada Família."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 20 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-21",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Legislação Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei Orgânica Municipal",
          "Poder Legislativo",
          "Vereadores"
        ],
        "enunciado": "21. Com base na Lei Orgânica do Município de Passo do Sobrado, em relação aos vereadores, analise as assertivas abaixo:\n\nI. Extingue-se o mandato de vereador nos casos de renúncia escrita.\nII. Extingue-se o mandato de vereador nos casos de falecimento.\nIII. Comprovado o ato ou fato extintivo, o Presidente da Câmara, imediatamente, convocará o suplente respectivo e, a qualquer tempo, comunicará a extinção ao Plenário, sem necessidade que seja na primeira sessão seguinte.\n\nQuais estão corretas?",
        "alternativas": [
          {
            "id": "A",
            "text": "Apenas I."
          },
          {
            "id": "B",
            "text": "Apenas II."
          },
          {
            "id": "C",
            "text": "Apenas I e II."
          },
          {
            "id": "D",
            "text": "Apenas II e III."
          },
          {
            "id": "E",
            "text": "I, II e III."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 21 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-22",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Legislação Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei Orgânica Municipal",
          "Processo Legislativo"
        ],
        "enunciado": "22. Sobre leis e projetos legislativos, com base na Lei Orgânica do Município de Passo do Sobrado, analise as assertivas abaixo, assinalando V, se verdadeiras, ou F, se falsas.\n\n( ) Nos projetos de lei de iniciativa privativa do Prefeito, não será admitida emenda que aumente a despesa prevista.\n( ) Os autores de projeto de lei em tramitação na Câmara de Vereadores, inclusive o Prefeito, poderão requerer a sua retirada antes de iniciada a votação.\n( ) No início ou em qualquer fase da tramitação de projeto de lei de iniciativa exclusiva do Prefeito, este poderá solicitar à Câmara que o aprecie em 90 dias a contar do pedido, o que deverá ser devidamente motivado.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
        "alternativas": [
          {
            "id": "A",
            "text": "F – F – V."
          },
          {
            "id": "B",
            "text": "V – V – F."
          },
          {
            "id": "C",
            "text": "F – V – V."
          },
          {
            "id": "D",
            "text": "V – F – F."
          },
          {
            "id": "E",
            "text": "F – V – F."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 22 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-23",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Legislação Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei Orgânica Municipal",
          "Saúde"
        ],
        "enunciado": "23. De acordo com a Lei Orgânica do Município de Passo do Sobrado, a saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua:\n\nI. Promoção.\nII. Proteção.\nIII. Recuperação.\n\nQuais estão corretas?",
        "alternativas": [
          {
            "id": "A",
            "text": "Apenas I."
          },
          {
            "id": "B",
            "text": "Apenas II."
          },
          {
            "id": "C",
            "text": "Apenas I e II."
          },
          {
            "id": "D",
            "text": "Apenas II e III."
          },
          {
            "id": "E",
            "text": "I, II e III."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 23 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-24",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Legislação Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Regime Jurídico dos Servidores Públicos",
          "Cargos Públicos"
        ],
        "enunciado": "24. Em relação a cargos públicos, de acordo com o Regime Jurídico dos Servidores Públicos do Município de Passo do Sobrado, analise as assertivas abaixo:\n\nI. Cargo público é o criado em lei, em número certo, com denominação própria, remunerado pelos cofres municipais, ao qual corresponde um conjunto de atribuições e responsabilidades cometidas a servidor público.\nII. Os cargos públicos serão unicamente de provimento efetivo.\nIII. A investidura em cargo do magistério municipal será por concurso de provas e títulos.\n\nQuais estão corretas?",
        "alternativas": [
          {
            "id": "A",
            "text": "Apenas I."
          },
          {
            "id": "B",
            "text": "Apenas II."
          },
          {
            "id": "C",
            "text": "Apenas III."
          },
          {
            "id": "D",
            "text": "Apenas I e III."
          },
          {
            "id": "E",
            "text": "I, II e III."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 24 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-25",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Legislação Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Regime Jurídico dos Servidores Públicos",
          "Concurso Público",
          "Posse"
        ],
        "enunciado": "25. Conforme o Regime Jurídico dos Servidores Públicos do Município de Passo do Sobrado, analise as assertivas abaixo, assinalando V, se verdadeiras, ou F, se falsas.\n\n( ) Os limites de idade para inscrição em concurso público serão fixados em Portaria, de acordo com a natureza e a complexidade de cada cargo.\n( ) A nomeação em caráter provisório obedecerá à ordem de classificação obtida pelos candidatos no concurso público.\n( ) Posse é a aceitação expressa das atribuições, deveres e responsabilidades inerentes ao cargo público, com o compromisso de bem servir, formalizada com a assinatura de termo pela autoridade competente e pelo nomeado.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
        "alternativas": [
          {
            "id": "A",
            "text": "F – F – V."
          },
          {
            "id": "B",
            "text": "V – V – F."
          },
          {
            "id": "C",
            "text": "F – V – V."
          },
          {
            "id": "D",
            "text": "V – F – F."
          },
          {
            "id": "E",
            "text": "F – V – F."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 25 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-26",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Legislação Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Regime Jurídico dos Servidores Públicos",
          "Serviço Extraordinário"
        ],
        "enunciado": "26. A respeito dos serviços extraordinários, conforme disposto no Regime Jurídico dos Servidores Públicos do Município de Passo do Sobrado, analise as assertivas abaixo:\n\nI. O serviço extraordinário, excepcionalmente, poderá ser realizado sob a forma de plantões para assegurar o funcionamento dos serviços municipais ininterruptos.\nII. A prestação de serviços extraordinários só poderá ocorrer por expressa determinação da autoridade competente, mediante solicitação fundamentada do chefe da repartição, ou de ofício.\nIII. O serviço extraordinário será remunerado por hora de trabalho que exceda o período normal, com acréscimo de 100% em relação à hora normal.\n\nQuais estão corretas?",
        "alternativas": [
          {
            "id": "A",
            "text": "Apenas I."
          },
          {
            "id": "B",
            "text": "Apenas II."
          },
          {
            "id": "C",
            "text": "Apenas I e II."
          },
          {
            "id": "D",
            "text": "Apenas II e III."
          },
          {
            "id": "E",
            "text": "I, II e III."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 26 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-27",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Legislação Municipal e Ética Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Plano de Carreira dos Servidores do Município de Passo do Sobrado",
          "Promoções"
        ],
        "enunciado": "27. QUESTÃO 27 – Em relação a promoções, conforme o Plano de Carreira dos Servidores do Município de Passo do Sobrado, analise as assertivas abaixo e assinale V, se verdadeiras, ou F, se falsas.\n\n( ) Cada categoria funcional terá sete classes, designadas pelas letras A, B, C, D, E, F e G, sendo esta última a final da carreira.\n( ) O tempo de exercício na classe imediatamente inferior para fins de promoção para a seguinte será de 10 anos ininterruptos.\n( ) Merecimento é a demonstração positiva do servidor no exercício do seu cargo e se evidencia pelo desempenho de forma eficiente, dedicada e leal das atribuições que lhe são cometidas, bem como pela sua assiduidade, pontualidade e disciplina.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
        "alternativas": [
          {
            "id": "A",
            "text": "F – F – V."
          },
          {
            "id": "B",
            "text": "V – F – V."
          },
          {
            "id": "C",
            "text": "F – V – V."
          },
          {
            "id": "D",
            "text": "V – F – F."
          },
          {
            "id": "E",
            "text": "F – V – F."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 27 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-28",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Direito Penal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Legislação Especial",
          "Lei Maria da Penha (Lei nº 11.340/2006)"
        ],
        "enunciado": "28. QUESTÃO 28 – Conforme a Lei Maria da Penha, analise as assertivas abaixo e assinale V, se verdadeiras, ou F, se falsas.\n\n( ) A violência doméstica e familiar contra a mulher constitui uma das formas de violação dos direitos humanos.\n( ) Para que seja configurada violência doméstica e familiar, é necessário que haja coabitação.\n( ) Configura violência doméstica e familiar contra a mulher qualquer ação ou omissão baseada no gênero, no âmbito da unidade doméstica, compreendida como o espaço de convívio permanente de pessoas com vínculo familiar, exclusivamente.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
        "alternativas": [
          {
            "id": "A",
            "text": "F – F – V."
          },
          {
            "id": "B",
            "text": "F – V – V."
          },
          {
            "id": "C",
            "text": "V – F – V."
          },
          {
            "id": "D",
            "text": "V – F – F."
          },
          {
            "id": "E",
            "text": "V – V – F."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 28 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-29",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Direito Penal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Legislação Especial",
          "Lei Maria da Penha (Lei nº 11.340/2006)",
          "Atendimento Policial"
        ],
        "enunciado": "29. QUESTÃO 29 – Em relação ao atendimento policial prestado às vítimas de violência doméstica e familiar, de acordo com a Lei Maria da Penha, analise as assertivas abaixo:\n\nI. A inquirição de mulher em situação de violência doméstica e familiar será feita em recinto especialmente projetado para esse fim, o qual conterá os equipamentos próprios e adequados à idade da mulher em situação de violência doméstica e familiar e ao tipo e à gravidade da violência sofrida.\nII. É direito da mulher em situação de violência doméstica e familiar o atendimento policial e pericial especializado, ininterrupto e prestado por servidores exclusivamente do sexo feminino e previamente capacitados.\nIII. No atendimento à mulher em situação de violência doméstica e familiar, a autoridade policial deverá encaminhar a ofendida ao Instituto Médico Legal, o que elimina a necessidade de encaminhamento ao hospital ou ao posto de saúde.\n\nQuais estão corretas?",
        "alternativas": [
          {
            "id": "A",
            "text": "Apenas I."
          },
          {
            "id": "B",
            "text": "Apenas II."
          },
          {
            "id": "C",
            "text": "Apenas I e II."
          },
          {
            "id": "D",
            "text": "Apenas II e III."
          },
          {
            "id": "E",
            "text": "I, II e III."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 29 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-30",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Legislação e Direitos Humanos",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Estatuto da Igualdade Racial (Lei nº 12.288/2010)"
        ],
        "enunciado": "30. Conforme o Estatuto Nacional da Igualdade Racial, analise as assertivas abaixo e assinale V, se verdadeiras, ou F, se falsas.\n\n( ) Constitui um dos objetivos da Política Nacional de Saúde Integral da População Negra o fomento à realização de estudos e pesquisas sobre discriminação de gênero e saúde da mulher.\n( ) Considera-se desigualdade de gênero e raça a assimetria existente no âmbito da sociedade que acentua a distância social entre mulheres negras e os demais segmentos sociais.\n( ) A participação da população negra, em condição de igualdade de oportunidade, na vida econômica, social, política e cultural do país será promovida, prioritariamente, por meio de adoção de medidas, programas e políticas de ação afirmativa.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
        "alternativas": [
          {
            "id": "A",
            "text": "F – F – V."
          },
          {
            "id": "B",
            "text": "F – V – V."
          },
          {
            "id": "C",
            "text": "F – V – F."
          },
          {
            "id": "D",
            "text": "V – F – F."
          },
          {
            "id": "E",
            "text": "V – V – F."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 30 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-31",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Matemática e Raciocínio Lógico",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Regra de Três Simples",
          "Proporcionalidade"
        ],
        "enunciado": "31. Com 100 litros é possível pintar 230 km de faixa de sinalização em vias públicas. Quantos quilômetros podem ser pintados com 80 litros da mesma forma?",
        "alternativas": [
          {
            "id": "A",
            "text": "150."
          },
          {
            "id": "B",
            "text": "162."
          },
          {
            "id": "C",
            "text": "176."
          },
          {
            "id": "D",
            "text": "184."
          },
          {
            "id": "E",
            "text": "195."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 31 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-32",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Matemática e Raciocínio Lógico",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Geometria Plana",
          "Área do Círculo"
        ],
        "enunciado": "32. O *jump* é um exercício aeróbico praticado em cima de uma cama elástica de tamanho específico, conforme imagem abaixo:\n\n*(Cama elástica circular com indicação de raio: r = 30 cm)*\n\nRegina, fiscal tributária do município, sob recomendação médica, deverá iniciar a prática de exercícios físicos. Pesquisando sobre o tamanho seguro da cama elástica, descobriu que ela deve ser de, no mínimo, 2.400 cm². Sendo assim, assinale a alternativa que corresponde à área da cama elástica da figura acima.\nConsidere π = 3,14.",
        "alternativas": [
          {
            "id": "A",
            "text": "2.350 cm²."
          },
          {
            "id": "B",
            "text": "2.695 cm²."
          },
          {
            "id": "C",
            "text": "2.764 cm²."
          },
          {
            "id": "D",
            "text": "2.826 cm²."
          },
          {
            "id": "E",
            "text": "2.970 cm²."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 32 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-33",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Razão e Proporção",
          "Divisão Proporcional"
        ],
        "enunciado": "33. Três amigos fizeram um investimento juntos e obtiveram R$ 300.000,00 de lucro. A divisão proporcional dos lucros obedecerá a proporção de 2, 3 e 5. Determine o menor valor que um dos amigos receberá na divisão.",
        "alternativas": [
          {
            "id": "A",
            "text": "R$ 30.000,00."
          },
          {
            "id": "B",
            "text": "R$ 60.000,00."
          },
          {
            "id": "C",
            "text": "R$ 90.000,00."
          },
          {
            "id": "D",
            "text": "R$ 120.000,00."
          },
          {
            "id": "E",
            "text": "R$ 150.000,00."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 33 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-34",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Equação do 1º Grau",
          "Problemas Aritméticos"
        ],
        "enunciado": "34. O dobro de um número acrescido de 38 é igual ao seu sêxtuplo menos 58. Esse número é:",
        "alternativas": [
          {
            "id": "A",
            "text": "20."
          },
          {
            "id": "B",
            "text": "22."
          },
          {
            "id": "C",
            "text": "24."
          },
          {
            "id": "D",
            "text": "26."
          },
          {
            "id": "E",
            "text": "28."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 34 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-35",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Função Quadrática",
          "Vértice da Parábola"
        ],
        "enunciado": "35. Dada a função f(x): x² + 18x – 19, determine as coordenadas de seu ponto mínimo.",
        "alternativas": [
          {
            "id": "A",
            "text": "(100; -9)"
          },
          {
            "id": "B",
            "text": "(9; 100)"
          },
          {
            "id": "C",
            "text": "(-9; 100)"
          },
          {
            "id": "D",
            "text": "(9; -100)"
          },
          {
            "id": "E",
            "text": "(-9; -100)"
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 35 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-36",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Matemática Financeira",
          "Juros Simples"
        ],
        "enunciado": "36. Um capital de R$ 87.000,00 foi aplicado sob regime de juros simples durante 4 meses a uma taxa anual de 12%. Determine o valor dos juros gerados nessa aplicação.",
        "alternativas": [
          {
            "id": "A",
            "text": "R$ 3.480,00."
          },
          {
            "id": "B",
            "text": "R$ 3.840,00."
          },
          {
            "id": "C",
            "text": "R$ 4.038,00."
          },
          {
            "id": "D",
            "text": "R$ 4.380,00."
          },
          {
            "id": "E",
            "text": "R$ 4.830,00."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 36 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-37",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sistemas de Equações do 1º Grau",
          "Álgebra"
        ],
        "enunciado": "37. Sérgio e Gustavo foram lanchar em uma cafeteria. Sérgio comprou um café e dois pastéis e gastou R$ 22,00. Gustavo tomou dois cafés e comeu três pastéis e gastou R$ 36,00. Desse modo, é correto afirmar que o café e o pastel custam, respectivamente:",
        "alternativas": [
          {
            "id": "A",
            "text": "R$ 5,00 – R$ 6,00."
          },
          {
            "id": "B",
            "text": "R$ 5,00 – R$ 10,00."
          },
          {
            "id": "C",
            "text": "R$ 6,00 – R$ 6,00."
          },
          {
            "id": "D",
            "text": "R$ 6,00 – R$ 8,00."
          },
          {
            "id": "E",
            "text": "R$ 8,00 – R$ 6,00."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 37 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-38",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Geometria Plana",
          "Teorema de Pitágoras",
          "Triângulo Retângulo"
        ],
        "enunciado": "38. Analise o triângulo retângulo abaixo:\n\n*(Triângulo retângulo com catetos medindo 20 cm e 21 cm, e hipotenusa medindo x)*\n\nO dobro da medida x é igual a:",
        "alternativas": [
          {
            "id": "A",
            "text": "29."
          },
          {
            "id": "B",
            "text": "36."
          },
          {
            "id": "C",
            "text": "49."
          },
          {
            "id": "D",
            "text": "58."
          },
          {
            "id": "E",
            "text": "64."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 38 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-39",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Equações do 1º Grau",
          "Problemas Aritméticos"
        ],
        "enunciado": "39. O triplo de um número acrescido de 54 é igual a sete vezes ele menos 82. Esse número é:",
        "alternativas": [
          {
            "id": "A",
            "text": "30."
          },
          {
            "id": "B",
            "text": "34."
          },
          {
            "id": "C",
            "text": "38."
          },
          {
            "id": "D",
            "text": "42."
          },
          {
            "id": "E",
            "text": "46."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 39 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario3-40",
        "banca": "FCC",
        "ano": 2023,
        "orgao": "Prefeitura Municipal",
        "cargo": "Fiscal Tributário III",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lógica Proposicional",
          "Negação de Proposições Compostas",
          "Leis de De Morgan"
        ],
        "enunciado": "40. A negação da proposição composta “eu não estudo ou eu passo no concurso” é:",
        "alternativas": [
          {
            "id": "A",
            "text": "Eu estudo ou eu não passo no concurso."
          },
          {
            "id": "B",
            "text": "Eu não estudo e eu não passo no concurso."
          },
          {
            "id": "C",
            "text": "Eu estudo e eu não passo no concurso."
          },
          {
            "id": "D",
            "text": "Se eu estudo, então eu passo no concurso."
          },
          {
            "id": "E",
            "text": "Eu não passo no concurso ou eu estudo."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 40 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FCC.",
        "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
        "dificuldade": "médio"
      }
    ]
  },
  {
    "id": "fiscal_tributario5",
    "filename": "fiscal_tributario5.json",
    "title": "Fiscal Tributário V",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "totalQuestions": 36,
    "questions": [
      {
        "id": "q-fiscal_tributario5-01",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Interpretação de Texto",
          "Tipologia Textual",
          "Objetivo Comunicativo"
        ],
        "enunciado": "1. A finalidade do texto “Quem cuida das cuidadoras?” é:",
        "alternativas": [
          {
            "id": "A",
            "text": "Apresentar informações concretas sobre a invisibilização dos trabalhos das mulheres."
          },
          {
            "id": "B",
            "text": "Afirmar sobre a situação das mulheres na atualidade, as quais são sobrecarregadas."
          },
          {
            "id": "C",
            "text": "Criticar o machismo presente na sociedade o qual invisibiliza o trabalho das mulheres."
          },
          {
            "id": "D",
            "text": "Refletir por meio de argumentos consistentes sobre a situação dos trabalhos das mulheres."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 1 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-02",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Semântica",
          "Significação Contextual das Palavras"
        ],
        "enunciado": "2. Na frase “Além de terem seus papéis de cuidadoras invisibilizados, muitas mulheres enfrentam dupla jornada, equilibrando vida profissional e maternidade.”, a palavra invisibilizados, no contexto, significa:",
        "alternativas": [
          {
            "id": "A",
            "text": "Dissimulado."
          },
          {
            "id": "B",
            "text": "Imperceptível."
          },
          {
            "id": "C",
            "text": "Inviável."
          },
          {
            "id": "D",
            "text": "Mascarado."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 2 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-03",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Compreensão de Texto",
          "Ideias Centrais e Secundárias"
        ],
        "enunciado": "3. Assinale a alternativa que NÃO se relaciona com a temática do texto:",
        "alternativas": [
          {
            "id": "A",
            "text": "Não apenas o trabalho da mulher está invisível, mas também sem nenhum tipo de reconhecimento."
          },
          {
            "id": "B",
            "text": "Muitas mulheres enfrentam uma jornada dupla de trabalho, equilibrando a vida profissional e a maternidade."
          },
          {
            "id": "C",
            "text": "O cuidado é essencial para a humanidade, pois todos precisamos dele para existir e envolve dedicação."
          },
          {
            "id": "D",
            "text": "O cuidado de pessoas da família fica essencialmente para as mulheres e não é remunerado."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 3 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-04",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sintaxe",
          "Termos Essenciais da Oração",
          "Sujeito"
        ],
        "enunciado": "4. Em “É muito clara, por exemplo, a <u>diferença</u> entre o papel de uma mãe e o de um pai, na maior parte das vezes.”, a palavra sublinhada tem a função sintática de:",
        "alternativas": [
          {
            "id": "A",
            "text": "Sujeito."
          },
          {
            "id": "B",
            "text": "Adjunto adnominal."
          },
          {
            "id": "C",
            "text": "Objeto direto."
          },
          {
            "id": "D",
            "text": "Predicado."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 4 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-05",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Morfologia",
          "Classes de Palavras",
          "Pronomes Relativos"
        ],
        "enunciado": "5. No trecho “Temos mais de 20 milhões de mães solo no país, onde os pais não assumem a sua paternidade.”, a palavra “onde” pode ser classificada morfologicamente como:",
        "alternativas": [
          {
            "id": "A",
            "text": "Advérbio interrogativo."
          },
          {
            "id": "B",
            "text": "Pronome relativo."
          },
          {
            "id": "C",
            "text": "Conjunção integrante."
          },
          {
            "id": "D",
            "text": "Preposição."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 5 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-06",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Interpretação de Texto",
          "Recursos Argumentativos",
          "Estrutura Textual"
        ],
        "enunciado": "6. Dentre as estratégias utilizadas para estruturar o texto 1, podemos dizer que NÃO se aplica:",
        "alternativas": [
          {
            "id": "A",
            "text": "O uso de dados numéricos para comprovar o argumento."
          },
          {
            "id": "B",
            "text": "O uso de falas de especialistas para dar mais credibilidade."
          },
          {
            "id": "C",
            "text": "O uso de linguagem subjetiva para apresentar um ponto de vista."
          },
          {
            "id": "D",
            "text": "O uso de uma linguagem clara e acessível para a compreensão do leitor."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 6 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-07",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Compreensão e Interpretação de Texto"
        ],
        "enunciado": "7. Identifique um trecho do texto que responda à pergunta do título “Quem cuida das cuidadoras?”",
        "alternativas": [
          {
            "id": "A",
            "text": "“Além de terem seus papéis de cuidadoras invisibilizados, muitas mulheres enfrentam dupla jornada, equilibrando vida profissional e maternidade.”"
          },
          {
            "id": "B",
            "text": "“De acordo com o Fórum Econômico Mundial, levaria mais de 130 anos para equiparação de gênero no Brasil, o que traz prejuízos para o crescimento econômico do país.”"
          },
          {
            "id": "C",
            "text": "“Nove em 10 vezes, quando os pais estão mais velhos e precisam de ajuda, é a mulher, representada pela filha, que vai dar esse suporte, também gerando essa inequidade.”"
          },
          {
            "id": "D",
            "text": "“O tema da redação do Exame Nacional do Ensino Médio (Enem) 2023 não só levantou reflexões em quem fez a prova no último domingo (5/11), mas também diversos setores da sociedade brasileira.”"
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 7 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-08",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Funções da Linguagem"
        ],
        "enunciado": "8. A função da linguagem predominante no texto 1 é:",
        "alternativas": [
          {
            "id": "A",
            "text": "Conativa."
          },
          {
            "id": "B",
            "text": "Denotativa."
          },
          {
            "id": "C",
            "text": "Emotiva."
          },
          {
            "id": "D",
            "text": "Fática."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 8 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-09",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Compreensão e Interpretação de Texto",
          "Intertextualidade"
        ],
        "enunciado": "9. Observe a tirinha abaixo.\n\n**TEXTO 2**\n\n*(Tirinha de @helodangeloarte ilustrando o trabalho doméstico e de cuidado feito por uma mulher, com o texto central: \"TRABALHO INVISÍVEL A GENTE SÓ VÊ SE FALTA\" e falas ao redor: \"NÃO TEM ALMOÇO?!\", \"NÃO TENHO ROUPA LIMPA!\", \"PÔ...\", \"TENHO QUE CUIDAR DOS MEUS FILHOS HOJE?!\")*\n\nA partir da leitura do texto I, podemos dizer que o texto 2:",
        "alternativas": [
          {
            "id": "A",
            "text": "Ilustra o que foi abordado no primeiro texto ao retratar a invisibilidade do trabalho do cuidado feito pelas mulheres."
          },
          {
            "id": "B",
            "text": "Complementa o que foi dito no primeiro texto acrescentando elementos que mostram a realidade conflitante."
          },
          {
            "id": "C",
            "text": "Contradiz o que foi dito no primeiro ao focar no conflito familiar ao mostrar que só se vê o trabalho quando falta."
          },
          {
            "id": "D",
            "text": "Corrobora com a temática do primeiro texto, além de mostrar que os familiares só o valorizam quando falta."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 9 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-10",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Reescrita de Frases",
          "Emprego de Tempos e Modos Verbais",
          "Uso de 'a tempo' e 'há tempo'"
        ],
        "enunciado": "10. Na frase “Se eu tivesse chegado há tempo, a EDP não tinha cortado a luz daqui de casa.” Se a frase fosse reescrita, adequando-se à norma padrão, a forma correta é:",
        "alternativas": [
          {
            "id": "A",
            "text": "Se eu estivesse chegado a tempo, a EDP não teria cortado a luz daqui de casa."
          },
          {
            "id": "B",
            "text": "Se eu tivesse chegado há tempo, a EDP não teria cortado a luz daqui de casa."
          },
          {
            "id": "C",
            "text": "Se eu tivesse chegado a tempo, a EDP não teria cortado a luz daqui de casa."
          },
          {
            "id": "D",
            "text": "Se eu estivesse chegado a tempo, a EDP não tinha cortado a luz daqui de casa."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 10 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-11",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Direito Constitucional",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Direitos e Garantias Fundamentais",
          "Tratados Internacionais de Direitos Humanos"
        ],
        "enunciado": "11. Os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em __________, por __________ dos votos dos respectivos membros, serão equivalentes às __________:\n\nConforme previsto na Constituição de 1988, marque a alternativa que preenche corretamente as lacunas acima:",
        "alternativas": [
          {
            "id": "A",
            "text": "Dois turnos, dois terços, emendas constitucionais."
          },
          {
            "id": "B",
            "text": "Um turno, por maioria simples, leis ordinárias."
          },
          {
            "id": "C",
            "text": "Dois turnos, três quintos, emendas constitucionais."
          },
          {
            "id": "D",
            "text": "Um turno, por maioria absoluta, leis complementares."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 11 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-12",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Direito Constitucional",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Administração Pública",
          "Disposições Gerais da Administração Pública"
        ],
        "enunciado": "12. Tendo por referência as regras constitucionais para a Administração Pública, analise as afirmações a seguir e indique V para as verdadeiras e F para as falsas:\n\n( ) Os vencimentos dos cargos do Poder Legislativo e do Poder Executivo não poderão ser superiores aos pagos pelo Poder Judiciário.\n( ) É vedada a vinculação ou equiparação de quaisquer espécies remuneratórias para o efeito de remuneração de pessoal do serviço público.\n( ) A proibição de acumular cargos públicos estende-se a empregos e funções e abrange as autarquias e fundações, mas não se estendem às empresas públicas e sociedades de economia mista, suas subsidiárias, e sociedades controladas, direta ou indiretamente, pelo poder público.\n( ) Os acréscimos pecuniários percebidos por servidor público não serão computados nem acumulados para fins de concessão de acréscimos ulteriores.\n\nA sequência correta de preenchimento dos parênteses, de cima para baixo, é:",
        "alternativas": [
          {
            "id": "A",
            "text": "V, F, F, V."
          },
          {
            "id": "B",
            "text": "V, F, V, F."
          },
          {
            "id": "C",
            "text": "F, V, V, F."
          },
          {
            "id": "D",
            "text": "F, V, F, V."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 12 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-13",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Legislação Municipal e Ética Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Código de Ética do Agente Público",
          "Princípios da Administração Pública"
        ],
        "enunciado": "13. Além dos princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência administrativa, também encontra-se previsto expressamente no Código de Ética do Agente Público Municipal os seguintes princípios e valores fundamentais, exceto:",
        "alternativas": [
          {
            "id": "A",
            "text": "Preservação e defesa do patrimônio público e da probidade administrativa."
          },
          {
            "id": "B",
            "text": "Imparcialidade."
          },
          {
            "id": "C",
            "text": "Indisponibilidade do interesse público."
          },
          {
            "id": "D",
            "text": "A honestidade, a dignidade, o respeito e o decoro."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 13 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-14",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Legislação Municipal e Ética Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Código de Ética do Agente Público",
          "Conflito de Interesses"
        ],
        "enunciado": "14. Analise as afirmações a seguir e indique V para as verdadeiras e F para as falsas:\n\n( ) Considera-se conflito de interesses qualquer oportunidade de ganho que possa ser obtido em consequência das atividades desempenhadas pelo agente público em seu cargo, emprego ou função, em benefício próprio.\n( ) Ocorre conflito de interesses quando o interesse particular, que necessita ser de cunho pessoal, entra em conflito com os deveres e atribuições do agente público em seu cargo, emprego ou função.\n( ) Considera-se conflito de interesses qualquer oportunidade de ganho que possa ser obtido por meio das atividades desempenhadas pelo agente público em seu cargo, emprego ou função, em benefício de parente até o quarto grau civil.\n( ) Uma das fontes potenciais de conflitos de interesse financeiro, essas que devem ser informadas, são dívidas.\n\nBaseado no Código de Ética do Agente Público Municipal de Alfredo Chaves/ES, a sequência correta de preenchimento dos parênteses, de cima para baixo, é:",
        "alternativas": [
          {
            "id": "A",
            "text": "V, F, F, V."
          },
          {
            "id": "B",
            "text": "V, F, V, F."
          },
          {
            "id": "C",
            "text": "F, V, V, F."
          },
          {
            "id": "D",
            "text": "F, V, F, V."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 14 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-15",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Legislação Municipal e Ética Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei Orgânica Municipal",
          "Disposições Preliminares"
        ],
        "enunciado": "15. O Município de Alfredo Chaves fundado em ____________ de janeiro de mil oitocentos e ____________, é unidade do Estado do Espírito Santo com autonomia assegurada pelas Constituições Federal e Estadual, será regido pelo estabelecido na presente Lei Orgânica.\n\nTendo por referência do Lei Orgânica do Município de Alfredo Chaves/ES, marque a alternativa que preenche corretamente as lacunas acima:",
        "alternativas": [
          {
            "id": "A",
            "text": "Vinte e quatro, noventa e dois."
          },
          {
            "id": "B",
            "text": "Vinte e seis, noventa e um."
          },
          {
            "id": "C",
            "text": "Vinte e seis, noventa e dois."
          },
          {
            "id": "D",
            "text": "Vinte e quatro, noventa e um."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 15 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-16",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Legislação Municipal e Ética Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei Orgânica Municipal",
          "Regime dos Servidores Públicos Municipais",
          "Aposentadoria"
        ],
        "enunciado": "16. Levando-se em consideração o texto da Lei Orgânica do município de Alfredo Chaves/ES, verifique nas alternativas abaixo aquela que trouxer uma informação incorreta sobre a aposentadoria de servidores públicos:",
        "alternativas": [
          {
            "id": "A",
            "text": "Uma das hipóteses de aposentadoria é a voluntária, desde que cumprido tempo mínimo de dez anos de efetivo exercício no serviço público e cinco anos no cargo efetivo em que se dará a aposentadoria, aos sessenta anos de idade e trinta e cinco de contribuição, se homem, e cinquenta e cinco anos de idade e trinta de contribuição, se mulher."
          },
          {
            "id": "B",
            "text": "Poderá o servidor ser aposentado compulsoriamente, aos setenta e cinco anos de idade, com proventos proporcionais ao tempo de contribuição."
          },
          {
            "id": "C",
            "text": "É possível a aposentadoria por invalidez permanente, sendo os proventos proporcionais ao tempo de contribuição, exceto se decorrente de acidente em serviço, moléstia profissional ou doença grave, contagiosa ou incurável."
          },
          {
            "id": "D",
            "text": "O Município adota o regime geral de previdência social."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 16 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-17",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Legislação Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei Orgânica do Município de Alfredo Chaves/ES",
          "Poder Legislativo"
        ],
        "enunciado": "17. Analise as afirmações a seguir e indique V para as verdadeiras e F para as falsas:\n\n( ) A Câmara Municipal reunir-se-á em Sessões Ordinárias, extraordinárias e solenes e, no recesso em Sessões Legislativas Extraordinárias.\n( ) As votações nas Sessões da Câmara serão preferencialmente simbólicas, não podendo ser secretas.\n( ) Independentemente de convocação, a Sessão Legislativa anual funcionará de 20 de janeiro a 15 de dezembro;\n( ) As reuniões fixadas para a data inicial e final da Sessão Legislativa, serão transferidas para o primeiro dia útil subsequente, quando recaírem sábado, domingo e feriado.\n\nLevando-se em consideração a Lei Orgânica do município de Alfredo Chaves/ES, a sequência correta de preenchimento dos parênteses, de cima para baixo, é:",
        "alternativas": [
          {
            "id": "A",
            "text": "V, F, F, V."
          },
          {
            "id": "B",
            "text": "V, F, V, F."
          },
          {
            "id": "C",
            "text": "F, V, V, F."
          },
          {
            "id": "D",
            "text": "F, V, F, V."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 17 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-18",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Legislação Municipal e Ética Pública",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Código de Ética do Agente Público Municipal"
        ],
        "enunciado": "18. De acordo com o Código de Ética do Agente Público Municipal, marque a alternativa INCORRETA:",
        "alternativas": [
          {
            "id": "A",
            "text": "À Comissão de Ética incumbe fornecer, aos órgãos encarregados da gestão de pessoas, seus registros sobre conduta ética, para o efeito de instruir e fundamentar promoções e para todos os demais procedimentos próprios da carreira do servidor público."
          },
          {
            "id": "B",
            "text": "Os procedimentos a serem adotados pela Comissão de Ética, para a apuração de fato que se apresente contrário à ética, terá o rito sumário, ouvidos apenas o queixoso e o servidor, ou apenas este, se a apuração decorrer de conhecimento de ofício."
          },
          {
            "id": "C",
            "text": "Dada a eventual gravidade da conduta do servidor ou sua reincidência, poderá a Comissão de Ética encaminhar a sua decisão e respectivo expediente para o órgão competente iniciar Processo Administrativo Disciplinar – PAD –, para as providências disciplinares cabíveis."
          },
          {
            "id": "D",
            "text": "A Comissão de Ética, nos casos não previstos expressamente no Código supracitado, poderá se eximir de fundamentar o julgamento da falta de ética do servidor público, sendo-lhes vedado o uso de analogia."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 18 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-19",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Legislação Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei Orgânica do Município de Alfredo Chaves/ES",
          "Meio Ambiente"
        ],
        "enunciado": "19. Os proprietários rurais ficam obrigados a recuperar com espécies florestais nativas, _______________ ao ano do uso de suas propriedades, até que atinja o limite mínimo de _______________.\n\nConforme previsto na Lei Orgânica do município de Alfredo Chaves/ES, marque a alternativa que preenche corretamente as lacunas acima:",
        "alternativas": [
          {
            "id": "A",
            "text": "dois por cento (2%), vinte e cinco por cento (25%)."
          },
          {
            "id": "B",
            "text": "um por cento (1%), vinte por cento (20%)."
          },
          {
            "id": "C",
            "text": "dois por cento (2%), vinte por cento (20%)."
          },
          {
            "id": "D",
            "text": "um por cento (1%), vinte e cinco por cento (25%)."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 19 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-20",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Direito Constitucional",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Princípios Fundamentais da República Federativa do Brasil",
          "Objetivos Fundamentais"
        ],
        "enunciado": "20. Com fulcro no texto constitucional, é correto afirmar que se trata de um dos objetivos fundamentais da República Federativa do Brasil:",
        "alternativas": [
          {
            "id": "A",
            "text": "A dignidade da pessoa humana."
          },
          {
            "id": "B",
            "text": "A independência nacional."
          },
          {
            "id": "C",
            "text": "A prevalência dos direitos humanos."
          },
          {
            "id": "D",
            "text": "A construção de uma sociedade livre, justa e solidária."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 20 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-21",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Microsoft Excel 2016",
          "Funções e Fórmulas"
        ],
        "enunciado": "21. Que etapas são necessárias para inserir uma função no Excel 2016 (em sua versão em português e configuração padrão) utilizando o assistente de funções?",
        "alternativas": [
          {
            "id": "A",
            "text": "Clicando com o botão direito na célula desejada e selecionando a opção “Inserir função”."
          },
          {
            "id": "B",
            "text": "Utilizando o atalho “Ctrl” + “F”."
          },
          {
            "id": "C",
            "text": "Clicando na guia “Fórmulas” e selecionando “Inserir função”."
          },
          {
            "id": "D",
            "text": "Clicando na guia “Fórmulas” e selecionando a opção “Funções” e depois “Inserir funções”."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 21 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-22",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Microsoft Word 2016",
          "Mala Direta"
        ],
        "enunciado": "22. O MS-Word 2016 possui uma ferramenta chamada Mala Direta, utilizada para a criação de uma carta-modelo a ser impressa ou enviada várias vezes por e-mail, remetendo cada cópia a um destinatário diferente. Sendo assim, são tipos de documentos de mala direta que o MS-Word 2016 disponibiliza:\n\nI. Cartas;\nII. SMS;\nIII. Mensagens de E-mail;\nIV. Envelopes;\nV. Etiquetas;\nVI. Diretório.\n\nEstão corretas:",
        "alternativas": [
          {
            "id": "A",
            "text": "I, III, IV, V e VI, apenas."
          },
          {
            "id": "B",
            "text": "II, IV e V, apenas."
          },
          {
            "id": "C",
            "text": "I, II, III, IV, V e VI."
          },
          {
            "id": "D",
            "text": "I, III e VI, apenas."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 22 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-23",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Microsoft PowerPoint 2016",
          "Manipulação de Slides"
        ],
        "enunciado": "23. Considerando o Microsoft PowerPoint 2016 em sua configuração padrão PT-BR, um usuário que deseje criar um novo slide em uma apresentação, que seja idêntico ao anterior, deve utilizar qual comando?",
        "alternativas": [
          {
            "id": "A",
            "text": "Ampliar Slide."
          },
          {
            "id": "B",
            "text": "Clonar Slide."
          },
          {
            "id": "C",
            "text": "Novo Slide."
          },
          {
            "id": "D",
            "text": "Duplicar Slide."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 23 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-24",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Microsoft Word 2016",
          "Formatação de Texto",
          "Atalhos de Teclado"
        ],
        "enunciado": "24. “O atacante Gabriel Jesus desfalcará a seleção **<u>brasileira</u>** no jogo de amanhã contra a Colômbia pelas Eliminatórias para a Copa do Mundo de 2026”\n\n(FONTE: https://www.uol.com.br/esporte/futebol/ultimas-noticias/2023/11/15/gabriel-jesus-selecao-brasileira-colombia.htm)\n\nConsiderando o Microsoft Word 2016 em sua configuração padrão PT-BR, marque a opção abaixo que apresenta no nome correto das formatações aplicadas a palavra em destaque no parágrafo acima, bem como os atalhos de teclado corretos para realizar a formatação.",
        "alternativas": [
          {
            "id": "A",
            "text": "Itálico e Sublinhado / “Ctrl+I” e “Ctrl+S”."
          },
          {
            "id": "B",
            "text": "Negrito e Itálico / “Ctrl+N” e “Ctrl+T”."
          },
          {
            "id": "C",
            "text": "Negrito e Sublinhado / “Ctrl+N” e “Ctrl+S”."
          },
          {
            "id": "D",
            "text": "Sublinhado e Destacado / “Ctrl+S” e “Ctrl+D”."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 24 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-25",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Microsoft Excel 2016",
          "Funções e Fórmulas"
        ],
        "enunciado": "25. Qual função é utilizada para arredondar um número para baixo em uma planilha do Excel 2016 (em sua versão em português e configuração padrão)?",
        "alternativas": [
          {
            "id": "A",
            "text": "=ARRED.MENOS(núm; núm_dígitos)"
          },
          {
            "id": "B",
            "text": "=ARREDONDAR.PARA.BAIXO(núm; núm_dígitos)"
          },
          {
            "id": "C",
            "text": "=ARRED.BAIXO(núm; núm_dígitos)"
          },
          {
            "id": "D",
            "text": "=ARREDMENOS(núm; núm_dígitos)"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 25 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-26",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Redes de Computadores",
          "Internet",
          "Endereçamento IP"
        ],
        "enunciado": "26. O que representa um endereço IP na estrutura da Internet?",
        "alternativas": [
          {
            "id": "A",
            "text": "O nome de domínio de um website."
          },
          {
            "id": "B",
            "text": "Um código de barras para identificar o país de origem de um servidor."
          },
          {
            "id": "C",
            "text": "Uma senha de acesso aos serviços online."
          },
          {
            "id": "D",
            "text": "Um identificador único para um dispositivo conectado à internet."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 26 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-27",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Microsoft Word 2016",
          "Atalhos de Teclado"
        ],
        "enunciado": "27. Qual atalho deve ser utilizado no MS-Word 2016, em sua configuração padrão PT-BR, para formatar a fonte do documento?",
        "alternativas": [
          {
            "id": "A",
            "text": "Ctrl + = (igual)."
          },
          {
            "id": "B",
            "text": "Ctrl + D."
          },
          {
            "id": "C",
            "text": "Ctrl + O."
          },
          {
            "id": "D",
            "text": "Ctrl + W."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 27 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-28",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Segurança da Informação",
          "Ameaças e Ataques Virtuais",
          "Phishing"
        ],
        "enunciado": "28. Levando em consideração os conceitos de Segurança da Informação, marque a alternativa que apresenta a definição de um ataque de phishing:",
        "alternativas": [
          {
            "id": "A",
            "text": "Um ataque realizado por vírus que destrói o hardware do computador."
          },
          {
            "id": "B",
            "text": "Um ataque que tem o objetivo de obter informações da vítima através de solicitações falsas, se passando por empresas confiáveis."
          },
          {
            "id": "C",
            "text": "Um ataque focado na rede sem fio."
          },
          {
            "id": "D",
            "text": "Um ataque usado apenas para roubar senha de cartão de crédito."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 28 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-29",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Microsoft PowerPoint",
          "Atalhos de Teclado"
        ],
        "enunciado": "29. Marcos está apresentando um trabalho no Power Point com 44 *slides*. Ele está no slide 32 e precisa mostrar uma informação presente no slide 7. Utilizando as teclas de atalho do teclado, como ele deve proceder para chegar rapidamente ao slide 7?",
        "alternativas": [
          {
            "id": "A",
            "text": "Pressionar a tecla “Shift” + “7”."
          },
          {
            "id": "B",
            "text": "Pressionar a tecla “Alt” + “Shift” + “7”."
          },
          {
            "id": "C",
            "text": "Pressionar a tecla “7” + “Enter”."
          },
          {
            "id": "D",
            "text": "Pressionar a tecla “Ctrl” + “7”."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 29 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-30",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Noções de Informática",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Microsoft Excel 2016",
          "Funções e Fórmulas"
        ],
        "enunciado": "30. Considerando o Microsoft Excel 2016 em sua configuração padrão PT-BR, qual das opções abaixo apresenta a função do Excel que pode ser usada para encontrar a média aritimética um intervalo de células?",
        "alternativas": [
          {
            "id": "A",
            "text": "SOMA()"
          },
          {
            "id": "B",
            "text": "TOTAL()"
          },
          {
            "id": "C",
            "text": "MÉDIA()"
          },
          {
            "id": "D",
            "text": "SE()"
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 30 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-31",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Direito Tributário e Legislação Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Código Tributário Municipal",
          "Princípio da Legalidade Tributária"
        ],
        "enunciado": "31. Observado as disposições do Código Tributário do Município de Alfredo Chaves/ES, instituído pela Lei Complementar nº 027 de 2020, é incorreto afirmar que somente por lei se pode estabelecer:",
        "alternativas": [
          {
            "id": "A",
            "text": "As hipóteses de exclusão, suspensão e extinção de créditos tributários, exceto a dispensa ou redução de penalidades."
          },
          {
            "id": "B",
            "text": "A instituição de tributos ou a sua extinção."
          },
          {
            "id": "C",
            "text": "A majoração de tributos ou a sua redução."
          },
          {
            "id": "D",
            "text": "A definição de fato gerador da obrigação tributária principal e de seu sujeito passivo."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 31 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-32",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Direito Tributário e Legislação Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Código Tributário Municipal",
          "Administração Tributária",
          "Certidões Negativas"
        ],
        "enunciado": "32. Em conformidade com o Código Tributário do Município de Alfredo Chaves/ES, tratando dos deveres da administração tributária, é CORRETO afirmar que da data da formalização do pedido devidamente instruído na repartição, as certidões negativas serão fornecidas pela administração tributária em até:",
        "alternativas": [
          {
            "id": "A",
            "text": "7 (sete) dias."
          },
          {
            "id": "B",
            "text": "10 (dez) dias."
          },
          {
            "id": "C",
            "text": "15 (quinze) dias."
          },
          {
            "id": "D",
            "text": "30 (trinta) dias."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 32 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-33",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Direito Tributário",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Princípios Constitucionais Tributários",
          "Capacidade Contributiva"
        ],
        "enunciado": "33. Os princípios constitucionais tributários são normas que orientam e limitam o poder de tributar do Estado, garantindo os direitos e deveres dos contribuintes e da administração pública. Nesse sentido, é CORRETO afirmar que o princípio que prevê que o Estado deve tributar conforme as possibilidades de cada contribuinte, buscando o atingimento da “justiça fiscal”, seja o princípio da:",
        "alternativas": [
          {
            "id": "A",
            "text": "Legalidade."
          },
          {
            "id": "B",
            "text": "Isonomia."
          },
          {
            "id": "C",
            "text": "Capacidade contributiva."
          },
          {
            "id": "D",
            "text": "Anterioridade."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 33 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-38",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Direito Tributário",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Responsabilidade Tributária",
          "Sujeito Passivo Indireto"
        ],
        "enunciado": "38. A responsabilidade tributária determina quem é o responsável legal pelo pagamento de cada tributo. Em geral, quem deve pagar é aquele que possui ligação direta com o tributo, o chamado sujeito passivo direto. Entretanto, em alguns casos, um terceiro pode ser o responsável pelo pagamento dele. Esse terceiro pode não ser relacionado diretamente ao tributo, mas relaciona-se de forma indireta com ele. Por isso, é chamado de sujeito passivo indireto. O Código Tributário Nacional (CTN), em seu capítulo V, determina os casos em que a responsabilidade tributária pode ser atribuída a terceiros. Ela é dividida em diversos casos.\n\nAbaixo encontram-se todos os casos em que a responsabilidade tributária não é do sujeito passivo direto, com EXCEÇÃO da opção:",
        "alternativas": [
          {
            "id": "A",
            "text": "Responsabilidade por Transferência e Responsabilidade por Substituição."
          },
          {
            "id": "B",
            "text": "Responsabilidade Arbitrária e Responsabilidade do Sócio plenamente Pacificado."
          },
          {
            "id": "C",
            "text": "Responsabilidade dos Sucessores (ou por Sucessão) e Responsabilidade de Terceiros."
          },
          {
            "id": "D",
            "text": "Responsabilidade Solidária e Responsabilidade Subsidiária (Ou Supletiva)."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 38 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-39",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Direito Penal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Crimes Contra a Administração Pública",
          "Concussão"
        ],
        "enunciado": "39. Dos crimes contra a administração pública, define-se Concussão como:",
        "alternativas": [
          {
            "id": "A",
            "text": "Se o funcionário concorre culposamente para o crime de outrem."
          },
          {
            "id": "B",
            "text": "Apropriar-se de dinheiro ou qualquer utilidade que, no exercício do cargo, recebeu por erro de outrem."
          },
          {
            "id": "C",
            "text": "Exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida."
          },
          {
            "id": "D",
            "text": "Dar às verbas ou rendas públicas aplicação diversa da estabelecida em lei."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 39 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-fiscal_tributario5-40",
        "banca": "VUNESP",
        "ano": 2023,
        "orgao": "Prefeitura de São Paulo",
        "cargo": "Fiscal Tributário V",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Poderes da Administração Pública",
          "Poder de Polícia",
          "Atributos do Poder de Polícia"
        ],
        "enunciado": "40. Considera-se poder de polícia atividade da administração pública que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou abstenção de fato, em razão de interesse público concernente à segurança, à higiene, à ordem, aos costumes, à disciplina da produção e do mercado, ao exercício de atividades econômicas dependentes de concessão ou autorização do Poder Público, à tranquilidade pública ou ao respeito à propriedade e aos direitos individuais ou coletivos. (Redação dada pelo Ato Complementar nº 31, de 1966).\n\nDentre as alternativas abaixo, aquela que NÃO é uma das características do Poder de Polícia é:",
        "alternativas": [
          {
            "id": "A",
            "text": "A irrepreensibilidade."
          },
          {
            "id": "B",
            "text": "A coercibilidade."
          },
          {
            "id": "C",
            "text": "A auto-executoriedade."
          },
          {
            "id": "D",
            "text": "A discricionariedade."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 40 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial VUNESP.",
        "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
        "dificuldade": "médio"
      }
    ]
  },
  {
    "id": "prova_objetiva_auditor",
    "filename": "prova_objetiva_auditor.json",
    "title": "Auditor de Controle / Fiscal",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "totalQuestions": 69,
    "questions": [
      {
        "id": "q-prova_objetiva_auditor-05",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sintaxe",
          "Concordância Verbal"
        ],
        "enunciado": "5. Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.",
        "alternativas": [
          {
            "id": "A",
            "text": "Em busca da felicidade, fazem-se quaisquer esforços."
          },
          {
            "id": "B",
            "text": "Tais propostas de dissertação sempre expõe os estudantes a dilemas."
          },
          {
            "id": "C",
            "text": "A vida mostra que existe pessoas que têm limites mais estreitos."
          },
          {
            "id": "D",
            "text": "Sentimentos como a inveja torturam quem os nutrem."
          },
          {
            "id": "E",
            "text": "Ser fiel a si mesmo e aceitar as limitações: tratam-se de coisas difíceis."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 5 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-06",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Interpretação de Texto",
          "Compreensão de Texto"
        ],
        "enunciado": "6. Leia o texto, para responder às questões de números 06 a 10.\n\nVocê já pintou sua casa? Então pinte. É o que há de melhor a fazer, se não podemos pintar de novo o Brasil, por dentro e por fora. Alegramos nossa área particular, instaurando cores tônicas ou repousantes, e pondo em moda a limpeza. Se cada um caiasse seu barraco, que brinco não seria este país, pelo menos na parte domiciliar?\nO cronista está pintando a casa, e se entretém os leitores com este fato minúsculo é porque dele se pode extrair algum ensino, para ilustração geral. É bom pintar casa; melhor do que pintar cabelo. Notei que a melancolia natural se agravava nos últimos quinze anos, tantos quantos habito esta mansão, e se envinagrava em misantropia, injeções e comprimidos de felicidade não adiantavam. Um dia descobri: eram as esquadrias negras. O antigo morador assim as pintara, e a negra influência baixara sobre o espírito, sobre as relações com o mundo exterior, sobre as crônicas, que exageravam a inflação, afinal bem módica, e a eventual falta d’água, que de longe em longe nos importuna levemente, omitindo por outro lado os aspectos positivos da conjuntura, como a encantadora risada do Presidente. A velha casa tem enorme pé-direito, e portas e janelas noturnas também se alastravam pela vida acima, enegrecendo-a. O negro lambri da sala de jantar enchia de treva o próprio arroz, e em poltronas de treva almas sombrias contemplavam escuras imagens de tevê. Nosso gatinho branco virou preto. E assim por diante.\n\n(Carlos Drummond de Andrade, *Pinte sua casa*. *Poesia e prosa*.)\n\nA decisão do narrador de pintar a própria casa se deve principalmente",
        "alternativas": [
          {
            "id": "A",
            "text": "à possibilidade imediata de mudar as condições de vida no Brasil, fazendo nele uma limpeza."
          },
          {
            "id": "B",
            "text": "à expectativa de ver-se livre das convenções que o impedem de escrever."
          },
          {
            "id": "C",
            "text": "ao desejo de voltar no tempo, reencontrando a mocidade que perdeu."
          },
          {
            "id": "D",
            "text": "ao receio de ignorar fatos negativos de seu país, como a inflação e a falta d’água."
          },
          {
            "id": "E",
            "text": "à descoberta de que vivia num ambiente sombrio, que o tornava taciturno."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 6 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-07",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Pontuação",
          "Uso da Vírgula"
        ],
        "enunciado": "7. Assinale a alternativa em que a vírgula foi empregada segundo o mesmo princípio que dita seu emprego no período – *A velha casa tem enorme pé-direito, e portas e janelas noturnas também se alastravam pela vida acima.*",
        "alternativas": [
          {
            "id": "A",
            "text": "É o que há de melhor a fazer, se não podemos pintar de novo o Brasil..."
          },
          {
            "id": "B",
            "text": "O antigo morador assim as pintara, e a negra influência baixara sobre o espírito..."
          },
          {
            "id": "C",
            "text": "Alegramos nossa área particular, instaurando cores tônicas ou repousantes..."
          },
          {
            "id": "D",
            "text": "Notei que a melancolia natural se agravava nos últimos quinze anos, tantos quantos habito esta mansão..."
          },
          {
            "id": "E",
            "text": "Se cada um caiasse seu barraco, que brinco não seria este país..."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 7 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-08",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Morfologia",
          "Conjugação Verbal",
          "Colocação Pronominal"
        ],
        "enunciado": "8. Assinale a alternativa que reescreve a passagem – *... e se entretém os leitores com este fato minúsculo é porque dele se pode extrair algum ensino...* – observando a conjugação verbal e a colocação de pronomes de acordo com a norma-padrão.",
        "alternativas": [
          {
            "id": "A",
            "text": "... e se entretia os leitores com este fato minúsculo era porque dele podia extrair-se algum ensino..."
          },
          {
            "id": "B",
            "text": "... e se entreteu os leitores com este fato minúsculo foi porque dele pudesse se extrair algum ensino..."
          },
          {
            "id": "C",
            "text": "... e caso entretesse os leitores com este fato minúsculo era porque dele poderia se extrair algum ensino..."
          },
          {
            "id": "D",
            "text": "... e se entretinha os leitores com este fato minúsculo será porque dele poderia-se extrair algum ensino..."
          },
          {
            "id": "E",
            "text": "... e se entretivesse os leitores com este fato minúsculo seria porque dele se poderia extrair algum ensino..."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 8 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-09",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Semântica",
          "Sentido Próprio e Figurado",
          "Denotação e Conotação"
        ],
        "enunciado": "9. O trecho do texto em que o narrador empregou somente expressões em sentido próprio está na alternativa:",
        "alternativas": [
          {
            "id": "A",
            "text": "É o que há de melhor a fazer, se não podemos pintar de novo o Brasil."
          },
          {
            "id": "B",
            "text": "Se cada um caiasse seu barraco, que brinco não seria este país."
          },
          {
            "id": "C",
            "text": "Notei que a melancolia natural se agravava nos últimos quinze anos..."
          },
          {
            "id": "D",
            "text": "... injeções e comprimidos de felicidade não adiantavam."
          },
          {
            "id": "E",
            "text": "... e portas e janelas noturnas também se alastravam pela vida acima..."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 9 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-10",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Língua Portuguesa",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Regência Verbal",
          "Regência Nominal",
          "Crase"
        ],
        "enunciado": "10. Considere a passagem:\n\n**Alegramos** nossa área particular, **instaurando** cores tônicas ou repousantes, e **pondo em moda a** limpeza.\n\nA substituição das expressões destacadas mostra regência e emprego do sinal de crase de acordo com a norma padrão, respectivamente, na alternativa:",
        "alternativas": [
          {
            "id": "A",
            "text": "Avivamos à; dando preferência por; destacando à."
          },
          {
            "id": "B",
            "text": "Tornamos alegre à; estipulando por; dando realce à."
          },
          {
            "id": "C",
            "text": "Fazemos viçosa à; aplicando em; assumindo à."
          },
          {
            "id": "D",
            "text": "Damos viço à; optando por; dando destaque à."
          },
          {
            "id": "E",
            "text": "Conferimos vida à; usando de; adotando à."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 10 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-11",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Raciocínio Lógico",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Equivalências Lógicas",
          "Lógica Proposicional"
        ],
        "enunciado": "11. Considere a afirmação: *Se Adélia vence a eleição, então Gilmar continua membro da comissão.* Do ponto de vista lógico, uma afirmação equivalente é:",
        "alternativas": [
          {
            "id": "A",
            "text": "Gilmar continua membro da comissão e Adélia vence a eleição."
          },
          {
            "id": "B",
            "text": "Adélia não vence a eleição ou Gilmar continua membro da comissão."
          },
          {
            "id": "C",
            "text": "Se Gilmar continua membro da comissão, então Adélia vence a eleição."
          },
          {
            "id": "D",
            "text": "Ou Gilmar continua membro da comissão ou Adélia vence a eleição."
          },
          {
            "id": "E",
            "text": "Se Adélia não vence a eleição, então Gilmar não continua membro da comissão."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 11 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-12",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Raciocínio Lógico",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Teoria dos Conjuntos",
          "Diagramas de Venn"
        ],
        "enunciado": "12. O diagrama a seguir mostra o número de elementos pertencentes aos conjuntos, inclusive discriminando a quantidade de elementos nas intersecções.\n\nConsidere como X o número que corresponde ao total de elementos do conjunto A que também pertençam ao conjunto D, mas que não pertençam ao conjunto B. Considere como Y o número que corresponde ao total de todos os elementos do conjunto B que não pertençam ao conjunto C. A diferença entre Y e X é igual a",
        "alternativas": [
          {
            "id": "A",
            "text": "12."
          },
          {
            "id": "B",
            "text": "14."
          },
          {
            "id": "C",
            "text": "15."
          },
          {
            "id": "D",
            "text": "18."
          },
          {
            "id": "E",
            "text": "19."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 12 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-13",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Raciocínio Lógico",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Estruturas Lógicas",
          "Argumentação Lógica"
        ],
        "enunciado": "13. Considere verdadeiras as afirmações a seguir.\n\nI. Elias não é policial.\nII. Se Alves é juiz, então Bruno é promotor.\nIII. Se Bruno não é promotor, então Carlos não é oficial de justiça.\nIV. Se Carlos não é oficial de justiça, então Durval não é advogado de defesa.\nV. Durval é advogado de defesa ou Elias é policial.\n\nA partir dessas afirmações, é correto concluir que",
        "alternativas": [
          {
            "id": "A",
            "text": "Durval não é advogado de defesa."
          },
          {
            "id": "B",
            "text": "Carlos não é oficial de justiça."
          },
          {
            "id": "C",
            "text": "Alves não é juiz."
          },
          {
            "id": "D",
            "text": "Bruno é promotor."
          },
          {
            "id": "E",
            "text": "Alves é juiz."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 13 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-14",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Raciocínio Lógico",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lógica Proposicional",
          "Valores Lógicos das Proposições"
        ],
        "enunciado": "14. Considere falsas as proposições a seguir.\n\nI. João não foi à festa ou Cláudio foi trabalhar.\nII. Lucas caiu da escada e João não foi à festa.\nIII. Daniel saiu de casa ou Rafael não foi ao baile.\nIV. Lucas caiu da escada e Daniel saiu de casa.\n\nA partir dessas proposições, existe uma única possibilidade de ser verdadeira a afirmação:",
        "alternativas": [
          {
            "id": "A",
            "text": "Lucas caiu da escada."
          },
          {
            "id": "B",
            "text": "João não foi à festa."
          },
          {
            "id": "C",
            "text": "Daniel saiu de casa."
          },
          {
            "id": "D",
            "text": "Cláudio foi trabalhar."
          },
          {
            "id": "E",
            "text": "Rafael não foi ao baile."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 14 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-15",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Raciocínio Lógico",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sequências e Padrões",
          "Problemas Lógicos com Fichas"
        ],
        "enunciado": "15. Oito fichas estão ordenadas em uma fileira. Na face superior de cada ficha, está impressa uma letra. A sequência ordenada é: A; B; C; D; E; F; G; H. É feita uma modificação de forma que a primeira ficha da fileira perde uma posição e a sequência ordenada torna-se B; A; C; D; E; F; G; H. Uma segunda modificação é feita e a segunda ficha dessa nova ordenação perde duas posições. Em uma terceira modificação, a terceira ficha desta nova ordenação perde três posições e, em seguida, a quarta modificação é feita e a quarta ficha da última ordenação perde quatro posições. Após essas quatro modificações, a ordenação das oito fichas é",
        "alternativas": [
          {
            "id": "A",
            "text": "B; A; C; F; D; G; H; E."
          },
          {
            "id": "B",
            "text": "B; C; F; A; G; D; H; E."
          },
          {
            "id": "C",
            "text": "B; C; A; F; D; G; H; E."
          },
          {
            "id": "D",
            "text": "B; F; A; D; C; G; E; H."
          },
          {
            "id": "E",
            "text": "B; A; C; F; D; H; E; G."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 15 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-16",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sequências Numéricas",
          "Progressão Aritmética"
        ],
        "enunciado": "16. A sequência a seguir possui 23 termos assim ordenados:\n\n(401; 383; 365; 347; 329; ... ; 5)\n\nA posição do termo dessa sequência cujo valor é o mais próximo da diferença entre os valores dos 9º e 19º termos é igual a",
        "alternativas": [
          {
            "id": "A",
            "text": "10ª."
          },
          {
            "id": "B",
            "text": "11ª."
          },
          {
            "id": "C",
            "text": "12ª."
          },
          {
            "id": "D",
            "text": "13ª."
          },
          {
            "id": "E",
            "text": "14ª."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 16 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-17",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sequências Figurais",
          "Raciocínio Sequencial"
        ],
        "enunciado": "17. Observe a sequência figural, que é ilimitada, ordenada e seu padrão de formação permanece constante.\n\n*(Sequência de figuras com octógonos estrelados contendo símbolos de sol e raio ao redor)*\n\nA primeira figura mostra o sol e raio defronte a uma mesma ponta da estrela. Em seguida o sol e o raio mudam de posição, mas sempre defronte a alguma ponta da estrela. Quando novamente ocorrer o fato de o sol e o raio estarem defronte a uma mesma ponta da estrela, a figura será",
        "alternativas": [
          {
            "id": "A",
            "text": "[Figura com o sol e o raio posicionados na ponta inferior direita da estrela]"
          },
          {
            "id": "B",
            "text": "[Figura com o sol e o raio posicionados na ponta superior esquerda da estrela]"
          },
          {
            "id": "C",
            "text": "[Figura com o sol e o raio posicionados na ponta superior direita da estrela]"
          },
          {
            "id": "D",
            "text": "[Figura com o sol e o raio posicionados na ponta inferior esquerda da estrela]"
          },
          {
            "id": "E",
            "text": "[Figura com o sol e o raio posicionados na ponta leste/direita da estrela]"
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 17 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-18",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lógica de Proposições",
          "Estruturas Lógicas"
        ],
        "enunciado": "18. Considere verdadeiras as afirmações.\n\nI. Se Marcos é pedreiro, então Juca não é mecânico.\nII. Juca é policial e mecânico.\nIII. Clóvis é eletricista ou oficial de justiça.\nIV. Ou Marta é costureira ou Marta é escrivã.\nV. Se Marcos não é pedreiro, então Clóvis é apenas oficial de justiça.\n\nNessa situação, o número máximo de funções explicitamente exercidas por todas essas pessoas é igual a",
        "alternativas": [
          {
            "id": "A",
            "text": "7."
          },
          {
            "id": "B",
            "text": "6."
          },
          {
            "id": "C",
            "text": "5."
          },
          {
            "id": "D",
            "text": "4."
          },
          {
            "id": "E",
            "text": "3."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 18 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-19",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Diagramas Lógicos",
          "Quantificadores"
        ],
        "enunciado": "19. Sabe-se que alguns programadores são analistas de sistemas. Sabe-se também que todos os programadores são digitadores. A partir dessas informações, é correto concluir que",
        "alternativas": [
          {
            "id": "A",
            "text": "todos os digitadores são analistas de sistemas."
          },
          {
            "id": "B",
            "text": "nenhum digitador é analista de sistemas."
          },
          {
            "id": "C",
            "text": "todos os analistas de sistemas são digitadores."
          },
          {
            "id": "D",
            "text": "nenhum analista de sistemas é digitador."
          },
          {
            "id": "E",
            "text": "alguns analistas de sistemas são digitadores."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 19 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-20",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Raciocínio Lógico e Matemático",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lógica de Proposições",
          "Equivalências e Negações Lógicas"
        ],
        "enunciado": "20. Considere a afirmação: *Estudei muito e passei no concurso, ou minha preguiça foi maior.* Uma afirmação que corresponde à negação lógica da afirmação anterior é",
        "alternativas": [
          {
            "id": "A",
            "text": "Não estudei muito ou não passei no concurso, e minha preguiça não foi maior."
          },
          {
            "id": "B",
            "text": "Se não estudei muito então minha preguiça foi maior e não passei no concurso."
          },
          {
            "id": "C",
            "text": "Minha preguiça foi maior e não passei no concurso, e não estudei muito."
          },
          {
            "id": "D",
            "text": "Não estudei muito e não passei no concurso e minha preguiça foi maior."
          },
          {
            "id": "E",
            "text": "Estudei muito e não passei no concurso e minha preguiça foi maior."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 20 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-21",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Matemática Financeira",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Juros Simples",
          "Juros Compostos",
          "Taxas Equivalentes"
        ],
        "enunciado": "21. Um capital é aplicado a uma taxa de juros simples de 9% ao semestre, por 2 semestres. A taxa semestral de juros compostos equivalente está entre",
        "alternativas": [
          {
            "id": "A",
            "text": "8% e 9%"
          },
          {
            "id": "B",
            "text": "7% e 8%"
          },
          {
            "id": "C",
            "text": "6% e 7%"
          },
          {
            "id": "D",
            "text": "5% e 6%"
          },
          {
            "id": "E",
            "text": "4% e 5%"
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 21 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-22",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Matemática Financeira",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Taxa Nominal e Taxa Efetiva",
          "Capitalização Composta"
        ],
        "enunciado": "22. Um empreiteiro fez um empréstimo a uma taxa nominal de 18% ao ano, com capitalização mensal. A taxa anual efetiva que ele pagará de juros, desconsideradas quaisquer outras taxas, será de, aproximadamente,\n\n**Dado:** Caso julgue necessário, utilize os valores a seguir.\n1,014⁶ = 1,087\n1,015⁶ = 1,093\n1,016⁶ = 1,100\n1,017⁶ = 1,106\n1,018⁶ = 1,113",
        "alternativas": [
          {
            "id": "A",
            "text": "18,2%"
          },
          {
            "id": "B",
            "text": "19,5%"
          },
          {
            "id": "C",
            "text": "21,0%"
          },
          {
            "id": "D",
            "text": "22,3%"
          },
          {
            "id": "E",
            "text": "23,9%"
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 22 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-23",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Matemática Financeira",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Desconto Simples Racional",
          "Desconto Simples Comercial"
        ],
        "enunciado": "23. Uma pessoa detentora de uma nota promissória com valor nominal de R$ 2.000,00, diante de dificuldades financeiras, decide descontar a nota 4 meses antes do seu vencimento, recebendo por ela o valor atual de R$ 1.000,00.\nAs taxas de desconto simples racional (\"por dentro\") e comercial (\"por fora\") são de, respectivamente,",
        "alternativas": [
          {
            "id": "A",
            "text": "100% e 50%"
          },
          {
            "id": "B",
            "text": "50% e 25%"
          },
          {
            "id": "C",
            "text": "25% e 12,5%"
          },
          {
            "id": "D",
            "text": "12,5% e 6,25%"
          },
          {
            "id": "E",
            "text": "6,25% e 3,125%"
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 23 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-24",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Matemática Financeira",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sistemas de Amortização",
          "Sistema de Amortização Constante (SAC)"
        ],
        "enunciado": "24. Uma pessoa financiou a compra de um terreno de R$ 120.000,00 no Sistema de Amortização Constante em 6 parcelas mensais postecipadas, ou seja, a primeira delas paga um mês após o empréstimo. A taxa de juros é de 1% a.m.\n\nA tabela a seguir mostra alguns valores do fluxo de pagamentos.\n\n| Parcela | Valor da parcela | Amortização | Juros | Saldo devedor |\n| :---: | :---: | :---: | :---: | :---: |\n| 0 | ------- | ------- | ------- | R$ 120.000,00 |\n| 1 | | | R$ 1.200,00 | |\n| 2 | | | | |\n| 3 | | | | |\n| 4 | | | | |\n| 5 | | | | |\n| 6 | | | | ------- |\n\nO montante total de juros que a pessoa terá pagado ao final do empréstimo será de",
        "alternativas": [
          {
            "id": "A",
            "text": "R$ 12.000,00."
          },
          {
            "id": "B",
            "text": "R$ 10.000,00."
          },
          {
            "id": "C",
            "text": "R$ 7.200,00."
          },
          {
            "id": "D",
            "text": "R$ 5.400,00."
          },
          {
            "id": "E",
            "text": "R$ 4.200,00."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 24 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-25",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Matemática Financeira",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Análise de Investimentos",
          "Taxa Interna de Retorno (TIR)",
          "Fluxo de Caixa"
        ],
        "enunciado": "25. A tabela a seguir exibe o fluxo de caixa nos 3 primeiros meses de um investimento.\n\n| Mês | Fluxo de caixa |\n| :---: | :---: |\n| 0 | –2.300 |\n| 1 | |\n| 2 | 1.210 |\n| 3 | 1.331 |\n\nSabendo-se que a taxa interna de retorno é de 10%, o valor referente ao mês 1 é de",
        "alternativas": [
          {
            "id": "A",
            "text": "R$ 1.100,00."
          },
          {
            "id": "B",
            "text": "R$ 1.000,00."
          },
          {
            "id": "C",
            "text": "R$ 500,00."
          },
          {
            "id": "D",
            "text": "R$ 330,00."
          },
          {
            "id": "E",
            "text": "R$ 120,00."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 25 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-26",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Finanças Públicas",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Receita Pública",
          "Classificação das Receitas Públicas"
        ],
        "enunciado": "26. Nos últimos anos, a União tem recebido dividendos das empresas que controla para tentar atingir a meta de superávit primário. Esses dividendos são receitas",
        "alternativas": [
          {
            "id": "A",
            "text": "extraorçamentárias."
          },
          {
            "id": "B",
            "text": "derivadas."
          },
          {
            "id": "C",
            "text": "de capital."
          },
          {
            "id": "D",
            "text": "vinculadas."
          },
          {
            "id": "E",
            "text": "originárias."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 26 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-27",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Finanças Públicas",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sistema Tributário Nacional",
          "Princípios Tributários"
        ],
        "enunciado": "27. Em relação aos tributos e às contribuições para a seguridade social, é correto afirmar que",
        "alternativas": [
          {
            "id": "A",
            "text": "a lei que majorar alíquotas do imposto sobre a renda começa a produzir efeitos na data de sua publicação."
          },
          {
            "id": "B",
            "text": "a lei que instituir modificações nas alíquotas do imposto de importação deve obedecer ao princípio constitucional da anterioridade."
          },
          {
            "id": "C",
            "text": "somente a União pode instituir novos tributos não previstos na Constituição Federal por meio de lei complementar, os quais devem obedecer obrigatoriamente ao princípio da não cumulatividade."
          },
          {
            "id": "D",
            "text": "as contribuições de melhoria têm o mesmo fato gerador que as taxas, com a diferença de que todos os contribuintes pagam o mesmo valor."
          },
          {
            "id": "E",
            "text": "a União, desde que justificado o interesse público, pode instituir isenções nos impostos de competência dos Estados e dos Municípios."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 27 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-28",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Finanças Públicas",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Tributação",
          "Progressividade Tributária"
        ],
        "enunciado": "28. Um imposto é progressivo quando",
        "alternativas": [
          {
            "id": "A",
            "text": "onera de forma uniforme todos os contribuintes, independentemente de seu nível de renda."
          },
          {
            "id": "B",
            "text": "estabelece alíquotas fixas sobre o consumo de bens e serviços."
          },
          {
            "id": "C",
            "text": "incide com mais intensidade sobre os contribuintes de renda mais baixa."
          },
          {
            "id": "D",
            "text": "os contribuintes de rendas mais elevadas pagam imposto numa proporção maior de sua renda que aqueles de rendas mais baixas."
          },
          {
            "id": "E",
            "text": "sua arrecadação aumenta na mesma proporção que a renda dos contribuintes."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 28 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-29",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Finanças Públicas",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Incidência Tributária",
          "Elasticidade da Oferta e da Demanda"
        ],
        "enunciado": "29. Em relação aos impostos indiretos sobre vendas nos mercados em concorrência perfeita, é correto afirmar que",
        "alternativas": [
          {
            "id": "A",
            "text": "o produtor sempre consegue repassar o ônus do aumento da alíquota do tributo integralmente ao consumidor."
          },
          {
            "id": "B",
            "text": "se, em módulo, a elasticidade-preço da oferta ao preço vigente no mercado for menor que a da demanda, o ônus decorrente de um aumento na alíquota do imposto recairá mais sobre os produtores do que sobre os consumidores."
          },
          {
            "id": "C",
            "text": "se a curva de demanda for infinitamente elástica, o ônus da instituição de um imposto sobre vendas recairá integralmente sobre os consumidores."
          },
          {
            "id": "D",
            "text": "a instituição do imposto não afetará o preço e a quantidade produzida nesse mercado se a curva de oferta for infinitamente elástica."
          },
          {
            "id": "E",
            "text": "a quantidade transacionada no mercado após a instituição do imposto será tanto menor quanto menos elástica for a curva de demanda dos consumidores."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 29 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-30",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Finanças Públicas",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Necessidade de Financiamento do Setor Público",
          "Déficit Nominal e Operacional"
        ],
        "enunciado": "30. A diferença entre os conceitos de déficit público nominal e operacional é que o primeiro",
        "alternativas": [
          {
            "id": "A",
            "text": "é obtido incluindo-se os gastos com os juros nominais cobrados sobre as dívidas interna e externa, enquanto no segundo somente são incluídos os juros reais."
          },
          {
            "id": "B",
            "text": "representa a diferença entre as receitas e despesas correntes de todas as esferas de Governo, enquanto no segundo é representada a diferença entre as receitas e despesas de capital."
          },
          {
            "id": "C",
            "text": "representa a diferença entre as receitas e despesas financeiras dos entes públicos, enquanto o segundo representa a diferença entre as receitas e despesas não financeiras."
          },
          {
            "id": "D",
            "text": "corresponde ao aumento da dívida bruta do setor público, enquanto o segundo corresponde ao aumento da dívida líquida."
          },
          {
            "id": "E",
            "text": "não inclui os investimentos realizados pelos entes públicos, enquanto o segundo inclui."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 30 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-31",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Civil",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "LINDB",
          "Vigência e Eficácia da Lei",
          "Repristinação"
        ],
        "enunciado": "31. A repristinação consiste",
        "alternativas": [
          {
            "id": "A",
            "text": "no lapso temporal entre a promulgação da lei e sua vigência, não podendo ser inferior a 45 (quarenta e cinco) dias."
          },
          {
            "id": "B",
            "text": "na supressão de lei ou dispositivo legal, em razão da declaração de inconstitucionalidade, por controle concentrado."
          },
          {
            "id": "C",
            "text": "na revogação tácita de lei, em virtude de lei posterior com ela incompatível."
          },
          {
            "id": "D",
            "text": "no suprimento de omissão da lei pela aplicação da analogia, dos costumes e dos princípios gerais de direito."
          },
          {
            "id": "E",
            "text": "na restauração da lei revogada por ter a lei revogadora perdido sua vigência, sendo admitida apenas quando há expressa disposição legal."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 31 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-32",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Civil",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Pessoas Jurídicas",
          "Desconsideração da Personalidade Jurídica"
        ],
        "enunciado": "32. Assinale a alternativa correta acerca da teoria da desconsideração da personalidade jurídica, no âmbito das relações cíveis reguladas pelo Código Civil de 2002.",
        "alternativas": [
          {
            "id": "A",
            "text": "O requerimento da desconsideração da personalidade jurídica é ato privativo dos membros do Ministério Público."
          },
          {
            "id": "B",
            "text": "Pode ser requerida sempre que a pessoa jurídica não possuir recursos para saldar as dívidas perante seus credores."
          },
          {
            "id": "C",
            "text": "A teoria pode ser aplicada com o objetivo de atingir patrimônio da pessoa jurídica, por obrigações contraídas em nome dos sócios."
          },
          {
            "id": "D",
            "text": "A aplicação da teoria é limitada aos sócios que estão no quadro societário por mais de 2 (dois) anos."
          },
          {
            "id": "E",
            "text": "O juiz poderá aplicar a desconsideração da personalidade jurídica de ofício, em decisão fundamentada, quando vislumbrar abuso da personalidade jurídica."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 32 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-33",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Civil",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Prescrição e Decadência",
          "Causas que impedem, suspendem ou interrompem a prescrição"
        ],
        "enunciado": "33. Acerca do instituto da prescrição, assinale a alternativa que apresenta corretamente as consequências da suspensão e da interrupção no cômputo do prazo prescricional.",
        "alternativas": [
          {
            "id": "A",
            "text": "Tanto nos casos de suspensão como nos casos de interrupção, computa-se integralmente o prazo transcorrido antes da causa suspensiva ou interruptiva, distinguindo-se os institutos pela natureza do evento que gera a suspensão ou a interrupção."
          },
          {
            "id": "B",
            "text": "Em caso de suspensão, computa-se integralmente o prazo transcorrido antes da causa suspensiva; em caso de interrupção, reinicia-se integralmente o cômputo do prazo, após o término da causa interruptiva."
          },
          {
            "id": "C",
            "text": "Em caso de suspensão, reinicia-se integralmente o cômputo do prazo, após o término da causa suspensiva; em caso de interrupção, computa-se integralmente o prazo transcorrido antes da causa interruptiva."
          },
          {
            "id": "D",
            "text": "Tanto nos casos de suspensão como nos casos de interrupção, reinicia-se integralmente o cômputo do prazo, após a cessação da causa suspensiva ou interruptiva, distinguindo-se os institutos pela natureza do evento que gera a suspensão ou a interrupção."
          },
          {
            "id": "E",
            "text": "Em caso de suspensão, computa-se o prazo transcorrido antes da causa suspensiva, até o limite de 2 (dois) anos; em caso de interrupção, reinicia-se integralmente o cômputo do prazo, após o término da causa interruptiva."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 33 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-34",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Civil",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Direitos Reais",
          "Propriedade Fiduciária"
        ],
        "enunciado": "34. Assinale a alternativa correta acerca do instituto da propriedade fiduciária.",
        "alternativas": [
          {
            "id": "A",
            "text": "A constituição da propriedade fiduciária independe de registro do contrato no órgão competente."
          },
          {
            "id": "B",
            "text": "Em caso de inadimplemento pelo devedor, poderá o credor, em regra, optar pela adjudicação da coisa, caso não prefira aliená-la."
          },
          {
            "id": "C",
            "text": "O regime da alienação fiduciária é aplicável aos móveis, sendo vedada sua utilização para bens imóveis."
          },
          {
            "id": "D",
            "text": "Com a constituição da propriedade fiduciária, ocorre o desdobramento da posse, atribuindo-se ao devedor a posse direta e ao credor a posse indireta."
          },
          {
            "id": "E",
            "text": "Em caso de alienação do bem por inadimplemento do devedor, quando o produto da venda não for suficiente para quitação da dívida, o devedor ficará exonerado do excedente."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 34 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-42",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Tributário",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Princípios Tributários",
          "Capacidade Contributiva"
        ],
        "enunciado": "42. “Sempre que possível, os impostos terão caráter pessoal e serão graduados segundo a capacidade econômica do contribuinte, facultado à administração tributária, especialmente para conferir efetividade a esses objetivos, identificar, respeitados os direitos individuais e nos termos da lei, o patrimônio, os rendimentos e as atividades econômicas do contribuinte”. Referida disposição constitucional reflete o princípio da",
        "alternativas": [
          {
            "id": "A",
            "text": "isonomia formal."
          },
          {
            "id": "B",
            "text": "capacidade contributiva."
          },
          {
            "id": "C",
            "text": "pessoalidade."
          },
          {
            "id": "D",
            "text": "uniformidade jurídica da tributação."
          },
          {
            "id": "E",
            "text": "generalidade."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 42 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-43",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Tributário",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Simples Nacional",
          "Lei Complementar nº 123/2006"
        ],
        "enunciado": "43. O tratamento diferenciado e favorecido a ser dispensado às microempresas e empresas de pequeno porte de que trata a LC nº 123/06 é gerido pelas instâncias que especifica. Dentre elas, a que tem por finalidade orientar e assessorar a formulação e coordenação da política nacional de desenvolvimento das microempresas e empresas de pequeno porte, bem como acompanhar e avaliar a sua implantação, sob a presidência e coordenação da Secretaria da Micro e Pequena Empresa da Presidência da República, denomina-se",
        "alternativas": [
          {
            "id": "A",
            "text": "Fórum Permanente das Microempresas e Empresas de Pequeno Porte."
          },
          {
            "id": "B",
            "text": "Fórum Gestor das Micro e Pequenas empresas."
          },
          {
            "id": "C",
            "text": "Comitê Gestor do Simples Nacional."
          },
          {
            "id": "D",
            "text": "Comitê da Gestão da Rede Nacional para Simplificação do Registro e da Legalização de Empresas e Negócios."
          },
          {
            "id": "E",
            "text": "Comitê Gerenciador das Atividades das Microempresas e Empresas de Pequeno Porte."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 43 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-44",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Tributário",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Repartição das Receitas Tributárias",
          "Fundo de Participação dos Municípios (FPM)"
        ],
        "enunciado": "44. Do produto da arrecadação dos impostos sobre renda e proventos de qualquer natureza e sobre produtos industrializados, a União entregará ao Fundo de Participação dos Municípios o percentual de",
        "alternativas": [
          {
            "id": "A",
            "text": "30%"
          },
          {
            "id": "B",
            "text": "27,5%"
          },
          {
            "id": "C",
            "text": "25 %"
          },
          {
            "id": "D",
            "text": "22,5%"
          },
          {
            "id": "E",
            "text": "21%"
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 44 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-45",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Constitucional",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Controle de Constitucionalidade",
          "Ações Constitucionais"
        ],
        "enunciado": "45. A omissão inconstitucional normativa pode ser objeto de controle por meio",
        "alternativas": [
          {
            "id": "A",
            "text": "da arguição de descumprimento de preceito fundamental."
          },
          {
            "id": "B",
            "text": "da reclamação constitucional indicando a omissão legislativa."
          },
          {
            "id": "C",
            "text": "do mandado de injunção."
          },
          {
            "id": "D",
            "text": "da ação declaratória de constitucionalidade."
          },
          {
            "id": "E",
            "text": "da representação de inconstitucionalidade em relação a atos normativos anteriores à Constituição."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 45 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-46",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Constitucional",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Sistema Tributário Nacional",
          "Competência Tributária Municipal"
        ],
        "enunciado": "46. Compete aos Municípios instituir impostos sobre",
        "alternativas": [
          {
            "id": "A",
            "text": "serviços de transporte intermunicipal e de comunicação."
          },
          {
            "id": "B",
            "text": "propriedade territorial rural."
          },
          {
            "id": "C",
            "text": "transmissão causa mortis e doação, de quaisquer bens ou direitos."
          },
          {
            "id": "D",
            "text": "transmissão inter vivos, a qualquer título, por ato oneroso, de bens imóveis."
          },
          {
            "id": "E",
            "text": "propriedade de veículos automotores, observando as alíquotas estabelecidas pelos Estados."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 46 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-47",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Constitucional",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Organização Político-Administrativa",
          "Repartição de Competências"
        ],
        "enunciado": "47. No que se refere à repartição das competências prevista no texto constitucional, é correto afirmar que",
        "alternativas": [
          {
            "id": "A",
            "text": "a competência da União para legislar sobre normas gerais exclui a competência suplementar dos Estados."
          },
          {
            "id": "B",
            "text": "inexistindo lei federal sobre normas gerais, os Estados exercerão a competência legislativa plena, para atender a suas peculiaridades."
          },
          {
            "id": "C",
            "text": "é reservada aos Municípios a competência para legislar sobre desapropriação."
          },
          {
            "id": "D",
            "text": "a superveniência de lei federal sobre normas gerais não suspende a eficácia da lei estadual, ainda no que lhe for contrário."
          },
          {
            "id": "E",
            "text": "inexistindo lei federal sobre normas gerais, compete exclusivamente aos Estados o ingresso de mandado de injunção."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 47 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-48",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Constitucional",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Fiscalização Contábil, Financeira e Orçamentária",
          "Controle dos Municípios"
        ],
        "enunciado": "48. No que tange à fiscalização e controle dos Municípios, nos termos da Constituição Federal, é correto afirmar que o parecer prévio, emitido pelo órgão competente sobre as contas que o Prefeito deve anualmente prestar,",
        "alternativas": [
          {
            "id": "A",
            "text": "só deixará de prevalecer por decisão da maioria absoluta dos membros da Câmara Municipal."
          },
          {
            "id": "B",
            "text": "só deixará de prevalecer por decisão judicial referente à nulidade procedimental."
          },
          {
            "id": "C",
            "text": "só deixará de prevalecer por decisão da maioria relativa dos membros da Câmara Municipal."
          },
          {
            "id": "D",
            "text": "só deixará de prevalecer por decisão de dois terços dos membros da Câmara Municipal."
          },
          {
            "id": "E",
            "text": "só deixará de prevalecer se não ficarem à disposição do contribuinte pelo prazo de 90 (noventa dias) para exame e apreciação, o qual poderá questionar a legitimidade mediante pedido de revisão das contas."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 48 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-49",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Poderes Administrativos",
          "Abuso de Poder",
          "Excesso de Poder",
          "Desvio de Finalidade"
        ],
        "enunciado": "49. Assinale a alternativa que corretamente exemplifica uma situação em que se encontre demonstrado o instituto do abuso de poder.",
        "alternativas": [
          {
            "id": "A",
            "text": "O Prefeito Municipal que não permite que todos os munícipes sejam atendidos no hospital municipal de urgências, alegando restrições orçamentárias e aplicação da teoria da reserva do possível, não incorre em abuso de poder."
          },
          {
            "id": "B",
            "text": "O Auditor Fiscal Tributário Municipal que aplica multa por infração de trânsito a quem estaciona em local proibido incorre em abuso de poder por atuar fora dos limites de sua competência."
          },
          {
            "id": "C",
            "text": "O Prefeito Municipal que desapropria bem imóvel pertencente a desafeto político, por interesse pessoal, mas que nele instala unidade básica de saúde, não pratica abuso de poder por desvio de finalidade."
          },
          {
            "id": "D",
            "text": "O Guarda Municipal que não permite a entrada de pessoa estranha à Administração em prédio público municipal não destinado a atendimento ao público pratica ato caracterizável como abuso de poder."
          },
          {
            "id": "E",
            "text": "O Auditor Fiscal Tributário Municipal que decide não autuar empresa de pequeno porte que deixou de recolher quantia ínfima de tributo municipal, mas que emprega vários funcionários, não pratica abuso de poder."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 49 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-50",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Poderes Administrativos",
          "Poder de Polícia",
          "Poder Disciplinar",
          "Poder Regulamentar",
          "Poder Hierárquico"
        ],
        "enunciado": "50. Assinale a alternativa que corretamente trata dos poderes administrativos.",
        "alternativas": [
          {
            "id": "A",
            "text": "Inexiste qualquer vedação constitucional para que pessoas administrativas de direito privado possam exercer o poder de polícia em sua modalidade fiscalizatória."
          },
          {
            "id": "B",
            "text": "Poder vinculado é a prerrogativa concedida aos agentes administrativos de elegerem, entre várias condutas possíveis, a que traduz maior conveniência e oportunidade para o interesse público."
          },
          {
            "id": "C",
            "text": "O poder regulamentar é subjacente à lei e pressupõe a existência desta, sendo, portanto, atos formalizadores aptos a criar direitos e obrigações primárias ou secundárias."
          },
          {
            "id": "D",
            "text": "Poder disciplinar é o que cabe à Administração Pública para apurar infrações e aplicar penalidades aos servidores públicos, que abrange as sanções impostas a particulares, mesmo que não sujeitos à disciplina interna da Administração."
          },
          {
            "id": "E",
            "text": "Nos Poderes Judiciário e Executivo não existe hierarquia no sentido de relação de coordenação e subordinação, no que diz respeito às suas funções institucionais."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 50 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-51",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Licitações e Contratos Administrativos",
          "Autotutela",
          "Anulação e Revogação dos Atos Administrativos"
        ],
        "enunciado": "51. Agente público municipal verifica uma irregularidade em um processo licitatório promovido por órgão da Administração Pública Municipal, que causa a nulidade do certame. Em razão disso, deve ele",
        "alternativas": [
          {
            "id": "A",
            "text": "revogar o certame, pois deve prevalecer o interesse público de que seja realizado um certame licitatório sem quaisquer vícios de legalidade."
          },
          {
            "id": "B",
            "text": "representar à autoridade que lhe é hierarquicamente superior, para que esta solicite a anulação do ato ao Poder Judiciário, já que somente este pode invalidar tais atos."
          },
          {
            "id": "C",
            "text": "comunicar o fato aos licitantes, que são os únicos legitimados a provocar a Administração, que poderá, então, declarar a nulidade."
          },
          {
            "id": "D",
            "text": "instar a autoridade competente a promover a anulação do certame, já que a Administração possui a prerrogativa de autotutela, que lhe permite rever os atos ex officio."
          },
          {
            "id": "E",
            "text": "instar a autoridade competente a promover a revogação do certame, pois a prerrogativa da autotutela permite a revogação, e não a anulação, dos atos administrativos."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 51 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-52",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Administrativo",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Controle da Administração Pública",
          "Controle Externo",
          "Tribunal de Contas"
        ],
        "enunciado": "52. O Tribunal de Contas do Estado de São Paulo verifica que, em determinada unidade da Prefeitura Municipal de São José do Rio Preto, foi realizada uma despesa ilegal. Neste caso, considerando os limites do controle externo previstos na Constituição Federal, pode o Tribunal de Contas",
        "alternativas": [
          {
            "id": "A",
            "text": "assinar prazo para que o órgão adote as providências de invalidação do ato ilegal."
          },
          {
            "id": "B",
            "text": "ressalvar a despesa ilegal na prestação de contas anual do Prefeito."
          },
          {
            "id": "C",
            "text": "representar ao Poder Executivo Municipal, para que anule a despesa."
          },
          {
            "id": "D",
            "text": "comunicar o fato à Câmara Municipal, que poderá invalidar a despesa."
          },
          {
            "id": "E",
            "text": "aplicar ao responsável multa proporcional ao dano causado ao erário."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 52 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-53",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Legislação Tributária Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "ISSQN",
          "Incidência Tributária",
          "Lei Complementar Municipal nº 178/2003"
        ],
        "enunciado": "53. A Lei Complementar nº 178, de 29.12.2003 (e suas alterações posteriores), regula a instituição do Imposto Sobre Serviço de Qualquer Natureza (ISSQN) no município de São José do Rio Preto. Sobre a incidência do ISSQN, é correto afirmar que o imposto incide sobre",
        "alternativas": [
          {
            "id": "A",
            "text": "os serviços constantes da Tabela anexa ao referido ato legal, não compreendidos na competência da União e dos Estados, somente quando esses sejam a atividade preponderante do estabelecimento prestador."
          },
          {
            "id": "B",
            "text": "os livros, jornais ou periódicos e/ou o papel destinado à sua impressão."
          },
          {
            "id": "C",
            "text": "a exportação de serviços para o exterior do país."
          },
          {
            "id": "D",
            "text": "os serviços constantes da Tabela anexa ao referido ato legal, não compreendidos na competência da União e dos Estados, provenientes do exterior do País, ou cuja prestação se tenha iniciado no exterior do País, em relação aos tomadores domiciliados no Município."
          },
          {
            "id": "E",
            "text": "os serviços constantes da Tabela anexa ao referido ato legal, não compreendidos na competência da União e dos Estados, a menos que envolva o fornecimento concomitante de mercadorias, caso em que essa incidência não ocorrerá."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 53 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-54",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Legislação Tributária Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "ISSQN",
          "Isenção Tributária",
          "Lei Complementar Municipal nº 178/2003"
        ],
        "enunciado": "54. São isentos do ISSQN no município de São José do Rio Preto, segundo a Lei Complementar nº 178/2003 e suas alterações posteriores:",
        "alternativas": [
          {
            "id": "A",
            "text": "quaisquer prestações de serviços de construção civil."
          },
          {
            "id": "B",
            "text": "os profissionais autônomos, desde que inscritos no Cadastro Municipal Mobiliário, há mais de cinco (5) anos."
          },
          {
            "id": "C",
            "text": "a impressão de jornais, livros e periódicos feita por empresas que respondem pela prestação de serviços gráficos a terceiros."
          },
          {
            "id": "D",
            "text": "os serviços desenvolvidos ou cujo resultado se verifique no Município, ainda que o pagamento seja feito por residente no exterior."
          },
          {
            "id": "E",
            "text": "as apresentações de música popular, concertos, recitais, espetáculos folclóricos e populares, realizadas em caráter temporário e com fins exclusivamente beneficentes."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 54 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-55",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Legislação Tributária Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "ISSQN",
          "Fato Gerador",
          "Responsabilidade Tributária",
          "Lei Complementar Municipal nº 178/2003"
        ],
        "enunciado": "55. A Lei Complementar nº 178/2003 (com suas alterações posteriores) estabelece que",
        "alternativas": [
          {
            "id": "A",
            "text": "são isentas do ISSQN todas as prestações de serviços efetuadas por meio de cooperativas de prestação de serviços, já que essas entidades têm imunidade prevista na Constituição Federal."
          },
          {
            "id": "B",
            "text": "são irrelevantes, para a caracterização do fato gerador do ISSQN, a natureza ou validade jurídica das operações ou dos atos praticados."
          },
          {
            "id": "C",
            "text": "as instituições financeiras e empresas seguradoras não podem ser responsáveis pela retenção do ISSQN, já que o valor intermediado no mercado de títulos e valores mobiliários, bem como os depósitos bancários, não estão no campo de incidência do referido imposto."
          },
          {
            "id": "D",
            "text": "a Empresa Brasileira de Correios e Telégrafos, quando tomar ou intermediar serviços prestados por suas agências franqueadas, não está obrigada a efetuar a retenção do imposto como responsável tributário, em virtude de sua condição de empresa imune ao ISSQN."
          },
          {
            "id": "E",
            "text": "a base de cálculo do ISSQN é o preço do serviço, não sendo autorizada a dedução de descontos concedidos pelo prestador na nota fiscal de serviços (descontos incondicionais)."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 55 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-56",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Legislação Tributária Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "IPTU",
          "Sujeito Passivo",
          "Lei Complementar Municipal nº 96/1998"
        ],
        "enunciado": "56. A Lei Complementar nº 96, de 29 de dezembro de 1998 (com suas alterações posteriores), regula o Imposto Predial e Territorial Urbano (IPTU) do município de São José do Rio Preto. O referido ato legal estabelece que",
        "alternativas": [
          {
            "id": "A",
            "text": "a base de cálculo do IPTU é o valor de mercado do imóvel, comprovado por meio de laudo assinado por três peritos responsáveis."
          },
          {
            "id": "B",
            "text": "o referido imposto deve ser quitado pelo contribuinte nos prazos legais, juntamente com a taxa de incêndio lançada pela administração municipal."
          },
          {
            "id": "C",
            "text": "o contribuinte do imposto é o proprietário, o titular do domínio útil ou o possuidor do bem imóvel, nos termos da legislação tributária e civil vigentes."
          },
          {
            "id": "D",
            "text": "as alíquotas incidentes sobre o imóvel serão iguais, estando o imóvel construído ou não."
          },
          {
            "id": "E",
            "text": "o IPTU incide sobre o imóvel que, localizado dentro da zona urbana ou urbanizável, seja comprovada e precipuamente utilizado em exploração extrativo-vegetal, agrícola, pecuária ou agroindustrial, independentemente de sua área."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 56 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-57",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Tributário e Legislação Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Legislação Municipal de São José do Rio Preto",
          "IPTU",
          "Lei Complementar nº 96/1998"
        ],
        "enunciado": "57. À vista do disposto na Lei Complementar nº 96, de 29 de dezembro de 1998 (com suas alterações posteriores), é correto afirmar que",
        "alternativas": [
          {
            "id": "A",
            "text": "se o imóvel tiver sido objeto de compromisso de venda e compra, devidamente registrado ou averbado no Registro de Imóveis, o lançamento do imposto poderá ser procedido indistintamente, em nome do promitente vendedor ou do compromissário comprador, ou de ambos."
          },
          {
            "id": "B",
            "text": "na hipótese de que o imóvel tenha suas obras concluídas durante o exercício, o imposto será devido somente a partir do exercício subsequente ao da construção."
          },
          {
            "id": "C",
            "text": "o espólio não é pessoalmente responsável pelos débitos de IPTU do “de cujus”, existentes à data da abertura da sucessão."
          },
          {
            "id": "D",
            "text": "o fato gerador do IPTU ocorre mensalmente dentro do ano-calendário respectivo."
          },
          {
            "id": "E",
            "text": "se o imóvel for explorado economicamente, seu proprietário estará dispensado do pagamento do IPTU no caso em que o respectivo resultado financeiro seja nulo."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 57 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-58",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Direito Tributário e Legislação Municipal",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Legislação Municipal de São José do Rio Preto",
          "ITBI",
          "Lei Complementar nº 323/2010"
        ],
        "enunciado": "58. A Lei Complementar nº 323, de 27.10.2010, entre outros assuntos, regula o Imposto sobre Transmissão Inter Vivos de Bens Imóveis e de direitos reais sobre eles (ITBI) no município de São José do Rio Preto. Segundo o referido ato legal,",
        "alternativas": [
          {
            "id": "A",
            "text": "para a finalidade de determinação do valor do imposto, serão abatidas do valor venal quaisquer dívidas que onerem o imóvel transmitido."
          },
          {
            "id": "B",
            "text": "o imposto incide sobre a transmissão de bem imóvel nos casos em que a área for destinada exclusivamente à execução de conjuntos habitacionais e de propriedade de cooperativas habitacionais ligadas a entidades de classe de trabalhadores."
          },
          {
            "id": "C",
            "text": "a dação do imóvel em pagamento não se inclui entre as hipóteses de incidência do imposto."
          },
          {
            "id": "D",
            "text": "o imposto incide sobre a transmissão de quaisquer bens imóveis e de direitos reais sobre eles à alíquota de 10%."
          },
          {
            "id": "E",
            "text": "o imposto incide sobre a transmissão de bens ou direitos incorporados ao patrimônio de pessoas jurídicas em realização de capital quando essas tiverem como atividade preponderante a compra e venda desses bens ou direitos, a sua locação ou arrendamento mercantil."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 58 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-59",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade Geral e Avançada",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Controle de Estoques",
          "Métodos de Avaliação de Estoques",
          "PEPS"
        ],
        "enunciado": "59. A Cia. Petrópolis apresentou a seguinte movimentação no mês de abril de 2014 em relação à mercadoria X, registrada na ficha de estoque respectiva:\n\nSaldo inicial em 01.04.2014: 80 unidades a R$ 500,00 cada uma;\n\nAquisições:\n06.04.2014: 100 unidades a R$ 520,00 cada;\n15.04.2014: 200 unidades a R$ 510,00 cada;\n20.04.2014: 180 unidades a R$ 515,00 cada;\n26.04.2014: 150 unidades a R$ 530,00 cada.\nTotal das aquisições: R$ 326.200,00\n\nAlienações:\n10.04.2014: 150 unidades a R$ 1.000,00 cada;\n18.04.2014: 200 unidades a R$ 1.100,00 cada;\n23.04.2014: 160 unidades a R$ 1.100,00 cada;\n27.04.2014: 180 unidades a R$ 1.200,00 cada.\nTotal das alienações: R$ 762.000,00\n\nA companhia utiliza o método PEPS (primeiro que entra, primeiro que sai) para avaliação de seus estoques. O valor do seu estoque final em 30.04.2014 correspondeu, em R$, a:",
        "alternativas": [
          {
            "id": "A",
            "text": "10.600,00."
          },
          {
            "id": "B",
            "text": "10.400,00."
          },
          {
            "id": "C",
            "text": "10.300,00."
          },
          {
            "id": "D",
            "text": "10.200,00."
          },
          {
            "id": "E",
            "text": "11.400,00."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 59 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-60",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade Geral e Avançada",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Lei nº 11.638/2007 e Lei nº 11.941/2009",
          "Ativo Diferido",
          "Reservas de Reavaliação"
        ],
        "enunciado": "60. Em relação aos saldos existentes de Ativo Diferido e Reservas de Reavaliação em 31.12.2008, as novas normas contábeis introduzidas a partir da vigência das Leis nº 11.638/2007 e nº 11.941/2009 e os pronunciamentos do Comitê de Pronunciamentos Contábeis determinam que",
        "alternativas": [
          {
            "id": "A",
            "text": "as reservas de reavaliação têm, obrigatoriamente, que ser estornadas contra a conta do ativo que foi reavaliado."
          },
          {
            "id": "B",
            "text": "a companhia que tiver reservas de reavaliação deve, obrigatoriamente, baixar essas reservas contra a conta Lucros ou Prejuízos Acumulados."
          },
          {
            "id": "C",
            "text": "apenas as despesas pré-operacionais devem ser classificadas no Ativo Diferido a partir do exercício de 2009."
          },
          {
            "id": "D",
            "text": "a companhia tem o direito de manter os saldos do Ativo Diferido existentes em 31.12.2008 e proceder normalmente à sua amortização."
          },
          {
            "id": "E",
            "text": "os saldos do Ativo Diferido devem ser obrigatoriamente baixados contra a conta Lucros ou Prejuízos Acumulados."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 60 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-61",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade Geral e Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Patrimônio Líquido",
          "Reservas de Capital"
        ],
        "enunciado": "61. É uma reserva de capital:",
        "alternativas": [
          {
            "id": "A",
            "text": "Reserva para pagamento de dividendo obrigatório."
          },
          {
            "id": "B",
            "text": "Reserva legal."
          },
          {
            "id": "C",
            "text": "Reserva de contingências."
          },
          {
            "id": "D",
            "text": "Reserva de ágio na emissão de ações."
          },
          {
            "id": "E",
            "text": "Reserva de reavaliação."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 61 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-62",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade Geral e Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Ativo Imobilizado",
          "Redução ao Valor Recuperável de Ativos (Impairment)"
        ],
        "enunciado": "62. A Cia. Cruzeiro do Norte efetuou o teste de recuperabilidade do valor dos ativos (impairment test) em uma máquina de seu ativo imobilizado, tendo registrado uma perda de valor de R$ 28.000,00. A máquina foi adquirida por R$ 600.000,00. Na ocasião do teste, o percentual de depreciação acumulada da máquina era de 40% do valor depreciável, e a companhia estimou o valor justo da máquina em R$ 325.000,00.\n\nÀ vista do exposto, é correto afirmar que o valor em uso da referida máquina foi estimado pela companhia como correspondente, em R$, a:",
        "alternativas": [
          {
            "id": "A",
            "text": "326.000,00."
          },
          {
            "id": "B",
            "text": "322.000,00."
          },
          {
            "id": "C",
            "text": "332.000,00."
          },
          {
            "id": "D",
            "text": "330.000,00."
          },
          {
            "id": "E",
            "text": "336.000,00."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 62 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-63",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade Geral e Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Método de Equivalência Patrimonial (MEP)",
          "Investimentos em Coligadas e Controladas"
        ],
        "enunciado": "63. A Cia. Franca é controlada pela Cia. Ribeirão Preto, que tem 75% de seu capital social. No final do exercício de 2013, a Cia. Franca registrou um lucro líquido do exercício de R$ 850.000,00 na sua Demonstração de Resultado. A controlada também aumentou seu capital em R$ 100.000,00 no exercício, sendo que a Cia. Ribeirão Preto e todos os acionistas minoritários subscreveram e integralizaram a parte que lhes era correspondente nesse aumento. No mesmo exercício, ao efetuar a avaliação do investimento pela equivalência patrimonial, a controladora registrou um resultado positivo de equivalência patrimonial, em R$, de:",
        "alternativas": [
          {
            "id": "A",
            "text": "712.500,00."
          },
          {
            "id": "B",
            "text": "75.000,00."
          },
          {
            "id": "C",
            "text": "462.500,00."
          },
          {
            "id": "D",
            "text": "562.500,00."
          },
          {
            "id": "E",
            "text": "637.500,00."
          }
        ],
        "gabarito": "C",
        "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 63 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-64",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade Geral e Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Ajuste a Valor Presente (AVP)",
          "Contas a Receber"
        ],
        "enunciado": "64. A Cia. Comercial Amazonas vendeu mercadorias a prazo, em 20 prestações iguais e sucessivas de R$ 1.000,00, a primeira vencendo no mês posterior ao da venda. A companhia usou uma taxa de juros de 1% ao mês para calcular o ajuste a valor presente desse fluxo de caixa. Sabe-se que o ajuste a valor presente dessa alienação correspondeu a R$ 1.950,00. A companhia efetuou corretamente a contabilização dessa transação segundo as normas brasileiras de contabilidade, lançando o ajuste como conta redutora de recebíveis. Pode-se concluir que",
        "alternativas": [
          {
            "id": "A",
            "text": "o Ativo da companhia aumentou R$ 20.000,00."
          },
          {
            "id": "B",
            "text": "a companhia auferiu uma receita de vendas de R$ 18.050,00."
          },
          {
            "id": "C",
            "text": "a conta de Recebíveis foi creditada em R$ 1.950,00."
          },
          {
            "id": "D",
            "text": "a conta de Ajustes a Valor Presente foi debitada em R$ 20.000,00."
          },
          {
            "id": "E",
            "text": "o Passivo da companhia foi aumentado em R$ 1.950,00."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 64 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-65",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade Geral e Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Demonstração dos Fluxos de Caixa (DFC)"
        ],
        "enunciado": "65. Os seguintes dados foram extraídos do Balanço Patrimonial e da Demonstração de Resultado da Cia. Ametista, relativos ao exercício encerrado em 31.12.2013, sendo que as variações foram calculadas em relação aos valores de 31.12.2012:\n\n| Conta / Evento | Valor (R$) |\n| :--- | :--- |\n| Aumento de Contas a Pagar | 100.000,00 |\n| Lucro Líquido do Exercício | 480.000,00 |\n| Aumento de Fornecedores | 20.000,00 |\n| Despesas de Depreciação do Imobilizado | 170.000,00 |\n| Aumento de Recebíveis | 60.000,00 |\n| Diminuição dos Estoques | 50.000,00 |\n| Resultado Negativo da Equivalência Patrimonial | 110.000,00 |\n\nConsiderando-se apenas esses dados, pode-se concluir que o Fluxo de Caixa das atividades operacionais da companhia representou uma entrada de caixa e equivalentes-caixa, em R$, de:",
        "alternativas": [
          {
            "id": "A",
            "text": "870.000,00."
          },
          {
            "id": "B",
            "text": "990.000,00."
          },
          {
            "id": "C",
            "text": "860.000,00."
          },
          {
            "id": "D",
            "text": "800.000,00."
          },
          {
            "id": "E",
            "text": "910.000,00."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 65 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-66",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade Geral e Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Análise das Demonstrações Contábeis",
          "Índices de Liquidez"
        ],
        "enunciado": "66. O índice de liquidez corrente da Cia. Montenegro, referente ao exercício encerrado em 31.12.2013, foi 1,75. O índice de liquidez seca, no mesmo período, foi 1,6. A companhia apresenta no seu ativo circulante as seguintes contas: Caixa e Equivalentes-Caixa, Recebíveis e Estoques. Se o Passivo Circulante foi igual a R$ 2.000.000,00 em 31.12.2013, o valor dos estoques da companhia nessa mesma data equivaleu, em R$, a:",
        "alternativas": [
          {
            "id": "A",
            "text": "420.000,00."
          },
          {
            "id": "B",
            "text": "360.000,00."
          },
          {
            "id": "C",
            "text": "280.000,00."
          },
          {
            "id": "D",
            "text": "345.000,00."
          },
          {
            "id": "E",
            "text": "300.000,00."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 66 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-67",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade de Custos",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Custos de Aquisição",
          "Tributos Recuperáveis"
        ],
        "enunciado": "67. A Cia. Industrial Paranavaí adquiriu 10.000 unidades de uma matéria-prima, pagando R$ 20,00 por unidade e mais o Imposto sobre Produtos Industrializados (IPI), cobrado por fora do preço de venda a uma alíquota de 10%. O fornecedor é uma pessoa jurídica contribuinte do PIS e da COFINS no regime de cumulatividade (0,65% e 3%, respectivamente). Como a operação foi no Estado de São Paulo, incidiu ICMS sobre a operação a uma alíquota de 18%. A adquirente é contribuinte do PIS e COFINS no regime da não cumulatividade (1,65% e 7,6%, respectivamente). Todos os tributos incidentes sobre a operação são recuperáveis para a empresa adquirente. O custo unitário da aquisição desse lote de matéria-prima será registrado na ficha de estoque da Cia. Paranavaí (em R$) por:",
        "alternativas": [
          {
            "id": "A",
            "text": "16,11."
          },
          {
            "id": "B",
            "text": "15,67."
          },
          {
            "id": "C",
            "text": "14,55."
          },
          {
            "id": "D",
            "text": "17,24."
          },
          {
            "id": "E",
            "text": "15,27."
          }
        ],
        "gabarito": "B",
        "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 67 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-68",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade de Custos",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Custo dos Produtos Vendidos (CPV)",
          "Demonstração do Resultado"
        ],
        "enunciado": "68. Foram extraídos os seguintes dados, em R$, da contabilidade da Cia. Industrial Tamoio, relativos ao ano-calendário de 2013:\n\n| Item | Valor (R$) |\n| :--- | :--- |\n| Receita bruta de vendas de produtos industrializados (sem o IPI) | 1.200.000,00 |\n| IPI incidente sobre a venda | 96.000,00 |\n| ICMS, PIS e COFINS incidentes sobre a receita bruta de vendas | 259.800,00 |\n| Custo da produção acabada | 600.000,00 |\n| Estoque final de produtos acabados | 120.650,00 |\n\nO lucro bruto por ela obtido nas operações de venda equivaleu a 50% do custo dos produtos vendidos. O estoque inicial de produtos acabados, nesse exercício, correspondeu, em R$, a:",
        "alternativas": [
          {
            "id": "A",
            "text": "90.650,00."
          },
          {
            "id": "B",
            "text": "146.800,00."
          },
          {
            "id": "C",
            "text": "93.850,00."
          },
          {
            "id": "D",
            "text": "147.450,00."
          },
          {
            "id": "E",
            "text": "112.750,00."
          }
        ],
        "gabarito": "D",
        "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 68 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-69",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade de Custos",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Custeio Variável",
          "Margem de Contribuição"
        ],
        "enunciado": "69. A Cia. Líbano Industrial, fabricante de um único produto X, produziu 150.000 unidades no exercício de início de suas atividades. Durante o período, foram vendidas 120.000 unidades ao preço de R$ 50,00 cada uma. Os custos e as despesas da companhia, no referido exercício, foram:\n\nI. Custos e despesas variáveis, por unidade:\n– Matéria-prima: R$ 12,00\n– Materiais indiretos: R$ 4,00\n– CIF variáveis: R$ 11,00\n– Despesas variáveis: 10% do preço de venda\n\nII. Custos e despesas fixos totais do exercício:\n– Mão-de-Obra da fábrica: R$ 650.000,00\n– Depreciação dos equipamentos industriais: R$ 250.000,00\n– Outros gastos de fabricação: R$ 150.000,00\n– Salários do Pessoal da Administração: R$ 180.000,00\n– Demais Despesas Administrativas do departamento comercial: R$ 120.000,00\n\nConsiderando apenas esses dados, se a companhia utilizasse o sistema de custeio variável, seu lucro líquido no exercício, antes dos tributos sobre o lucro, corresponderia, em R$, a:",
        "alternativas": [
          {
            "id": "A",
            "text": "1.110.000,00."
          },
          {
            "id": "B",
            "text": "860.000,00."
          },
          {
            "id": "C",
            "text": "990.000,00."
          },
          {
            "id": "D",
            "text": "1.050.000,00."
          },
          {
            "id": "E",
            "text": "810.000,00."
          }
        ],
        "gabarito": "E",
        "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 69 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-70",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade de Custos",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Apropriação de Custos",
          "Regime de Competência"
        ],
        "enunciado": "70. Determinado material direto foi adquirido por uma companhia industrial para utilização em seu processo de fabricação. A aquisição foi feita a prazo, mas a companhia, por problemas financeiros, somente pagou o referido material dois meses após o vencimento da duplicata. O custo desse material deve ser computado no custo de produção da companhia no mês de",
        "alternativas": [
          {
            "id": "A",
            "text": "sua requisição pelo departamento de produção da companhia."
          },
          {
            "id": "B",
            "text": "sua aquisição."
          },
          {
            "id": "C",
            "text": "seu pagamento ao fornecedor."
          },
          {
            "id": "D",
            "text": "vencimento da duplicata, apesar de ter sido paga posteriormente."
          },
          {
            "id": "E",
            "text": "venda dos produtos cujo custo de produção integrou."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 70 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-71",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade de Custos",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Produção Conjunta",
          "Produção por Processo",
          "Custeio ABC",
          "Custeio Variável"
        ],
        "enunciado": "71. É correto afirmar que",
        "alternativas": [
          {
            "id": "A",
            "text": "no processo de produção conjunta, o valor das vendas dos subprodutos é mais importante que a dos coprodutos."
          },
          {
            "id": "B",
            "text": "o equivalente de produção é uma forma de atribuição de custos unitários de produção a bens fabricados na sistemática da produção por processo."
          },
          {
            "id": "C",
            "text": "a departamentalização dos custos é um método que deve ser evitado, pois não permite o controle e o rateio de forma mais adequada dos custos indiretos de fabricação."
          },
          {
            "id": "D",
            "text": "o pressuposto do sistema de custeio ABC é o atribuir mais custos indiretos de fabricação aos produtos que são mais representativos no faturamento total da empresa."
          },
          {
            "id": "E",
            "text": "a margem de contribuição unitária, no sistema de custeio variável, consiste na diferença entre o preço do produto e os custos fixos unitários de produção."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 71 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-72",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade de Custos",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Ponto de Equilíbrio",
          "Margem de Contribuição",
          "Análise Custo-Volume-Lucro"
        ],
        "enunciado": "72. Uma companhia produz e vende um único produto, cujos custos e despesas fixas de produção totalizam R$ 900.000,00 mensais. O preço de venda unitário do produto é R$ 200,00, e o custo variável unitário de sua produção, R$ 95,00. As despesas variáveis unitárias representam 15% do preço de venda. Se a companhia produzir 5000 unidades a mais que seu ponto de equilíbrio contábil, o seu lucro líquido corresponderá, em R$, a:",
        "alternativas": [
          {
            "id": "A",
            "text": "325.000,00."
          },
          {
            "id": "B",
            "text": "450.000,00."
          },
          {
            "id": "C",
            "text": "415.000,00."
          },
          {
            "id": "D",
            "text": "375.000,00."
          },
          {
            "id": "E",
            "text": "395.000,00."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 72 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-73",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Risco de Auditoria",
          "Risco Inerente"
        ],
        "enunciado": "73. Em auditoria, o denominado risco inerente",
        "alternativas": [
          {
            "id": "A",
            "text": "resulta de condições, eventos, circunstâncias ou decisões tomadas pela administração que possam afetar adversamente a entidade auditada."
          },
          {
            "id": "B",
            "text": "decorre de condições que indiquem incentivos ou pressões para que a fraude seja perpetrada."
          },
          {
            "id": "C",
            "text": "é a suscetibilidade de um saldo de uma conta ou uma classe de transação apresentar uma distorção relevante no seu valor registrado nas demonstrações contábeis."
          },
          {
            "id": "D",
            "text": "depende da eficácia dos controles internos da entidade, que devem ser examinados pelo auditor por meio de testes adequados."
          },
          {
            "id": "E",
            "text": "não está relacionado com a natureza e a extensão dos procedimentos aplicados pelo auditor nem com o planejamento ineficaz da auditoria."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 73 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-74",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Procedimentos de Auditoria",
          "Testes de Controle"
        ],
        "enunciado": "74. Testes de controle são procedimentos de auditoria que têm por objetivo",
        "alternativas": [
          {
            "id": "A",
            "text": "detectar distorções relevantes no nível de afirmações (declarações da administração da entidade que estão incorporadas nas demonstrações contábeis)."
          },
          {
            "id": "B",
            "text": "produzir evidências de auditoria que sirvam para suportar ou fundamentar a opinião do auditor em relação à adequação das demonstrações contábeis."
          },
          {
            "id": "C",
            "text": "avaliar a existência de erros ou fraudes nos registros contábeis da entidade."
          },
          {
            "id": "D",
            "text": "produzir evidências de que os ativos e passivos da entidade estão mensurados pelos seus valores justos e se estes foram adequadamente estimados pela entidade auditada."
          },
          {
            "id": "E",
            "text": "avaliar a efetividade operacional dos controles internos da entidade na prevenção ou detecção e correção de distorções relevantes no nível de afirmações."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 74 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-75",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Conciliação Bancária",
          "Procedimentos de Auditoria"
        ],
        "enunciado": "75. O saldo devedor da conta analítica Bancos conta Movimento-Banco Ideal S/A, registrado no livro Razão da Cia. Horizonte em 31.12.2013, era de R$ 192.820,00, antes da conciliação bancária a ser efetuada pelo auditor independente. O saldo credor constante do extrato bancário emitido pelo referido banco, na mesma data, correspondia a R$ 193.450,00. Os seguintes fatos contábeis, referentes à matéria, foram levantados pelo auditor:\n\n– Despesas bancárias cobradas pelo banco, no extrato, no valor de R$ 290,00, ainda não contabilizadas na entidade.\n\n– cheques nᵒˢ 198325 a 327, emitidos e contabilizados pela empresa, mas ainda não sacados pelos favorecidos no banco no valor total de R$ 6.190,00;\n\n– cheque nº 352497, emitido pela Cia. Itaporanga a favor da entidade, no valor de R$ 1.750,00, erroneamente debitado na conta corrente da Cia. Guaiuba, cujo estorno foi efetuado pelo banco somente em 04.01.2014;\n\n– duplicata de aceite da Cia. Irmão Maior no valor de R$ 3.520,00, descontada pela companhia no banco, por ele devolvida por falta de pagamento, fato ainda não contabilizado na sociedade.\n\nDe posse dessas informações, o auditor concluiu que o saldo correto, em R$, da referida conta correspondia, em 31.12.2003, a:",
        "alternativas": [
          {
            "id": "A",
            "text": "189.010,00."
          },
          {
            "id": "B",
            "text": "190.370,00."
          },
          {
            "id": "C",
            "text": "188.620,00."
          },
          {
            "id": "D",
            "text": "189.300,00."
          },
          {
            "id": "E",
            "text": "187.260,00."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 75 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-76",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade Geral e Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Auditoria do Ativo Imobilizado",
          "Normas Brasileiras de Contabilidade (NBC TG 27)"
        ],
        "enunciado": "76. Na auditoria do grupo Imobilizado do Ativo Não Circulante, o auditor independente deve observar as normas brasileiras de contabilidade sobre o reconhecimento e mensuração desses ativos. Em relação ao assunto, é correto afirmar que",
        "alternativas": [
          {
            "id": "A",
            "text": "os gastos com o desembaraço aduaneiro na importação de bens do Ativo Imobilizado devem ser registrados pela entidade como despesa do exercício da importação."
          },
          {
            "id": "B",
            "text": "os bens do Ativo Imobilizado objeto de arrendamento mercantil financeiro devem ser contabilizados pelo total das contraprestações a pagar à instituição financeira arrendadora, sem necessidade de ajuste a valor presente, mesmo que de longo prazo."
          },
          {
            "id": "C",
            "text": "os gastos com conserto e manutenção dos ativos que não resultem em aumento de sua vida útil por um prazo superior a um ano devem ser ativados."
          },
          {
            "id": "D",
            "text": "os impostos recuperáveis incidentes sobre a aquisição de ativos imobilizados não devem compor o custo de aquisição do ativo, sendo contabilizados como ativos fiscais diferidos."
          },
          {
            "id": "E",
            "text": "o registro dos encargos de depreciação deve ser efetuado a partir da data da aquisição do ativo imobilizado."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 76 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-77",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade Geral e Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Investimentos em Participações Societárias",
          "Método da Equivalência Patrimonial (MEP)"
        ],
        "enunciado": "77. Ao examinar o subgrupo Investimentos do Ativo Não Circulante da Cia. A, o auditor independente constatou que a entidade tinha a propriedade das seguintes participações societárias:\n\nI. sessenta por cento das ações com direito a voto da Cia. B;\nII. vinte por cento das ações sem direito a voto da Cia. C;\nIII. dez por cento das ações com direito a voto na Cia. D;\nIV. vinte e cinco por cento das ações com direito a voto da Cia. E.\n\nConstatou também que, desconsiderando o investimento em que era controladora, a Cia. A detinha influência significativa apenas na Cia. C e na Cia. E.\n\nAo examinar se tais participações societárias estavam mensuradas corretamente, o auditor verificou que a entidade auditada adotou os procedimentos recomendados pelas normas brasileiras de contabilidade. Portanto, foram avaliadas pelo método da equivalência patrimonial as participações societárias:",
        "alternativas": [
          {
            "id": "A",
            "text": "na companhia B, apenas."
          },
          {
            "id": "B",
            "text": "nas companhias B, C e E, apenas."
          },
          {
            "id": "C",
            "text": "nas companhias D e E, apenas."
          },
          {
            "id": "D",
            "text": "nas companhias B e C, apenas."
          },
          {
            "id": "E",
            "text": "nas companhias C e E, apenas."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 77 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-78",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade Geral e Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Eventos Subsequentes (NBC TA 560)",
          "Normas de Auditoria Independente"
        ],
        "enunciado": "78. Em relação a eventos subsequentes, de acordo com a NBC TA 560, é correto afirmar que",
        "alternativas": [
          {
            "id": "A",
            "text": "a aprovação final das demonstrações contábeis pelos acionistas é condição necessária, embora não suficiente, para o auditor independente concluir que foi obtida evidência de auditoria apropriada e suficiente para servir de base à sua opinião sobre as demonstrações contábeis."
          },
          {
            "id": "B",
            "text": "segundo a referida norma, a data do relatório do auditor independente pode ser anterior à data de aprovação das demonstrações contábeis, desde que a administração ou os responsáveis pela governança corporativa da entidade não se oponham."
          },
          {
            "id": "C",
            "text": "caso a administração tenha divulgado as demonstrações contábeis apesar da notificação do auditor independente para que não o fizesse devido à existência de eventos subsequentes significativos, não é considerado apropriado pela norma que o auditor busque assessoria legal para a adoção de medidas a serem tomadas em função de seus direitos e das suas obrigações legais."
          },
          {
            "id": "D",
            "text": "o auditor independente deve solicitar à administração e, quando apropriado, aos responsáveis pela governança, uma representação formal de que todos os eventos subsequentes à data das demonstrações contábeis, que requerem ajuste ou divulgação, foram ajustados ou divulgados."
          },
          {
            "id": "E",
            "text": "se eventos subsequentes que podem alterar seu relatório chegarem ao conhecimento do auditor independente após a data do seu relatório, ele está dispensado, segundo a referida norma, de efetuar qualquer procedimento adicional de auditoria, mesmo que as demonstrações contábeis ainda não tenham sido divulgadas."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 78 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-79",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade Geral e Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Amostragem em Auditoria (NBC TA 530)"
        ],
        "enunciado": "79. Em relação à amostragem na auditoria, é correto afirmar que",
        "alternativas": [
          {
            "id": "A",
            "text": "a amostragem deve ser sempre efetuada com números aleatórios, para evitar que o auditor utilize critérios próprios para a seleção dos itens a serem auditados."
          },
          {
            "id": "B",
            "text": "quanto maior o nível de distorção tolerável aceito nos testes substantivos, maior deve ser o tamanho da amostra, para que a eficácia e a eficiência do trabalho do auditor sejam alcançadas."
          },
          {
            "id": "C",
            "text": "na determinação do tamanho da amostra, um nível de confiança de 95% indica que em noventa e cinco (95) vezes o resultado será impreciso e em cinco (5) vezes, o resultado será preciso."
          },
          {
            "id": "D",
            "text": "o risco da amostragem é o risco de que a conclusão atingida com base na amostra seja igual ao da conclusão que seria obtida com base no exame da população como um todo."
          },
          {
            "id": "E",
            "text": "a combinação de uma amostragem estratificada para os itens de maior valor nos procedimentos (testes) substantivos combinada com a amostragem aleatória para os itens de menor valor é geralmente um procedimento eficaz, pois permite uma cobertura maior em termos de valor e um tamanho de amostra menor."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 79 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      },
      {
        "id": "q-prova_objetiva_auditor-80",
        "banca": "FGV",
        "ano": 2023,
        "orgao": "Tribunal de Contas / Receita",
        "cargo": "Auditor de Controle / Fiscal",
        "disciplina": "Contabilidade Geral e Auditoria",
        "assunto": "Questões de Concurso",
        "subtopicos": [
          "Auditoria",
          "Relatório do Auditor Independente"
        ],
        "enunciado": "80. Em relação à elaboração do relatório do auditor independente sobre as demonstrações contábeis, está correto afirmar que",
        "alternativas": [
          {
            "id": "A",
            "text": "um dos aspectos que o auditor deve levar em consideração para formar uma opinião sobre as demonstrações contábeis da entidade é se as distorções não corrigidas pela administração são relevantes, individualmente ou em conjunto."
          },
          {
            "id": "B",
            "text": "o parágrafo introdutório do relatório consiste na afirmação de a administração da Companhia ser responsável pela elaboração e adequada apresentação das demonstrações contábeis de acordo com as normas brasileiras de contabilidade."
          },
          {
            "id": "C",
            "text": "se o auditor concluir que as demonstrações contábeis apresentam distorções relevantes e generalizadas, ele deve emitir um relatório com ressalva, incluindo um parágrafo em que contenha a base para essa opinião."
          },
          {
            "id": "D",
            "text": "o parágrafo de ênfase normalmente é utilizado quando há incerteza em relação ao resultado de contingências judiciais da entidade, sobre as quais o auditor tenha ressalvas em relação à descrição apropriada do assunto nas demonstrações contábeis."
          },
          {
            "id": "E",
            "text": "caso as notas explicativas contenham informações não contábeis, tais como o conceito de LAJIDA (lucro antes dos juros, impostos e da depreciação), o auditor não precisa solicitar que a administração coloque na nota que essa informação não foi auditada."
          }
        ],
        "gabarito": "A",
        "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 80 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
        "baseLegal": "Gabarito Oficial FGV.",
        "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
        "dificuldade": "médio"
      }
    ]
  }
];

export const ALL_IMPORTED_QUESTIONS: Question[] = [
  {
    "id": "q-analista_contabil-01",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Morfologia",
      "Tempos e Modos Verbais",
      "Gêneros Textuais"
    ],
    "enunciado": "1. **Texto para os itens de 1 a 20.**\n\n**Polícia de SP investiga se contador morto a tiros, sem reagir, foi vítima de latrocínio ou execução; veja vídeo**\n\n  A Polícia Civil investiga se um contador morto a tiros, sem reagir, foi vítima de latrocínio ou execução na Zona Sul de São Paulo. O caso ocorreu na manhã da última quarta-feira (29) em frente a empresa de contabilidade onde ele trabalhava, e foi gravado por câmeras de segurança (veja vídeo abaixo; as cenas são fortes).\n  José Horley de Sousa tinha 36 anos e foi baleado quando estava dentro de seu carro, estacionado na Rua Coronel Francisco Inácio, na região do Sacomã. Ele ainda chegou a ser socorrido e levado ao Hospital Heliópolis, onde não resistiu aos ferimentos e morreu.\n  O criminoso é um motociclista, que fugiu após roubar o relógio e a carteira do contador e atirar ao menos quatro vezes nele.\n  Imagens gravadas por câmeras de segurança, e que circulam nas redes sociais, mostram que José não reagiu ao assalto. As cenas mostram que o carro, um Chevrolet Cruize vermelho, está parado na rua, quando um homem numa moto sobe a calçada se aproxima e aponta a arma para o veículo, que estava com os vidros escuros fechados.\n  No vídeo, feito por duas câmeras, ainda é possível ver o contador abrir a porta e entregar os pertences ao criminoso, que atira diversas vezes no motorista.\n  O bandido, que usa mochila e capacete, foge em seguida na sua motocicleta.\n  O caso foi registrado inicialmente como latrocínio, que é o roubo seguido de morte, no 95º Distrito Policial (DP), Cohab-Heliópolis.\n  Mas segundo o delegado que investiga a morte do contador e tenta identificar o criminoso, também está sendo apurada a possibilidade de José ter sido vítima de uma execução.\n  “O caso foi inicialmente registrado como latrocínio, mas a possibilidade de homicídio também é investigada. Estamos trabalhando com as duas vertentes”, afirmou à reportagem o delegado Carlos Miranda. De acordo com a investigação, a moto do criminoso não era roubada, mas estaria usando placa clonada. O celular do contador e um comprovante de transação bancária, no valor de R$ 50 mil, que estavam no automóvel da vítima, foram apreendidos pela polícia.\n  Além de analisar as imagens das câmeras de vídeo, que gravaram a morte do contador, a investigação quer ouvir o depoimento de testemunhas.\n\n*Internet: <www.g1.globo.com> (com adaptações).*\n\n---\n\nCom base no texto, julgue o item a seguir.\n\nNo título, o emprego do presente do indicativo, “investiga”, aponta para fato ocorrido no passado, como em geral acontece em notícias.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 1 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-02",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Morfologia",
      "Modo Imperativo",
      "Funções da Linguagem"
    ],
    "enunciado": "2. Com base no texto, julgue o item a seguir.\n\nNo título, a forma “veja”, por estar no imperativo, indica possibilidade de interatividade com o leitor.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 2 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-03",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Morfossintaxe",
      "Funções do Se",
      "Conjunções"
    ],
    "enunciado": "3. Com base no texto, julgue o item a seguir.\n\nA palavra “se”, no trecho “se um contador morto a tiros, sem reagir, foi vítima de latrocínio ou execução na Zona Sul de São Paulo”, atua como um pronome reflexivo.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 3 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-04",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Ortografia",
      "Crase"
    ],
    "enunciado": "4. Com base no texto, julgue o item a seguir.\n\nNo trecho “em frente a empresa de contabilidade onde ele trabalhava”, é obrigatório o uso do acento indicativo de crase em “em frente a”.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 4 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-05",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Pontuação",
      "Compreensão e Interpretação de Texto"
    ],
    "enunciado": "5. Com base no texto, julgue o item a seguir.\n\nNo primeiro parágrafo, a passagem “(veja vídeo abaixo; as cenas são fortes)” aparece entre parênteses por se tratar de comentário do veículo de comunicação julgando os fatos relatados.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 5 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-06",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sintaxe do Período Composto",
      "Orações Subordinadas Adverbiais"
    ],
    "enunciado": "6. Com base no texto, julgue o item a seguir.\n\nA oração “quando estava dentro de seu carro” classifica-se como subordinada adverbial temporal.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 6 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-07",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sintaxe",
      "Transitividade Verbal"
    ],
    "enunciado": "7. Com base no texto, julgue o item a seguir.\n\nO verbo “morrer”, em “onde não resistiu aos ferimentos e morreu”, é intransitivo.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 7 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-08",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Coesão e Coerência",
      "Pronomes"
    ],
    "enunciado": "8. Com base no texto, julgue o item a seguir.\n\nNo trecho “O criminoso é um motociclista, que fugiu após roubar o relógio e a carteira do contador e atirar ao menos quatro vezes nele”, o pronome em “nele” refere-se ao contador alvo da notícia.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 8 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-09",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sintaxe do Período Composto",
      "Orações Subordinadas Substantivas"
    ],
    "enunciado": "9. Com base no texto, julgue o item a seguir.\n\nNo período “Imagens gravadas por câmeras de segurança, e que circulam nas redes sociais, mostram que José não reagiu ao assalto”, por modificar a forma verbal “mostram”, a oração “que José não reagiu ao assalto” é adverbial.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 9 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-10",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sintaxe dos Termos da Oração",
      "Aposto"
    ],
    "enunciado": "10. Com base no texto, julgue o item a seguir.\n\nNo trecho “As cenas mostram que o carro, um Chevrolet Cruize vermelho, está parado na rua”, o termo “um Chevrolet Cruize vermelho” ajuda a explicar o termo “carro”, funcionando como adjunto adnominal.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 10 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-11",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Morfologia",
      "Tempos e Modos Verbais",
      "Presente Histórico"
    ],
    "enunciado": "11. Com base no texto, julgue o item a seguir.\n\nO emprego do presente do indicativo na passagem “quando um homem numa moto sobe a calçada se aproxima e aponta a arma para o veículo” caracteriza-se pelo uso como presente narrativo (ou histórico).",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 11 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-12",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Morfossintaxe",
      "Classes de Palavras",
      "Adjetivo"
    ],
    "enunciado": "12. No trecho “os vidros escuros fechados”, os dois adjuntos adnominais ligados ao substantivo diferenciam-se pela natureza: um indica uma característica duradoura, enquanto o outro indica uma característica transitória.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 12 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-13",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sintaxe do Período Composto",
      "Orações Subordinadas Adjetivas"
    ],
    "enunciado": "13. No período “No vídeo, feito por duas câmeras, ainda é possível ver o contador abrir a porta e entregar os pertences ao criminoso, que atira diversas vezes no motorista.”, a oração “que atira diversas vezes no motorista”, por caracterizar “criminoso”, funciona como subordinada adjetiva.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 13 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-14",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Regência Verbal",
      "Crase"
    ],
    "enunciado": "14. Para se atender à regência de “em seguida”, no trecho “foge em seguida na sua motocicleta”, a forma “na” deveria ser substituída por “à”.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 14 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-15",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sintaxe dos Termos da Oração",
      "Predicativo do Sujeito"
    ],
    "enunciado": "15. No período “O caso foi registrado inicialmente como latrocínio, que é o roubo seguido de morte, no 95º Distrito Policial (DP), Cohab-Heliópolis.”, o termo “como latrocínio”, por ser o predicativo do sujeito, não poderia ser preposicionado.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 15 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-16",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sintaxe dos Termos da Oração",
      "Complemento Nominal e Adjunto Adnominal"
    ],
    "enunciado": "16. Na estruturação sintática do sintagma “a morte do contador”, observa-se que o termo preposicionado representa a ação implícita na ideia do substantivo “morte”.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 16 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-17",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sintaxe dos Termos da Oração",
      "Vozes Verbais",
      "Sujeito Passivo"
    ],
    "enunciado": "17. No trecho “também está sendo apurada a possibilidade de José ter sido vítima de uma execução”, o substantivo “possibilidade” atua como objeto direto de “está sendo apurada”.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 17 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-18",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Interpretação de Texto",
      "Coesão e Coerência"
    ],
    "enunciado": "18. No trecho “Estamos trabalhando com as duas vertentes”, as duas vertentes referem-se a: latrocínio e homicídio.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 18 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-19",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Concordância Verbal e Nominal"
    ],
    "enunciado": "19. No trecho “ O celular do contador e um comprovante de transação bancária, no valor de R$ 50 mil, que estavam no automóvel da vítima, foram apreendidos pela polícia.”, o termo “apreendidos” concorda tanto com “contador” quanto com “comprovante”.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 19 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-20",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Figuras de Linguagem",
      "Personificação"
    ],
    "enunciado": "20. No período “Além de analisar as imagens das câmeras de vídeo, que gravaram a morte do contador, a investigação quer ouvir o depoimento de testemunhas.”, o termo “investigação” passa por um processo de personificação, como é típico em contextos como o apresentado no texto.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 20 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-21",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lógica de Proposições",
      "Implicação Lógica"
    ],
    "enunciado": "21. Um escritório jurídico especializado em causas cíveis possui três advogados: Dr. Andrade; Dra. Barros; e Dr. Costa. Para otimizar o trabalho, os processos são distribuídos entre eles, de acordo com as seguintes regras lógicas.\n\nI Se um processo envolve direito do consumidor, então ou dr. Andrade ou dra. Barros deverá atendê-lo.\nII Se um processo não envolve contratos, então dr. Costa não deverá atendê-lo.\nIII Se dra. Barros atende um processo, então ele não envolverá direito de família.\n\nCom base nessa situação hipotética e considerando essas regras, julgue os itens a seguir.\n\nSe um processo envolve direito do consumidor e direito de família, então o dr. Andrade deverá atendê-lo.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 21 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-22",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lógica de Proposições",
      "Equivalências Lógicas"
    ],
    "enunciado": "22. Um escritório jurídico especializado em causas cíveis possui três advogados: Dr. Andrade; Dra. Barros; e Dr. Costa. Para otimizar o trabalho, os processos são distribuídos entre eles, de acordo com as seguintes regras lógicas.\n\nI Se um processo envolve direito do consumidor, então ou dr. Andrade ou dra. Barros deverá atendê-lo.\nII Se um processo não envolve contratos, então dr. Costa não deverá atendê-lo.\nIII Se dra. Barros atende um processo, então ele não envolverá direito de família.\n\nCom base nessa situação hipotética e considerando essas regras, julgue os itens a seguir.\n\nSe um processo é atendido pelo dr. Costa, então ele envolverá contratos.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 22 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-23",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lógica de Proposições",
      "Negação e Implicação Lógica"
    ],
    "enunciado": "23. Um escritório jurídico especializado em causas cíveis possui três advogados: Dr. Andrade; Dra. Barros; e Dr. Costa. Para otimizar o trabalho, os processos são distribuídos entre eles, de acordo com as seguintes regras lógicas.\n\nI Se um processo envolve direito do consumidor, então ou dr. Andrade ou dra. Barros deverá atendê-lo.\nII Se um processo não envolve contratos, então dr. Costa não deverá atendê-lo.\nIII Se dra. Barros atende um processo, então ele não envolverá direito de família.\n\nCom base nessa situação hipotética e considerando essas regras, julgue os itens a seguir.\n\nSe um processo não é atendido pela dra. Barros, então ele envolverá direito de família.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 23 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-24",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Porcentagem",
      "Problemas Aritméticos"
    ],
    "enunciado": "24. Um advogado especializado em direito civil está analisando as estatísticas de seus processos nos últimos 3 anos. Ele observou que:\n\n• 40% dos processos são relacionados a direito de família;\n• 30% dos processos são relacionados a direito imobiliário;\n• 20% dos processos são relacionados a direito do consumidor; e\n• Os 10% restantes são de outras áreas.\n\nEm um levantamento sobre o tempo médio de duração (em meses) desses processos, ele obteve os seguintes dados:\n\n• direito de família: 15 meses;\n• direito imobiliário: 24 meses;\n• direito do consumidor: 12 meses; e\n• outras áreas: 18 meses.\n\nCom base nessa situação hipotética e nessas informações, julgue os itens seguintes.\n\nSe o advogado atendeu 200 processos nos últimos 3 anos, então o número de processos de direito imobiliário foi igual a 60.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 24 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-25",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Probabilidade"
    ],
    "enunciado": "25. Um advogado especializado em direito civil está analisando as estatísticas de seus processos nos últimos 3 anos. Ele observou que:\n\n• 40% dos processos são relacionados a direito de família;\n• 30% dos processos são relacionados a direito imobiliário;\n• 20% dos processos são relacionados a direito do consumidor; e\n• Os 10% restantes são de outras áreas.\n\nEm um levantamento sobre o tempo médio de duração (em meses) desses processos, ele obteve os seguintes dados:\n\n• direito de família: 15 meses;\n• direito imobiliário: 24 meses;\n• direito do consumidor: 12 meses; e\n• outras áreas: 18 meses.\n\nCom base nessa situação hipotética e nessas informações, julgue os itens seguintes.\n\nEscolhendo aleatoriamente um processo dos últimos 3 anos, se ele nem é de direito de família, nem de direito imobiliário, então a probabilidade de ser de direito do consumidor será maior que 50%.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 25 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-26",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Média Ponderada",
      "Matemática Financeira"
    ],
    "enunciado": "26. Um advogado especializado em direito civil está analisando as estatísticas de seus processos nos últimos 3 anos. Ele observou que:\n\n• 40% dos processos são relacionados a direito de família;\n• 30% dos processos são relacionados a direito imobiliário;\n• 20% dos processos são relacionados a direito do consumidor; e\n• Os 10% restantes são de outras áreas.\n\nEm um levantamento sobre o tempo médio de duração (em meses) desses processos, ele obteve os seguintes dados:\n\n• direito de família: 15 meses;\n• direito imobiliário: 24 meses;\n• direito do consumidor: 12 meses; e\n• outras áreas: 18 meses.\n\nCom base nessa situação hipotética e nessas informações, julgue os itens seguintes.\n\nSe o advogado cobrou, em média, R$ 3.000 por processo de direito de família, R$ 5.000 por processo de direito imobiliário, R$ 2.500 por processo de direito do consumidor e R$ 4.000 pelos demais, então seu faturamento médio por processo foi maior que R$ 3.800.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 26 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-27",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Estatística",
      "Mediana"
    ],
    "enunciado": "27. Um escritório de advocacia está analisando o tempo gasto em diferentes tipos de processos judiciais. Para um estudo estatístico, eles coletaram os tempos (em meses) para a conclusão de 10 processos similares, obtendo-se a seguinte amostra: 8, 12, 9, 15, 10, 8, 11, 14, 10, 13.\n\nCom base nessa situação hipotética, julgue os itens a seguir.\n\nA mediana do tempo de conclusão desses processos é igual a 10,5 meses.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 27 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-28",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Probabilidade",
      "Estatística"
    ],
    "enunciado": "28. Um escritório de advocacia está analisando o tempo gasto em diferentes tipos de processos judiciais. Para um estudo estatístico, eles coletaram os tempos (em meses) para a conclusão de 10 processos similares, obtendo-se a seguinte amostra: 8, 12, 9, 15, 10, 8, 11, 14, 10, 13.\n\nCom base nessa situação hipotética, julgue os itens a seguir.\n\nA probabilidade de selecionar aleatoriamente um processo dessa amostra cujo tempo de conclusão seja maior que 10 meses é de 50%.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 28 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-29",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Estatística",
      "Média Aritmética"
    ],
    "enunciado": "29. Um escritório de advocacia está analisando o tempo gasto em diferentes tipos de processos judiciais. Para um estudo estatístico, eles coletaram os tempos (em meses) para a conclusão de 10 processos similares, obtendo-se a seguinte amostra: 8, 12, 9, 15, 10, 8, 11, 14, 10, 13.\n\nCom base nessa situação hipotética, julgue os itens a seguir.\n\nSe for adicionado um novo processo à amostra e a média passar a ser 12 meses, então o tempo de conclusão desse novo processo foi inferior a 20 meses.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 29 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-30",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Estatística",
      "Média e Desvio Padrão",
      "Propriedades das Medidas de Dispersão"
    ],
    "enunciado": "30. Um escritório de advocacia está analisando o tempo gasto em diferentes tipos de processos judiciais. Para um estudo estatístico, eles coletaram os tempos (em meses) para a conclusão de 10 processos similares, obtendo-se a seguinte amostra: 8, 12, 9, 15, 10, 8, 11, 14, 10, 13.\n\nCom base nessa situação hipotética, julgue os itens a seguir.\n\nSe, a todos os valores da amostra, forem somados 2 meses, então a nova média da amostra será alterada para 2 meses a mais, e o desvio padrão não será alterado.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 30 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-31",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Hardware",
      "Redes de Computadores",
      "Servidores"
    ],
    "enunciado": "31. Existem diversos tipos de computadores (_laptop_, _notebook_, _desktop_, servidor etc.). Com base nessa informação, julgue o item a seguir.\n\nUm computador do tipo servidor pode ser utilizado em escritórios de advocacia para centralizar arquivos e facilitar o compartilhamento seguro de documentos entre os colaboradores.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 31 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-32",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sistemas Operacionais",
      "Software e Hardware"
    ],
    "enunciado": "32. Existem diversos tipos de computadores (_laptop_, _notebook_, _desktop_, servidor etc.). Com base nessa informação, julgue o item a seguir.\n\nO sistema operacional é um tipo de _software_ que atua como intermediário entre o _hardware_ e os programas de aplicação utilizados pelo usuário.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 32 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-33",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Microsoft Office",
      "Microsoft Word",
      "Controle de Alterações"
    ],
    "enunciado": "33. Os aplicativos de escritório (Word, Excel e PowerPoint) são ferramentas de produtividade fundamentais para um advogado. Com base nessa informação, julgue o item seguinte.\n\nO Microsoft Word, parte do Office 365, permite o uso de controle de alterações, ferramenta essencial para revisar e compartilhar petições ou contratos entre advogados e clientes.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 33 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-34",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Microsoft Office",
      "Microsoft Word",
      "Comentários"
    ],
    "enunciado": "34. Os aplicativos de escritório (Word, Excel e PowerPoint) são ferramentas de produtividade fundamentais para um advogado. Com base nessa informação, julgue o item seguinte.\n\nO Microsoft Word não permite a inserção de comentários em documentos, o que limita sua utilidade para revisão de contratos jurídicos.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 34 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-35",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Microsoft Office",
      "Microsoft Word",
      "Comentários e Revisão Colaborativa"
    ],
    "enunciado": "35. Os aplicativos de escritório (Word, Excel e PowerPoint) são ferramentas de produtividade fundamentais para um advogado. Com base nessa informação, julgue o item seguinte.\n\nO Word possui uma funcionalidade robusta de inserção de comentários, essencial para revisões colaborativas de contratos, petições e pareceres jurídicos.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 35 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-36",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Internet",
      "Mecanismos de Busca",
      "Google"
    ],
    "enunciado": "36. A Internet é uma poderosa ferramenta de consultas para os advogados. Com base nessa informação, julgue o item a seguir.\n\nO uso de aspas (“”) nas pesquisas no Google aumenta a quantidade de resultados e torna a pesquisa mais ampla.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 36 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-37",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Internet",
      "Mecanismos de Busca",
      "Operadores de Busca"
    ],
    "enunciado": "37. A Internet é uma poderosa ferramenta de consultas para os advogados. Com base nessa informação, julgue o item a seguir.\n\nAdvogados podem utilizar operadores como “_site:_” para restringir pesquisas a domínios jurídicos específicos, como tribunais ou órgãos públicos.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 37 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-38",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Armazenamento em Nuvem",
      "Segurança da Informação"
    ],
    "enunciado": "38. Um escritório de advocacia uma gera muitos documentos e a organização deles é fundamental para poder localizá-los com rapidez e segurança. Com base nessa informação, julgue o item seguinte.\n\nArmazenar cópias de arquivos em nuvem, como no OneDrive ou Google Drive, aumenta a segurança e a acessibilidade dos documentos jurídicos.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 38 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-39",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sistemas Operacionais",
      "Gestão de Programas"
    ],
    "enunciado": "39. Um escritório de advocacia uma gera muitos documentos e a organização deles é fundamental para poder localizá-los com rapidez e segurança. Com base nessa informação, julgue o item seguinte.\n\nTodos os programas instalados no computador do advogado devem ser removidos automaticamente após 30 dias, para evitar acúmulo.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 39 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-40",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Segurança da Informação",
      "Gerenciamento de Senhas",
      "Navegadores"
    ],
    "enunciado": "40. A segurança de informação é um esforço contínuo de todos os envolvidos. Com base nessa informação, julgue o item a seguir.\n\nSalvar senhas de acesso a sistemas jurídicos no navegador é uma prática recomendada para facilitar o uso diário.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 40 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-41",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Ética no Serviço Público",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
      "Decreto nº 1.171/1994"
    ],
    "enunciado": "41. Considerando as normas estabelecidas no Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal – Decreto nº 1.171/1994 –, julgue o item a seguir.\n\nA função pública deve ser tida como exercício profissional e, portanto, integra-se à vida particular de cada servidor público. Nesse contexto, é correto afirmar que a embriaguez, mesmo que fortuita e involuntária, constitui falta funcional e representa violação ao Código de Ética.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 41 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-42",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Ética no Serviço Público",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
      "Decreto nº 1.171/1994"
    ],
    "enunciado": "42. Considerando as normas estabelecidas no Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal – Decreto nº 1.171/1994 –, julgue o item a seguir.\n\nEstão sujeitos às disposições do Código de Ética todos aqueles que prestem serviços de natureza permanente, mediante retribuição financeira, excluindo-se, portanto, aqueles que possuam vínculo temporário e sem retribuição financeira.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 42 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-43",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Improbidade Administrativa",
      "Lei nº 8.429/1992"
    ],
    "enunciado": "43. Segundo a Lei nº 8.429/1992, que trata das sanções aplicáveis em virtude da prática de atos de improbidade administrativa, julgue o item seguinte.\n\nA conduta culposa do agente público não é suficiente para caracterizar o ato de improbidade administrativa que importe em enriquecimento ilícito, sendo indispensável a presença do dolo.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 43 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-44",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Improbidade Administrativa",
      "Lei nº 8.429/1992"
    ],
    "enunciado": "44. Segundo a Lei nº 8.429/1992, que trata das sanções aplicáveis em virtude da prática de atos de improbidade administrativa, julgue o item seguinte.\n\nA pena de suspensão dos direitos políticos é aplicada ao agente público, em razão de seu vínculo com a Administração Pública, não se estendendo ao terceiro que, com ele, concorreu para a prática do ato de improbidade.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 44 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-45",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Improbidade Administrativa",
      "Lei nº 8.429/1992"
    ],
    "enunciado": "45. Segundo a Lei nº 8.429/1992, que trata das sanções aplicáveis em virtude da prática de atos de improbidade administrativa, julgue o item seguinte.\n\nA correção monetária e os juros de mora da pena de multa civil devem incidir desde a data do ato de improbidade administrativa.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 45 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-46",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Improbidade Administrativa",
      "Lei nº 8.429/1992"
    ],
    "enunciado": "46. Segundo a Lei nº 8.429/1992, que trata das sanções aplicáveis em virtude da prática de atos de improbidade administrativa, julgue o item seguinte.\n\nA contratação de servidores públicos temporários sem a realização de concurso público, ainda que amparada por legislação local, constitui ato de improbidade administrativa que atenta contra os princípios da Administração Pública.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 46 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-47",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Improbidade Administrativa",
      "Lei nº 8.429/1992"
    ],
    "enunciado": "47. Segundo a Lei nº 8.429/1992, que trata das sanções aplicáveis em virtude da prática de atos de improbidade administrativa, julgue o item seguinte.\n\nA ação de improbidade administrativa somente deve ser recebida pelo juiz quando houver elementos concretos que indiquem a presença de dolo específico por parte do agente e a existência de prejuízo ao erário.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 47 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-48",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Processo Administrativo",
      "Lei nº 9.784/1999"
    ],
    "enunciado": "48. À luz da Lei nº 9.784/1999, que regula o processo administrativo no âmbito da Administração Pública Federal, julgue o item a seguir.\n\nOs prazos fixados em meses ou anos contam-se de data a data. Se, no mês do vencimento, não houver o dia equivalente àquele do início do prazo, tem-se como termo o último dia do mês.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 48 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-49",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Processo Administrativo",
      "Lei nº 9.784/1999",
      "Princípio da Autotutela"
    ],
    "enunciado": "49. À luz da Lei nº 9.784/1999, que regula o processo administrativo no âmbito da Administração Pública Federal, julgue o item a seguir.\n\nCaso a Administração identifique que um ato ilegal gerou efeitos favoráveis para os destinatários, poderá, com base no princípio da autotutela, revogá-lo, no prazo decadencial de cinco anos, respeitando-se, contudo, os direitos adquiridos pelos interessados de boa-fé.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 49 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-50",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei Geral de Proteção de Dados Pessoais (LGPD)",
      "Lei nº 13.709/2018"
    ],
    "enunciado": "50. No que diz respeito à Lei nº 13.709/2018, que trata da proteção de dados pessoais, julgue o item seguinte.\n\nO princípio da adequação consiste na compatibilidade do tratamento de dados com as finalidades informadas ao titular, de acordo com o contexto do tratamento.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 50 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-51",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei Geral de Proteção de Dados Pessoais (LGPD)",
      "Lei nº 13.709/2018"
    ],
    "enunciado": "51. No que diz respeito à Lei nº 13.709/2018, que trata da proteção de dados pessoais, julgue o item seguinte.\n\nO tratamento de dados pessoais sensíveis poderá ocorrer, sem o consentimento do titular, quando for indispensável para a proteção da vida ou da incolumidade física do titular ou de terceiro.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 51 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-52",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei Anticorrupção",
      "Lei nº 12.846/2013"
    ],
    "enunciado": "52. Quanto à Lei nº 12.846/2013, que trata a respeito da responsabilização administrativa e civil de pessoas jurídicas pela prática de atos contra a Administração Pública, julgue o item a seguir.\n\nNa esfera administrativa, a responsabilidade da pessoa jurídica não afasta a possibilidade de sua responsabilização na esfera judicial.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 52 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-53",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei Anticorrupção",
      "Lei nº 12.846/2013",
      "Acordo de Leniência"
    ],
    "enunciado": "53. Quanto à Lei nº 12.846/2013, que trata a respeito da responsabilização administrativa e civil de pessoas jurídicas pela prática de atos contra a Administração Pública, julgue o item a seguir.\n\nOs efeitos do acordo de leniência serão estendidos às pessoas jurídicas que integram o mesmo grupo econômico, de fato e de direito, desde que firmem o acordo em conjunto, respeitadas as condições nele estabelecidas.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 53 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-54",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei Anticorrupção",
      "Lei nº 12.846/2013",
      "Acordo de Leniência"
    ],
    "enunciado": "54. Quanto à Lei nº 12.846/2013, que trata a respeito da responsabilização administrativa e civil de pessoas jurídicas pela prática de atos contra a Administração Pública, julgue o item a seguir.\n\nA celebração do acordo de leniência pelo agente infrator elide a condenação judicial por danos morais coletivos.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 54 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-55",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei Anticorrupção",
      "Lei nº 12.846/2013",
      "Acordo de Leniência"
    ],
    "enunciado": "55. Quanto à Lei nº 12.846/2013, que trata a respeito da responsabilização administrativa e civil de pessoas jurídicas pela prática de atos contra a Administração Pública, julgue o item a seguir.\n\nO Ministério Público Federal é o órgão competente para celebrar os acordos de leniência no âmbito do Poder Executivo federal.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 55 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-56",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação Específica",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Conselho Federal de Contabilidade",
      "Decreto-Lei nº 9.295/1946"
    ],
    "enunciado": "56. De acordo com o Decreto-Lei nº 9.295/1946, que cria o Conselho Federal de Contabilidade e prerrogativas dos Conselhos Regionais de Contabilidade (CRCs), julgue o item a seguir.\n\nCompete ao Conselho Federal de Contabilidade (CFC) aprovar os regimentos internos organizados pelos Conselhos Regionais, modificando o que se tornar necessário, a fim de manter a respectiva unidade de ação.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 56 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-57",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação Específica",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Conselho Federal de Contabilidade",
      "Decreto-Lei nº 9.295/1946"
    ],
    "enunciado": "57. De acordo com o Decreto-Lei nº 9.295/1946, que cria o Conselho Federal de Contabilidade e prerrogativas dos Conselhos Regionais de Contabilidade (CRCs), julgue o item a seguir.\n\nA carteira profissional, visada pelo presidente do CFC, servirá como documento de identidade e terá fé pública.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 57 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-58",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação Específica",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Decreto-Lei nº 9.295/1946",
      "Penalidades e Infrações"
    ],
    "enunciado": "58. A falta de pagamento de multa devidamente confirmada importará, decorridos 30 dias da notificação, em suspensão, por 90 dias, do profissional ou da organização que, nela, tiver incorrido.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 58 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-59",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação Específica",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Decreto-Lei nº 9.295/1946",
      "Processo Administrativo e Recursos"
    ],
    "enunciado": "59. O recurso contra decisões do CRC que aplicarem pena de multa será dirigido ao CFC e terá efeito suspensivo.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 59 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-60",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação Específica",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Decreto-Lei nº 9.295/1946",
      "Registro Profissional e Anuidades"
    ],
    "enunciado": "60. As empresas que atuam no ramo de serviços contábeis devem se registrar e pagar anuidade ao CFC.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 60 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-61",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação e Ética Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Resolução CFC nº 1.523/2017",
      "Código de Conduta dos Conselheiros, Colaboradores e Funcionários"
    ],
    "enunciado": "61. Quanto ao estabelecido na Resolução CFC nº 1.523/2017, que versa a respeito do Código de Conduta dos Conselheiros, Colaboradores e Funcionários, julgue o item seguinte.\n\nSegundo o Código de Conduta, a censura ética é o documento que explicita os comportamentos considerados inaceitáveis, bem como as medidas a serem adotadas para assegurar o cumprimento do referido código, indicando a conduta apropriada no ambiente de trabalho.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 61 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-62",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação e Ética Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Resolução CFC nº 1.523/2017",
      "Comissão de Conduta"
    ],
    "enunciado": "62. Quanto ao estabelecido na Resolução CFC nº 1.523/2017, que versa a respeito do Código de Conduta dos Conselheiros, Colaboradores e Funcionários, julgue o item seguinte.\n\nA comissão de conduta instituída para apuração de infração cometida por conselheiro do Sistema CFC/CRCs será composta de três conselheiros do CFC e dos respectivos substitutos.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 62 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-63",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação e Ética Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Resolução CFC nº 1.523/2017",
      "Comissão de Conduta"
    ],
    "enunciado": "63. Quanto ao estabelecido na Resolução CFC nº 1.523/2017, que versa a respeito do Código de Conduta dos Conselheiros, Colaboradores e Funcionários, julgue o item seguinte.\n\nOs integrantes das comissões de conduta terão mandato de três anos, sendo vedada a recondução.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 63 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-64",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação e Ética Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Resolução CFC nº 1.523/2017",
      "Comissão de Conduta"
    ],
    "enunciado": "64. Quanto ao estabelecido na Resolução CFC nº 1.523/2017, que versa a respeito do Código de Conduta dos Conselheiros, Colaboradores e Funcionários, julgue o item seguinte.\n\nO presidente das comissões será eleito pelo plenário do CFC para mandato de dois anos, sendo permitida a recondução.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 64 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-65",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação e Ética Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Resolução CFC nº 1.523/2017",
      "Comissão de Conduta"
    ],
    "enunciado": "65. Quanto ao estabelecido na Resolução CFC nº 1.523/2017, que versa a respeito do Código de Conduta dos Conselheiros, Colaboradores e Funcionários, julgue o item seguinte.\n\nO integrante da comissão que estiver respondendo a um processo ético, criminal ou administrativo-disciplinar ficará suspenso de suas funções até o trânsito em julgado.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 65 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-66",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação Específica",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Resolução CRC-SP nº 1.093/2011",
      "Regimento Interno do CRC-SP",
      "Conselheiros"
    ],
    "enunciado": "66. Segundo as normas previstas na Resolução CRC-SP nº 1.093/2011 – Regimento Interno do CRC-SP –, julgue o item a seguir.\n\nO cargo de conselheiro, inclusive quando investido na função de membro de órgão deste CRC, é de exercício gratuito, e será considerado serviço relevante.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 66 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-67",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação Específica",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Resolução CRC-SP nº 1.093/2011",
      "Regimento Interno do CRC-SP",
      "Conselho Diretor"
    ],
    "enunciado": "67. Segundo as normas previstas na Resolução CRC-SP nº 1.093/2011 – Regimento Interno do CRC-SP –, julgue o item a seguir.\n\nO conselho diretor é composto do presidente, dos vice-presidentes e de mais três conselheiros efetivos, eleitos pelo plenário, com mandato de dois anos.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 67 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-68",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação Específica",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Resolução CRC-SP nº 1.093/2011",
      "Regimento Interno do CRC-SP",
      "Estrutura Organizacional"
    ],
    "enunciado": "68. Segundo as normas previstas na Resolução CRC-SP nº 1.093/2011 – Regimento Interno do CRC-SP –, julgue o item a seguir.\n\nA Câmara de Política Institucional constitui órgão deliberativo superior do CRC do estado de São Paulo.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 68 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-69",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação Específica",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Resolução CRC-SP nº 1.093/2011",
      "Regimento Interno do CRC-SP",
      "Competências do Conselho Diretor"
    ],
    "enunciado": "69. Segundo as normas previstas na Resolução CRC-SP nº 1.093/2011 – Regimento Interno do CRC-SP –, julgue o item a seguir.\n\nCompete ao conselho diretor conceder licença ao presidente, vice-presidentes e aos demais conselheiros.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 69 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-70",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Legislação Específica",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Resolução CRC-SP nº 1.093/2011",
      "Regimento Interno do CRC-SP",
      "Eleições e Mandatos"
    ],
    "enunciado": "70. Segundo as normas previstas na Resolução CRC-SP nº 1.093/2011 – Regimento Interno do CRC-SP –, julgue o item a seguir.\n\nAo conselheiro que exerceu a presidência no biênio anterior, por período igual ou superior a 40% do mandato, é vedado ocupar uma vice-presidência no biênio imediatamente posterior.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 70 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-71",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Constitucional",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Fiscalização Contábil, Financeira e Orçamentária",
      "Tribunal de Contas da União"
    ],
    "enunciado": "71. Em relação ao Título IV – Capítulo I – Seção IX da Constituição Federal de 1988, que trata da fiscalização contábil, financeira e orçamentária, julgue o item.\n\nÉ vedado ao Tribunal de Contas da União aplicar sanções diretamente a servidores públicos, uma vez que sua atuação está limitada à fiscalização externa e emissão de pareceres.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 71 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-72",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Constitucional",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Fiscalização Contábil, Financeira e Orçamentária",
      "Competências do TCU"
    ],
    "enunciado": "72. Em relação ao Título IV – Capítulo I – Seção IX da Constituição Federal de 1988, que trata da fiscalização contábil, financeira e orçamentária, julgue o item.\n\nÉ competência do Tribunal de Contas da União julgar as contas do presidente da República, emitindo parecer prévio vinculativo ao Congresso Nacional.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 72 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-73",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Constitucional",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Administração Pública",
      "Cargos em Comissão e Funções de Confiança"
    ],
    "enunciado": "73. Com relação ao Título III – Capítulo VII da Constituição Federal de 1988, que trata da Administração Pública, julgue o item seguinte.\n\nOs cargos em comissão, de livre nomeação e exoneração, devem ser exclusivamente destinados a atribuições técnicas ou operacionais, que demandam qualificação específica.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 73 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-74",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Constitucional",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Administração Pública",
      "Estabilidade e Avaliação de Desempenho"
    ],
    "enunciado": "74. Com relação ao Título III – Capítulo VII da Constituição Federal de 1988, que trata da Administração Pública, julgue o item seguinte.\n\nA Constituição Federal de 1988 exige que a Administração Pública realize avaliação periódica de desempenho de seus servidores estáveis, como condição para manutenção no cargo.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 74 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-75",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Constitucional",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Administração Pública",
      "Acumulação de Cargos Públicos"
    ],
    "enunciado": "75. Com relação ao Título III – Capítulo VII da Constituição Federal de 1988, que trata da Administração Pública, julgue o item seguinte.\n\nÉ permitida a acumulação remunerada de cargos públicos de qualquer natureza, desde que haja compatibilidade de horários.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 75 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-76",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Tributário",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Simples Nacional",
      "Lei Complementar nº 123/2006"
    ],
    "enunciado": "76. A respeito da Lei Complementar nº 123/2006, que institui o Estatuto Nacional da Microempresa e da Empresa de Pequeno Porte, julgue o item a seguir.\n\nA Lei Complementar nº 123/2006 institui o regime unificado de arrecadação de tributos e as contribuições, denominado Simples Nacional, aplicável às microempresas e empresas de pequeno porte.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 76 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-77",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Tributário",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Enquadramento de Microempresa",
      "Lei Complementar nº 123/2006"
    ],
    "enunciado": "77. A respeito da Lei Complementar nº 123/2006, que institui o Estatuto Nacional da Microempresa e da Empresa de Pequeno Porte, julgue o item a seguir.\n\nPara fins da Lei Complementar nº 123/2006, considera-se microempresa a pessoa jurídica que aufira, em cada ano-calendário, receita bruta igual ou inferior a R$ 4,8 milhões.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 77 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-78",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Tributário",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Opção pelo Simples Nacional",
      "Lei Complementar nº 123/2006"
    ],
    "enunciado": "78. A respeito da Lei Complementar nº 123/2006, que institui o Estatuto Nacional da Microempresa e da Empresa de Pequeno Porte, julgue o item a seguir.\n\nO ingresso no Simples Nacional é automático para as empresas que se enquadrarem nos limites de receita bruta e que não pratiquem nenhuma vedação legal.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 78 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-79",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito do Trabalho",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Tratamento Diferenciado e Favorecido",
      "Lei Complementar nº 123/2006"
    ],
    "enunciado": "79. A respeito da Lei Complementar nº 123/2006, que institui o Estatuto Nacional da Microempresa e da Empresa de Pequeno Porte, julgue o item a seguir.\n\nAs microempresas e empresas de pequeno porte têm tratamento favorecido quanto ao cumprimento de obrigações trabalhistas e previdenciárias, sem prejuízo dos direitos dos empregados.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 79 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-80",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Modalidades de Licitação",
      "Lei nº 14.133/2021"
    ],
    "enunciado": "80. A Lei nº 14.133/2021 trouxe diversas modificações em relação à legislação anterior (Lei nº 8.666/93). Quanto à Nova Lei de Licitações e Contratos Administrativos, julgue o item seguinte.\n\nA modalidade de licitação denominada \"convite\" permanece válida na Lei nº 14.133/2021, desde que respeitado o limite de valor atualizado.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 80 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-81",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Contratação Direta",
      "Inexigibilidade e Dispensa de Licitação",
      "Lei nº 14.133/2021"
    ],
    "enunciado": "81. A Lei nº 14.133/2021 trouxe diversas modificações em relação à legislação anterior (Lei nº 8.666/93). Quanto à Nova Lei de Licitações e Contratos Administrativos, julgue o item seguinte.\n\nÉ dispensável a licitação para contratação de profissional do setor artístico consagrado pela crítica especializada ou pela opinião pública.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 81 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-82",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Comercial",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sociedades por Ações",
      "Lei nº 10.303/2001",
      "Proteção aos Minoritários"
    ],
    "enunciado": "82. A Lei nº 10.303/2001 visa aprimorar o funcionamento do mercado de capitais brasileiro, com foco na proteção dos investidores e na garantia de informações transparentes. Com base nessa legislação, julgue o item a seguir.\n\nA Lei nº 10.303/2001 alterou a Lei das Sociedades por Ações (Lei nº 6.404/76) para reforçar a proteção dos acionistas minoritários, especialmente em operações de alienação de controle.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 82 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-83",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Comercial",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sociedades Limitadas",
      "Publicação de Demonstrações Financeiras",
      "Lei nº 10.303/2001"
    ],
    "enunciado": "83. A Lei nº 10.303/2001 visa aprimorar o funcionamento do mercado de capitais brasileiro, com foco na proteção dos investidores e na garantia de informações transparentes. Com base nessa legislação, julgue o item a seguir.\n\nCom a alteração promovida pela Lei nº 10.303/2001, passou a ser obrigatória a publicação de demonstrações financeiras por todas as sociedades limitadas, independentemente de seu porte.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 83 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-84",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Comercial",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Capital Autorizado",
      "Lei nº 10.303/2001",
      "Lei nº 6.404/1976"
    ],
    "enunciado": "84. A Lei nº 10.303/2001 visa aprimorar o funcionamento do mercado de capitais brasileiro, com foco na proteção dos investidores e na garantia de informações transparentes. Com base nessa legislação, julgue o item a seguir.\n\nA Lei nº 10.303/2001 modificou dispositivos sobre o capital autorizado, permitindo que o estatuto social fixe limite para aumento de capital sem nova deliberação da assembleia geral.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 84 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-85",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Direito Comercial",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Comissão de Valores Mobiliários (CVM)",
      "Auditoria Independente",
      "Lei nº 10.303/2001"
    ],
    "enunciado": "85. A Lei nº 10.303/2001 visa aprimorar o funcionamento do mercado de capitais brasileiro, com foco na proteção dos investidores e na garantia de informações transparentes. Com base nessa legislação, julgue o item a seguir.\n\nA Lei nº 10.303/2001 retirou da comissão de valores mobiliários (CVM) o poder de regulamentar e fiscalizar os auditores independentes.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 85 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-86",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Normas Brasileiras de Contabilidade",
      "Documentação de Auditoria"
    ],
    "enunciado": "86. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nA documentação de auditoria é o registro dos procedimentos de auditoria executados, da evidência de auditoria relevante obtida e das conclusões alcançadas pelo auditor.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 86 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-87",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Normas Brasileiras de Contabilidade",
      "Conceitos Fundamentais de Auditoria"
    ],
    "enunciado": "87. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nAuditor experiente é um indivíduo (interno ou externo à firma de auditoria) que possui experiência prática de auditoria e certificação profissional de auditor.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 87 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-88",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Amostragem em Auditoria",
      "NBC TA 530"
    ],
    "enunciado": "88. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nA amostragem em auditoria é a aplicação de procedimentos de auditoria em menos de 100% dos itens de uma população relevante, com o objetivo de obter evidência suficiente e apropriada.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 88 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-89",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Planejamento e Execução da Auditoria",
      "NBC TA 300"
    ],
    "enunciado": "89. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nA execução dos testes de auditoria deve ser realizada conforme o planejamento estabelecido, sendo vedada qualquer alteração nos procedimentos durante a execução dos trabalhos.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 89 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-90",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Auditoria Operacional",
      "Auditoria Contábil"
    ],
    "enunciado": "90. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nA auditoria operacional é voltada para a avaliação da conformidade das demonstrações contábeis com os princípios contábeis aplicáveis, sendo, portanto, equivalente à auditoria contábil.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 90 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-91",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Evidência de Auditoria",
      "Procedimentos Substantivos",
      "NBC TA 500"
    ],
    "enunciado": "91. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nEvidência de auditoria é a informação utilizada pelo auditor para fundamentar suas conclusões, devendo, sempre, ser obtida por meio de testes substantivos.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 91 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-92",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Relatório do Auditor",
      "Parágrafo de Ênfase",
      "NBC TA 706"
    ],
    "enunciado": "92. O Conselho Federal de Contabilidade (CFC) é o órgão responsável pela emissão, atualização e supervisão das normas brasileiras de contabilidade aplicáveis à auditoria, especialmente as Normas Brasileiras de Contabilidade – Técnicas de Auditoria (NBC TA). Com base nessas normas de auditoria, julgue o item seguinte.\n\nSe uma questão relevante é apresentada adequadamente nas demonstrações contábeis, mas o auditor considera importante destacar ao usuário, ele pode incluir um parágrafo de ênfase no relatório, sem modificar sua opinião.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 92 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-93",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Auditoria Interna",
      "Normas Globais de Auditoria Interna do IIA"
    ],
    "enunciado": "93. As normas globais de auditoria interna do IIA (*Institute of Internal Auditors*) orientam a prática profissional mundial de auditoria interna e servem como base para avaliar e elevar a qualidade da função de auditoria interna. Com base nessas normas internacionais para o exercício profissional da auditoria interna, julgue o item a seguir.\n\nAo analisar a prestação de contas de uma viagem a serviço, o auditor interno deve verificar a exatidão dos valores e a formalização dos documentos, sem necessidade de avaliar a pertinência dos gastos, uma vez que esta é responsabilidade do gestor que autorizou a viagem.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 93 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-94",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Auditoria Interna",
      "Ceticismo Profissional",
      "Normas Globais de Auditoria Interna do IIA"
    ],
    "enunciado": "94. As normas globais de auditoria interna do IIA (*Institute of Internal Auditors*) orientam a prática profissional mundial de auditoria interna e servem como base para avaliar e elevar a qualidade da função de auditoria interna. Com base nessas normas internacionais para o exercício profissional da auditoria interna, julgue o item a seguir.\n\nSegundo as normas internacionais de auditoria interna, o auditor interno deve exercer o ceticismo profissional, o que inclui questionar e avaliar criticamente a confiabilidade das informações, mesmo quando fornecidas por gestores de alto escalão.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 94 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-95",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Auditoria Interna",
      "Objetividade e Independência",
      "Normas Globais de Auditoria Interna do IIA"
    ],
    "enunciado": "95. As normas globais de auditoria interna do IIA (*Institute of Internal Auditors*) orientam a prática profissional mundial de auditoria interna e servem como base para avaliar e elevar a qualidade da função de auditoria interna. Com base nessas normas internacionais para o exercício profissional da auditoria interna, julgue o item a seguir.\n\nA objetividade do auditor interno está garantida desde que ele não aceite presentes ou favores de terceiros, não sendo necessário se abster de avaliar atividades pelas quais foi responsável recentemente.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 95 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-96",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Auditoria Interna",
      "Relatório de Auditoria Interna",
      "Normas Globais de Auditoria Interna do IIA"
    ],
    "enunciado": "96. As normas globais de auditoria interna do IIA (*Institute of Internal Auditors*) orientam a prática profissional mundial de auditoria interna e servem como base para avaliar e elevar a qualidade da função de auditoria interna. Com base nessas normas internacionais para o exercício profissional da auditoria interna, julgue o item a seguir.\n\nAo elaborar o relatório de auditoria, o auditor interno deve comunicar as constatações, mesmo que não tenha conseguido reunir evidências suficientes para sustentá-las.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 96 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-97",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Auditoria Interna",
      "Papéis de Trabalho",
      "Normas Globais de Auditoria Interna do IIA"
    ],
    "enunciado": "97. As normas globais de auditoria interna do IIA (*Institute of Internal Auditors*) orientam a prática profissional mundial de auditoria interna e servem como base para avaliar e elevar a qualidade da função de auditoria interna. Com base nessas normas internacionais para o exercício profissional da auditoria interna, julgue o item a seguir.\n\nA análise dos papéis de trabalho elaborados por outros auditores deve levar em consideração o julgamento profissional e os critérios previamente definidos no programa de auditoria.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 97 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-98",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "CPC 16 (R1) - Estoques",
      "Mensuração de Estoques"
    ],
    "enunciado": "98. Com base nos pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue o item seguinte.\n\nDe acordo com o CPC 16 (R1) – Estoques, os estoques devem ser mensurados pelo menor valor entre o custo e o valor realizável líquido.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 98 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-99",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "CPC 16 (R1) - Estoques",
      "Métodos de Avaliação de Estoques"
    ],
    "enunciado": "99. Com base nos pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue o item seguinte.\n\nO CPC 16 (R1) – Estoques permite que os estoques sejam avaliados pelo método Último a Entrar, Primeiro a Sair (UEPS), desde que essa seja a prática usual da entidade.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 99 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-100",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "CPC 03 (R2) - Demonstração dos Fluxos de Caixa (DFC)"
    ],
    "enunciado": "100. Com base nos pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue o item seguinte.\n\nA demonstração dos fluxos de caixa pode ser elaborada pelo método direto ou indireto, sendo que o método direto é obrigatório para todas as entidades.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 100 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-101",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "CPC 09 - Demonstração do Valor Adicionado (DVA)",
      "Lei nº 6.404/1976"
    ],
    "enunciado": "101. Com base nos pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue o item seguinte.\n\nA demonstração do valor adicionado (DVA) é obrigatória para todas as sociedades por ações, conforme determinado pela Lei nº 6.404/1976.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 101 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-102",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "CPC 09 - Demonstração do Valor Adicionado (DVA)",
      "Distribuição do Valor Adicionado"
    ],
    "enunciado": "102. Com base nos pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue o item seguinte.\n\nA demonstração do valor adicionado (DVA) deve apresentar, entre outras informações, o valor adicionado distribuído aos diversos *stakeholders*, como empregados, governo, financiadores e acionistas.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 102 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-103",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Estrutura Conceitual (CPC 00)",
      "Patrimônio Líquido"
    ],
    "enunciado": "103. Com base nos pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue o item seguinte.\n\nO patrimônio líquido é definido como a diferença entre o ativo e o passivo de uma entidade.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 103 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-104",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Escrituração Contábil",
      "Livro Diário",
      "Formalidades da Escrituração"
    ],
    "enunciado": "104. Em relação aos registros contábeis, julgue o item a seguir.\n\nNo livro diário, devem ser lançadas, em ordem cronológica, com individualização, clareza e referência ao documento probante, todas as operações ocorridas, e quaisquer outros fatos que provoquem variações patrimoniais.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 104 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-105",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Escrituração Contábil",
      "Normas Brasileiras de Contabilidade"
    ],
    "enunciado": "105. Em relação aos registros contábeis, julgue o item a seguir.\n\nO nível de detalhamento da escrituração contábil deve estar alinhado às necessidades de informação de seus usuários.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 105 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-106",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Análise das Demonstrações Contábeis",
      "Índices de Liquidez"
    ],
    "enunciado": "106. Com base na análise das demonstrações financeiras, julgue o item seguinte.\n\nA liquidez geral é um indicador utilizado para avaliar a capacidade da empresa em saldar apenas as obrigações de curto prazo.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 106 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-107",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral e Análise das Demonstrações",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Análise de Liquidez",
      "Índices Financeiros"
    ],
    "enunciado": "107. Um índice de liquidez corrente superior a 1,0 garante, necessariamente, uma boa situação financeira da empresa.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 107 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-108",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral e Análise das Demonstrações",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "EBITDA / LAJIDA",
      "Indicadores de Desempenho"
    ],
    "enunciado": "108. A principal vantagem do EBITDA (*Earning Before Interest, Taxes, Depreciation and Amortization*), globalmente, é permitir a comparação de desempenho operacional entre empresas de diferentes países.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 108 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-109",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral e Análise das Demonstrações",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Análise de Demonstrações Contábeis",
      "Interpretação de Índices"
    ],
    "enunciado": "109. A análise isolada de um índice contábil, sem a consideração de tendências históricas ou comparação com padrões do setor, pode conduzir a interpretações incorretas quanto à saúde financeira da entidade.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 109 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-110",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral e Análise das Demonstrações",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Comparabilidade",
      "Séries Históricas e Critérios de Mensuração"
    ],
    "enunciado": "110. O uso de índices compostos em série histórica é limitado pela alteração da base contábil e critérios de mensuração ao longo do tempo, o que compromete a comparabilidade.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 110 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-111",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Geral e Análise das Demonstrações",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Análise de Estrutura de Capital",
      "Índice de Endividamento"
    ],
    "enunciado": "111. Um aumento no índice de endividamento geral indica, necessariamente, deterioração na estrutura financeira da empresa.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 111 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-112",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "NBC TSP Estrutura Conceitual",
      "Características Qualitativas da Informação Contábil"
    ],
    "enunciado": "112. Em relação à qualidade da informação da contabilidade pública no Brasil, ao Manual de Contabilidade Aplicada ao Setor Público (MCASP) e ao Plano de Contas Aplicado ao Setor Público (PCASP), julgue o item a seguir.\n\nA informação contábil útil deve possuir como característica qualitativa essencial a representação fidedigna dos fenômenos econômicos, mesmo que não corresponda à sua forma jurídica.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 112 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-113",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Despesa Pública",
      "Estágios da Despesa Orçamentária"
    ],
    "enunciado": "113. Em relação à qualidade da informação da contabilidade pública no Brasil, ao Manual de Contabilidade Aplicada ao Setor Público (MCASP) e ao Plano de Contas Aplicado ao Setor Público (PCASP), julgue o item a seguir.\n\nO estágio da liquidação da despesa é anterior à fixação da dotação orçamentária.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 113 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-114",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Manual de Contabilidade Aplicada ao Setor Público (MCASP)",
      "Abrangência e Normas"
    ],
    "enunciado": "114. Em relação à qualidade da informação da contabilidade pública no Brasil, ao Manual de Contabilidade Aplicada ao Setor Público (MCASP) e ao Plano de Contas Aplicado ao Setor Público (PCASP), julgue o item a seguir.\n\nO Manual de Contabilidade Aplicado ao Setor Público (MCASP) estabelece regras exclusivamente para o nível federal de governo.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 114 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-115",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Restos a Pagar",
      "Passivo Financeiro e Permanente"
    ],
    "enunciado": "115. Em relação à qualidade da informação da contabilidade pública no Brasil, ao Manual de Contabilidade Aplicada ao Setor Público (MCASP) e ao Plano de Contas Aplicado ao Setor Público (PCASP), julgue o item a seguir.\n\nOs restos a pagar processados devem ser registrados como passivo financeiro.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 115 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-116",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Contabilidade Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Plano de Contas Aplicado ao Setor Público (PCASP)",
      "Natureza da Informação"
    ],
    "enunciado": "116. Em relação à qualidade da informação da contabilidade pública no Brasil, ao Manual de Contabilidade Aplicada ao Setor Público (MCASP) e ao Plano de Contas Aplicado ao Setor Público (PCASP), julgue o item a seguir.\n\nO Plano de Contas Aplicado ao Setor Público (PCASP) classifica as contas segundo a natureza da informação: patrimonial; orçamentária; e de controle.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 116 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-117",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Processo Orçamentário",
      "Instrumentos de Planejamento (PPA, LDO, LOA)"
    ],
    "enunciado": "117. Com base no processo orçamentário brasileiro e na legislação que trata a respeito do orçamento público no Brasil, julgue o item a seguir.\n\nA Constituição Federal de 1988 estabelece que o Plano Plurianual (PPA), a lei de diretrizes orçamentárias (LDO) e a lei orçamentária anual (LOA) são de iniciativa privativa do Poder Legislativo.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 117 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-118",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Princípios Orçamentários",
      "Princípio da Não Afetação da Receita"
    ],
    "enunciado": "118. Com base no processo orçamentário brasileiro e na legislação que trata a respeito do orçamento público no Brasil, julgue o item a seguir.\n\nO princípio da não afetação da receita tributária impede qualquer tipo de vinculação, inclusive para saúde e educação.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 118 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-119",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Princípios Orçamentários",
      "Princípio da Universalidade"
    ],
    "enunciado": "119. Com base no processo orçamentário brasileiro e na legislação que trata a respeito do orçamento público no Brasil, julgue o item a seguir.\n\nO princípio da universalidade determina que o orçamento deve conter todas as receitas e despesas de todos os entes.",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 119 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-analista_contabil-120",
    "banca": "QUADRIX",
    "ano": 2025,
    "orgao": "CRC-SP",
    "cargo": "Analista Contábil",
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Créditos Adicionais",
      "Lei Orçamentária Anual"
    ],
    "enunciado": "120. Com base no processo orçamentário brasileiro e na legislação que trata a respeito do orçamento público no Brasil, julgue o item a seguir.\n\nOs créditos adicionais são autorizações de despesa não computadas ou insuficientemente dotadas na lei orçamentária anual (LOA).",
    "alternativas": [
      {
        "id": "A",
        "text": "CERTO"
      },
      {
        "id": "B",
        "text": "ERRADO"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 120 da prova oficial de Analista Contábil (QUADRIX). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial QUADRIX.",
    "fontePesquisa": "Caderno Oficial CRC-SP - 2025",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-01",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Compreensão e Interpretação de Texto"
    ],
    "enunciado": "1. Como queimadas em terras indígenas aumentaram 76% e deixaram crianças e anciãos “sufocados”\n\n*Por Leandro Prazeres*\n\n01 Quando deixou o Oeste do Amazonas rumo ___ Terra Indígena Capoto-Jarina, em Mato\n02 Grosso, a psicóloga Jaqueline Aparício, indígena da etnia Kokama, sabia que encontraria um\n03 cenário difícil ao desembarcar, mas nada a havia preparado para aquilo. A aldeia Piaraçu estava\n04 engolida pela fumaça. “O nosso território é extensão do nosso corpo. Faz parte da nossa\n05 espiritualidade. Ver a destruição de animais ou de uma árvore é como ver a nossa própria\n06 destruição” ▲ disse ela.\n07 O relato de Jaqueline ilustra um dos aspectos menos visíveis da crise ambiental causada\n08 pelos incêndios florestais no Brasil ◆ a destruição deixada pelo fogo nas terras indígenas\n09 brasileiras. Um levantamento feito pelo Instituto de Pesquisa Ambiental da Amazônia (IPAM)\n10 mostra o tamanho do estrago deixado pelas queimadas nesses territórios: entre janeiro e agosto\n11 deste ano, o fogo destruiu 3,08 milhões de hectares em áreas destinadas aos povos indígenas\n12 do país, o que equivale a 27% dos mais de 11 milhões de hectares de área queimada. Em relação\n13 ao ano passado, o crescimento no tamanho da área queimada em terras indígenas foi de 76%.\n14 Nas comunidades, os efeitos de tanta queimada são sentidos por toda a população,\n15 especialmente por jovens e idosos que sofrem com problemas respiratórios.\n16 O impacto do fogo não é sentido apenas no ar. Lideranças indígenas e ambientalistas\n17 afirmam que os dois principais fatores responsáveis por esse aumento na área queimada em\n18 terras indígenas são os efeitos das mudanças climáticas e o avanço do agronegócio. Procurado,\n19 o Ministério do Meio Ambiente (MMA) disse que contratou mais de três mil brigadistas e que\n20 metade deles é indígena. A nota também informou que o governo liberou R$ 514 milhões a mais\n21 no orçamento para o combate a incêndios em todo o Brasil. O Ministério afirmou, também, que\n22 a resposta do governo federal é coordenada por uma sala de situação, criada em junho, que\n23 envolve diversos Ministérios. Após a publicação da reportagem, o Ministério da Saúde enviou\n24 uma nota afirmando que criou, em 2023, o Comitê de Resposta aos Eventos Extremos na Saúde\n25 Indígena, que tem técnicos especializados no enfrentamento ___ seca, estiagem e queimadas.\n26 A Força Nacional do SUS foi enviada ao Amazonas para apoiar ações preventivas. A pasta\n27 disse, ainda, dar apoio a gestores, equipes e lideranças locais, emitindo alertas sobre exposição\n28 ___ fumaça, oferecendo soluções emergenciais para o abastecimento de água, monitorando sua\n29 qualidade e enviando, antecipadamente, medicamentos e insumos aos territórios. A Fundação\n30 Nacional dos Povos Indígenas (Funai), o Instituto Brasileiro do Meio Ambiente e Recursos\n31 Naturais Renováveis (Ibama) e o Instituto Chico Mendes de Conservação da Biodiversidade\n32 (ICMBio) foram procurados, mas não responderam aos questionamentos.\n\n(Disponível em: www.bbc.com/portuguese/articles/c9819351gq4o – texto adaptado especialmente para esta prova).\n\nQUESTÃO 01 – Com base no exposto pelo texto, assinale a alternativa correta.",
    "alternativas": [
      {
        "id": "A",
        "text": "O texto se concentra em denunciar a falta de ação do governo no combate aos incêndios em terras indígenas, utilizando dados para expor a ineficiência das medidas tomadas."
      },
      {
        "id": "B",
        "text": "Jaqueline Aparício, indígena Kokama, testemunhou a destruição de sua aldeia, Piaraçu, que foi completamente consumida pelo fogo, como relata o texto."
      },
      {
        "id": "C",
        "text": "O principal objetivo do texto é apresentar o trabalho de ONGs e entidades como o IPAM no combate aos incêndios em terras indígenas, destacando suas ações e impacto."
      },
      {
        "id": "D",
        "text": "O texto argumenta que a principal causa do aumento nas queimadas em terras indígenas é a mudança climática, que facilita a propagação do fogo, ignorando outros fatores."
      },
      {
        "id": "E",
        "text": "Além do impacto ambiental, o texto destaca as consequências sociais e de saúde dos incêndios para as comunidades indígenas."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 1 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-02",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Compreensão e Interpretação de Texto"
    ],
    "enunciado": "2. Com base no exposto pelo texto, analise as assertivas a seguir:\n\nI. Além da destruição ambiental, os incêndios causam problemas de saúde e estão ligados a fatores como o avanço do agronegócio.\nII. O texto afirma que os incêndios florestais são um problema recente nas terras indígenas, tendo surgido apenas nos últimos anos.\nIII. O governo federal, em conjunto com ONGs ambientalistas, tem conseguido controlar os incêndios nas terras indígenas, diminuindo significativamente as áreas queimadas.\n\nQuais estão corretas?",
    "alternativas": [
      {
        "id": "A",
        "text": "Apenas I."
      },
      {
        "id": "B",
        "text": "Apenas II."
      },
      {
        "id": "C",
        "text": "Apenas I e III."
      },
      {
        "id": "D",
        "text": "Apenas II e III."
      },
      {
        "id": "E",
        "text": "I, II e III."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 2 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-03",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Gêneros Textuais",
      "Funções da Linguagem"
    ],
    "enunciado": "3. Assinale a alternativa que melhor caracteriza o gênero textual e a função da linguagem predominante no texto.",
    "alternativas": [
      {
        "id": "A",
        "text": "Crônica argumentativa, com função emotiva, evidenciada pelo relato pessoal de Jaqueline Aparício."
      },
      {
        "id": "B",
        "text": "Reportagem, com função referencial, marcada pela presença de dados e informações sobre os incêndios em terras indígenas."
      },
      {
        "id": "C",
        "text": "Editorial, com função apelativa, visando mobilizar o leitor para a causa dos povos indígenas."
      },
      {
        "id": "D",
        "text": "Relato pessoal, com função poética, priorizando a expressividade e a subjetividade na descrição dos incêndios."
      },
      {
        "id": "E",
        "text": "Notícia, com função fática, utilizando linguagem informal para aproximar o leitor do tema abordado."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 3 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-04",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Crase",
      "Regência Verbal"
    ],
    "enunciado": "4. Considerando a regência verbal e o acento indicativo de crase, assinale a alternativa que preenche, correta e respectivamente, as lacunas tracejadas nas linhas 01, 25 e 28.",
    "alternativas": [
      {
        "id": "A",
        "text": "à – a – à"
      },
      {
        "id": "B",
        "text": "a – à – à"
      },
      {
        "id": "C",
        "text": "à – à – à"
      },
      {
        "id": "D",
        "text": "a – à – a"
      },
      {
        "id": "E",
        "text": "à – a – a"
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 4 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-05",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Pontuação"
    ],
    "enunciado": "5. Os símbolos nas linhas 06 e 08 podem ser substituídos, respectivamente, por quais sinais de pontuação?",
    "alternativas": [
      {
        "id": "A",
        "text": "Vírgula e ponto de exclamação."
      },
      {
        "id": "B",
        "text": "Travessão e ponto-final."
      },
      {
        "id": "C",
        "text": "Ponto-final e ponto e vírgula."
      },
      {
        "id": "D",
        "text": "Vírgula e dois-pontos."
      },
      {
        "id": "E",
        "text": "Dois-pontos e ponto-final."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 5 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-06",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Concordância Verbal",
      "Concordância Nominal"
    ],
    "enunciado": "6. No trecho retirado do texto “Nas comunidades, os <u>efeitos</u> de tanta queimada são sentidos por toda a população, especialmente por jovens e idosos que sofrem com problemas respiratórios”, se a palavra sublinhada for substituída por sua forma no singular, quantas outras alterações serão necessárias para manter a correta concordância nesse fragmento?",
    "alternativas": [
      {
        "id": "A",
        "text": "1."
      },
      {
        "id": "B",
        "text": "2."
      },
      {
        "id": "C",
        "text": "3."
      },
      {
        "id": "D",
        "text": "4."
      },
      {
        "id": "E",
        "text": "5."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 6 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-07",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Significação das Palavras",
      "Sinonímia"
    ],
    "enunciado": "7. A palavra \"estrago\" (l. 10) pode ser substituída, sem alteração de sentido, por:",
    "alternativas": [
      {
        "id": "A",
        "text": "Arranjo."
      },
      {
        "id": "B",
        "text": "Esmero."
      },
      {
        "id": "C",
        "text": "Benefício."
      },
      {
        "id": "D",
        "text": "Dano."
      },
      {
        "id": "E",
        "text": "Restauro."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 7 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-08",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Figuras de Linguagem"
    ],
    "enunciado": "8. No trecho retirado do texto \"Ver a destruição dos animais ou de uma árvore é como ver a nossa própria destruição\", qual figura de linguagem é empregada?",
    "alternativas": [
      {
        "id": "A",
        "text": "Antítese."
      },
      {
        "id": "B",
        "text": "Hipérbole."
      },
      {
        "id": "C",
        "text": "Aliteração."
      },
      {
        "id": "D",
        "text": "Pleonasmo."
      },
      {
        "id": "E",
        "text": "Comparação."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 8 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-09",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sintaxe",
      "Vozes Verbais"
    ],
    "enunciado": "9. Analise o trecho a seguir, retirado do texto:\n\n\"Um levantamento feito pelo Instituto de Pesquisa Ambiental da Amazônia (IPAM) mostra o tamanho do estrago deixado pelas queimadas nesses territórios\".\n\nAssinale a alternativa que apresenta o fragmento acima na voz passiva.",
    "alternativas": [
      {
        "id": "A",
        "text": "O tamanho do estrago deixado pelas queimadas nesses territórios é mostrado por um levantamento feito pelo Instituto de Pesquisa Ambiental da Amazônia (IPAM)."
      },
      {
        "id": "B",
        "text": "O Instituto de Pesquisa Ambiental da Amazônia (IPAM) fez um levantamento que mostra o tamanho do estrago deixado pelas queimadas nesses territórios."
      },
      {
        "id": "C",
        "text": "As queimadas deixaram um estrago mostrado por um levantamento feito pelo Instituto de Pesquisa Ambiental da Amazônia (IPAM)."
      },
      {
        "id": "D",
        "text": "Um levantamento, feito pelo Instituto de Pesquisa Ambiental da Amazônia (IPAM), mostrou o tamanho do estrago deixado pelas queimadas nesses territórios."
      },
      {
        "id": "E",
        "text": "Nesses territórios, o tamanho do estrago deixado pelas queimadas é mostrado através de um levantamento feito pelo Instituto de Pesquisa Ambiental da Amazônia (IPAM)."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 9 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-10",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Fonética e Fonologia",
      "Ortografia",
      "Acentuação Gráfica",
      "Uso do Hífen"
    ],
    "enunciado": "10. Analise as assertivas abaixo:\n\nI. A palavra \"Água-de-colônia\" leva hífen porque é uma palavra composta.\nII. As palavras \"cachorro\" e \"menino\" têm seis fonemas cada.\nIII. A palavra \"país\" é acentuada conforme a regra do hiato.\n\nQuais estão corretas?",
    "alternativas": [
      {
        "id": "A",
        "text": "Apenas II."
      },
      {
        "id": "B",
        "text": "Apenas III."
      },
      {
        "id": "C",
        "text": "Apenas I e II."
      },
      {
        "id": "D",
        "text": "Apenas II e III."
      },
      {
        "id": "E",
        "text": "I, II e III."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 10 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-11",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sintaxe",
      "Concordância Verbal",
      "Concordância Nominal"
    ],
    "enunciado": "11. Assinale a alternativa que apresenta a frase com as concordâncias verbal e nominal corretas.",
    "alternativas": [
      {
        "id": "A",
        "text": "Havia muitos alunos no evento que se mostrou interessado."
      },
      {
        "id": "B",
        "text": "Fazem dois anos que ele estuda para o concurso."
      },
      {
        "id": "C",
        "text": "Mais de uma pessoa trouxe seus documentos para a reunião."
      },
      {
        "id": "D",
        "text": "O aluno e a professora estava satisfeita com o resultado da prova."
      },
      {
        "id": "E",
        "text": "Os livros de História e Geografia foi retirados da biblioteca."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 11 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-12",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Morfologia",
      "Classes de Palavras",
      "Advérbio"
    ],
    "enunciado": "12. Em “Os trabalhadores estrangeiros gritavam ferozmente em frente à fábrica”, qual é o advérbio?",
    "alternativas": [
      {
        "id": "A",
        "text": "Estrangeiros."
      },
      {
        "id": "B",
        "text": "Gritavam."
      },
      {
        "id": "C",
        "text": "Trabalhadores."
      },
      {
        "id": "D",
        "text": "Fábrica."
      },
      {
        "id": "E",
        "text": "Ferozmente."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 12 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-13",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Morfossintaxe",
      "Conjunções",
      "Orações Subordinadas"
    ],
    "enunciado": "13. Assinale a alternativa que apresenta uma frase com uma conjunção subordinativa.",
    "alternativas": [
      {
        "id": "A",
        "text": "Ele não foi à festa, pois não estava se sentindo bem."
      },
      {
        "id": "B",
        "text": "O sol brilha e as crianças brincam no parque."
      },
      {
        "id": "C",
        "text": "Ela estuda muito para passar no exame."
      },
      {
        "id": "D",
        "text": "Se você estudar, então conseguirá passar."
      },
      {
        "id": "E",
        "text": "Eu gostaria de viajar, embora não tenha tempo."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 13 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-14",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Ortografia Oficial"
    ],
    "enunciado": "14. Qual das palavras abaixo é escrita com a letra “s”?",
    "alternativas": [
      {
        "id": "A",
        "text": "Sin___ero."
      },
      {
        "id": "B",
        "text": "Desconhe___ido."
      },
      {
        "id": "C",
        "text": "De___astre."
      },
      {
        "id": "D",
        "text": "E___cluir."
      },
      {
        "id": "E",
        "text": "Reali___ar."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 14 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-15",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Semântica",
      "Homônimos e Parônimos",
      "Polissemia"
    ],
    "enunciado": "15. Analise as assertivas a seguir:\n\nI. “Comprimento” e “cumprimento” são palavras homônimas.\nII. Homônimas são as palavras que possuem a mesma grafia ou pronúncia, mas significados diferentes, como em “manga”.\nIII. A palavra “constituição” é polissêmica, havendo mais de um referente para ela.\n\nQuais estão corretas?",
    "alternativas": [
      {
        "id": "A",
        "text": "Apenas II."
      },
      {
        "id": "B",
        "text": "Apenas III."
      },
      {
        "id": "C",
        "text": "Apenas I e II."
      },
      {
        "id": "D",
        "text": "Apenas II e III."
      },
      {
        "id": "E",
        "text": "I, II e III."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 15 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-16",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Conhecimentos Gerais",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "História do Município",
      "Emancipação Política de Passo do Sobrado"
    ],
    "enunciado": "16. Em que ano ocorreu o plebiscito que definiu a emancipação de Passo do Sobrado, com 88% dos votos a favor, dando o grande passo para que a cidade se tornasse independente?",
    "alternativas": [
      {
        "id": "A",
        "text": "1705."
      },
      {
        "id": "B",
        "text": "1802."
      },
      {
        "id": "C",
        "text": "1850."
      },
      {
        "id": "D",
        "text": "1991."
      },
      {
        "id": "E",
        "text": "2018."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 16 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-17",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Conhecimentos Gerais",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Aspectos Econômicos de Passo do Sobrado"
    ],
    "enunciado": "17. De acordo com o site da Câmara dos Vereadores de Passo do Sobrado, qual é a principal atividade econômica do município?",
    "alternativas": [
      {
        "id": "A",
        "text": "Agricultura."
      },
      {
        "id": "B",
        "text": "Comércio."
      },
      {
        "id": "C",
        "text": "Indústria."
      },
      {
        "id": "D",
        "text": "Metalúrgica."
      },
      {
        "id": "E",
        "text": "Construção civil."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 17 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-18",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Conhecimentos Gerais",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Atualidades",
      "Personalidades"
    ],
    "enunciado": "18. Em 2024, faleceu, aos 93 anos, um dos nomes mais importantes do entretenimento da televisão brasileira, Silvio Santos. Em que mês do ano ele faleceu?",
    "alternativas": [
      {
        "id": "A",
        "text": "Fevereiro."
      },
      {
        "id": "B",
        "text": "Março."
      },
      {
        "id": "C",
        "text": "Maio."
      },
      {
        "id": "D",
        "text": "Julho."
      },
      {
        "id": "E",
        "text": "Agosto."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 18 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-19",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Conhecimentos Gerais",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Atualidades 2024"
    ],
    "enunciado": "19. São fatos que ocorreram em 2024, EXCETO:",
    "alternativas": [
      {
        "id": "A",
        "text": "Suspensão da rede social X no Brasil pelo Ministro Alexandre de Moraes."
      },
      {
        "id": "B",
        "text": "Conquista de 20 medalhas para o Brasil nas olimpíadas de Paris."
      },
      {
        "id": "C",
        "text": "Queda de um avião modelo ATR-72-500, em agosto, na cidade de Vinhedo, no interior de São Paulo."
      },
      {
        "id": "D",
        "text": "Julgamento de Donald Trump, o primeiro ex-presidente dos EUA a ser condenado por um crime."
      },
      {
        "id": "E",
        "text": "Morte da jornalista brasileira Glória Maria, no Rio de Janeiro."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 19 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-20",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Conhecimentos Gerais",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Atualidades Internacionais",
      "Patrimônio Histórico e Cultural"
    ],
    "enunciado": "20. Está prevista para o dia 8 de dezembro de 2024 a reabertura de uma das maiores catedrais do mundo, localizada em Paris, que, após sofrer um incêndio em 2019, passou por uma reforma. Qual é o nome dessa catedral?",
    "alternativas": [
      {
        "id": "A",
        "text": "Liverpool."
      },
      {
        "id": "B",
        "text": "Notre-Dame."
      },
      {
        "id": "C",
        "text": "Sagrado Coração."
      },
      {
        "id": "D",
        "text": "Colônia."
      },
      {
        "id": "E",
        "text": "Sagrada Família."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 20 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-21",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Legislação Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei Orgânica Municipal",
      "Poder Legislativo",
      "Vereadores"
    ],
    "enunciado": "21. Com base na Lei Orgânica do Município de Passo do Sobrado, em relação aos vereadores, analise as assertivas abaixo:\n\nI. Extingue-se o mandato de vereador nos casos de renúncia escrita.\nII. Extingue-se o mandato de vereador nos casos de falecimento.\nIII. Comprovado o ato ou fato extintivo, o Presidente da Câmara, imediatamente, convocará o suplente respectivo e, a qualquer tempo, comunicará a extinção ao Plenário, sem necessidade que seja na primeira sessão seguinte.\n\nQuais estão corretas?",
    "alternativas": [
      {
        "id": "A",
        "text": "Apenas I."
      },
      {
        "id": "B",
        "text": "Apenas II."
      },
      {
        "id": "C",
        "text": "Apenas I e II."
      },
      {
        "id": "D",
        "text": "Apenas II e III."
      },
      {
        "id": "E",
        "text": "I, II e III."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 21 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-22",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Legislação Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei Orgânica Municipal",
      "Processo Legislativo"
    ],
    "enunciado": "22. Sobre leis e projetos legislativos, com base na Lei Orgânica do Município de Passo do Sobrado, analise as assertivas abaixo, assinalando V, se verdadeiras, ou F, se falsas.\n\n( ) Nos projetos de lei de iniciativa privativa do Prefeito, não será admitida emenda que aumente a despesa prevista.\n( ) Os autores de projeto de lei em tramitação na Câmara de Vereadores, inclusive o Prefeito, poderão requerer a sua retirada antes de iniciada a votação.\n( ) No início ou em qualquer fase da tramitação de projeto de lei de iniciativa exclusiva do Prefeito, este poderá solicitar à Câmara que o aprecie em 90 dias a contar do pedido, o que deverá ser devidamente motivado.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
    "alternativas": [
      {
        "id": "A",
        "text": "F – F – V."
      },
      {
        "id": "B",
        "text": "V – V – F."
      },
      {
        "id": "C",
        "text": "F – V – V."
      },
      {
        "id": "D",
        "text": "V – F – F."
      },
      {
        "id": "E",
        "text": "F – V – F."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 22 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-23",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Legislação Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei Orgânica Municipal",
      "Saúde"
    ],
    "enunciado": "23. De acordo com a Lei Orgânica do Município de Passo do Sobrado, a saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua:\n\nI. Promoção.\nII. Proteção.\nIII. Recuperação.\n\nQuais estão corretas?",
    "alternativas": [
      {
        "id": "A",
        "text": "Apenas I."
      },
      {
        "id": "B",
        "text": "Apenas II."
      },
      {
        "id": "C",
        "text": "Apenas I e II."
      },
      {
        "id": "D",
        "text": "Apenas II e III."
      },
      {
        "id": "E",
        "text": "I, II e III."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 23 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-24",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Legislação Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Regime Jurídico dos Servidores Públicos",
      "Cargos Públicos"
    ],
    "enunciado": "24. Em relação a cargos públicos, de acordo com o Regime Jurídico dos Servidores Públicos do Município de Passo do Sobrado, analise as assertivas abaixo:\n\nI. Cargo público é o criado em lei, em número certo, com denominação própria, remunerado pelos cofres municipais, ao qual corresponde um conjunto de atribuições e responsabilidades cometidas a servidor público.\nII. Os cargos públicos serão unicamente de provimento efetivo.\nIII. A investidura em cargo do magistério municipal será por concurso de provas e títulos.\n\nQuais estão corretas?",
    "alternativas": [
      {
        "id": "A",
        "text": "Apenas I."
      },
      {
        "id": "B",
        "text": "Apenas II."
      },
      {
        "id": "C",
        "text": "Apenas III."
      },
      {
        "id": "D",
        "text": "Apenas I e III."
      },
      {
        "id": "E",
        "text": "I, II e III."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 24 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-25",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Legislação Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Regime Jurídico dos Servidores Públicos",
      "Concurso Público",
      "Posse"
    ],
    "enunciado": "25. Conforme o Regime Jurídico dos Servidores Públicos do Município de Passo do Sobrado, analise as assertivas abaixo, assinalando V, se verdadeiras, ou F, se falsas.\n\n( ) Os limites de idade para inscrição em concurso público serão fixados em Portaria, de acordo com a natureza e a complexidade de cada cargo.\n( ) A nomeação em caráter provisório obedecerá à ordem de classificação obtida pelos candidatos no concurso público.\n( ) Posse é a aceitação expressa das atribuições, deveres e responsabilidades inerentes ao cargo público, com o compromisso de bem servir, formalizada com a assinatura de termo pela autoridade competente e pelo nomeado.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
    "alternativas": [
      {
        "id": "A",
        "text": "F – F – V."
      },
      {
        "id": "B",
        "text": "V – V – F."
      },
      {
        "id": "C",
        "text": "F – V – V."
      },
      {
        "id": "D",
        "text": "V – F – F."
      },
      {
        "id": "E",
        "text": "F – V – F."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 25 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-26",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Legislação Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Regime Jurídico dos Servidores Públicos",
      "Serviço Extraordinário"
    ],
    "enunciado": "26. A respeito dos serviços extraordinários, conforme disposto no Regime Jurídico dos Servidores Públicos do Município de Passo do Sobrado, analise as assertivas abaixo:\n\nI. O serviço extraordinário, excepcionalmente, poderá ser realizado sob a forma de plantões para assegurar o funcionamento dos serviços municipais ininterruptos.\nII. A prestação de serviços extraordinários só poderá ocorrer por expressa determinação da autoridade competente, mediante solicitação fundamentada do chefe da repartição, ou de ofício.\nIII. O serviço extraordinário será remunerado por hora de trabalho que exceda o período normal, com acréscimo de 100% em relação à hora normal.\n\nQuais estão corretas?",
    "alternativas": [
      {
        "id": "A",
        "text": "Apenas I."
      },
      {
        "id": "B",
        "text": "Apenas II."
      },
      {
        "id": "C",
        "text": "Apenas I e II."
      },
      {
        "id": "D",
        "text": "Apenas II e III."
      },
      {
        "id": "E",
        "text": "I, II e III."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 26 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-27",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Legislação Municipal e Ética Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Plano de Carreira dos Servidores do Município de Passo do Sobrado",
      "Promoções"
    ],
    "enunciado": "27. QUESTÃO 27 – Em relação a promoções, conforme o Plano de Carreira dos Servidores do Município de Passo do Sobrado, analise as assertivas abaixo e assinale V, se verdadeiras, ou F, se falsas.\n\n( ) Cada categoria funcional terá sete classes, designadas pelas letras A, B, C, D, E, F e G, sendo esta última a final da carreira.\n( ) O tempo de exercício na classe imediatamente inferior para fins de promoção para a seguinte será de 10 anos ininterruptos.\n( ) Merecimento é a demonstração positiva do servidor no exercício do seu cargo e se evidencia pelo desempenho de forma eficiente, dedicada e leal das atribuições que lhe são cometidas, bem como pela sua assiduidade, pontualidade e disciplina.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
    "alternativas": [
      {
        "id": "A",
        "text": "F – F – V."
      },
      {
        "id": "B",
        "text": "V – F – V."
      },
      {
        "id": "C",
        "text": "F – V – V."
      },
      {
        "id": "D",
        "text": "V – F – F."
      },
      {
        "id": "E",
        "text": "F – V – F."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 27 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-28",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Direito Penal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Legislação Especial",
      "Lei Maria da Penha (Lei nº 11.340/2006)"
    ],
    "enunciado": "28. QUESTÃO 28 – Conforme a Lei Maria da Penha, analise as assertivas abaixo e assinale V, se verdadeiras, ou F, se falsas.\n\n( ) A violência doméstica e familiar contra a mulher constitui uma das formas de violação dos direitos humanos.\n( ) Para que seja configurada violência doméstica e familiar, é necessário que haja coabitação.\n( ) Configura violência doméstica e familiar contra a mulher qualquer ação ou omissão baseada no gênero, no âmbito da unidade doméstica, compreendida como o espaço de convívio permanente de pessoas com vínculo familiar, exclusivamente.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
    "alternativas": [
      {
        "id": "A",
        "text": "F – F – V."
      },
      {
        "id": "B",
        "text": "F – V – V."
      },
      {
        "id": "C",
        "text": "V – F – V."
      },
      {
        "id": "D",
        "text": "V – F – F."
      },
      {
        "id": "E",
        "text": "V – V – F."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 28 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-29",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Direito Penal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Legislação Especial",
      "Lei Maria da Penha (Lei nº 11.340/2006)",
      "Atendimento Policial"
    ],
    "enunciado": "29. QUESTÃO 29 – Em relação ao atendimento policial prestado às vítimas de violência doméstica e familiar, de acordo com a Lei Maria da Penha, analise as assertivas abaixo:\n\nI. A inquirição de mulher em situação de violência doméstica e familiar será feita em recinto especialmente projetado para esse fim, o qual conterá os equipamentos próprios e adequados à idade da mulher em situação de violência doméstica e familiar e ao tipo e à gravidade da violência sofrida.\nII. É direito da mulher em situação de violência doméstica e familiar o atendimento policial e pericial especializado, ininterrupto e prestado por servidores exclusivamente do sexo feminino e previamente capacitados.\nIII. No atendimento à mulher em situação de violência doméstica e familiar, a autoridade policial deverá encaminhar a ofendida ao Instituto Médico Legal, o que elimina a necessidade de encaminhamento ao hospital ou ao posto de saúde.\n\nQuais estão corretas?",
    "alternativas": [
      {
        "id": "A",
        "text": "Apenas I."
      },
      {
        "id": "B",
        "text": "Apenas II."
      },
      {
        "id": "C",
        "text": "Apenas I e II."
      },
      {
        "id": "D",
        "text": "Apenas II e III."
      },
      {
        "id": "E",
        "text": "I, II e III."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 29 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-30",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Legislação e Direitos Humanos",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Estatuto da Igualdade Racial (Lei nº 12.288/2010)"
    ],
    "enunciado": "30. Conforme o Estatuto Nacional da Igualdade Racial, analise as assertivas abaixo e assinale V, se verdadeiras, ou F, se falsas.\n\n( ) Constitui um dos objetivos da Política Nacional de Saúde Integral da População Negra o fomento à realização de estudos e pesquisas sobre discriminação de gênero e saúde da mulher.\n( ) Considera-se desigualdade de gênero e raça a assimetria existente no âmbito da sociedade que acentua a distância social entre mulheres negras e os demais segmentos sociais.\n( ) A participação da população negra, em condição de igualdade de oportunidade, na vida econômica, social, política e cultural do país será promovida, prioritariamente, por meio de adoção de medidas, programas e políticas de ação afirmativa.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
    "alternativas": [
      {
        "id": "A",
        "text": "F – F – V."
      },
      {
        "id": "B",
        "text": "F – V – V."
      },
      {
        "id": "C",
        "text": "F – V – F."
      },
      {
        "id": "D",
        "text": "V – F – F."
      },
      {
        "id": "E",
        "text": "V – V – F."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 30 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-31",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Matemática e Raciocínio Lógico",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Regra de Três Simples",
      "Proporcionalidade"
    ],
    "enunciado": "31. Com 100 litros é possível pintar 230 km de faixa de sinalização em vias públicas. Quantos quilômetros podem ser pintados com 80 litros da mesma forma?",
    "alternativas": [
      {
        "id": "A",
        "text": "150."
      },
      {
        "id": "B",
        "text": "162."
      },
      {
        "id": "C",
        "text": "176."
      },
      {
        "id": "D",
        "text": "184."
      },
      {
        "id": "E",
        "text": "195."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 31 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-32",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Matemática e Raciocínio Lógico",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Geometria Plana",
      "Área do Círculo"
    ],
    "enunciado": "32. O *jump* é um exercício aeróbico praticado em cima de uma cama elástica de tamanho específico, conforme imagem abaixo:\n\n*(Cama elástica circular com indicação de raio: r = 30 cm)*\n\nRegina, fiscal tributária do município, sob recomendação médica, deverá iniciar a prática de exercícios físicos. Pesquisando sobre o tamanho seguro da cama elástica, descobriu que ela deve ser de, no mínimo, 2.400 cm². Sendo assim, assinale a alternativa que corresponde à área da cama elástica da figura acima.\nConsidere π = 3,14.",
    "alternativas": [
      {
        "id": "A",
        "text": "2.350 cm²."
      },
      {
        "id": "B",
        "text": "2.695 cm²."
      },
      {
        "id": "C",
        "text": "2.764 cm²."
      },
      {
        "id": "D",
        "text": "2.826 cm²."
      },
      {
        "id": "E",
        "text": "2.970 cm²."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 32 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-33",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Razão e Proporção",
      "Divisão Proporcional"
    ],
    "enunciado": "33. Três amigos fizeram um investimento juntos e obtiveram R$ 300.000,00 de lucro. A divisão proporcional dos lucros obedecerá a proporção de 2, 3 e 5. Determine o menor valor que um dos amigos receberá na divisão.",
    "alternativas": [
      {
        "id": "A",
        "text": "R$ 30.000,00."
      },
      {
        "id": "B",
        "text": "R$ 60.000,00."
      },
      {
        "id": "C",
        "text": "R$ 90.000,00."
      },
      {
        "id": "D",
        "text": "R$ 120.000,00."
      },
      {
        "id": "E",
        "text": "R$ 150.000,00."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 33 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-34",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Equação do 1º Grau",
      "Problemas Aritméticos"
    ],
    "enunciado": "34. O dobro de um número acrescido de 38 é igual ao seu sêxtuplo menos 58. Esse número é:",
    "alternativas": [
      {
        "id": "A",
        "text": "20."
      },
      {
        "id": "B",
        "text": "22."
      },
      {
        "id": "C",
        "text": "24."
      },
      {
        "id": "D",
        "text": "26."
      },
      {
        "id": "E",
        "text": "28."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 34 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-35",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Função Quadrática",
      "Vértice da Parábola"
    ],
    "enunciado": "35. Dada a função f(x): x² + 18x – 19, determine as coordenadas de seu ponto mínimo.",
    "alternativas": [
      {
        "id": "A",
        "text": "(100; -9)"
      },
      {
        "id": "B",
        "text": "(9; 100)"
      },
      {
        "id": "C",
        "text": "(-9; 100)"
      },
      {
        "id": "D",
        "text": "(9; -100)"
      },
      {
        "id": "E",
        "text": "(-9; -100)"
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 35 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-36",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Matemática Financeira",
      "Juros Simples"
    ],
    "enunciado": "36. Um capital de R$ 87.000,00 foi aplicado sob regime de juros simples durante 4 meses a uma taxa anual de 12%. Determine o valor dos juros gerados nessa aplicação.",
    "alternativas": [
      {
        "id": "A",
        "text": "R$ 3.480,00."
      },
      {
        "id": "B",
        "text": "R$ 3.840,00."
      },
      {
        "id": "C",
        "text": "R$ 4.038,00."
      },
      {
        "id": "D",
        "text": "R$ 4.380,00."
      },
      {
        "id": "E",
        "text": "R$ 4.830,00."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 36 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-37",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sistemas de Equações do 1º Grau",
      "Álgebra"
    ],
    "enunciado": "37. Sérgio e Gustavo foram lanchar em uma cafeteria. Sérgio comprou um café e dois pastéis e gastou R$ 22,00. Gustavo tomou dois cafés e comeu três pastéis e gastou R$ 36,00. Desse modo, é correto afirmar que o café e o pastel custam, respectivamente:",
    "alternativas": [
      {
        "id": "A",
        "text": "R$ 5,00 – R$ 6,00."
      },
      {
        "id": "B",
        "text": "R$ 5,00 – R$ 10,00."
      },
      {
        "id": "C",
        "text": "R$ 6,00 – R$ 6,00."
      },
      {
        "id": "D",
        "text": "R$ 6,00 – R$ 8,00."
      },
      {
        "id": "E",
        "text": "R$ 8,00 – R$ 6,00."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 37 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-38",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Geometria Plana",
      "Teorema de Pitágoras",
      "Triângulo Retângulo"
    ],
    "enunciado": "38. Analise o triângulo retângulo abaixo:\n\n*(Triângulo retângulo com catetos medindo 20 cm e 21 cm, e hipotenusa medindo x)*\n\nO dobro da medida x é igual a:",
    "alternativas": [
      {
        "id": "A",
        "text": "29."
      },
      {
        "id": "B",
        "text": "36."
      },
      {
        "id": "C",
        "text": "49."
      },
      {
        "id": "D",
        "text": "58."
      },
      {
        "id": "E",
        "text": "64."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 38 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-39",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Equações do 1º Grau",
      "Problemas Aritméticos"
    ],
    "enunciado": "39. O triplo de um número acrescido de 54 é igual a sete vezes ele menos 82. Esse número é:",
    "alternativas": [
      {
        "id": "A",
        "text": "30."
      },
      {
        "id": "B",
        "text": "34."
      },
      {
        "id": "C",
        "text": "38."
      },
      {
        "id": "D",
        "text": "42."
      },
      {
        "id": "E",
        "text": "46."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 39 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario3-40",
    "banca": "FCC",
    "ano": 2023,
    "orgao": "Prefeitura Municipal",
    "cargo": "Fiscal Tributário III",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lógica Proposicional",
      "Negação de Proposições Compostas",
      "Leis de De Morgan"
    ],
    "enunciado": "40. A negação da proposição composta “eu não estudo ou eu passo no concurso” é:",
    "alternativas": [
      {
        "id": "A",
        "text": "Eu estudo ou eu não passo no concurso."
      },
      {
        "id": "B",
        "text": "Eu não estudo e eu não passo no concurso."
      },
      {
        "id": "C",
        "text": "Eu estudo e eu não passo no concurso."
      },
      {
        "id": "D",
        "text": "Se eu estudo, então eu passo no concurso."
      },
      {
        "id": "E",
        "text": "Eu não passo no concurso ou eu estudo."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 40 da prova oficial de Fiscal Tributário III (FCC). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FCC.",
    "fontePesquisa": "Caderno Oficial Prefeitura Municipal - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-01",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Interpretação de Texto",
      "Tipologia Textual",
      "Objetivo Comunicativo"
    ],
    "enunciado": "1. A finalidade do texto “Quem cuida das cuidadoras?” é:",
    "alternativas": [
      {
        "id": "A",
        "text": "Apresentar informações concretas sobre a invisibilização dos trabalhos das mulheres."
      },
      {
        "id": "B",
        "text": "Afirmar sobre a situação das mulheres na atualidade, as quais são sobrecarregadas."
      },
      {
        "id": "C",
        "text": "Criticar o machismo presente na sociedade o qual invisibiliza o trabalho das mulheres."
      },
      {
        "id": "D",
        "text": "Refletir por meio de argumentos consistentes sobre a situação dos trabalhos das mulheres."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 1 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-02",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Semântica",
      "Significação Contextual das Palavras"
    ],
    "enunciado": "2. Na frase “Além de terem seus papéis de cuidadoras invisibilizados, muitas mulheres enfrentam dupla jornada, equilibrando vida profissional e maternidade.”, a palavra invisibilizados, no contexto, significa:",
    "alternativas": [
      {
        "id": "A",
        "text": "Dissimulado."
      },
      {
        "id": "B",
        "text": "Imperceptível."
      },
      {
        "id": "C",
        "text": "Inviável."
      },
      {
        "id": "D",
        "text": "Mascarado."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 2 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-03",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Compreensão de Texto",
      "Ideias Centrais e Secundárias"
    ],
    "enunciado": "3. Assinale a alternativa que NÃO se relaciona com a temática do texto:",
    "alternativas": [
      {
        "id": "A",
        "text": "Não apenas o trabalho da mulher está invisível, mas também sem nenhum tipo de reconhecimento."
      },
      {
        "id": "B",
        "text": "Muitas mulheres enfrentam uma jornada dupla de trabalho, equilibrando a vida profissional e a maternidade."
      },
      {
        "id": "C",
        "text": "O cuidado é essencial para a humanidade, pois todos precisamos dele para existir e envolve dedicação."
      },
      {
        "id": "D",
        "text": "O cuidado de pessoas da família fica essencialmente para as mulheres e não é remunerado."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 3 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-04",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sintaxe",
      "Termos Essenciais da Oração",
      "Sujeito"
    ],
    "enunciado": "4. Em “É muito clara, por exemplo, a <u>diferença</u> entre o papel de uma mãe e o de um pai, na maior parte das vezes.”, a palavra sublinhada tem a função sintática de:",
    "alternativas": [
      {
        "id": "A",
        "text": "Sujeito."
      },
      {
        "id": "B",
        "text": "Adjunto adnominal."
      },
      {
        "id": "C",
        "text": "Objeto direto."
      },
      {
        "id": "D",
        "text": "Predicado."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 4 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-05",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Morfologia",
      "Classes de Palavras",
      "Pronomes Relativos"
    ],
    "enunciado": "5. No trecho “Temos mais de 20 milhões de mães solo no país, onde os pais não assumem a sua paternidade.”, a palavra “onde” pode ser classificada morfologicamente como:",
    "alternativas": [
      {
        "id": "A",
        "text": "Advérbio interrogativo."
      },
      {
        "id": "B",
        "text": "Pronome relativo."
      },
      {
        "id": "C",
        "text": "Conjunção integrante."
      },
      {
        "id": "D",
        "text": "Preposição."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 5 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-06",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Interpretação de Texto",
      "Recursos Argumentativos",
      "Estrutura Textual"
    ],
    "enunciado": "6. Dentre as estratégias utilizadas para estruturar o texto 1, podemos dizer que NÃO se aplica:",
    "alternativas": [
      {
        "id": "A",
        "text": "O uso de dados numéricos para comprovar o argumento."
      },
      {
        "id": "B",
        "text": "O uso de falas de especialistas para dar mais credibilidade."
      },
      {
        "id": "C",
        "text": "O uso de linguagem subjetiva para apresentar um ponto de vista."
      },
      {
        "id": "D",
        "text": "O uso de uma linguagem clara e acessível para a compreensão do leitor."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 6 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-07",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Compreensão e Interpretação de Texto"
    ],
    "enunciado": "7. Identifique um trecho do texto que responda à pergunta do título “Quem cuida das cuidadoras?”",
    "alternativas": [
      {
        "id": "A",
        "text": "“Além de terem seus papéis de cuidadoras invisibilizados, muitas mulheres enfrentam dupla jornada, equilibrando vida profissional e maternidade.”"
      },
      {
        "id": "B",
        "text": "“De acordo com o Fórum Econômico Mundial, levaria mais de 130 anos para equiparação de gênero no Brasil, o que traz prejuízos para o crescimento econômico do país.”"
      },
      {
        "id": "C",
        "text": "“Nove em 10 vezes, quando os pais estão mais velhos e precisam de ajuda, é a mulher, representada pela filha, que vai dar esse suporte, também gerando essa inequidade.”"
      },
      {
        "id": "D",
        "text": "“O tema da redação do Exame Nacional do Ensino Médio (Enem) 2023 não só levantou reflexões em quem fez a prova no último domingo (5/11), mas também diversos setores da sociedade brasileira.”"
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 7 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-08",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Funções da Linguagem"
    ],
    "enunciado": "8. A função da linguagem predominante no texto 1 é:",
    "alternativas": [
      {
        "id": "A",
        "text": "Conativa."
      },
      {
        "id": "B",
        "text": "Denotativa."
      },
      {
        "id": "C",
        "text": "Emotiva."
      },
      {
        "id": "D",
        "text": "Fática."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 8 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-09",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Compreensão e Interpretação de Texto",
      "Intertextualidade"
    ],
    "enunciado": "9. Observe a tirinha abaixo.\n\n**TEXTO 2**\n\n*(Tirinha de @helodangeloarte ilustrando o trabalho doméstico e de cuidado feito por uma mulher, com o texto central: \"TRABALHO INVISÍVEL A GENTE SÓ VÊ SE FALTA\" e falas ao redor: \"NÃO TEM ALMOÇO?!\", \"NÃO TENHO ROUPA LIMPA!\", \"PÔ...\", \"TENHO QUE CUIDAR DOS MEUS FILHOS HOJE?!\")*\n\nA partir da leitura do texto I, podemos dizer que o texto 2:",
    "alternativas": [
      {
        "id": "A",
        "text": "Ilustra o que foi abordado no primeiro texto ao retratar a invisibilidade do trabalho do cuidado feito pelas mulheres."
      },
      {
        "id": "B",
        "text": "Complementa o que foi dito no primeiro texto acrescentando elementos que mostram a realidade conflitante."
      },
      {
        "id": "C",
        "text": "Contradiz o que foi dito no primeiro ao focar no conflito familiar ao mostrar que só se vê o trabalho quando falta."
      },
      {
        "id": "D",
        "text": "Corrobora com a temática do primeiro texto, além de mostrar que os familiares só o valorizam quando falta."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 9 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-10",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Reescrita de Frases",
      "Emprego de Tempos e Modos Verbais",
      "Uso de 'a tempo' e 'há tempo'"
    ],
    "enunciado": "10. Na frase “Se eu tivesse chegado há tempo, a EDP não tinha cortado a luz daqui de casa.” Se a frase fosse reescrita, adequando-se à norma padrão, a forma correta é:",
    "alternativas": [
      {
        "id": "A",
        "text": "Se eu estivesse chegado a tempo, a EDP não teria cortado a luz daqui de casa."
      },
      {
        "id": "B",
        "text": "Se eu tivesse chegado há tempo, a EDP não teria cortado a luz daqui de casa."
      },
      {
        "id": "C",
        "text": "Se eu tivesse chegado a tempo, a EDP não teria cortado a luz daqui de casa."
      },
      {
        "id": "D",
        "text": "Se eu estivesse chegado a tempo, a EDP não tinha cortado a luz daqui de casa."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 10 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-11",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Direito Constitucional",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Direitos e Garantias Fundamentais",
      "Tratados Internacionais de Direitos Humanos"
    ],
    "enunciado": "11. Os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em __________, por __________ dos votos dos respectivos membros, serão equivalentes às __________:\n\nConforme previsto na Constituição de 1988, marque a alternativa que preenche corretamente as lacunas acima:",
    "alternativas": [
      {
        "id": "A",
        "text": "Dois turnos, dois terços, emendas constitucionais."
      },
      {
        "id": "B",
        "text": "Um turno, por maioria simples, leis ordinárias."
      },
      {
        "id": "C",
        "text": "Dois turnos, três quintos, emendas constitucionais."
      },
      {
        "id": "D",
        "text": "Um turno, por maioria absoluta, leis complementares."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 11 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-12",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Direito Constitucional",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Administração Pública",
      "Disposições Gerais da Administração Pública"
    ],
    "enunciado": "12. Tendo por referência as regras constitucionais para a Administração Pública, analise as afirmações a seguir e indique V para as verdadeiras e F para as falsas:\n\n( ) Os vencimentos dos cargos do Poder Legislativo e do Poder Executivo não poderão ser superiores aos pagos pelo Poder Judiciário.\n( ) É vedada a vinculação ou equiparação de quaisquer espécies remuneratórias para o efeito de remuneração de pessoal do serviço público.\n( ) A proibição de acumular cargos públicos estende-se a empregos e funções e abrange as autarquias e fundações, mas não se estendem às empresas públicas e sociedades de economia mista, suas subsidiárias, e sociedades controladas, direta ou indiretamente, pelo poder público.\n( ) Os acréscimos pecuniários percebidos por servidor público não serão computados nem acumulados para fins de concessão de acréscimos ulteriores.\n\nA sequência correta de preenchimento dos parênteses, de cima para baixo, é:",
    "alternativas": [
      {
        "id": "A",
        "text": "V, F, F, V."
      },
      {
        "id": "B",
        "text": "V, F, V, F."
      },
      {
        "id": "C",
        "text": "F, V, V, F."
      },
      {
        "id": "D",
        "text": "F, V, F, V."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 12 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-13",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Legislação Municipal e Ética Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Código de Ética do Agente Público",
      "Princípios da Administração Pública"
    ],
    "enunciado": "13. Além dos princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência administrativa, também encontra-se previsto expressamente no Código de Ética do Agente Público Municipal os seguintes princípios e valores fundamentais, exceto:",
    "alternativas": [
      {
        "id": "A",
        "text": "Preservação e defesa do patrimônio público e da probidade administrativa."
      },
      {
        "id": "B",
        "text": "Imparcialidade."
      },
      {
        "id": "C",
        "text": "Indisponibilidade do interesse público."
      },
      {
        "id": "D",
        "text": "A honestidade, a dignidade, o respeito e o decoro."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 13 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-14",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Legislação Municipal e Ética Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Código de Ética do Agente Público",
      "Conflito de Interesses"
    ],
    "enunciado": "14. Analise as afirmações a seguir e indique V para as verdadeiras e F para as falsas:\n\n( ) Considera-se conflito de interesses qualquer oportunidade de ganho que possa ser obtido em consequência das atividades desempenhadas pelo agente público em seu cargo, emprego ou função, em benefício próprio.\n( ) Ocorre conflito de interesses quando o interesse particular, que necessita ser de cunho pessoal, entra em conflito com os deveres e atribuições do agente público em seu cargo, emprego ou função.\n( ) Considera-se conflito de interesses qualquer oportunidade de ganho que possa ser obtido por meio das atividades desempenhadas pelo agente público em seu cargo, emprego ou função, em benefício de parente até o quarto grau civil.\n( ) Uma das fontes potenciais de conflitos de interesse financeiro, essas que devem ser informadas, são dívidas.\n\nBaseado no Código de Ética do Agente Público Municipal de Alfredo Chaves/ES, a sequência correta de preenchimento dos parênteses, de cima para baixo, é:",
    "alternativas": [
      {
        "id": "A",
        "text": "V, F, F, V."
      },
      {
        "id": "B",
        "text": "V, F, V, F."
      },
      {
        "id": "C",
        "text": "F, V, V, F."
      },
      {
        "id": "D",
        "text": "F, V, F, V."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 14 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-15",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Legislação Municipal e Ética Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei Orgânica Municipal",
      "Disposições Preliminares"
    ],
    "enunciado": "15. O Município de Alfredo Chaves fundado em ____________ de janeiro de mil oitocentos e ____________, é unidade do Estado do Espírito Santo com autonomia assegurada pelas Constituições Federal e Estadual, será regido pelo estabelecido na presente Lei Orgânica.\n\nTendo por referência do Lei Orgânica do Município de Alfredo Chaves/ES, marque a alternativa que preenche corretamente as lacunas acima:",
    "alternativas": [
      {
        "id": "A",
        "text": "Vinte e quatro, noventa e dois."
      },
      {
        "id": "B",
        "text": "Vinte e seis, noventa e um."
      },
      {
        "id": "C",
        "text": "Vinte e seis, noventa e dois."
      },
      {
        "id": "D",
        "text": "Vinte e quatro, noventa e um."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 15 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-16",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Legislação Municipal e Ética Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei Orgânica Municipal",
      "Regime dos Servidores Públicos Municipais",
      "Aposentadoria"
    ],
    "enunciado": "16. Levando-se em consideração o texto da Lei Orgânica do município de Alfredo Chaves/ES, verifique nas alternativas abaixo aquela que trouxer uma informação incorreta sobre a aposentadoria de servidores públicos:",
    "alternativas": [
      {
        "id": "A",
        "text": "Uma das hipóteses de aposentadoria é a voluntária, desde que cumprido tempo mínimo de dez anos de efetivo exercício no serviço público e cinco anos no cargo efetivo em que se dará a aposentadoria, aos sessenta anos de idade e trinta e cinco de contribuição, se homem, e cinquenta e cinco anos de idade e trinta de contribuição, se mulher."
      },
      {
        "id": "B",
        "text": "Poderá o servidor ser aposentado compulsoriamente, aos setenta e cinco anos de idade, com proventos proporcionais ao tempo de contribuição."
      },
      {
        "id": "C",
        "text": "É possível a aposentadoria por invalidez permanente, sendo os proventos proporcionais ao tempo de contribuição, exceto se decorrente de acidente em serviço, moléstia profissional ou doença grave, contagiosa ou incurável."
      },
      {
        "id": "D",
        "text": "O Município adota o regime geral de previdência social."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 16 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-17",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Legislação Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei Orgânica do Município de Alfredo Chaves/ES",
      "Poder Legislativo"
    ],
    "enunciado": "17. Analise as afirmações a seguir e indique V para as verdadeiras e F para as falsas:\n\n( ) A Câmara Municipal reunir-se-á em Sessões Ordinárias, extraordinárias e solenes e, no recesso em Sessões Legislativas Extraordinárias.\n( ) As votações nas Sessões da Câmara serão preferencialmente simbólicas, não podendo ser secretas.\n( ) Independentemente de convocação, a Sessão Legislativa anual funcionará de 20 de janeiro a 15 de dezembro;\n( ) As reuniões fixadas para a data inicial e final da Sessão Legislativa, serão transferidas para o primeiro dia útil subsequente, quando recaírem sábado, domingo e feriado.\n\nLevando-se em consideração a Lei Orgânica do município de Alfredo Chaves/ES, a sequência correta de preenchimento dos parênteses, de cima para baixo, é:",
    "alternativas": [
      {
        "id": "A",
        "text": "V, F, F, V."
      },
      {
        "id": "B",
        "text": "V, F, V, F."
      },
      {
        "id": "C",
        "text": "F, V, V, F."
      },
      {
        "id": "D",
        "text": "F, V, F, V."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 17 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-18",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Legislação Municipal e Ética Pública",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Código de Ética do Agente Público Municipal"
    ],
    "enunciado": "18. De acordo com o Código de Ética do Agente Público Municipal, marque a alternativa INCORRETA:",
    "alternativas": [
      {
        "id": "A",
        "text": "À Comissão de Ética incumbe fornecer, aos órgãos encarregados da gestão de pessoas, seus registros sobre conduta ética, para o efeito de instruir e fundamentar promoções e para todos os demais procedimentos próprios da carreira do servidor público."
      },
      {
        "id": "B",
        "text": "Os procedimentos a serem adotados pela Comissão de Ética, para a apuração de fato que se apresente contrário à ética, terá o rito sumário, ouvidos apenas o queixoso e o servidor, ou apenas este, se a apuração decorrer de conhecimento de ofício."
      },
      {
        "id": "C",
        "text": "Dada a eventual gravidade da conduta do servidor ou sua reincidência, poderá a Comissão de Ética encaminhar a sua decisão e respectivo expediente para o órgão competente iniciar Processo Administrativo Disciplinar – PAD –, para as providências disciplinares cabíveis."
      },
      {
        "id": "D",
        "text": "A Comissão de Ética, nos casos não previstos expressamente no Código supracitado, poderá se eximir de fundamentar o julgamento da falta de ética do servidor público, sendo-lhes vedado o uso de analogia."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 18 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-19",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Legislação Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei Orgânica do Município de Alfredo Chaves/ES",
      "Meio Ambiente"
    ],
    "enunciado": "19. Os proprietários rurais ficam obrigados a recuperar com espécies florestais nativas, _______________ ao ano do uso de suas propriedades, até que atinja o limite mínimo de _______________.\n\nConforme previsto na Lei Orgânica do município de Alfredo Chaves/ES, marque a alternativa que preenche corretamente as lacunas acima:",
    "alternativas": [
      {
        "id": "A",
        "text": "dois por cento (2%), vinte e cinco por cento (25%)."
      },
      {
        "id": "B",
        "text": "um por cento (1%), vinte por cento (20%)."
      },
      {
        "id": "C",
        "text": "dois por cento (2%), vinte por cento (20%)."
      },
      {
        "id": "D",
        "text": "um por cento (1%), vinte e cinco por cento (25%)."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 19 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-20",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Direito Constitucional",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Princípios Fundamentais da República Federativa do Brasil",
      "Objetivos Fundamentais"
    ],
    "enunciado": "20. Com fulcro no texto constitucional, é correto afirmar que se trata de um dos objetivos fundamentais da República Federativa do Brasil:",
    "alternativas": [
      {
        "id": "A",
        "text": "A dignidade da pessoa humana."
      },
      {
        "id": "B",
        "text": "A independência nacional."
      },
      {
        "id": "C",
        "text": "A prevalência dos direitos humanos."
      },
      {
        "id": "D",
        "text": "A construção de uma sociedade livre, justa e solidária."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 20 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-21",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Microsoft Excel 2016",
      "Funções e Fórmulas"
    ],
    "enunciado": "21. Que etapas são necessárias para inserir uma função no Excel 2016 (em sua versão em português e configuração padrão) utilizando o assistente de funções?",
    "alternativas": [
      {
        "id": "A",
        "text": "Clicando com o botão direito na célula desejada e selecionando a opção “Inserir função”."
      },
      {
        "id": "B",
        "text": "Utilizando o atalho “Ctrl” + “F”."
      },
      {
        "id": "C",
        "text": "Clicando na guia “Fórmulas” e selecionando “Inserir função”."
      },
      {
        "id": "D",
        "text": "Clicando na guia “Fórmulas” e selecionando a opção “Funções” e depois “Inserir funções”."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 21 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-22",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Microsoft Word 2016",
      "Mala Direta"
    ],
    "enunciado": "22. O MS-Word 2016 possui uma ferramenta chamada Mala Direta, utilizada para a criação de uma carta-modelo a ser impressa ou enviada várias vezes por e-mail, remetendo cada cópia a um destinatário diferente. Sendo assim, são tipos de documentos de mala direta que o MS-Word 2016 disponibiliza:\n\nI. Cartas;\nII. SMS;\nIII. Mensagens de E-mail;\nIV. Envelopes;\nV. Etiquetas;\nVI. Diretório.\n\nEstão corretas:",
    "alternativas": [
      {
        "id": "A",
        "text": "I, III, IV, V e VI, apenas."
      },
      {
        "id": "B",
        "text": "II, IV e V, apenas."
      },
      {
        "id": "C",
        "text": "I, II, III, IV, V e VI."
      },
      {
        "id": "D",
        "text": "I, III e VI, apenas."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 22 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-23",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Microsoft PowerPoint 2016",
      "Manipulação de Slides"
    ],
    "enunciado": "23. Considerando o Microsoft PowerPoint 2016 em sua configuração padrão PT-BR, um usuário que deseje criar um novo slide em uma apresentação, que seja idêntico ao anterior, deve utilizar qual comando?",
    "alternativas": [
      {
        "id": "A",
        "text": "Ampliar Slide."
      },
      {
        "id": "B",
        "text": "Clonar Slide."
      },
      {
        "id": "C",
        "text": "Novo Slide."
      },
      {
        "id": "D",
        "text": "Duplicar Slide."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 23 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-24",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Microsoft Word 2016",
      "Formatação de Texto",
      "Atalhos de Teclado"
    ],
    "enunciado": "24. “O atacante Gabriel Jesus desfalcará a seleção **<u>brasileira</u>** no jogo de amanhã contra a Colômbia pelas Eliminatórias para a Copa do Mundo de 2026”\n\n(FONTE: https://www.uol.com.br/esporte/futebol/ultimas-noticias/2023/11/15/gabriel-jesus-selecao-brasileira-colombia.htm)\n\nConsiderando o Microsoft Word 2016 em sua configuração padrão PT-BR, marque a opção abaixo que apresenta no nome correto das formatações aplicadas a palavra em destaque no parágrafo acima, bem como os atalhos de teclado corretos para realizar a formatação.",
    "alternativas": [
      {
        "id": "A",
        "text": "Itálico e Sublinhado / “Ctrl+I” e “Ctrl+S”."
      },
      {
        "id": "B",
        "text": "Negrito e Itálico / “Ctrl+N” e “Ctrl+T”."
      },
      {
        "id": "C",
        "text": "Negrito e Sublinhado / “Ctrl+N” e “Ctrl+S”."
      },
      {
        "id": "D",
        "text": "Sublinhado e Destacado / “Ctrl+S” e “Ctrl+D”."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 24 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-25",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Microsoft Excel 2016",
      "Funções e Fórmulas"
    ],
    "enunciado": "25. Qual função é utilizada para arredondar um número para baixo em uma planilha do Excel 2016 (em sua versão em português e configuração padrão)?",
    "alternativas": [
      {
        "id": "A",
        "text": "=ARRED.MENOS(núm; núm_dígitos)"
      },
      {
        "id": "B",
        "text": "=ARREDONDAR.PARA.BAIXO(núm; núm_dígitos)"
      },
      {
        "id": "C",
        "text": "=ARRED.BAIXO(núm; núm_dígitos)"
      },
      {
        "id": "D",
        "text": "=ARREDMENOS(núm; núm_dígitos)"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 25 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-26",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Redes de Computadores",
      "Internet",
      "Endereçamento IP"
    ],
    "enunciado": "26. O que representa um endereço IP na estrutura da Internet?",
    "alternativas": [
      {
        "id": "A",
        "text": "O nome de domínio de um website."
      },
      {
        "id": "B",
        "text": "Um código de barras para identificar o país de origem de um servidor."
      },
      {
        "id": "C",
        "text": "Uma senha de acesso aos serviços online."
      },
      {
        "id": "D",
        "text": "Um identificador único para um dispositivo conectado à internet."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 26 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-27",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Microsoft Word 2016",
      "Atalhos de Teclado"
    ],
    "enunciado": "27. Qual atalho deve ser utilizado no MS-Word 2016, em sua configuração padrão PT-BR, para formatar a fonte do documento?",
    "alternativas": [
      {
        "id": "A",
        "text": "Ctrl + = (igual)."
      },
      {
        "id": "B",
        "text": "Ctrl + D."
      },
      {
        "id": "C",
        "text": "Ctrl + O."
      },
      {
        "id": "D",
        "text": "Ctrl + W."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 27 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-28",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Segurança da Informação",
      "Ameaças e Ataques Virtuais",
      "Phishing"
    ],
    "enunciado": "28. Levando em consideração os conceitos de Segurança da Informação, marque a alternativa que apresenta a definição de um ataque de phishing:",
    "alternativas": [
      {
        "id": "A",
        "text": "Um ataque realizado por vírus que destrói o hardware do computador."
      },
      {
        "id": "B",
        "text": "Um ataque que tem o objetivo de obter informações da vítima através de solicitações falsas, se passando por empresas confiáveis."
      },
      {
        "id": "C",
        "text": "Um ataque focado na rede sem fio."
      },
      {
        "id": "D",
        "text": "Um ataque usado apenas para roubar senha de cartão de crédito."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 28 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-29",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Microsoft PowerPoint",
      "Atalhos de Teclado"
    ],
    "enunciado": "29. Marcos está apresentando um trabalho no Power Point com 44 *slides*. Ele está no slide 32 e precisa mostrar uma informação presente no slide 7. Utilizando as teclas de atalho do teclado, como ele deve proceder para chegar rapidamente ao slide 7?",
    "alternativas": [
      {
        "id": "A",
        "text": "Pressionar a tecla “Shift” + “7”."
      },
      {
        "id": "B",
        "text": "Pressionar a tecla “Alt” + “Shift” + “7”."
      },
      {
        "id": "C",
        "text": "Pressionar a tecla “7” + “Enter”."
      },
      {
        "id": "D",
        "text": "Pressionar a tecla “Ctrl” + “7”."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 29 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-30",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Noções de Informática",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Microsoft Excel 2016",
      "Funções e Fórmulas"
    ],
    "enunciado": "30. Considerando o Microsoft Excel 2016 em sua configuração padrão PT-BR, qual das opções abaixo apresenta a função do Excel que pode ser usada para encontrar a média aritimética um intervalo de células?",
    "alternativas": [
      {
        "id": "A",
        "text": "SOMA()"
      },
      {
        "id": "B",
        "text": "TOTAL()"
      },
      {
        "id": "C",
        "text": "MÉDIA()"
      },
      {
        "id": "D",
        "text": "SE()"
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 30 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-31",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Direito Tributário e Legislação Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Código Tributário Municipal",
      "Princípio da Legalidade Tributária"
    ],
    "enunciado": "31. Observado as disposições do Código Tributário do Município de Alfredo Chaves/ES, instituído pela Lei Complementar nº 027 de 2020, é incorreto afirmar que somente por lei se pode estabelecer:",
    "alternativas": [
      {
        "id": "A",
        "text": "As hipóteses de exclusão, suspensão e extinção de créditos tributários, exceto a dispensa ou redução de penalidades."
      },
      {
        "id": "B",
        "text": "A instituição de tributos ou a sua extinção."
      },
      {
        "id": "C",
        "text": "A majoração de tributos ou a sua redução."
      },
      {
        "id": "D",
        "text": "A definição de fato gerador da obrigação tributária principal e de seu sujeito passivo."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 31 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-32",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Direito Tributário e Legislação Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Código Tributário Municipal",
      "Administração Tributária",
      "Certidões Negativas"
    ],
    "enunciado": "32. Em conformidade com o Código Tributário do Município de Alfredo Chaves/ES, tratando dos deveres da administração tributária, é CORRETO afirmar que da data da formalização do pedido devidamente instruído na repartição, as certidões negativas serão fornecidas pela administração tributária em até:",
    "alternativas": [
      {
        "id": "A",
        "text": "7 (sete) dias."
      },
      {
        "id": "B",
        "text": "10 (dez) dias."
      },
      {
        "id": "C",
        "text": "15 (quinze) dias."
      },
      {
        "id": "D",
        "text": "30 (trinta) dias."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 32 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-33",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Direito Tributário",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Princípios Constitucionais Tributários",
      "Capacidade Contributiva"
    ],
    "enunciado": "33. Os princípios constitucionais tributários são normas que orientam e limitam o poder de tributar do Estado, garantindo os direitos e deveres dos contribuintes e da administração pública. Nesse sentido, é CORRETO afirmar que o princípio que prevê que o Estado deve tributar conforme as possibilidades de cada contribuinte, buscando o atingimento da “justiça fiscal”, seja o princípio da:",
    "alternativas": [
      {
        "id": "A",
        "text": "Legalidade."
      },
      {
        "id": "B",
        "text": "Isonomia."
      },
      {
        "id": "C",
        "text": "Capacidade contributiva."
      },
      {
        "id": "D",
        "text": "Anterioridade."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 33 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-38",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Direito Tributário",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Responsabilidade Tributária",
      "Sujeito Passivo Indireto"
    ],
    "enunciado": "38. A responsabilidade tributária determina quem é o responsável legal pelo pagamento de cada tributo. Em geral, quem deve pagar é aquele que possui ligação direta com o tributo, o chamado sujeito passivo direto. Entretanto, em alguns casos, um terceiro pode ser o responsável pelo pagamento dele. Esse terceiro pode não ser relacionado diretamente ao tributo, mas relaciona-se de forma indireta com ele. Por isso, é chamado de sujeito passivo indireto. O Código Tributário Nacional (CTN), em seu capítulo V, determina os casos em que a responsabilidade tributária pode ser atribuída a terceiros. Ela é dividida em diversos casos.\n\nAbaixo encontram-se todos os casos em que a responsabilidade tributária não é do sujeito passivo direto, com EXCEÇÃO da opção:",
    "alternativas": [
      {
        "id": "A",
        "text": "Responsabilidade por Transferência e Responsabilidade por Substituição."
      },
      {
        "id": "B",
        "text": "Responsabilidade Arbitrária e Responsabilidade do Sócio plenamente Pacificado."
      },
      {
        "id": "C",
        "text": "Responsabilidade dos Sucessores (ou por Sucessão) e Responsabilidade de Terceiros."
      },
      {
        "id": "D",
        "text": "Responsabilidade Solidária e Responsabilidade Subsidiária (Ou Supletiva)."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 38 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-39",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Direito Penal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Crimes Contra a Administração Pública",
      "Concussão"
    ],
    "enunciado": "39. Dos crimes contra a administração pública, define-se Concussão como:",
    "alternativas": [
      {
        "id": "A",
        "text": "Se o funcionário concorre culposamente para o crime de outrem."
      },
      {
        "id": "B",
        "text": "Apropriar-se de dinheiro ou qualquer utilidade que, no exercício do cargo, recebeu por erro de outrem."
      },
      {
        "id": "C",
        "text": "Exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida."
      },
      {
        "id": "D",
        "text": "Dar às verbas ou rendas públicas aplicação diversa da estabelecida em lei."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 39 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-fiscal_tributario5-40",
    "banca": "VUNESP",
    "ano": 2023,
    "orgao": "Prefeitura de São Paulo",
    "cargo": "Fiscal Tributário V",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Poderes da Administração Pública",
      "Poder de Polícia",
      "Atributos do Poder de Polícia"
    ],
    "enunciado": "40. Considera-se poder de polícia atividade da administração pública que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou abstenção de fato, em razão de interesse público concernente à segurança, à higiene, à ordem, aos costumes, à disciplina da produção e do mercado, ao exercício de atividades econômicas dependentes de concessão ou autorização do Poder Público, à tranquilidade pública ou ao respeito à propriedade e aos direitos individuais ou coletivos. (Redação dada pelo Ato Complementar nº 31, de 1966).\n\nDentre as alternativas abaixo, aquela que NÃO é uma das características do Poder de Polícia é:",
    "alternativas": [
      {
        "id": "A",
        "text": "A irrepreensibilidade."
      },
      {
        "id": "B",
        "text": "A coercibilidade."
      },
      {
        "id": "C",
        "text": "A auto-executoriedade."
      },
      {
        "id": "D",
        "text": "A discricionariedade."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 40 da prova oficial de Fiscal Tributário V (VUNESP). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial VUNESP.",
    "fontePesquisa": "Caderno Oficial Prefeitura de São Paulo - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-05",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sintaxe",
      "Concordância Verbal"
    ],
    "enunciado": "5. Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.",
    "alternativas": [
      {
        "id": "A",
        "text": "Em busca da felicidade, fazem-se quaisquer esforços."
      },
      {
        "id": "B",
        "text": "Tais propostas de dissertação sempre expõe os estudantes a dilemas."
      },
      {
        "id": "C",
        "text": "A vida mostra que existe pessoas que têm limites mais estreitos."
      },
      {
        "id": "D",
        "text": "Sentimentos como a inveja torturam quem os nutrem."
      },
      {
        "id": "E",
        "text": "Ser fiel a si mesmo e aceitar as limitações: tratam-se de coisas difíceis."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 5 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-06",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Interpretação de Texto",
      "Compreensão de Texto"
    ],
    "enunciado": "6. Leia o texto, para responder às questões de números 06 a 10.\n\nVocê já pintou sua casa? Então pinte. É o que há de melhor a fazer, se não podemos pintar de novo o Brasil, por dentro e por fora. Alegramos nossa área particular, instaurando cores tônicas ou repousantes, e pondo em moda a limpeza. Se cada um caiasse seu barraco, que brinco não seria este país, pelo menos na parte domiciliar?\nO cronista está pintando a casa, e se entretém os leitores com este fato minúsculo é porque dele se pode extrair algum ensino, para ilustração geral. É bom pintar casa; melhor do que pintar cabelo. Notei que a melancolia natural se agravava nos últimos quinze anos, tantos quantos habito esta mansão, e se envinagrava em misantropia, injeções e comprimidos de felicidade não adiantavam. Um dia descobri: eram as esquadrias negras. O antigo morador assim as pintara, e a negra influência baixara sobre o espírito, sobre as relações com o mundo exterior, sobre as crônicas, que exageravam a inflação, afinal bem módica, e a eventual falta d’água, que de longe em longe nos importuna levemente, omitindo por outro lado os aspectos positivos da conjuntura, como a encantadora risada do Presidente. A velha casa tem enorme pé-direito, e portas e janelas noturnas também se alastravam pela vida acima, enegrecendo-a. O negro lambri da sala de jantar enchia de treva o próprio arroz, e em poltronas de treva almas sombrias contemplavam escuras imagens de tevê. Nosso gatinho branco virou preto. E assim por diante.\n\n(Carlos Drummond de Andrade, *Pinte sua casa*. *Poesia e prosa*.)\n\nA decisão do narrador de pintar a própria casa se deve principalmente",
    "alternativas": [
      {
        "id": "A",
        "text": "à possibilidade imediata de mudar as condições de vida no Brasil, fazendo nele uma limpeza."
      },
      {
        "id": "B",
        "text": "à expectativa de ver-se livre das convenções que o impedem de escrever."
      },
      {
        "id": "C",
        "text": "ao desejo de voltar no tempo, reencontrando a mocidade que perdeu."
      },
      {
        "id": "D",
        "text": "ao receio de ignorar fatos negativos de seu país, como a inflação e a falta d’água."
      },
      {
        "id": "E",
        "text": "à descoberta de que vivia num ambiente sombrio, que o tornava taciturno."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 6 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-07",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Pontuação",
      "Uso da Vírgula"
    ],
    "enunciado": "7. Assinale a alternativa em que a vírgula foi empregada segundo o mesmo princípio que dita seu emprego no período – *A velha casa tem enorme pé-direito, e portas e janelas noturnas também se alastravam pela vida acima.*",
    "alternativas": [
      {
        "id": "A",
        "text": "É o que há de melhor a fazer, se não podemos pintar de novo o Brasil..."
      },
      {
        "id": "B",
        "text": "O antigo morador assim as pintara, e a negra influência baixara sobre o espírito..."
      },
      {
        "id": "C",
        "text": "Alegramos nossa área particular, instaurando cores tônicas ou repousantes..."
      },
      {
        "id": "D",
        "text": "Notei que a melancolia natural se agravava nos últimos quinze anos, tantos quantos habito esta mansão..."
      },
      {
        "id": "E",
        "text": "Se cada um caiasse seu barraco, que brinco não seria este país..."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 7 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-08",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Morfologia",
      "Conjugação Verbal",
      "Colocação Pronominal"
    ],
    "enunciado": "8. Assinale a alternativa que reescreve a passagem – *... e se entretém os leitores com este fato minúsculo é porque dele se pode extrair algum ensino...* – observando a conjugação verbal e a colocação de pronomes de acordo com a norma-padrão.",
    "alternativas": [
      {
        "id": "A",
        "text": "... e se entretia os leitores com este fato minúsculo era porque dele podia extrair-se algum ensino..."
      },
      {
        "id": "B",
        "text": "... e se entreteu os leitores com este fato minúsculo foi porque dele pudesse se extrair algum ensino..."
      },
      {
        "id": "C",
        "text": "... e caso entretesse os leitores com este fato minúsculo era porque dele poderia se extrair algum ensino..."
      },
      {
        "id": "D",
        "text": "... e se entretinha os leitores com este fato minúsculo será porque dele poderia-se extrair algum ensino..."
      },
      {
        "id": "E",
        "text": "... e se entretivesse os leitores com este fato minúsculo seria porque dele se poderia extrair algum ensino..."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 8 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-09",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Semântica",
      "Sentido Próprio e Figurado",
      "Denotação e Conotação"
    ],
    "enunciado": "9. O trecho do texto em que o narrador empregou somente expressões em sentido próprio está na alternativa:",
    "alternativas": [
      {
        "id": "A",
        "text": "É o que há de melhor a fazer, se não podemos pintar de novo o Brasil."
      },
      {
        "id": "B",
        "text": "Se cada um caiasse seu barraco, que brinco não seria este país."
      },
      {
        "id": "C",
        "text": "Notei que a melancolia natural se agravava nos últimos quinze anos..."
      },
      {
        "id": "D",
        "text": "... injeções e comprimidos de felicidade não adiantavam."
      },
      {
        "id": "E",
        "text": "... e portas e janelas noturnas também se alastravam pela vida acima..."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 9 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-10",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Língua Portuguesa",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Regência Verbal",
      "Regência Nominal",
      "Crase"
    ],
    "enunciado": "10. Considere a passagem:\n\n**Alegramos** nossa área particular, **instaurando** cores tônicas ou repousantes, e **pondo em moda a** limpeza.\n\nA substituição das expressões destacadas mostra regência e emprego do sinal de crase de acordo com a norma padrão, respectivamente, na alternativa:",
    "alternativas": [
      {
        "id": "A",
        "text": "Avivamos à; dando preferência por; destacando à."
      },
      {
        "id": "B",
        "text": "Tornamos alegre à; estipulando por; dando realce à."
      },
      {
        "id": "C",
        "text": "Fazemos viçosa à; aplicando em; assumindo à."
      },
      {
        "id": "D",
        "text": "Damos viço à; optando por; dando destaque à."
      },
      {
        "id": "E",
        "text": "Conferimos vida à; usando de; adotando à."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 10 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-11",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Raciocínio Lógico",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Equivalências Lógicas",
      "Lógica Proposicional"
    ],
    "enunciado": "11. Considere a afirmação: *Se Adélia vence a eleição, então Gilmar continua membro da comissão.* Do ponto de vista lógico, uma afirmação equivalente é:",
    "alternativas": [
      {
        "id": "A",
        "text": "Gilmar continua membro da comissão e Adélia vence a eleição."
      },
      {
        "id": "B",
        "text": "Adélia não vence a eleição ou Gilmar continua membro da comissão."
      },
      {
        "id": "C",
        "text": "Se Gilmar continua membro da comissão, então Adélia vence a eleição."
      },
      {
        "id": "D",
        "text": "Ou Gilmar continua membro da comissão ou Adélia vence a eleição."
      },
      {
        "id": "E",
        "text": "Se Adélia não vence a eleição, então Gilmar não continua membro da comissão."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 11 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-12",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Raciocínio Lógico",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Teoria dos Conjuntos",
      "Diagramas de Venn"
    ],
    "enunciado": "12. O diagrama a seguir mostra o número de elementos pertencentes aos conjuntos, inclusive discriminando a quantidade de elementos nas intersecções.\n\nConsidere como X o número que corresponde ao total de elementos do conjunto A que também pertençam ao conjunto D, mas que não pertençam ao conjunto B. Considere como Y o número que corresponde ao total de todos os elementos do conjunto B que não pertençam ao conjunto C. A diferença entre Y e X é igual a",
    "alternativas": [
      {
        "id": "A",
        "text": "12."
      },
      {
        "id": "B",
        "text": "14."
      },
      {
        "id": "C",
        "text": "15."
      },
      {
        "id": "D",
        "text": "18."
      },
      {
        "id": "E",
        "text": "19."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 12 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-13",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Raciocínio Lógico",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Estruturas Lógicas",
      "Argumentação Lógica"
    ],
    "enunciado": "13. Considere verdadeiras as afirmações a seguir.\n\nI. Elias não é policial.\nII. Se Alves é juiz, então Bruno é promotor.\nIII. Se Bruno não é promotor, então Carlos não é oficial de justiça.\nIV. Se Carlos não é oficial de justiça, então Durval não é advogado de defesa.\nV. Durval é advogado de defesa ou Elias é policial.\n\nA partir dessas afirmações, é correto concluir que",
    "alternativas": [
      {
        "id": "A",
        "text": "Durval não é advogado de defesa."
      },
      {
        "id": "B",
        "text": "Carlos não é oficial de justiça."
      },
      {
        "id": "C",
        "text": "Alves não é juiz."
      },
      {
        "id": "D",
        "text": "Bruno é promotor."
      },
      {
        "id": "E",
        "text": "Alves é juiz."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 13 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-14",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Raciocínio Lógico",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lógica Proposicional",
      "Valores Lógicos das Proposições"
    ],
    "enunciado": "14. Considere falsas as proposições a seguir.\n\nI. João não foi à festa ou Cláudio foi trabalhar.\nII. Lucas caiu da escada e João não foi à festa.\nIII. Daniel saiu de casa ou Rafael não foi ao baile.\nIV. Lucas caiu da escada e Daniel saiu de casa.\n\nA partir dessas proposições, existe uma única possibilidade de ser verdadeira a afirmação:",
    "alternativas": [
      {
        "id": "A",
        "text": "Lucas caiu da escada."
      },
      {
        "id": "B",
        "text": "João não foi à festa."
      },
      {
        "id": "C",
        "text": "Daniel saiu de casa."
      },
      {
        "id": "D",
        "text": "Cláudio foi trabalhar."
      },
      {
        "id": "E",
        "text": "Rafael não foi ao baile."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 14 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-15",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Raciocínio Lógico",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sequências e Padrões",
      "Problemas Lógicos com Fichas"
    ],
    "enunciado": "15. Oito fichas estão ordenadas em uma fileira. Na face superior de cada ficha, está impressa uma letra. A sequência ordenada é: A; B; C; D; E; F; G; H. É feita uma modificação de forma que a primeira ficha da fileira perde uma posição e a sequência ordenada torna-se B; A; C; D; E; F; G; H. Uma segunda modificação é feita e a segunda ficha dessa nova ordenação perde duas posições. Em uma terceira modificação, a terceira ficha desta nova ordenação perde três posições e, em seguida, a quarta modificação é feita e a quarta ficha da última ordenação perde quatro posições. Após essas quatro modificações, a ordenação das oito fichas é",
    "alternativas": [
      {
        "id": "A",
        "text": "B; A; C; F; D; G; H; E."
      },
      {
        "id": "B",
        "text": "B; C; F; A; G; D; H; E."
      },
      {
        "id": "C",
        "text": "B; C; A; F; D; G; H; E."
      },
      {
        "id": "D",
        "text": "B; F; A; D; C; G; E; H."
      },
      {
        "id": "E",
        "text": "B; A; C; F; D; H; E; G."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 15 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-16",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sequências Numéricas",
      "Progressão Aritmética"
    ],
    "enunciado": "16. A sequência a seguir possui 23 termos assim ordenados:\n\n(401; 383; 365; 347; 329; ... ; 5)\n\nA posição do termo dessa sequência cujo valor é o mais próximo da diferença entre os valores dos 9º e 19º termos é igual a",
    "alternativas": [
      {
        "id": "A",
        "text": "10ª."
      },
      {
        "id": "B",
        "text": "11ª."
      },
      {
        "id": "C",
        "text": "12ª."
      },
      {
        "id": "D",
        "text": "13ª."
      },
      {
        "id": "E",
        "text": "14ª."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 16 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-17",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sequências Figurais",
      "Raciocínio Sequencial"
    ],
    "enunciado": "17. Observe a sequência figural, que é ilimitada, ordenada e seu padrão de formação permanece constante.\n\n*(Sequência de figuras com octógonos estrelados contendo símbolos de sol e raio ao redor)*\n\nA primeira figura mostra o sol e raio defronte a uma mesma ponta da estrela. Em seguida o sol e o raio mudam de posição, mas sempre defronte a alguma ponta da estrela. Quando novamente ocorrer o fato de o sol e o raio estarem defronte a uma mesma ponta da estrela, a figura será",
    "alternativas": [
      {
        "id": "A",
        "text": "[Figura com o sol e o raio posicionados na ponta inferior direita da estrela]"
      },
      {
        "id": "B",
        "text": "[Figura com o sol e o raio posicionados na ponta superior esquerda da estrela]"
      },
      {
        "id": "C",
        "text": "[Figura com o sol e o raio posicionados na ponta superior direita da estrela]"
      },
      {
        "id": "D",
        "text": "[Figura com o sol e o raio posicionados na ponta inferior esquerda da estrela]"
      },
      {
        "id": "E",
        "text": "[Figura com o sol e o raio posicionados na ponta leste/direita da estrela]"
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 17 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-18",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lógica de Proposições",
      "Estruturas Lógicas"
    ],
    "enunciado": "18. Considere verdadeiras as afirmações.\n\nI. Se Marcos é pedreiro, então Juca não é mecânico.\nII. Juca é policial e mecânico.\nIII. Clóvis é eletricista ou oficial de justiça.\nIV. Ou Marta é costureira ou Marta é escrivã.\nV. Se Marcos não é pedreiro, então Clóvis é apenas oficial de justiça.\n\nNessa situação, o número máximo de funções explicitamente exercidas por todas essas pessoas é igual a",
    "alternativas": [
      {
        "id": "A",
        "text": "7."
      },
      {
        "id": "B",
        "text": "6."
      },
      {
        "id": "C",
        "text": "5."
      },
      {
        "id": "D",
        "text": "4."
      },
      {
        "id": "E",
        "text": "3."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 18 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-19",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Diagramas Lógicos",
      "Quantificadores"
    ],
    "enunciado": "19. Sabe-se que alguns programadores são analistas de sistemas. Sabe-se também que todos os programadores são digitadores. A partir dessas informações, é correto concluir que",
    "alternativas": [
      {
        "id": "A",
        "text": "todos os digitadores são analistas de sistemas."
      },
      {
        "id": "B",
        "text": "nenhum digitador é analista de sistemas."
      },
      {
        "id": "C",
        "text": "todos os analistas de sistemas são digitadores."
      },
      {
        "id": "D",
        "text": "nenhum analista de sistemas é digitador."
      },
      {
        "id": "E",
        "text": "alguns analistas de sistemas são digitadores."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 19 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-20",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Raciocínio Lógico e Matemático",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lógica de Proposições",
      "Equivalências e Negações Lógicas"
    ],
    "enunciado": "20. Considere a afirmação: *Estudei muito e passei no concurso, ou minha preguiça foi maior.* Uma afirmação que corresponde à negação lógica da afirmação anterior é",
    "alternativas": [
      {
        "id": "A",
        "text": "Não estudei muito ou não passei no concurso, e minha preguiça não foi maior."
      },
      {
        "id": "B",
        "text": "Se não estudei muito então minha preguiça foi maior e não passei no concurso."
      },
      {
        "id": "C",
        "text": "Minha preguiça foi maior e não passei no concurso, e não estudei muito."
      },
      {
        "id": "D",
        "text": "Não estudei muito e não passei no concurso e minha preguiça foi maior."
      },
      {
        "id": "E",
        "text": "Estudei muito e não passei no concurso e minha preguiça foi maior."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 20 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-21",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Matemática Financeira",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Juros Simples",
      "Juros Compostos",
      "Taxas Equivalentes"
    ],
    "enunciado": "21. Um capital é aplicado a uma taxa de juros simples de 9% ao semestre, por 2 semestres. A taxa semestral de juros compostos equivalente está entre",
    "alternativas": [
      {
        "id": "A",
        "text": "8% e 9%"
      },
      {
        "id": "B",
        "text": "7% e 8%"
      },
      {
        "id": "C",
        "text": "6% e 7%"
      },
      {
        "id": "D",
        "text": "5% e 6%"
      },
      {
        "id": "E",
        "text": "4% e 5%"
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 21 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-22",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Matemática Financeira",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Taxa Nominal e Taxa Efetiva",
      "Capitalização Composta"
    ],
    "enunciado": "22. Um empreiteiro fez um empréstimo a uma taxa nominal de 18% ao ano, com capitalização mensal. A taxa anual efetiva que ele pagará de juros, desconsideradas quaisquer outras taxas, será de, aproximadamente,\n\n**Dado:** Caso julgue necessário, utilize os valores a seguir.\n1,014⁶ = 1,087\n1,015⁶ = 1,093\n1,016⁶ = 1,100\n1,017⁶ = 1,106\n1,018⁶ = 1,113",
    "alternativas": [
      {
        "id": "A",
        "text": "18,2%"
      },
      {
        "id": "B",
        "text": "19,5%"
      },
      {
        "id": "C",
        "text": "21,0%"
      },
      {
        "id": "D",
        "text": "22,3%"
      },
      {
        "id": "E",
        "text": "23,9%"
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 22 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-23",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Matemática Financeira",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Desconto Simples Racional",
      "Desconto Simples Comercial"
    ],
    "enunciado": "23. Uma pessoa detentora de uma nota promissória com valor nominal de R$ 2.000,00, diante de dificuldades financeiras, decide descontar a nota 4 meses antes do seu vencimento, recebendo por ela o valor atual de R$ 1.000,00.\nAs taxas de desconto simples racional (\"por dentro\") e comercial (\"por fora\") são de, respectivamente,",
    "alternativas": [
      {
        "id": "A",
        "text": "100% e 50%"
      },
      {
        "id": "B",
        "text": "50% e 25%"
      },
      {
        "id": "C",
        "text": "25% e 12,5%"
      },
      {
        "id": "D",
        "text": "12,5% e 6,25%"
      },
      {
        "id": "E",
        "text": "6,25% e 3,125%"
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 23 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-24",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Matemática Financeira",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sistemas de Amortização",
      "Sistema de Amortização Constante (SAC)"
    ],
    "enunciado": "24. Uma pessoa financiou a compra de um terreno de R$ 120.000,00 no Sistema de Amortização Constante em 6 parcelas mensais postecipadas, ou seja, a primeira delas paga um mês após o empréstimo. A taxa de juros é de 1% a.m.\n\nA tabela a seguir mostra alguns valores do fluxo de pagamentos.\n\n| Parcela | Valor da parcela | Amortização | Juros | Saldo devedor |\n| :---: | :---: | :---: | :---: | :---: |\n| 0 | ------- | ------- | ------- | R$ 120.000,00 |\n| 1 | | | R$ 1.200,00 | |\n| 2 | | | | |\n| 3 | | | | |\n| 4 | | | | |\n| 5 | | | | |\n| 6 | | | | ------- |\n\nO montante total de juros que a pessoa terá pagado ao final do empréstimo será de",
    "alternativas": [
      {
        "id": "A",
        "text": "R$ 12.000,00."
      },
      {
        "id": "B",
        "text": "R$ 10.000,00."
      },
      {
        "id": "C",
        "text": "R$ 7.200,00."
      },
      {
        "id": "D",
        "text": "R$ 5.400,00."
      },
      {
        "id": "E",
        "text": "R$ 4.200,00."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 24 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-25",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Matemática Financeira",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Análise de Investimentos",
      "Taxa Interna de Retorno (TIR)",
      "Fluxo de Caixa"
    ],
    "enunciado": "25. A tabela a seguir exibe o fluxo de caixa nos 3 primeiros meses de um investimento.\n\n| Mês | Fluxo de caixa |\n| :---: | :---: |\n| 0 | –2.300 |\n| 1 | |\n| 2 | 1.210 |\n| 3 | 1.331 |\n\nSabendo-se que a taxa interna de retorno é de 10%, o valor referente ao mês 1 é de",
    "alternativas": [
      {
        "id": "A",
        "text": "R$ 1.100,00."
      },
      {
        "id": "B",
        "text": "R$ 1.000,00."
      },
      {
        "id": "C",
        "text": "R$ 500,00."
      },
      {
        "id": "D",
        "text": "R$ 330,00."
      },
      {
        "id": "E",
        "text": "R$ 120,00."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 25 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-26",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Finanças Públicas",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Receita Pública",
      "Classificação das Receitas Públicas"
    ],
    "enunciado": "26. Nos últimos anos, a União tem recebido dividendos das empresas que controla para tentar atingir a meta de superávit primário. Esses dividendos são receitas",
    "alternativas": [
      {
        "id": "A",
        "text": "extraorçamentárias."
      },
      {
        "id": "B",
        "text": "derivadas."
      },
      {
        "id": "C",
        "text": "de capital."
      },
      {
        "id": "D",
        "text": "vinculadas."
      },
      {
        "id": "E",
        "text": "originárias."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 26 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-27",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Finanças Públicas",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sistema Tributário Nacional",
      "Princípios Tributários"
    ],
    "enunciado": "27. Em relação aos tributos e às contribuições para a seguridade social, é correto afirmar que",
    "alternativas": [
      {
        "id": "A",
        "text": "a lei que majorar alíquotas do imposto sobre a renda começa a produzir efeitos na data de sua publicação."
      },
      {
        "id": "B",
        "text": "a lei que instituir modificações nas alíquotas do imposto de importação deve obedecer ao princípio constitucional da anterioridade."
      },
      {
        "id": "C",
        "text": "somente a União pode instituir novos tributos não previstos na Constituição Federal por meio de lei complementar, os quais devem obedecer obrigatoriamente ao princípio da não cumulatividade."
      },
      {
        "id": "D",
        "text": "as contribuições de melhoria têm o mesmo fato gerador que as taxas, com a diferença de que todos os contribuintes pagam o mesmo valor."
      },
      {
        "id": "E",
        "text": "a União, desde que justificado o interesse público, pode instituir isenções nos impostos de competência dos Estados e dos Municípios."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 27 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-28",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Finanças Públicas",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Tributação",
      "Progressividade Tributária"
    ],
    "enunciado": "28. Um imposto é progressivo quando",
    "alternativas": [
      {
        "id": "A",
        "text": "onera de forma uniforme todos os contribuintes, independentemente de seu nível de renda."
      },
      {
        "id": "B",
        "text": "estabelece alíquotas fixas sobre o consumo de bens e serviços."
      },
      {
        "id": "C",
        "text": "incide com mais intensidade sobre os contribuintes de renda mais baixa."
      },
      {
        "id": "D",
        "text": "os contribuintes de rendas mais elevadas pagam imposto numa proporção maior de sua renda que aqueles de rendas mais baixas."
      },
      {
        "id": "E",
        "text": "sua arrecadação aumenta na mesma proporção que a renda dos contribuintes."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 28 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-29",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Finanças Públicas",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Incidência Tributária",
      "Elasticidade da Oferta e da Demanda"
    ],
    "enunciado": "29. Em relação aos impostos indiretos sobre vendas nos mercados em concorrência perfeita, é correto afirmar que",
    "alternativas": [
      {
        "id": "A",
        "text": "o produtor sempre consegue repassar o ônus do aumento da alíquota do tributo integralmente ao consumidor."
      },
      {
        "id": "B",
        "text": "se, em módulo, a elasticidade-preço da oferta ao preço vigente no mercado for menor que a da demanda, o ônus decorrente de um aumento na alíquota do imposto recairá mais sobre os produtores do que sobre os consumidores."
      },
      {
        "id": "C",
        "text": "se a curva de demanda for infinitamente elástica, o ônus da instituição de um imposto sobre vendas recairá integralmente sobre os consumidores."
      },
      {
        "id": "D",
        "text": "a instituição do imposto não afetará o preço e a quantidade produzida nesse mercado se a curva de oferta for infinitamente elástica."
      },
      {
        "id": "E",
        "text": "a quantidade transacionada no mercado após a instituição do imposto será tanto menor quanto menos elástica for a curva de demanda dos consumidores."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 29 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-30",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Finanças Públicas",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Necessidade de Financiamento do Setor Público",
      "Déficit Nominal e Operacional"
    ],
    "enunciado": "30. A diferença entre os conceitos de déficit público nominal e operacional é que o primeiro",
    "alternativas": [
      {
        "id": "A",
        "text": "é obtido incluindo-se os gastos com os juros nominais cobrados sobre as dívidas interna e externa, enquanto no segundo somente são incluídos os juros reais."
      },
      {
        "id": "B",
        "text": "representa a diferença entre as receitas e despesas correntes de todas as esferas de Governo, enquanto no segundo é representada a diferença entre as receitas e despesas de capital."
      },
      {
        "id": "C",
        "text": "representa a diferença entre as receitas e despesas financeiras dos entes públicos, enquanto o segundo representa a diferença entre as receitas e despesas não financeiras."
      },
      {
        "id": "D",
        "text": "corresponde ao aumento da dívida bruta do setor público, enquanto o segundo corresponde ao aumento da dívida líquida."
      },
      {
        "id": "E",
        "text": "não inclui os investimentos realizados pelos entes públicos, enquanto o segundo inclui."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 30 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-31",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Civil",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "LINDB",
      "Vigência e Eficácia da Lei",
      "Repristinação"
    ],
    "enunciado": "31. A repristinação consiste",
    "alternativas": [
      {
        "id": "A",
        "text": "no lapso temporal entre a promulgação da lei e sua vigência, não podendo ser inferior a 45 (quarenta e cinco) dias."
      },
      {
        "id": "B",
        "text": "na supressão de lei ou dispositivo legal, em razão da declaração de inconstitucionalidade, por controle concentrado."
      },
      {
        "id": "C",
        "text": "na revogação tácita de lei, em virtude de lei posterior com ela incompatível."
      },
      {
        "id": "D",
        "text": "no suprimento de omissão da lei pela aplicação da analogia, dos costumes e dos princípios gerais de direito."
      },
      {
        "id": "E",
        "text": "na restauração da lei revogada por ter a lei revogadora perdido sua vigência, sendo admitida apenas quando há expressa disposição legal."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 31 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-32",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Civil",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Pessoas Jurídicas",
      "Desconsideração da Personalidade Jurídica"
    ],
    "enunciado": "32. Assinale a alternativa correta acerca da teoria da desconsideração da personalidade jurídica, no âmbito das relações cíveis reguladas pelo Código Civil de 2002.",
    "alternativas": [
      {
        "id": "A",
        "text": "O requerimento da desconsideração da personalidade jurídica é ato privativo dos membros do Ministério Público."
      },
      {
        "id": "B",
        "text": "Pode ser requerida sempre que a pessoa jurídica não possuir recursos para saldar as dívidas perante seus credores."
      },
      {
        "id": "C",
        "text": "A teoria pode ser aplicada com o objetivo de atingir patrimônio da pessoa jurídica, por obrigações contraídas em nome dos sócios."
      },
      {
        "id": "D",
        "text": "A aplicação da teoria é limitada aos sócios que estão no quadro societário por mais de 2 (dois) anos."
      },
      {
        "id": "E",
        "text": "O juiz poderá aplicar a desconsideração da personalidade jurídica de ofício, em decisão fundamentada, quando vislumbrar abuso da personalidade jurídica."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 32 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-33",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Civil",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Prescrição e Decadência",
      "Causas que impedem, suspendem ou interrompem a prescrição"
    ],
    "enunciado": "33. Acerca do instituto da prescrição, assinale a alternativa que apresenta corretamente as consequências da suspensão e da interrupção no cômputo do prazo prescricional.",
    "alternativas": [
      {
        "id": "A",
        "text": "Tanto nos casos de suspensão como nos casos de interrupção, computa-se integralmente o prazo transcorrido antes da causa suspensiva ou interruptiva, distinguindo-se os institutos pela natureza do evento que gera a suspensão ou a interrupção."
      },
      {
        "id": "B",
        "text": "Em caso de suspensão, computa-se integralmente o prazo transcorrido antes da causa suspensiva; em caso de interrupção, reinicia-se integralmente o cômputo do prazo, após o término da causa interruptiva."
      },
      {
        "id": "C",
        "text": "Em caso de suspensão, reinicia-se integralmente o cômputo do prazo, após o término da causa suspensiva; em caso de interrupção, computa-se integralmente o prazo transcorrido antes da causa interruptiva."
      },
      {
        "id": "D",
        "text": "Tanto nos casos de suspensão como nos casos de interrupção, reinicia-se integralmente o cômputo do prazo, após a cessação da causa suspensiva ou interruptiva, distinguindo-se os institutos pela natureza do evento que gera a suspensão ou a interrupção."
      },
      {
        "id": "E",
        "text": "Em caso de suspensão, computa-se o prazo transcorrido antes da causa suspensiva, até o limite de 2 (dois) anos; em caso de interrupção, reinicia-se integralmente o cômputo do prazo, após o término da causa interruptiva."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 33 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-34",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Civil",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Direitos Reais",
      "Propriedade Fiduciária"
    ],
    "enunciado": "34. Assinale a alternativa correta acerca do instituto da propriedade fiduciária.",
    "alternativas": [
      {
        "id": "A",
        "text": "A constituição da propriedade fiduciária independe de registro do contrato no órgão competente."
      },
      {
        "id": "B",
        "text": "Em caso de inadimplemento pelo devedor, poderá o credor, em regra, optar pela adjudicação da coisa, caso não prefira aliená-la."
      },
      {
        "id": "C",
        "text": "O regime da alienação fiduciária é aplicável aos móveis, sendo vedada sua utilização para bens imóveis."
      },
      {
        "id": "D",
        "text": "Com a constituição da propriedade fiduciária, ocorre o desdobramento da posse, atribuindo-se ao devedor a posse direta e ao credor a posse indireta."
      },
      {
        "id": "E",
        "text": "Em caso de alienação do bem por inadimplemento do devedor, quando o produto da venda não for suficiente para quitação da dívida, o devedor ficará exonerado do excedente."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 34 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-42",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Tributário",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Princípios Tributários",
      "Capacidade Contributiva"
    ],
    "enunciado": "42. “Sempre que possível, os impostos terão caráter pessoal e serão graduados segundo a capacidade econômica do contribuinte, facultado à administração tributária, especialmente para conferir efetividade a esses objetivos, identificar, respeitados os direitos individuais e nos termos da lei, o patrimônio, os rendimentos e as atividades econômicas do contribuinte”. Referida disposição constitucional reflete o princípio da",
    "alternativas": [
      {
        "id": "A",
        "text": "isonomia formal."
      },
      {
        "id": "B",
        "text": "capacidade contributiva."
      },
      {
        "id": "C",
        "text": "pessoalidade."
      },
      {
        "id": "D",
        "text": "uniformidade jurídica da tributação."
      },
      {
        "id": "E",
        "text": "generalidade."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 42 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-43",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Tributário",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Simples Nacional",
      "Lei Complementar nº 123/2006"
    ],
    "enunciado": "43. O tratamento diferenciado e favorecido a ser dispensado às microempresas e empresas de pequeno porte de que trata a LC nº 123/06 é gerido pelas instâncias que especifica. Dentre elas, a que tem por finalidade orientar e assessorar a formulação e coordenação da política nacional de desenvolvimento das microempresas e empresas de pequeno porte, bem como acompanhar e avaliar a sua implantação, sob a presidência e coordenação da Secretaria da Micro e Pequena Empresa da Presidência da República, denomina-se",
    "alternativas": [
      {
        "id": "A",
        "text": "Fórum Permanente das Microempresas e Empresas de Pequeno Porte."
      },
      {
        "id": "B",
        "text": "Fórum Gestor das Micro e Pequenas empresas."
      },
      {
        "id": "C",
        "text": "Comitê Gestor do Simples Nacional."
      },
      {
        "id": "D",
        "text": "Comitê da Gestão da Rede Nacional para Simplificação do Registro e da Legalização de Empresas e Negócios."
      },
      {
        "id": "E",
        "text": "Comitê Gerenciador das Atividades das Microempresas e Empresas de Pequeno Porte."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 43 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-44",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Tributário",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Repartição das Receitas Tributárias",
      "Fundo de Participação dos Municípios (FPM)"
    ],
    "enunciado": "44. Do produto da arrecadação dos impostos sobre renda e proventos de qualquer natureza e sobre produtos industrializados, a União entregará ao Fundo de Participação dos Municípios o percentual de",
    "alternativas": [
      {
        "id": "A",
        "text": "30%"
      },
      {
        "id": "B",
        "text": "27,5%"
      },
      {
        "id": "C",
        "text": "25 %"
      },
      {
        "id": "D",
        "text": "22,5%"
      },
      {
        "id": "E",
        "text": "21%"
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 44 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-45",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Constitucional",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Controle de Constitucionalidade",
      "Ações Constitucionais"
    ],
    "enunciado": "45. A omissão inconstitucional normativa pode ser objeto de controle por meio",
    "alternativas": [
      {
        "id": "A",
        "text": "da arguição de descumprimento de preceito fundamental."
      },
      {
        "id": "B",
        "text": "da reclamação constitucional indicando a omissão legislativa."
      },
      {
        "id": "C",
        "text": "do mandado de injunção."
      },
      {
        "id": "D",
        "text": "da ação declaratória de constitucionalidade."
      },
      {
        "id": "E",
        "text": "da representação de inconstitucionalidade em relação a atos normativos anteriores à Constituição."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 45 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-46",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Constitucional",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Sistema Tributário Nacional",
      "Competência Tributária Municipal"
    ],
    "enunciado": "46. Compete aos Municípios instituir impostos sobre",
    "alternativas": [
      {
        "id": "A",
        "text": "serviços de transporte intermunicipal e de comunicação."
      },
      {
        "id": "B",
        "text": "propriedade territorial rural."
      },
      {
        "id": "C",
        "text": "transmissão causa mortis e doação, de quaisquer bens ou direitos."
      },
      {
        "id": "D",
        "text": "transmissão inter vivos, a qualquer título, por ato oneroso, de bens imóveis."
      },
      {
        "id": "E",
        "text": "propriedade de veículos automotores, observando as alíquotas estabelecidas pelos Estados."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 46 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-47",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Constitucional",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Organização Político-Administrativa",
      "Repartição de Competências"
    ],
    "enunciado": "47. No que se refere à repartição das competências prevista no texto constitucional, é correto afirmar que",
    "alternativas": [
      {
        "id": "A",
        "text": "a competência da União para legislar sobre normas gerais exclui a competência suplementar dos Estados."
      },
      {
        "id": "B",
        "text": "inexistindo lei federal sobre normas gerais, os Estados exercerão a competência legislativa plena, para atender a suas peculiaridades."
      },
      {
        "id": "C",
        "text": "é reservada aos Municípios a competência para legislar sobre desapropriação."
      },
      {
        "id": "D",
        "text": "a superveniência de lei federal sobre normas gerais não suspende a eficácia da lei estadual, ainda no que lhe for contrário."
      },
      {
        "id": "E",
        "text": "inexistindo lei federal sobre normas gerais, compete exclusivamente aos Estados o ingresso de mandado de injunção."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 47 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-48",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Constitucional",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Fiscalização Contábil, Financeira e Orçamentária",
      "Controle dos Municípios"
    ],
    "enunciado": "48. No que tange à fiscalização e controle dos Municípios, nos termos da Constituição Federal, é correto afirmar que o parecer prévio, emitido pelo órgão competente sobre as contas que o Prefeito deve anualmente prestar,",
    "alternativas": [
      {
        "id": "A",
        "text": "só deixará de prevalecer por decisão da maioria absoluta dos membros da Câmara Municipal."
      },
      {
        "id": "B",
        "text": "só deixará de prevalecer por decisão judicial referente à nulidade procedimental."
      },
      {
        "id": "C",
        "text": "só deixará de prevalecer por decisão da maioria relativa dos membros da Câmara Municipal."
      },
      {
        "id": "D",
        "text": "só deixará de prevalecer por decisão de dois terços dos membros da Câmara Municipal."
      },
      {
        "id": "E",
        "text": "só deixará de prevalecer se não ficarem à disposição do contribuinte pelo prazo de 90 (noventa dias) para exame e apreciação, o qual poderá questionar a legitimidade mediante pedido de revisão das contas."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 48 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-49",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Poderes Administrativos",
      "Abuso de Poder",
      "Excesso de Poder",
      "Desvio de Finalidade"
    ],
    "enunciado": "49. Assinale a alternativa que corretamente exemplifica uma situação em que se encontre demonstrado o instituto do abuso de poder.",
    "alternativas": [
      {
        "id": "A",
        "text": "O Prefeito Municipal que não permite que todos os munícipes sejam atendidos no hospital municipal de urgências, alegando restrições orçamentárias e aplicação da teoria da reserva do possível, não incorre em abuso de poder."
      },
      {
        "id": "B",
        "text": "O Auditor Fiscal Tributário Municipal que aplica multa por infração de trânsito a quem estaciona em local proibido incorre em abuso de poder por atuar fora dos limites de sua competência."
      },
      {
        "id": "C",
        "text": "O Prefeito Municipal que desapropria bem imóvel pertencente a desafeto político, por interesse pessoal, mas que nele instala unidade básica de saúde, não pratica abuso de poder por desvio de finalidade."
      },
      {
        "id": "D",
        "text": "O Guarda Municipal que não permite a entrada de pessoa estranha à Administração em prédio público municipal não destinado a atendimento ao público pratica ato caracterizável como abuso de poder."
      },
      {
        "id": "E",
        "text": "O Auditor Fiscal Tributário Municipal que decide não autuar empresa de pequeno porte que deixou de recolher quantia ínfima de tributo municipal, mas que emprega vários funcionários, não pratica abuso de poder."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 49 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-50",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Poderes Administrativos",
      "Poder de Polícia",
      "Poder Disciplinar",
      "Poder Regulamentar",
      "Poder Hierárquico"
    ],
    "enunciado": "50. Assinale a alternativa que corretamente trata dos poderes administrativos.",
    "alternativas": [
      {
        "id": "A",
        "text": "Inexiste qualquer vedação constitucional para que pessoas administrativas de direito privado possam exercer o poder de polícia em sua modalidade fiscalizatória."
      },
      {
        "id": "B",
        "text": "Poder vinculado é a prerrogativa concedida aos agentes administrativos de elegerem, entre várias condutas possíveis, a que traduz maior conveniência e oportunidade para o interesse público."
      },
      {
        "id": "C",
        "text": "O poder regulamentar é subjacente à lei e pressupõe a existência desta, sendo, portanto, atos formalizadores aptos a criar direitos e obrigações primárias ou secundárias."
      },
      {
        "id": "D",
        "text": "Poder disciplinar é o que cabe à Administração Pública para apurar infrações e aplicar penalidades aos servidores públicos, que abrange as sanções impostas a particulares, mesmo que não sujeitos à disciplina interna da Administração."
      },
      {
        "id": "E",
        "text": "Nos Poderes Judiciário e Executivo não existe hierarquia no sentido de relação de coordenação e subordinação, no que diz respeito às suas funções institucionais."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 50 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-51",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Licitações e Contratos Administrativos",
      "Autotutela",
      "Anulação e Revogação dos Atos Administrativos"
    ],
    "enunciado": "51. Agente público municipal verifica uma irregularidade em um processo licitatório promovido por órgão da Administração Pública Municipal, que causa a nulidade do certame. Em razão disso, deve ele",
    "alternativas": [
      {
        "id": "A",
        "text": "revogar o certame, pois deve prevalecer o interesse público de que seja realizado um certame licitatório sem quaisquer vícios de legalidade."
      },
      {
        "id": "B",
        "text": "representar à autoridade que lhe é hierarquicamente superior, para que esta solicite a anulação do ato ao Poder Judiciário, já que somente este pode invalidar tais atos."
      },
      {
        "id": "C",
        "text": "comunicar o fato aos licitantes, que são os únicos legitimados a provocar a Administração, que poderá, então, declarar a nulidade."
      },
      {
        "id": "D",
        "text": "instar a autoridade competente a promover a anulação do certame, já que a Administração possui a prerrogativa de autotutela, que lhe permite rever os atos ex officio."
      },
      {
        "id": "E",
        "text": "instar a autoridade competente a promover a revogação do certame, pois a prerrogativa da autotutela permite a revogação, e não a anulação, dos atos administrativos."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 51 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-52",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Administrativo",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Controle da Administração Pública",
      "Controle Externo",
      "Tribunal de Contas"
    ],
    "enunciado": "52. O Tribunal de Contas do Estado de São Paulo verifica que, em determinada unidade da Prefeitura Municipal de São José do Rio Preto, foi realizada uma despesa ilegal. Neste caso, considerando os limites do controle externo previstos na Constituição Federal, pode o Tribunal de Contas",
    "alternativas": [
      {
        "id": "A",
        "text": "assinar prazo para que o órgão adote as providências de invalidação do ato ilegal."
      },
      {
        "id": "B",
        "text": "ressalvar a despesa ilegal na prestação de contas anual do Prefeito."
      },
      {
        "id": "C",
        "text": "representar ao Poder Executivo Municipal, para que anule a despesa."
      },
      {
        "id": "D",
        "text": "comunicar o fato à Câmara Municipal, que poderá invalidar a despesa."
      },
      {
        "id": "E",
        "text": "aplicar ao responsável multa proporcional ao dano causado ao erário."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 52 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-53",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Legislação Tributária Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "ISSQN",
      "Incidência Tributária",
      "Lei Complementar Municipal nº 178/2003"
    ],
    "enunciado": "53. A Lei Complementar nº 178, de 29.12.2003 (e suas alterações posteriores), regula a instituição do Imposto Sobre Serviço de Qualquer Natureza (ISSQN) no município de São José do Rio Preto. Sobre a incidência do ISSQN, é correto afirmar que o imposto incide sobre",
    "alternativas": [
      {
        "id": "A",
        "text": "os serviços constantes da Tabela anexa ao referido ato legal, não compreendidos na competência da União e dos Estados, somente quando esses sejam a atividade preponderante do estabelecimento prestador."
      },
      {
        "id": "B",
        "text": "os livros, jornais ou periódicos e/ou o papel destinado à sua impressão."
      },
      {
        "id": "C",
        "text": "a exportação de serviços para o exterior do país."
      },
      {
        "id": "D",
        "text": "os serviços constantes da Tabela anexa ao referido ato legal, não compreendidos na competência da União e dos Estados, provenientes do exterior do País, ou cuja prestação se tenha iniciado no exterior do País, em relação aos tomadores domiciliados no Município."
      },
      {
        "id": "E",
        "text": "os serviços constantes da Tabela anexa ao referido ato legal, não compreendidos na competência da União e dos Estados, a menos que envolva o fornecimento concomitante de mercadorias, caso em que essa incidência não ocorrerá."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 53 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-54",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Legislação Tributária Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "ISSQN",
      "Isenção Tributária",
      "Lei Complementar Municipal nº 178/2003"
    ],
    "enunciado": "54. São isentos do ISSQN no município de São José do Rio Preto, segundo a Lei Complementar nº 178/2003 e suas alterações posteriores:",
    "alternativas": [
      {
        "id": "A",
        "text": "quaisquer prestações de serviços de construção civil."
      },
      {
        "id": "B",
        "text": "os profissionais autônomos, desde que inscritos no Cadastro Municipal Mobiliário, há mais de cinco (5) anos."
      },
      {
        "id": "C",
        "text": "a impressão de jornais, livros e periódicos feita por empresas que respondem pela prestação de serviços gráficos a terceiros."
      },
      {
        "id": "D",
        "text": "os serviços desenvolvidos ou cujo resultado se verifique no Município, ainda que o pagamento seja feito por residente no exterior."
      },
      {
        "id": "E",
        "text": "as apresentações de música popular, concertos, recitais, espetáculos folclóricos e populares, realizadas em caráter temporário e com fins exclusivamente beneficentes."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 54 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-55",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Legislação Tributária Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "ISSQN",
      "Fato Gerador",
      "Responsabilidade Tributária",
      "Lei Complementar Municipal nº 178/2003"
    ],
    "enunciado": "55. A Lei Complementar nº 178/2003 (com suas alterações posteriores) estabelece que",
    "alternativas": [
      {
        "id": "A",
        "text": "são isentas do ISSQN todas as prestações de serviços efetuadas por meio de cooperativas de prestação de serviços, já que essas entidades têm imunidade prevista na Constituição Federal."
      },
      {
        "id": "B",
        "text": "são irrelevantes, para a caracterização do fato gerador do ISSQN, a natureza ou validade jurídica das operações ou dos atos praticados."
      },
      {
        "id": "C",
        "text": "as instituições financeiras e empresas seguradoras não podem ser responsáveis pela retenção do ISSQN, já que o valor intermediado no mercado de títulos e valores mobiliários, bem como os depósitos bancários, não estão no campo de incidência do referido imposto."
      },
      {
        "id": "D",
        "text": "a Empresa Brasileira de Correios e Telégrafos, quando tomar ou intermediar serviços prestados por suas agências franqueadas, não está obrigada a efetuar a retenção do imposto como responsável tributário, em virtude de sua condição de empresa imune ao ISSQN."
      },
      {
        "id": "E",
        "text": "a base de cálculo do ISSQN é o preço do serviço, não sendo autorizada a dedução de descontos concedidos pelo prestador na nota fiscal de serviços (descontos incondicionais)."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 55 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-56",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Legislação Tributária Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "IPTU",
      "Sujeito Passivo",
      "Lei Complementar Municipal nº 96/1998"
    ],
    "enunciado": "56. A Lei Complementar nº 96, de 29 de dezembro de 1998 (com suas alterações posteriores), regula o Imposto Predial e Territorial Urbano (IPTU) do município de São José do Rio Preto. O referido ato legal estabelece que",
    "alternativas": [
      {
        "id": "A",
        "text": "a base de cálculo do IPTU é o valor de mercado do imóvel, comprovado por meio de laudo assinado por três peritos responsáveis."
      },
      {
        "id": "B",
        "text": "o referido imposto deve ser quitado pelo contribuinte nos prazos legais, juntamente com a taxa de incêndio lançada pela administração municipal."
      },
      {
        "id": "C",
        "text": "o contribuinte do imposto é o proprietário, o titular do domínio útil ou o possuidor do bem imóvel, nos termos da legislação tributária e civil vigentes."
      },
      {
        "id": "D",
        "text": "as alíquotas incidentes sobre o imóvel serão iguais, estando o imóvel construído ou não."
      },
      {
        "id": "E",
        "text": "o IPTU incide sobre o imóvel que, localizado dentro da zona urbana ou urbanizável, seja comprovada e precipuamente utilizado em exploração extrativo-vegetal, agrícola, pecuária ou agroindustrial, independentemente de sua área."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 56 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-57",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Tributário e Legislação Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Legislação Municipal de São José do Rio Preto",
      "IPTU",
      "Lei Complementar nº 96/1998"
    ],
    "enunciado": "57. À vista do disposto na Lei Complementar nº 96, de 29 de dezembro de 1998 (com suas alterações posteriores), é correto afirmar que",
    "alternativas": [
      {
        "id": "A",
        "text": "se o imóvel tiver sido objeto de compromisso de venda e compra, devidamente registrado ou averbado no Registro de Imóveis, o lançamento do imposto poderá ser procedido indistintamente, em nome do promitente vendedor ou do compromissário comprador, ou de ambos."
      },
      {
        "id": "B",
        "text": "na hipótese de que o imóvel tenha suas obras concluídas durante o exercício, o imposto será devido somente a partir do exercício subsequente ao da construção."
      },
      {
        "id": "C",
        "text": "o espólio não é pessoalmente responsável pelos débitos de IPTU do “de cujus”, existentes à data da abertura da sucessão."
      },
      {
        "id": "D",
        "text": "o fato gerador do IPTU ocorre mensalmente dentro do ano-calendário respectivo."
      },
      {
        "id": "E",
        "text": "se o imóvel for explorado economicamente, seu proprietário estará dispensado do pagamento do IPTU no caso em que o respectivo resultado financeiro seja nulo."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 57 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-58",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Direito Tributário e Legislação Municipal",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Legislação Municipal de São José do Rio Preto",
      "ITBI",
      "Lei Complementar nº 323/2010"
    ],
    "enunciado": "58. A Lei Complementar nº 323, de 27.10.2010, entre outros assuntos, regula o Imposto sobre Transmissão Inter Vivos de Bens Imóveis e de direitos reais sobre eles (ITBI) no município de São José do Rio Preto. Segundo o referido ato legal,",
    "alternativas": [
      {
        "id": "A",
        "text": "para a finalidade de determinação do valor do imposto, serão abatidas do valor venal quaisquer dívidas que onerem o imóvel transmitido."
      },
      {
        "id": "B",
        "text": "o imposto incide sobre a transmissão de bem imóvel nos casos em que a área for destinada exclusivamente à execução de conjuntos habitacionais e de propriedade de cooperativas habitacionais ligadas a entidades de classe de trabalhadores."
      },
      {
        "id": "C",
        "text": "a dação do imóvel em pagamento não se inclui entre as hipóteses de incidência do imposto."
      },
      {
        "id": "D",
        "text": "o imposto incide sobre a transmissão de quaisquer bens imóveis e de direitos reais sobre eles à alíquota de 10%."
      },
      {
        "id": "E",
        "text": "o imposto incide sobre a transmissão de bens ou direitos incorporados ao patrimônio de pessoas jurídicas em realização de capital quando essas tiverem como atividade preponderante a compra e venda desses bens ou direitos, a sua locação ou arrendamento mercantil."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 58 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-59",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade Geral e Avançada",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Controle de Estoques",
      "Métodos de Avaliação de Estoques",
      "PEPS"
    ],
    "enunciado": "59. A Cia. Petrópolis apresentou a seguinte movimentação no mês de abril de 2014 em relação à mercadoria X, registrada na ficha de estoque respectiva:\n\nSaldo inicial em 01.04.2014: 80 unidades a R$ 500,00 cada uma;\n\nAquisições:\n06.04.2014: 100 unidades a R$ 520,00 cada;\n15.04.2014: 200 unidades a R$ 510,00 cada;\n20.04.2014: 180 unidades a R$ 515,00 cada;\n26.04.2014: 150 unidades a R$ 530,00 cada.\nTotal das aquisições: R$ 326.200,00\n\nAlienações:\n10.04.2014: 150 unidades a R$ 1.000,00 cada;\n18.04.2014: 200 unidades a R$ 1.100,00 cada;\n23.04.2014: 160 unidades a R$ 1.100,00 cada;\n27.04.2014: 180 unidades a R$ 1.200,00 cada.\nTotal das alienações: R$ 762.000,00\n\nA companhia utiliza o método PEPS (primeiro que entra, primeiro que sai) para avaliação de seus estoques. O valor do seu estoque final em 30.04.2014 correspondeu, em R$, a:",
    "alternativas": [
      {
        "id": "A",
        "text": "10.600,00."
      },
      {
        "id": "B",
        "text": "10.400,00."
      },
      {
        "id": "C",
        "text": "10.300,00."
      },
      {
        "id": "D",
        "text": "10.200,00."
      },
      {
        "id": "E",
        "text": "11.400,00."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 59 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-60",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade Geral e Avançada",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Lei nº 11.638/2007 e Lei nº 11.941/2009",
      "Ativo Diferido",
      "Reservas de Reavaliação"
    ],
    "enunciado": "60. Em relação aos saldos existentes de Ativo Diferido e Reservas de Reavaliação em 31.12.2008, as novas normas contábeis introduzidas a partir da vigência das Leis nº 11.638/2007 e nº 11.941/2009 e os pronunciamentos do Comitê de Pronunciamentos Contábeis determinam que",
    "alternativas": [
      {
        "id": "A",
        "text": "as reservas de reavaliação têm, obrigatoriamente, que ser estornadas contra a conta do ativo que foi reavaliado."
      },
      {
        "id": "B",
        "text": "a companhia que tiver reservas de reavaliação deve, obrigatoriamente, baixar essas reservas contra a conta Lucros ou Prejuízos Acumulados."
      },
      {
        "id": "C",
        "text": "apenas as despesas pré-operacionais devem ser classificadas no Ativo Diferido a partir do exercício de 2009."
      },
      {
        "id": "D",
        "text": "a companhia tem o direito de manter os saldos do Ativo Diferido existentes em 31.12.2008 e proceder normalmente à sua amortização."
      },
      {
        "id": "E",
        "text": "os saldos do Ativo Diferido devem ser obrigatoriamente baixados contra a conta Lucros ou Prejuízos Acumulados."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 60 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-61",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade Geral e Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Patrimônio Líquido",
      "Reservas de Capital"
    ],
    "enunciado": "61. É uma reserva de capital:",
    "alternativas": [
      {
        "id": "A",
        "text": "Reserva para pagamento de dividendo obrigatório."
      },
      {
        "id": "B",
        "text": "Reserva legal."
      },
      {
        "id": "C",
        "text": "Reserva de contingências."
      },
      {
        "id": "D",
        "text": "Reserva de ágio na emissão de ações."
      },
      {
        "id": "E",
        "text": "Reserva de reavaliação."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 61 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-62",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade Geral e Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Ativo Imobilizado",
      "Redução ao Valor Recuperável de Ativos (Impairment)"
    ],
    "enunciado": "62. A Cia. Cruzeiro do Norte efetuou o teste de recuperabilidade do valor dos ativos (impairment test) em uma máquina de seu ativo imobilizado, tendo registrado uma perda de valor de R$ 28.000,00. A máquina foi adquirida por R$ 600.000,00. Na ocasião do teste, o percentual de depreciação acumulada da máquina era de 40% do valor depreciável, e a companhia estimou o valor justo da máquina em R$ 325.000,00.\n\nÀ vista do exposto, é correto afirmar que o valor em uso da referida máquina foi estimado pela companhia como correspondente, em R$, a:",
    "alternativas": [
      {
        "id": "A",
        "text": "326.000,00."
      },
      {
        "id": "B",
        "text": "322.000,00."
      },
      {
        "id": "C",
        "text": "332.000,00."
      },
      {
        "id": "D",
        "text": "330.000,00."
      },
      {
        "id": "E",
        "text": "336.000,00."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 62 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-63",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade Geral e Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Método de Equivalência Patrimonial (MEP)",
      "Investimentos em Coligadas e Controladas"
    ],
    "enunciado": "63. A Cia. Franca é controlada pela Cia. Ribeirão Preto, que tem 75% de seu capital social. No final do exercício de 2013, a Cia. Franca registrou um lucro líquido do exercício de R$ 850.000,00 na sua Demonstração de Resultado. A controlada também aumentou seu capital em R$ 100.000,00 no exercício, sendo que a Cia. Ribeirão Preto e todos os acionistas minoritários subscreveram e integralizaram a parte que lhes era correspondente nesse aumento. No mesmo exercício, ao efetuar a avaliação do investimento pela equivalência patrimonial, a controladora registrou um resultado positivo de equivalência patrimonial, em R$, de:",
    "alternativas": [
      {
        "id": "A",
        "text": "712.500,00."
      },
      {
        "id": "B",
        "text": "75.000,00."
      },
      {
        "id": "C",
        "text": "462.500,00."
      },
      {
        "id": "D",
        "text": "562.500,00."
      },
      {
        "id": "E",
        "text": "637.500,00."
      }
    ],
    "gabarito": "C",
    "explicacao": "🎯 Gabarito Oficial: C.\nQuestão 63 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-64",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade Geral e Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Ajuste a Valor Presente (AVP)",
      "Contas a Receber"
    ],
    "enunciado": "64. A Cia. Comercial Amazonas vendeu mercadorias a prazo, em 20 prestações iguais e sucessivas de R$ 1.000,00, a primeira vencendo no mês posterior ao da venda. A companhia usou uma taxa de juros de 1% ao mês para calcular o ajuste a valor presente desse fluxo de caixa. Sabe-se que o ajuste a valor presente dessa alienação correspondeu a R$ 1.950,00. A companhia efetuou corretamente a contabilização dessa transação segundo as normas brasileiras de contabilidade, lançando o ajuste como conta redutora de recebíveis. Pode-se concluir que",
    "alternativas": [
      {
        "id": "A",
        "text": "o Ativo da companhia aumentou R$ 20.000,00."
      },
      {
        "id": "B",
        "text": "a companhia auferiu uma receita de vendas de R$ 18.050,00."
      },
      {
        "id": "C",
        "text": "a conta de Recebíveis foi creditada em R$ 1.950,00."
      },
      {
        "id": "D",
        "text": "a conta de Ajustes a Valor Presente foi debitada em R$ 20.000,00."
      },
      {
        "id": "E",
        "text": "o Passivo da companhia foi aumentado em R$ 1.950,00."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 64 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-65",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade Geral e Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Demonstração dos Fluxos de Caixa (DFC)"
    ],
    "enunciado": "65. Os seguintes dados foram extraídos do Balanço Patrimonial e da Demonstração de Resultado da Cia. Ametista, relativos ao exercício encerrado em 31.12.2013, sendo que as variações foram calculadas em relação aos valores de 31.12.2012:\n\n| Conta / Evento | Valor (R$) |\n| :--- | :--- |\n| Aumento de Contas a Pagar | 100.000,00 |\n| Lucro Líquido do Exercício | 480.000,00 |\n| Aumento de Fornecedores | 20.000,00 |\n| Despesas de Depreciação do Imobilizado | 170.000,00 |\n| Aumento de Recebíveis | 60.000,00 |\n| Diminuição dos Estoques | 50.000,00 |\n| Resultado Negativo da Equivalência Patrimonial | 110.000,00 |\n\nConsiderando-se apenas esses dados, pode-se concluir que o Fluxo de Caixa das atividades operacionais da companhia representou uma entrada de caixa e equivalentes-caixa, em R$, de:",
    "alternativas": [
      {
        "id": "A",
        "text": "870.000,00."
      },
      {
        "id": "B",
        "text": "990.000,00."
      },
      {
        "id": "C",
        "text": "860.000,00."
      },
      {
        "id": "D",
        "text": "800.000,00."
      },
      {
        "id": "E",
        "text": "910.000,00."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 65 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-66",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade Geral e Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Análise das Demonstrações Contábeis",
      "Índices de Liquidez"
    ],
    "enunciado": "66. O índice de liquidez corrente da Cia. Montenegro, referente ao exercício encerrado em 31.12.2013, foi 1,75. O índice de liquidez seca, no mesmo período, foi 1,6. A companhia apresenta no seu ativo circulante as seguintes contas: Caixa e Equivalentes-Caixa, Recebíveis e Estoques. Se o Passivo Circulante foi igual a R$ 2.000.000,00 em 31.12.2013, o valor dos estoques da companhia nessa mesma data equivaleu, em R$, a:",
    "alternativas": [
      {
        "id": "A",
        "text": "420.000,00."
      },
      {
        "id": "B",
        "text": "360.000,00."
      },
      {
        "id": "C",
        "text": "280.000,00."
      },
      {
        "id": "D",
        "text": "345.000,00."
      },
      {
        "id": "E",
        "text": "300.000,00."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 66 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-67",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade de Custos",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Custos de Aquisição",
      "Tributos Recuperáveis"
    ],
    "enunciado": "67. A Cia. Industrial Paranavaí adquiriu 10.000 unidades de uma matéria-prima, pagando R$ 20,00 por unidade e mais o Imposto sobre Produtos Industrializados (IPI), cobrado por fora do preço de venda a uma alíquota de 10%. O fornecedor é uma pessoa jurídica contribuinte do PIS e da COFINS no regime de cumulatividade (0,65% e 3%, respectivamente). Como a operação foi no Estado de São Paulo, incidiu ICMS sobre a operação a uma alíquota de 18%. A adquirente é contribuinte do PIS e COFINS no regime da não cumulatividade (1,65% e 7,6%, respectivamente). Todos os tributos incidentes sobre a operação são recuperáveis para a empresa adquirente. O custo unitário da aquisição desse lote de matéria-prima será registrado na ficha de estoque da Cia. Paranavaí (em R$) por:",
    "alternativas": [
      {
        "id": "A",
        "text": "16,11."
      },
      {
        "id": "B",
        "text": "15,67."
      },
      {
        "id": "C",
        "text": "14,55."
      },
      {
        "id": "D",
        "text": "17,24."
      },
      {
        "id": "E",
        "text": "15,27."
      }
    ],
    "gabarito": "B",
    "explicacao": "🎯 Gabarito Oficial: B.\nQuestão 67 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-68",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade de Custos",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Custo dos Produtos Vendidos (CPV)",
      "Demonstração do Resultado"
    ],
    "enunciado": "68. Foram extraídos os seguintes dados, em R$, da contabilidade da Cia. Industrial Tamoio, relativos ao ano-calendário de 2013:\n\n| Item | Valor (R$) |\n| :--- | :--- |\n| Receita bruta de vendas de produtos industrializados (sem o IPI) | 1.200.000,00 |\n| IPI incidente sobre a venda | 96.000,00 |\n| ICMS, PIS e COFINS incidentes sobre a receita bruta de vendas | 259.800,00 |\n| Custo da produção acabada | 600.000,00 |\n| Estoque final de produtos acabados | 120.650,00 |\n\nO lucro bruto por ela obtido nas operações de venda equivaleu a 50% do custo dos produtos vendidos. O estoque inicial de produtos acabados, nesse exercício, correspondeu, em R$, a:",
    "alternativas": [
      {
        "id": "A",
        "text": "90.650,00."
      },
      {
        "id": "B",
        "text": "146.800,00."
      },
      {
        "id": "C",
        "text": "93.850,00."
      },
      {
        "id": "D",
        "text": "147.450,00."
      },
      {
        "id": "E",
        "text": "112.750,00."
      }
    ],
    "gabarito": "D",
    "explicacao": "🎯 Gabarito Oficial: D.\nQuestão 68 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-69",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade de Custos",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Custeio Variável",
      "Margem de Contribuição"
    ],
    "enunciado": "69. A Cia. Líbano Industrial, fabricante de um único produto X, produziu 150.000 unidades no exercício de início de suas atividades. Durante o período, foram vendidas 120.000 unidades ao preço de R$ 50,00 cada uma. Os custos e as despesas da companhia, no referido exercício, foram:\n\nI. Custos e despesas variáveis, por unidade:\n– Matéria-prima: R$ 12,00\n– Materiais indiretos: R$ 4,00\n– CIF variáveis: R$ 11,00\n– Despesas variáveis: 10% do preço de venda\n\nII. Custos e despesas fixos totais do exercício:\n– Mão-de-Obra da fábrica: R$ 650.000,00\n– Depreciação dos equipamentos industriais: R$ 250.000,00\n– Outros gastos de fabricação: R$ 150.000,00\n– Salários do Pessoal da Administração: R$ 180.000,00\n– Demais Despesas Administrativas do departamento comercial: R$ 120.000,00\n\nConsiderando apenas esses dados, se a companhia utilizasse o sistema de custeio variável, seu lucro líquido no exercício, antes dos tributos sobre o lucro, corresponderia, em R$, a:",
    "alternativas": [
      {
        "id": "A",
        "text": "1.110.000,00."
      },
      {
        "id": "B",
        "text": "860.000,00."
      },
      {
        "id": "C",
        "text": "990.000,00."
      },
      {
        "id": "D",
        "text": "1.050.000,00."
      },
      {
        "id": "E",
        "text": "810.000,00."
      }
    ],
    "gabarito": "E",
    "explicacao": "🎯 Gabarito Oficial: E.\nQuestão 69 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-70",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade de Custos",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Apropriação de Custos",
      "Regime de Competência"
    ],
    "enunciado": "70. Determinado material direto foi adquirido por uma companhia industrial para utilização em seu processo de fabricação. A aquisição foi feita a prazo, mas a companhia, por problemas financeiros, somente pagou o referido material dois meses após o vencimento da duplicata. O custo desse material deve ser computado no custo de produção da companhia no mês de",
    "alternativas": [
      {
        "id": "A",
        "text": "sua requisição pelo departamento de produção da companhia."
      },
      {
        "id": "B",
        "text": "sua aquisição."
      },
      {
        "id": "C",
        "text": "seu pagamento ao fornecedor."
      },
      {
        "id": "D",
        "text": "vencimento da duplicata, apesar de ter sido paga posteriormente."
      },
      {
        "id": "E",
        "text": "venda dos produtos cujo custo de produção integrou."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 70 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-71",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade de Custos",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Produção Conjunta",
      "Produção por Processo",
      "Custeio ABC",
      "Custeio Variável"
    ],
    "enunciado": "71. É correto afirmar que",
    "alternativas": [
      {
        "id": "A",
        "text": "no processo de produção conjunta, o valor das vendas dos subprodutos é mais importante que a dos coprodutos."
      },
      {
        "id": "B",
        "text": "o equivalente de produção é uma forma de atribuição de custos unitários de produção a bens fabricados na sistemática da produção por processo."
      },
      {
        "id": "C",
        "text": "a departamentalização dos custos é um método que deve ser evitado, pois não permite o controle e o rateio de forma mais adequada dos custos indiretos de fabricação."
      },
      {
        "id": "D",
        "text": "o pressuposto do sistema de custeio ABC é o atribuir mais custos indiretos de fabricação aos produtos que são mais representativos no faturamento total da empresa."
      },
      {
        "id": "E",
        "text": "a margem de contribuição unitária, no sistema de custeio variável, consiste na diferença entre o preço do produto e os custos fixos unitários de produção."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 71 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-72",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade de Custos",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Ponto de Equilíbrio",
      "Margem de Contribuição",
      "Análise Custo-Volume-Lucro"
    ],
    "enunciado": "72. Uma companhia produz e vende um único produto, cujos custos e despesas fixas de produção totalizam R$ 900.000,00 mensais. O preço de venda unitário do produto é R$ 200,00, e o custo variável unitário de sua produção, R$ 95,00. As despesas variáveis unitárias representam 15% do preço de venda. Se a companhia produzir 5000 unidades a mais que seu ponto de equilíbrio contábil, o seu lucro líquido corresponderá, em R$, a:",
    "alternativas": [
      {
        "id": "A",
        "text": "325.000,00."
      },
      {
        "id": "B",
        "text": "450.000,00."
      },
      {
        "id": "C",
        "text": "415.000,00."
      },
      {
        "id": "D",
        "text": "375.000,00."
      },
      {
        "id": "E",
        "text": "395.000,00."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 72 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-73",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Risco de Auditoria",
      "Risco Inerente"
    ],
    "enunciado": "73. Em auditoria, o denominado risco inerente",
    "alternativas": [
      {
        "id": "A",
        "text": "resulta de condições, eventos, circunstâncias ou decisões tomadas pela administração que possam afetar adversamente a entidade auditada."
      },
      {
        "id": "B",
        "text": "decorre de condições que indiquem incentivos ou pressões para que a fraude seja perpetrada."
      },
      {
        "id": "C",
        "text": "é a suscetibilidade de um saldo de uma conta ou uma classe de transação apresentar uma distorção relevante no seu valor registrado nas demonstrações contábeis."
      },
      {
        "id": "D",
        "text": "depende da eficácia dos controles internos da entidade, que devem ser examinados pelo auditor por meio de testes adequados."
      },
      {
        "id": "E",
        "text": "não está relacionado com a natureza e a extensão dos procedimentos aplicados pelo auditor nem com o planejamento ineficaz da auditoria."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 73 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-74",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Procedimentos de Auditoria",
      "Testes de Controle"
    ],
    "enunciado": "74. Testes de controle são procedimentos de auditoria que têm por objetivo",
    "alternativas": [
      {
        "id": "A",
        "text": "detectar distorções relevantes no nível de afirmações (declarações da administração da entidade que estão incorporadas nas demonstrações contábeis)."
      },
      {
        "id": "B",
        "text": "produzir evidências de auditoria que sirvam para suportar ou fundamentar a opinião do auditor em relação à adequação das demonstrações contábeis."
      },
      {
        "id": "C",
        "text": "avaliar a existência de erros ou fraudes nos registros contábeis da entidade."
      },
      {
        "id": "D",
        "text": "produzir evidências de que os ativos e passivos da entidade estão mensurados pelos seus valores justos e se estes foram adequadamente estimados pela entidade auditada."
      },
      {
        "id": "E",
        "text": "avaliar a efetividade operacional dos controles internos da entidade na prevenção ou detecção e correção de distorções relevantes no nível de afirmações."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 74 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-75",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Conciliação Bancária",
      "Procedimentos de Auditoria"
    ],
    "enunciado": "75. O saldo devedor da conta analítica Bancos conta Movimento-Banco Ideal S/A, registrado no livro Razão da Cia. Horizonte em 31.12.2013, era de R$ 192.820,00, antes da conciliação bancária a ser efetuada pelo auditor independente. O saldo credor constante do extrato bancário emitido pelo referido banco, na mesma data, correspondia a R$ 193.450,00. Os seguintes fatos contábeis, referentes à matéria, foram levantados pelo auditor:\n\n– Despesas bancárias cobradas pelo banco, no extrato, no valor de R$ 290,00, ainda não contabilizadas na entidade.\n\n– cheques nᵒˢ 198325 a 327, emitidos e contabilizados pela empresa, mas ainda não sacados pelos favorecidos no banco no valor total de R$ 6.190,00;\n\n– cheque nº 352497, emitido pela Cia. Itaporanga a favor da entidade, no valor de R$ 1.750,00, erroneamente debitado na conta corrente da Cia. Guaiuba, cujo estorno foi efetuado pelo banco somente em 04.01.2014;\n\n– duplicata de aceite da Cia. Irmão Maior no valor de R$ 3.520,00, descontada pela companhia no banco, por ele devolvida por falta de pagamento, fato ainda não contabilizado na sociedade.\n\nDe posse dessas informações, o auditor concluiu que o saldo correto, em R$, da referida conta correspondia, em 31.12.2003, a:",
    "alternativas": [
      {
        "id": "A",
        "text": "189.010,00."
      },
      {
        "id": "B",
        "text": "190.370,00."
      },
      {
        "id": "C",
        "text": "188.620,00."
      },
      {
        "id": "D",
        "text": "189.300,00."
      },
      {
        "id": "E",
        "text": "187.260,00."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 75 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-76",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade Geral e Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Auditoria do Ativo Imobilizado",
      "Normas Brasileiras de Contabilidade (NBC TG 27)"
    ],
    "enunciado": "76. Na auditoria do grupo Imobilizado do Ativo Não Circulante, o auditor independente deve observar as normas brasileiras de contabilidade sobre o reconhecimento e mensuração desses ativos. Em relação ao assunto, é correto afirmar que",
    "alternativas": [
      {
        "id": "A",
        "text": "os gastos com o desembaraço aduaneiro na importação de bens do Ativo Imobilizado devem ser registrados pela entidade como despesa do exercício da importação."
      },
      {
        "id": "B",
        "text": "os bens do Ativo Imobilizado objeto de arrendamento mercantil financeiro devem ser contabilizados pelo total das contraprestações a pagar à instituição financeira arrendadora, sem necessidade de ajuste a valor presente, mesmo que de longo prazo."
      },
      {
        "id": "C",
        "text": "os gastos com conserto e manutenção dos ativos que não resultem em aumento de sua vida útil por um prazo superior a um ano devem ser ativados."
      },
      {
        "id": "D",
        "text": "os impostos recuperáveis incidentes sobre a aquisição de ativos imobilizados não devem compor o custo de aquisição do ativo, sendo contabilizados como ativos fiscais diferidos."
      },
      {
        "id": "E",
        "text": "o registro dos encargos de depreciação deve ser efetuado a partir da data da aquisição do ativo imobilizado."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 76 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-77",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade Geral e Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Investimentos em Participações Societárias",
      "Método da Equivalência Patrimonial (MEP)"
    ],
    "enunciado": "77. Ao examinar o subgrupo Investimentos do Ativo Não Circulante da Cia. A, o auditor independente constatou que a entidade tinha a propriedade das seguintes participações societárias:\n\nI. sessenta por cento das ações com direito a voto da Cia. B;\nII. vinte por cento das ações sem direito a voto da Cia. C;\nIII. dez por cento das ações com direito a voto na Cia. D;\nIV. vinte e cinco por cento das ações com direito a voto da Cia. E.\n\nConstatou também que, desconsiderando o investimento em que era controladora, a Cia. A detinha influência significativa apenas na Cia. C e na Cia. E.\n\nAo examinar se tais participações societárias estavam mensuradas corretamente, o auditor verificou que a entidade auditada adotou os procedimentos recomendados pelas normas brasileiras de contabilidade. Portanto, foram avaliadas pelo método da equivalência patrimonial as participações societárias:",
    "alternativas": [
      {
        "id": "A",
        "text": "na companhia B, apenas."
      },
      {
        "id": "B",
        "text": "nas companhias B, C e E, apenas."
      },
      {
        "id": "C",
        "text": "nas companhias D e E, apenas."
      },
      {
        "id": "D",
        "text": "nas companhias B e C, apenas."
      },
      {
        "id": "E",
        "text": "nas companhias C e E, apenas."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 77 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-78",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade Geral e Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Eventos Subsequentes (NBC TA 560)",
      "Normas de Auditoria Independente"
    ],
    "enunciado": "78. Em relação a eventos subsequentes, de acordo com a NBC TA 560, é correto afirmar que",
    "alternativas": [
      {
        "id": "A",
        "text": "a aprovação final das demonstrações contábeis pelos acionistas é condição necessária, embora não suficiente, para o auditor independente concluir que foi obtida evidência de auditoria apropriada e suficiente para servir de base à sua opinião sobre as demonstrações contábeis."
      },
      {
        "id": "B",
        "text": "segundo a referida norma, a data do relatório do auditor independente pode ser anterior à data de aprovação das demonstrações contábeis, desde que a administração ou os responsáveis pela governança corporativa da entidade não se oponham."
      },
      {
        "id": "C",
        "text": "caso a administração tenha divulgado as demonstrações contábeis apesar da notificação do auditor independente para que não o fizesse devido à existência de eventos subsequentes significativos, não é considerado apropriado pela norma que o auditor busque assessoria legal para a adoção de medidas a serem tomadas em função de seus direitos e das suas obrigações legais."
      },
      {
        "id": "D",
        "text": "o auditor independente deve solicitar à administração e, quando apropriado, aos responsáveis pela governança, uma representação formal de que todos os eventos subsequentes à data das demonstrações contábeis, que requerem ajuste ou divulgação, foram ajustados ou divulgados."
      },
      {
        "id": "E",
        "text": "se eventos subsequentes que podem alterar seu relatório chegarem ao conhecimento do auditor independente após a data do seu relatório, ele está dispensado, segundo a referida norma, de efetuar qualquer procedimento adicional de auditoria, mesmo que as demonstrações contábeis ainda não tenham sido divulgadas."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 78 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-79",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade Geral e Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Amostragem em Auditoria (NBC TA 530)"
    ],
    "enunciado": "79. Em relação à amostragem na auditoria, é correto afirmar que",
    "alternativas": [
      {
        "id": "A",
        "text": "a amostragem deve ser sempre efetuada com números aleatórios, para evitar que o auditor utilize critérios próprios para a seleção dos itens a serem auditados."
      },
      {
        "id": "B",
        "text": "quanto maior o nível de distorção tolerável aceito nos testes substantivos, maior deve ser o tamanho da amostra, para que a eficácia e a eficiência do trabalho do auditor sejam alcançadas."
      },
      {
        "id": "C",
        "text": "na determinação do tamanho da amostra, um nível de confiança de 95% indica que em noventa e cinco (95) vezes o resultado será impreciso e em cinco (5) vezes, o resultado será preciso."
      },
      {
        "id": "D",
        "text": "o risco da amostragem é o risco de que a conclusão atingida com base na amostra seja igual ao da conclusão que seria obtida com base no exame da população como um todo."
      },
      {
        "id": "E",
        "text": "a combinação de uma amostragem estratificada para os itens de maior valor nos procedimentos (testes) substantivos combinada com a amostragem aleatória para os itens de menor valor é geralmente um procedimento eficaz, pois permite uma cobertura maior em termos de valor e um tamanho de amostra menor."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 79 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  },
  {
    "id": "q-prova_objetiva_auditor-80",
    "banca": "FGV",
    "ano": 2023,
    "orgao": "Tribunal de Contas / Receita",
    "cargo": "Auditor de Controle / Fiscal",
    "disciplina": "Contabilidade Geral e Auditoria",
    "assunto": "Questões de Concurso",
    "subtopicos": [
      "Auditoria",
      "Relatório do Auditor Independente"
    ],
    "enunciado": "80. Em relação à elaboração do relatório do auditor independente sobre as demonstrações contábeis, está correto afirmar que",
    "alternativas": [
      {
        "id": "A",
        "text": "um dos aspectos que o auditor deve levar em consideração para formar uma opinião sobre as demonstrações contábeis da entidade é se as distorções não corrigidas pela administração são relevantes, individualmente ou em conjunto."
      },
      {
        "id": "B",
        "text": "o parágrafo introdutório do relatório consiste na afirmação de a administração da Companhia ser responsável pela elaboração e adequada apresentação das demonstrações contábeis de acordo com as normas brasileiras de contabilidade."
      },
      {
        "id": "C",
        "text": "se o auditor concluir que as demonstrações contábeis apresentam distorções relevantes e generalizadas, ele deve emitir um relatório com ressalva, incluindo um parágrafo em que contenha a base para essa opinião."
      },
      {
        "id": "D",
        "text": "o parágrafo de ênfase normalmente é utilizado quando há incerteza em relação ao resultado de contingências judiciais da entidade, sobre as quais o auditor tenha ressalvas em relação à descrição apropriada do assunto nas demonstrações contábeis."
      },
      {
        "id": "E",
        "text": "caso as notas explicativas contenham informações não contábeis, tais como o conceito de LAJIDA (lucro antes dos juros, impostos e da depreciação), o auditor não precisa solicitar que a administração coloque na nota que essa informação não foi auditada."
      }
    ],
    "gabarito": "A",
    "explicacao": "🎯 Gabarito Oficial: A.\nQuestão 80 da prova oficial de Auditor de Controle / Fiscal (FGV). Resposta homologada pela banca examinadora.",
    "baseLegal": "Gabarito Oficial FGV.",
    "fontePesquisa": "Caderno Oficial Tribunal de Contas / Receita - 2023",
    "dificuldade": "médio"
  }
];
