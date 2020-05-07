"use extrict";

// selecciona el id

const inicio = document.querySelector
("div#inicio");
const btnEmpecemos = document.querySelector("button#empecemos");


// esconde el elemento div

btnEmpecemos.addEventListener("click", function(){

    inicio.style.display = "none";
  
});



