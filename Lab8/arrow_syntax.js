/* ---------------------- Lexical this in arrow syntax ---------------------- */
// function foo(x){
//     console.log(this);
// }

// const bar = x=>{
//     console.log(this);
// }


// let obj = {
//     id: 1,
//     foo: foo,
//     bar: bar
// }

// console.log( obj.foo() );
// console.log( obj.bar() );

/* ------------------------ Lexical arguments object ------------------------ */
// function foo() {
//     console.log(arguments);
// }

// const bar=()=>{
//     console.log(arguments);
// }

// foo(1)
// foo(1,2)
// foo(1,2,3)


// bar(1)
// bar(1,2)
// bar(1,2,3)

// IIFE:
// (()=>{console.log(`HI`)})();


const foo = ()=>{};

let obj = new foo();
console.log(obj);
