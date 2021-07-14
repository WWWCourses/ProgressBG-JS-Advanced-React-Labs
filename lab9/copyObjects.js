let source = {
	a:1,
	b:2
}

let copy = source;
source.a = 100;
console.log(copy);

// console.log( copy === source);

// let copy = {};
// for(let p in source){
// 	// console.log(p, source[p]);
// 	copy[p] = source[p];
// }


// let target = {};
// Object.assign(target, source )

// console.log( target === source);
// console.dir(source);
// console.dir(target);

// source.a = 99;
// console.dir(target); // 1

// console.log( backup.a ); // 1



// obj.a = 100;
// console.log(backup); //a = 100 , b =


// RAM:
// 0x1332132:obj
// 	1
// 	2

// 0x643ffd:backup