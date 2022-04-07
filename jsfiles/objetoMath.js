// max: devuelve el numero mas grande
numero = Math.max(5, 6, 10, 20);
document.write(numero + "</br>");
// min: Devuelve el numero menor de una serie de numeros
numero = Math.min(5, 6, 10, 20);
document.write(numero + "</br>");
for (var i = 0; i < 10; i++){
    let nume = Math.random() * 100;
    nume = Math.floor(nume +1);
    document.write(nume + "</br>");
}
// Floor : Lo aproxima al numero entero mas proximo pero por debajo
let numfloor = 4.9;
numfloor = Math.floor(numfloor);
document.write(numfloor + "</br>");

let numero7 = Math.round(9.9);
document.write("este " + numero7 + "</br>");
// round = lo redondea al numero mas cercano

let numero8 = Math.trunc(9.9);
document.write("Elimina los decimales " + numero8);






// Math es un objeto con varios metodos muy practicos para el desarrollo de funciones matematicas. Repasar mas adelante.







