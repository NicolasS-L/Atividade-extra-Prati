const prompt = require('prompt-sync')();

function pesquisaSalarioFilhos() {
    const pessoas = [];
    while (true) {
        const salario = Number(prompt("Salário (vazio para terminar):")) || 0;
        if (!salario) break;
        const filhos = Number(prompt("Número de filhos:")) || 0;
        pessoas.push({ salario, filhos });
        const continuar = (prompt("Continuar? (s/n):") || "").toLowerCase();
        if (continuar !== "s") break;
    }
    const totalSalarios = pessoas.reduce((s, p) => s + p.salario, 0);
    const mediaSalario = pessoas.length ? totalSalarios / pessoas.length : 0;
    const mediaFilhos = pessoas.length ? pessoas.reduce((s, p) => s + p.filhos, 0) / pessoas.length : 0;
    const maiorSalario = pessoas.length ? Math.max(...pessoas.map(p => p.salario)) : 0;
    const percentualAte350 = pessoas.length ? pessoas.filter(p => p.salario <= 350).length / pessoas.length * 100 : 0;
    console.log("Média salário: R$", mediaSalario.toFixed(2));
    console.log("Média número de filhos:", mediaFilhos.toFixed(2));
    console.log("Maior salário: R$", maiorSalario.toFixed(2));
    console.log("% com salário <= 350: " + percentualAte350.toFixed(2) + "%");
}
pesquisaSalarioFilhos();
