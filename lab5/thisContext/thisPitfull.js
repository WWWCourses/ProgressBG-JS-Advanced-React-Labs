function Constructor(id) {
	this.id = id;
	this.saidHello = 0;

	let __sayHelloCounter = function () {
		// console.dir(this);
		this.saidHello++;
	};


	this.sayHello = function() {
		__sayHelloCounter.call(this);
	};
}

var obj1 = new Constructor(1);
obj1.sayHello();
obj1.sayHello();
obj1.sayHello();
obj1.sayHello();
obj1.sayHello();

console.log(obj1.saidHello ); //1 | 5 |
