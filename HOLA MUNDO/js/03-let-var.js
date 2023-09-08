'use strict'

//pruebas con let y var

//usando var
console.log("usando var");

var numero = 40;
console.log(numero); //valor 40

if(true){
	var numero = 50; //var actualiza el valor de la variable para todo el código
	console.log(numero); //valor 50
}

console.log(numero); //valor 50

console.log("ahora con let");

//usando let
var numero = 40;
console.log(numero); //valor 40

if(true){
	let numero = 50; //let solo actua dentro de este bloque if
	console.log(numero); //valor 50
}

console.log(numero); //valor 40