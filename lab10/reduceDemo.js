let input = ['a','b','c']

// console.log( input.join('') );
// join with reduce
let outputStr = input.reduce( (acc, el)=> acc+el, '@@@@' )

console.log( outputStr ); // 'abc'

sum (1, 5_000_000_000); 20sec

sum1 (1, 2000_000_000); 10sec
sum2( 2000_000_000, 5_000_000_000); 10sec
