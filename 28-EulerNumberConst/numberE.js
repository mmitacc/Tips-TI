import factorial from "./factorialR.js";

let euler = 2
function numberEuler(n) {
    return n<3 ? (n<2 ? euler-1 : euler) : euler = euler + 1/factorial(n-1);
}

// IMPRIMIR la constante de EULER con una presición de "N" iteraciones
const N = 20;
for (let i = 1; i <= N; i++) {
    console.log("Const EULER con: ",i, "iteraciones: ",numberEuler(i));
}

console.log("(*) Const EULER de JAVASCRIPT ==> ", Math.E);
