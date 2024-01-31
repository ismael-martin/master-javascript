'use strict'

//arrays o matrices (coleccion) de datos

var nombre = "ismael"; //variable normal con un solo valor
var nombres = ["ismael", "victor", "perico", 52, true]; //colección de datos, se pueden meter todo tipo de datos
var lenguajes = new Array("PHP", "js", "java", "C#", "C++", "Python"); //otra forma de declarar un array

console.log(nombres);

//para acceder a un dato concreto del array:
console.log(nombres[2]); //debería mostrar perico ya que está almacenado en la posición 2 del array

//ver cantidad de elementos de un array
console.log(nombres.length);

/*
do {
    var elemento = parseInt(prompt("Qué elemento del array quieres?", 0)); //buscar un elemento del array que coincida con el tamaño del array
} while (elemento >= nombres.length || elemento < 0);

alert(nombres[elemento]);
*/

//mostrar todos los elementos de un array por pantalla con un bucle
document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");
for (let i = 0; i < lenguajes.length; i++) {
    document.write("<li>"+lenguajes[i]+"</li>")    
}
document.write("</ul>");