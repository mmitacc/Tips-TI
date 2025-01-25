export default function factorial(n) {
    let prod = 1;
    if (n>1) {
        while (n>1) {
            prod = prod * n;
            n = n - 1;    
        }
    }
    return prod;
}  

// console.log(factorial(1));
// console.log(factorial(36));
// console.log(factorial(0));
// console.log(factorial(5));