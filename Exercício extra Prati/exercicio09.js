const prompt = require('prompt-sync')();

function somaSalariosPorSexo() {
    let totalHomens = 0;
    let totalMulheres = 0;
    while (true) {
        const salario = Number(prompt("Salário (ou vazio para terminar):"));
        if (!salario) break;
        const sexo = (prompt("Sexo (M/F):") || "").toUpperCase();
        if (sexo === "M") totalHomens += salario;
        if (sexo === "F") totalMulheres += salario;
        const continuar = (prompt("Continuar? (s/n):") || "").toLowerCase();
        if (continuar !== "s") break;
    }
    console.log("Total pago a homens: R$", totalHomens.toFixed(2));
    console.log("Total pago a mulheres: R$", totalMulheres.toFixed(2));
}
somaSalariosPorSexo();
