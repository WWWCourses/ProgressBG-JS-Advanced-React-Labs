// function Lion(age) {
//     this.age = age;
// }
// Lion.prototype = {
//     id : 1,
//     eat: function() {
//         console.log(`...`);
//     }
// }

// let lion1 = new Lion(12);
// let lion2 = new Lion(34);
// // lion1.__proto__ =  Lion.prototype
// console.dir(lion1);

// console.log( lion1.id );
// lion1.eat();


function lionFactory(age) {
    return {
        age:age,
        __proto__: lionFactory.prototype
    }
}
lionFactory.prototype = {
    id : 1,
    eat: function() {
        console.log(`...`);
    }
}

let lion1 = lionFactory(12)


console.log( lion1.id );
lion1.eat();