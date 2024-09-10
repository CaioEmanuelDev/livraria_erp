function novoJogador() {
  const section = document.getElementById("listaJogadores");

  let posicao = document.getElementById("posicaoPlayer").value;
  let nome = document.getElementById("nomePlayer").value;
  let numeroDoJogador = parseInt(document.getElementById("numeroPlayer").value);

  var confirmacao = confirm(
    `Escalação do Time:\n\nVocê deseja escalar esse jogador?\n - Posição: ${posicao}.\n - Nome: ${nome}.\n - Número da camisa: ${numeroDoJogador}`
  );

  if (confirmacao) {
    let newUl = document.createElement("ul");
    newUl.id = `Jogador - ${numeroDoJogador}`;

    let liPosicao = document.createElement("li");
    liPosicao.innerText = `Posição: ${posicao}`;

    let liNome = document.createElement("li");
    liNome.innerText = `Nome do Jogador: ${nome}`;

    let liNumeroJogador = document.createElement("li");
    liNumeroJogador.innerText = `Número da camisa: ${numeroDoJogador}`;
    liNumeroJogador.id = `Player - ${numeroDoJogador}`;

    newUl.append(liPosicao, liNome, liNumeroJogador);
    section.appendChild(newUl);
  }
  posicao = document.getElementById("posicaoPlayer").value = "";
  nome = document.getElementById("nomePlayer").value = "";
  numeroDoJogador = parseInt(
    (document.getElementById("numeroPlayer").value = "")
  );
}

function removerJogador() {
  const section = document.getElementById("listaJogadores");
  var numeroDaCamisa = document.getElementById("removerJogador").value;

  const jogador = document.getElementById(`Jogador - ${numeroDaCamisa}`);

  const confirmar = confirm(
    `Escalação do Time:\n\nVocê deseja Remover esse jogador?\n - Número do Jogador: ${numeroDaCamisa}`
  );
  if (confirmar) {
    section.removeChild(jogador);
  } else {
    alert("Esse jogador não foi escalado!");
  }
  numeroDaCamisa = document.getElementById("removerJogador").value = "";
}
