const genomicRangeQuery = (S, P, Q) => {
  let minImpactFactor = [];
  const nucleotides = "ACGT";
  for (let i = 0; i < P.length; i++) {
    let factor = S.slice(P[i], Q[i] + 1);
    let minFactor = 0;
    for (let j = 0; j < 4; j++) {
      if (factor.indexOf(nucleotides[j]) >= 0) {
        minFactor = j + 1;
        break;
      }
    }
    minImpactFactor.push(minFactor);
  }
  return minImpactFactor;
};

//---------------------------------------------------------------------
let s = "CAGCCTA";
let p = [2, 5, 0];
let q = [4, 5, 6];

//---------------------------------------------------------------------
console.log(genomicRangeQuery(s, p, q));
