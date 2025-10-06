function contarPropriedadesString(obj) {
    return Object.values(obj).filter(v => typeof v === "string").length;
}
function executar44() {
    const obj = { a: "x", b: 2, c: "y", d: [] };
    console.log("Quantidade de strings:", contarPropriedadesString(obj));
}
executar44();
