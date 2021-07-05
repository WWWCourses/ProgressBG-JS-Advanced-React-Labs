

function Ford(manufacturer, speed) {
	this.manufacturer = manufacturer;
	this.speed = speed;
	// this.drive = function () {
	// 	console.log(`${this.manufacturer} driving with ${this.speed}`);
	// }

}

Ford.prototype.drive = function () {
	console.log(`${this.manufacturer} driving with ${this.speed}`);
}
// Ford.id = 1;

let ford1 = new Ford('ford', 300);
let ford100 = new Ford('ford', 200);

ford1.drive();
ford100.drive();


// RAM:
// 	ford1:
// 		speed: 300
// 		drive: function[]

// 	ford1:
// 		speed: 200,
// 		drive: function[]