// "use strict";
// console.log(window===this);

// let table1 = {
// 	tableName:'Table1',
// 	clean: function() {
// 		console.dir(this);
// 	}
// }

// table1.clean();
// let foo = table1.clean;
// foo();


// function Table(tableName) {
// 	this.tableName = tableName;
// 	this.clean= function() {
// 		console.dir(this);
// 	}
// }
// console.dir(Table);
// Table.foo = function () {
// 	console.log(`I'm static method`);
// 	console.dir(this);
// }

class Table{
	constructor(tableName){
		this.tableName = tableName;
		this.clean= function() {
			console.dir(this);
		}
	}
	static foo() {
		console.log(`I'm static method`);
		console.dir(this);
	}
}


Table.foo();
console.dir(Table);



const table2 = new Table('table2');
// table2.clean();
