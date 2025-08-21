// Ejercicio While 9: Juego de Adivinanza Mejorado
const prompt = require("prompt-sync")();
let secreto = Math.floor(Math.random() * 50) + 1;
let intentos = 0;
let adivina = 0;

while (adivina !== secreto && intentos < 7) {
  adivina = parseInt(prompt("Adivina el número (1-50): "));
  intentos++;

  if (adivina === secreto) {
    console.log("¡Así es!");
  } else if (Math.abs(adivina - secreto) <= 3) {
    console.log("Mmm casi...");
  } else if (adivina > secreto) {
    console.log("Altísimo.");
  } else {
    console.log("Mmm no 😥. Bajito");
  }
}

if (adivina !== secreto) {
  console.log("Agotaste los intentos 😭. El número era:", secreto);
}
