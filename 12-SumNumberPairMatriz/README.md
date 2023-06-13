👉 Tienes una prueba técnica en JS y te piden crear una función que sume los números pares de una matriz.

Fácil dices y haces un código similar a este:
_______________________________________
function sumOfEvenNumbers(matriz) {
  let sum = 0;
  
  for (let i = 0; i < matriz.length; i++) {
    if (matriz[i] % 2 === 0) {
      sum += matriz[i];
    }
  }
  
  return sum;
}
________________________________________

⚠️ Ahora se viene lo interesante. ⚠️
Te hacen 4 preguntas más para ver hasta dónde puedes llegar. ¿Cómo responderías a las mismas?

1_ ¿Qué pasaría si la matriz es multidimensional?.

2_ ¿Conoces algún método en JS que cree una nueva matriz concatenando los elementos de la submatriz?

3_ ¿Conoces una solución más óptima?

4_ ¿Puedes resolver el ejercicio en 1 línea de código?
