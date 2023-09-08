"use strict"

//Constantes
//Es un contenedor de datos invariable, no se puede modificar una vez definido

var web = "www.google.es";
const ip = "192.168.1.1";

web = "www.bing.com";
ip = "127.0.0.1"; //aqui falla porque la constante no se puede alterar

console.log(web, ip);