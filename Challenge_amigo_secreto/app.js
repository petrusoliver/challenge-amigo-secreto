// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let nomeAmigo = document.getElementById("amigo").value;

    // Valida se o campo não está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return; // Sai da função se o campo estiver vazio
    }

    // Atualiza o array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let amigo of amigos) {
        let novoItem = document.createElement("li");
        novoItem.textContent = amigo;
        listaAmigos.appendChild(novoItem);
    }
}

// Função para sortear os amigos (exemplo)
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos à lista antes de sortear.");
        return;
    }

    // Gera um índice aleatório dentro do array de amigos
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado usando o índice
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa o resultado anterior

    let novoItem = document.createElement("li");
    novoItem.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultado.appendChild(novoItem);
}