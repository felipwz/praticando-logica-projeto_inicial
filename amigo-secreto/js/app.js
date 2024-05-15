let amigos = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    if (amigo.value == "") {
        alert("Por favor digite o nome das pessoas que iram participar do amigo secreto");
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado');
        return;

    }


    let lista = document.getElementById("lista-amigos");
    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ", " + amigo.value;
    }

    amigos.push(amigo.value);
    amigo.value = "";
}

function sortear() {

    if (amigos.length < 4) {
        alert('É preciso colocar no minimo 4 pessoas para o sorteio');
        return;
    }


    embaralha(amigos);
    let sorteio = document.getElementById("lista-sorteio");
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML =
                sorteio.innerHTML + amigos[i] + " ---> " + amigos[0] + "<br>";
        } else {
            sorteio.innerHTML =
                sorteio.innerHTML + amigos[i] + " ---> " + amigos[i + 1] + "<br>";
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];

        lista[indice - 1] = lista[indiceAleatorio];

        lista[indiceAleatorio] = elemento;
    }
}

function reiniciar() {
    amigos = [];
    let lista = (document.getElementById("lista-amigos").innerHTML = "");
    let sorteio = (document.getElementById("lista-sorteio").innerHTML = "");
}