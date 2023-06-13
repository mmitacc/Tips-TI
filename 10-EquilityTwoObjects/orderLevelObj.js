let obj1 = {
  a1: {
    b1: {
      c11: 4,
      c12: {
        d111: function d(x) {
          return x * x;
        },
        d112: true,
      },
      c13: ["m", 9, "n", 8],
    },
    b2: {
      c21: 4,
      c22: {
        d221: NaN,
        d222: undefined,
        d223: 45,
      },
      c23: ["x", "y", 0],
    },
  },
  a2: false,
  a3: {
    b1: "juan",
    b2: 0,
  },
};

let objeto1 = {
  c1: 4,
  c2: {
    d21: NaN,
    d23: 45,
  },
  c3: ["x", "y", 0],
};

let objeto2 = {
  c3: ["x", "y", 0],
  c2: {
    d21: NaN,
    d23: 45,
  },
  c1: 4,
};

let c2 = {
  d111: function d(x) {
    return x * x;
  },
  d112: true,
};

function orderLevelObj(obj) {
  if (Array.isArray()[obj]) {
  }
}

const equilityTwoObjects = (obj1, obj2) => {
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    console.log("Argumentos ingresados validados satisfactoriamente");
    // let obj1Json = JSON.stringify(c2);
    let obj1Json = Object.entries(c2);
    console.log(obj1Json);
    console.log(obj1Json[0])
    console.log(Object.fromEntries(obj1Json));
  } else {
    console.error("Argumento ingresado no es un objeto");
  }
};

equilityTwoObjects(objeto1, objeto2);

//COPIAR UN OBJETO, pero no reconoce las Functions
const duplicateObj = structuredClone(objeto2);
console.log(duplicateObj);