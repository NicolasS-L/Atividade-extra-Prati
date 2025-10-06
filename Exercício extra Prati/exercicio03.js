const prompt = require('prompt-sync')();

function calcularPrecoPassagem() {
    const distancia = Number(prompt("Distância em Km:")) || 0;
    const preco = distancia <= 200 ? distancia * 0.5 : distancia * 0.45;
    console.log("Preço da passagem: R$", preco.toFixed(2));
}
calcularPrecoPassagem();
