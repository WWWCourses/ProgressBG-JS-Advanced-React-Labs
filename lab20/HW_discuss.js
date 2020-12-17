
const arr = [1,2,3,4,5];
// [1,2,3,4,5];
// [2,4];
// [4,16].

// TODO: upload 2 solutions in slides
const result1 = arr
	.filter(el=>el%2===0)
	.map(el=>el**2)
	.reduce( (ac,el)=>ac+el);


// const result1 = arr.reduce((acc, curr) => {
//     if(curr % 2 === 0) {
//         curr **= 2;    // curr = curr ** 2;
//     } else {
//         curr = 0; // odd numbers are useless
//     }
//     return acc + curr
// }, 0)
console.log(result1);
