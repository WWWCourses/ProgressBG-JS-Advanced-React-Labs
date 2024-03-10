/* --------------------- Objects and Functions Internals -------------------- */
// let arr1 = [1,2]
// let arr2 = new Array(1,2)
// console.dir(arr1);
// console.dir(arr2);

// let car1 = {}
// let car2 = new Object();

// console.dir(car1);
// console.dir(car2);


// let car = {
//     id:1
// };
// console.dir(car);
// console.dir( car.__proto__ );
// console.dir( car.__proto__.__proto__);
// console.dir( new Object() );

// let obj = {}

// function foo() {

// }

// console.dir(foo);

// console.dir(obj.prototype);
// console.dir(foo.prototype);

// console.dir(obj.__proto__);
// console.dir(foo.__proto__);


/* -------------------------------- Example 1 ------------------------------- */
// let cat = {
//     eat: function() {
//         console.log(`${this.name} is eating ${this.food}`);
//     }
// }

// let lion1 = {
//     name:'Leo',
//     food: 'meat',
//     age: 12,
//     __proto__: cat

// }

// let tiger1 = {
//     name:'Tiger',
//     food: 'other',
//     __proto__: cat

// }

// console.dir(lion1.__proto__);
// console.dir(tiger1.__proto__);

// lion1.eat()
// tiger1.eat()


/* -------------------------------- Example 2 ------------------------------- */
function Cat(name, food) {
    this.name = name;
    this.food = food;
}
console.dir(Cat.prototype);

Cat.prototype.eat = function() {
    console.log(`${this.name} is eating ${this.food}`);
}

function Lion(name, food, age) {
    // this.name = name;
    // this.food = food;
    this.age = age;
}
Lion.prototype = Cat.prototype

function Tiger(name, food) {

}
Tiger.prototype = Cat.prototype

const lion1 = new Lion('Leo', 12, 'meat')
const lion2 = new Lion('Simba', 17, 'humans')
const tiger1 = new Tiger('Tiger', 'meat')


lion1.eat()
lion2.eat()
tiger1.eat()


