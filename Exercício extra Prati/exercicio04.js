const prompt = require('prompt-sync')();

function podeFormarTriangulo() {
    const a = Number(prompt("Tamanho do segmento A:")) || 0;
    const b = Number(prompt("Tamanho do segmento B:")) || 0;
    const c = Number(prompt("Tamanho do segmento C:")) || 0;
    const ok = a < b + c && b < a + c && c < a + b;
    console.log(ok ? "Pode formar triângulo" : "Não pode formar triângulo");
}
podeFormarTriangulo();
