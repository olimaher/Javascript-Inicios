// foreach : reccorrer el array de forma iterada
let nombres = ["pedro", "Maria", "Juan", "camila", "oli"];
nombres.forEach(nombre => document.write(nombre + "</br>"));
//fiter hace lo mismo pero nos permite agregarle algun tipo de condicion, como por ejemplo el numero de caractares de los String del arreglo
let resultado = nombres.filter(numero => numero.length > 4);
document.write(resultado);


