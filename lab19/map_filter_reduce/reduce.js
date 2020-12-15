let input = [1,2,3,4];
let sum = input.reduce( (ac, el)=> {
	console.log(ac, el);
	return el+ac;
} );

console.log(`sum = ${sum}`);
