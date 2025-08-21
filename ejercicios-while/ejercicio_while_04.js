// Ejercicio While 4: Generador de Números Aleatorios
let generados = 0;
let numero = 0;

while (numero <= 95) {
  numero = Math.floor(Math.random() * 100) + 1;
  console.log("Número generado:", numero);
  generados++;
}

console.log("Total generados:", generados);
