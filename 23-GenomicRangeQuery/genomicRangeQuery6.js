const genomicRangeQuery = (S, P, Q) => {
  let minImpactFactor = [];
  let factor = "";
  const lengthPQ = P.length;
  for (let i = 0; i < lengthPQ; i++) {
    factor = new Set(S.slice(P[i], Q[i] + 1));
    if (factor.has("A" || factor.size === 4)) {
      minImpactFactor.push(1);
    } else if (factor.has("C")) {
      minImpactFactor.push(2);
    } else if (factor.has("G")) {
      minImpactFactor.push(3);
    } else {
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
