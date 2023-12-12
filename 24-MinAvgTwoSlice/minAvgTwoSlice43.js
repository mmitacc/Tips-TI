const minAvgTwoSlice = (A) => {
  const n = A.length;
  let index = 0;
  let currentSum = [A[0] + A[1]];
  let minIncremental = currentSum / 2;
  let currentAverage = 0;
  for (let i = 1; i < n - 1; i++) {
    currentSum[i] = currentSum[i - 1] + A[i + 1];
    currentAverage = currentSum[i] / (i + 2);
    console.log("FILA ", i, " ==> ", currentSum[i]);
    if (currentAverage < minIncremental) {
      minIncremental = currentAverage;
      index = i - 1;
    }
    let j = 0;
    let newCurrentSum = currentSum[i];
    while (j < i) {
      newCurrentSum = newCurrentSum - A[j];
      console.log("ROW ", j, " ==> ", newCurrentSum);
      currentAverage = newCurrentSum / (i + 1 - j);
      if (currentAverage < minIncremental) {
        minIncremental = currentAverage;
        index = j + 1;
      }
      j++;
    }
  }
  // return [minIncremental, index];
  return index;
};

//-------------------------------------------
let array1 = [4, 2, 5, 1, 7, 5, 8];
console.log(minAvgTwoSlice(array1));
