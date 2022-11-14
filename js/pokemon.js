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

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let pokemones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDePokemones
let inputBulbasaur 
let inputSquirtle 
let inputCharmander 
let mascotaJugador
let mascotaJugadorObjeto
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
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./imagenesvarias/bosque.jpg"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if ( anchoDelMapa > anchoMaximoDelMapa ) {
    anchoDelMapa = anchoMaximoDelMapa - 20 
}

alturaQueBuscamos = anchoDelMapa * 600 / 800 

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos 

class Pokemon {
    constructor(nombre, foto, vida, fotoMapa)  {       
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40 
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarPokemon() {
        lienzo.drawImage(
            this.mapaFoto, 
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
}

let bulbasaur = new Pokemon ("Bulbasaur", "./imagenesvarias/bulbasaur.png ", 5, "./imagenesvarias/bulbasaurCara.png")

let squirtle = new Pokemon ("Squirtle", "./imagenesvarias/squirtle.png ", 5, "./imagenesvarias/squirtleCara.png")

let charmander = new Pokemon ("Charmander", "./imagenesvarias/charmander.png ", 5, "./imagenesvarias/charmanderCara.png")

let bulbasaurEnemigo = new Pokemon ("Bulbasaur", "./imagenesvarias/bulbasaur.png ", 5, "./imagenesvarias/bulbasaurCara.png")

let squirtleEnemigo = new Pokemon ("Squirtle", "./imagenesvarias/squirtle.png ", 5, "./imagenesvarias/squirtleCara.png")

let charmanderEnemigo = new Pokemon ("Charmander", "./imagenesvarias/charmander.png ", 5, "./imagenesvarias/charmanderCara.png")

bulbasaur.ataques.push(
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

bulbasaurEnemigo.ataques.push(
    {nombre: "🥌", id: "boton-tierra"},
    {nombre: "🥌", id: "boton-tierra"},
    {nombre: "🥌", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
)

squirtleEnemigo.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🥌", id: "boton-tierra"},
    {nombre: "🔥", id: "boton-fuego"},
)

charmanderEnemigo.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🥌", id: "boton-tierra"},
)

pokemones.push(bulbasaur, squirtle, charmander)

function iniciarJuego(){

    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"

    pokemones.forEach((pokemon) => {
        opcionDePokemones = `<input type="radio" name="mascota" id=${pokemon.nombre} />
        <label class= "tarjeta-de-pokemon" for=${pokemon.nombre}>
            <p>${pokemon.nombre}</p>
            <img src=${pokemon.foto} alt=${pokemon.nombre}>
        </label>` 
    contenedorTarjetas.innerHTML += opcionDePokemones
    inputBulbasaur = document.getElementById("Bulbasaur")
    inputSquirtle = document.getElementById("Squirtle")
    inputCharmander = document.getElementById("Charmander")

    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = "none"
    
    if(inputBulbasaur.checked) {
        spanMascotaJugador.innerHTML = inputBulbasaur.id
        mascotaJugador = inputBulbasaur.id
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
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
    
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
    
    spanMascotaEnemigo.innerHTML = pokemones[mascotaAleatoria].nombre
    ataquesPokemonEnemigo = pokemones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesPokemonEnemigo.length - 1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("Tierra")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("Agua")
    } else {
        ataqueEnemigo.push("Fuego")
    }
    iniciarPelea ()
}

function iniciarPelea () {
    if (ataqueJugador.length === 5) {
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
            crearMensaje("Empate 🤦‍♂️")
        } else if (ataqueJugador[index] === "Tierra" && ataqueEnemigo[index] === "Fuego") {
            indexAmbosOponentes (index, index)
            crearMensaje("Ganaste ✔")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] == "Agua" && ataqueEnemigo[index] == "Fuego") {
            indexAmbosOponentes (index, index)
            crearMensaje("Ganaste ✔")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador 
        } else if (ataqueJugador[index] == "Agua" && ataqueEnemigo[index] == "Tierra") {
            indexAmbosOponentes (index, index)
            crearMensaje("Ganaste ✔")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes (index, index)
            crearMensaje("Perdiste ❌")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()
}

function revisarVidas(){
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("IT'S A DRAW!!!🤝🤝")
    } else if (victoriasJugador > victoriasEnemigo) {
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

function reiniciarJuego() {
    location.reload()
}

function aleatorio(Min, Max) {
    Min = Math.ceil(Min)
    Max = Math.floor(Max)
    return Math.floor(Math.random() * (Max - Min + 1) + Min)
}

function pintarCanvas() {

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarPokemon()
    bulbasaurEnemigo.pintarPokemon()
    squirtleEnemigo.pintarPokemon()
    charmanderEnemigo.pintarPokemon()

    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(bulbasaurEnemigo, squirtleEnemigo, charmanderEnemigo)
    }
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = - 5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = - 5
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case "ArrowUp" :
            moverArriba()
            break
        case "ArrowDown" :
            moverAbajo()
            break
        case "ArrowRight" :
            moverDerecha()
            break
        case "ArrowLeft" :
            moverIzquierda()
            break
        default :
            break
    }
}

function iniciarMapa() {
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener("keydown", sePresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < pokemones.length; i++) {
        if (mascotaJugador === pokemones[i].nombre) {
            return pokemones[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 
    
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x 
    
    if ( abajoMascota < arribaEnemigo || 
        arribaMascota > abajoEnemigo || 
        derechaMascota < izquierdaEnemigo || 
        izquierdaMascota > derechaEnemigo 
        ) {
        return
        }

    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener("load", iniciarJuego)