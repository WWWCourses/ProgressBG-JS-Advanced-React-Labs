// Class declaration
class Cat{
    constructor(name, food){
        this._name = name
        this.food = food
    }
    eat(){
        console.log(`${this._name} is eating ${this.food}`);
    }
}

class Lion extends Cat{
    constructor(name, food, age) {
        // call the Parent Constructor
        super(name, food)
        this.age = age
    }
    grow(){
        this.age++
        console.log(`A lion is grown now ${this.age}`);
    }
}



const lion1 = new Lion('Leo', 'meat', 12)
const lion2 = new Lion('Simba', 'bananas', 3)

lion1.eat()
lion2.eat()