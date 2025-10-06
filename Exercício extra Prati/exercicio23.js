function matrizIdentidade() {
    const n = 7;
    const matriz = [];
    for (let i = 0; i < n; i++) {
        matriz[i] = [];
        for (let j = 0; j < n; j++) {
            matriz[i][j] = i === j ? 1 : 0;
        }
    }
    matriz.forEach(row => console.log(row.join(" ")));
}
matrizIdentidade();
