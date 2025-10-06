function vetorAleatorioOrdenado() {
    const vetor = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    const ordenado = vetor.slice().sort((a, b) => a - b);
    console.log("Gerados:", vetor.join(", "));
    console.log("Ordenados:", ordenado.join(", "));
}
vetorAleatorioOrdenado();
