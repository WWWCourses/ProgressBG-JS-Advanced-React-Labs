function foo() {
	console.log(`x: ${x++}`);

	if( x<=20 ){
		foo()
	}
}

console.log(`With Iteration`)

let x = 1;

do {
	console.log(`x: ${x++}`); // x++ => x=x+1
}while(x<=20);

foo();
