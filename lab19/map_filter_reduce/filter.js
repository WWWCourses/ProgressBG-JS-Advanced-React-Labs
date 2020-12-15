let input = [1,2,3,4,5];
let outputFilter = input.filter( el=> el%2 );
let outputMap = input.map( el=> el%2 );

console.log(input);
console.log(outputMap);
// [1, 0, 1, 0, 1]
console.log(outputFilter);
// [1, 3, 5 ]

