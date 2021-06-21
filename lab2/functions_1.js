// hoisting demo : DO NOT RELAY ON THIS
console.log(`1: x = ${x}`);
console.log( add(2,3) );
foo()

var x = 5;


function add(x,y){
	// let x = 2, y = 3
	console.log(`ADD: x = ${x}, y = ${y}`); //
    return x+y
}

var foo = function() {
	let z = 5;
	console.log(`I'm foo`);
	console.log(`FOO: x = ${x}`);
}

foo()

console.log( add() );

console.log(`MAIN: x = ${x}, y = ${y}`); //



// RAM: SCOPE (global)
// 0x1232:x => undefined
// 0x2344:add => function[add]
// 0x23432: foo=>undefind


// SCOPE (add)
// 0x53632: x => 2
// 0x53322: y => 3

// Scope (foo)
// z=>5


