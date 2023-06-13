//ORDENA LA MATRIZ EN BASE A SUS PAREJAS DE VALOR IDENTICAS,
//DEJANDO AL FINAL EL ELEMENTO SIN PAREJA:
const oddOccurrencesInArray1 = (A) => {
  let aux = 0;
  for (let i = 1; i < A.length - 1; i = i + 2) {
    for (let j = i; j < A.length; j++) {
      if (A[i - 1] === A[j]) {
        aux = A[i];
        A[i] = A[j];
        A[j] = aux;
        break;
      }
    }
    if (A[i - 1] !== A[i]) {
      aux = A[i - 1];
      A[i - 1] = A[A.length - 1];
      A[A.length - 1] = aux;
      i = i - 2;
    }
  }
  // return A;
  return A[A.length - 1];
};

//------------------------------------------------------------
const Arr1 = [9, 3, 9, 3, 9, 7, 9];
const Arr2 = [1, 22, 7, 7, 9, 5, 1, 3, 15, 3, 15, 5, 9];
//-----------------------------------------------------------

console.log(oddOccurrencesInArray1(Arr1));
console.log(oddOccurrencesInArray1(Arr2));
