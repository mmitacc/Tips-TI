const maxCounters = (N, A) => {
  let numbers = new Array(N).fill(0);
  let valueGeneralItem = 0;
  let numbersSet = new Set();
  for (let i = 0; i < A.length; i++) {
    if (A[i] > N) {
      valueGeneralItem = numbersSet.size;
    } else {
      if (numbers[A[i] - 1] < valueGeneralItem) {
        numbers[A[i] - 1] = valueGeneralItem + 1;
      } else {
        numbers[A[i] - 1] += 1;
      }
      numbersSet.add(numbers[A[i] - 1]);
    }
  }
  for (let i = 0; i < N; i++) {
    if (numbers[i] < valueGeneralItem) {
      numbers[i] = valueGeneralItem;
    }
  }
  return numbers;
};
//---------------------------------------------------
const arr1 = [3, 4, 4, 6, 1, 4, 4];
const arr2 = [3, 4, 5, 6, 1, 4, 6, 1, 4, 5, 6, 1, 4, 6];

//---------------------------------------------------
console.log(maxCounters(5, arr1));
console.log(maxCounters(5, arr2));
