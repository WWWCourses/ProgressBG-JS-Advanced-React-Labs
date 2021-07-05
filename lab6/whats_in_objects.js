
let obj = {
	id:1,
};

// console.dir(obj.__proto__.constructor.prototype);
// console.dir(obj.__proto__);


function Car(name){
	// this = {}
	this.name = name;
	// this.__proto__ = Car.prototye
	// return this;
}

let car1 = new Car("car1");
let car2 = new Car("car2");

console.dir(car1); //
console.dir(car2); //

// let car3 = {};
// car3.name="car3";
// // car3.__proto__ = Car.prototype




