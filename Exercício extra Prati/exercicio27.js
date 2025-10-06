const prompt = require('prompt-sync')();

function multiplicarMatrizPorValor() {
    const M = Array.from({ length: 6 }, () => Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)));
    const A = Number(prompt("Valor A:")) || 1;
    const V = [];
    for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) V.push(M[i][j] * A);
    console.log("Vetor V(36):", V.join(", "));
}
multiplicarMatrizPorValor();
