let obj = {};
obj.length = 100;
let arr = Array.from(obj, (el,i)=> i+1 );
console.dir(arr);