const prompt = require('prompt-sync')();

function adivinharNumero() {
    const chute = Number(prompt("Escolha um número entre 1 e 5:")) || 0;
    const sorteado = Math.floor(Math.random() * 5) + 1;
    console.log("Número sorteado:", sorteado);
    console.log(chute === sorteado ? "Você acertou!" : "Você errou.");
}
adivinharNumero();
