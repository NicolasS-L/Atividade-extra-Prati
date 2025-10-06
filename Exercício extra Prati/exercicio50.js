function criarSistemaHoteis() {
    const hoteis = [];
    const reservas = [];
    let nextHotelId = 1;
    let nextReservaId = 1;
    function adicionarHotel(nome, cidade, quartosTotais) {
        hoteis.push({ id: nextHotelId++, nome, cidade, quartosTotais, quartosDisponiveis: quartosTotais });
    }
    function buscarPorCidade(cidade) {
        return hoteis.filter(h => h.cidade.toLowerCase() === cidade.toLowerCase());
    }
    function fazerReserva(idHotel, nomeCliente) {
        const hotel = hoteis.find(h => h.id === idHotel);
        if (!hotel || hotel.quartosDisponiveis < 1) throw new Error("Sem quartos disponíveis");
        const reserva = { idReserva: nextReservaId++, idHotel, nomeCliente };
        reservas.push(reserva);
        hotel.quartosDisponiveis--;
        return reserva;
    }
    function cancelarReserva(idReserva) {
        const idx = reservas.findIndex(r => r.idReserva === idReserva);
        if (idx === -1) throw new Error("Reserva não encontrada");
        const [res] = reservas.splice(idx, 1);
        const hotel = hoteis.find(h => h.id === res.idHotel);
        if (hotel) hotel.quartosDisponiveis++;
        return res;
    }
    function listarReservas() {
        return reservas.map(r => Object.assign({}, r, hoteis.find(h => h.id === r.idHotel)));
    }
    adicionarHotel("Hotel A", "Cidade X", 5);
    adicionarHotel("Hotel B", "Cidade Y", 3);
    console.log("APIs disponíveis: adicionarHotel(nome,cidade,quartos), buscarPorCidade(cidade), fazerReserva(idHotel,nomeCliente), cancelarReserva(idReserva), listarReservas()");
    window.sistemaHoteis = { adicionarHotel, buscarPorCidade, fazerReserva, cancelarReserva, listarReservas };
}
criarSistemaHoteis();
