let parrafo = document.getElementById("parrafo");
let div = document.querySelector(".division");
//document.write(parrafo);
//document.write(div);
// Get y Set se usan como en todos los lenguajes
let elemento = document.querySelector(".salida");

// modificar el valor del atributo type o cualquier otro atributo
elemento.setAttribute("type", "text");

valor = elemento.getAttribute("type");
document.write("el valor es " + valor +"<br>");

// removeAttribute sirve para eliinar el atributo no el valor.

// MODIFICANDO VALORES DE ATRIBUTOS GLOBALES CON JS

let titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable", "true");

// hidden : es un atributo para que sea visual o no.... si esta definido lo podemos modificar o remover , sino , simplemente deja de ser
// visual el elemento sea false o true


// ESTO SE PUEDE HACER CON TODOS LOS QUE HAY.

/* Atributos que podemos modificar directamente:

className
value
type
accept
form
minlength
placeholder
required
 */

let pruebaAtri = document.querySelector(".atri");

pruebaAtri.type = "color";

valorDos = pruebaAtri.getAttribute("type");
document.write("el valor es " + valorDos);

// atributo style es un elemento global tambien.
titulo.style.color = "#32b";
titulo.style.fontSize = "2em";

            // classList y metodos para agregar o modificar a las clases-

/* add 
remove 
irem 
contains 
replace 
toggle === esta es quizas la mas interesante = si la tiene la elimina y si no la tiene la agrega. se puede acompañar de un false o true.
 */

            // Obtencion y modificacion de elementos

/* texContent == este muestra todo el contenido de texto de un elemento
innerHTML == muestra el contendio HTML es decir el codigo sin el contenido de texto|
outerHTML == Este muestra el contenido HTML mas el contenido de texto que tiene el elemento.
 */

//-----------CREANDO ELEMENTOS--------------- */

let contenedor = document.querySelector(".contenedor");

let item = document.createElement("ELEMENTO")

let primerHijo = contenedor.firstElementChild;
console.log(primerHijo);
let ultimoHijo = contenedor.lastElementChild;
console.log(ultimoHijo);
//Esto me devuelve todas las etiquetas HTML sin los espacios que se marcan como texto.
let todosHijos = contenedor.children;
console.log(todosHijos);

// vamos a reccorre la coleccion de objetos

for (hijo of todosHijos) {
    console.log(hijo);
 }

