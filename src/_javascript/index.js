// 
/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado


*/
//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarroseul = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll('.imagem');

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarroseul.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
       //- passo 3 - desmarcar o botão selecionado anterior  
       desativarBotaoSelecionado();

       //- passo 4 - marcar o botão clicado como se estivesse selecionada
       newFunction(botao); 

       //- passo 5 - esconder a imagem anterior
       EscoderImagensAnterior();

       // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostraimagensdefundo(indice);
    })
})

function mostraimagensdefundo(indice) {
    imagens[indice].classList.add('ativa');
}

function newFunction(botao) {
    botao.classList.add('selecionado');
}

function EscoderImagensAnterior() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
