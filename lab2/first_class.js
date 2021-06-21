const greeting = function(user){

	return function () {
		console.log(`hi ${user}`);
	}
}

// let res = greeting('Maria');
// console.log(res);

// hi maria
// maria | hi maria |



// //19.00.00:
setTimeout(  greeting('maria'), 500);  //
setTimeout(greeting('Pesho'), 1000);



// function setTimeout(f, ms) {
// 	console.log(`Wait`);
// 	// let f = undefined
// 	// wait(ms);
// 	f();
// }
