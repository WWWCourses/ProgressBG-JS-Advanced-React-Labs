var cats = [];

for (var i = 0; i < 3; i++) {

    (function (j) {
		cats[j] = function(){
			console.log(`Cat ${j} is ready!`);
		}
	})(i)

}

// cats[0] = function(){
// 	console.log(`Cat ${0} is ready!`);
// }
//
// console.log(`MAIN: i = ${i}`); // 3|

cats[0](); // cat 0 is ready
cats[1](); // cat 1 is ready
cats[2](); // cat 2 is ready