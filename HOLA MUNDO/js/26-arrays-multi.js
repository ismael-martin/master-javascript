'use strict'
//un array multidimensional es un array dentro de otro(s) array(s)

var categorias = ['acción', 'terror', 'comedia','drama', 'thriller', 'suspense', 'musical'];
var pelis = ['die hard', 'rec', 'hermanos por pelotas'];
var cine = [categorias, pelis];

//console.log(cine[0][1]); //de esta manera se accede a un dato concreto dentro de un array multidimensional

/*
//añadir elementos a un array con un prompt hasta que nosostros queramos
do{
    var peli = prompt("introduce una nueva peli");
    if(peli != "ACABAR"){
        pelis.push(peli);
    }
} while(peli != "ACABAR");

//el do while de arriba y el de abajo se comportan de la misma manera

do{
    var peli = prompt("introduce una nueva peli");
    pelis.push(peli);
} while(peli != "ACABAR");
pelis.pop(); //elimina el ultimo elemento (ACABAR)


console.log(pelis);
*/

//borrar un elemento concreto de un array
console.log(pelis);
var indice = pelis.indexOf('rec');
console.log(indice);
if (indice > -1){
    pelis.splice(indice, 1);
}
console.log(pelis);

//transformar array en string separado por comas
var cat = categorias.join();
console.log(cat);


//convertir string en array
var cadena = "texto1, texto2, texto3, texto4, texto5, texto6, texto7, texto8";
var matriz = cadena.split(", ");
console.log(matriz);

//ordenar un array
console.log(categorias);

console.log(categorias.sort()); //ordena por orden alfabetico
console.log(categorias.reverse()); //orden inverso

