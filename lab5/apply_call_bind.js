function increment(x,y) {
	console.dir(this);
	this.id= this.id + x+y;
};

let obj1 = {
	id: 1
}

let obj2 = {
	id: 2
}


increment.call(obj1, 9,9);
increment.call(obj2, 9,9);



// increment.apply(obj, [10,10]);
// increment.call(obj, 100,100);
// // increment.bind(obj, 100,100)();


console.log(window.id); // NaN
console.log(obj.id); // 1

