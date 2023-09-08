"use strict"
 //hacer un programa que muestre todos los numeros que estén entre dos numeros introducidos por el usuario

var num1;
var num2;

while (!num1 || num1 == NaN){
	num1 = Number(prompt("Dame el primer número"));
}

while (!num2 || num2 == NaN){
	num2 = Number(prompt("Dame el segundo número"));
}



if (num1 > num2){
    console.log("los numeros que hay entre "+num2+" y "+num1+" son");
    for(var i = num2+1; i < num1; i++){
        console.log(i);
    }

} else if (num1 < num2){
    console.log("los numeros que hay entre "+num1+" y "+num2+" son");
    for(var i = num1+1; i < num2; i++){
        console.log(i);
    }

} else if (num1 == num2){
    console.log("los numeros que has introducido con iguales, no hay nada en medio");

} else {
    console.log("Algo ha ido mal");
}

//otra forma de hacerlo con document.write mostrando los resultados directamente en pantalla en lugar de la consola

if (num1 > num2){
    document.write("<h1>De "+num2+" a "+num1+" están los siguientes numeros: </h1><br>");
    for(var i = num2+1; i < num1; i++){
        document.write(i+"<br>");
    }

} else if (num1 < num2){
    document.write("<h1>De "+num2+" a "+num1+" están los siguientes numeros: </h1><br>");
    for(var i = num1+1; i < num2; i++){
        document.write(i+"<br>");
    }

} else if (num1 == num2){
    document.write("<h1>"+num1+" y "+num2+" son iguales </h1>");

} else {
    document.write("Algo ha ido mal");
}