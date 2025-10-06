const prompt = require('prompt-sync')();

function pesoIdeal(alt, sexo) {
    if (sexo === "M") return 72.7 * alt - 58;
    return 62.1 * alt - 44.7;
}
function calcularPesoIdeal() {
    const altura = Number(prompt("Altura (m):")) || 0;
    const sexo = (prompt("Sexo (M/F):") || "").toUpperCase();
    const peso = pesoIdeal(altura, sexo);
    console.log("Peso ideal:", peso.toFixed(2));
}
calcularPesoIdeal();
