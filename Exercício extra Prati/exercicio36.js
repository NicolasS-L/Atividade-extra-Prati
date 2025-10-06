function loteriaEsportiva() {
    const gabarito = Array.from({ length: 13 }, (_, i) => i + 1);
    const apostadores = [];
    for (let i = 0; i < 100; i++) {
        const numeroCartao = "A" + (i + 1);
        const respostas = gabarito.map(x => x); 
        apostadores.push({ numeroCartao, respostas });
    }
    apostadores.forEach(a => {
        const acertos = a.respostas.reduce((s, v, i) => s + (v === gabarito[i] ? 1 : 0), 0);
        console.log("Apostador:", a.numeroCartao, "Acertos:", acertos);
        if (acertos === 13) console.log("Parabéns, tu foi o GANHADOR");
    });
}
loteriaEsportiva();
