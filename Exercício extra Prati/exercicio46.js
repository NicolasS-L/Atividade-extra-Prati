function totalVendasPorVendedor(vendas) {
    return vendas.reduce((acc, v) => {
        acc[v.vendedor] = (acc[v.vendedor] || 0) + v.valor;
        return acc;
    }, {});
}
function executar46() {
    const vendas = [{ vendedor: "Ana", valor: 100 }, { vendedor: "João", valor: 50 }, { vendedor: "Ana", valor: 200 }];
    console.log(totalVendasPorVendedor(vendas));
}
executar46();
