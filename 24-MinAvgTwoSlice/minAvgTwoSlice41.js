const minAvgTwoSlice = (A) => {
  const minTransversalIncrementalRightLeft = (array) => {
    let minIncremental = (array[0] + array[1]) / 2;
    let currentSum = array[0];
    let currentAverage = 0;
    for (let i = 1; i < array.length; i++) {
      currentSum += array[i];
      currentAverage = currentSum / (i + 1);
      console.log(currentSum);
      console.log(currentAverage);
      if (currentAverage < minIncremental) {
        minIncremental = currentAverage;
      }
    }
    return minIncremental;
  };
  return minTransversalIncrementalRightLeft(A);
};

//-------------------------------------------
let array1 = [4, 2, 2, 5, 1, 5, 8];
console.log(minAvgTwoSlice(array1));
