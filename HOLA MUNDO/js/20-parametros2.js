"use strict"

//parametros REST y SPREAD
function listadoFrutas(fruta1, fruta2){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
}

listadoFrutas("platano", "naranja", "pera", "manzana", "uva"); //esta invocación de la función solo devolvería los primeros 2 valores dados

function listadoFrutas2(fruta1, fruta2, ...restoFrutas){ //de esta manera restoFrutas se convierte en un array con el resto de variables
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log(restoFrutas);
}
// ...restoFrutas sería un parámetro REST

listadoFrutas2("platano", "naranja", "pera", "manzana", "uva");

//en cambio si la función listadoFrutas2 recibe un array en uno de sus parámetros y quiero que lo trate como variables distinas escribiremos su invocación así:
var frutas = ["Aguacate", "Melón"]; 
listadoFrutas2(...frutas, "Sandía", "Mandarina");
// ...frutas sería un parámetro SPREAD