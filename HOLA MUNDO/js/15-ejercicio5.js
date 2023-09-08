"use strict"
//programa que muestre todos los numeros divisores de un numero introducido en un prompt

var num1;
var divisor;

do{
	num1 = Number(prompt("Dame un número"));
} while (!num1 || num1 < 0 || num1 == NaN)
divisor = num1;


document.write("<h1>Los numeros divisores de "+num1+" son: </h1><br>");

while (divisor != 0){
    if (num1%divisor==0){
        document.write("<p> "+divisor+" es un divisor de "+num1+"</p>");
    }
    divisor--;
}
