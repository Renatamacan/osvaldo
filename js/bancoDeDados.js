const produtos = [
  {
    id: 1,

    nome: "Pulseira Guaruba",

    animal: "Guaruba guarouba",

    categoria: "Aves",

    preco: 89.9,

    estoque: 12,

    status: "Vulnerável",

    imagem: "./img/pulseiraArarajuba.jpeg",

    descricao:
      "A pulseira Guaruba representa uma das aves mais emblemáticas da Amazônia. Ao adquirir esta pulseira, você contribui para projetos de conservação e recebe acesso ao acompanhamento de um exemplar monitorado.",

    detalhes: [
      "Material: Pedra vulcânica e aço inoxidável",
      "Cor predominante: Amarelo",
      "Código exclusivo para rastreamento",
      "Embalagem ecológica",
      "Garantia de 12 meses",
    ],
  },

  {
    id: 2,

    nome: "Pulseira Gavião-Real",

    animal: "Harpia harpyja",

    categoria: "Aves",

    preco: 94.9,

    estoque: 9,

    status: "Quase ameaçado",

    imagem: "./img/pulseiraGaviaoReal.jpeg",

    descricao:
      "Inspirada no maior predador das florestas brasileiras, esta pulseira ajuda a financiar programas de monitoramento da espécie.",

    detalhes: [
      "Pedras naturais",
      "Fecho em aço inox",
      "Código de rastreamento",
      "Projeto parceiro oficial",
      "Resistente à água",
    ],
  },

  {
    id: 3,

    nome: "Pulseira Arara Azul",

    animal: "Anodorhynchus hyacinthinus",

    categoria: "Aves",

    preco: 99.9,

    estoque: 15,

    status: "Vulnerável",

    imagem: "./img/pulseiraArara-Azul.jpeg",

    descricao:
      "A pulseira Arara Azul representa uma das espécies mais conhecidas do Pantanal brasileiro.",

    detalhes: [
      "Pedra natural azul",
      "Aço inoxidável",
      "Código exclusivo",
      "Pulseira ajustável",
      "Garantia de fábrica",
    ],
  },

  {
    id: 4,

    nome: "Pulseira Onça-Pintada",

    animal: "Panthera onca",

    categoria: "Mamíferos",

    preco: 109.9,

    estoque: 8,

    status: "Em perigo",

    imagem: "./img/pulseiraOncaPintada.jpeg",

    descricao:
      "Ajude a proteger o maior felino das Américas adquirindo uma pulseira exclusiva inspirada na Onça-Pintada.",

    detalhes: [
      "Pedras naturais",
      "Aço inox",
      "Resistente à água",
      "Código para rastreamento",
      "Projeto de conservação",
    ],
  },

  {
    id: 5,

    nome: "Pulseira Lobo-Guará",

    animal: "Chrysocyon brachyurus",

    categoria: "Mamíferos",

    preco: 92.9,

    estoque: 18,

    status: "Quase ameaçado",

    imagem: "./img/pulseiraLoboGuara.jpeg",

    descricao:
      "Uma pulseira criada para apoiar a preservação do maior canídeo da América do Sul.",

    detalhes: [
      "Pedra vulcânica",
      "Pulseira ajustável",
      "Código de rastreamento",
      "Material premium",
      "Embalagem reciclável",
    ],
  },

  {
    id: 6,

    nome: "Pulseira Gato-Maracajá",

    animal: "Leopardus wiedii",

    categoria: "Mamíferos",

    preco: 95.9,

    estoque: 11,

    status: "Quase ameaçado",

    imagem: "./img/pulseiraGatoMaracaja.jpeg",

    descricao: "Ajude na conservação do discreto e ágil Gato-Maracajá.",

    detalhes: [
      "Aço inox",
      "Pedras naturais",
      "Código exclusivo",
      "Resistente à água",
      "Garantia de 12 meses",
    ],
  },

  {
    id: 7,

    nome: "Pulseira Ariranha",

    animal: "Pteronura brasiliensis",

    categoria: "Marinhos",

    preco: 96.9,

    estoque: 7,

    status: "Em perigo",

    imagem: "./img/pulseiraAriranha.jpeg",

    descricao:
      "Contribua com projetos que preservam um dos maiores mamíferos aquáticos da América do Sul.",

    detalhes: [
      "Pedras naturais",
      "Código exclusivo",
      "Projeto parceiro",
      "Pulseira ajustável",
      "Embalagem sustentável",
    ],
  },

  {
    id: 8,

    nome: "Pulseira Tubarão-Branco",

    animal: "Carcharodon carcharias",

    categoria: "Marinhos",

    preco: 114.9,

    estoque: 5,

    status: "Vulnerável",

    imagem: "./img/pulseiraTubaraoBranco.jpeg",

    descricao:
      "Ajude a proteger um dos animais marinhos mais importantes dos oceanos.",

    detalhes: [
      "Pedra vulcânica",
      "Aço inox",
      "Código de rastreamento",
      "Projeto internacional",
      "Garantia de fábrica",
    ],
  },

  {
    id: 9,

    nome: "Pulseira Abelha",

    animal: "Carcharodon carcharias",

    categoria: "Insetos",

    preco: 114.9,

    estoque: 5,

    status: "Vulnerável",

    imagem: "./img/pulseiraDeAbelha.jpeg",

    descricao:
      "Ajude a proteger um dos animais marinhos mais importantes dos oceanos.",

    detalhes: [
      "Pedra vulcânica",
      "Aço inox",
      "Código de rastreamento",
      "Projeto internacional",
      "Garantia de fábrica",
    ],
  },
 {
    id: 9,

    nome: "Pulseira Ararinha Azul",

    animal: "Carcharodon carcharias",

    categoria: "Aves",

    preco: 114.9,

    estoque: 5,

    status: "Vulnerável",

    imagem: "./img/pulseiraArarinha-Azul.jpeg",

    descricao:
      "Ajude a proteger um dos animais marinhos mais importantes dos oceanos.",

    detalhes: [
      "Pedra vulcânica",
      "Aço inox",
      "Código de rastreamento",
      "Projeto internacional",
      "Garantia de fábrica",
    ],
  },
];

