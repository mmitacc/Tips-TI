const countDiv = (A, B, K) => {
  let numberIntegerDiv = 0;
  let divA = false;
  let divB = false;
  while ((!divA || !divB) && A < B) {
    A % K === 0 ? (divA = true) : (A = A + 1);
    B % K === 0 ? (divB = true) : (B = B - 1);
  }
  if (A % K === 0) numberIntegerDiv = 1;
  numberIntegerDiv += (B - A) / K;
  return numberIntegerDiv;
};

//--------------------------------------
console.log(countDiv(5, 6, 2)); //3
console.log(countDiv(0, 22, 3)); //8
