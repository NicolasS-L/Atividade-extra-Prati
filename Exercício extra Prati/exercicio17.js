const prompt = require('prompt-sync')();

function listarMenores() {
    const pessoas = [];
    for (let i = 0; i < 9; i++) {
        const nome = prompt("Nome " + (i + 1) + ":") || "";
        const idade = Number(prompt("Idade:")) || 0;
        pessoas.push({ nome, idade });
    }
    const menores = pessoas.filter(p => p.idade < 18);
    console.log("Pessoas menores de idade:");
    menores.forEach(p => console.log(p.nome + " - " + p.idade));
}
listarMenores();
