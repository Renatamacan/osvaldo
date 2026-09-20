/* ========================================
   BANCO DE DADOS DAS PELÚCIAS
======================================== */

// const pelucias = {

//     "lobo-guara": {

//         nome: "Pelúcia Lobo-guará",

//         animal: "Lobo-guará",

//         categoria: "MAMÍFERO TERRESTRE",

//         descricao:
//             "Uma representação carinhosa do lobo-guará, " +
//             "um dos animais mais conhecidos da fauna brasileira.",


//         versoes: {

//             tecido: {

//                 nome: "Tecido comum",

//                 preco: 89.90,

//                 imagem:
//                     "./img/peluciaLoboGuaraTecido.jpeg"

//             },

//             croche: {

//                 nome: "Crochê",

//                 preco: 119.90,

//                 imagem:
//                     "./img/peluciaLoboGuaraCroche.jpeg"

//             }

//         },


//         caracteristicas: [

//             {
//                 titulo: "Material",
//                 texto: "Tecido macio e resistente."
//             },

//             {
//                 titulo: "Tamanho",
//                 texto: "Tamanho ideal para decoração e coleção."
//             },

//             {
//                 titulo: "Produção",
//                 texto: "Produto desenvolvido para representar a fauna brasileira."
//             },

//             {
//                 titulo: "Indicação",
//                 texto: "Produto decorativo e educativo."
//             }

//         ],


//         informacoes: [

//             {
//                 icone: "🐾",
//                 titulo: "Onde vive?",
//                 texto:
//                     "O lobo-guará vive principalmente em áreas abertas " +
//                     "do Cerrado e em outras regiões da América do Sul."
//             },

//             {
//                 icone: "🌱",
//                 titulo: "Alimentação",
//                 texto:
//                     "Sua alimentação é bastante variada, incluindo frutos " +
//                     "e pequenos animais."
//             },

//             {
//                 icone: "⚠️",
//                 titulo: "Ameaças",
//                 texto:
//                     "A perda de habitat, atropelamentos e conflitos com " +
//                     "atividades humanas estão entre as ameaças enfrentadas."
//             }

//         ]

//     },


//     "arara-azul": {

//         nome: "Pelúcia Arara-azul",

//         animal: "Arara-azul",

//         categoria: "AVE",

//         descricao:
//             "Uma pelúcia inspirada na beleza da arara-azul, " +
//             "uma das aves mais marcantes da fauna brasileira.",


//         versoes: {

//             tecido: {

//                 nome: "Tecido comum",

//                 preco: 84.90,

//                 imagem:
//                     "./img/peluciaAraraAzulTecido.jpeg"

//             },

//             croche: {

//                 nome: "Crochê",

//                 preco: 114.90,

//                 imagem:
//                     "./img/peluciaAraraAzulCroche.jpeg"

//             }

//         },


//         caracteristicas: [

//             {
//                 titulo: "Material",
//                 texto: "Tecido macio e confortável."
//             },

//             {
//                 titulo: "Formato",
//                 texto: "Modelo inspirado nas características da arara-azul."
//             },

//             {
//                 titulo: "Produção",
//                 texto: "Produto desenvolvido com finalidade educativa."
//             },

//             {
//                 titulo: "Indicação",
//                 texto: "Coleção, decoração e atividades educativas."
//             }

//         ],


//         informacoes: [

//             {
//                 icone: "🦜",
//                 titulo: "Onde vive?",
//                 texto:
//                     "A arara-azul pode ser encontrada em diferentes " +
//                     "regiões da América do Sul."
//             },

//             {
//                 icone: "🌱",
//                 titulo: "Alimentação",
//                 texto:
//                     "Alimenta-se principalmente de sementes, frutos " +
//                     "e castanhas."
//             },

//             {
//                 icone: "⚠️",
//                 titulo: "Ameaças",
//                 texto:
//                     "A perda de habitat e a captura ilegal estão entre " +
//                     "os fatores que podem afetar suas populações."
//             }

//         ]

//     },


//     "onca-pintada": {

//         nome: "Pelúcia Onça-pintada",

//         animal: "Onça-pintada",

//         categoria: "MAMÍFERO TERRESTRE",

//         descricao:
//             "Uma pelúcia inspirada na maior espécie de felino " +
//             "das Américas.",


//         versoes: {

