const genomicRangeQuery = (S, P, Q) => {
  let minImpactFactor = [];
  let factorMatriz = [];
  for (let i = 0; i < S.length; i++) {
    let factorRow = [];
    factorRow[i] = S[i];
    for (let j = i + 1; j < S.length; j++) {
      S[j] < factorRow[j - 1]
        ? (factorRow[j] = S[j])
        : (factorRow[j] = factorRow[j - 1]);
    }
    factorMatriz.push(factorRow);
  }
  console.table(factorMatriz);
  for (let i = 0; i < P.length; i++) {
    switch (factorMatriz[P[i]][Q[i]]) {
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
        break;
    }
  }
  return minImpactFactor;
};

//---------------------------------------------------------------------
let s = "CAGCCTA";
let p = [2, 5, 0];
let q = [4, 5, 6];

//---------------------------------------------------------------------
console.log(genomicRangeQuery(s, p, q));
