const frogRiverOne = (X, A) => {
  const ruteX = new Set();
  let frogGoal = -1;
  for (let i = 0; i < A.length; i++) {
    if (!ruteX.has(A[i])) {
      ruteX.add(A[i]);
    }
    if (ruteX.size === X) {
      return (frogGoal = i);
    }
  }
  return frogGoal;
};

//---------------------------------------------
const arr1 = [1];
const arr2 = [1, 3, 4, 2, 3, 5, 4, 2];
const arr3 = [1, 3, 1, 4, 3, 3, 5, 4, 2, 4];
//---------------------------------------------
console.log(frogRiverOne(1, arr1));
console.log(frogRiverOne(5, arr2));
console.log(frogRiverOne(5, arr3));
