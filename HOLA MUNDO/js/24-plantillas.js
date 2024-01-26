'use strict'
//plantillas de texto
var nombre = prompt("METE TU NOMBRE");
var apellidos = prompt("METE TU APELLIDOS");

//var texto = " Mi nombre es: "+nombre+" "+apellidos; //concatenación normal


//plantilla (se usan comillas invertidas)
var texto = `
    <h1>Hola que tal?</h1>
    <h3>Me llamo ${nombre}</h3>
    <h3>Y mi apellido es ${apellidos}</h3> 

`;

document.write(texto);