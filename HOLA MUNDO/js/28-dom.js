'use strict'
//hablando del Document Object Model (DOM)

function cambiaColor(color){
    caja.style.background = color;
}

//BUSCAR ELEMENTOS CON UN ID CONCRETO
//var caja = document.getElementById("micaja");  SE PUEDEN USAR CUALQUIERA DE LAS DOS FORMAS PARA SELECCIONAR UN ELEMENTO HTML
var caja = document.querySelector("#micaja"); //EL SELECTOR FUNCIONA IGUAL QUE EN CSS

caja.innerHTML = "AQUI MANDA JS NO HTML ¬.¬"
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

//SELECCIONAR ELEMENTOS POR SU ETIQUETA HTML
var divs = document.getElementsByTagName('div');


var contenido = divs[2];
contenido.innerHTML = "otro texto random que cambio con JS";
contenido.background = "blue";

divs.forEach((valor, indice) => {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(valor);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
    
});

//SELECCIONAR ELEMENTOS POR SU CLASE 