"use strict"

//FUNCIONES

/*
//así se define una función
function calculadora(){
    console.log("hola soy una calculadora");
}



*/

//función dinámica:

function porConsola(num1,num2){
    console.log("Suma: "+(num1+num2));
    console.log("Resta: "+(num1-num2));
    console.log("Multiplicación: "+(num1*num2));
    console.log("División: "+(num1/num2));
    console.log("****************************");

}

function porPantalla(num1,num2){
    document.write("Suma: "+(num1+num2)+"<br>");
    document.write("Resta: "+(num1-num2)+"<br>");
    document.write("Multiplicación: "+(num1*num2)+"<br>");
    document.write("División: "+(num1/num2)+"<br>");
    document.write("****************************");
}

function calculadora(num1, num2, mostrar = false){ //mostrar es una variable dinamica con el valor false aplicado por defecto
    if (mostrar==false) {
        porConsola(num1, num2); //de esta manera podemos invocar una función dentro de otra       
    } else {
        porPantalla(num1, num2);
    }
    return true;
}


//así se invoca una función con parámetros
calculadora(2,4);

calculadora(34,56,true);

/*

//tambien puedo pasar variables
for (let index = 0; index < 11; index++) {
    calculadora(index,4);
    
}

*/





