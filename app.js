let amigos = [];

// Cria função para adicionar amigos

function adicionarAmigo() {
  let nomeDigitado = document.getElementById("amigo");
  let nomeDoAmigo = nomeDigitado.value;
  console.log(nomeDoAmigo);

  // Cria alerta para campo vazio

  if (nomeDoAmigo === "") {
    alert("Por favor, insira um nome.");
  }
  // Adiciona o nome digitado na lista

  amigos.push(nomeDoAmigo);
  nomeDigitado.value = "";
  atualizarListaAmigos();
}

