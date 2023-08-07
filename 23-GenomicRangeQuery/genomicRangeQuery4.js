const genomicRangeQuery = (S, P, Q) => {
  let factorS = [];
  for (let i = 0; i < S.length; i++) {
    switch (S[i]) {
      case "A":
        factorS.push(1);
        break;
      case "C":
        factorS.push(2);
        break;
      case "G":
        factorS.push(3);
        break;
      case "T":
        factorS.push(4);
    }
  }
  let minImpactFactor = [];
  for (let i = 0; i < P.length; i++) {
    let factorRange = factorS.slice(P[i], Q[i] + 1);
    let minFactor = new Set(factorRange);
    for (let j = 1; j <= 4; j++) {
      if (minFactor.has(j)) {
        minImpactFactor.push(j);
        break;
      }
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
