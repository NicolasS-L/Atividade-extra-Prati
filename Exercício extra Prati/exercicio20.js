const prompt = require('prompt-sync')();

function folhaPagamentos() {
    const funcionarios = [];
    for (let i = 0; i < 80; i++) {
        const matricula = prompt("Matrícula do funcionário " + (i + 1) + ":") || ("M" + (i + 1));
        const nome = prompt("Nome:") || ("Nome" + (i + 1));
        const salarioBruto = Number(prompt("Salário bruto:")) || 0;
        funcionarios.push({ matricula, nome, salarioBruto });
    }
    funcionarios.forEach(f => {
        const deducao = f.salarioBruto * 0.12;
        const salarioLiquido = f.salarioBruto - deducao;
        console.log("Matrícula:", f.matricula);
        console.log("Nome:", f.nome);
        console.log("Salário bruto: R$", f.salarioBruto.toFixed(2));
        console.log("Dedução INSS: R$", deducao.toFixed(2));
        console.log("Salário líquido: R$", salarioLiquido.toFixed(2));
        console.log("-----");
    });
}
folhaPagamentos();
