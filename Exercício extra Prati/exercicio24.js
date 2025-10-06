function contarNegativosPorLinha() {
    const linhas = 6;
    const colunas = 8;
    const M = Array.from({ length: linhas }, () =>
        Array.from({ length: colunas }, () => Math.floor(Math.random() * 21) - 10)
    );
    const C = M.map(row => row.filter(x => x < 0).length);
    console.log("Matriz:");
    M.forEach(r => console.log(r.join(" ")));
    console.log("Vetor C (negativos por linha):", C.join(", "));
}
contarNegativosPorLinha();
