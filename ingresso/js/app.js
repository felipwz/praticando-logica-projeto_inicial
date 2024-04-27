let qtdeIngPista = 100;
let qtdeIngCadeiraSuperior = 200;
let qtdeIngCadeiraInferior = 400;

let campoQuantidadePista = document.getElementById('qtd-pista');
let campoQuantidadeCadeiraSuperior = document.getElementById('qtd-superior');
let campoQuantidadeCadeiraInferior = document.getElementById('qtd-inferior');


campoQuantidadePista.innerHTML = `<li>Pista<span id="qtd-pista">${qtdeIngPista}</span></li>`;
campoQuantidadeCadeiraSuperior.innerHTML = `<li>Cadeira Superior<span id="qtd-superior">${qtdeIngCadeiraSuperior}</span></li>`;
campoQuantidadeCadeiraInferior.innerHTML = `<li>Cadeira inferior<span id="qtd-inferior">${qtdeIngCadeiraInferior}</span></li>`;



function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdeIngCompra = document.getElementById('qtd').value;

    if (qtdeIngCompra > 0) {

        if (tipoIngresso == 'inferior' && qtdeIngCompra <= qtdeIngCadeiraInferior) {
            qtdeIngCadeiraInferior = qtdeIngCadeiraInferior - qtdeIngCompra;
            campoQuantidadeCadeiraInferior.innerHTML = `<li>Cadeira Inferior<span id="qtd-inferior">${qtdeIngCadeiraInferior}</span></li>`;

        } else if (tipoIngresso == 'superior' && qtdeIngCompra <= qtdeIngCadeiraSuperior) {
            qtdeIngCadeiraSuperior = qtdeIngCadeiraSuperior - qtdeIngCompra;
            campoQuantidadeCadeiraSuperior.innerHTML = `<li>Cadeira Superior<span id="qtd-superior">${qtdeIngCadeiraSuperior}</span></li>`;

        } else if (tipoIngresso == 'pista' && qtdeIngCompra <= qtdeIngPista) {
            qtdeIngPista = qtdeIngPista - qtdeIngCompra;
            campoQuantidadePista.innerHTML = `<li>Pista<span id="qtd-pista">${qtdeIngPista}</span></li>`;

        } else {
            

        }


    } else {
        alert('Selecione a quantidade de ingressos para efetuar a compra.');

    }

}