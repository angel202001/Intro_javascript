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

let artistaFavorito = {};

    artistaFavorito.Nombre = prompt("Escribe el nombre de tu artista favorito");
    artistaFavorito.Edad = prompt("Cual es la edad de tu artista favorito?")
    artistaFavorito.Canciones = prompt("Cuales son las cansiones de tu artista favorito?")
    artistaFavorito.logro = prompt("Escribe algun logro de tu artista favorito");


 /* Datos que van a salir en la
 consola luego del usuario
 escribir la informacion */

   
    console.log(`Mi nombre es ${datos.nombreCompleto}`);
    console.log(`Mi fecha de nacimiento es el ${datos.FechaNacimiento}`);
    console.log(`Paises que me gustarian visitar son: ${datos.PaisesVisitar}`);
    console.log(artistaFavorito);


    




