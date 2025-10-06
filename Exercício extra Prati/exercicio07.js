const prompt = require('prompt-sync')();

function calcularAluguel() {
    const tipo = (prompt("Tipo de carro (popular/luxo):") || "").toLowerCase();
    const dias = Number(prompt("Dias de aluguel:")) || 0;
    const km = Number(prompt("Km percorridos:")) || 0;
    const diaria = tipo === "luxo" ? 150 : 90;
    let valorKm = 0;
    if (tipo === "popular") {
        valorKm = km <= 100 ? 0.2 : 0.1;
    } else {
        valorKm = km <= 200 ? 0.3 : 0.25;
    }
    const total = dias * diaria + km * valorKm;
    console.log("Total a pagar: R$", total.toFixed(2));
}
calcularAluguel();
