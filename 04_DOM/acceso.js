// Seleccionar los elementos

let div = document.querySelector("div");
let p = document.querySelector("p");

console.log(div);
console.log(p);


function cambiarColor() {

    p.style.color = "red";
}

function cambiarTexto() {

    p.innerHTML = "Oops! El texto cambio";
}

div.addEventListener("click", cambiarTexto);
div.addEventListener("mouseover", cambiarColor);
div.addEventListener("dblclick", function(){
    confirm("Estas seguro de irte?");

});