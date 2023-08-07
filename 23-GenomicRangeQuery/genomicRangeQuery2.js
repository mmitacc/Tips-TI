const genomicRangeQuery = (S, P, Q) => {
  const genomic = ["A", "C", "G", "T"];
  let minImpactFactor = [];
  let minFactor = "";
  for (let i = 0; i < P.length; i++) {
    const minSet = new Set(S.slice(P[i], Q[i] + 1).split(""));
    // console.log(S.slice(P[i], Q[i] + 1), " => ", minSet);
    for (let j = 0; j < 4; j++) {
      if (minSet.has(genomic[j])) {
        minFactor = genomic[j];
        break;
      }
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
let p = [2, 5, 0, 0, 3];
let q = [4, 5, 6, 1, 5];

//---------------------------------------------------------------------
console.log(genomicRangeQuery(s, p, q));
