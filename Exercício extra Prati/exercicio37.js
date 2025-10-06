function prova20Alunos50() {
    const gabarito = Array.from({ length: 20 }, () => "A");
    const alunos = [];
    for (let i = 0; i < 50; i++) {
        const respostas = Array.from({ length: 20 }, () => "A");
        alunos.push({ id: i + 1, respostas });
    }
    alunos.forEach(aluno => {
        const acertos = aluno.respostas.reduce((s, v, i) => s + (v === gabarito[i] ? 1 : 0), 0);
        console.log("Aluno", aluno.id, "Acertos:", acertos, acertos >= 12 ? "APROVADO" : "REPROVADO");
    });
}
prova20Alunos50();
