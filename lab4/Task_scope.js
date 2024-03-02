"use strict"

function foo(x) {
    let bar = function () {
        let y = 2;
        console.log(`x in bar: ${x}`);
        console.log(`y in bar: ${y}`);
    }
    bar(9);
    console.log(`x in foo: ${x}`);
}

const x = 10;
foo(1);
console.log(`x in main: ${x}`);

//