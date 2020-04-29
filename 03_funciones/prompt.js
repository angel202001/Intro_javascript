let numero1 = prompt ("Digita un numero");
let numero2 = prompt ("Digita otro numero");

console.log( numero1 +numero2 );


// convertir el texto a numero

numero1 = Number.parseFloat(numero1);
numero2 = Number.parseFloat(numero2);

let suma = numero1 + numero2;

// Definir la cantidad de decimales
suma = suma.toFixed(2);
console.log( suma);


// Convertir el string a decimal

suma = Number.parseFloat(suma);

console.log(suma);

// Integer = entero
10
50


// Float = flotante = decimal

3.14