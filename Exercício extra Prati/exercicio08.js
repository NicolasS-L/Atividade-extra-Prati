const prompt = require('prompt-sync')();

function pontosAtividade() {
    const horas = Number(prompt("Horas de atividade no mês:")) || 0;
    let pontos = 0;
    if (horas <= 10) pontos = horas * 2;
    else if (horas <= 20) pontos = 10 * 2 + (horas - 10) * 5;
    else pontos = 10 * 2 + 10 * 5 + (horas - 20) * 10;
    const valor = pontos * 0.05;
    console.log("Pontos:", pontos);
    console.log("Valor ganho: R$", valor.toFixed(2));
}
pontosAtividade();
