// Tipos de datos primitivos

console.log(typeof "Hola a todos!");
console.log(typeof 13);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

// Tipos de datos avanzados o especiales

console.log (typeof {});
console.log(typeof []);

console.log("Todo es un objeto");
console.log("Angel".length);
console.log("angel".toUpperCase());
console.log("Angel".toLowerCase());
console.log("lunes,martes,miercoles".split(","));

// Ejemplo con los numbers
console.log("Ejemplo con numeros");
console.log(10.4);
console.log(10.4.toString());
console.log(10.892.toFixed(1));
console.log(10.892.toExponential());

// Ejemplo con los boolean
console.log("Ejemplo con los boolean");
console.log(true);
console.log(false);

// Ejemplo con los arrays
console.log("Ejemplo con los arrays");
//console.log(["Hola","a","todos"].length);
//console.log(["Hola","a","todos"].join());
//console.log(["Hola","a","todos"].push("!!!!"));

let listado = "angel,jose,mario".split(",");

console.log(listado);
listado.push("mata");

console.log(listado.toString());