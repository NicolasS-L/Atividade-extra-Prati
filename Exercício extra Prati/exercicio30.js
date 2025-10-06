function somaLinhasColunas() {
    const M = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)));
    const SL = M.map(row => row.reduce((s, v) => s + v, 0));
    const SC = [];
    for (let j = 0; j < 5; j++) {
        let soma = 0;
        for (let i = 0; i < 5; i++) soma += M[i][j];
        SC.push(soma);
    }
    console.log("Matriz:");
    M.forEach(r => console.log(r.join(" ")));
    console.log("SL (soma linhas):", SL.join(", "));
    console.log("SC (soma colunas):", SC.join(", "));
}
somaLinhasColunas();
