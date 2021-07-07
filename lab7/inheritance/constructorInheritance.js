function Vehicle(manufacturer,speed) {
	console.log(`Vehicle called`);
	this.manufacturer = manufacturer;
	this.speed = speed;
}
Vehicle.prototype.drive = function () {
	console.log(`${this.manufacturer} driving with ${this.speed}`);
};

function Car(manufacturer, speed) {
	// this Pitfall
	Vehicle(manufacturer,speed);
	// Vehicle('ford',300);

	// this.manufacturer = manufacturer;
	// this.speed = speed;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.fly = function () {
	console.log(`Flying with ${this.speed}`);
}

function Bycicle(manufacturer, speed) {

}
Bycicle.prototype = Object.create(Vehicle.prototype);
// works, but setting __proto__ is a BAD PRACTICE!
// Car.prototype.__proto__ = Vehicle.prototype;
// Bycicle.prototype.__proto__ = Vehicle.prototype;

let ford1 = new Car('ford', 300);
let ford100 = new Car('ford', 200);
// let balkan1 = new Bycicle('balkan', 50);

ford1.drive();
ford1.fly();
ford100.drive();
// balkan1.drive();
