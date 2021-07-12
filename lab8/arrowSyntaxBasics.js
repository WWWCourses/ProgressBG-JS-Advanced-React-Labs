// function foo() {}
// pure function: f = x+y

/* ------------------------- classic function syntax ------------------------ */
// function (param1, param2, …, paramN) { statements }
// let fooClassic = function (x,y) {
// 	return x+y
// }

/* -------------------------- arrow function syntax ------------------------- */
// // (param1, param2, …, paramN) => { statements }
// let fooArrow = (x,y)=>{return x+y}


// console.log( fooArrow(2,3) );// 5
// console.log( fooArrow(3,3) );// 5

/* ------------- TASK: define function cub() with arrow syntax: ------------- */
// let cub = x=>{ return x*x*x }

// console.log( cub(2) ); // 8
// console.log( cub(3) ); // 27

// let cub = x => x*x*x;

/* --------------- What is the next arrow functions equivalent -------------- */
// var foo = x=>y=>y**x;

// function foo(x) {
// 	return function(y) {
// 		return y**x
// 	}
// }

// console.log( foo(2)(3) );//  3**2


/* -------------------------- ternary operator demo ------------------------- */
// function foo(x) {
// 	if (x>0) {
// 		return 'positive'
// 	}else{
// 		return 'negative'
// 	}
// }

// the same as above
// var foo  = x=> x>0?'positive':'negative';

// console.log( `result is ${foo(3)}`);
// console.log( `result is ${foo(-3)}`);


/* ------------------------- this in arrow functions ------------------------ */
// function Calc(x,y) {
// 	this.x = x;
// 	this.y = y;
// }

// Calc.prototype.add = function() {
// 	return this.x + this.y
// }

// Calc.prototype.add = ()=>this.x +this.y;

// let c1 = new Calc(2,3);

// console.log( c1.add.call( {x:10, y:20} ) );




/* -------------------------------- arguments ------------------------------- */
// console.log(arguments);
// let bar = x=>console.dir(`1, ${arguments}`);
// // function bar(x) {
// // 	console.dir(arguments)
// // }


// bar(1,2);

// setInterval(() => {

// }, interval);



// function foo() {
// 	return bar = x=>console.dir(arguments)
// }


// foo(1,2)();


let userNameInput = "Ada";

// if no userNameInput => 'Anonymous'
userName = userNameInput || 'Anonymous';


console.log(userName); // 'Anonymous'  "Ada"





