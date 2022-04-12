let parrafo = document.getElementById("parrafo");
let div = document.querySelector(".division");
//document.write(parrafo);
//document.write(div);
// Get y Set se usan como en todos los lenguajes
let elemento = document.querySelector(".salida");

// modificar el valor del atributo type o cualquier otro atributo
elemento.setAttribute("type", "number");

valor = elemento.getAttribute("type");
document.write(valor);

// removeAttribute sirve para eliinar el atributo no el valor.




