let quantidadeIngressoPista = 100;
let quantidadeIngressoCadeiraSuperior = 200;
let quantidadeIngressoCadeiraInferior = 400;

let campoQuantidadePista = document.getElementById('qtd-pista');
let campoQuantidadeCadeiraSuperior = document.getElementById('qtd-superior');
let campoQuantidadeCadeiraInferior = document.getElementById('qtd-inferior');

campoQuantidadePista.innerHTML = `<li>Pista<span id="qtd-pista">${quantidadeIngressoPista}</span></li>`;
campoQuantidadeCadeiraSuperior.innerHTML = `<li>Cadeira Superior<span id="qtd-superior">${quantidadeIngressoCadeiraSuperior}</span></li>`;

campoQuantidadeCadeiraInferior.innerHTML = `<li>Cadeira inferior<span id="qtd-inferior">${quantidadeIngressoCadeiraInferior}</span></li>`;


function comprar() {
    // recuperar os campos

    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngressoCompra = document.getElementById('qtd').value;

    console.log(quantidadeIngressoCompra);
    console.log(tipoIngresso);

    if (quantidadeIngressoCompra <= 0) {

        alert('Selecione a quantidade de ingressos para efetuar a compra.');



    } else{

    }





}