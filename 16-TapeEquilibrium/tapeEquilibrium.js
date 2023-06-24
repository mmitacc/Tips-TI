const tapeEquilibrium = (A) => {
  let sumElement = 0;
  for (let i = 1; i < A.length; i++) {
    sumElement += A[i];
  }
  let partitionBack = sumElement;
  let partitionFront = A[0];
  let min = Math.abs(partitionFront - partitionBack);
  let tape = 0;
  for (let i = 1; i < A.length - 1; i++) {
    partitionFront += A[i];
    partitionBack -= A[i];
    tape = Math.abs(partitionFront - partitionBack);
    if (tape < min) min = tape;
  }
  return min;
};

//---------------------------------------------------
const arr1 = [3, 1, 2, 4, 3];
const arr2 = [3, 1, 2, 4, 3, 1, 2, 4, 3];

//---------------------------------------------------
console.log(tapeEquilibrium(arr1));
console.log(tapeEquilibrium(arr2));
