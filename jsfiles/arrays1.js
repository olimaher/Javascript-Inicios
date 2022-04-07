// este tipo de array me permite guardar cualquier tipo de dato dentro del arreglo.
let frutas = ["manzana", "peras", 1, 5, "naranja"];
document.write(frutas[2]);
//Arrays asociativos
let persona = {
    nombre: "Olimpo",
    apellido: "Macea",
    edad: 34,
};
let nombre = persona["nombre"];
let apellido = persona["apellido"];
let edad = persona["edad"];

document.write(`<br>Mi nombre es ${nombre} ${apellido} y mi edad es: ${edad}<br>`);

//Uso del WHILE

let numero = 0;

while(numero<7){
    numero++;
    document.write(numero + "<br>");
}

// EL DO WHILE PRIMERO EJECUTA Y LUEGO PREGUNTA 

let numero1 = 0;
do {
    
    document.write(numero1 + "<br>");
    numero1++;
}

while (numero1 < 7);

// BUCLE FOR

    for (let i = 7; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }

// Bien.

// if (numero = 5){
//     break;      // Con esta intruccion finalizamos el programa 
// }
// // ó
// if (numero = 5) {
//     continue;   // con esta lo que hacemos es dar un salto en esa iteracion.
// }

