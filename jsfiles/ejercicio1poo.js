class Celular {
    constructor(color, peso, tamaño, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    botonEncendido() {
        if (this.prender == false) {
            alert("Celular prendido");
            this.encendido = true;
        }
        else {
                alert("Celular Apagado");
                this.encendido = false;
            }   
    }
    tomarfoto() {
        alert(`Tomando foto en resolucion de ${this.rdc}`);
    }
    grabarvideo(){
    (`Grabando video a una resolucion de ${this.rdc}`);
}
    info (){
    return`
    Color: ${this.color}</br>
    Peso: ${this.peso}</br>
    Tamaño: ${this.tamaño}</br>
    Resolución de camara: ${this.rdc}</br>
    Memoria Ram: ${this.ram}</br>
    `;
    }
}    
class CelularAltaGama extends Celular{
    constructor(color, peso, tamaño, rdc, ram, camlenta, camplus) {
        super(color, peso, tamaño, rdc, ram);
        this.camaralenta = camlenta;
        this.camaraplus = camplus;
        
    }
    infoAlta() {
        return this.info() + `Resolucion de camara lenta : ${this.camaralenta}  </br>  Resolucion de camara adicional : ${this.camaraplus} `;
    }
}

celular1 = new Celular("Azul", "200g", '5"', "20px", "2GB");
celular2 = new Celular("Negro", "300g", '6"', "25px", "4GB")
celular3 = new Celular("Blanco", "250g", '5.5"', "30px", "3GB");
celularAlta1 = new CelularAltaGama("Plata", "135g", '7"', "50mpx", "6gb", "20mpx", "2mpx");

document.write(`${celular1.info()}</br>
                ${celular2.info()}</br>
                ${celular3.info()}</br></br>
                `);
document.write("Celulares De Alta Gama " + "</br>" + celularAlta1.infoAlta());



