const produtos = [
  {
    id: 1,

    nome: "Pulseira Guaruba",

    animal: "Guaruba guarouba",

    categoria: "Aves",

    preco: 630.89,

    estoque: 12,

    status: "Vulnerável",

    imagem: "pulseiraArarajuba.jpeg",

    descricao:
      "A pulseira Guaruba representa uma das aves mais emblemáticas da Amazônia. Ao adquirir esta pulseira, você contribui para projetos de conservação e recebe acesso ao acompanhamento de um exemplar monitorado.",

    detalhes: [
      "Material: Pedra vulcânica e aço inoxidável",
      "Cor predominante: Amarelo",
      "Código exclusivo para rastreamento",
      "Embalagem ecológica",
      "60 segundos de garantia",
    ],
  },

  {
    id: 2,

    nome: "Pulseira Gavião-Real",

    animal: "Harpia harpyja",

    categoria: "Aves",

    preco: 650.8,

    estoque: 9,

    status: "Quase ameaçado",

    imagem: "pulseiraGaviaoReal.jpeg",

    descricao:
      "Inspirada no maior predador das florestas brasileiras, esta pulseira ajuda a financiar programas de monitoramento da espécie.",

    detalhes: [
      "Pedras naturais",
      "Fecho em aço inox",
      "Código de rastreamento",
      "Projeto parceiro oficial",
      "Resistente à água",
      "60 segundos de garantia",
    ],
  },

  {
    id: 3,

    nome: "Pulseira Arara Azul",

    animal: "Anodorhynchus hyacinthinus",

    categoria: "Aves",

    preco: 610.9,

    estoque: 15,

    status: "Vulnerável",

    imagem: "pulseiraAraraAzul.jpeg",

    descricao:
      "A pulseira Arara Azul representa uma das espécies mais conhecidas do Pantanal brasileiro.",

    detalhes: [
      "Pedra natural azul",
      "Aço inoxidável",
      "Código exclusivo",
      "Pulseira ajustável",
      "60 segundos de garantia",
    ],
  },

  {
    id: 4,

    nome: "Pulseira Onça-Pintada",

    animal: "Panthera onca",

    categoria: "Mamíferos",

    preco: 640.89,

    estoque: 8,

    status: "Em perigo",

    imagem: "pulseiraOncaPintada.jpeg",

    descricao:
      "Ajude a proteger o maior felino das Américas adquirindo uma pulseira exclusiva inspirada na Onça-Pintada.",

    detalhes: [
      "Pedras naturais",
      "Aço inox",
      "Resistente à água",
      "Código para rastreamento",
      "Projeto de conservação",
      "60 segundos de garantia",
    ],
  },

  {
    id: 5,

    nome: "Pulseira Lobo-Guará",

    animal: "Chrysocyon brachyurus",

    categoria: "Mamíferos",

    preco: 695.5,

    estoque: 18,

    status: "Quase ameaçado",

    imagem: "pulseiraLoboGuara.jpeg",

    descricao:
      "Uma pulseira criada para apoiar a preservação do maior canídeo da América do Sul.",

    detalhes: [
      "Pedra vulcânica",
      "Pulseira ajustável",
      "Código de rastreamento",
      "Material premium",
      "Embalagem reciclável",
      "60 segundos de garantia",
    ],
  },

  {
    id: 6,

    nome: "Pulseira Gato-Maracajá",

    animal: "Leopardus wiedii",

    categoria: "Mamíferos",

    preco: 610.49,

    estoque: 11,

    status: "Quase ameaçado",

    imagem: "pulseiraGatoMaracaja.jpeg",

    descricao: "Ajude na conservação do discreto e ágil Gato-Maracajá.",

    detalhes: [
      "Aço inox",
      "Pedras naturais",
      "Código exclusivo",
      "Resistente à água",
      "60 segundos de garantia",
    ],
  },

  {
    id: 7,

    nome: "Pulseira Ariranha",

    animal: "Pteronura brasiliensis",

    categoria: "Marinhos",

    preco: 667.45,

    estoque: 7,

    status: "Em perigo",

    imagem: "pulseiraAriranha.jpeg",

    descricao:
      "Contribua com projetos que preservam um dos maiores mamíferos aquáticos da América do Sul.",

    detalhes: [
      "Pedras naturais",
      "Código exclusivo",
      "Projeto parceiro",
      "Pulseira ajustável",
      "Embalagem sustentável",
      "60 segundos de garantia",
    ],
  },

  {
    id: 8,

    nome: "Pulseira Tubarão-Branco",

    animal: "Carcharodon carcharias",

    categoria: "Marinhos",

    preco: 800.99,

    estoque: 5,

    status: "Vulnerável",

    imagem: "pulseiraTubaraoBranco.jpeg",

    descricao:
      "Ajude a proteger um dos animais marinhos mais importantes dos oceanos.",

    detalhes: [
      "Pedra vulcânica",
      "Aço inox",
      "Código de rastreamento",
      "Projeto internacional",
      "60 segundos de garantia",
    ],
  },

  {
    id: 9,

    nome: "Pulseira Abelha",

    animal: "Carcharodon carcharias",

    categoria: "Insetos",

    preco: 789.99,

    estoque: 5,

    status: "Vulnerável",

    imagem: "pulseiraAbelha.jpeg",

    descricao:
      "Ajude a proteger um dos animais marinhos mais importantes dos oceanos.",

    detalhes: [
      "Pedra vulcânica",
      "Aço inox",
      "Código de rastreamento",
      "Projeto internacional",
      "60 segundos de garantia",
    ],
  },
  {
    id: 10,

    nome: "Pulseira Ararinha Azul",

    animal: "Carcharodon carcharias",

    categoria: "Aves",

    preco: 4499.999,

    estoque: 5,

    status: "Vulnerável",

    imagem: "pulseiraArarinhaAzul.jpeg",

    descricao:
      "Ajude a proteger um dos animais marinhos mais importantes dos oceanos.",

    detalhes: [
      "Pedra vulcânica",
      "Aço inox",
      "Código de rastreamento",
      "Projeto internacional",
      "60 segundos de garantia",
    ],
  },
];

