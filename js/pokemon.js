let ataqueJugador
let ataqueEnemigo 
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function seleccionarMascotaJugador(){

    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let inputGeodude = document.getElementById("geodude")
    let inputSquirtle = document.getElementById("squirtle")
    let inputCharmander = document.getElementById("charmander")
    let spanMascotaJugador = document.getElementById("mascota-jugador")


    if(inputGeodude.checked) {
        alert("geodude seleccionado")
        spanMascotaJugador.innerHTML = "geodude"
    } else if(inputSquirtle.checked) {
        alert("squirtle seleccionado")
        spanMascotaJugador.innerHTML = "squirtle"
    } else if(inputCharmander.checked) {
        alert("charmander seleccionado")
        spanMascotaJugador.innerHTML = "charmander"
    } else {
        alert("selecciona una mascota")
    }

seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

        if(mascotaAleatoria == 1) {
            spanMascotaEnemigo.innerHTML = "geodude"
        }
        else if(mascotaAleatoria == 2) {
            spanMascotaEnemigo.innerHTML = "squirtle"
        }
        else if(mascotaAleatoria == 3) {
            spanMascotaEnemigo.innerHTML = "charmander"
        }
}   

function ataqueTierra(){
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = "Tierra"
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua"
    } else if(ataqueAleatorio == 3) {
        ataqueEnemigo = "Fuego"
    }
    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empate⁉")

    } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Fuego") {
        crearMensaje("Ganaste✔")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
        crearMensaje("Ganaste✔")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Tierra") {
        crearMensaje("Ganaste✔")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else {
        crearMensaje("Perdiste❌")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        
    }
    revisarVidas()

}

function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("YOU WIN!!!🏆🏆🏆")
    } else if (vidasJugador == 0){
        crearMensajeFinal("YOU LOSE!!!💫💥💢")
    }
    
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
        
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("resultado")
    
    sectionMensajes.innerHTML = resultadoFinal

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(Min, Max) {
    Min = Math.ceil(Min)
    Max = Math.floor(Max)
    return Math.floor(Math.random() * (Max - Min + 1) + Min)
}

window.addEventListener("load", iniciarJuego)
