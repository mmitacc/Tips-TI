const genomicRangeQuery = (S, P, Q) => {
  let minImpactFactor = [];
  let minFactor = 0;
  let index = 0;
  for (let i = 0; i < P.length; i++) {
    index = P[i];
    minFactor = "T";
    while (index <= Q[i]) {
      if (S[index] < minFactor) minFactor = S[index];
      minFactor === "A" ? (index = Q[i] + 1) : (index += 1);
    }
    switch (minFactor) {
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
