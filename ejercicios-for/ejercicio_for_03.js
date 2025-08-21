// Ejercicio For 3: Análisis de Array de Números
let numeros = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
let suma = 0, pares = 0, impares = 0;
let max = -Infinity, min = Infinity;

for (let num of numeros) {
  suma += num;
  if (num > max) max = num;
  if (num < min) min = num;
  if (num % 2 === 0) pares++;
  else impares++;
}

console.log("Array:", numeros);
console.log("Mayor:", max);
console.log("Menor:", min);
console.log("Suma:", suma);
console.log("Promedio:", suma / numeros.length);
console.log("Pares:", pares, "Impares:", impares);
