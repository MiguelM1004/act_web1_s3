// Ejercicio While 8: Secuencia de Fibonacci
let a = 0, b = 1, i = 1;

while (i <= 15) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
  i++;
}
