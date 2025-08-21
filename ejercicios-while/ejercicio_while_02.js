// Ejercicio While 2: Suma de Números Pares
let num = 1;
let suma = 0;
let contador = 0;

while (num <= 50) {
  if (num % 2 === 0) {
    suma += num;
    contador++;
  }
  num++;
}

console.log("Suma pares:", suma);
console.log("Cantidad pares:", contador);
