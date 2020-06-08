/*
alert("Vamos a calcular el valor total de tu compra");
alert("Cuanto es el valo de tu compra");
let compra = Number(prompt("Digite el valor de la compra"));

if( compra>300 ) {
    // verdadero

    alert("Se le aplica el 20% de descuento");
    let porcentajeDescuento;
    porcentajeDescuento = 0.20;
    porcentajeDescuento = compra * porcentajeDescuento;
    let total;
    total = compra - porcentajeDescuento;

    alert(total);

} else{
    // false

    alert("No se le aplica el 20%");
}

*/

// Venta  de un Iphone x

alert("Venta de un Iphone x");
let precio = 52000 ;

alert(`precio inicial del Iphone ${precio}`);
let esFamiliar = confirm("Eres un familiar");

if (esFamiliar) {
    // verdadero
    precio = 45000;


} else {
    // false
    let esAmigo = confirm("Eres amigo");

    if (esAmigo) {
        // verdadero
        precio = 48000;



    } else{
        // false
        alert("No te hacemos rebaja");

    }


}

alert(`Precio para tu Iphone ${precio}`);