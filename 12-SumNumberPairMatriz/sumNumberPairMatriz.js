//Suma solo los números pares de una matriz unidimensional:
function sumNumberPairMatriz(matriz) {
  let sum = 0;
  for (let i = 0; i < matriz.length; i++) {
    if (matriz[i] % 2 === 0) {
      sum += matriz[i];
    }
  }
  return sum;
}

const m = [5, 30, 1, 2, 4, 9, 42, 33, 22, 4];
console.log(sumNumberPairMatriz(m));

// 1_ ¿Qué pasaría si la matriz es multidimensional?.
// Rpta.- Tendría que usarse un anidamiento de "for" por cada dimensión ó llevar el código a la recursividad:
function sumNumberPairMatrizMultidimensional(matriz) {
  let sum = 0;
  for (let i = 0; i < matriz.length; i++) {
    if (Array.isArray(matriz[i])) {
      sum += sumNumberPairMatrizMultidimensional(matriz[i]);
    } else if (matriz[i] % 2 === 0) {
      sum += matriz[i];
    }
  }
  return sum;
}

const md = [
  5,
  30,
  [1, [2, 3, 4, [5, 6], 7, 8], 6],
  4,
  9,
  [42, [33, 2], 10],
  22,
  4,
];
console.log(sumNumberPairMatrizMultidimensional(md));

// 2_ ¿Conoces algún método en JS que cree una nueva matriz concatenando los elementos de la submatriz?
// Rpta.- No, solo existe el "flat" que solo profundiza el nivel N, para esto se debe conocer el nivel N deseado.
console.log(md.flat(2));

// 3_ ¿Conoces una solución más óptima?
console.log(md.flat(9999));

// 4_ ¿Puedes resolver el ejercicio en 1 línea de código?
const sumNumberPairMatrizN = (matriz) => matriz.flat(9999).reduce((a,b) => (a + ((b%2)-1)*(-1*b)),0);

  console.log(sumNumberPairMatrizN(md));
