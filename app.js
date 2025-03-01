let numeroSecreto;
let tentativas = 3;
let numerosUsados = [];

function gerarNumeroSecreto() {
  do {
    numeroSecreto = Math.floor(Math.random() * 11);
  } while (numerosUsados.includes(numeroSecreto));

  numerosUsados.push(numeroSecreto);
}

function jogar() {
  gerarNumeroSecreto();
  tentativas = 3;
  alert("Bem-vindo ao jogo de adivinhação! Tente adivinhar o número secreto entre 0 e 10.");
  jogarNovamente();
}

function jogarNovamente() {
  if (tentativas === 0) {
    alert(`Suas tentativas acabaram. O número secreto era ${numeroSecreto}. Que pena, mais sorte da próxima vez!`);
    return;
  }

  const palpite = parseInt(prompt(`Qual é o seu palpite? (Você tem ${tentativas} tentativa(s) restantes)`));

  if (isNaN(palpite)) {
    alert("Por favor, digite um número válido.");
    jogarNovamente();
    return;
  }

  if (palpite === numeroSecreto) {
    alert("Parabéns! Você adivinhou o número secreto!");
    return;
  } else {
    tentativas--;
    if (palpite < numeroSecreto) {
      alert(`Você errou! O número secreto é maior. Você tem ${tentativas} tentativa(s) restantes.`);
    } else {
      alert(`Você errou! O número secreto é menor. Você tem ${tentativas} tentativa(s) restantes.`);
    }
    jogarNovamente();
  }
}

jogar();