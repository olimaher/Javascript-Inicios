let trabajo = "480 minutos de trabajo ";
let estudiar = "120 minutos de estudio";
let descansar = "15 minutos de descanso";
let oficio = "60 minutos de oficios caseros";

console.log("tareas");

for (var i = 0; i < 14; i++) {
    if (i== 0) {
        console.groupCollapsed("Semana 1");
    } 
    console.group("dia " + (i + 1));
    console.log(trabajo);
    console.log(estudiar);
    console.log(descansar);
    console.log(oficio);
    console.groupEnd();   

    if (i == 6){
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
}
