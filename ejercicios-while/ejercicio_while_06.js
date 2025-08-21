// Ejercicio While 6: Búsqueda en Array
let nombres = ["Santiago", "Yuddy", "Mariana", "Andrea", "William"];
let buscar = "Andrea";
let i = 0;
let encontrado = false;

while (i < nombres.length) {
  if (nombres[i] === buscar) {
    console.log(`${buscar} encontrado en posición ${i}`);
    encontrado = true;
    break;
  }
  i++;
}

if (!encontrado) {
  console.log(`${buscar} no está en el array.`);
}
