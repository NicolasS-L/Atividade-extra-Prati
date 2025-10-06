function fibonacciVetor15() {
    const vetor = [1, 1];
    while (vetor.length < 15) {
        const ultimo = vetor[vetor.length - 1];
        const penultimo = vetor[vetor.length - 2];
        vetor.push(ultimo + penultimo);
    }
    console.log("Vetor Fibonacci 15:", vetor.join(", "));
}
fibonacciVetor15();
