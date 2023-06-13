const oddOccurrencesInArray3 = (A) => {
  //1.- Ordering array with "QuickSort":
  const quickSort = (array) => {
    if (array.length > 1) {
      let pivot = array[0];
      let pivota = [pivot];
      let arrayleft = [];
      let arrayright = [];
      for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
          arrayleft.push(array[i]);
        } else {
          arrayright.push(array[i]);
        }
      }
      array = quickSort(arrayleft).concat(pivota).concat(quickSort(arrayright));
    }
    return array;
  };
  //2.- Find the element without a pair:
  const orderedArray = quickSort(A);
  for (let i = 0; i < orderedArray.length; i = i + 2) {
    if (orderedArray[i] !== orderedArray[i + 1]) {
      return orderedArray[i];
    }
  }
};

//------------------------------------------------------------
const Arr1 = [9, 3, 9, 3, 9, 7, 9];
const Arr2 = [1, 22, 7, 7, 9, 5, 1, 3, 15, 3, 15, 5, 9];

console.log(oddOccurrencesInArray3(Arr1));
console.log(oddOccurrencesInArray3(Arr2));
