"use strict"

var texto = "hola munco, soy una variable global";
var numero = 12;



function holaMundo(texto){
    var hola_mundo = "texto dentro de la función";
    console.log(texto);
    console.log(numero); //puedo acceder a numero porque es una variable global
    console.log(hola_mundo); //puedo acceder a hola_mundo porque es una variable local de la función

}

//console.log(hola_mundo);  <-- este console log no funciona fuera de la función holaMundo()