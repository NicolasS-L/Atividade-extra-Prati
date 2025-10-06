function somasAcimaAbaixoDiagonal() {
    const n = 10;
    const M = Array.from({ length: n }, () => Array.from({ length: n }, () => Math.floor(Math.random() * 20)));
    let acima = 0;
    let abaixo = 0;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        if (j > i) acima += M[i][j];
        if (j < i) abaixo += M[i][j];
    }
    console.log("Soma acima da diagonal:", acima);
    console.log("Soma abaixo da diagonal:", abaixo);
}
somasAcimaAbaixoDiagonal();