const pelucias = [
  {
    id: 101,

    nome: "Pelúcia Arara Azul",

    animal: "Anodorhynchus hyacinthinus",

    categoria: "Aves",

    preco: 79.9,

    estoque: 10,

    imagem: "./img/PeluciaArara-Azul.jpeg",

    descricao:
      "Uma pelúcia inspirada na Arara Azul, perfeita para acompanhar quem apoia a conservação da espécie.",
  },

  {
    id: 102,

    nome: "Pelúcia Lobo-Guará",

    animal: "Chrysocyon brachyurus",

    categoria: "Mamíferos",

    preco: 84.9,

    estoque: 8,

    imagem: "./img/PeluciaLoboGuará.jpeg",

    descricao:
      "Uma representação carinhosa do Lobo-Guará, um dos animais mais característicos da fauna brasileira.",
  },

  {
    id: 103,

    nome: "Pelúcia Onça-Pintada",

    animal: "Panthera onca",

    categoria: "Mamíferos",

    preco: 89.9,

    estoque: 6,

    imagem: "./img/PeluciaOnÇaPintada.jpeg",

    descricao:
      "Uma pelúcia inspirada na Onça-Pintada, símbolo da força e biodiversidade brasileira.",
  },

  {
    id: 104,

    nome: "Pelúcia Ariranha",

    animal: "Pteronura brasiliensis",

    categoria: "Marinhos",

    preco: 82.9,

    estoque: 7,

    imagem: "./img/PeluciaAriranha.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },

  {
    id: 105,

    nome: "Pelúcia Gato Maracajá",

    animal: "Pteronura brasiliensis",

    categoria: "Mamíferos",

    preco: 82.9,

    estoque: 7,

    imagem: "./img/PeluciaGatoMaracajá.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },

  {
    id: 106,

    nome: "Pelúcia Gavião Real",

    animal: "Pteronura brasiliensis",

    categoria: "Aves",

    preco: 82.9,

    estoque: 7,

    imagem: "./img/PeluciagaviãoReal.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },

  {
    id: 107,

    nome: "Pelúcia Guaruba",

    animal: "Pteronura brasiliensis",

    categoria: "Aves",

    preco: 82.9,

    estoque: 7,

    imagem: "./img/PeluciaGuaruba.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },

  {
    id: 108,

    nome: "Pelúcia Tubarão",

    animal: "Pteronura brasiliensis",

    categoria: "Marinhos",

    preco: 82.9,

    estoque: 7,

    imagem: "./img/PeluciaTubarão.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },

  {
    id: 109,

    nome: "Pelúcia Colmeia",

    animal: "Pteronura brasiliensis",

    categoria: "Insetos",

    preco: 82.9,

    estoque: 7,

    imagem: "./img/PeluciaColmeiaAbelha.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },

  {
    id: 110,

    nome: "Pelúcia Ararinha Azul",

    animal: "Pteronura brasiliensis",

    categoria: "Aves",

    preco: 82.9,

    estoque: 7,

    imagem: "./img/PeluciaArarinha-Azul.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  }
];
