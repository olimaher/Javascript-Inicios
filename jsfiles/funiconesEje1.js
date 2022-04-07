// let free = false;
// const validarCliente = (time) => {
//     let edad = prompt("Cual es tu edad?");
//     if (edad >=18) {                        //Cuando se quiera usar el >= debe hacerse en este orden de lo contrario lo toma como si estuviermas asignando ese valor.
//          if (time >=2 && time < 7 && free == false) {
//              alert("Puedes entrar y tu ingreso no genera costo por ser la primera persona en ingresar despues de las dos");
//              free = true;
//          }
//          else {
//             alert("Puedes entrar y el valor de tu boleto es de: ");
//         }
//     }
//     else {
//         alert("Lo siento mucho pero no pueden ingresar menores de edad");
//     }
// }

// validarCliente(10);
// validarCliente(11);
// validarCliente(2.2);
// validarCliente(3);
// validarCliente(4);


// EJERCICIO #2

let numestudi = prompt("cuantos alumnos hay en clase hoy");
var totalAlumnos = [];
for (i = 0; i < numestudi; i++){
    totalAlumnos[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
    console.log(totalAlumnos[i]);
}
const asistencia = (nombre, p) => {
    let presencia = prompt("Asistencias alumno "+nombre);
    if (presencia == "p" || presencia == "P") {
        totalAlumnos[p][1]++; // Aqui estoy seleccionando un elemento dentro de otro elemento: En este caso el segundo campo del array totalAlumnos y lo estoy incrementando en 1.
    }
    console.log(totalAlumnos);
}
for (i = 0; i < 10; i++){
    for (alumno in totalAlumnos) {
        //console.log("registrando asistencia de : " + alumno);
        asistencia(totalAlumnos[alumno][0], alumno);
        console.log(asistencia);
    }
}
for (alumno in totalAlumnos) {
    let resultado = `${"Alumno " + totalAlumnos[alumno][0]}:<br>
    .....Asistencias: ${totalAlumnos[alumno][1]}<br>
    .....Ausencias: ${10 - totalAlumnos[alumno][1]}`;
    if (10 - totalAlumnos[alumno][1] > 3) {
         resultado += " Reprobado por inasistencias<br><br>"
    }
    else {
        resultado += "<br><br>";
    }
    document.write(resultado);
}

