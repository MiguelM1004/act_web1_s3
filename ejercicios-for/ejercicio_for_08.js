// Ejercicio For 8: Contador de Caracteres
let frase = "Este es un ejemplo de conteo de vocales";
let vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };

for (let letra of frase.toLowerCase()) {
  if (vocales.hasOwnProperty(letra)) {
    vocales[letra]++;
  }
}

console.log("Frase:", frase);
console.log("Conteo de vocales:", vocales);
