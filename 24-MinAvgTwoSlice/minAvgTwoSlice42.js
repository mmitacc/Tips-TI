const minAvgTwoSlice = (A) => {
  const minTransversalIncrementalRightLeft = (array) => {
    let n = array.length;
    let minIncremental = (array[0] + array[1]) / 2;
    let currentSum = [array[0]];
    let currentAverage = 0;
    for (let i = 1; i < array.length; i++) {
      currentSum[i] = currentSum[i - 1] + array[i];
      currentAverage = currentSum[i] / (i + 1);
      console.log(currentSum);
      if (currentAverage < minIncremental) {
        minIncremental = currentAverage;
      }
      let nextMinAverege = minTransversalIncrementalRightLeft(array.slice(i));
      if (nextMinAverege < minIncremental) {
        minIncremental = nextMinAverege;
        console.log(
          "nextMinAverege en ",
          array.length,
          " es => ",
          nextMinAverege
        );
      }
    }
    return minIncremental;
  };
  return minTransversalIncrementalRightLeft(A);
};
//-------------------------------------------
let array1 = [4, 2, 5, 1, -7, 5, 8];
console.log(minAvgTwoSlice(array1));
