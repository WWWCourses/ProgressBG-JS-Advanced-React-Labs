// let increment = function (that) {
// 	// console.log(this);
// 	this.id++;
// }

// // console.dir(increment);
// // console.dir(Function.prototype);
// let obj = {
// 	id:1
// }

// increment.apply(obj);
// console.dir(obj);


function add(x) {
	// let x = 1;
	// let arguments = [1,2];
	console.log(arguments);
	let sum= 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}

	return sum;

}

console.log( add(1,2) );
console.log( add(1,2,3) );
console.log( add(1,2,3,4) );