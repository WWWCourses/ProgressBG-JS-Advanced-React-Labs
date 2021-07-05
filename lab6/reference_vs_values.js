// function foo(y) {
// 	// let y = x
// 	y.push(9);
// 	console.log(`y: ${y}`); // [5,9]
// }
// let x = [5];


// foo(x); //
// console.log(`x: ${x}`); //

// RAM:
// 123=>x: [5],

// 143=>y: 123


let a = [5];
let b = a;
// a = a+100;
a[1] = 9;
console.log(`b = ${b}`);// 105

// RAM:
// 123=>a: [5,9]
// 124=>b: 123