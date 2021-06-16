// just an object:
let obj = {};
obj.id = 1;
console.log(`obj.id: ${obj.id}`); // 1

// just a string
let str = 'HI';
console.log( str.toLowerCase() );
console.log( (new String(str)).toLowerCase() );// 'hi'
str.id = 1;
console.log(`str.id: ${str.id}`); //
console.log(`typeof str: ${typeof str}`);

// a string object
let strObj = new String(str);
console.log( strObj.toLowerCase() );
strObj.id = 1;
console.log(`strObj.id: ${strObj.id}`); // 1 | ?
console.log(`typeof strObj: ${typeof strObj}`);
