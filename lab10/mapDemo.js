// let input = ['a', 'b', 'c'];
// console.log( input[0].toUpperCase() );

// let ouput = [];
// input.forEach( el=> ouput.push(el.toUpperCase()) )

// let output = input.map( el=>el.toUpperCase() );

// console.log( output ); //

// let input = [1,2,3];

// let output = input.map( el=>el**2 );

// console.log( output ); // [1,4,9]



let input = [1,2,3];

let output = input.map( (el,i)=>{
	console.log(el, i);
	return el+i
});

console.log( output ); // [1,3,5]