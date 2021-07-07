let car = {
	speed: 100,
	drive:function () {
		console.log(`Drinving with ${this.speed}`);
	}
}

// let ford = {
// 	speed: 200
// }

let ford = Object.create(car);
// the same as above
// let ford = {};
// ford.__proto__ = car;

ford.speed = 500;
ford.drive();
