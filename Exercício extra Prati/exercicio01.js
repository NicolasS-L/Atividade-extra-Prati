const prompt = require('prompt-sync')();

function calcularReducaoVida() {
    const cigarrosPorDia = Number(prompt("Quantos cigarros por dia?")) || 0;
    const anosFumando = Number(prompt("Há quantos anos fuma?")) || 0;
    const totalCigarros = cigarrosPorDia * 365 * anosFumando;
    const minutosPerdidos = totalCigarros * 10;
    const diasPerdidos = minutosPerdidos / (60 * 24);
    console.log("Dias de vida perdidos:", Math.floor(diasPerdidos));
}
calcularReducaoVida();
