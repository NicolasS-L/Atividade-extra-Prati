function somasMatriz5x5() {
    const M = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)));
    const somaLinha4 = M[3].reduce((s, v) => s + v, 0);
    const somaColuna2 = M.reduce((s, row) => s + row[1], 0);
    const diagonal = M.reduce((s, row, i) => s + row[i], 0);
    const total = M.flat().reduce((s, v) => s + v, 0);
    console.log("Matriz:");
    M.forEach(r => console.log(r.join(" ")));
    console.log("Soma linha 4:", somaLinha4);
    console.log("Soma coluna 2:", somaColuna2);
    console.log("Diagonal principal:", diagonal);
    console.log("Total:", total);
}
somasMatriz5x5();
