// ===========================================
// CARRINHO.JS
// ===========================================

const CHAVE_CARRINHO = "wildtrack_carrinho";

// ===========================================
// ELEMENTOS
// ===========================================

const modalCarrinho = document.getElementById("modalCarrinho");

const overlay = document.getElementById("overlay");

const listaCarrinho = document.getElementById("listaCarrinho");

const valorTotal = document.getElementById("valorTotal");

const contadorCarrinho = document.getElementById("contadorCarrinho");

const abrirBtn = document.getElementById("abrirCarrinho");

const fecharBtn = document.getElementById("fecharCarrinho");

const finalizarBtn = document.getElementById("finalizarCompra");

// ===========================================
// LOCAL STORAGE
// ===========================================

function obterCarrinho(){

    return JSON.parse(
        localStorage.getItem(CHAVE_CARRINHO)
    ) || [];

}

function salvarCarrinho(lista){

    localStorage.setItem(

        CHAVE_CARRINHO,

        JSON.stringify(lista)

    );

}

// ===========================================
// ADICIONAR ITEM
// ===========================================

function adicionarAoCarrinho(produto, quantidade){

    let carrinho = obterCarrinho();

    const existente = carrinho.find(

        item => item.id === produto.id

    );

    if(existente){

        existente.quantidade += quantidade;

    }

    else{

        carrinho.push({

            id: produto.id,

            nome: produto.nome,

            imagem: produto.imagem,

            preco: produto.preco,

            quantidade: quantidade

        });

    }

    salvarCarrinho(carrinho);

    atualizarCarrinho();

}

// ===========================================
// REMOVER ITEM
// ===========================================

function removerItem(id){

    let carrinho = obterCarrinho();

    carrinho = carrinho.filter(

        item => item.id !== id

    );

    salvarCarrinho(carrinho);

    atualizarCarrinho();

}

// ===========================================
// ALTERAR QUANTIDADE
// ===========================================

function alterarQuantidade(id, valor){

    let carrinho = obterCarrinho();

    carrinho.forEach(item=>{

        if(item.id === id){

            item.quantidade += valor;

            if(item.quantidade < 1){

                item.quantidade = 1;

            }

        }

    });

    salvarCarrinho(carrinho);

    atualizarCarrinho();

}

// ===========================================
// TOTAL
// ===========================================

function calcularTotal(){

    let total = 0;

    obterCarrinho().forEach(item=>{

        total += item.preco * item.quantidade;

    });

    return total;

}

// ===========================================
// CONTADOR
// ===========================================

function atualizarContador(){

    let quantidade = 0;

    obterCarrinho().forEach(item=>{

        quantidade += item.quantidade;

    });

    contadorCarrinho.textContent = quantidade;

}

// ===========================================
// LISTA
// ===========================================

function atualizarCarrinho(){

    const carrinho = obterCarrinho();

    listaCarrinho.innerHTML = "";

    if(carrinho.length === 0){

        listaCarrinho.innerHTML = `

            <p class="carrinho-vazio">

                Seu carrinho está vazio.

            </p>

        `;

    }

    else{

        carrinho.forEach(item=>{

            listaCarrinho.innerHTML += `

                <div class="item-carrinho">

                    <img
                        src="${item.imagem}"
                        alt="${item.nome}"
                    >

                    <div class="info-item">

                        <h3>

                            ${item.nome}

                        </h3>

                        <p>

                            R$ ${item.preco
                            .toFixed(2)
                            .replace(".",",")}

                        </p>

                        <div class="controles">

                            <button
                                onclick="alterarQuantidade(${item.id},-1)"
                            >

                                -

                            </button>

                            <span>

                                ${item.quantidade}

                            </span>

                            <button
                                onclick="alterarQuantidade(${item.id},1)"
                            >

                                +

                            </button>

                        </div>

                        <button

                            class="btn-remover"

                            onclick="removerItem(${item.id})"

                        >

                            Remover

                        </button>

                    </div>

                </div>

            `;

        });

    }

    valorTotal.textContent =

        "R$ " +

        calcularTotal()

        .toFixed(2)

        .replace(".",",");

    atualizarContador();

}

// ===========================================
// MODAL
// ===========================================

function abrirCarrinho(){

    modalCarrinho.classList.add("ativo");

    overlay.classList.add("ativo");

}

function fecharCarrinho(){

    modalCarrinho.classList.remove("ativo");

    overlay.classList.remove("ativo");

}

// ===========================================
// EVENTOS
// ===========================================

if(abrirBtn){

    abrirBtn.addEventListener(

        "click",

        abrirCarrinho

    );

}

if(fecharBtn){

    fecharBtn.addEventListener(

        "click",

        fecharCarrinho

    );

}

if(overlay){

    overlay.addEventListener(

        "click",

        ()=>{

            fecharCarrinho();

            if(typeof fecharPagamento === "function"){

                fecharPagamento();

            }

        }

    );

}

// ===========================================
// FINALIZAR
// ===========================================

if(finalizarBtn){

    finalizarBtn.addEventListener(

        "click",

        ()=>{

            if(obterCarrinho().length === 0){

                alert("Seu carrinho está vazio.");

                return;

            }

            abrirPagamento();

        }

    );

}

// ===========================================
// INICIALIZAÇÃO
// ===========================================

atualizarCarrinho();