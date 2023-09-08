"use strict"

//usando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahí mostrar el resultado

var suma = 0;
var contador = 0;
var media = 0;

do {
	var numero = Number(prompt("Introduce numeros hasta que introduzcas un negativo"));

	if(isNaN(numero)){
		numero = 0;
	} else if (numero >= 0){
		suma += numero;
		contador++;
	}

} while (numero >= 0)

media = suma / contador;

alert("La suma de los numeros que has introducido es "+suma)
alert("La media de los numeros que has introducido es "+media)