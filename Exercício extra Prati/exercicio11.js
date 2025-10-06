const prompt = require('prompt-sync')();

function paDezElementos() {
    let primeiro = Number(prompt("Primeiro termo:")) || 0;
    const razao = Number(prompt("Razão:")) || 0;
    const termos = [];
    for (let i = 0; i < 10; i++) {
        termos.push(primeiro);
        primeiro += razao;
    }
    const soma = termos.reduce((s, v) => s + v, 0);
    console.log("PA:", termos.join(", "));
    console.log("Soma:", soma);
}
paDezElementos();
