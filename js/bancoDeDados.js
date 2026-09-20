const produtos = [
  {
    id: 1,

    nome: "Pulseira Guaruba",

    animal: "Guaruba guarouba",

    categoria: "Aves",

    preco: 630.89,

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

    imagem: "./img/pulseiraGaviaoReal.jpeg",

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

    imagem: "./img/pulseiraArara-Azul.jpeg",

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

    imagem: "./img/pulseiraOncaPintada.jpeg",

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

    imagem: "./img/pulseiraLoboGuara.jpeg",

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

    imagem: "./img/pulseiraGatoMaracaja.jpeg",

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

    imagem: "./img/pulseiraAriranha.jpeg",

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

    imagem: "./img/pulseiraTubaraoBranco.jpeg",

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

    imagem: "./img/pulseiraDeAbelha.jpeg",

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

    imagem: "./img/pulseiraArarinha-Azul.jpeg",

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

const pelucias = [
  {
    id: 101,

    nome: "Pelúcia Arara Azul",

    animal: "Anodorhynchus hyacinthinus",

    categoria: "Aves",

    preco: 680.99,

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

    preco: 700.57,

    estoque: 8,

    imagem: "./img/PeluciaLoboGuará.jpeg",

    descricao:
      "Uma representação carinhosa do Lobo-Guará, um dos animais mais característicos da fauna brasileira.",

    versoes: {
      tecido: {
        nome: "Tecido comum",

        preco: 89.9,

        imagem: "../img/PeluciaLoboGuará.jpeg",
      },

      croche: {
        nome: "Crochê",

        preco: 119.9,

        imagem: "../img/LoboGuaráDeCrochê.jpeg",
      },
    },
  },

  {
    id: 103,

    nome: "Pelúcia Onça-Pintada",
    animal: "Panthera onca",
    categoria: "Mamíferos",
    preco: 650.8,
    estoque: 6,
    imagem: "./img/PeluciaOnçaPintada.jpeg",
    descricao:
      "Uma pelúcia inspirada na Onça-Pintada, símbolo da força e biodiversidade brasileira.",
  },

  {
    id: 104,

    nome: "Pelúcia Ariranha",

    animal: "Pteronura brasiliensis",

    categoria: "Marinhos",

    preco: 739.99,

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

    preco: 800.51,

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

    preco: 680.75,

    estoque: 7,

    imagem: "./img/PeluciaGaviãoReal.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },

  {
    id: 107,

    nome: "Pelúcia Guaruba",

    animal: "Pteronura brasiliensis",

    categoria: "Aves",

    preco: 650.39,

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

    preco: 999.999,

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

    preco: 979.99,

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

    preco: 999.999,

    estoque: 7,

    imagem: "./img/PeluciaArarinha-Azul.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },
];
const peluciasCroche = [
  {
    id: 111,

    nome: "Pelúcia Arara Azul",

    animal: "Anodorhynchus hyacinthinus",

    categoria: "Aves",

    preco: 750.99,

    estoque: 7,

    imagem: "./img/Arara-AzulCrochê.jpeg",

    descricao:
      "Uma pelúcia inspirada na Arara Azul, perfeita para acompanhar quem apoia a conservação da espécie.",
  },

  {
    id: 112,

    nome: "Pelúcia Lobo Guará",

    animal: "Chrysocyon brachyurus",

    categoria: "Mamífero",

    preco: 775.4,

    estoque: 7,

    imagem: "./img/LoboGuaráDeCrochê.jpeg",

    descricao:
      "Uma representação carinhosa do Lobo-Guará, um dos animais mais característicos da fauna brasileira.",
  },

  {
    id: 113,

    nome: "Pelúcia Onça-Pintada",

    animal: "Panthera onca",

    categoria: "Mamíferos",

    preco: 950.9,

    estoque: 6,

    imagem: "./img/OnçaPintadaDeCrochê.jpeg",

    descricao:
      "Uma pelúcia inspirada na Onça-Pintada, símbolo da força e biodiversidade brasileira.",
  },

  {
    id: 114,

    nome: "Pelúcia Ariranha",

    animal: "Pteronura brasiliensis",

    categoria: "Marinhos",

    preco: 860.78,

    estoque: 7,

    imagem: "./img/AriranhaDeCrochê.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },

  {
    id: 115,

    nome: "Pelúcia Gato Maracajá",

    animal: "Pteronura brasiliensis",

    categoria: "Mamíferos",

    preco: 1058.999,

    estoque: 7,

    imagem: "./img/GatoMaracajáDeCrochê.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },

  {
    id: 116,

    nome: "Pelúcia Gavião Real",

    animal: "Pteronura brasiliensis",

    categoria: "Aves",

    preco: 720.49,

    estoque: 7,

    imagem: "./img/GaviãoRealDeCrochê.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },

  {
    id: 117,

    nome: "Pelúcia Guaruba",

    animal: "Pteronura brasiliensis",

    categoria: "Aves",

    preco: 699.99,

    estoque: 7,

    imagem: "./img/GuarubaDeCrochê.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },

  {
    id: 118,

    nome: "Pelúcia Tubarão",

    animal: "Pteronura brasiliensis",

    categoria: "Marinhos",

    preco: 1199.999,

    estoque: 7,

    imagem: "./img/TubarãoDeCroChê.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },

  {
    id: 119,

    nome: "Pelúcia Colmeia",

    animal: "Pteronura brasiliensis",

    categoria: "Insetos",

    preco: 1389.999,

    estoque: 7,

    imagem: "./img/ColmeiasDeCrochê.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },

  {
    id: 120,

    nome: "Pelúcia Ararinha Azul",

    animal: "Pteronura brasiliensis",

    categoria: "Aves",

    preco: 11499.999,

    estoque: 7,

    imagem: "./img/Ararinha-AzulCrochê.jpeg",

    descricao:
      "Uma pelúcia inspirada na Ariranha, um dos maiores mamíferos aquáticos da América do Sul.",
  },
];

const usuarios = [];
