"use strict"

//FUNCIONES

/*
//así se define una función
function calculadora(){
    console.log("hola soy una calculadora");
}



*/

//función dinámica:

function calculadora(num1, num2, mostrar = false){
    console.log("Suma: "+(num1+num2));
    console.log("Resta: "+(num1-num2));
    console.log("Multiplicación: "+(num1*num2));
    console.log("División: "+(num1/num2));
    console.log(mostrar);
    console.log("****************************");
}

/*

//así se invoca una función con parámetros
calculadora(2,4);
calculadora(34,56);

//tambien puedo pasar variables
for (let index = 0; index < 11; index++) {
    calculadora(index,4);
    
}

*/

//parametros opcionales
