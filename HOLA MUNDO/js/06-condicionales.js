"use strict"
//condicionales

//if
//var edad1 = 30;
var edad1 = 10;
var edad2 = 12;


if(edad1 > edad2){
	console.log("edad1 es mayor que edad2");
} else {
	console.log("edad1 es menor") //se muestra este en consola
}

var edad = 29;
var nombre = "ismael";

/*
operadores relacionales
mayor >
menor <
mayor igual >=
menos igual <=
igual ==
distinto !=

*/
if (edad >= 18){
	//es mayor de edad
	console.log(nombre+" tiene "+edad+" años, es MAYOR de edad");
	if(edad <= 33){
		console.log("todavia eres milenial");
	} else if(edad >= 70){
		console.log("Estas viejo");
	} else {
		console.log("Ya no eres milenial");
	}
} else {
	//es menor de edad
	console.log(nombre+" tiene "+edad+" años, es MENOR de edad");
}

//operadores logicos
/*
and(y) &&
or(o) ||
negacion !
*/

var year = 2022
if(year != 2016 ){
	console.log("el año no es 2016");
}

if(year >= 2000 && year <= 2030){
	console.log("estamos en la era actual")
} else {
	console.log("estamos en la era postnuclear")
}

if (year == 2008 || (year >= 2018 && year == 2028)){
	console.log("el año termina en 8");
} else {
	console.log("AÑO NO REGISTRADO")
}