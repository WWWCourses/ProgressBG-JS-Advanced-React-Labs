let arr = [1,2,3];
console.dir(arr);

arr.push(9);
console.dir(arr);
// override push method
Array.prototype.push = function() {
	console.log(`Pushing`);
}

arr.push(100);
console.dir(arr);
