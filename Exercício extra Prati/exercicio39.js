function compactarVetor100() {
    const A = Array.from({ length: 100 }, () => Math.floor(Math.random() * 21) - 10);
    const B = A.filter(x => x > 0);
    console.log("Original:", A.join(", "));
    console.log("Compactado (sem nulos/negativos):", B.join(", "));
}
compactarVetor100();
