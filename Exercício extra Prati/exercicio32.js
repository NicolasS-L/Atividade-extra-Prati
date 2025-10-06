function dividirPorMaiorModuloPorLinha() {
    const M = Array.from({ length: 12 }, () => Array.from({ length: 13 }, () => (Math.random() * 200 - 100)));
    const N = M.map(row => {
        const maxAbs = Math.max(...row.map(x => Math.abs(x)));
        return row.map(x => x / (maxAbs || 1));
    });
    console.log("Matriz modificada:");
    N.forEach(r => console.log(r.map(x => x.toFixed(2)).join(" ")));
}
dividirPorMaiorModuloPorLinha();
