let input  = [
	{id:1},
	{id:2},
	{id:3},
	{id:4},
	{id:5},
];

/* ------------------- find sum of all object's id values ------------------- */
// variant 1: not so readable
function reduceToSum(acc,el) {
	// console.log(acc);
	// console.log(el);
	return {id:(acc.id + el.id)}
}
// console.log( reduceToSum( {id:1},{id:2} ) );

let sumObj = input.reduce( reduceToSum  )
console.log(sumObj.id);

// variant 2: map->reduce : the best variant
let sum = input.map( el=> el.id ).reduce( (acc,el)=> acc+el);

console.log( sum );


