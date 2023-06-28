const permCheck = (A) => {
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
  if (quickSortSingles(A)[A.length - 1] === A.length) {
    return 1;
  } else {
    return 0;
  }
};

//---------------------------------------------------
const arr1 = [4, 1, 3, 2];
const arr2 = [4, 1, 2];
const arr3 = [4, 1, 2, 7, 6, 3, 5, 8];

//---------------------------------------------------
console.log(permCheck(arr1));
console.log(permCheck(arr2));
console.log(permCheck(arr3));
