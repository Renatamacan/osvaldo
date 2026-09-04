/* ========================================
   DADOS DO PRODUTO
======================================== */

const produto = {

    nome: "Pelúcia Lobo-guará",

    tecido: {
        tipo: "Tecido comum",
        preco: 89.90,
        imagem: "./img/peluciaLoboGuaraTecido.jpeg"
    },

    croche: {
        tipo: "Crochê",
        preco: 119.90,
        imagem: "./img/peluciaLoboGuaraCroche.jpeg"
    }

};


/* ========================================
   ELEMENTOS
======================================== */

const imagemPelucia =
    document.getElementById("imagemPelucia");

const precoPelucia =
    document.getElementById("precoPelucia");

const botoesVersao =
    document.querySelectorAll(".opcao-versao");

const quantidadeElemento =
    document.getElementById("quantidade");

const aumentarQuantidade =
    document.getElementById("aumentarQuantidade");

const diminuirQuantidade =
    document.getElementById("diminuirQuantidade");

const adicionarCarrinho =
    document.getElementById("adicionarCarrinho");

const modalCarrinho =
    document.getElementById("modalCarrinho");

const fecharCarrinho =
    document.getElementById("fecharCarrinho");

const listaCarrinho =
    document.getElementById("listaCarrinho");

const totalCarrinho =
    document.getElementById("totalCarrinho");

const finalizarCompra =
    document.getElementById("finalizarCompra");

const modalPagamento =
    document.getElementById("modalPagamento");

const fecharPagamento =
    document.getElementById("fecharPagamento");


/* ========================================
   ESTADO
======================================== */

let versaoSelecionada = "tecido";

let quantidade = 1;

let carrinho = [];


/* ========================================
   FORMATAÇÃO DE PREÇO
======================================== */

function formatarPreco(valor) {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


/* ========================================
   ATUALIZAR PRODUTO
======================================== */

function atualizarProduto() {

    const versao =
        produto[versaoSelecionada];

    precoPelucia.textContent =
        formatarPreco(versao.preco);

    imagemPelucia.src =
        versao.imagem;

    imagemPelucia.alt =
        `${produto.nome} - ${versao.tipo}`;

}


/* ========================================
   SELEÇÃO DE VERSÃO
======================================== */

botoesVersao.forEach(botao => {

    botao.addEventListener("click", () => {

        versaoSelecionada =
            botao.dataset.tipo;

        botoesVersao.forEach(item => {

            item.classList.remove("selecionado");

        });

        botao.classList.add("selecionado");

        atualizarProduto();

    });

});


/* ========================================
   QUANTIDADE
======================================== */

aumentarQuantidade.addEventListener(
    "click",
    () => {

        quantidade++;

        quantidadeElemento.textContent =
            quantidade;

    }
);


diminuirQuantidade.addEventListener(
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

adicionarCarrinho.addEventListener(
    "click",
    () => {

        const versao =
            produto[versaoSelecionada];

        const itemExistente =
            carrinho.find(item =>
                item.nome === produto.nome &&
                item.tipo === versao.tipo
            );


        if (itemExistente) {

            itemExistente.quantidade +=
                quantidade;

        } else {

            carrinho.push({

                nome: produto.nome,

                tipo: versao.tipo,

                preco: versao.preco,

                quantidade: quantidade

            });

        }


        atualizarCarrinho();

        abrirCarrinho();

    }
);


/* ========================================
   ATUALIZAR CARRINHO
======================================== */

function atualizarCarrinho() {

    listaCarrinho.innerHTML = "";

    let total = 0;


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


    carrinho.forEach((item, indice) => {

        const subtotal =
            item.preco * item.quantidade;

        total += subtotal;


        const elemento =
            document.createElement("div");

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


        listaCarrinho.appendChild(elemento);

    });


    totalCarrinho.textContent =
        formatarPreco(total);


    adicionarEventosRemover();

}


/* ========================================
   REMOVER ITEM
======================================== */

function adicionarEventosRemover() {

    const botoes =
        document.querySelectorAll(
            ".remover-item"
        );


    botoes.forEach(botao => {

        botao.addEventListener(
            "click",
            () => {

                const indice =
                    Number(
                        botao.dataset.indice
                    );

                carrinho.splice(indice, 1);

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

fecharCarrinho.addEventListener(
    "click",
    () => {

        modalCarrinho.classList.remove(
            "aberto"
        );

    }
);


/* ========================================
   FINALIZAR COMPRA
======================================== */

finalizarCompra.addEventListener(
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


/* ========================================
   FECHAR PAGAMENTO
======================================== */

fecharPagamento.addEventListener(
    "click",
    () => {

        modalPagamento.classList.remove(
            "aberto"
        );

    }
);


/* ========================================
   FECHAR MODAIS CLICANDO FORA
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

atualizarProduto();
atualizarCarrinho();