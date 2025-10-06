function mapearPropriedades(obj, fn) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v)]));
}
function executar47() {
    const entrada = { a: 1, b: 2 };
    const resultado = mapearPropriedades(entrada, x => x * 2);
    console.log(resultado);
}
executar47();
