const genomicRangeQuery = (S, P, Q) => {
  let minImpactFactor = [];
  const nucleotides = "ACGT";
  for (let i = 0; i < P.length; i++) {
    let factor = S[P[i]];
    for (let j = P[i] + 1; j <= Q[i]; j++) {
      if (S[j] < factor) factor = S[j];
    }
    minImpactFactor.push(nucleotides.indexOf(factor) + 1);
  }
  return minImpactFactor;
};

//---------------------------------------------------------------------
let s = "CAGCCTA";
let p = [2, 5, 0];
let q = [4, 5, 6];

//---------------------------------------------------------------------
console.log(genomicRangeQuery(s, p, q));
