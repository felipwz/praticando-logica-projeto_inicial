function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value)


    if (tipo == 'inferior') {
        comprarInferior(qtd);
    }

    if (tipo == 'superior') {
        comprarSuperior(qtd);
    }

    if (tipo == 'pista') {
        comprarPista(qtd);
    }
}



function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    console.log(qtd);

    if (qtd > 0) {
        if (qtd > qtdInferior) {
            alert('Os ingressos para pista esgotaram..')

        } else {

            qtdInferior = qtdInferior - qtd;
            qtdInferior.textContent = qtdInferior;
            alert('Compra realizada com sucesso!');
            document.getElementById('qtd-inferior').textContent = qtdInferior;

        }
    }else {
        alert('selecione a quantidade de ingressos que você deseja para efetuar a compra.');
    }

}


function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    console.log(qtd);

    if (qtd > qtdSuperior) {
        alert('Os ingressos para pista esgotaram..')

    } else {

        qtdSuperior = qtdSuperior - qtd;
        qtdSuperior.textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd-superior').textContent = qtdSuperior;

    }

}


function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    console.log(qtd);

    if (qtd > qtdPista) {
        alert('Os ingressos para pista esgotaram..')

    } else {

        qtdPista = qtdPista - qtd;
        qtdPista.textContent = qtdPista;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd-pista').textContent = qtdPista;

    }


}