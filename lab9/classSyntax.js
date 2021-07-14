/* -------------------------------------------------------------------------- */
/*              create "class" Student with "construcor" function             */
/* -------------------------------------------------------------------------- */
function StudentConstructor(name, age) {
	this.name = name;
	this.age = age;

	// StudentConstructor.counter();
}
StudentConstructor.prototype.greet = function() {
	console.log(`${this.name} - ${this.age}`);
}

// static methods and properties:
StudentConstructor.count = 0;

StudentConstructor.counter = function () {
	StudentConstructor.count++;
}


/* -------------------------------------------------------------------------- */
/*                      create Student with class syntax                      */
/* -------------------------------------------------------------------------- */
class Person{
	constructor(name, age) {
		this.name = name;
		this.age = age;

	}

	greet() {
		console.log(`${this.name} - ${this.age}`);
	}
}
class Student extends Person{
	name = "Anonymous";
	age = 0;
	static count = 0;

	constructor(name, age, faculty) {
		super(name, age)
		this.faculty = faculty;
		Student.counter()
	}

	static counter(){
		Student.count++;
	}
}


/* ------------------ use the created objectes (instances) ------------------ */
let pesho = new Student('Petyr', 23, "Maths");
let maria = new Student('Maria', 29, "Arts");


console.dir(Student.count);