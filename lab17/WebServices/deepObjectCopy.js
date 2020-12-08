let obj1 = {
	"a" : {
		"b" : 1
	},
	"c" : 1
}

// Shallow copy:
// let copy = {...obj1};
// let copy = Object.assign({},obj1);
// obj1.c = 9;
// obj1.a.b = 2;

// console.log( copy );

// Deep copy:
let copy = JSON.parse( JSON.stringify(obj1) );
obj1.c = 9;
obj1.a.b = 2;
console.log( obj1 );
console.log( copy );