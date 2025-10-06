function multiplicarDiagonalPrincipalPorMediaSecundaria() {
    const M = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)));
    const diagSec = (M[0][2] + M[1][1] + M[2][0]) / 3;
    const produto = M[0][0] * M[1][1] * M[2][2] * diagSec;
    console.log("Matriz:");
    M.forEach(r => console.log(r.join(" ")));
    console.log("Resultado:", produto.toFixed(2));
}
multiplicarDiagonalPrincipalPorMediaSecundaria();
