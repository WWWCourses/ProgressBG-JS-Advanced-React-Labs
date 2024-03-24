// \w\b\W, \W\b\w

// const re = /\b/g;
// const str = '!a!b!';

// const matches = str.match(re);
// console.log( matches.length );

// TASK: match 'cat' only:
// const text = '1cat,this cat caterpillar,icat. cat!';
// const re = /\bcat\b/g;

// const matches = text.match(re);
// console.log( matches );

/* ------------------------------- Alternation ------------------------------ */
// TASK: match 'cat' or 'dog' only:
const text = '1cat,this cat, cats, dog, dogs, caterpillar,icat. cat!';

// /ab|cd/     => 'ab', 'cd'
// /a(b|c)d/   => 'abd', 'acd'
// /a[bc]d/   => 'abd', 'acd'
// const re = /\bcat\b|\bdog\b/g;

// const matches = text.match(re);
// console.log( matches );

/\b(straw|rasp)?berries/
// /\bstraw|rasp?berries/  => 'straw', 'raspberries', 'berries'


// TASK: match strings which begins and end with same letter
// const testStrings = [
//     'ada',          // ok
//     'aa',           // ok
//     '1d1',          // ok
//     'dhhgfha' ,     // not ok
//     'tohyt',        // ok
//     'tadam',         // not ok
// ]


//                          // ($1 = 'a')
// const re = /^(\w).*\1$/; // 'ada'

// testStrings.forEach(str=>{
//     if(re.test(str)){
//         console.log(`${str} ok`);
//     }else{
//         console.log(`${str} not ok`);
//     }
// })

// const text  = 'apple,apple. dog dog cat is a cat'


// /(\w)(\d)\2\1/ => 'a11a', 'b99b'
// // $1='a'
// // $2=1


/* ------------------------- Match start/end of line ------------------------ */
// const str = `Line 1
// Line 1 // not ok
// // Line 1
// Line 1
// // ok
// Line 3`;

// const re = /^\/\/.*$/gm;

// const results = str.match(re);
// console.log(results);


/* ---------------------------- Using regex in JS --------------------------- */
// const reLiteral = /\d\+\d/;
// const reConstructed = new RegExp('\\d\\+\\d');
// const test = '2+4';

// console.log( reLiteral.test(test) );
// console.log( reConstructed.test(test) );


// //TODO: auto escape
// const userRegexStr = '\d\+\d';
// console.log(userRegexStr[0]);


// const reUser = new RegExp(userRegexStr)

/* ------------------------------ Match Object ------------------------------ */
// const test = `@@@ivan:1234 abc
// stoyan:456`;
// const re = /(?<user>\w)+:(\d+)/g;

// [...test.matchAll(re)].forEach(m=>{
//     if(m){
//         console.log(m);
//         console.dir(m[0]); //'ivan:1234'
//         console.dir(m[1]); // 1234
//         console.dir(m[2]); // 1234
//         console.dir(m['user']); // 1234
//         // console.dir(m.index); // 0
//         // console.dir(m.groups.user);
//     }
// });

/* --------------------------------- split() -------------------------------- */
// console.log( 'jdsfh,jdf hdsjhfds.eweiri'.split(/[,.\s]/) );

/* -------------------------------- replace() ------------------------------- */
// const test = `@@@ivan:1234 abc
// 6666 stoyan:456 hsjhj`;

// const re = /^.*?(\w+):(\d+).*$/gm;

// const replacedTest = test.replace(re, '$1-$2');

// console.log(replacedTest);
// // ivan-1234
// // stoyan-456


/* ------------------------------- Assertions ------------------------------- */
// TASK: match strings that are at least 4 symbols long with at least one digit in it:

// const test = 'a1b'
// const re
