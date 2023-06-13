const findDuplicateNumber = (arr) => {
  // Tu código aquí
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
};

module.exports = findDuplicateNumber;

//-------------------------------------------
// const arr1 = [3, 1, 2, 5, 2, 4];
// const arr2 = [3, 1, 5, 2, 4, 3, 7, 9, 6, 8];

//-------------------------------------------
// console.log(findDuplicateNumber(arr1));
// console.log(findDuplicateNumber(arr2));
