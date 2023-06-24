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
  let array = A.slice(0, X);
  let addArray = A.slice(X + 1);
  let frogGoal = quickSortSingles(array);
  let j = 0;
  while (frogGoal.length < X) {
    console.log("array  ", array);
    array.push(addArray[j]);
    frogGoal = quickSortSingles(array);
    j += 1;
  }
  console.log(frogGoal);
  return array.length;
};

//---------------------------------------------
const arr1 = [1, 3, 1, 4, 2, 3, 5, 4];
const arr2 = [1, 3, 1, 4, 3, 3, 5, 4, 2, 4];
//---------------------------------------------
console.log(frogRiverOne(5, arr1));
console.log(frogRiverOne(5, arr2));
