// =========================================================
// WILDTRACK — MISSÕES
// =========================================================


// =========================================================
// NAVEGAÇÃO SUAVE
// =========================================================

const linksInternos = document.querySelectorAll(
    'a[href^="#"]'
);

linksInternos.forEach(link => {

    link.addEventListener("click", function(event) {

        const destino = this.getAttribute("href");

        if(destino === "#") {

            return;

        }

        const elemento = document.querySelector(destino);

        if(!elemento) {

            return;

        }

        event.preventDefault();

        elemento.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


// =========================================================
// ANIMAÇÃO AO ENTRAR NA TELA
// =========================================================

const elementosAnimados = document.querySelectorAll(
    ".passo, .acao-card, .etapa-projeto, .sinal"
);


const observador = new IntersectionObserver(

    (elementos) => {

        elementos.forEach((elemento) => {

            if(elemento.isIntersecting) {

                elemento.target.classList.add("visivel");

                observador.unobserve(elemento.target);

            }

        });

    },

    {

        threshold: 0.15

    }

);


elementosAnimados.forEach(elemento => {

    observador.observe(elemento);

});


// =========================================================
// ATRASO DAS ANIMAÇÕES
// =========================================================

elementosAnimados.forEach((elemento, indice) => {

    elemento.style.animationDelay =
        `${indice * 0.08}s`;

});


// =========================================================
// MENU — SEÇÃO ATUAL
// =========================================================

const secoes = document.querySelectorAll(
    "main section[id]"
);

const linksMenu = document.querySelectorAll(
    ".topo-missoes nav a[href^='#']"
);


function atualizarMenu() {

    let secaoAtual = "";

    const posicaoAtual =
        window.scrollY + 180;


    secoes.forEach(secao => {

        const inicio = secao.offsetTop;

        const altura = secao.offsetHeight;


        if(

            posicaoAtual >= inicio &&

            posicaoAtual < inicio + altura

        ) {

            secaoAtual = secao.id;

        }

    });


    linksMenu.forEach(link => {

        link.classList.remove("ativo");

        const destino =
            link.getAttribute("href");


        if(destino === `#${secaoAtual}`) {

            link.classList.add("ativo");

        }

    });

}


window.addEventListener(

    "scroll",

    atualizarMenu

);


atualizarMenu();


// =========================================================
// BOTÃO VOLTAR AO TOPO
// =========================================================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.classList.add("botao-topo");

botaoTopo.setAttribute(

    "aria-label",

    "Voltar ao topo"

);


document.body.appendChild(botaoTopo);


// =========================================================
// APARECER / DESAPARECER BOTÃO
// =========================================================

function controlarBotaoTopo() {

    if(window.scrollY > 500) {

        botaoTopo.classList.add("visivel");

    }

    else {

        botaoTopo.classList.remove("visivel");

    }

}


window.addEventListener(

    "scroll",

    controlarBotaoTopo

);


// =========================================================
// VOLTAR AO TOPO
// =========================================================

botaoTopo.addEventListener(

    "click",

    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

);


// =========================================================
// ACESSIBILIDADE
// =========================================================

document.addEventListener(

    "keydown",

    event => {

        if(event.key === "Escape") {

            document.activeElement.blur();

        }

    }

);


// =========================================================
// LOG DE INICIALIZAÇÃO
// =========================================================

console.log(

    "WildTrack — Página de Missões carregada."

);