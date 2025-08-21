// Ejercicio For 10: Validador de Palíndromos
let texto = "La ruta natural";
let limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
let invertido = "";

for (let i = limpio.length - 1; i >= 0; i--) {
  invertido += limpio[i];
}

if (limpio === invertido) {
  console.log("La palabra es palíndroma");
} else {
  console.log("La palabra no es palíndroma");
}
