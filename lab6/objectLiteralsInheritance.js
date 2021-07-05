let car = {
	'manufacturer':undefined,
	'speed': 100,
	'doors': 4,
	'drive': function () {
		console.log(`Driving with ${this.speed}`);
	}
};


let ford = {
	'manufacturer':'ford',
	'speed': 200,
	__proto__:car,
};

// console.dir(car);
// console.dir(ford);


;


// car.speed = 200;
// car.drive(); // Driving with 200
// ford.drive(); // Driving with 200

// console.log( ford.doors );