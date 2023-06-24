const frogRiverOne = (X, A) => {
  const quickSortSingles = (arr) => {
    if (arr.length > 1) {
      let pivot = [arr[0]];
      let arrLeft = [];
      let arrRight = [];
      for (i = 1; i < arr.length; i++) {
        if (arr[i] > pivot[0]) {
          arrRight.push(arr[i]);
        } else if (arr[i] < pivot[0]) {
          arrLeft.push(arr[i]);
        }
      }
      arr = quickSortSingles(arrLeft)
        .concat(pivot)
        .concat(quickSortSingles(arrRight));
    }
    return arr;
  };
  let frogGoal = [];
  for (let i = 0; i < A.length; i++) {
    frogGoal.push(A[i]);
    if (i >= X - 1) {
      frogGoal = quickSortSingles(frogGoal);
      if (frogGoal.length === X) {
        return i;
      }
    }
  }
  if (frogGoal.length < X) {
    return -1;
  }
};

//---------------------------------------------
const arr1 = [1];
const arr2 = [1, 3, 1, 4, 3, 5, 4, 2];
const arr3 = [1, 3, 1, 4, 3, 3, 5, 4, 2, 4];
//---------------------------------------------
console.log(frogRiverOne(1, arr1));
console.log(frogRiverOne(5, arr2));
console.log(frogRiverOne(5, arr3));
