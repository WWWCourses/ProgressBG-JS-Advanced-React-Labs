// let obj = {
//     a: '1',
//     0:'Zero',
//     'x 1':'x 1'
// }

// // console.log(obj);

// console.log( obj.a );
// console.log( obj['a']);

// console.log( obj.0 ); // Error
// console.log( obj['0'] );

// console.log( obj['x'+' '+1] );


// let student1 = {
//     name: 'Ivan',
//     age: 23
// };

// let studentProp = 'age';
// console.log( student1[studentProp]);


// let obj={
//     prop1: 1,
//     prop2: 2,
//     prop4: 4
// };

// obj.prop1 = 3;

// console.log( obj );


// let userName = 'Ada',
//     age = 21;

// let user = {
//     'userName': userName,
//     'age':age
// };

// let user = {userName, age}

// console.log(user);



// let userName = 'Ada',
//     age = 21;


// let user = {
//     userName,
//     age,
//     greet() {
//         console.log(`Hello, ${user.userName}`);
//     }
// }

// for (const prop in user){
//     console.log(prop);
//     console.log(user[prop]);
// }

// user.greet()

let obj = {
    'a': 1,
    'b': 2
}

console.log( obj );

console.log( Object.keys(obj) );
console.log( Object.values(obj) );






