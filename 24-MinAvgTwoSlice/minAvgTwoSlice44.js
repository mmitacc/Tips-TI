const minAvgTwoSlice = (A) => {
  const minTransversalIncrementalRightLeft = (array, index) => {
    const n = array.length;
    let currentSum = [array[n - 1] + array[n - 2]];
    let minIncremental = currentSum[0] / 2;
    if (n > 2) {
      let currentAverage = 0;
      for (let i = 1; i < n - 1; i++) {
        currentSum[i] = currentSum[i - 1] + array[n - 2 - i];
        currentAverage = currentSum[i] / (i + 2);
        if (currentAverage < minIncremental) {
          minIncremental = currentAverage;
          index = n - 2 - i;
        }
        let arr = [...array];
        arr.pop();
        let newCurrentAverage = minTransversalIncrementalRightLeft(
          arr,
          arr.length - 2
        );
        if (newCurrentAverage[0] < minIncremental) {
          minIncremental = newCurrentAverage[0];
          index = newCurrentAverage[1];
        }
      }
    }
    return [minIncremental, index];
  };
  return minTransversalIncrementalRightLeft(A, A.length - 2)[1];
};

//-------------------------------------------
let array1 = [4, 2, 5, 1, -7, -5, 8];
// let array1 = [5, 1, 7, 5, 8];
console.log(minAvgTwoSlice(array1));
