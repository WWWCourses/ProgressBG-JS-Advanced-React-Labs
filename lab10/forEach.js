let arr = [1,2,3];

let sum = 0;



let processElement = (el, i, arr)=>{
	console.log(el);
	console.log(i);
	console.log(arr);
	sum+=el
};

arr.forEach( processElement )
console.log(sum);
