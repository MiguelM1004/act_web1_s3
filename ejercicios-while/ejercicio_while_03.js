// Ejercicio While 3: Validador de Contraseña
const prompt = require("prompt-sync")();
let contraseña = "";
let intentos = 0;

while (contraseña !== "admin123") {
  contraseña = prompt("Ingrese la contraseña: ");
  if (contraseña !== "admin123") {
    console.log("Contraseña incorrecta.");
    intentos++;
  }
}

console.log("Acceso concedido. Intentos fallidos:", intentos);
