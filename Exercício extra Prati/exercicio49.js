function transacoesPorCategoria(transacoes) {
    const agrupado = {};
    transacoes.forEach(t => {
        const cat = t.categoria;
        if (!agrupado[cat]) agrupado[cat] = { transacoes: [], subtotal: 0 };
        agrupado[cat].transacoes.push(t);
        agrupado[cat].subtotal += t.valor;
    });
    return agrupado;
}
function executar49() {
    const trans = [
        { id: 1, valor: 10, data: "2025-01-01", categoria: "A" },
        { id: 2, valor: 20, data: "2025-01-02", categoria: "B" },
        { id: 3, valor: 5, data: "2025-01-03", categoria: "A" }
    ];
    console.log(transacoesPorCategoria(trans));
}
executar49();
