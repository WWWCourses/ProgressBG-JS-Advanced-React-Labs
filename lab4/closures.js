"use strict"
/* ----------------------------- what is closure ---------------------------- */
// // A closure is a feature in JavaScript allowing a function which is executed outside its (lexical) scope, to preserve the values of scoped variables.

// function foo() {
//     let x = 1;

//     return function() {
//         console.log(`x in Bar = ${x}`);
//     };
// }

// let res = foo()
// res();

// // global = {
// //     foo: funct ,
// //     res : funct ({
// //         x: 1,
// //         bar: function
// //     }
// //     )
// // }

/* -------------------------------- examples -------------------------------- */
// let outer = function() {
//     let y = 9;
//     return function() {
//         console.log(`x in Anon: ${x}`);
//         console.log(`y in Anon: ${y}`);
//     }
// }

// let res = outer();
// let x = 1;
// res();


// global = {
//     outer: {
//         function,
//         {}
//     },
//     res: {
//         function,
//         {
//              x:x,
//              y:9
//         }
//     },
//     x: {
//         1
//     }
// }


/* ----------------------------- closure problem ---------------------------- */
// var cats = [];



for (var i = 0; i < 3; i++) {
    let catsFactory = function(j) {
        cats[j] = function(){
            console.log(`Cat ${j} is ready!`);
        }
    }();

}

// // console.log(`i in main: ${i}`); //3
// // console.log(cats.length);// 3
// // console.log(i);
// cats[0]();
// cats[1]();
// cats[2]();

