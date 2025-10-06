function fibonacciDez() {
    const resultado = [];
    let a = 1;
    let b = 1;
    resultado.push(a, b);
    while (resultado.length < 10) {
        const c = a + b;
        resultado.push(c);
        a = b;
        b = c;
    }
    console.log("Fibonacci 10 primeiros:", resultado.join(", "));
}
fibonacciDez();
