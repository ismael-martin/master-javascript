'use strict'
//con use strict nos forzamos a usar buenas practicas de programación en js

//variables
//una variable es un contenedor de información

//con var declaramos variables globales
var pais = "España";
var continente = "Europa";
var year = 2022;
var pais_continente = pais+' '+continente;

//con let tambien se pueden declarar variables
//usando let creamos variables que estarán disponibles solo para el bloque de codigo que estamos ejecutando
let prueba = "hola";
alert(prueba);

pais = "Mexico";
continente = "America";

console.log(pais, continente, year);

alert(pais_continente);
alert(pais);