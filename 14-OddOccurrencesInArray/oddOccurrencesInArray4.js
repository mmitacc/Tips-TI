const oddOccurrencesInArray = (A) => {
  //Ordering array with "QuickSort" and find element without pair:
  const quickSort = (array) => {
    if (array.length > 1) {
      let pivot = array[0];
      let pivota = [pivot];
      let arrayLeft = [];
      let arrayRight = [];
      let countDuplex = 1;
      for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
          arrayLeft.push(array[i]);
        } else if (array[i] === pivot) {
          countDuplex += 1;
        } else {
          arrayRight.push(array[i]);
        }
      }
      if (countDuplex % 2 === 0) pivota.pop();
      array = quickSort(arrayLeft).concat(pivota).concat(quickSort(arrayRight));
    }
    return array;
  };
  const elementOdd = quickSort(A)[0];
  return elementOdd;
};

//------------------------------------------------------------
const Arr1 = [9, 3, 9, 3, 9, 7, 9];
const Arr2 = [1, 22, 7, 7, 9, 5, 1, 3, 15, 3, 15, 5, 9];
const Arr3 = [5, 6, 5, 5, 6, 6, 6, 6, 5];
const Arr4 = [
  5, 6, 5, 5, 6, 6, 6, 6, 5, 3, 3, 3, 3, 2, 3, 2, 3, 2, 2, 2, 2, 6, 5,
];

console.log(oddOccurrencesInArray(Arr1));
console.log(oddOccurrencesInArray(Arr2));
console.log(oddOccurrencesInArray(Arr3));
console.log(oddOccurrencesInArray(Arr4));
