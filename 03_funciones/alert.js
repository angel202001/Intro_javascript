"use extrict";

let nombre = "jose";
let edad = 50;
let ciudad = "Stgo Rdguez";

//alert(nombre);
//alert("Bienvenido" + nombre);


//alert("Bienvenida angel.Tienes 18 años de edad. Naciste en Stgo Rdguez");
alert("Bienvenido " + nombre + ", Tienes "  +  edad  +  " años de edad . Naciste en " + ciudad);

// template string = interpolacion
// backtick = comilla invertida
// $(nombreVariable)

alert(`Bienvenida ${nombre}, Tienes ${edad} años de edad. Naciste en ${ciudad}`);
