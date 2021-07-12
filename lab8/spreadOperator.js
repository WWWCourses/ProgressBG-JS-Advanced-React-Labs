// function foo(x,y) {
// 	console.log( x,y );
// }
// // let arr = [1,2];
// foo(arr[0], arr[1]);
// foo( ...[9,9] );


// Find max element of array
// let arr = [3,5,1,8,6];
// console.log( Math.max(...arr) );


// in array literal
let arr1 = [1,2,3];
let arr2  = [4,5];

// // let concatArr = [arr1, arr2];
// let concatArr = [...arr1, ...arr2];
// console.log( concatArr );

// let concatArr = [1,2,3,4,5]



// add 9 to the end of arr1, but without mutating the arr1
// arr1.push(9);

// console.log(arr1);
// let newArr = [...arr1, 9];


/* ------------------------------ rest operator ----------------------------- */
// let foo = (a, ...b)=>{
// 	console.log(a);
// 	console.log(b);
// }

// foo(1,2,3,4,5)


/* ---------------------- exhange values of 2 variable ---------------------- */
let x = 1;
let y = 4;

[x,y]=[y,x]
console.log(x, y); // 4, 1