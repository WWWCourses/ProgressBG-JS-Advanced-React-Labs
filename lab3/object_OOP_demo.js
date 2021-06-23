// class Person(
// 	// properties
// 	name: string;
// 	age: Number;

// 	// methods
// 	changeName()
// )

// class Student(is a Person){
// 	score:number

// 	// methods
// 	takeExam()
// }

// class Teacher{
// 	salary: number
// 	getSalary()
// }

// let pesho = new Student()














const student1 = {
	// properties
	"name": "Petyr",
	"age": 23,

	// methods
	"changeName": function(newName) {
		console.log(`Log the change time`);

		this.name = newName;
	},
	"takeExam": function () {
		console.log(`I've taken my exam`);
	}
}



student1.name = "Ada";

student1.changeName("Maria");

console.dir(student1);
