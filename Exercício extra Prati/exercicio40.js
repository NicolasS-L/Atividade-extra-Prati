const prompt = require('prompt-sync')();

function verificarLoto() {
    const resultado = (prompt("Resultado oficial (5 números separados por vírgula):") || "").split(",").map(n => Number(n.trim()));
    const apostas = [];
    for (let i = 0; i < 50; i++) {
        const aposta = (prompt("Aposta " + (i + 1) + " (5 números separados por vírgula):") || "").split(",").map(n => Number(n.trim()));
        apostas.push(aposta);
    }
    let encontrou = false;
    apostas.forEach((a, idx) => {
        const igual = a.length === resultado.length && a.every((v, i) => v === resultado[i]);
        if (igual) {
            console.log("Aposta", idx + 1, "Ganhador");
            encontrou = true;
        }
    });
    if (!encontrou) console.log("Nenhum ganhador por quina idêntica");
}
verificarLoto();
