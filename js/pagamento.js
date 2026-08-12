// ===========================================
// PAGAMENTO.JS
// ===========================================

// ELEMENTOS

const modalPagamento = document.getElementById("modalPagamento");

const opcoes = document.querySelectorAll(".opcao");

const pix = document.getElementById("pix");

const cartao = document.getElementById("cartao");

const fecharPagamentoBtn = document.getElementById("fecharPagamento");

// ===========================================
// ABRIR PAGAMENTO
// ===========================================

function abrirPagamento(){

    modalPagamento.classList.add("ativo");

    overlay.classList.add("ativo");

}

// ===========================================
// FECHAR PAGAMENTO
// ===========================================

function fecharPagamento(){

    modalPagamento.classList.remove("ativo");

    overlay.classList.remove("ativo");

    pix.classList.remove("ativo");

    cartao.classList.remove("ativo");

    opcoes.forEach(opcao=>{

        opcao.classList.remove("ativo");

    });

}

// ===========================================
// ESCOLHER PAGAMENTO
// ===========================================

opcoes.forEach(botao=>{

    botao.addEventListener("click",()=>{

        opcoes.forEach(item=>{

            item.classList.remove("ativo");

        });

        botao.classList.add("ativo");

        pix.classList.remove("ativo");

        cartao.classList.remove("ativo");

        const tipo = botao.dataset.pagamento;

        if(tipo === "pix"){

            pix.classList.add("ativo");

        }

        else if(tipo === "agiotagem"){
            alert("Em breve!")
        }

        else if(tipo === "mercado-negro"){
            alert("A compra só pode ser realizada presencialmente.")
        }

        else{

            cartao.classList.add("ativo");

        }

    });

});

// ===========================================
// FECHAR
// ===========================================

fecharPagamentoBtn.addEventListener(

    "click",

    fecharPagamento

);

// ===========================================
// COPIAR PIX
// ===========================================

const botaoPix = document.querySelector("#pix button");

const codigoPix = document.querySelector("#pix input");

if(botaoPix){

    botaoPix.addEventListener("click",()=>{

        navigator.clipboard.writeText(

            codigoPix.value

        );

        botaoPix.textContent = "Código Copiado!";

        setTimeout(()=>{

            botaoPix.textContent = "Copiar Código";

        },2000);

    });

}

// ===========================================
// VALIDAR CARTÃO
// ===========================================

const confirmarCartao = document.querySelector("#cartao button");

if(confirmarCartao){

    confirmarCartao.addEventListener("click",()=>{

        const campos = document.querySelectorAll(

            "#cartao input"

        );

        let valido = true;

        campos.forEach(campo=>{

            if(campo.value.trim() === ""){

                campo.style.borderColor = "red";

                valido = false;

            }

            else{

                campo.style.borderColor = "#E2E8F0";

            }

        });

        if(!valido){

            alert("Preencha todos os campos.");

            return;

        }

        finalizarCompra();

    });

}

// ===========================================
// CONFIRMAR PIX
// ===========================================

if(botaoPix){

    botaoPix.insertAdjacentHTML(

        "afterend",

        `

        <button

            id="confirmarPix"

            class="btn-verde"

            style="margin-top:15px;"

        >

            Já Efetuei o Pagamento

        </button>

        `

    );

}

const confirmarPix = document.getElementById("confirmarPix");

if(confirmarPix){

    confirmarPix.addEventListener(

        "click",

        finalizarCompra

    );

}

// ===========================================
// FINALIZAR
// ===========================================

function finalizarCompra(){

    const total = calcularTotal();

    localStorage.removeItem(CHAVE_CARRINHO);

    atualizarCarrinho();

    fecharPagamento();

    fecharCarrinho();

    alert(

`🎉 Compra realizada com sucesso!

Valor total:

R$ ${total.toFixed(2).replace(".",",")}

Obrigado por contribuir com a preservação da fauna!

Seu pedido foi registrado.`

    );

}

// ===========================================
// ESC
// ===========================================

document.addEventListener("keydown",(evento)=>{

    if(evento.key === "Escape"){

        fecharPagamento();

        fecharCarrinho();

    }

});