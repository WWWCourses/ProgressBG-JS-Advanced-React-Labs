function Car(manufacturer, speed) {
	this.manufacturer;
	this.speed;
	function drive(){
		console.log(`Driving with ${speed} km/h.`);
	}
}

let car1 = new Car('Ford', 200);
let car2 = new Car('Ford', 300);

car1.drive();
car2.drive();