const maxCounters = (N, A) => {
  let numbers = new Array(N).fill(0);
  const maxValue = (lap) => {
    //se inicializa la busqueda desde el numero de elementos recorridos de "A"
    const numbersSet = new Set(numbers);
    while (numbersSet.has(lap) === false) {
      lap = lap - 1;
    }
    numbers = new Array(N).fill(lap);
  };
  const increase = (index) => {
    numbers[index - 1] += 1;
  };
  for (let i = 0; i < A.length; i++) {
    if (1 <= A[i] && A[i] <= N) {
      increase(A[i]);
    } else if (A[i] > N && i > 0) {
      maxValue(i); //"i" es el numero de elementos recorridos, antes del "x > N"
    }
  }
  return numbers;
};
//---------------------------------------------------
const arr1 = [3, 4, 4, 6, 1, 4, 4];
const arr2 = [3, 4, 4, 6, 1, 4, 4, 1];

//---------------------------------------------------
console.log(maxCounters(5, arr1));
console.log(maxCounters(3, arr2));
