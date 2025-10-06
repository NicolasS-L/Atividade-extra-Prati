function paresImparesVetoresRotativos() {
    const pares = [];
    const impares = [];
    for (let i = 0; i < 30; i++) {
        const valor = Math.floor(Math.random() * 100);
        if (valor % 2 === 0) {
            pares.push(valor);
            if (pares.length === 5) {
                console.log("Vetor pares cheio:", pares.join(", "));
                pares.length = 0;
            }
        } else {
            impares.push(valor);
            if (impares.length === 5) {
                console.log("Vetor impares cheio:", impares.join(", "));
                impares.length = 0;
            }
        }
    }
    console.log("Processamento finalizado");
}
paresImparesVetoresRotativos();
