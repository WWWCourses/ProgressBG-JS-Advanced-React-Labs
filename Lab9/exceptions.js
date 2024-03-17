/* -------------------------- Example for Exception ------------------------- */
// console.log('a); // Compile time error (not Exception)

// console.log(x); // this is exception
// // Exceptions == Run Time Errors


// function greet() {
//     console.log(x); // this is exception
// }

// function main() {
//     greet()
// }

// main();

// const div = (x,y)=>{
//     if(y===0){
//         // throw {message:'ZeroDivisionError'}
//         throw new Error('ZeroDivisionError: division by zero')
//     }else{
//         return x/y
//     }
// };

// console.log( div(5,0) );


/* --------------------------- Exceptins Handling --------------------------- */
// try{
//     const x=1;
//     const res = x + 2;
//     console.log(y);
//     console.log(`y = ${y}`);
// }catch(err){
//     // console.dir(err)
//     console.error(err.message);
// }

// console.log(`END`);


// function validateAge(age) {
//     return (age<=0 || age>120) ?
//         new Error(`Invalid value for age: ${age}`)
//         : age;
// }

// try {
//     const validatedAge = validateAge(-5);
//     if(validatedAge instanceof Error) {
//         console.error(`Anticipated Error: ${validatedAge.message}`);
//     } else {
//         console.log(`Valid age: ${validatedAge}`);
//     }
// } catch(err) {
//     console.error(`Opps, something went wrong ! (${err.message})`);
// }


/* ---------------------------- try-catch-finally --------------------------- */
// const fs = require('node:fs');
// try{
//     fs.readFile('./exampl.txt', 'utf8', (err, data) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         console.log(data);
//     });
// }finally{
//     fs.close()
// }


/* ---------------------------------- throw --------------------------------- */
// throw 'Error';
// console.log(`END`);



// const div = (x,y)=>{
//     if(y===0){
//         throw new Error('ZeroDivisionError: division by zero')
//     }else{
//         return x/y
//     }
// };

// try{
//     console.log( div(5,1));
// }catch(err){
//     console.log(err.message);
// }



/* ---------------------------- Errors Hierarchy ---------------------------- */
class ZeroDivisionError extends Error{
    constructor(msg){
        super(msg)
        this.name = 'Name'

    }
}
const div = (x,y)=>{
    if(y===0){
        throw new ZeroDivisionError('ZeroDivisionError: division by zero')
    }else{
        return x/y
    }
};
try {
    div(5,0);
    console.log(x);
} catch(e){
    if (e instanceof ReferenceError){
        console.log('EvalError');
    } else if (e instanceof ZeroDivisionError){
        console.log(e.message);
    } else{
        console.log(`Ups, something went wrong (${e.message}))`);
    }
}
