// function Constructor(id) {
//     this.id = id;
//     this.saidHello = 0;


//     function __sayHello() {
//         this.saidHello+=1;
//     }

//     this.sayHello = function () {
//         __sayHello()

//         console.log(`I'm obj ${id}`);
//         console.log(`obj ${id} said hello: ${this.saidHello}`);
//     };
// }

/* -------------------------- Solution with 'that': ------------------------- */
// function Constructor(id) {
//     this.id = id;
//     this.saidHello = 0;


//     function __sayHello(that) {
//         that.saidHello+=1;
//     }

//     this.sayHello = function () {
//         __sayHello(this)

//         console.log(`I'm obj ${id}`);
//         console.log(`obj ${id} said hello: ${this.saidHello}`);
//     };
// }


/* ----------------------------- Solution with apply/call ---------------------------- */
function Constructor(id) {
    this.id = id;
    this.saidHello = 0;


    function __sayHello() {
        this.saidHello+=1;
    }

    this.sayHello = function () {
        // __sayHello()
        __sayHello.apply(this)

        console.log(`I'm obj ${id}`);
        console.log(`obj ${id} said hello: ${this.saidHello}`);
    };
}
var obj1 = new Constructor(1);

obj1.sayHello();
obj1.sayHello();

