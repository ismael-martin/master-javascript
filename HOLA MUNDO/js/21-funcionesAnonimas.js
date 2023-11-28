"use strict"
//funciones anonimas
/* son funciones que no tienen nombre */

var pelicula = function (nombre){//esta funcion no tiene nombre, se usa mucho en callbacks
    return "La pelicula es "+nombre;
};

console.log(pelicula("Inception")); //así puedo llamar a la función anónima, haciendo referencia a la variable

//función callback
/* es una función anónima que se pasa como parametro de otra función */

function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var resultado = num1 + num2;
    sumaYmuestra(resultado); //aqui invoco a las funciones anónimas
    sumaPorDos(resultado);
    return resultado;
}

sumame(5, 7, dato => { //esto es una funcion flecha
    console.log("La suma es ", dato);
}, 
function(dato){
    console.log("La suma por dos es ", (dato*2));
});