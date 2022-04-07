let cadena = "cadena de prueba h";
let cadena1 = "de ";
let cadena3 = "de prueba h";
let cadena2 = "cadena cadena cadena cadena";
let cadena4 = "cadena";

//concat : Añade otras cadenas
resultado = cadena.concat(" mas concatenación");
document.write(resultado + "</br>");

// startsWith : compara si dos cadenas empiezan con a misma palabra o no, debe ser exacta.

prueba2 = cadena.startsWith(cadena1);
document.write(" Esta es la prueba del StartsWith: " + prueba2 + "</br>");

// Tambien existe el endsWith es una palabra o un estring solo uno. No es si las dos terminan igual. Es si el contendio del segundo string es igua al final del contenido del primero.

prueba3 = cadena.endsWith(cadena3);
document.write(" Esta es la prueba del endsWith: " + prueba3 + "</br>");

//includes: es para ver si una cadena se encuentra dentro de otra cadena. devuelve true o false la busca en cualquier parte de la cadena

prueba4 = cadena.includes(cadena1);
document.write("Prueba de include: " + prueba4 + "</br>");

//indexof: Nos devuelve la posicion en la que incia esa cadena si la encuentra. sino la encuentra nos devuelve -1

prueba5 = cadena.indexOf(cadena1);
document.write("Prueba de indexof: " + prueba5 + "</br>");
document.write(cadena[7] + "</br>");

//lastIndeOf Revisa la ultima en caso de haber varias palabras en toda la cadena

prueba6 = cadena2.lastIndexOf("cadena");
document.write("Prueba de lastindexof: " + prueba6 + "</br>");
document.write(cadena2[21] + "</br>");

//El padStart y el padEnd incluyen caracterers al inicio y al final de la cadena el numero de veces que quearmos y el tipo de caracteres que queramos tambien

let cadena5 = " Hola ";

prueba7 = cadena5.padStart(10, "oli ");
document.write(prueba7 + "</br>");

prueba8 = cadena5.padEnd(10, "oli ");
document.write(prueba8 + "</br>");

// repeat : me repite la cadena el numero de veces que le diga que la repita

prueba9 = cadena5.repeat(2);
document.write(prueba9 + "</br>");

//split: Divide la cadena como le pidamos que lo que haga. Convierte la cadena internamente en un array

let cadena6 = "Hola como estás";

prue = cadena6.split(" "); // si coloco el "como" me separa la cadena a partir de esa palabra, se elimina esa y quedaria solo el = hola,estás
document.write(prue + "</br>");
document.write(prue[1] + "</br>");

//substring : sirve para mirar donde empieza y donde termina una cadena. el primer parametro es donde empieza y el segundo donde termina. donde termina no lo incluye.

prue1 = cadena6.substring(2, 5);
document.write(prue1 + "</br>");

//toLowerCase: Lo convierte todo a minusculas 
//toloperCase: Convierte todo a mayusculas

prue2 = cadena6.toLowerCase();
prue3 = cadena6.toUpperCase();

document.write(prue2 + "</br>");
document.write(prue3 + "</br>");

// Converti un String a un dato Usamos el tostring NOTA: Los parentesis al final son necesarios

let numero = 50;
document.write("Metodo toString " + 2 + numero.toString()+"</br>");

// Remover espacios de las cadenas de texto: Esto funciona con los espacios al inicio y al final del etxto. No con los espacios inermedios.

let espacios = "   texto con espacios   ";

let espatext = espacios.trim();

document.write(espatext);

//








