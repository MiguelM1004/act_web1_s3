// Ejercicio For 7: Matriz de Suma
let matriz = [];

for (let i = 0; i < 5; i++) {
  let fila = [];
  for (let j = 0; j < 5; j++) {
    fila.push(i + j);
  }
  matriz.push(fila);
}

console.table(matriz);
