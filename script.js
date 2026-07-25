const buttons = document.querySelectorAll(".filtros button");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelector(".ativo")
            .classList.remove("ativo");

        button.classList.add("ativo");

        const filtro = button.dataset.filter;

        cards.forEach(card => {

            if (
                filtro === "all" ||
                card.dataset.category === filtro
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

const botoes = document.querySelectorAll(".card button");

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        alert("Em breve você poderá acompanhar um animal real com esta pulseira!");

    });

});