function cambiarEstilo (){
    document.body.style.backgroundColor = "red";
    document.write("soy un mensaje");
}

function imprimirMensajes(){
    alert("Hola, bienvenido");
    console.log("soy un mensaje");
}


function escribirMensaje(){

    console.log("Hola mundo.Esto es js");
}


const divClick = document.querySelector("div");

divClick.addEventListener("click", function(){

    cambiarEstilo();

    escribirMensaje();
    cambiarEstilo();

});