// Ejercicio For 5: Invertir Cadenas de Texto
let texto = "Estamos programando";
let invertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
  invertido += texto[i];
}

console.log("Original:", texto);
console.log("Invertido:", invertido);
