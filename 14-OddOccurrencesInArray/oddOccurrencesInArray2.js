const oddOccurrencesInArray2 = (A) => {
  let unDuplicate = [A[0]];
  let aux = 0;
  let findPartner = 0;
  for (let i = 1; i < A.length; i++) {
    findPartner = unDuplicate.indexOf(A[i])
    if (findPartner >= 0) {
      aux = unDuplicate[unDuplicate.length-1];
      unDuplicate[unDuplicate.length-1]=unDuplicate[findPartner];
      unDuplicate[findPartner] = aux;
      elementOdd = A[i]
      unDuplicate.pop(); //Delete element duplicate
    } else {
      unDuplicate.push(A[i]);
    } 
  }
  return unDuplicate[0];
};

//------------------------------------------------------------
const Arr1 = [9, 3, 9, 3, 9, 7, 9];
const Arr2 = [1, 22, 7, 7, 9, 5, 1, 3, 15, 3, 15, 5, 9];

console.log(oddOccurrencesInArray2(Arr1));
console.log(oddOccurrencesInArray2(Arr2));
