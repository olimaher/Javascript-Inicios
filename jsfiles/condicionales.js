// el uso del if en JS es como en la mayoria de leguajes su sintaxis
// if (condicion) {
//     accion
// }

//Helado de agua 150
//Helado de creama 280
//Tarro de helado 301
let dineropedro = prompt("Cuanto dinero tienes Pedro");
let cambio;


if (dineropedro >= 100 && dineropedro<= 200) {
    alert("Compra un helado de agua");
    cambio = dineropedro - 150
    alert("Tu cambio es " + cambio);
}
else if (dineropedro >= 201 && dineropedro <= 300) {
    alert("Compra un helado de crema");
    cambio = dineropedro - 280;
    alert("Tu cambio es " + cambio);
}
else if (dineropedro > 300) {
    alert("Te alcanza para un tarro de helado");
    cambio = dineropedro - 301;
    alert("Tu cambio es " + cambio);
}
else {
    alert("No te alcanza para ningun helado");
}

