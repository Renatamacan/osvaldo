/* IDENTIFICAR PRODUTO POR ID */

const parametros = new URLSearchParams(window.location.search);

const idPelucia = parametros.get("id");

const pelucia = pelucias[idPelucia];


/* VERIFICAR SE PRODUTO EXISTE NO BANCO DE DADOS */

if (!pelucia) {

    document.querySelector("main").innerHTML = `
        <section class="produto-nao-encontrado">

            <h1>Pelúcia não encontrada</h1>

            <p>Não foi possível encontrar o produto solicitado.</p>

            <a href="index.html#pelucias" class="btn-principal">Voltar para Pelúcias</a>

        </section>
    `;

    throw new Error(
        "Pelúcia não encontrada."
    );

}


/* ELEMENTOS DA PELÚCIA */

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


/* TIPO DE TECIDO E QUANTIDADE */

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
        `Sobre ${pelucia.animal}`;


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
                <span class="icone-versao">${icone}</span>

                <span class="texto-versao">

                    <strong>${versao.nome}</strong>

                    <small>${formatarPreco(versao.preco)}</small>

                </span>
            `;

            botao.addEventListener("click", () => {
                    selecionarVersao(id);
                }
            );

            opcoesVersao.appendChild(botao);

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

        imagemPelucia.src = `../../../img/pelucias/${versaoSelecionada}/` + 
            pelucia.versoes[versaoSelecionada].imagem;

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

                categoria: "Pelúcia",

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

// CARREGAR PELÚCIA NA PÁGINA
carregarProduto();
