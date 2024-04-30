let palabras = ["planta","comida","juegosaa"]

let letra = document.getElementById("letra").value.toLowerCase()

let boton = document.getElementById("boton")

let acierto = document.getElementById("acierto")

let aletorio = palabras[Math.floor(Math.random() * palabras.length)]

let letrasadvinadas = new Array(aletorio.length).fill("_")

document.getElementById("palabraoculta")


boton.addEventListener("click", ()=>{
    
    if (aletorio.includes(letra)) {
        for (let i = 0; i < palabras[aletorio].length ; i++) {
            if (palabras[aletorio][i] == letra) {
                letrasadvinadas[i] = letra
                
                acierto.innerHTML = "La letro introducida si exite esta en la posiciom"
                
            }
            if (!letrasadvinadas.includes("_")) {
                document.getElementById("mensaje")
                innerHTML = "Felicidades Has advinado la palabra"

                Document.getElementById("boton"),

            }
            else{
                acierto.innerHTML = "la letra no esta"

            }
    
        }

}})