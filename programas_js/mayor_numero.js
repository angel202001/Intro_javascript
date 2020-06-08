alert("Vamos a verificar cual es mayor de los dos números que digitaste");

// Declarar las variables que vamos a utilizar

let numero1;
let numero2;

// Pedirle al usuario que digite los números
numero1 = Number(prompt("Digite el primer número "));
numero2 = Number(prompt("Digite el segundo número"));

// preguntar

if (numero1 > numero2){
    //verdadero
    alert(`${numero1} es mayor que ${numero2}`);

} else{
    // false
     
    if (numero1 == numero2){
        alert("Los números son iguales")


    } else{
        alert(`${numero1} es menor que ${numero2}`);
        

    }


}