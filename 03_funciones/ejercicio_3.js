

let nombre = prompt("Como te llamas");
let edad = prompt ("Que edad tienes");
let monto = Number.parseInt(prompt ("Que cantidad tienes en peso") );

console.log (typeof monto);
// monto = Number.parsInt(monto);
// Convertir la edad en numero

edad = Number.parseInt(edad);

let tasaDelDolar = 54.3;
let conversionEnDolar = monto / tasaDelDolar;

//console.log(`La conversion es: ${conversionEnDolar. toFixed(2)}`);

console.log(`Haz digitado ${monto} pesos. La tasa del dolar es: ${tasaDelDolar}.
 Tu conversion es igual a ${conversionEnDolar. toFixed(2)}`);
