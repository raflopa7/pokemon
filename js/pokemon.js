const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")

const botonReiniciar = document.getElementById("boton-reiniciar")
sectionReiniciar.style.display = "none"

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let pokemones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDePokemones
let inputGeodude 
let inputSquirtle 
let inputCharmander 
let mascotaJugador
let ataquesPokemon
let ataquesPokemonEnemigo 
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

class Pokemon {
    constructor(nombre, foto, vida) {       
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let geodude = new Pokemon ("Geodude", "./imagenesvarias/geodude.jpeg ", 5)

let squirtle = new Pokemon ("Squirtle", "./imagenesvarias/squirtle.jpeg ", 5)

let charmander = new Pokemon ("Charmander", "./imagenesvarias/charmander.jpg ", 5)

geodude.ataques.push(
    {nombre: "🥌", id: "boton-tierra"},
    {nombre: "🥌", id: "boton-tierra"},
    {nombre: "🥌", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
)

squirtle.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🥌", id: "boton-tierra"},
    {nombre: "🔥", id: "boton-fuego"},
)

charmander.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🥌", id: "boton-tierra"},
)

pokemones.push(geodude, squirtle, charmander)

function iniciarJuego(){

    sectionSeleccionarAtaque.style.display = "none"

    pokemones.forEach((pokemon) => {
        opcionDePokemones = `<input type="radio" name="mascota" id=${pokemon.nombre} />
        <label class= "tarjeta-de-pokemon" for=${pokemon.nombre}>
            <p>${pokemon.nombre}</p>
            <img src=${pokemon.foto} alt=${pokemon.nombre}>
        </label>` 
    contenedorTarjetas.innerHTML += opcionDePokemones
    inputGeodude = document.getElementById("Geodude")
    inputSquirtle = document.getElementById("Squirtle")
    inputCharmander = document.getElementById("Charmander")

    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

    if(inputGeodude.checked) {
        spanMascotaJugador.innerHTML = inputGeodude.id
        mascotaJugador = inputGeodude.id
    } else if(inputSquirtle.checked) {
        spanMascotaJugador.innerHTML = inputSquirtle.id
        mascotaJugador = inputSquirtle.id
    } else if(inputCharmander.checked) {
        spanMascotaJugador.innerHTML = inputCharmander.id
        mascotaJugador = inputCharmander.id
    } else {
        alert("selecciona una mascota")
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques 
    for (let i = 0; i < pokemones.length; i++) {
        if (mascotaJugador === pokemones[i].nombre){
        ataques = pokemones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => { 
        ataquesPokemon = `<button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>`
        
        contenedorAtaques.innerHTML += ataquesPokemon
    })

    botonTierra = document.getElementById("boton-tierra")
    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botones = document.querySelectorAll(".BAtaque") 

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🥌") {
                ataqueJugador.push("Tierra")
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if (e.target.textContent === "💧") {
                ataqueJugador.push("Agua")
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if(e.target.textContent === "🔥") {
                ataqueJugador.push("Fuego")
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, pokemones.length - 1)
    
    spanMascotaEnemigo.innerHTML = pokemones [mascotaAleatoria].nombre
    ataquesPokemonEnemigo = pokemones [mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquesPokemonEnemigo.length - 1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("Tierra")
    } else if(ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("Agua")
    } else {
        ataqueEnemigo.push("Fuego")
    }

    iniciarPelea ()
}

function iniciarPelea () {
    if(ataqueJugador.length === 5){
        combate()
    }
}
function indexAmbosOponentes (jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]

}

function combate(){
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes (index, index)
            crearMensaje("Empate⁉")
        } else if (ataqueJugador[index] === "Tierra" && ataqueEnemigo[index] === "Fuego") {
            indexAmbosOponentes (index, index)
            crearMensaje("Ganaste✔")
            victoriasJugador++
            spanVidasJugador.innerHTML = vidasJugador
        } else if (ataqueJugador[index] == "Agua" && ataqueEnemigo[index] == "Fuego") {
            indexAmbosOponentes (index, index)
            crearMensaje("Ganaste✔")
            victoriasJugador++
            spanVidasJugador.innerHTML = vidasJugador 
        } else if (ataqueJugador[index] == "Agua" && ataqueEnemigo[index] == "Tierra") {
            indexAmbosOponentes (index, index)
            crearMensaje("Ganaste✔")
            victoriasJugador++
            spanVidasJugador.innerHTML = vidasJugador
        } else {
            indexAmbosOponentes (index, index)
            crearMensaje("Perdiste❌")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()
}

function revisarVidas(){
    if (victoriasJugador === victoriasEnemigo ){
        crearMensajeFinal("IT'S A DRAW!!!🤝🤝")
    } else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("YOU WIN!!!🏆🏆🏆")
    } else {
        crearMensajeFinal("YOU LOSE!!!💫💥💢")
    }
}

function crearMensaje(resultado){

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    
    sectionMensajes.innerHTML = resultadoFinal

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