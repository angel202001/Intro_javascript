/*

// Hacer un programa que diga si una persona es mayo o menor de edad

alert("Digite su edad para averiguar si es mayor o no");

let edad = Number(prompt("Digite su edad"));

// Verificar si la persona es mayor de edad 

if (edad >= 18){

    alert("Eres mayor de edad");

} else{
    
    alert("Eres menor de edad");

} 

*/

// Hacer un programa que le aplique un 18% de impuesto 
// a una compra que sea mayor de 1000 pesos

alert("Si su compra pasa de 1000 pesos, se le aplicara el 18% ");

let compra = Number(prompt("Cuanto es el costo de su compra "));

if (compra > 1000){

    alert("Se le aplica el 18% de impuesto ");
     compra = compra + (compra * 0.18);

    alert(`El valor es igual a ${compra}`);

} else {

    alert("No se le aplica el 18% de impuesto");
    alert(`El valor es igual a ${compra}`);
}
