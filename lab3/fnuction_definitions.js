/* -------------------------- Definining Functions -------------------------- */
// 1. Function Declaration (statement)
function add1(x,y){
    console.log(`x+y=${x+y}`);
    return x+y
};

// 2.Function Expressoin
let add2 = function(x,y) {
    console.log(`x+y=${x+y}`);
    return x+y
}

// 3. Function defined with arrow syntax(discussed later):
let add3 = (x,y)=> {
    console.log(`x+y=${x+y}`);
    return x+y
}

// 4. Function defined with Function Constructor:
let add4 = new Function("x","y", "console.log(`x+y=${x+y}`);return x+y")

console.dir(add1);
console.dir(add2);
console.dir(add3);
console.dir(add4);

// RAM:

//     add1:0x123: 0101010101(function add1)
//     add2:0x345: undefined

// // x+y=5
// // undefined|error