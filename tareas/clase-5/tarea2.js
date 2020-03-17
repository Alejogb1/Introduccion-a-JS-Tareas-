//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*/


document.querySelector("#button").onclick =  function() {
    const $segundoNombreUser = (document.querySelector("#segundo-nombre").value);
    const $apellidoUser = document.querySelector("#apellido").value;
    const $edadUser = document.querySelector("#edad-user").value;
   let $primerNombre = document.querySelector("#primer-nombre").value;
    if ($segundoNombreUser && $apellidoUser && $edadUser !== ""){
      document.querySelector("h3").textContent = "Ahhh tu informacion es: " + capitalizeFirstLetter($primerNombre) + " " + capitalizeFirstLetter($segundoNombreUser) + " " + capitalizeFirstLetter($apellidoUser) + "; Tu edad: " + $edadUser + "!";
    } else {
      document.querySelector("h3").textContent = "Completa el resto de los DATOS!";
    }
    if ($primerNombre !== "" ){
      document.querySelector("#bienvenido").textContent = "BIENVENIDO, " + capitalizeFirstLetter($primerNombre) + "!";
    }
   return false
}
function capitalizeFirstLetter (string) {
          let  i = 1;
          let $texto = "";
         while(i < string.length){
                $texto += string[i].toLowerCase();
                i++;    
          }
          let $firsletter = "";
          $firsletter = string[0].toUpperCase();
          return ( $firsletter + $texto)
         
}
