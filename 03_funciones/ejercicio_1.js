/*
let nombre = prompt ("Digita tu nombre");
let edad = prompt ("Dime tu edad");
let estadoCivil = prompt ("Dime tu estado civil");

*/
 // Estudiante

 /*
let estudiante = {

   nombre: prompt("Como te llamas"),
   edad: prompt("Que edad tienes"),
   curso: prompt("Cual es tu curso")
};
*/




let estudiante = {};

estudiante.nombre = prompt("Dime tu nombre");
estudiante.edad = prompt("Dime tu edad");
estudiante.curso = prompt("Dime tu curso");

console.log(estudiante.edad);

estudiante.edad = Number.parseInt(estudiante.edad);

console.log(estudiante.edad);