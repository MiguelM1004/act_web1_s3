// Ejercicio While 5: Calculadora de Factorial
let numero = 5;
let resultado = 1;
let i = 1;

while (i <= numero) {
  resultado *= i;
  console.log(`Paso ${i}: ${resultado}`);
  i++;
}

console.log(`Factorial de ${numero} es:`, resultado);
