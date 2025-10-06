const prompt = require('prompt-sync')();

function registroFuncionario() {
    const nome = prompt("Nome do funcionário:") || "";
    const cargo = prompt("Cargo:") || "";
    const salario = Number(prompt("Salário:")) || 0;
    const funcionario = { nome, cargo, salario };
    console.log("Registro do funcionário:");
    console.log(funcionario);
}
registroFuncionario();
