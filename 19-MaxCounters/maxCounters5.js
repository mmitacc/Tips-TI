const maxCounters = (N, A) => {
  let numbers = new Array(N).fill(0);
  let numbersSet = new Set();
  for (let i = 0; i < A.length; i++) {
    if (A[i] > N) {
      //==> X > N ==> MAX_COUNTER_ALL "X"
      numbers = new Array(N).fill(numbersSet.size);
    } else {
      //==> 1 ≤ X ≤ N ==> INCREASE "X"
      numbers[A[i] - 1] += 1;
      numbersSet.add(numbers[A[i] - 1] + 1); //Repeat Counter "X"
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
