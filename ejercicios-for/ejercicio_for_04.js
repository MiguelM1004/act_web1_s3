// Ejercicio For 4: Generador de Números Primos
let primos = [];

for (let i = 2; i <= 100; i++) {
  let esPrimo = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) primos.push(i);
}

console.log("Primos:", primos);
console.log("Cantidad:", primos.length);
