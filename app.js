alert("Boas vindas ao jogo do numero secreto!");

let numeroMaximo = 20; // numero maximo

let numeroSecreto; // numero secreto

numeroSecreto = parseint(Math.random() * numeroMaximo + 1);

onsole.log("Voce acertou!");

let chute;
let tentativas = 1; // contador de tentativas

// enquanto n for igual ao numero secreto
while (chute != numeroSecreto) {
  break;

  chute = prompt(`Digite um numero entre 1 e ${numeroMaximo}`); // chute do usuario
  if (chute == numeroSecreto) {
  } else {
    if (numeroSecreto > chute) {
      alert(`o numero secreto e maior que ${chute}`);
    } else {
      alert(`o numero secreto e menor que ${chute}`);
    }
    tentativas++;
  }
}
let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa"; // operadopr ternario
if (tentativas > 1) {
  alert(
    `Isso aí voce descobriu o numero secreto ${numeroSecreto} com {tentativas} tentativas!`
  );
  // se o chute for igual ao numero secreto
} else {
  alert(
    `Isso aí voce descobriu o numero secreto ${numeroSecreto} com {tentativas} tentativa!`
  );
}
