const prompt = require('prompt-sync')();

function validarHorarios() {
    const horarios = [];
    for (let i = 0; i < 5; i++) {
        let texto = prompt("Digite o horário HH:MM:SS:");
        const valido = /^\d{2}:\d{2}:\d{2}$/.test(texto || "");
        if (valido) {
            const parts = (texto || "").split(":").map(Number);
            const [hh, mm, ss] = parts;
            if (hh < 24 && mm < 60 && ss < 60) horarios.push(texto);
        }
    }
    console.log("Horários válidos:");
    console.log(horarios.join("\n"));
}
validarHorarios();
