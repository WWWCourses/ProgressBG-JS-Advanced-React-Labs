/* ----------------------- Pure vs Non Pure functions ----------------------- */
// non - pure
// function greet(name) {
//     // side effect
//     console.log(`Hello, ${name}`);
// }

// // pure functions
// function add(x,y) {
//     return x+y
// }

/* ---------------------------- Why Arrow Syntox ---------------------------- */
// let calculator = {
//     add: function(x,y) {
//         return x+y
//     },
//     mul: function(x,y) {
//         return x*y
//     }
// }

// let calculatorArr = {
//     add: (x,y)=>x+y,
//     mul: (x,y)=>x*y,
// }

// console.log( calculator.add(1,2) );
// console.log( calculatorArr.add(1,2) );

/* ------------------------------ Arrow Syntax ------------------------------ */
// let f = (param1, param2, …, paramN) => { block }

// let f = function(param1, param2, ..., paramN) {
//     statements
// }

// Example 1
// function foo(x,y) {
//     let res = x+y;
//     console.log(res);
// }


// let x;
// let foo = (x,y)=>{
//     res = x+y;
//     console.log(res)
// }

// foo(1,2)


// // let f = (param1, param2, …, paramN) => expression
// function add(x,y) {
//     return x+y;
// }

// let add1 = (x,y) => x+y;
// console.log( add1(1,2));



// function add2(x,y){
//     x+y
// }
// let add2 = (x,y) => x+y;
// console.log( add2(1,2) );


/* -------------------------- Scope in Arrow Syntax ------------------------- */
// function Cat(name) {
//     console.log(this); // cat1
//     this.name = 'Cat'
//     this.eat = function(){
//         let x = 1;
//         console.log(`${this.name} is eating`);
//     }
//     this.sleep = ()=>{
//         let x = 1;
//         console.log(`${this.name} is sleeping`); // cat1
//     }
// }

// let cat1 = new Cat();
// cat1.eat();
// let foo=cat1.eat;
// foo();

// cat1.sleep();
// let bar=cat1.sleep;
// bar();


// Example
// console.log(this);
// let that = this
// const obj = {
//     'id': 1,
//     'exp': function(){
//       console.log(this.id);
//     },
//     'arr': ()=>{
//         console.log( this === that);
//         console.log(this.id);
//     }
// }

// obj.arr();


// Example
const Person = function(name){
  console.log(this);
  this.name = name;

  this.greet = function(name){
    console.log(`Hi ${name}, I'm ${this.name}`)
  };

  this.greetArr = name=>{
    console.log(`Hi ${name}, I'm ${this.name}`)
  };
}

const pesho = new Person('Pesho');
const friends = ['George', 'Ana'];

friends.forEach((pesho.greet.bind(pesho)))
friends.forEach(pesho.greetArr)