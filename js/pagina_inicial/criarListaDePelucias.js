// Busca elemento da lista de pelúcias no HTML
const listaPelucias = document.getElementById("listaPelucias");

// Faz um loop pelo objeto das pelúcias, e cria os elementos de cada pelúcia no HTML
for (let i = 0; i < Object.keys(pelucias).length; i++) {

    const chaveAtual = Object.keys(pelucias)[i];
    const peluciaAtual = pelucias[chaveAtual];
    const nomePelucia = peluciaAtual.nome;
    const animalPelucia = peluciaAtual.animal;
    const categoriaPelucia = peluciaAtual.categoria;
    const descricaoPelucia = peluciaAtual.descricao;
    const versoesPelucia = peluciaAtual.versoes;

    listaPelucias.innerHTML += `
        <div class="card">

            <img 
                src="./img/pelucias/tecido/${versoesPelucia.tecido.imagem}" alt="${nomePelucia}"
            >

            <div class="card-body">

                <span class="categoria">${categoriaPelucia}</span>

                <h3>${nomePelucia}</h3>

                <div class="rodape-card">

                    <span class="preco">
                        R$ ${versoesPelucia.tecido.preco.toFixed(2).replace(".", ",")}
                    </span>

                    <a 
                        href="./pages/produtos/pelucia.html?id=${chaveAtual}" 
                        class="btn-card"
                    >
                        Ver Produto
                    </a>

                </div>

            </div>

        </div>
    `;
}    