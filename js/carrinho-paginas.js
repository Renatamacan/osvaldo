/* ======================================
   PÁGINA DO CARRINHO — WILDTRACK
====================================== */

(() => {
    "use strict";

    const API = window.WildTrackCarrinho;

    if (!API) {
        console.error("O carrinho global não foi carregado.");
        return;
    }

    const lista = document.querySelector("#lista-carrinho");
    const contador = document.querySelector("#quantidade-produtos");
    const resumoQuantidade = document.querySelector("#resumo-quantidade");
    const subtotal = document.querySelector("#subtotal");
    const total = document.querySelector("#total-carrinho");
    const totalPagamento = document.querySelector("#total-pagamento");
    const botaoFinalizar = document.querySelector("#botao-finalizar");
    const areaPagamento = document.querySelector("#area-pagamento");
    const formPagamento = document.querySelector("#form-pagamento");
    const mensagem = document.querySelector("#mensagem-pagamento");

    let itens = API.obterItens();

    function criar(tag, classe, texto) {
        const elemento = document.createElement(tag);

        if (classe) elemento.className = classe;
        if (texto !== undefined) elemento.textContent = texto;

        return elemento;
    }

    function salvarEAtualizar() {
        if (!API.salvarItens(itens)) {
            itens = API.obterItens();
            alert("Não foi possível atualizar o carrinho.");
        }

        renderizar();
    }

    function alterarQuantidade(id, variacao) {
        itens = itens.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantidade: item.quantidade + variacao
                };
            }

            return item;
        }).filter(item => item.quantidade > 0);

        salvarEAtualizar();
    }

    function remover(id) {
        itens = itens.filter(item => item.id !== id);
        salvarEAtualizar();
    }

    function renderizar() {
        lista.replaceChildren();

        const quantidade = itens.reduce(
            (soma, item) => soma + item.quantidade,
            0
        );

        const valorTotal = itens.reduce(
            (soma, item) => soma + item.preco * item.quantidade,
            0
        );

        contador.textContent = `${quantidade} ${quantidade === 1 ? "item" : "itens"}`;
        resumoQuantidade.textContent = quantidade;
        subtotal.textContent = API.formatarMoeda(valorTotal);
        total.textContent = API.formatarMoeda(valorTotal);
        totalPagamento.textContent = API.formatarMoeda(valorTotal);

        botaoFinalizar.disabled = itens.length === 0;

        if (itens.length === 0) {
            const vazio = criar(
                "div",
                "carrinho-vazio-pagina",
                "Seu carrinho está vazio. Explore as pulseiras e pelúcias para escolher seus produtos."
            );

            lista.appendChild(vazio);
        }

        itens.forEach(item => {
            const linha = criar("article", "produto-carrinho-pagina");

            const imagem = document.createElement("img");
            imagem.src = item.imagem || "./img/sem-imagem.png";
            imagem.alt = item.nome;
            imagem.loading = "lazy";

            imagem.addEventListener("error", () => {
                imagem.removeAttribute("src");
                imagem.alt = "Imagem indisponível";
            }, { once: true });

            const dados = criar("div", "dados-produto");

            dados.appendChild(criar("h3", "", item.nome));
            dados.appendChild(criar("p", "", `Categoria: ${item.tipo}`));

            if (item.versao) {
                dados.appendChild(criar("p", "", `Versão: ${item.versao}`));
            }

            if (item.caracteristicas) {
                dados.appendChild(criar("p", "", item.caracteristicas));
            }

            dados.appendChild(
                criar("p", "preco-produto",
                    `${API.formatarMoeda(item.preco)} por unidade`)
            );

            const controles = criar("div", "controles-quantidade");

            const menos = criar("button", "", "−");
            menos.type = "button";
            menos.setAttribute("aria-label", `Diminuir ${item.nome}`);
            menos.addEventListener("click", () => alterarQuantidade(item.id, -1));

            const numero = criar("span", "", String(item.quantidade));

            const mais = criar("button", "", "+");
            mais.type = "button";
            mais.setAttribute("aria-label", `Aumentar ${item.nome}`);
            mais.addEventListener("click", () => alterarQuantidade(item.id, 1));

            controles.append(menos, numero, mais);
            dados.appendChild(controles);

            const removerBotao = criar("button", "remover-produto", "Remover");
            removerBotao.type = "button";
            removerBotao.addEventListener("click", () => remover(item.id));
            dados.appendChild(removerBotao);

            const valorItem = criar(
                "div",
                "subtotal-produto",
                API.formatarMoeda(item.preco * item.quantidade)
            );

            linha.append(imagem, dados, valorItem);
            lista.appendChild(linha);
        });
    }

    botaoFinalizar.addEventListener("click", () => {
        if (itens.length === 0) return;

        areaPagamento.hidden = false;
        mensagem.textContent = "";

        areaPagamento.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    document.querySelector("#voltar-resumo")
        .addEventListener("click", () => {
            areaPagamento.hidden = true;
            mensagem.textContent = "";
        });

    formPagamento.addEventListener("submit", evento => {
        evento.preventDefault();

        if (itens.length === 0) {
            mensagem.textContent = "Adicione produtos antes de continuar.";
            return;
        }

        const selecionado = formPagamento.querySelector(
            'input[name="pagamento"]:checked'
        );

        if (!selecionado) {
            mensagem.textContent = "Selecione uma forma de pagamento.";
            return;
        }

        mensagem.textContent =
            `Você selecionou ${selecionado.value}. ` +
            "Esta demonstração não realiza cobranças nem registra um pedido real.";
    });

    renderizar();

})();