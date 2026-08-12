const buttons = document.querySelectorAll(".filtros button");
const cards = document.querySelectorAll(".card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".ativo").classList.remove("ativo");

    button.classList.add("ativo");

    const filtro = button.dataset.filter;

    cards.forEach((card) => {
      if (filtro === "all" || card.dataset.category === filtro) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const botoes = document.querySelectorAll(".card button");

/*novo código*/

// ===============================
// ELEMENTOS
// ===============================

const modalCarrinho = document.getElementById("modalCarrinho");
const abrirCarrinho = document.getElementById("abrirCarrinho");
const fecharCarrinho = document.getElementById("fecharCarrinho");

const listaCarrinho = document.getElementById("listaCarrinho");

const contadorCarrinho = document.getElementById("contadorCarrinho");

const totalCarrinho = document.getElementById("totalCarrinho");

const botoesCarrinho = document.querySelectorAll(".addCarrinho");

const modalPagamento = document.getElementById("modalPagamento");

const finalizarCompra = document.getElementById("finalizarCompra");

const confirmarCompra = document.getElementById("confirmarCompra");

// ===============================
// CARRINHO
// ===============================

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
console.log (carrinho)

// ===============================
// SALVAR
// ===============================

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// ===============================
// CONTADOR
// ===============================

function atualizarContador() {
  contadorCarrinho.textContent = carrinho.length;
}

// ===============================
// TOTAL
// ===============================

function calcularTotal() {
  let total = 0;

  carrinho.forEach((produto) => {
    total += Number (produto.preco * 1000);
    console.log (total)
  });

  totalCarrinho.textContent = "US$ " + Number(total)
}

// ===============================
// RENDERIZAR
// ===============================

function renderizarCarrinho() {
  listaCarrinho.innerHTML = "";

  if (carrinho.length === 0) {
    listaCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
  }

  carrinho.forEach((produto, index) => {
    const item = document.createElement("div");

    item.classList.add("itemCarrinho");

    item.innerHTML = `

            <div>

                <strong>${produto.nome}</strong>

                <br>

                US$ ${produto.preco}

            </div>

            <button onclick="removerProduto(${index})">

                ✖

            </button>

        `;

    listaCarrinho.appendChild(item);
  });

  atualizarContador();

  calcularTotal();

  salvarCarrinho();
}

// ===============================
// REMOVER
// ===============================

function removerProduto(indice) {
  carrinho.splice(indice, 1);

  renderizarCarrinho();
}

// ===============================
// ADICIONAR
// ===============================

botoesCarrinho.forEach((botao) => {
  botao.addEventListener("click", () => {
    const produto = {
      nome: botao.dataset.nome,

      preco: botao.dataset.preco,
    };

    carrinho.push(produto);

    renderizarCarrinho();

    modalCarrinho.classList.add("ativo");
  });
});

// ===============================
// MODAL CARRINHO
// ===============================

abrirCarrinho.addEventListener("click", () => {
  modalCarrinho.classList.add("ativo");
});

fecharCarrinho.addEventListener("click", () => {
  modalCarrinho.classList.remove("ativo");
});

// ===============================
// PAGAMENTO
// ===============================

finalizarCompra.addEventListener("click", () => {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");

    return;
  }

  modalPagamento.classList.add("ativo");
});

// ===============================
// CONFIRMAR
// ===============================

confirmarCompra.addEventListener("click", () => {
  const pagamento = document.querySelector("input[name='pagamento']:checked");

  if (!pagamento) {
    alert("Escolha uma forma de pagamento.");

    return;
  }

  alert("Compra realizada com sucesso!");

  carrinho = [];

  renderizarCarrinho();

  modalPagamento.classList.remove("ativo");

  modalCarrinho.classList.remove("ativo");
});

// ===============================
// FECHAR MODAL
// ===============================

modalPagamento.addEventListener("click", (evento) => {
  if (evento.target === modalPagamento) {
    modalPagamento.classList.remove("ativo");
  }
});

// ===============================
// INICIAR
// ===============================

renderizarCarrinho();
