const prompt = require('prompt-sync')();

function nomesReverso() {
    const nomes = [];
    for (let i = 0; i < 7; i++) {
        nomes.push(prompt("Nome " + (i + 1) + ":") || "");
    }
    const invertidos = nomes.slice().reverse();
    console.log("Nomes na ordem inversa:");
    console.log(invertidos.join("\n"));
}
nomesReverso();
