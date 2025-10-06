function multiplicarLinhaPelaDiagonal() {
    const n = 50;
    const M = Array.from({ length: n }, (_, i) => Array.from({ length: n }, () => Math.random() * 10));
    for (let i = 0; i < n; i++) {
        const fator = M[i][i];
        for (let j = 0; j < n; j++) M[i][j] *= fator;
    }
    console.log("Matriz após multiplicações (exibindo primeiras 5 linhas):");
    M.slice(0, 5).forEach(r => console.log(r.slice(0, 10).map(x => x.toFixed(2)).join(" ")));
}
multiplicarLinhaPelaDiagonal();
