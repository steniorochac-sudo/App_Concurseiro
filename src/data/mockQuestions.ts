import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  {
    id: "q-fgv-001",
    banca: "FGV",
    ano: 2023,
    orgao: "SEFAZ-SP",
    cargo: "Auditor Fiscal Tributário",
    disciplina: "Direito Tributário",
    assunto: "Impostos Municipais - ISSQN",
    enunciado: "De acordo com a Lei Complementar nº 116/2003 e com a jurisprudência consolidada do STF, o Imposto Sobre Serviços de Qualquer Natureza (ISSQN) incide sobre:",
    alternativas: [
      { id: "A", text: "A cessão de direito de uso de marcas e patentes." },
      { id: "B", text: "A locação de bens móveis dissociada da prestação de serviços." },
      { id: "C", text: "As operações de exportação de serviços para o exterior, independentemente do resultado." },
      { id: "D", text: "A prestação de serviços efetuada sob a relação de trabalho com vínculo empregatício." },
      { id: "E", text: "O valor dos depósitos bancários e rendimentos de aplicações financeiras." }
    ],
    gabarito: "A",
    explicacao: "Conforme a Súmula Vinculante 31 do STF, é inconstitucional a incidência do ISS sobre a locação de bens móveis (afastando a B). No entanto, a cessão de uso de marcas e patentes (subitem 17.25 da lista anexa à LC 116/03) possui natureza jurídica de serviço suplementar/intangível sujeito à incidência do imposto, conforme decidido pelo STF no RE 688.223.",
    baseLegal: "LC 116/2003, Art. 1º e Súmula Vinculante nº 31 do STF.",
    dificuldade: "médio"
  },
  {
    id: "q-fcc-002",
    banca: "FCC",
    ano: 2023,
    orgao: "TRT-2ª Região",
    cargo: "Analista de Tecnologia da Informação",
    disciplina: "Direito Constitucional",
    assunto: "Direitos e Garantias Fundamentais",
    enunciado: "Quanto à garantia constitucional do habeas corpus, assinale a alternativa correta em conformidade com a Constituição Federal de 1988:",
    alternativas: [
      { id: "A", text: "Conceder-se-á habeas corpus para proteger direito líquido e certo não amparado por mandado de segurança." },
      { id: "B", text: "Conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder." },
      { id: "C", text: "O habeas corpus exige a obrigatoriedade de representação por advogado regularmente inscrito na OAB." },
      { id: "D", text: "Não cabe habeas corpus no âmbito de punições disciplinares militares em hipótese alguma, nem mesmo para exame dos pressupostos de legalidade." },
      { id: "E", text: "A impetração de habeas corpus está sujeita ao pagamento prévio de custas processuais fixadas em tabela judiciária." }
    ],
    gabarito: "B",
    explicacao: "O habeas corpus é remédio constitucional gratuito (Art. 5º, LXXVII) destinado exclusivamente a tutelar a liberdade de locomoção ameaçada ou violada por ilegalidade ou abuso de poder (Art. 5º, LXVIII). Não exige capacidade postulatória (advogado) e pode ser impetrado por qualquer pessoa.",
    baseLegal: "Art. 5º, inciso LXVIII da Constituição Federal de 1988.",
    dificuldade: "fácil"
  },
  {
    id: "q-aocp-003",
    banca: "AOCP",
    ano: 2022,
    orgao: "Prefeitura de Maringá",
    cargo: "Analista Contábil",
    disciplina: "Direito Administrativo",
    assunto: "Atos Administrativos e Atributos",
    enunciado: "O atributo do ato administrativo pelo qual os atos da Administração Pública se impõem a terceiros, criando obrigações ou impondo restrições independentemente da concordância do particular, denomina-se:",
    alternativas: [
      { id: "A", text: "Presunção de Legitimidade." },
      { id: "B", text: "Imperatividade." },
      { id: "C", text: "Autoexecutoriedade." },
      { id: "D", text: "Tipicidade." },
      { id: "E", text: "Motivação." }
    ],
    gabarito: "B",
    explicacao: "A imperatividade (ou coercestividade) é o atributo pelo qual os atos administrativos se impõem unilateralmente a terceiros, criando obrigações ou restrições de cumprimento obrigatório. A autoexecutoriedade permite a execução direta pela Administração sem prévia intervenção judiciária.",
    baseLegal: "Doutrina de Direito Administrativo (Hely Lopes Meirelles / Maria Sylvia Zanella Di Pietro).",
    dificuldade: "fácil"
  },
  {
    id: "q-fgv-004",
    banca: "FGV",
    ano: 2023,
    orgao: "Receita Municipal",
    cargo: "Auditor Fiscal Tributário",
    disciplina: "Língua Portuguesa",
    assunto: "Sintaxe da Oração e Concordância Verbal",
    enunciado: "Assinale a frase em que a concordância verbal está inteiramente de acordo com a norma-padrão da Língua Portuguesa:",
    alternativas: [
      { id: "A", text: "Haviam muitos auditores reunidos no plenário no momento da votação." },
      { id: "B", text: "Faziam três anos que o concurso público para a receita estadual não era homologado." },
      { id: "C", text: "Trata-se de processos administrativos tributários de extrema complexidade." },
      { id: "D", text: "Aluga-se salas comerciais prontas para escritórios de advocacia no centro." },
      { id: "E", text: "Mais de um candidato obtiveram a pontuação máxima na prova objetiva." }
    ],
    gabarito: "C",
    explicacao: "Na alternativa C, a partícula 'se' é índice de indeterminabilidade do sujeito e o verbo 'tratar' é transitivo indireto (trata-se DE algo), devendo permanecer obrigatoriamente no singular. Nas opções A e B, 'haver' e 'fazer' indicando tempo são impessoais (ficam no singular: 'Havia', 'Fazia'). Em D, o correto seria 'Alugam-se salas'. Em E, com 'mais de um', a concordância padrão é no singular ('Mais de um candidato obteve').",
    baseLegal: "Gramática da Língua Portuguesa (Cegalla / Celso Cunha).",
    dificuldade: "médio"
  },
  {
    id: "q-cebraspe-005",
    banca: "CEBRASPE",
    ano: 2023,
    orgao: "DPE-RO",
    cargo: "Analista da Defensoria Pública - TI",
    disciplina: "Engenharia de Software & Banco de Dados",
    assunto: "Modelagem Relacional e Normalização",
    enunciado: "No contexto de projeto de banco de dados relacional, uma tabela encontra-se na Terceira Forma Normal (3FN) quando:",
    alternativas: [
      { id: "A", text: "Contém apenas valores atômicos e não repetitivos nas colunas." },
      { id: "B", text: "Está na 2FN e não possui dependências funcionais transitivas entre atributos não chave." },
      { id: "C", text: "Todas as chaves estrangeiras possuem restrição de integridade referencial em cascata." },
      { id: "D", text: "Está na 1FN e todos os atributos dependem parcialmente da chave primária composta." },
      { id: "E", text: "Não existem colunas com tipos de dados BLOB ou JSON." }
    ],
    gabarito: "B",
    explicacao: "Uma relação/tabela está na 3FN se, e somente se, estiver na 2FN e nenhum atributo não-chave for transitivamente dependente da chave primária (ou seja, um atributo não-chave não deve depender de outro atributo não-chave). A atomicidade de valores define a 1FN (opção A).",
    baseLegal: "Conceitos de Sistemas de Banco de Dados (Elmasri & Navathe / Silberschatz).",
    dificuldade: "médio"
  },
  {
    id: "q-fcc-006",
    banca: "FCC",
    ano: 2023,
    orgao: "TJ-SP",
    cargo: "Escrevente Técnico Judiciário",
    disciplina: "Direito Administrativo",
    assunto: "Licitações e Contratos (Lei nº 14.133/2021)",
    enunciado: "Nos termos da Nova Lei de Licitações e Contratos Administrativos (Lei nº 14.133/2021), a modalidade de licitação obrigatória para contratação de bens e serviços comuns, cujo critério de julgamento poderá ser o menor preço ou o maior desconto, é o:",
    alternativas: [
      { id: "A", text: "Concurso." },
      { id: "B", text: "Diálogo Competitivo." },
      { id: "C", text: "Pregão." },
      { id: "D", text: "Leilão." },
      { id: "E", text: "Concorrência." }
    ],
    gabarito: "C",
    explicacao: "Conforme o Art. 6º, XL e Art. 28, I da Lei 14.133/2021, o Pregão é a modalidade de licitação obrigatória para aquisição de bens e serviços comuns, cujo critério de julgamento é o menor preço ou o maior desconto.",
    baseLegal: "Lei nº 14.133/2021, Art. 6º, inciso XL e Art. 29.",
    dificuldade: "fácil"
  },
  {
    id: "q-fgv-007",
    banca: "FGV",
    ano: 2022,
    orgao: "CGM-Niterói",
    cargo: "Auditor de Controle Interno",
    disciplina: "Direito Tributário",
    assunto: "Princípios Tributários e Imunidades",
    enunciado: "A imunidade tributária recíproca, prevista na Constituição Federal de 1988, veda aos entes federativos a instituição de imposto sobre:",
    alternativas: [
      { id: "A", text: "Patrimônio, renda ou serviços, uns dos outros." },
      { id: "B", text: "Taxas e contribuições de melhoria devidas por autarquias federais." },
      { id: "C", text: "Operações de circulação de mercadorias promovidas por empresas públicas exploradoras de atividade econômica com fins lucrativos." },
      { id: "D", text: "Lucros distribuídos por sociedades de economia mista no mercado de ações." },
      { id: "E", text: "Bens imóveis pertencentes a partidos políticos, exclusivamente quando locados a terceiros particulares." }
    ],
    gabarito: "A",
    explicacao: "O Art. 150, VI, 'a' da CF/88 estabelece a Imunidade Recíproca, impedindo a União, Estados, DF e Municípios de instituirem impostos sobre patrimônio, renda ou serviços uns dos outros. Relembre que a imunidade se limita a IMPOSTOS, não alcançando taxas ou contribuições de melhoria.",
    baseLegal: "Art. 150, inciso VI, alínea 'a' da Constituição Federal de 1988.",
    dificuldade: "médio"
  },
  {
    id: "q-aocp-008",
    banca: "AOCP",
    ano: 2023,
    orgao: "SEC-BA",
    cargo: "Analista de Redes",
    disciplina: "Redes de Computadores",
    assunto: "Modelo OSI e Protocolos TCP/IP",
    enunciado: "Na arquitetura de redes TCP/IP, os protocolos que atuam nas camadas de Transporte e Aplicação, respectivamente, são:",
    alternativas: [
      { id: "A", text: "IP e Ethernet." },
      { id: "B", text: "UDP e HTTPS." },
      { id: "C", text: "ARP e ICMP." },
      { id: "D", text: "TCP e IPsec." },
      { id: "E", text: "DNS e BGP." }
    ],
    gabarito: "B",
    explicacao: "O protocolo UDP (User Datagram Protocol) atua na camada de Transporte (junto com o TCP), enquanto o HTTPS (Hypertext Transfer Protocol Secure) é um protocolo da camada de Aplicação.",
    baseLegal: "Redes de Computadores (Andrew S. Tanenbaum / Kurose & Ross).",
    dificuldade: "fácil"
  },
  {
    id: "q-fgv-009",
    banca: "FGV",
    ano: 2023,
    orgao: "Sefaz-MT",
    cargo: "Auditor Fiscal da Receita Estadual",
    disciplina: "Direito Constitucional",
    assunto: "Controle de Constitucionalidade",
    enunciado: "A Ação Direta de Inconstitucionalidade (ADI) genérica no Supremo Tribunal Federal pode ser proposta por:",
    alternativas: [
      { id: "A", text: "Qualquer cidadão em pleno gozo dos direitos políticos." },
      { id: "B", text: "Juiz de Direito de primeira instância em ação individual." },
      { id: "C", text: "Presidente da República, Governador de Estado ou do DF, e Procurador-Geral da República." },
      { id: "D", text: "Prefeitos Municipais de capitais de Estado." },
      { id: "E", text: "Tribunais de Contas dos Estados no exercício do controle externo." }
    ],
    gabarito: "C",
    explicacao: "Os legitimados para a propositura de ADI e ADC perante o STF estão exaustivamente previstos no Art. 103 da CF/88, dentre os quais figuram o Presidente da República, Mesa do Senado/Câmara, Governadores, PGR, OAB, partido político com representação no Congresso e confederação patronal/entidade de classe nacional.",
    baseLegal: "Art. 103, incisos I, V e VI da Constituição Federal de 1988.",
    dificuldade: "médio"
  },
  {
    id: "q-fcc-010",
    banca: "FCC",
    ano: 2023,
    orgao: "TRT-18ª Região",
    cargo: "Analista Judiciário - Área Administrativa",
    disciplina: "Língua Portuguesa",
    assunto: "Pontuação e Emprego da Vírgula",
    enunciado: "Assinale a frase em que o emprego da vírgula atende rigorosamente às regras gramaticais da norma-padrão:",
    alternativas: [
      { id: "A", text: "Os candidatos, que estudaram com dedicação, aprovaram no concurso." },
      { id: "B", text: "O fiscal de prova entregou, os cadernos de respostas aos alunos." },
      { id: "C", text: "Em Brasília no mês de julho, fez muito calor." },
      { id: "D", text: "O advogado disse que, a petição já fora protocolada." },
      { id: "E", text: "Solicitou-se ao auditor que, fizesse a conferência dos livros contábeis." }
    ],
    gabarito: "A",
    explicacao: "Na alternativa A, as vírgulas isolam corretamente a oração subordinada adjetiva explicativa ('que estudaram com dedicação'). Nas demais alternativas ocorrem erros graves de pontuação: B separa o verbo do objeto direto; D e E separam a conjunção integrante 'que' da sua oração antecedente.",
    baseLegal: "Manual de Redação da Presidência da República e Gramática Celso Cunha.",
    dificuldade: "médio"
  }
];
