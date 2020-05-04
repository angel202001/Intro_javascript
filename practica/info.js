"use extrict"


// Dias de la semana

 let diasSemana = [];

 diasSemana[0] = prompt("Cual es el primer dia de la semana?");
 diasSemana[1] = prompt("Cual es el segundo dia de la semana?");
 diasSemana[2] = prompt("Cual es el tercer dia de la semana?");
 diasSemana[3] = prompt("Cual es el cuarto dia de la semana?");
 diasSemana[4] = prompt("Cual es el quinto dia de la semana?");
 diasSemana[5] = prompt("Cual es el sexto dia de la semana?");
 diasSemana[6] = prompt("Cual es el septimo dia de la semana?");

// Nombres de la familia

let nombreFamilia = [];

nombreFamilia.push(prompt("Digita  el nombre de tu padre") );
nombreFamilia.push(prompt("Digita el nombre de tu madre") );
nombreFamilia.push(prompt("Digita el nombre de tu hermano") );


// Datos personales

let datos = {};

datos.nombreCompleto = String(prompt("Escribe tu nombre completo"));
datos.FechaNacimiento = prompt("Cual es tu fecha de nacimiento?");
datos.LugarNacimiento = prompt("Donde naciste?");
datos.Edad = Number(prompt("Cual es tu edad?"));
datos.ComidasFavotira = prompt("Escribe 3 comidas favoritas");
datos.PaisesVisitar = prompt("Escribe 5 paises que te gustaria visitar");
datos.Licencia = confirm("Digite si posee licencia para conducir Aceptar es = si / cancelar = no");
datos.Universidad = confirm("Digite si esta en la universidad Aceptar es = si / cancelar = no");


// Datos de mi artista favorito

let artistaFavorito = {

    nombre:"eminem",
    otrosNombres:["Slim Shady","Marshal Mathers"],
    edad:47,
    canciones:["Lose Yourself","Not Afraid","Mockingbird","Stan"],
    hijos:["Hailie Jade","Alaina Mathers","Whitney scott"],
    logros:"Primer rapero en ganar un oscar",

};

/* Datos personales
para imprimir en la consola */

    let datosPersonales = {};

    datosPersonales.nombreCompleto = "Angel Vargas";
    datosPersonales.fechaNacimiento = "7 de mayo del 2001";
    datosPersonales.paisMegustariaVisitar = "Estados Unidos";



    console.log(`Mi nombre completo es ${datosPersonales.nombreCompleto}`);
    console.log(`Mi fecha de nacimiento es el ${datosPersonales.fechaNacimiento}`);
    console.log(`Pais que quiero visitar ${datosPersonales.paisMegustariaVisitar}`);
    console.log(`Informacion de mi artista favorito:

    Nombre: ${artistaFavorito.nombre}
    otrosNombre: ${artistaFavorito.otrosNombres}
    logros: ${artistaFavorito.logros}
    canciones: ${artistaFavorito.canciones}
    
    
    `);
