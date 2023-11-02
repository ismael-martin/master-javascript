"use strict"
//funciones anonimas
/* son funciones que no tienen nombre, se crean como valor de un parámetro */

var pelicula = function (nombre){//esta funcion no tiene nombre, se usa mucho en callbacks
    return "La pelicula es "+nombre;
};

console.log(pelicula("Inception")); //así puedo llamar a la función anónima, haciendo referencia a la variable

//función callback
/* es una función anónima que se pasa como parametro de otra función */

function sumar(num1, num2){
    var resultado = num1 + num2;
    return resultado;
}

console.log(sumar(2,3));