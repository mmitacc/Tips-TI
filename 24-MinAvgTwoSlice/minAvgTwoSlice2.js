const minAvgTwoSlice = (A) => {
  let index = 0;
  let promCurrent = (A[0] + A[1]) / 2;
  let arraySlice = promCurrent;
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      promCurrent = (A[i] + A[j]) / 2;
      if (promCurrent < arraySlice) {
        arraySlice = promCurrent;
        index = i;
      }
    }
  }
  console.log();
  return index;
};

//-------------------------------------------
let array1 = [4, 2, 2, 5, 1, 5, 8];
console.log(minAvgTwoSlice(array1));
