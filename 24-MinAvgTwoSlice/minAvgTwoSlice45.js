const minAvgTwoSlice = (A) => {
  const minAvgVertical = (array) => {
    let [collector, ind] = array;
    let currentSubst = [collector - A[0]];
    let minIncrementalV = currentSubst[0] / 2;
    let currentAvgVertical = 0;
    for (let j = 1; j < array[1]; j++) {
      currentSubst[j] = currentSubst[j - 1] - A[j];
      currentAvgVertical = currentSubst[j] / (j + 2);
      if (currentAvgVertical < minIncrementalV) {
        minIncrementalV = currentAvgVertical;
      }
      currentAvgVertical;
    }
    return minIncrementalV;
  };
  const n = A.length;
  let index = 0;
  let currentSum = [A[0] + A[1]];
  let minIncremental = currentSum[0] / 2;
  let currentAverage = 0;
  for (let i = 1; i < n - 1; i++) {
    currentSum[i] = currentSum[i - 1] + A[i + 1];
    currentAverage = currentSum[i] / (i + 2);
    if (currentAverage < minIncremental) {
      minIncremental = currentAverage;
      index = i - 1;
    }
    let minVertical = minAvgVertical([currentSum[i], i]);
    if (minVertical < minIncremental) {
      minIncremental = minVertical;
      index = i - 1;
    }
  }
  console.log(currentSum);
  return [minIncremental, index];
};

//-------------------------------------------
let array1 = [4, 2, 5, 1, 7, 5, 8];
console.log(minAvgTwoSlice(array1));
