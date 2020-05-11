// Cuando el usuario haga click en el parrafo
// se cambia el color del fondo en el div
// de acuerdo al que el usuario elija
// y se colocará el valor del color en el span

// Declarar variable seleccionar elementos

const inputColor = document.querySelector("#color");
const parrafo = document.querySelector("#parrafo_color");
const divChangeColor = document.querySelector("#change_color");
const spanValor = document.querySelector("#valor");

// Confirmar que accedi a los elemtos
// console.log(inputColor,parrafo,divChangeColor,spanValor);


parrafo.addEventListener("click", function(){

    divChangeColor.style.backgroundColor = inputColor.value;

        // Obtener el color del input
        // Imprimir por la consola el valor del input
        //  console.dir(inputColor.value);
        // Cambiar color de fondo del div con el valor del input


      divChangeColor.style.backgroundColor = inputColor.value;
       
      // Colocar el valor del input en el span
      spanValor.innerHTML = inputColor.value;


});