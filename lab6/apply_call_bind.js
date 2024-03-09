function foo(color, id) {
    console.log(`color:${color}`);
    console.log(`id:${id}`);
    console.dir(this.speed);
}

let car = {
    speed: 100
}


// foo('red', 1)

// foo.apply(car, ['red', 1])
// foo.call(car, 'red', 1)
let new_foo = foo.bind(car)
