"use strict"

//mostrar la tabla de multiplicar de un numero introducido por pantalla

var numero;

while (!numero || numero == NaN){
    numero = Number(prompt("De qué numero quieres ver su tabla de multiplicar?", 1));
}

document.write("<h1>Tabla del "+numero+"</h1>");

for (let i = 0; i < 11; i++) {
    document.write(numero+" X "+i+" = "+numero*i+"<br>");
    
}

//TODAS LAS TABLAS, AHI COMO SI NO HUBIERA UN MAÑANA (del 1 al 10 jaja flipao pero no mucho)

document.write("<br><h1>Todas las tablas del 1 al 10</h1>");

for (var mult = 1; mult < 11; mult++) {
    document.write("<h1>Tabla del "+mult+"</h1>");
    for (var x = 0; x < 11; x++) {
        document.write(mult+" X "+x+" = "+mult*x+"<br>");
        
    }
    document.write("<br>");
    
}
