const maxCounters = (N, A) => {
  let numbers = [];
  for (let i = 0; i < N; i++) {
    numbers.push(0);
  }
  const maxValue = (lap) => {
    //se inicializa la busqueda desde el numero de elementos recorridos de "A"
    while (numbers.includes(lap) === false) {
      lap = lap - 1;
    }
    for (let i = 0; i < N; i++) {
      numbers[i] = lap;
    }
  };
  const increase = (index) => {
    numbers[index - 1] = numbers[index - 1] + 1;
  };
  for (let i = 0; i < A.length; i++) {
    if (1 <= A[i] && A[i] <= N) {
      increase(A[i]);
    } else if (A[i] > N) {
      maxValue(i); //"i" es el numero de elementos recorridos, antes del "x > N"
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
