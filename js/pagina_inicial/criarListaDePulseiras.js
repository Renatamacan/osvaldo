// Busca elemento da lista de pulseiras no HTMl
const lista = document.getElementById("listaProdutos");

// Faz um loop pela lista de pulseiras, e cria os elementos de cada pulseira no HTML
pulseiras.forEach((pulseira) => {
    lista.innerHTML += `
        <div class="card">

            <img
                src="/img/pulseiras/${pulseira.imagem}"
                alt="${pulseira.nome}"
            >

            <div class="card-body">

                <span class="categoria">${pulseira.categoria}</span>

                <h3>${pulseira.nome}</h3>

                <p>${pulseira.descricao.substring(0, 90)}...</p>

                <div class="status">${pulseira.status}</div>

                <div class="rodape-card">

                    <span class="preco">
                    R$ ${pulseira.preco.toFixed(2).replace(".", ",")}
                    </span>

                    <a 
                    href="./pages/produto/produto.html?id=${pulseira.id}" class="btn-card acoes"
                    >
                    Ver Produto
                    </a>

                </div>

            </div>

        </div>
    `;
});
