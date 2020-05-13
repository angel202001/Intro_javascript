let usuarioGitHub = {

    nombre: "angel miguel",
    nombre_usuario:"angel202001",
    url_imagen:"https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"

};

//console.log(usuarioGitHub);

let textoJSON = JSON.stringify(usuarioGitHub);

//console.log(textoJSON);

let usuarioGitHubJSON = `

{

    "nombre":"angel miguel",
    "nombre_usuario": "angel202001",
    "url_imagen": "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png",
    "edad":"23"
}

`;

let objetoJSON = (JSON.parse(usuarioGitHubJSON));

/*
console.log(objetoJSON.nombre);
console.log(objetoJSON.nombre_usuario);
console.log(objetoJSON.url_imagen);
console.log(objetoJSON.edad);
*/

let miUsuarioJSON = `{
    "login": "angel202001",
    "id": 59874616,
    "node_id": "MDQ6VXNlcjU5ODc0NjE2",
    "avatar_url": "https://avatars1.githubusercontent.com/u/59874616?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/angel202001",
    "html_url": "https://github.com/angel202001",
    "followers_url": "https://api.github.com/users/angel202001/followers",
    "following_url": "https://api.github.com/users/angel202001/following{/other_user}",
    "gists_url": "https://api.github.com/users/angel202001/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/angel202001/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/angel202001/subscriptions",
    "organizations_url": "https://api.github.com/users/angel202001/orgs",
    "repos_url": "https://api.github.com/users/angel202001/repos",
    "events_url": "https://api.github.com/users/angel202001/events{/privacy}",
    "received_events_url": "https://api.github.com/users/angel202001/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": "Santiago de los caballeros R.D",
    "email": null,
    "hireable": null,
    "bio": "Mi nombre es Angel nací en Santiago Rodriguez, tengo 18 años ",
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2020-01-14T13:04:40Z",
    "updated_at": "2020-05-13T14:08:26Z"
  }`

  let user = JSON.parse(miUsuarioJSON);

 //  Javascript objeto Notation = JSON

 // seleccionar los elementos

const imgPerfil = document.querySelector("img.imagen_perfil");

const tituloNombre = document.querySelector("h3.nombre");

const parrafoNombreUsuario = document.querySelector("p.nombre_usuario");

const spanSeguidores = document.querySelector("span.seguidores");

const spanSiguiendo = document.querySelector("span.siguiendo");


//console.dir(imgPerfil);

// Actualizar la ruta de la imagen

 imgPerfil.src = user.avatar_url;

// Actualizar el nombre

tituloNombre.textContent = user.name;

// Actualizar el nombre de usuario

parrafoNombreUsuario.textContent = user.login;

// Actualizar informacion de seguidores

spanSeguidores.textContent = user.followers;
spanSiguiendo.textContent = user.following;





