/* ======================================
   CARRINHO GLOBAL — WILDTRACK
====================================== */

(() => {
    "use strict";

    const CHAVE = "carrinhoWildTrack";

    const paginaAtual = window.location.pathname
        .split("/")
        .filter(Boolean)
        .pop() || "index.html";

    const paginasComAdicao = [
        "index.html",
        "pulseiras.html",
        "pelucia.html"
    ];

    const moeda = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    function carregar() {
        try {
            const dados = JSON.parse(
                localStorage.getItem(CHAVE) || "[]"
            );

            if (!Array.isArray(dados)) return [];

            return dados.filter(item =>
                item &&
                typeof item.id === "string" &&
                typeof item.nome === "string" &&
                typeof item.preco === "number" &&
                Number.isFinite(item.preco) &&
                item.preco >= 0 &&
                Number.isInteger(item.quantidade) &&
                item.quantidade > 0
            );
        } catch {
            return [];
        }
    }

    function salvar() {
        try {
            localStorage.setItem(CHAVE, JSON.stringify(carrinho));
            return true;
        } catch {
            alert("Não foi possível salvar o carrinho neste navegador.");
            return false;
        }
    }

    let carrinho = carregar();

    function quantidadeTotal() {
        return carrinho.reduce(
            (total, item) => total + item.quantidade,
            0
        );
    }

    function atualizarContadores() {
        document.querySelectorAll("[data-cart-count], #contador-menu")
            .forEach(elemento => {
                elemento.textContent = quantidadeTotal();
            });
    }

    /* Botão global: abre a página do carrinho */

    function criarAcessoCarrinho() {
        if (document.querySelector("[data-cart-link]")) return;

        const botao = document.createElement("a");

        botao.href = "pages/carrinho.html";
        botao.className = "botao-carrinho-global";
        botao.dataset.cartLink = "";
        botao.setAttribute("aria-label", "Abrir carrinho");

        const icone = document.createElement("span");
        icone.textContent = "🛒";

        const texto = document.createElement("span");
        texto.textContent = "Meu carrinho";

        const contador = document.createElement("span");
        contador.className = "contador-carrinho";
        contador.dataset.cartCount = "";
        contador.textContent = quantidadeTotal();

        botao.append(icone, texto, contador);
        document.body.appendChild(botao);
    }

    /*
      A adição só é aceita nas páginas autorizadas.
      O carrinho não é finalizado por este arquivo.
    */

    function adicionarProduto(dados) {
        if (!paginasComAdicao.includes(paginaAtual)) {
            return;
        }

        const idProduto = dados.id;
        const nome = dados.nome;
        const tipo = dados.tipo;
        const versao = dados.versao || "";
        const preco = Number(dados.preco);

        if (
            !idProduto ||
            !nome ||
            !tipo ||
            !Number.isFinite(preco) ||
            preco < 0
        ) {
            alert("Não foi possível adicionar este produto.");
            return;
        }

        const id = `${idProduto}::${versao}`;

        const existente = carrinho.find(item => item.id === id);

        if (existente) {
            existente.quantidade += 1;
        } else {
            carrinho.push({
                id,
                produtoId: idProduto,
                nome,
                tipo,
                versao,
                preco,
                imagem: dados.imagem || "",
                caracteristicas: dados.caracteristicas || "",
                quantidade: 1
            });
        }

        if (!salvar()) {
            carrinho = carregar();
            atualizarContadores();
            return;
        }

        atualizarContadores();

        // Adicionar não finaliza a compra.
        window.location.href = "pages/carrinho.html";
    }

    document.addEventListener("click", evento => {
        const botao = evento.target.closest("[data-cart-add]");

        if (!botao) return;

        if (!paginasComAdicao.includes(paginaAtual)) {
            return;
        }

        adicionarProduto({
            id: botao.dataset.productId,
            nome: botao.dataset.name,
            tipo: botao.dataset.type,
            versao: botao.dataset.variant,
            preco: botao.dataset.price,
            imagem: botao.dataset.image,
            caracteristicas: botao.dataset.characteristics
        });
    });

    /*
      Disponibiliza operações para a página do carrinho.
    */

    window.WildTrackCarrinho = {
        obterItens() {
            return carregar();
        },

        salvarItens(novosItens) {
            if (!Array.isArray(novosItens)) return false;

            const anteriores = carrinho;
            carrinho = novosItens;

            if (!salvar()) {
                carrinho = anteriores;
                return false;
            }

            atualizarContadores();
            return true;
        },

        formatarMoeda(valor) {
            return moeda.format(valor);
        },

        atualizarContadores
    };

    criarAcessoCarrinho();
    atualizarContadores();

})();