//             tecido: {

//                 nome: "Tecido comum",

//                 preco: 99.90,

//                 imagem:
//                     "./img/peluciaOncaPintadaTecido.jpeg"

//             },

//             croche: {

//                 nome: "Crochê",

//                 preco: 129.90,

//                 imagem:
//                     "./img/peluciaOncaPintadaCroche.jpeg"

//             }

//         },


//         caracteristicas: [

//             {
//                 titulo: "Material",
//                 texto: "Tecido macio e resistente."
//             },

//             {
//                 titulo: "Formato",
//                 texto: "Modelo inspirado na aparência da onça-pintada."
//             },

//             {
//                 titulo: "Produção",
//                 texto: "Produto educativo relacionado à conservação."
//             },

//             {
//                 titulo: "Indicação",
//                 texto: "Decoração, coleção e atividades educativas."
//             }

//         ],


//         informacoes: [

//             {
//                 icone: "🐆",
//                 titulo: "Onde vive?",
//                 texto:
//                     "A onça-pintada ocorre em diferentes ambientes " +
//                     "da América Latina, incluindo biomas brasileiros."
//             },

//             {
//                 icone: "🌱",
//                 titulo: "Alimentação",
//                 texto:
//                     "É um predador e alimenta-se de diferentes espécies " +
//                     "de animais."
//             },

//             {
//                 icone: "⚠️",
//                 titulo: "Ameaças",
//                 texto:
//                     "A perda e fragmentação de habitats, conflitos " +
//                     "e outras pressões humanas podem afetar a espécie."
//             }

//         ]

//     }

// };


/* ========================================
   IDENTIFICAR PRODUTO
======================================== */

const parametros =
    new URLSearchParams(window.location.search);

const idPelucia =
    parametros.get("id");
console.log (idPelucia)

const pelucia =
    pelucias[idPelucia];

    console.log (pelucia)

/* ========================================
   VERIFICAR PRODUTO
======================================== */

if (!pelucia) {

    document.querySelector("main").innerHTML = `

        <section class="produto-nao-encontrado">

            <h1>
                Pelúcia não encontrada
            </h1>

            <p>
                Não foi possível encontrar o produto solicitado.
            </p>

            <a
                href="index.html#pelucias"
                class="btn-principal"
            >
                Voltar para Pelúcias
            </a>

        </section>

    `;

    throw new Error(
        "Pelúcia não encontrada."
    );

}


/* ========================================
   ELEMENTOS
======================================== */

const imagemPelucia =
    document.getElementById("imagemPelucia");

const nomePelucia =
    document.getElementById("nomePelucia");

const categoriaPelucia =
    document.getElementById("categoriaPelucia");

const descricaoPelucia =
    document.getElementById("descricaoPelucia");

const precoPelucia =
    document.getElementById("precoPelucia");

const opcoesVersao =
    document.getElementById("opcoesVersao");

const quantidadeElemento =
    document.getElementById("quantidade");

const listaCaracteristicas =
    document.getElementById("listaCaracteristicas");

const informacoesAnimal =
    document.getElementById("informacoesAnimal");

const tituloAnimal =
    document.getElementById("tituloAnimal");

const informacoesExtra =
    document.getElementById("informacoesExtra");


/* ========================================
   ESTADO
======================================== */

let versaoSelecionada = "tecido";

let quantidade = 1;


/* ========================================
   CARRINHO
======================================== */

let carrinho =
    JSON.parse(
        localStorage.getItem("carrinhoWildTrack")
    ) || [];


/* ========================================
   FORMATAÇÃO
======================================== */

