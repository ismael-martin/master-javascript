'use strict'
/* programa que 
1- pedir 6 numeros por pantalla y meterlos en un array
2- mostrar el array entero en el cuerpo de la página y en la consola
3- sacar el array ordenado y mostrarlo
4- invertir su orden y mostrarlo
5- mostrar cuantos elementos tiene el array
6- buscar un valor introducido por el usuario y que nos diga si está y en qué posición (si lo encuentra)

*/

//mejorando el código con funciones
function mostrarArray(mtrx, textoCustom = ""){

    document.write("MUESTRO EL ARRAY "+textoCustom);
    console.log("MUESTRO EL ARRAY "+textoCustom);

    document.write("<ul>");
    for(let numero in mtrx){
        document.write("<li>"+mtrx[numero]+"</li>");
        console.log(mtrx[numero]);
    }
    document.write("</ul>");

}

//PARTE 1
var arrayNumeros = [];

do{
    var numero = parseInt(prompt("introduce un numero en el array"));
    if(!isNaN(numero)){
        arrayNumeros.push(numero);
    }
} while(arrayNumeros.length < 6);

//PARTE 2
mostrarArray(arrayNumeros);

//PARTE 3
var ordenado = arrayNumeros.sort(function(a, b) {
    return a - b;
});
mostrarArray(ordenado, "ORDENADO");

//PARTE 4
var invertido = ordenado.reverse();
mostrarArray(invertido, "INVERTIDO");

//PARTE 5
document.write("<p>El array introducido consta de "+arrayNumeros.length+" elementos</p>");
console.log("El array introducido consta de "+arrayNumeros.length+" elementos");

//PARTE 6
do {
    var buscar = prompt("introduce un numero para buscar en el array");
}while(isNaN(buscar))
var busqueda = arrayNumeros.some(numero => numero == buscar); //devuelve true si encuentra el numero
var busquedaIndex = arrayNumeros.findIndex(num => num == buscar); //para buscar el indice

if (busqueda == true){
    console.log("EL NÚMERO "+buscar+" ESTÁ EN EL ARRAY EN EL INDICE "+busquedaIndex);
    document.write("<p>EL NÚMERO "+buscar+" ESTÁ EN EL ARRAY EN EL INDICE "+busquedaIndex+"</p>");
} else {
    console.log("El numero "+buscar+" no se encuentra en el array");
    document.write("<p>El numero "+buscar+" no se encuentra en el array</p>");
}
