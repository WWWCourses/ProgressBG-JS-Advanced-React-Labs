function Cat(name, food) {
    this.name = name
    this.food = food
}
Cat.prototype.eat = function() {
    console.log(`${this.name} is eating ${this.food}`);
}


function Lion(name, food, age) {
    // call the Parent Constructor
    Cat.apply(this, [name, food])
    this.age = age
}
// Lion.prototype.__proto__ = Cat.prototype
Lion.prototype = Object.create(Cat.prototype)

Lion.prototype.grow = function() {
    this.age++
    console.log(`A lion is grown now ${this.age}`);
}

const cat1 = new Cat('Tom', 'mouse')


const lion1 = new Lion('Leo', 'meat', 12)
const lion2 = new Lion('Simba', 'bananas', 3)

lion1.eat()
lion2.eat()

