const prompt = require('prompt-sync')();

function paresEPosicoes() {
    const vetor = [];
    for (let i = 0; i < 10; i++) {
        vetor.push(Number(prompt("Número " + (i + 1) + ":")) || 0);
    }
    const resultados = [];
    vetor.forEach((valor, indice) => {
        if (valor % 2 === 0) resultados.push("Valor " + valor + " na posição " + indice);
    });
    console.log("Pares encontrados:");
    console.log(resultados.join("\n"));
}
paresEPosicoes();
