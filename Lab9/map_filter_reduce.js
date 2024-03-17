// function customMap(arr, callbackFn) {
//     const output = []
//     arr.forEach(el => {
//         output.push(callbackFn(el))
//     });

//     return output
// }

// input = ['a', 'b', 'c', 'd']

// const output = customMap(input, l=>l.toUpperCase() )

// console.log(output);


/* ----------------------------------- Map ---------------------------------- */
// input = ['a', 'b', 'c', 'd']

// const output = input.map( el=>el.toUpperCase() )

// console.log(output); //


// // Task:
// input = ['a', 'b', 'c']

// const output = input.map( (el, i)=>el+(i+1) )


// console.log(output); ['a1', 'b2', 'c3']


// // Task:
// input = ['a', 'b', 'c']

// const output = input
//                 .map( el=>el.toUpperCase() )
//                 .map( (el, i)=>el+(i+1) )

// console.log(output); ['A1', 'B2', 'B3']


// TASK: from 'cities' array generate a new array 'cityNames' which will contain only the names of the cities
// let cities = [
//     {name: 'Sofia', population: 1_236_000},
//     {name: 'Plovdiv', population: 343_424 },
//     {name: 'Burgas', population: 202_766},
//     {name: 'Varna', population: 335_177},
// ];


// const cityNames = cities.map( city=>city.name )
// console.log( cityNames ); //['Sofia','Plovdiv','Burgas','Varna']


/* --------------------------------- filter --------------------------------- */
// const input = [1,2,3,4,5]

// const output = input.filter( el=> el%2 )
// console.log(output);


// Task: filter elements with even indexes
// const input = ['a', 'b', 'c', 'd'];

// const output = input.filter( (el,i)=> i%2==0 )

// console.log(output); // ['a', 'c']


// const input = [-1, 0, 3, 8, 0];
// const output = input.filter( el=>el==0)


// console.log(output); //[0,0]

// TASK: filter only cities  which population is greater than 340_000 and return only names
// let cities = [
//     {name: 'Sofia', population: 1_236_000},
//     {name: 'Plovdiv', population: 343_424 },
//     {name: 'Burgas', population: 202_766},
//     {name: 'Varna', population: 335_177},
// ];

// const cityNames = cities
//     .filter(el=>el.population>340_000)
//     .map(el=>el.name)

// console.log(cityNames); //['Sofia', 'Plovdiv']

/* --------------------------------- reduce --------------------------------- */
// const input = [1,2,3,4,5];

// const output = input.reduce( (acc, el)=>{
//     console.log(el, acc);
//     return acc+el
// },10);

// acc = 0, el=1 =>1
// acc = 1, el=2 =>3
// acc = 3, el=3 =>6

// console.log(output); //1


// const input = [1,2,3,4,5];
// const sum = input.reduce((acc,el)=>acc+el, 0)
// console.log(`sum=${sum}`);


// TASK: sum of array's even numbers
// let input = [1,2,3,4];

// const sum = input.filter(el=>el%2==0).reduce((acc, el)=>acc+el)

// console.log(`sum: ${sum}`);

// TODO: tasks with reduce for random concatenated AofStrings
// const input = ['Ada', '23', 'abc']


// Task 2: Flatten an Array of Arrays

// const arr = [[1,2,3], [4,5]]
// const output = arr.reduce((acc,el)=>[...acc, ...el], [])

// console.log(output); //[1,2,3,4,5]


/* ----------------------------- HW_Explanations ---------------------------- */
// const text = "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools."

// const words = text.split(' ')


/* ------------------------ thisArg in map and filter ----------------------- */
// TODO: use case for thisArg
const data = [
    {
        id:1,
        foo: ()=>this.id**2
    }
]



