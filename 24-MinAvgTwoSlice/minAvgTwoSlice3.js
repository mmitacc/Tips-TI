const minAvgTwoSlice = (A) => {
  const n = A.length;
  //PREFIX: the minimum average of contiguous pairs is traced from left to right
  let prefixTraversalIndex = 0;
  let currentPrefix = (A[0] + A[1]) / 2;
  let minPrefix = currentPrefix;
  //POSTFIX: Consecutive averages are generated from right to left
  let postfixTraversalIndex = 0;
  let currentPostfix = (A[n - 2] + A[n - 1]) / 2;
  let postfixTraversalArray = [currentPostfix];
  let minPostfix = currentPostfix;
  for (let i = 1; i < A.length - 1; i++) {
    currentPrefix = (A[i] + A[i + 1]) / 2;
    if (currentPrefix < minPrefix) {
      prefixTraversalIndex = i;
      minPrefix = currentPrefix;
    }
    currentPostfix =
      (postfixTraversalArray[i - 1] * (i + 1) + A[n - 2 - i]) / (2 + i);
    if (currentPostfix < minPostfix) {
      postfixTraversalIndex = i;
      minPostfix = currentPostfix;
    }
    postfixTraversalArray.push(currentPostfix);
  }
  // console.log("Index ==> ", prefixTraversalIndex, " ==> ", minPrefix);
  // console.log(postfixTraversalArray);
  // console.log(
  //   "postfixTraversalIndex ==> ",
  //   postfixTraversalIndex,
  //   " ==> ",
  //   postfixTraversalArray[postfixTraversalIndex]
  // );
  return minPrefix < minPostfix
    ? prefixTraversalIndex
    : n - 2 - postfixTraversalIndex;
};

//-------------------------------------------
let array1 = [4, 2, 2, 5, 1, 5, 8];
// let array2 = [4, 2, 2, 5, 2, 1, 5];
// let array3 = [1, -6, -9, -8, -5, -10];
//-------------------------------------------
console.log(minAvgTwoSlice(array1));
// console.log(minAvgTwoSlice(array2));
// console.log(minAvgTwoSlice(array3));
