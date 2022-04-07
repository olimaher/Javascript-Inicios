
//Array Asociativo: se utiliza una clave en vez de una posicion numerica sonsecutiva. Tamnien se le puede llamar objeto.
const obtenerInformacion = (materia) => {
  materias = {
    fisica: ['CARLOS','pedro', "juan", "maria", "pepito", "oli", "cami"],
    Quimica: ['STIVE',"juan", "maria", "pepito", "oli", "cami"],
    Programacion: ['ALAN',"pedro", "juan", "maria", "oli", "cami"],
    Calculo: ['GRACE',"pedro", "maria", "pepito", "oli", "cami"],
  };
  if (materias[materia] !== undefined) {
    return [materias[materia],materia];
  } else {
    return false;
  }
};
let informacion = obtenerInformacion("fisica");
if (informacion !== false) {
    let profesor = obtenerInformacion("fisica")[0][0];
    alumnos = obtenerInformacion("fisica")[0];
    alumnos.shift();
    document.write(`El profesor de  ${informacion[1]} es: ${profesor} </br> Su grupo de alumnos son ${alumnos}`);   
}




// Map es una funcion de java script que me permite recorrer todo el arreglo.
// let colores = ['amarillo', 'azul', 'rojo'];
// let recorrido = colores.map(color =>`${color} tiene ${color.length} caracteres`);
// console.log(recorrido);

