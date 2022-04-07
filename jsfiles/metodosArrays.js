
// METODOS TRANSFORMADORES

let nombres = ["pedro", "maria", "juan", "jhon"];
document.write(nombres + "</br>");
// .pop : Elimina el ultimo registro del array NOTA : todos los metodos llevan los () SIEMMPREEEEE!!!!!!
// se crea la variable para que aplique el cambio al array y el array original sufre el cambio y se puede mostrar.
let metodopop = nombres.pop();
document.write(nombres + "</br>");
//.shift : Elimina un elemento al principio de la lista
let metodoshift = nombres.shift();
document.write(nombres + "</br>");
//push: agrega un elemento al final de la lista
let metodopush = nombres.push("rambo", "camila");
document.write(nombres + "</br>");
//reverse : Invierte los valores del array
let metrivers = nombres.reverse();
document.write(nombres + "</br>");
//unshift : Agrega al principio del arreglo
let metunshift = nombres.unshift("terry", "martina");
document.write(nombres + "</br>");
//sort: Sirve para ordenar en orden lexicografico
let metsort = nombres.sort();
document.write(metsort + "</br>");
// splice :  donde inicio, cuantos elementos quiero eliminar,y que elementos quiero agragar ,Para hacer refere
let splice = nombres.splice(1, 0, "jose");
document.write(nombres + "</br>");


// METODOS ACCESORES

// join : convierte todos los elementos de la matriz en una cadena.
let metjoin = nombres.join("<br>elemento: ");
//Agregar el "elemento: "es para que lo aplique al principio de la cadena ya que lo empieza a aplicar despues del primer elemento.
document.write("elemento uno : " + metjoin+"</br>");
let variable = "Hola mundo";
let splitt = variable.split(" ");
document.write("Posicion 1:" + splitt[0] + "Posicion 2: " + splitt[1]+"</br>");
// slice nos muestra los elementos de un array que queramos desde una posicion inicial hasta una final.
let bres = ["pedro", "maria", "juan", "jhon"];
let slice = bres.slice(1, 3);
document.write(slice+"</br>");
// includes : Esto devuelve un boolean preguntando sobre algo en el array inclusive podemos preguntar no solo el String sino tambien la posicion.
let nombresitos = ["pedro", "maria", "juan", "jhon"];
let incluye = nombresitos.includes("maria",1);
document.write(incluye + "</br>");







