const pedro = "Hola"; //este tipo de variable no se puede modificar su contenido
alert(pedro);
let Num = 25; //este tipo de variable es local, afecta unicamente esta seccion de codigo no todo el programa, es la variable recomendada
alert(Num);
//alet es un mensaje de alerta que  muestra lo que queramos.
prompt // Esta es una funcion que tiene un mensaje y espra una repuesta
//let nombre = prompt("Dime tu nombre");
//alert("Hola " + nombre); // Concatena con la variable nombre.
//Tipado dinamico
let num1 = 5;
let num2 = "5";
let resultado = "" + num1 + num2; // Al agregar texto al inicio convierto todo en una concatenacion.
document.write(resultado);
// comparar dos variables si son iguales.
document.write('<br>', num1 == num2); // Salto de linea con <br> ya que el document.write es para usar sintaxis HTML.
// comparar si son diferentes
document.write('<br>', num1 != num2);
//comparar si son extricatamente iguales: Es decir mismo valor y mismo tipo
document.write('<br>', num1 === num2);
//comparar si son extrictamente diferentes.
document.write('<br>', num1 !== num2);
//Camel case: Sintacis correcta de trabajar en JS "holaComoEstas" la primera palabra toda en mayuscula las demas empiezan con mayuscula.


