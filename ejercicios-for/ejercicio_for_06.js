// Ejercicio For 6: Calculadora de Potencias
let base = 2;
let exponente = 5;
let resultado = 1;

for (let i = 1; i <= exponente; i++) {
  resultado *= base;
  console.log(`Paso ${i}: ${resultado}`);
}

console.log(`${base}^${exponente} = ${resultado}`);
