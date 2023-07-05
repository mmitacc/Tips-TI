const missingInteger = (A) => {
  let max = 0;
  let lostInteger = 1;
  let setArray = new Set();
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      setArray.add(A[i]);
      if (A[i] > max) max = A[i];
    }
  }
  if (setArray.size) {
    if (setArray.size === max) {
      lostInteger = max + 1;
    } else {
      for (let i = 1; i <= setArray.size; i++) {
        if (!setArray.has(i)) {
          lostInteger = i;
          break;
        }
      }
    }
  }
  return lostInteger;
};

//----------------------------------------
const array1 = [1, 2, 3];
const array2 = [-1, -3];
const array3 = [1, 3, 6, 4, 1, 2];

//----------------------------------------
console.log(missingInteger(array1));
console.log(missingInteger(array2));
console.log(missingInteger(array3));
