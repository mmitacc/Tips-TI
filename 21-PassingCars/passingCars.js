const passingCars = (A) => {
  const N = A.length;
  let carsWest = [];
  carsWest.push(A[N - 1]);
  let numberCarsPassing = 0;
  for (let i = N - 2; i >= 0; i--) {
    carsWest.push(carsWest[N - i - 2] + A[i]);
    if (!A[i]) numberCarsPassing += carsWest[N - i - 1];
    if (numberCarsPassing > 1e9) {
      numberCarsPassing = -1;
      break;
    }
  }
  return numberCarsPassing;
};

//--------------------------------------------------------------
const arr1 = [0, 1, 0, 1, 1];

//--------------------------------------------------------------
console.log(passingCars(arr1));
