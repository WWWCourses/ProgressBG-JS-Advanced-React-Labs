/* --------------------------- Default Parameters --------------------------- */
// function f(x, y, z){
//     var x = x || 1;
//     var y = y || 2;
//     if(!z){
//         z = 3
//     }

//     console.log(x, y, z);
// }
// f();

// function f(x=1, y=2, z=3){
//     console.log(x, y, z);
// }
// f(9);


// 1+2     => addition operation
// '1'+'2' => concatenation operation

/* ---------------------------- spread operation ---------------------------- */
// ...iterable

// // spread in function call
// const foo = (a,b,c)=>a+b+c;

// let arr = [1,2,3];
// // const result = foo(arr[0], arr[1], arr[2]);
// const result = foo( ...arr );
// // const result = foo( arr ); // bug
// console.log(result);

// spread in array literal
// let arr = [1,2,3];
// console.log( [arr[0], arr[1], arr[2]] );
// console.log( [...arr] );


// TASK: concatenate arr2 to arr1
// arr1 = [1,2]
// arr2 = [3,4,5]

// const new_arr = arr2.concat(arr1);
// const new_arr = [...arr2, ...arr1];

// console.log(new_arr); //[3,4,5,1,2]

// TASK: new_arr = append 99 into arr1
// const arr1 = [1,2,3];
// const new_arr = [...arr1,99];
// // const new_arr = [...arr1];
// // new_arr.push(9);

// console.log(arr1);    // [1,2,3,9]
// console.log(new_arr); // [1,2,3,9]

// let arr = [...'abc', 1,2,3]
// console.log(arr);
// let arr = [[1],2,3];
// let copy = [...arr];
// copy[0] = arr[0]
// copy.push(4);
// copy[0][0] = 9;
// console.log(copy);
// console.log(arr);

/* ----------------------------- rest operation ----------------------------- */
"use strict";
// // example 1:
// const foo = function( ...args ){
//     console.log(arguments);
//     console.log(args);   // [ 1, 2, 3 ]
// };

// foo(1,2,3);

// // example 2:
// const foo = (x, ...args )=>{
//     // let x = 1;
//     // let args = [2,3];
//     console.log(x, args);
// };

// foo();
// foo(1);
// foo(1,2);
// foo(1,2,3);


/* ------------------------ Destructuring assignment ------------------------ */
// Array Destructuring:
// let data = [1,2];
// let [x,y] = data;
// console.log(x,y);

// const userData = ['Ada', 23, 84932499328, 'Sofia','BG'];
// let [userName, userAge, _,__,country] = userData;
// console.log(userName, userAge, country);


// let x,y;
// [...x] = [1,2,3];
// x = 1, y = [2,3]
// console.log(x, y);

// // Task: swap values in x and y
// let x = 1, y = 2;
// [x,y] = [y,x];
// console.log(x, y); // 2 1


// Object Destructuring
// let {a, b} = {a:1, b:2};
// console.log(a, b);

// const userData = {
//     user_name: 'Ada',
//     userAge:23,
//     egn: 84932499328,
//     town:'Sofia',
//     country:'BG'}
// ;

// // let userName = userData.userName;
// let {userName, userAge} = userData;
// console.log(userName);
// console.log(userAge);


// // TASK: create objNew from obj, without a and b
// let obj = {
//     a:1,
//     b:2,
//     c:3
// }

// // const objNew = {...obj} ;
// // delete objNew.a;
// // delete objNew.b;

// // const {a,b, ...objNew} = obj;

// console.log(obj);
// console.log(objNew);


// // TASK:
// const greet = ( {userName, userAge} )=>{
//     // let {userName, userAge} = userData;
//     console.log(`Hello, ${userName}, ${userAge}`);
// };

// const userData = {
//     userName: 'Ada',
//     userAge:23,
//     egn: 84932499328,
//     town:'Sofia',
//     country:'BG'
// };

// // let {userName, userAge} = userData;
// greet(userData);


/* ------------------------ Shorthand property names ------------------------ */
// let userName = 'pesho';
// let userAge = 23;

// // Long....
// // const userData = {
// //     userName: userName,
// //     userAge: userAge
// // };

// // Short:
// const userData = {userName, userAge};

// console.log(userData);

/* ----------------------------- object.assign() ---------------------------- */
// let source1 = {a:1, b:2};
// let source2 = {c:3};

// let target = {a:4};
// // Object.assign(target, source1, source2 );
// target = {...target, ...source1, ...source2 };
// console.log(target);


// let data = {
//     name: 'Pesho',
//     address: {
//         town: 'Sofia',
//         zip: 1504
//     }
// }

// copy.name = data.name;
// copy.address = data.address;

// Shallow Copy:
// // let copy = {...data};
// let copy = Object.assign({}, data);

// copy.name = 'Ivan';
// copy.address.town = 'Plovdiv';
// console.log(data);
// console.log(copy);

// Deep Copy:
const copy = JSON.parse(JSON.stringify(data));
copy.name = 'Ivan';
copy.address.town = 'Plovdiv';
console.log( data );
console.log( copy );
