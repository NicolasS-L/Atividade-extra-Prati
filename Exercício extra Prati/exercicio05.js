const prompt = require('prompt-sync')();

function jokenpo() {
    const opcoes = ["pedra", "papel", "tesoura"];
    const escolhaUsuario = (prompt("Escolha pedra, papel ou tesoura:") || "").toLowerCase();
    const escolhaCpu = opcoes[Math.floor(Math.random() * 3)];
    function resultado(usuario, cpu) {
        if (usuario === cpu) return "Empate";
        if ((usuario === "pedra" && cpu === "tesoura") ||
            (usuario === "tesoura" && cpu === "papel") ||
            (usuario === "papel" && cpu === "pedra")) {
            return "Você ganhou";
        }
        return "Você perdeu";
    }
    console.log("Você:", escolhaUsuario);
    console.log("Computador:", escolhaCpu);
    console.log(resultado(escolhaUsuario, escolhaCpu));
}
jokenpo();
