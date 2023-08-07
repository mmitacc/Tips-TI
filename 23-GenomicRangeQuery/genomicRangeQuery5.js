const genomicRangeQuery = (S, P, Q) => {
  let minImpactFactor = [];
  const lengthPQ = P.length;
  for (let i = 0; i < lengthPQ; i++) {
    let factor = "";
    if (P[i] === Q[i]) {
      factor = S[P[i]];
    } else {
      let fMin = [];
      fMin.push(S[P[i]]);
      for (let j = P[i] + 1; j <= Q[i]; j++) {
        S[j] < fMin[j - P[i] - 1]
          ? fMin.push(S[j])
          : fMin.push(fMin[j - P[i] - 1]);
      }
      factor = fMin[Q[i] - P[i]];
    }
    switch (factor) {
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
let p = [2, 5, 0];
let q = [4, 5, 6];

//---------------------------------------------------------------------
console.log(genomicRangeQuery(s, p, q));
