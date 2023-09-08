"use strict"

//bucle while
var year = 2022;

while(year != 1984){
	console.log("Estamos en el "+year);
	year--; //si no pongo este incremental el bucle es infinito y la pagina peta OJO
	if (year == 2000){
		break; //break rompe la ejecución del bucle
	} 
}

//do while sirve para ejecutar una bloque de código antes de comprobar las condiciones del bucle:

var years = 29;
do {
	alert("Solo para personas mayores de 30");
	years = 30;

} while (years < 30)