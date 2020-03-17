// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre
/*const MI_NOMBRE = "Alejo"; // This is a convention which tells other programmers that the value is fixed
const AMIGO_NOMBRE = "Andre";
const TEXT_NOMBRE_PROMPT = "Escribe tu nombre"
const RESPUESTA = (prompt(TEXT_NOMBRE_PROMPT || "").toLowerCase());
            if (RESPUESTA === MI_NOMBRE) {
                 console.log("Hola Alejo, yo tambien me llamo Alejo!");
            } else if ( RESPUESTA === AMIGO_NOMBRE) {
                window.prompt("Hola" + AMIGO_NOMBRE +"yo tambien tengo un amigo que se llama" + AMIGO_NOMBRE)
            } else if (RESPUESTA.trim() === ""){        // RESPUESTA.trim() me corta todos los espacios//
                console.log("No ingresaste ningun nombre")
            }
            else {
                window.prompt("Hola " + RESPUESTA + " !")
            }
     */
//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
/*
           const  EDAD_PROPIA = 18;
          const EDAD_USER = Number(prompt("Escribe tu edad ")); // Se usa el Numner para que en la comparacion no tenga un "Nan" para comparar.
            
          
          
            if (EDAD_USER > EDAD_PROPIA) {
                console.log("Tu edad es mayor a la mia");
            } else if (EDAD_USER === EDAD_PROPIA) {
                 console.log("Tu edad es la misma que al mia!");
            } else if (EDAD_USER < EDAD_PROPIA) {
                 console.log("Tu edad es menor a la mia");
            }
            else {
                 console.log("No entendi la respuesta");
            };
      */          
        
//Tarea 3:
// Preguntarle al usuario si tiene TieneDocumentoElUser, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no. (opciones de la respuesta)
// Solucion al punto bonus: Se hace que la respuesta se pase lower case entonces ya tenes definidas las variables "si"
 // y "no" para las respuestas. 
// 



const RESPUESTA_SI = "si";
const RESPUESTA_NO = "no";
const TieneDocumentoElUser = (prompt("Tenes el dni?? ") || "").toLowerCase();
if (TieneDocumentoElUser === RESPUESTA_SI ) {
        let EdadDelUser = Number(prompt("Cuantos anios tenes? "));
    if (EdadDelUser >= 18){
                 console.log("Podes pasar")
    } else if ( EdadDelUser < 18) {
                 console.log ("No podes pasar")
    }
    else {
        console.log("No entendi lal respuesta")
    }
} else if (TieneDocumentoElUser === RESPUESTA_NO) {
            console.log("no podes pasar al bar kpo")
 }else {
            console.log("Algo anda mal")
}


