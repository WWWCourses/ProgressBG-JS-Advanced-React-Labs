
// function foo(x) {
//     console.log(x);
//     foo(1);
//     console.log(`end`);

// }


// foo(3);
// console.log(`END`);


/* ----------------------- Example: calculate Facture ----------------------- */
// fact(5) = 5*4*3*2*1
// fact(4) = 4*3*2*1
// fact(3) = 3*2*1

// n!=0 => fact(n) = n * fact(n-1)
// n==0 => fact(0) = 1

// function fact(n) {
//     if(n!=0){
//         return n * fact(n-1)
//     }
//     if(n==0){
//         return 1
//     }
// }

// console.log( fact(1000) );
// fact(3) = 3*fact(2) => 3*2 = 6
// fact(2) = 2*fact(1) => 2*1 = 2
// fact(1) = 1*fact(0) => 1*1 = 1
// fact(0) = 1


/* ----------------------- Example: calculate fib(n) ----------------------- */
// 0,1,1,2,3,5,8,13,21, n
// n>2: fib(n) = fib(n-1) + fib(n-2)
// fib(1) = 0
// fib(2) = 1
function fib(n) {
    if(n===1){
        return 0
    }
    if(n===2){
        return 1
    }
    if(n>2){
        return fib(n-1) + fib(n-2)
    }

}

console.log( fib(5) );
