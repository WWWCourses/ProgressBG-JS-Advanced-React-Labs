const example1 = function() {
	let obj = {
		sofia: "SOFIAAAAAAAAAAA",
		name: 'ivan',
		"1": 111,
		address : {
			'town':'sofia',
			'zip code': 580,

		}
	};

	let propName = obj.address.town;
	// propName = 'sofia'

	// console.dir(obj);

	// console.log(obj.name); // "ivan"
	// console.log(obj["name"]); // "ivan"
	// console.log(obj.1);// error
	// console.log(obj["1"]);

	console.log( obj[propName] ); // "ivan"
	// console.log(obj['sofia']); // "ivan"

	console.log( obj.address.town ); // 'sofia'

	// let tmp = obj.address;

	// console.log( obj.address.town ); // 'Sofia'
	// console.log( obj.address["zip code"]); // 580
};

const example2 = function() {

	function devFactory(name, age) {
		return {
			name, age,
			greet(){
				console.log(`I'm ${this.name} - ${this.age}`);
			}
		};
		// before ES6:
		// return {
		// 	name:name,
		// 	age:age,
		// 	greet: function (){
		// 		console.log(`I'm ${this.name} - ${this.age}`);
		// 	}
		// }
	}

	function DevConstructor(name, age) {
		this.name=name;
		this.age=age;
	}

	class Developer{
		constructor(name, age){
			this.name = name;
			this.age = age;
		}
	}

	let dev1 = devFactory('ivan', 32);
	let dev2 = new DevConstructor('pesho', 32);
	let dev3 = new Developer('maria', 32);

	console.dir(dev1);
	console.dir(dev2);
	console.dir(dev3);

	dev1.greet();



}();

const example3 = function() {

};
