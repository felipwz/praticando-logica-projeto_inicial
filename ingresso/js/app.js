function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd')).value;

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    }
}

function comprarPista(qtd) {

    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

        if (qtd > qtdPista) {
            alert('Os ingressos para pista esgotaram..')
            
        } else{
            
            qtdPista = qtdPista - qtd;
            qtdPista.textContent = qtdPista;
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert('Compra realizada com sucesso!');   

        }

    
}