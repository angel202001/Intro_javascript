"use extrict"
/*
let diasSemana = [

    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",

];

console.table(diasSemana);
*/

/*

diasSemana[4] = "Jueves";
diasSemana[5] = "Viernes";
diasSemana[6] = "Sabado";

console.table(diasSemana);
*/

/*
let meses = ["enero"];

meses["1"] = "febrero";
meses["2"] = "marzo";

// push

meses.push("abril");
meses.push("mayo");
meses.push("junio");
meses.push("julio");
meses.push("agosto");

console.table(meses);

meses[0] = "january";

console.table(meses);
*/

let nombre = prompt("Dime tu nombre");
let edad = Number.parseInt(prompt("Dime tu edad"));
let coloresFavoritos = [];

console.log(nombre);
console.log(edad);
console.log("antes");
console.table(coloresFavoritos);


// forama #1

/*

coloresFavoritos[0] = prompt("Dime tu primer color favorito");
coloresFavoritos[1] = prompt("Dime tu segundo color favorito");
coloresFavoritos[2] = prompt("Dime tu tercer color favorito");

console.log("despues");
console.table(coloresFavoritos);


console.log("Tu primer color favorito es: $ {colorFavorito[0]}");
*/

// forma #2

/*
coloresFavoritos.push( prompt("Dime tu primer color favorito"));

coloresFavoritos.push( prompt("Dime tu segundo color favorito"));

coloresFavoritos.push( prompt("Dime tu tercer color favorito"));

console.table(coloresFavoritos);
*/

// Forma #3

let color1 = prompt("Dime tu primer color");
let color2 = prompt("Dime tu segundo color");
let color3 = prompt("Dime tu tercer color");

coloresFavoritos[0] = color1;
coloresFavoritos[1] = color2;
coloresFavoritos[3] = color3;

coloresFavoritos.push(color1);
coloresFavoritos.push(color2);
coloresFavoritos.push(color3);