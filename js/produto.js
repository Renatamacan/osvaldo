// ===========================================
// PRODUTO.JS
// ===========================================

const parametros = new URLSearchParams(window.location.search);

const idProduto = Number(parametros.get("id"));

const produto = produtos.find(item => item.id === idProduto);

// Caso o produto não exista

if(!produto){

    alert("Produto não encontrado.");

    window.location.href = "index.html";

}

// ===========================================
// ELEMENTOS
// ===========================================

const imagemProduto = document.getElementById("imagemProduto");

const categoriaProduto = document.getElementById("categoriaProduto");

const nomeProduto = document.getElementById("nomeProduto");

const statusProduto = document.getElementById("statusProduto");

const precoProduto = document.getElementById("precoProduto");

const descricaoProduto = document.getElementById("descricaoProduto");

const listaCaracteristicas = document.getElementById("listaCaracteristicas");

const quantidade = document.getElementById("qtd");

const btnMais = document.getElementById("mais");

const btnMenos = document.getElementById("menos");

const btnCarrinho = document.getElementById("btnCarrinho");

const btnComprar = document.getElementById("btnComprar");

const relacionados = document.getElementById("produtosRelacionados");

// ===========================================
// QUANTIDADE
// ===========================================

let qtd = 1;

quantidade.textContent = qtd;

btnMais.addEventListener("click",()=>{

    if(qtd < produto.estoque){

        qtd++;

        quantidade.textContent = qtd;

    }

});

btnMenos.addEventListener("click",()=>{

    if(qtd > 1){

        qtd--;

        quantidade.textContent = qtd;

    }

});

// ===========================================
// CARREGAR PRODUTO
// ===========================================

function carregarProduto(){

    document.title = produto.nome + " | WildTrack";

    imagemProduto.src = produto.imagem;

    imagemProduto.alt = produto.nome;

    categoriaProduto.textContent = produto.categoria;

    nomeProduto.textContent = produto.nome;

    statusProduto.textContent = produto.status;

    precoProduto.textContent =
        "R$ " +
        produto.preco
        .toFixed(2)
        .replace(".",",");

    descricaoProduto.textContent =
        produto.descricao;

    listaCaracteristicas.innerHTML = "";

    produto.detalhes.forEach(item=>{

        listaCaracteristicas.innerHTML += `

            <li>${item}</li>

        `;

    });

}

carregarProduto();

// ===========================================
// PRODUTOS RELACIONADOS
// ===========================================

function carregarRelacionados(){

    relacionados.innerHTML = "";

    const lista = produtos

        .filter(item =>

            item.id !== produto.id &&

            item.categoria === produto.categoria

        )

        .slice(0,4);

    lista.forEach(item=>{

        relacionados.innerHTML += `

            <div class="card">

                <img
                    src="${item.imagem}"
                    alt="${item.nome}"
                >

                <h3>

                    ${item.nome}

                </h3>

                <p>

                    ${item.descricao.substring(0,65)}...

                </p>

                <div class="preco">

                    R$ ${item.preco
                    .toFixed(2)
                    .replace(".",",")}

                </div>

                <button
                    onclick="abrirProduto(${item.id})"
                    class="btn-verde"
                >

                    Ver Produto

                </button>

            </div>

        `;

    });

}

carregarRelacionados();

// ===========================================
// ABRIR PRODUTO
// ===========================================

function abrirProduto(id){

    window.location.href =
        `./pages/produto.html?id=${id}`;

}

// ===========================================
// CARRINHO
// ===========================================

btnCarrinho.addEventListener("click",()=>{

    adicionarAoCarrinho(produto,qtd);

});

// ===========================================
// COMPRAR AGORA
// ===========================================

btnComprar.addEventListener("click",()=>{

    adicionarAoCarrinho(produto,qtd);

    abrirCarrinho();

});

// ===========================================
// ESTOQUE
// ===========================================

if(produto.estoque <= 0){

    btnCarrinho.disabled = true;

    btnComprar.disabled = true;

    btnCarrinho.textContent = "Indisponível";

    btnComprar.style.display = "none";

}

// ===========================================
// BADGE DE ALERTA
// ===========================================

switch(produto.status){

    case "Em perigo":

        statusProduto.style.background = "#D32F2F";

        break;

    case "Vulnerável":

        statusProduto.style.background = "#F57C00";

        break;

    case "Quase ameaçado":

        statusProduto.style.background = "#FBC02D";

        statusProduto.style.color = "#222";

        break;

    default:

        statusProduto.style.background =
        "#2E7D32";

}

// ===========================================
// ANIMAÇÃO
// ===========================================

window.addEventListener("load",()=>{

    document.querySelector(".produto")
    .classList.add("fade");

});