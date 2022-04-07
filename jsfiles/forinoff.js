let animales = ["perro", "gato", "raton"];
for (animal in animales) {
    document.write(animal + "<br>");
}
document.write("<br>");
for (animal of animales) {
    document.write(animal + "<br>");
}