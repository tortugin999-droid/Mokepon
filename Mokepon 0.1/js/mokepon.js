let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

window.addEventListener("load", iniciarjuego)
//para agilizar el proceso del document
const $ = selector => document.getElementById(selector)
//para dar un dato aleatorio entre 3 dígitos
function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}


function iniciarjuego(){
    let seleccionarAtaque = $("seleccionar-ataque")
    seleccionarAtaque.style.display = "none"
    let seccionReinicio = $("reiniciar")
    seccionReinicio.style.display = "none"

    let botonMascotas = $("boton-mascotas")
    botonMascotas.addEventListener("click", seleccionarMascotaJugador)

    let botonfuego = $("boton-fuego")
    botonfuego.addEventListener("click", () => realizarAtaque("FUEGO"))
    let botonagua = $("boton-agua")
    botonagua.addEventListener("click", () => realizarAtaque("AGUA"))
    let botontierra = $("boton-tierra")
    botontierra.addEventListener("click", () => realizarAtaque("TIERRA"))

    let botonReiniciar = $("boton-reinicio")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}
    function seleccionarMascotaJugador(){
    let seleccionarMascota = $ ("seleccionar-mascota")
    seleccionarMascota.style.display = "none"
    let seleccionarAtaque = $("seleccionar-ataque")
    seleccionarAtaque.style.display = "block"

    let inputhipogoge = $("Hipogoge")
    let inputcapipepo = $("Capipepo")
    let inputratigueya = $("Ratigueya")
    let spanMascotaJugador = $ ("mascota-jugador")
//selección de mascota jugador
    if (inputhipogoge.checked){
        alert("HIPO-HIPO")
        spanMascotaJugador.innerHTML= "Hipogoge"
    } else if (inputcapipepo.checked){
        alert("CAPIIIIIIII")
        spanMascotaJugador.innerHTML= "Capipepo"
    } else if (inputratigueya.checked){
        alert("RATIGUEYAAAAAA")
        spanMascotaJugador.innerHTML= "Ratigueya"
    } else {
        alert("Selecciona a una mascota")
    }
    seleccionarMascotaEnemigo()
}
//Mascota aleatoria para el enemigo
function seleccionarMascotaEnemigo(){
    let mascotaEnemigaaletoria = aleatorio(1,3)
    let spanMascotaEnemigo = $("mascota-rival")

    if ( mascotaEnemigaaletoria == 1) {
        spanMascotaEnemigo.innerHTML = "Hipogoge"   
    }else if ( mascotaEnemigaaletoria == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }
    else {
    spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}
//ATAQUES DE ELEMENTOS del jugador
function realizarAtaque(tipoAtaque){
    ataqueJugador = tipoAtaque
    aleatorioEnemigo()
    combates()

}
//ataque enemigo 
function aleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }
    else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }
    else{
        ataqueEnemigo = "TIERRA"
    }
}
//mensajes y resultados de los combates
function combates(){
    let resultado
    let spanvidasJugador = $("vidas-jugador")
    let spanvidasRival = $("vidas-rival")

    if (ataqueJugador == ataqueEnemigo){
        resultado = "EMPATE"
    }
    else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA" || ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA" || ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        resultado = "GANASTE"
        vidasEnemigo--
        spanvidasRival.innerHTML = vidasEnemigo
    }
    else{
        resultado = "PERDISTE"
        vidasJugador--
        spanvidasJugador.innerHTML = vidasJugador
    }
    mensaje(resultado)
    revisarVidas()
}

function revisarVidas(){
    let resultadofinal
    if (vidasJugador == 0){
        resultadofinal = ("PERDISTE")
        mensajefinal(resultadofinal)
    } else if(vidasEnemigo == 0){
        resultadofinal = ("GANASTE")
        mensajefinal(resultadofinal)
    }
}

function mensaje(resultado){
    let parrafo = document.createElement("p")
    let sectionmensaje = $("mensajes")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", LA MASCOTA RIVAL ATACO CON " + ataqueEnemigo + " - " + resultado
    sectionmensaje.appendChild(parrafo)
}
function mensajefinal(resultadofinal){
    let parrafo = document.createElement("p")
    let sectionmensaje = $("mensajes")
    parrafo.innerHTML = resultadofinal
    sectionmensaje.appendChild(parrafo)

    let botonfuego = $("boton-fuego")
    botonfuego.disabled = true
    let botonagua = $("boton-agua")
    botonagua.disabled = true
    let botontierra = $("boton-tierra")
    botontierra.disabled = true
    let seccionReinicio = $("reiniciar")
    seccionReinicio.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

