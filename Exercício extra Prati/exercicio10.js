const prompt = require('prompt-sync')();

function estatisticasValores() {
    let soma = 0;
    let menor = null;
    let contador = 0;
    let pares = 0;
    while (true) {
        const valor = Number(prompt("Digite um número (ou vazio para terminar):")) || 0;
        soma += valor;
        contador++;
        if (menor === null || valor < menor) menor = valor;
        if (valor % 2 === 0) pares++;
        const continuar = (prompt("Continuar? (s/n):") || "").toLowerCase();
        if (continuar !== "s") break;
    }
    const media = contador ? soma / contador : 0;
    console.log("Somatório:", soma);
    console.log("Menor valor:", menor);
    console.log("Média:", media);
    console.log("Quantidade de pares:", pares);
}
estatisticasValores();
