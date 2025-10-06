function contarOcorrencias(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}
function executar45() {
    const arr = ["a", "b", "a", "c", "b", "a"];
    console.log(contarOcorrencias(arr));
}
executar45();
