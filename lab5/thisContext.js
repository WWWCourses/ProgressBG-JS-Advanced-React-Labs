// TODO: why not {} in browser...
"use strict";
console.dir(this);





const cleanTable = function() {
	console.log(`Cleaning ${this.name} `);
}

const table = {
	name:'window table',
	clean: function() {
		console.log(`Cleaning ${this.name} `);
	}
}

// table.clean();
// cleanTable();