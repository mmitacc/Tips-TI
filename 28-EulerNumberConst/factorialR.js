let prod;
const factorial = (n) => {
    return n<2 ? prod = 1 : prod = n * factorial(n-1);
}

export default factorial

// console.log(factorial(1));
// console.log(factorial(36));
// console.log(factorial(0));
// console.log(factorial(5));