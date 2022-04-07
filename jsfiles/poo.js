class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verinfo() {
        document.write(this.info + "<br>");
    }
}
// Herencia ejemplo 1

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = raza;
    }
    verinfoperro() {
        document.write(this.info + " y soy de raza " + this.raza + "<br>");
    }
    static ladrar(){
        alert("!WAW¡");
    }
}
const bulldog = new Perro("perro", 5, "cafe","bulldog");
const gato = new Animal("gato", 7, "amarillo");
Perro.ladrar();
bulldog.verinfo();
bulldog.verinfoperro();
gato.verinfo();

//LAS CLASES LAS DEFINIMOS CON CONST NO CON LET

//!!ATENCION¡¡ : NO PUEDO TENER UN OBJETO CON EL MISMO NOMBRE DE LA CLASE

// LOS METODOS ESTATICOS NO NECESITAN QUE SE HAYA INSTANCIADO LA CLASE, LOS PODEMOS USAR SIN PROBLEMA.

