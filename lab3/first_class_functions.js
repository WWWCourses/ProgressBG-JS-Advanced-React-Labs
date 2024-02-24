/* ------------------- A function can be a value of array ------------------- */
// let arr = [
//     function() {
//         console.log(`foo`);
//     },
//     function() {
//         console.log(`bar`);
//     },
//     3
// ]

// arr[0]();//?

/* --------------- A function can take a function as argument --------------- */
// function caller(f) {
//     console.log(f);
// }
// function callback() {
//     console.log(`foo`);
// }

// let x = 3;
// bar(x);
// bar(foo);

/* -------------------- A function can return a function -------------------- */
// function foo() {
//     return function() {
//         console.log(`anonymous`);
//     }
// }

// foo()();

// let res = foo();
// res(); //


/* --------------------------- Example - setTimeot -------------------------- */
// function foo(x) {
//     console.log(`Foo`);
// }

// function setTimeout(f, delay) {
//     // f = undefined
//     if(delay>3000){
//         f()
//     }
// }

// function greet(userName) {
//     return function() {
//         console.log(`Hello, ${userName}`);
//     }
// }

// setTimeout( greet('Ada'), 2000);


// function greet(userName) {
//     console.log(`Hello, ${userName}`);
// }
// setTimeout(greet, 2000, 'Ada')







//