const pelucias = {
  "guaruba": {
    nome: "Pelúcia Guaruba",
    animal: "Guaruba",
    categoria: "Ave Aérea",

    descricao:
      "A guaruba, também conhecida como ararajuba, é uma ave brasileira de plumagem predominantemente amarela e verde. É encontrada principalmente na região amazônica e se destaca por viver em grupos e formar fortes vínculos sociais.",

    versoes: {
      tecido: {
        nome: "Tecido comum",
        preco: 49.9,
        imagem: "peluciaGuaruba.jpeg",
      },

      croche: {
        nome: "Crochê",
        preco: 69.9,
        imagem: "peluciaGuarubaCroche.jpeg",
      },
    },

    caracteristicas: [
      {
        titulo: "Material",
        texto:
          "Produzida com tecido macio e enchimento confortável, adequada para decoração e contato cuidadoso.",
      },
      {
        titulo: "Tamanho",
        texto:
          "Tamanho compacto, pensado para ser facilmente transportado e utilizado como objeto decorativo.",
      },
      {
        titulo: "Produção",
        texto:
          "Produção artesanal e cuidadosa, com detalhes inspirados nas cores características da guaruba.",
      },
      {
        titulo: "Indicação",
        texto:
          "Indicada para pessoas que gostam de aves, animais brasileiros e iniciativas de conservação da fauna.",
      },
    ],

    informacoes: [
      {
        icone: "🐾",
        titulo: "Onde vive?",
        texto:
          "Vive principalmente em áreas de floresta da Amazônia brasileira, utilizando árvores para alimentação, abrigo e reprodução.",
      },
      {
        icone: "🌱",
        titulo: "Alimentação",
        texto:
          "Alimenta-se principalmente de frutos, sementes, flores e outros recursos vegetais encontrados na floresta.",
      },
      {
        icone: "⚠️",
        titulo: "Ameaças",
        texto:
          "Entre as principais ameaças estão a perda de habitat e a captura ilegal para o comércio de animais silvestres.",
      },
    ],
  },

  "gaviao-real": {
    nome: "Pelúcia Gavião-Real",
    animal: "Gavião-Real",
    categoria: "Ave Aérea",

    descricao:
      "O gavião-real é uma das maiores e mais poderosas aves de rapina das Américas. Possui grandes garras, visão aguçada e capacidade de capturar animais de médio porte.",

    versoes: {
      tecido: {
        nome: "Tecido comum",
        preco: 54.9,
        imagem: "peluciaGaviaoReal.jpeg",
      },

      croche: {
        nome: "Crochê",
        preco: 74.9,
        imagem: "peluciaGaviaoRealCroche.jpeg",
      },
    },

    caracteristicas: [
      {
        titulo: "Material",
        texto:
          "Produzida com tecido macio e enchimento leve, com detalhes inspirados na aparência da espécie.",
      },
      {
        titulo: "Tamanho",
        texto:
          "Tamanho compacto, adequado para decoração, coleção e transporte.",
      },
      {
        titulo: "Produção",
        texto:
          "Produção artesanal com atenção aos detalhes da cabeça, das asas e das cores da ave.",
      },
      {
        titulo: "Indicação",
        texto:
          "Indicada para admiradores de aves de rapina e da fauna brasileira.",
      },
    ],

    informacoes: [
      {
        icone: "🐾",
        titulo: "Onde vive?",
        texto:
          "Habita principalmente grandes áreas de floresta tropical da América Central e do Sul, incluindo regiões da Amazônia.",
      },
      {
        icone: "🌱",
        titulo: "Alimentação",
        texto:
          "É um predador que se alimenta principalmente de mamíferos arborícolas, aves e outros animais.",
      },
      {
        icone: "⚠️",
        titulo: "Ameaças",
        texto:
          "A perda e fragmentação das florestas, além da perseguição e redução de suas presas, podem prejudicar suas populações.",
      },
    ],
  },

  "arara-azul": {
    nome: "Pelúcia Arara Azul",
    animal: "Arara Azul",
    categoria: "Ave Aérea",

    descricao:
      "A arara-azul é uma grande ave brasileira conhecida por sua plumagem azul intensa e pelo bico extremamente forte. É uma das espécies mais emblemáticas da fauna brasileira.",

    versoes: {
      tecido: {
        nome: "Tecido comum",
        preco: 49.9,
        imagem: "peluciaAraraAzul.jpeg",
      },

      croche: {
        nome: "Crochê",
        preco: 69.9,
        imagem: "peluciaAraraAzulCroche.jpeg",
      },
    },

    caracteristicas: [
      {
        titulo: "Material",
        texto:
          "Produzida com tecido macio e enchimento confortável, com cores inspiradas na plumagem da espécie.",
      },
      {
        titulo: "Tamanho",
        texto: "Tamanho compacto, adequado para decoração e coleção.",
      },
      {
        titulo: "Produção",
        texto:
          "Produção artesanal com detalhes inspirados nas asas, no bico e na plumagem azul.",
      },
      {
        titulo: "Indicação",
        texto:
          "Indicada para crianças, colecionadores e pessoas interessadas na conservação das aves brasileiras.",
      },
    ],

    informacoes: [
      {
        icone: "🐾",
        titulo: "Onde vive?",
        texto:
          "Pode ser encontrada em diferentes ambientes brasileiros, especialmente no Pantanal e em áreas de cerrado e floresta.",
      },
      {
        icone: "🌱",
        titulo: "Alimentação",
        texto:
          "Alimenta-se principalmente de sementes e frutos, especialmente aqueles encontrados em palmeiras.",
      },
      {
        icone: "⚠️",
        titulo: "Ameaças",
        texto:
          "A perda de habitat e o tráfico de animais silvestres estão entre os principais riscos enfrentados pela espécie.",
      },
    ],
  },

  "ararinha-azul": {
    nome: "Pelúcia Ararinha Azul",
    animal: "Ararinha Azul",
    categoria: "Ave Aérea",

    descricao:
      "A ararinha-azul é uma pequena ave brasileira de plumagem azul. A espécie tornou-se símbolo da conservação da fauna brasileira após desaparecer da natureza e passar por programas de reprodução e reintrodução.",

    versoes: {
      tecido: {
        nome: "Tecido comum",
        preco: 49.9,
        imagem: "peluciaArarinhaAzul.jpeg",
      },

      croche: {
        nome: "Crochê",
        preco: 69.9,
        imagem: "peluciaArarinhaAzulCroche.jpeg",
      },
    },

    caracteristicas: [
      {
        titulo: "Material",
        texto:
          "Produzida com tecido macio e enchimento leve, representando as características visuais da espécie.",
      },
      {
        titulo: "Tamanho",
        texto: "Tamanho compacto, adequado para decoração e coleção.",
      },
      {
        titulo: "Produção",
        texto:
          "Produção artesanal com detalhes inspirados na plumagem azul da ararinha.",
      },
      {
        titulo: "Indicação",
        texto:
          "Indicada para pessoas interessadas em conservação ambiental e proteção de espécies ameaçadas.",
      },
    ],

    informacoes: [
      {
        icone: "🐾",
        titulo: "Onde vive?",
        texto:
          "Historicamente era encontrada na região de Curaçá, na Bahia, associada a áreas de caatinga próximas a cursos de água.",
      },
      {
        icone: "🌱",
        titulo: "Alimentação",
        texto:
          "Alimenta-se principalmente de sementes, frutos e outros recursos vegetais.",
      },
      {
        icone: "⚠️",
        titulo: "Ameaças",
        texto:
          "A captura para o comércio ilegal e a perda de habitat foram fatores importantes para seu desaparecimento da natureza.",
      },
    ],
  },

  "lobo-guara": {
    nome: "Pelúcia Lobo-Guará",
    animal: "Lobo-Guará",
    categoria: "Mamífero Terrestre",

    descricao:
      "O lobo-guará é o maior canídeo da América do Sul. Possui pernas longas, pelagem avermelhada e uma aparência bastante característica, sendo um dos animais mais conhecidos do Cerrado brasileiro.",

    versoes: {
      tecido: {
        nome: "Tecido comum",
        preco: 49.9,
        imagem: "peluciaLoboGuara.jpeg",
      },

      croche: {
        nome: "Crochê",
        preco: 69.9,
        imagem: "peluciaLoboGuaraCroche.jpeg",
      },
    },

    caracteristicas: [
      {
        titulo: "Material",
        texto:
          "Produzida com tecido macio e enchimento confortável, com pelagem inspirada nas cores do lobo-guará.",
      },
      {
        titulo: "Tamanho",
        texto: "Tamanho compacto, adequado para decoração e coleção.",
      },
      {
        titulo: "Produção",
        texto:
          "Produção artesanal com detalhes inspirados nas pernas longas, orelhas e pelagem do animal.",
      },
      {
        titulo: "Indicação",
        texto:
          "Indicada para admiradores da fauna brasileira e interessados na conservação do Cerrado.",
      },
    ],

    informacoes: [
      {
        icone: "🐾",
        titulo: "Onde vive?",
        texto:
          "É encontrado principalmente em áreas abertas do Cerrado, mas também pode ocorrer em outros ambientes da América do Sul.",
      },
      {
        icone: "🌱",
        titulo: "Alimentação",
        texto:
          "É onívoro e alimenta-se de frutos, especialmente da lobeira, além de pequenos animais e outros recursos.",
      },
      {
        icone: "⚠️",
        titulo: "Ameaças",
        texto:
          "A perda e fragmentação do habitat, atropelamentos e conflitos com atividades humanas estão entre os problemas enfrentados pela espécie.",
      },
    ],
  },

  "onca-pintada": {
    nome: "Pelúcia Onça-Pintada",
    animal: "Onça-Pintada",
    categoria: "Mamífero Terrestre",

    descricao:
      "A onça-pintada é o maior felino das Américas. Possui grande força física, excelente capacidade de natação e um padrão de manchas característico.",

    versoes: {
      tecido: {
        nome: "Tecido comum",
        preco: 54.9,
        imagem: "peluciaOncaPintada.jpeg",
      },

      croche: {
        nome: "Crochê",
        preco: 74.9,
        imagem: "peluciaOncaPintadaCroche.jpeg",
      },
    },

    caracteristicas: [
      {
        titulo: "Material",
        texto:
          "Produzida com tecido macio e enchimento confortável, com estampa inspirada na pelagem da espécie.",
      },
      {
        titulo: "Tamanho",
        texto:
          "Tamanho compacto, adequado para decoração, coleção e transporte.",
      },
      {
        titulo: "Produção",
        texto:
          "Produção artesanal com atenção ao padrão de manchas e às características do felino.",
      },
      {
        titulo: "Indicação",
        texto:
          "Indicada para admiradores de grandes felinos e da biodiversidade brasileira.",
      },
    ],

    informacoes: [
      {
        icone: "🐾",
        titulo: "Onde vive?",
        texto:
          "Pode ocupar diferentes ambientes, incluindo florestas, áreas de cerrado e regiões alagáveis como o Pantanal.",
      },
      {
        icone: "🌱",
        titulo: "Alimentação",
        texto:
          "É carnívora e pode se alimentar de uma grande variedade de mamíferos, répteis, aves e outros animais.",
      },
      {
        icone: "⚠️",
        titulo: "Ameaças",
        texto:
          "A perda e fragmentação do habitat, a redução de presas e conflitos com atividades humanas estão entre suas principais ameaças.",
      },
    ],
  },

  "gato-maracaja": {
    nome: "Pelúcia Gato-Maracajá",
    animal: "Gato-Maracajá",
    categoria: "Mamífero Terrestre",

    descricao:
      "O gato-maracajá é um pequeno felino de hábitos predominantemente arborícolas. Possui grande habilidade para subir em árvores e uma pelagem marcada por manchas e rosetas.",

    versoes: {
      tecido: {
        nome: "Tecido comum",
        preco: 49.9,
        imagem: "peluciaGatoMaracaja.jpeg",
      },

      croche: {
        nome: "Crochê",
        preco: 69.9,
        imagem: "peluciaGatoMaracajaCroche.jpeg",
      },
    },

    caracteristicas: [
      {
        titulo: "Material",
        texto:
          "Produzida com tecido macio e enchimento leve, com detalhes inspirados na pelagem do gato-maracajá.",
      },
      {
        titulo: "Tamanho",
        texto: "Tamanho compacto, adequado para decoração e coleção.",
      },
      {
        titulo: "Produção",
        texto:
          "Produção artesanal com representação das manchas e características do pequeno felino.",
      },
      {
        titulo: "Indicação",
        texto:
          "Indicada para pessoas que gostam de felinos e da biodiversidade das florestas brasileiras.",
      },
    ],

    informacoes: [
      {
        icone: "🐾",
        titulo: "Onde vive?",
        texto:
          "Vive principalmente em áreas florestais da América Central e da América do Sul, incluindo diferentes regiões do Brasil.",
      },
      {
        icone: "🌱",
        titulo: "Alimentação",
        texto:
          "Alimenta-se de pequenos mamíferos, aves, répteis, anfíbios e outros pequenos animais.",
      },
      {
        icone: "⚠️",
        titulo: "Ameaças",
        texto:
          "A perda e fragmentação das florestas, atropelamentos e outras alterações provocadas pelas atividades humanas representam riscos para a espécie.",
      },
    ],
  },

  "tubarao-branco": {
    nome: "Pelúcia Tubarão Branco",
    animal: "Tubarão Branco",
    categoria: "Peixe Aquático",

    descricao:
      "O tubarão-branco é um grande peixe predador encontrado principalmente em águas costeiras e temperadas de diferentes regiões do planeta. É conhecido por seu corpo robusto e pelos dentes serrilhados.",

    versoes: {
      tecido: {
        nome: "Tecido comum",
        preco: 54.9,
        imagem: "peluciaTubaraoBranco.jpeg",
      },

      croche: {
        nome: "Crochê",
        preco: 74.9,
        imagem: "peluciaTubaraoBrancoCroche.jpeg",
      },
    },

    caracteristicas: [
      {
        titulo: "Material",
        texto:
          "Produzida com tecido macio e enchimento confortável, representando as cores características do animal.",
      },
      {
        titulo: "Tamanho",
        texto: "Tamanho compacto, adequado para decoração e coleção.",
      },
      {
        titulo: "Produção",
        texto:
          "Produção artesanal com detalhes inspirados no corpo, nas nadadeiras e na cabeça do tubarão.",
      },
      {
        titulo: "Indicação",
        texto:
          "Indicada para pessoas interessadas em animais marinhos e na conservação dos oceanos.",
      },
    ],

    informacoes: [
      {
        icone: "🐾",
        titulo: "Onde vive?",
        texto:
          "É encontrado em diferentes oceanos, principalmente em regiões costeiras e águas temperadas.",
      },
      {
        icone: "🌱",
        titulo: "Alimentação",
        texto:
          "Alimenta-se de peixes, raias, outros animais marinhos e, especialmente quando adulto, mamíferos marinhos.",
      },
      {
        icone: "⚠️",
        titulo: "Ameaças",
        texto:
          "Pesca acidental e direcionada, redução de presas e alterações nos ecossistemas marinhos podem afetar suas populações.",
      },
    ],
  },

  "abelha": {
    nome: "Pelúcia Abelha",
    animal: "Abelha",
    categoria: "Inseto Aéreo",

    descricao:
      "As abelhas são insetos fundamentais para diversos ecossistemas. Muitas espécies atuam como polinizadoras, transportando pólen entre flores e contribuindo para a reprodução de numerosas plantas.",

    versoes: {
      tecido: {
        nome: "Tecido comum",
        preco: 44.9,
        imagem: "peluciaAbelha.jpeg",
      },

      croche: {
        nome: "Crochê",
        preco: 64.9,
        imagem: "peluciaAbelhaCroche.jpeg",
      },
    },

    caracteristicas: [
      {
        titulo: "Material",
        texto:
          "Produzida com tecido macio e enchimento leve, utilizando cores inspiradas no corpo das abelhas.",
      },
      {
        titulo: "Tamanho",
        texto:
          "Tamanho compacto, adequado para decoração, coleção e atividades educativas.",
      },
      {
        titulo: "Produção",
        texto:
          "Produção artesanal com detalhes inspirados nas asas, listras e formato do corpo do inseto.",
      },
      {
        titulo: "Indicação",
        texto:
          "Indicada para atividades educativas e para pessoas interessadas em polinização e preservação ambiental.",
      },
    ],

    informacoes: [
      {
        icone: "🐾",
        titulo: "Onde vive?",
        texto:
          "As abelhas podem viver em diversos ambientes onde existam flores e locais adequados para construção de seus ninhos ou colmeias.",
      },
      {
        icone: "🌱",
        titulo: "Alimentação",
        texto:
          "Alimentam-se principalmente de néctar e pólen das flores. O néctar fornece energia e o pólen é uma importante fonte de nutrientes.",
      },
      {
        icone: "⚠️",
        titulo: "Ameaças",
        texto:
          "Perda de habitat, uso inadequado de pesticidas, doenças, parasitas e alterações ambientais podem afetar diferentes espécies de abelhas.",
      },
    ],
  },

  "ariranha": {
    nome: "Pelúcia Ariranha",
    animal: "Ariranha",
    categoria: "Mamífero Aquático",

    descricao:
      "A ariranha é um mamífero semiaquático da América do Sul. Vive em grupos familiares e apresenta excelente adaptação à vida em rios, lagos e outros ambientes de água doce.",

    versoes: {
      tecido: {
        nome: "Tecido comum",
        preco: 49.9,
        imagem: "peluciaAriranha.jpeg",
      },

      croche: {
        nome: "Crochê",
        preco: 69.9,
        imagem: "peluciaAriranhaCroche.jpeg",
      },
    },

    caracteristicas: [
      {
        titulo: "Material",
        texto:
          "Produzida com tecido macio e enchimento confortável, representando a pelagem escura característica da espécie.",
      },
      {
        titulo: "Tamanho",
        texto: "Tamanho compacto, adequado para decoração e coleção.",
      },
      {
        titulo: "Produção",
        texto:
          "Produção artesanal com detalhes inspirados no corpo alongado, nas patas e na cabeça da ariranha.",
      },
      {
        titulo: "Indicação",
        texto:
          "Indicada para pessoas interessadas em mamíferos aquáticos e na preservação dos rios brasileiros.",
      },
    ],

    informacoes: [
      {
        icone: "🐾",
        titulo: "Onde vive?",
        texto:
          "Vive principalmente em rios, lagos, igarapés e outros ambientes de água doce da América do Sul.",
      },
      {
        icone: "🌱",
        titulo: "Alimentação",
        texto:
          "Alimenta-se principalmente de peixes, mas também pode consumir crustáceos e outros animais aquáticos.",
      },
      {
        icone: "⚠️",
        titulo: "Ameaças",
        texto:
          "A degradação dos ambientes aquáticos, poluição, perda de habitat e conflitos relacionados à atividade humana podem afetar suas populações.",
      },
    ],
  },
};

const usuarios = [];
