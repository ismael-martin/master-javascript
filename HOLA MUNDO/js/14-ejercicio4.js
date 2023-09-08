"use strict"
//mostrar todos los numeros impares que estén entre dos numeros

var num1;
var num2;

while (!num1 || num1 == NaN){
	num1 = Number(prompt("Dame el primer número"));
}

while (!num2 || num2 == NaN){
	num2 = Number(prompt("Dame el segundo número"));
}


if (num1 > num2){
    document.write("<h1>De "+num2+" a "+num1+" están los siguientes numeros impares: </h1><br>");
    for(var i = num2+1; i < num1; i++){
        if (i%2!=0){//
        document.write(i+"<br>");
        }
    }

} else if (num1 < num2){
    document.write("<h1>De "+num1+" a "+num2+" están los siguientes numeros impares: </h1><br>");
    for(var i = num1+1; i < num2; i++){
        if (i%2!=0){//
        document.write(i+"<br>");
        }
    }

} else if (num1 == num2){
    document.write("<h1>"+num1+" y "+num2+" son iguales </h1>");

} else {
    document.write("Algo ha ido mal");
}