"use strict"
//programa que nos diga si un numero es par o impar
//1- ventama prompt
//2- verificar número

var num1;

do{
	num1 = Number(prompt("Dame un número"));
} while (!num1 || num1 == NaN)

if (num1%2==0){
    document.write("<p>El número "+num1+" es PAR</p>");
} else {
    document.write("<p>El número "+num1+" es IMPAR</p>");
}