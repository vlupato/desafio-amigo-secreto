let amigos = [];

// Função para adicionar amigos na lista de array

function adicionarAmigo() {
  let nomeDigitado = document.getElementById("amigo");
  let nomeDoAmigo = nomeDigitado.value;
  

  // Cria alerta para campo vazio

  if (nomeDoAmigo === "") {
    alert("Por favor, insira um nome.");
  }
  // Adiciona o nome digitado na lista

  amigos.push(nomeDoAmigo);
  nomeDigitado.value = "";
  atualizarListaAmigos();
}

 // Função para atualizar a lista de amigos na tela

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
  
    amigos.forEach((amigo) => {
      let li = document.createElement("li");
      li.textContent = amigo;
      listaAmigos.appendChild(li);
    });
  }
  
  // Função para sortear o amigo secreto
  
  function sortearAmigo() {
    if (amigos.length === 0) {
      alert("Nenhum amigo disponível para sortear.");
    }
  
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigoAleatorio];
  
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O seu amigo secreto é: ${amigoSorteado}`;
    let voz =  resultado.innerHTML = `O seu amigo secreto é: ${amigoSorteado}`;
    responsiveVoice.speak(voz, "Brazilian Portuguese Male", { rate: 1.2 });
  }
  