// las funciones se usan para poder usarlas en cualquier parte del codigo sin tener que reescribir
// nuevamente eso que hace la funcion.
//El return nos termina la funcion y nos devuelve algo, no solo es que se ejecute
//la idea es que entrege un resultado, que haga algo mas que solo existir.

function nombre(){
    return "Cual es tu nombre: ";
}
let nom = nombre(); //Importante los parentesis despues del nombre de la funcion.
document.write(nom);
document.write("<br>");


// Funciones flecha introduccion: SINTAXIS

const saludar = (nombre) => {
    document.write("Hola como estas " + nombre);
}
saludar("olimpo");


