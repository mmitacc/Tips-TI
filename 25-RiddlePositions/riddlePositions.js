console.time("Execution Time: "); //Inicio TIME ----------------------------//

const riddlePositions = (cells) => {
  let initial = [...Array(cells).keys()];
  const positionsOrigin = [];
  const positionsRandom = [];
  for (let index = 0; index < cells; index++) {
    positionsOrigin.push(index + 1);
    const order = initial.length;
    const id = Math.floor(Math.random() * order);
    // Ajuste de elementos del [1, ..., cells]
    positionsRandom.push(initial[id] + 1); //Aquí se excluye el "0"
    initial = initial.filter((elem) => elem !== initial[id]);
  }
  console.log("PRISIONEROS ORDER: ", positionsRandom);
  return positionsOrigin;
  // return [positionsOrigin, positionsRandom];
};

console.timeEnd("Execution Time: "); //Fin TIME ---------------------------------//
//---------------------------------------------------------
console.log(riddlePositions(10));
