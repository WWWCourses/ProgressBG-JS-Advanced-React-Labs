// // Define customMap function
// function customMap(arr, callbackFunc) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         newArray[i] = callbackFunc(element);
//     };
//     return newArray
// }


// // TEST
// const nums = [1, 2, 3, 4];
// const squared = customMap(nums, n=>n*n);
// console.log(squared);  // Expected output: [1, 4, 9, 16]


// // YOUR CODE HERE
// const memoize = function (func) {
//     let cache = {};
//     return function (num) {
//         if (num in cache) {
//             console.log('use cache');
//             return cache[num];
//         } else {
//             let result = func(num);
//             cache[num] = result;
//             //console.log(cache);
//             return result
//         }
//     }
// }

// //1,1,2,3,5,8,13, ...
// // TEST
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// const memoizedFibonacci = memoize(fibonacci);
// console.log(memoizedFibonacci(10)); // Expected output: 55
// console.log(memoizedFibonacci(10)); // Expected output: 55 (calculated efficiently with memoization)

// ---------------------------------- Task 5 ---------------------------------- //
/* DESCRIPTION:
Write a function named `customFilter` that mimics the behavior of the JavaScript
array method `Array.prototype.filter`. Your `customFilter` function should take two
arguments: an array and a callback function that takes one argument (`x`) and
returns `true` if the argument is positive (i.e.x > 0) and `false` if `x` is negative.
The customFilter function should return a new array containing only the elements for which the callback function returns `true`.
*/

// YOUR CODE HERE
// Define customFilter function
const customFilter = (array, isPositive)=>{
    let result = [];
    // for(let el of array){
    //     if(isPositive(el)){
    //         result.push(el)
    //     }
    // }
    array.forEach(el => {
        if(isPositive(el)){
            result.push(el)
        }
    });
    return result;
}

// TEST
const nums = [-1, 1, -2, 3, 4];
const positiveNumbers = customFilter(nums, el=>el>=0);
console.log(positiveNumbers); // Expected output: [1, 3, 4]
console.log(positiveNumbers.length);