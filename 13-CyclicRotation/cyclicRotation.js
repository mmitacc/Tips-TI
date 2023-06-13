const cyclicRotation = (A, K) => {
  let B = [];
  for (let i = 1; i <= K; i++) {
    for (let j = 0; j < A.length; j++) {
      j + 1 === A.length ? (B[0] = A[j]) : (B[j + 1] = A[j]);
    }
    A = [...B];
  }
  return A;
};

//-------------------------
const A1 = [3, 8, 9, 7, 6];
const K1 = 3;
console.log(cyclicRotation(A1, K1));
//-------------------------
const A2 = [0, 1, 1, 1, 1, 0, 0, 0];
const K2 = 7;
console.log(cyclicRotation(A2, K2));
