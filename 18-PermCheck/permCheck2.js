const permCheck = (A) => {
  const sumConsecutiveNumbers = (A.length * (A.length + 1)) / 2;
  let isPermutation = 0;
  let sumPermutacion = 0;
  let listPermutation = new Set();
  for (let i = 0; i < A.length; i++) {
    if (listPermutation.has(A[i])) break;
    listPermutation.add(A[i]);
    sumPermutacion += A[i];
  }
  if (
    A.length === listPermutation.size &&
    sumConsecutiveNumbers === sumPermutacion
  )
    isPermutation = 1;
  return isPermutation;
};

//---------------------------------------------------
const arr1 = [4, 1, 3, 2];
const arr2 = [4, 1, 2];
const arr3 = [4, 1, 7, 2, 6, 3, 5];

//---------------------------------------------------
console.log(permCheck(arr1));
console.log(permCheck(arr2));
console.log(permCheck(arr3));
