 // seleccionar los elementos

const imgPerfil = document.querySelector("img.imagen_perfil");

const tituloNombre = document.querySelector("h3.nombre");

const parrafoNombreUsuario = document.querySelector("p.nombre_usuario");

const spanSeguidores = document.querySelector("span.seguidores");

const spanSiguiendo = document.querySelector("span.siguiendo");

const parrafoBio = document.querySelector("p.bio");

const btnBuscar = document.querySelector("#buscar");

const barraBuscar = document.querySelector("#barra_buscar");



btnBuscar.addEventListener("click", function(){

    obtenerDatosGitHub();

   


});




// Pasos para obtener los datos

// 1. Crear una funcion asincroma
// 2. Ejecutar una petición y esperar por la repuesta
// 3. Verificar la respuesta y procesarla
// 4. convertir la respuesta y procesarla


// 1. Crear una funcion asincroma
async function obtenerDatosGitHub() {

    
    let valor = barraBuscar.value;

    // 2. Ejecutar una petición y esperar por la repuesta
    let respuesta = await fetch("https://api.github.com/users/"+valor);



    // 3. Verificar la respuesta y procesarla
    if (respuesta.ok){


        // 4. convertir la respuesta y procesarla
        let user = await respuesta.json();

        console.log(user);

        // Actualizar información
        // Actualizar la ruta de la imagen

        imgPerfil.src = user.avatar_url;
        
        tituloNombre.textContent = user.name;

        parrafoNombreUsuario.textContent = user.login;

        spanSeguidores.textContent = user.followers;

        spanSiguiendo.textContent = user.following;

        parrafoBio.textContent = user.bio;





        
    }


    

}








