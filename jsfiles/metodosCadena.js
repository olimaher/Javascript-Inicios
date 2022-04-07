let cadena1 = "Prueba metodos cadena";
let concatena = cadena1.concat(" hola");
document.write(concatena + "</br>");
let cominza = "Prueba";
let concatena1 = cadena1.startsWith(cominza);
document.write(concatena1 + "</br>");
//devuelve un boolean vefiricando si es igual la primera palabra de ambas cadenas
//endWith es si termina como la primera cadena.
let incluida = "metodos";
let concatena2 = cadena1.includes(incluida);
document.write(concatena2 + "</br>");
// include = si incluye esa expresion en cualquier parte de la cadena
// indexOff = Muestra la posicion donde comienza la palabra o cadena que esta incluida
// lastIndexOff= Muestra la ultima posicion. lo recorre de atras hacia adelante.

// pad = no es oficial pero se puede usar, rellena la cadena al principio padStar y al final padEnd.
// repeat = repite el valor de la cadena las veces que quiera.

let dividir = "Hola como estas";
let arraycadena = dividir.split(" ");
document.write(arraycadena[2]+"</br>");
//splite = Me convierte la cadena en un array, lo divide de la forma como yo quiera
//subtring  = Muestra el pedazo de la cadena que queremos que muestre 
document.write(dividir.substring(2, 4) + "</br>");
//tostring = convierte en string una una cadena o un numero cuando sea necesario.
//trim = elimina los espacios de la cadena del principio y del final:
//trimStar al principio y trimEnd al final
document.write(dividir.trim());



