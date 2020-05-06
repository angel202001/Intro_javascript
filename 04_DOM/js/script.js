"use extrict";
/*
let titulo1 = document.querySelector("h1");

titulo1.id = "titulo_principal";

titulo1.classList.add("resaltado");
titulo1.classList.add("color-red");

titulo1.innerHTML = "Datos desde JS";
titulo1.innerHTML = "Hola <i>a todos!</i>";

console.log(titulo1);


// DOCUMENT OBJECT MODEL

console.dir(document);

console.log( document.URL);
console.log( document.body);
console.log( document.head);
console.log( document.links);
console.log( document.title);


document.title = "Titulo cambiado desde js";
document.URL = "https://www.google.com";

document.addEventListener("click", function(){
    alert("Hola , haz hecho click en el documento");

});

*/

let inputNumero1 = document.querySelector
("input#numero1");

let inputNumero2 = document.querySelector
("input#numero2");

let btnCalcular = document.querySelector
("button#calcular");



//console.log(inputNumero1);
//console.log(inputNumero2);
//console.log(btnCalcular);

// Agregado el evento click
btnCalcular.addEventListener("click", function(){

   let valor1 = Number(inputNumero1.value);
   let valor2 = Number(inputNumero2.value);

   let suma = (valor1 + valor2);

   alert(`la suma es igua a ${suma} `);

});