function User(userName) {
	this.userName = userName
}
User.prototype.greet = function () {
	console.log(`Hi, I'm ${this.userName}`);
}

const pesho = new User('Peter');

// Calling greet method immediately: works ok
pesho.greet();
// Hi, I'm Peter

//Variant 1
// setTimeout( pesho.greet.bind(pesho), 2000);

// Variant 2:
setTimeout( ()=> {
	pesho.greet()
}, 2000)




// Hi, I'm undefined
