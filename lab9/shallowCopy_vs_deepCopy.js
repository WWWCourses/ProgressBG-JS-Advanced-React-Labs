let student1 = {
	age: 23,
	address: {
		'town': 'sofia',
		'zip': 1200
	}
}

// Shallow Copy
// let copy = {};
// Object.assign(copy, student1);

// Deep Copy:
let copy = JSON.parse(JSON.stringify(student1));

student1.address.town = "plovdiv";

console.dir(student1.address);
console.dir(copy.address);