const countDiv = (A, B, K) => {
  let numberIntegerDiv = 0;
  for (let i = A; i <= B; i++) {
    if (i % K === 0) numberIntegerDiv += 1;
  }
  return numberIntegerDiv;
};

//--------------------------------------
console.log(countDiv(6, 11, 2));
console.log(countDiv(0, 21, 3));
