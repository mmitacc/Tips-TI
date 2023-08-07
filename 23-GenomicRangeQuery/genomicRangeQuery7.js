const genomicRangeQuery = (S, P, Q) => {
  const factorAllMatriz = (stringS) => {
    let factorArray = [];
    if (stringS.length !== 0) {
      factorArray.push(stringS[0]);
      for (let i = 1; i < stringS.length; i++) {
        stringS[i] < factorArray[i - 1]
          ? (factorArray[i] = stringS[i])
          : (factorArray[i] = factorArray[i - 1]);
      }
      return [...factorArray].concat(factorAllMatriz(stringS.slice(1)));
    } else {
      return factorArray;
    }
  };
  const upperTriangleFactor = factorAllMatriz(S);
  console.table(upperTriangleFactor);
  let minImpactFactor = [];
  const n = S.length;
  for (let i = 0; i < P.length; i++) {
    let pi = P[i];
    let qi = Q[i];
    // console.log(n * pi - (pi * (pi - 1)) / 2 - pi + qi);
    switch (upperTriangleFactor[n * pi - (pi * (pi - 1)) / 2 - pi + qi]) {
      case "A":
        minImpactFactor.push(1);
        break;
      case "C":
        minImpactFactor.push(2);
        break;
      case "G":
        minImpactFactor.push(3);
        break;
      case "T":
        minImpactFactor.push(4);
    }
  }
  return minImpactFactor;
};

//---------------------------------------------------------------------
let s = "CAGCCTA";
// let s = "CAG";

let p = [2, 5, 0];
let q = [4, 5, 6];

//---------------------------------------------------------------------
console.log(genomicRangeQuery(s, p, q));
