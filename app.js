alert("Boas vindas ao jogo do numero secreto!");

let numeroSecreto = 4; // numero secreto

onsole.log("Voce acertou!");

let chute = prompt("Digite um numero entre 1 e 30");

// se o chute for igual ao numero secreto

if (numeroSecreto == chute) {
  alert("Isso aí voce descobriu o numero secreto ${numeroSecreto}");
} else {
  if (numeroSecreto > chute) {
    alert(`onumero secreto e maior que ${chute}`);
  }
}
