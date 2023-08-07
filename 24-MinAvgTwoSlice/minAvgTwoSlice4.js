const minAvgTwoSlice = (A) => {
  let index = 0;
  let promCurrent = (A[0] + A[1]) / 2;
  let arraySlice = promCurrent;
  for (let i = 1; i < A.length - 1; i++) {
    promCurrent = (A[i] + A[i + 1]) / 2;
    if (promCurrent < arraySlice) {
      index = i;
      arraySlice = promCurrent;
    }
  }
  console.log(arraySlice);
  return index;
};

//-------------------------------------------
let array1 = [4, 2, 2, 5, 1, 5, 8];
console.log(minAvgTwoSlice(array1));
