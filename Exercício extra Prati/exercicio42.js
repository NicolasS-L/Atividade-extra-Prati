function propriedadesQueSaoArrays(obj) {
    const result = {};
    Object.entries(obj).forEach(([chave, valor]) => {
        if (Array.isArray(valor)) result[chave] = valor;
    });
    return result;
}
function executar42() {
    const dados = { a: 1, b: "x", c: [1, 2], d: ["a", "b"] };
    console.log(propriedadesQueSaoArrays(dados));
}
executar42();
