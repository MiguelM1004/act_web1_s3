// Ejercicio For 9: Simulador de Dados
let suma = 0;
let valor = 2;

for (let i = 1; i <= 10; i++) {
  console.log(valor);
  suma += valor;
  valor *= 2;
}

console.log("La suma total es:", suma);
