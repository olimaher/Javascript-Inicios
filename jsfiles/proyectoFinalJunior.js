var resultado = 0;
do {
    var captura = prompt("digite un numero");
    var suma = parseInt(captura);

    if (Number(suma) == suma) {
        resultado = parseInt(resultado) + parseInt(suma);
    } if (typeof suma != 'number') {

        alert(suma + "no es un numero");
    }
} while (confirm("desea continuar"));
document.write(resultado); 
