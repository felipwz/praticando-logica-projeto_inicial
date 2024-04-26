let listaDeNumerosSorteados = [];
let numeroLimte = 10;
let numeroSecreto = geraNumeroSecreto();
let tentativas = 1;
carregaMensagens();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelect(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function carregaMensagens() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 e 10');

}


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tetativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }

        tentativas++;
        limparCampo();

    }
}

function geraNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimte + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNalista == numeroLimte){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return geraNumeroSecreto(); 
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = geraNumeroSecreto();
    console.log(numeroSecreto);
    carregaMensagens();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

