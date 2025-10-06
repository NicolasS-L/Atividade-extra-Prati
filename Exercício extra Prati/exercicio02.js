const prompt = require('prompt-sync')();

function verificarMulta() {
    const velocidade = Number(prompt("Velocidade (Km/h):")) || 0;
    const limite = 80;
    if (velocidade > limite) {
        const valorMulta = (velocidade - limite) * 5;
        console.log("Multado. Valor: R$", valorMulta.toFixed(2));
    } else {
        console.log("Dentro do limite.");
    }
}
verificarMulta();
