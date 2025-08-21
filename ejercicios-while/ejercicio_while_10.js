// Ejercicio While 10: Procesador de Calificaciones
const prompt = require("prompt-sync")();
let calificacion;
let suma = 0;
let contador = 0;
let max = -Infinity;
let min = Infinity;

while (true) {
  calificacion = parseFloat(prompt("Ingrese calificación (-1 para salir): "));
  if (calificacion === -1) break;

  suma += calificacion;
  contador++;
  if (calificacion > max) max = calificacion;
  if (calificacion < min) min = calificacion;
}

if (contador > 0) {
  console.log("Promedio:", suma / contador);
  console.log("Máxima:", max);
  console.log("Mínima:", min);
} else {
  console.log("No se han ingresado calificaciones.");
}
