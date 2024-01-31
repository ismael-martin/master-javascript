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


//mostrar todos los elementos de un array por pantalla con un bucle
document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");
for (let i = 0; i < lenguajes.length; i++) {
    document.write("<li>"+lenguajes[i]+"</li>")    
}
document.write("</ul>");


//otra forma de recorrer un array mucho más limpia
lenguajes.forEach((element, index)=>
document.write("<li>"+index+" "+element+"</li>"));

*/
//otra forma más de recorrer un array
document.write("<ul>");
for(let lengua in lenguajes){
    document.write("<li>"+lenguajes[lengua]+"</li>");
}
document.write("</ul>");


//busqueda en array
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP"); //para buscar un valor
var busquedaIndex = lenguajes.findIndex(lenguaje => lenguaje == "js"); //para buscar un indice
console.log(busqueda); //devolverá undefined si la busqueda no coincide
console.log(busquedaIndex); //devolverá undefined si la busqueda no coincide

//metodo para buscar valores de según qué tipo
var precios = [10,24,2,34,66,46,23,45,3];
var busca = precios.some(precio => precio >= 40);//devuelve true porque cumple la condición
console.log(busca);
