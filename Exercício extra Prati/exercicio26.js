function produtoMatrizes() {
    const A = Array.from({ length: 3 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)));
    const B = Array.from({ length: 3 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)));
    const P = A.map((row, i) => row.map((v, j) => v * B[i][j]));
    console.log("A:");
    A.forEach(r => console.log(r.join(" ")));
    console.log("B:");
    B.forEach(r => console.log(r.join(" ")));
    console.log("P (produto):");
    P.forEach(r => console.log(r.join(" ")));
}
produtoMatrizes();
