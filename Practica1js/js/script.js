

function revisar(){
    let caja = document.getElementById("mensaje")
    //obtenemos el parrafo donde ira el mensaje

    caja.innerHTML = "Respuesta correcta, eselente"
    
    caja.classList.remove("incorrecto")
    caja.classList.add("correcto")

}

function revisarmal(){
    let caja2 = document.getElementById("mensaje")
    //obtenemos el parrafo donde ira el mensaje

    caja.innerHTML = "Respuesta incorrecta, putito"

    caja2.classList.remove("correcto")
    caja2.classList.add("incorrecto")
}