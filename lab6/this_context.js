// this in gloabal
// console.log(this);

// // this in Function
// function foo() {
//     console.log(this);
// }

// let obj = {
//     id: 1,
//     foo: foo
// }

// console.log(`Invoke function as function`);
// foo()

// console.log(`Invoke function as "contructor"`);
// let car = new foo()
// console.dir(car);


// console.log(`Invoke fuction as method`);
// obj.foo()

// Examples

let aux = {
    'drive' : function() {
        console.log(`The car is driving with ${this.speed} km/h`);
    }
}

function Car(speed) {
    this.speed = speed
    this.drive = aux.drive
}

function Bycycle(speed) {
    this.speed = speed
    this.drive = aux.drive
}


aux.drive()

const car1 = new Car(200);
const car2 = new Car(300);
car1.drive();
car2.drive();