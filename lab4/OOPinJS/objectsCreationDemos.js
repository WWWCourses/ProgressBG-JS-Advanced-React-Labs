/* ----------------- each example is in a separate function. ---------------- */
const encapsulationInfactoryDemo = function() {
	"use strict";

	let devFactory = function(name, salary){
		let _salary = salary;

		return {
			name,
			getSalary(){
				return _salary;
			},
			increaseSalary(incrValue, pass){
				if(pass === 'abracadabra'){
					_salary+=incrValue;
				}else{
					console.log(`Wrong password! Maria salary will not be increased!`);
				}
			}
		};
	};

	let dev1 = devFactory('Peter', 1000);
	let dev2 = devFactory('Maria', 1200);

	console.log(`${dev1.name} salary is ${dev1.getSalary()}`);
	console.log(`${dev2.name} salary is ${dev2.getSalary()}`);

	dev1.increaseSalary(500, 'abracadabra');
	dev2.increaseSalary(100, '123');

	console.log(`${dev1.name} salary after promotion is ${dev1.getSalary()}`);
	console.log(`${dev2.name} salary after promotion is ${dev2.getSalary()}`);

	dev1.salary = 10000000;
	console.log(`${dev1.name} salary is ${dev1.getSalary()}`);


};

const factoryDemo = function() {
	console.log(`\nfactoryDemo`);

	function devFactory(name, salary) {
		// "private" properties:
		let _salary = salary;

		let obj = {};
		obj.name = name;

		obj.increaseSalary = function(incrValue) {
			console.log(`increasing salary`);
			_salary+=incrValue;
		};

		obj.logSalary = function() {
			console.log(`${this.name} salary is ${_salary}`);
		};

		return obj;
	}


	const dev1 = devFactory('Pesho', 10000);
	const dev2 = devFactory('Maria', 15000);

	dev1.logSalary();

	dev1.increaseSalary(100); //
	dev1.salary = 0;

	dev1.logSalary();
};

const constructorDemo = function() {
	console.log(`\nconstructorDemo`);

	function Developer(name, salary) {
		// "private" properties:
		let _salary = salary;

		// let this = {};
		this.name = name;

		this.increaseSalary = function(incrValue) {
			console.log(`increasing salary`);
			_salary+=incrValue;
		};

		this.logSalary = function() {
			console.log(`${this.name} salary is ${_salary}`);
		};

		// return this;
	}

	const dev1 = new Developer('Pesho', 10000);
	const dev2 = Developer('Maria', 15000);

	dev1.logSalary();
	dev2.logSalary();

	dev1.increaseSalary(100); //
	dev1.salary = 0;

	dev1.logSalary();
};

let superEasyFunctionConstructorExample = function() {
	console.log(`\nsuperEasyFunctionConstructorExample`);

	let foo = function() {
		console.log(`Hi`);
		this.name='ivan';
		return 1;

		// return this
	};

	// let obj =  new foo();
	let obj =  foo();
	console.log(typeof obj);
	console.log(obj);
}();


