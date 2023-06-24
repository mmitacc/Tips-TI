const permMissingElem = (A) => {
  let sumA = 0;
  for (let i = 0; i < A.length; i++) {
    sumA += A[i];
  }
  const sumN1 = ((A.length + 1) * (A.length + 2)) / 2;
  return sumN1 - sumA;
};

//--------------------------------------
arr1 = [3, 2, 1, 5];
arr2 = [3, 2, 1, 5, 4, 7, 8];
arr3 = [3, 2, 1, 5, 6, 7, 8, 9, 10];

//--------------------------------------
console.log(permMissingElem(arr1));
console.log(permMissingElem(arr2));
console.log(permMissingElem(arr3));