function formatarPreco(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


/* ========================================
   CARREGAR DADOS PRINCIPAIS
======================================== */

function carregarProduto() {

    document.title =
        `${pelucia.nome} | WildTrack`;


    nomePelucia.textContent =
        pelucia.nome;


    categoriaPelucia.textContent =
        pelucia.categoria;


    descricaoPelucia.textContent =
        pelucia.descricao;


    tituloAnimal.textContent =
        `Sobre o ${pelucia.animal}`;


    carregarVersoes();

    carregarCaracteristicas();

    carregarInformacoes();

    atualizarVersao();

}


/* ========================================
   CARREGAR VERSÕES
======================================== */

function carregarVersoes() {

    opcoesVersao.innerHTML = "";


    Object.entries(
        pelucia.versoes
    ).forEach(
        ([id, versao]) => {


            const botao =
                document.createElement("button");


            botao.type = "button";

            botao.classList.add(
                "opcao-versao"
            );


            if (id === versaoSelecionada) {

                botao.classList.add(
                    "selecionado"
                );

            }


            botao.dataset.tipo = id;


            const icone =
                id === "croche"
                    ? "🧶"
                    : "🧸";


            botao.innerHTML = `

                <span class="icone-versao">
                    ${icone}
                </span>

                <span class="texto-versao">

                    <strong>
                        ${versao.nome}
                    </strong>

                    <small>
                        ${formatarPreco(versao.preco)}
                    </small>

                </span>

            `;


            botao.addEventListener(
                "click",
                () => {

                    selecionarVersao(id);

                }
            );


            opcoesVersao.appendChild(
                botao
            );

        }
    );

}


/* ========================================
   SELECIONAR VERSÃO
======================================== */

function selecionarVersao(tipo) {

    versaoSelecionada =
        tipo;


    document
        .querySelectorAll(".opcao-versao")
        .forEach(botao => {

            botao.classList.remove(
                "selecionado"
            );

        });


    const botaoSelecionado =
        document.querySelector(
            `[data-tipo="${tipo}"]`
        );


    if (botaoSelecionado) {

        botaoSelecionado.classList.add(
            "selecionado"
        );

    }


    atualizarVersao();

}


/* ========================================
   ATUALIZAR VERSÃO
======================================== */

function atualizarVersao() {

    const versao =
        pelucia.versoes[
            versaoSelecionada
        ];


    if (!versao) {
        return;
    }


    imagemPelucia.style.opacity = "0";


    setTimeout(() => {

        imagemPelucia.src =
            versao.imagem;

        imagemPelucia.alt =
            `${pelucia.nome} - ${versao.nome}`;

        imagemPelucia.style.opacity = "1";

    }, 150);


    precoPelucia.textContent =
        formatarPreco(
            versao.preco
        );

}


/* ========================================
   CARACTERÍSTICAS
======================================== */

function carregarCaracteristicas() {

    listaCaracteristicas.innerHTML = "";


    pelucia.caracteristicas.forEach(
        caracteristica => {


            const card =
                document.createElement("article");


            card.classList.add(
                "caracteristica"
            );


            card.innerHTML = `

                <h3>
                    ${caracteristica.titulo}
                </h3>

                <p>
                    ${caracteristica.texto}
                </p>

            `;


            listaCaracteristicas.appendChild(
                card
            );

        }
    );

}


/* ========================================
   INFORMAÇÕES SOBRE O ANIMAL
======================================== */

function carregarInformacoes() {

    informacoesAnimal.innerHTML = "";


    pelucia.informacoes.forEach(
        informacao => {


            const card =
                document.createElement("article");


            card.innerHTML = `

                <span>
                    ${informacao.icone}
                </span>

                <h3>
                    ${informacao.titulo}
                </h3>

                <p>
                    ${informacao.texto}
                </p>

            `;


            informacoesAnimal.appendChild(
                card
            );

        }
    );

}


/* ========================================
   QUANTIDADE
======================================== */

document
    .getElementById("aumentarQuantidade")
    .addEventListener(
        "click",
        () => {

            quantidade++;

            quantidadeElemento.textContent =
                quantidade;

        }
    );


document
    .getElementById("diminuirQuantidade")
    .addEventListener(
        "click",
        () => {

            if (quantidade <= 1) {
                return;
            }

            quantidade--;

            quantidadeElemento.textContent =
                quantidade;

        }
    );


/* ========================================
   ADICIONAR AO CARRINHO
======================================== */

document
    .getElementById("adicionarCarrinho")
    .addEventListener(
        "click",
        () => {


            const versao =
                pelucia.versoes[
                    versaoSelecionada
                ];


            const produtoCarrinho = {

                id: idPelucia,

                nome: pelucia.nome,

                tipo: versao.nome,

                versaoId: versaoSelecionada,

                preco: versao.preco,

                imagem: versao.imagem,

                quantidade: quantidade

            };


            const existente =
                carrinho.find(
                    item =>
                        item.id === idPelucia &&
                        item.versaoId ===
                            versaoSelecionada
                );


            if (existente) {

                existente.quantidade +=
                    quantidade;

            } else {

                carrinho.push(
                    produtoCarrinho
                );

            }


            salvarCarrinho();

            atualizarCarrinho();

            abrirCarrinho();


            quantidade = 1;

            quantidadeElemento.textContent =
                quantidade;

        }
    );


/* ========================================
   SALVAR CARRINHO
======================================== */

function salvarCarrinho() {

    localStorage.setItem(
        "carrinhoWildTrack",
        JSON.stringify(carrinho)
    );

}


/* ========================================
   ELEMENTOS DO CARRINHO
======================================== */

const modalCarrinho =
    document.getElementById(
        "modalCarrinho"
    );

const listaCarrinho =
    document.getElementById(
        "listaCarrinho"
    );

const totalCarrinho =
    document.getElementById(
        "totalCarrinho"
    );


/* ========================================
   ATUALIZAR CARRINHO
======================================== */

function atualizarCarrinho() {

    listaCarrinho.innerHTML = "";


    if (carrinho.length === 0) {

        listaCarrinho.innerHTML = `

            <p>
                Seu carrinho está vazio.
            </p>

        `;

        totalCarrinho.textContent =
            formatarPreco(0);

        return;

    }


    let total = 0;


    carrinho.forEach(
        (item, indice) => {


            const subtotal =
                item.preco *
                item.quantidade;


            total += subtotal;


            const elemento =
                document.createElement(
                    "div"
                );


            elemento.classList.add(
                "item-carrinho"
            );


            elemento.innerHTML = `

                <div>

                    <strong>
                        ${item.nome}
                    </strong>

                    <small>
                        ${item.tipo}
                    </small>

                    <small>
                        Quantidade:
                        ${item.quantidade}
                    </small>

                </div>


                <div>

                    <strong>
                        ${formatarPreco(subtotal)}
                    </strong>

                    <button
                        class="remover-item"
                        data-indice="${indice}"
                    >
                        Remover
                    </button>

                </div>

            `;


            listaCarrinho.appendChild(
                elemento
            );

        }
    );


    totalCarrinho.textContent =
        formatarPreco(total);


    adicionarEventosRemover();

}


/* ========================================
   REMOVER ITEM
======================================== */

function adicionarEventosRemover() {

    document
        .querySelectorAll(".remover-item")
        .forEach(botao => {


            botao.addEventListener(
                "click",
                () => {


                    const indice =
                        Number(
                            botao.dataset.indice
                        );


                    carrinho.splice(
                        indice,
                        1
                    );


                    salvarCarrinho();

                    atualizarCarrinho();

                }
            );

        });

}


/* ========================================
   ABRIR CARRINHO
======================================== */

function abrirCarrinho() {

    modalCarrinho.classList.add(
        "aberto"
    );

}


/* ========================================
   FECHAR CARRINHO
======================================== */

document
    .getElementById("fecharCarrinho")
    .addEventListener(
        "click",
        () => {

            modalCarrinho.classList.remove(
                "aberto"
            );

        }
    );


/* ========================================
   PAGAMENTO
======================================== */

const modalPagamento =
    document.getElementById(
        "modalPagamento"
    );


document
    .getElementById("finalizarCompra")
    .addEventListener(
        "click",
        () => {


            if (carrinho.length === 0) {

                alert(
                    "Seu carrinho está vazio."
                );

                return;

            }


            modalCarrinho.classList.remove(
                "aberto"
            );


            modalPagamento.classList.add(
                "aberto"
            );

        }
    );


document
    .getElementById("fecharPagamento")
    .addEventListener(
        "click",
        () => {

            modalPagamento.classList.remove(
                "aberto"
            );

        }
    );


/* ========================================
   FECHAR CLICANDO FORA
======================================== */

modalCarrinho.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            modalCarrinho
        ) {

            modalCarrinho.classList.remove(
                "aberto"
            );

        }

    }
);


modalPagamento.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            modalPagamento
        ) {

            modalPagamento.classList.remove(
                "aberto"
            );

        }

    }
);


/* ========================================
   ESC
======================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            modalCarrinho.classList.remove(
                "aberto"
            );

            modalPagamento.classList.remove(
                "aberto"
            );

        }

    }
);


/* ========================================
   INICIALIZAÇÃO
======================================== */

carregarProduto();

atualizarCarrinho();