//tipos de datos y operadoes
"use strict"

//alert("operadores");
//operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2; //suma
var operacion = numero1 - numero2; //resta
var operacion = numero1 * numero2; //multiplicacion
var operacion = numero1 / numero2; //division
var operacion = numero1 % numero2; //resto

alert("el resultado de la operacion es "+operacion);


//alert("tipos de datos");
//tipos de datos
var entero = 44; //numero entero
var texto = "esto es un texto" //esto es un string
var bool = true; //esto es un booleano (true o false)
bool = false;

//funciones para cambiar tipos de datos
var numero_falso = "33" // numero en sting
var decimal = 3.14; //los decimales se marcan con punto (.)

console.log(Number(numero_falso)+7); //pasamos el sting a numero y sale 40
//podemos usar parseFloat() para pasarlo a decimales o parseInt() para pasarlo a enteros

console.log(String(entero)+" ahora es un string"); //usamos String() para pasar un numero a string

//usamos typeof para averiguar de qué tipo es una variable
console.log(typeof entero);
console.log(typeof texto);
console.log(typeof bool);
console.log(typeof decimal);