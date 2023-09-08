"use strict"

//programa que pida dos numeros y que nos diga cual es el mayor, el menor o si son iguales
//PLUS si las variables no son numeros o son menores que 0 nos vuelva a pedir los datos
var num1;
var num2;

while (!num1 || num1 < 0 || num1 == NaN){
	num1 = Number(prompt("Dame el primer número"));
}

while (!num2 || num2 < 0 || num2 == NaN){
	num2 = Number(prompt("Dame el segundo número"));
}

var imprime = "";

if (num1 > num2){
	imprime = "El primer numero es mayor que el segundo";
} else if (num1 < num2){
	imprime = "El primer numero es menor que el segundo";
} else if (num1 == num2){
	imprime = "Los dos numeros son iguales";
} else {
	imprime = "Algo ha ido mal";
}

console.log(imprime);
