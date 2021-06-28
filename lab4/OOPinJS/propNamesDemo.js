// var obj1={
// 	prop1: 1,
// 	prop1: 2,
// 	prop1: 3,
// 	prop2: 999,
// 	prop1: 4
// }
// console.dir(obj1);


// let obj2 = {
// 	prop1: 4,
// 	prop2: 999
// }
// console.dir(obj2);


let i = 1;
var obj = {
	[`key${++i}`] : i,
	[`key${++i}`] : i,
	[`key${++i}`] : i,
};
console.dir(obj);

// let i = 1;
// let x = [`key${++i}`];

// console.log(x); // ['key2']

