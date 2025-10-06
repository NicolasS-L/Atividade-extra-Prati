function somaColunas15x20() {
    const linhas = 15;
    const colunas = 20;
    const M = Array.from({ length: linhas }, () =>
        Array.from({ length: colunas }, () => Math.random() * 100)
    );
    const somas = [];
    for (let j = 0; j < colunas; j++) {
        let soma = 0;
        for (let i = 0; i < linhas; i++) soma += M[i][j];
        somas.push(soma);
    }
    console.log("Soma de cada coluna:");
    console.log(somas.map(s => s.toFixed(2)).join(", "));
}
somaColunas15x20();
