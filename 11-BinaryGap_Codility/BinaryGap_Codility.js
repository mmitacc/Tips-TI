// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // Implement your solution here
  const Num = N;
  let binario = [];
  let one = false;
  let count = 0;
  let binaryGap = 0;
  do {
    if (N % 2) {
      one = true;
      if (one && N % 2) {
        if (count > binaryGap) binaryGap = count;
        one = true;
        count = 0;
      }
    } else if (one) {
      count += 1;
    }
    binario.unshift(N % 2); //Generator Binary
    N = Math.floor(N / 2);
  } while (N / 2 > 0);
  binario = binario.join(""); //Number binary of "N"
  return "El espacio binario es: "+binaryGap +", del binario "+binario+" del número entero "+Num;
//   return binario;
}

//------------------------------
console.log(solution(1041));
