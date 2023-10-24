"use strict"

/*

CALCULADORA
Programa que pida dos numeros por pantalla, requisitos:
    - si metemos mal un numero, que lo vuelva a pedir hasta que demos un valor correcto
    - mostrar en el cuerpo de la página, en una alerta y por consola el resultado de:
        suma
        resta
        multiplicación
        división

*/

var num1;
var num2;

while (!num1 || num1 == NaN){
    num1 = Number(prompt("Introduce el primer número"));
}

while (!num2 || num2 == NaN){
    num2 = Number(prompt("Introduce el segundo número"));
}

//muestro suma
document.write("La suma de "+num1+" y "+num2+" es "+(num1+num2)+"<br>");
alert("La suma de "+num1+" y "+num2+" es "+(num1+num2));
console.log("La suma de "+num1+" y "+num2+" es "+(num1+num2));


//muestro resta
document.write("La resta de "+num1+" y "+num2+" es "+(num1-num2)+"<br>");
alert("La resta de "+num1+" y "+num2+" es "+(num1-num2));
console.log("La resta de "+num1+" y "+num2+" es "+(num1-num2));



//muestro multiplicación
document.write("El producto de "+num1+" y "+num2+" es "+(num1*num2)+"<br>");
alert("El producto de "+num1+" y "+num2+" es "+(num1*num2));
console.log("El producto de "+num1+" y "+num2+" es "+(num1*num2));



//muestro división
document.write("El cociente de "+num1+" y "+num2+" es "+(num1/num2)+"<br>");
alert("El cociente de "+num1+" y "+num2+" es "+(num1/num2));
console.log("El cociente de "+num1+" y "+num2+" es "+(num1/num2));

