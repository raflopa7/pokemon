    function aleatorio(Min, Max) {
        return Math.floor(Math.random() * (Max - Min + 1) + Min)
    }

    function eleccion(jugada) {
        let resultado = ""
        if (jugada == 1) {
            resultado = "piedra 🥌"
        } else if (jugada == 2) {
            resultado = "papel 📄"
        } else if (jugada == 3) {
            resultado = "tijera ✂"
        } else {
            resultado = "Equivocado"
        }
        return resultado
    }

    //eleccion de variables
    let Jugador = 0
    let Pc = 0
    let Triunfos = 0
    let Derrotas = 0

    while (Triunfos <3 && Derrotas <3){
        Pc = aleatorio(1, 3)
        Jugador = prompt("Elige: 1 para 🥌 , 2 para 📄, 3 para ✂")
        alert("Pc elige: " + eleccion(Pc))
        alert("Tu eliges: " + eleccion(Jugador))

    // desarrollo del combate

        if (Jugador == Pc) {
            alert("Empate")
        } else if (Jugador == 1 && Pc == 3) {
            alert("Ganaste")
            Triunfos = Triunfos + 1
        } else if (Jugador == 3 && Pc == 2) {
            alert("Ganaste")
            Triunfos = Triunfos + 1
        } else if (Jugador == 2 && Pc == 1) {
            alert("Ganaste")
            Triunfos = Triunfos + 1
        } else {
            alert("you lose")
            Derrotas = Derrotas + 1
        }
    }

    alert ("Ganaste " + Triunfos + "veces. Perdiste " + Derrotas + " veces.")