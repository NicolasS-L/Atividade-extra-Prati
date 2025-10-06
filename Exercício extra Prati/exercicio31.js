const prompt = require('prompt-sync')();

function contarEFiltrarValor() {
    const A = [];
    for (let i = 0; i < 30; i++) {
        A[i] = Array.from({ length: 30 }, () => Math.floor(Math.random() * 10));
    }
    const valor = Number(prompt("Valor A para pesquisar:")) || 0;
    let contador = 0;
    const X = [];
    for (let i = 0; i < 30; i++) for (let j = 0; j < 30; j++) {
        if (A[i][j] === valor) contador++;
        else X.push(A[i][j]);
    }
    console.log("Quantidade de ocorrências de A:", contador);
    console.log("Matriz X (elementos diferentes de A) tem", X.length, "elementos");
}
contarEFiltrarValor();
