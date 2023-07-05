const maxCounters = (N, A) => {
  let numbers = new Map();
  for (let i = 1; i <= N; i++) {
    numbers.set(i, 0);
  }
  const maxValue = (lap) => {
    //se inicializa la busqueda desde el numero de elementos recorridos de "A"
    let findValue = false;
    do {
      for (const [key, value] of numbers) {
        if (value === lap) {
          findValue = true;
          break;
        }
      }
      if (findValue) {
        for (let i = 1; i <= N; i++) {
          numbers.set(i, lap);
        }
        lap = 0;
      } else {
        lap = lap - 1;
      }
    } while (lap > 0);
  };
  const increase = (key) => {
    const value = numbers.get(key);
    numbers.delete(key);
    numbers.set(key, value + 1);
  };
  for (let i = 0; i < A.length; i++) {
    if (1 <= A[i] && A[i] <= N) {
      increase(A[i]);
    } else if (A[i] > N) {
      maxValue(i); //"i" es el numero de elementos recorridos, antes del "x > N"
    }
  }
  let result = [];
  for (let i = 1; i <= N; i++) {
    result.push(numbers.get(i));
  }
  return result;
};
//---------------------------------------------------
const arr1 = [3, 4, 4, 6, 1, 4, 4];
const arr2 = [3, 4, 4, 6, 1, 4, 4, 1];

//---------------------------------------------------
console.log(maxCounters(5, arr1));
console.log(maxCounters(5, arr2));
