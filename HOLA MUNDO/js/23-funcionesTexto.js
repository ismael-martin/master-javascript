'use strict'
//transformación de texto
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "Buen curso niño";

var dato = numero.toString(); //éste metodo transforma cualquier tipo de variable en string

dato = texto1.toUpperCase(); //éste metodo pasa las cadenas de texto a mayusculas
dato = texto2.toLowerCase(); //igual pero a minusculas xd
console.log(typeof dato);


//calcular longitud de un texto
var nombre = "";
console.log(nombre.length); //esto devuelve 0 porque es la longitud de nombre es 0 (solo funciona con textos o variables definidas)

var nombre2 = "Ismael MArtín Gómez";
console.log(nombre2.length); //esto devuelve 0 porque es la longitud de nombre es 0 (solo funciona con textos o variables definidas)
//si uso .length con arrays, me devuelve el número de elementos dentro del array

var textoUnido = texto1+" "+texto2; //concatenación clasica
console.log(textoUnido);

var textoUnido2 = texto1.concat(" "+texto2); //concatenación alternativa
console.log(textoUnido);


//busquedas en cadenas de texto
var busqueda = texto1.indexOf("curso"); //busca la primera coincidencia de la busqueda
var busqueda = texto1.lastIndexOf("curso"); //busca la ultima coincidencia de la busqueda
var busqueda = texto1.match("curso"); //busqueda avanzada, devuelve array con datos
var busqueda = texto1.substring(14,19); //metodo para extraer datos, hay que darle el index de inicio y opcionalmente el de fin
var busqueda = texto1.startsWith("curso"); //buscar texto al inicio de la cadena, devuelve true o false
var busqueda = texto1.endsWith("curso"); //buscar texto al final de la cadena, devuelve true o false
var busqueda = texto1.includes("curso"); //buscar texto en cualquier posición de la cadena, devuelve true o false

//funciones de reemplazo
var busqueda = texto1.replace("JavaScript", "Symfony"); //reemplaza texto en una cadena si coincide la busqueda
var busqueda = texto1.split(" "); //separa el texto en elementos de un array a partir del parámetro que pasemos al método

console.log(busqueda);