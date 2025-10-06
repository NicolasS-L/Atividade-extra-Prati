function combinarInventarios(invA, invB) {
    const resultado = Object.assign({}, invA);
    Object.entries(invB).forEach(([item, qtd]) => {
        resultado[item] = (resultado[item] || 0) + qtd;
    });
    return resultado;
}
function executar48() {
    const A = { apple: 10, banana: 5 };
    const B = { banana: 7, orange: 3 };
    console.log(combinarInventarios(A, B));
}
executar48();
