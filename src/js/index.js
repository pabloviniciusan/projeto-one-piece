// OBJETIVO 1 - quando clicar no bot'ao do personage na lista, marcar o botao como selecionado
// passo 1 - pegar os botoes no JS pra poder verificar quando o usuario clicar em cima de um deles
const botoes = document.querySelectorAll(".botao");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        //passo 3 - verificar se ja existe um botao selecionado, se sim, devemos remover a selecao dele
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        //passo 2 - adicionar a classe "selecionado" no botao que o usuario clicou
        botao.classList.add("selecionado");
    });
});

//OBJETIVOS 2 - quando clicar no botao do personagem mostrar as informacoes do personagem
//passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();

        botao.classList.add("selecionado");

        //passo 3 - verificar se ja existe um personagem selecionado, se sim, devemos remover a selecao dele
        desselecionarPersonagem();

        //passo 2 - adicionar a classe "selecionado"  no personagem que o usuario selecionou
        personagens[indice].classList.add("selecionado");

    });
});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

