const prompt = require('prompt-sync')();

function operacoesVetor6() {
    const vetor = [];
    for (let i = 0; i < 6; i++) vetor.push(Number(prompt("Número " + (i + 1) + ":")) || 0);
    const opcao = Number(prompt("Escolha operação (1-soma,2-produto,3-média,4-ordenar,5-mostrar):")) || 5;
    if (opcao === 1) console.log("Soma:", vetor.reduce((s, v) => s + v, 0));
    else if (opcao === 2) console.log("Produto:", vetor.reduce((s, v) => s * v, 1));
    else if (opcao === 3) console.log("Média:", vetor.reduce((s, v) => s + v, 0) / vetor.length);
    else if (opcao === 4) console.log("Ordenado:", vetor.slice().sort((a, b) => a - b).join(", "));
    else console.log("Vetor:", vetor.join(", "));
}
operacoesVetor6();
