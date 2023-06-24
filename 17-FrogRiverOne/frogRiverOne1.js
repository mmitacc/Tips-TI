const frogRiverOne = (X, A) => {
  let ruteX = [];
  for (let i = 1; i <= X; i++) {
    ruteX.push(i);
  }
  for (let i = 0; i < A.length; i++) {
    if (ruteX.length > 0) {
      ruteX = ruteX.filter((x) => x !== A[i]);
      if (ruteX.length === 0) {
        return i;
      }
    }
  }
  return -1;
};

//---------------------------------------------
const arr1 = [1, 3, 1, 4, 3, 3, 5, 5, 2, 4];

//---------------------------------------------
console.log(frogRiverOne(5, arr1));
