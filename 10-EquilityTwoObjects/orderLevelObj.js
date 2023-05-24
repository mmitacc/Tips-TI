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
      c13: [m, 9, n, 8],
    },
    b2: {
      c21: 4,
      c22: {
        d221: NaN,
        d222: undefined,
        d223: 45,
      },
      c23: [x, y, 0],
    },
  },
  a2: false,
  a3: {
    b1: "juan",
    b2: 0,
  },
};

console.log(obj1.a1.b1.c13);

const orderLevelObj = (obj) => {
  if (Array.isArray()[obj]) {
  }
};

const equilityTwoObjects = (obj1, obj2) => {};
