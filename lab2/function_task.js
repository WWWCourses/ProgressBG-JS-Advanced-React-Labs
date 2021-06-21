let x = 1;


function foo(x) {

	function bar(x) {
		console.log(`BAR: x=${x}`);
	}

	bar(x+1);

	console.log(`FOO: x=${x}`);
}


foo(9);

console.log(`GLOBAL: x=${x}`);

// BAR: x = 10
// FOO: x = 9