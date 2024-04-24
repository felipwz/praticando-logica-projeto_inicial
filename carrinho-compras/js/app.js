let totalGeral = 0;
limpar();


function adicionar() {
    // recuperar valores, nome do produto e quantidade
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    if (quantidade >= 1) {
        let preco = quantidade * valorProduto;
        totalGeral = totalGeral + preco;
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span></section>`;

        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`

        quantidade = document.getElementById('quantidade').value = '';
    } else {
        alert('É necessário selecionar uma quantidade do produto para adicioná lo ao seu carrinho.')
    }

}




function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';



}