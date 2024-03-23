/* -------------------------------- Example 1 ------------------------------- */
// const userEmail = "prefix@domain.com";

// //the RegEx to find if the userEmail contains '@' symbol:
// const re = /@/;

// // do the test:
// if ( re.test(userEmail) ){
//   console.log(`Valid email`);
// }else{
//   console.log(`Invalid!`);
// }

/* -------------------------------- Example 2 ------------------------------- */
// const re = /\w+\s+(?=the)/g;
// const text = `I love deadlines.
// I like the whooshing sound they make as they fly by.
// Flying is learning how to throw yourself at the ground and miss.`;

// const res = text.match(re);
// console.dir(res);

/* -------------------------------- Example 3 ------------------------------- */
// var strings = [
//     'alabala',
//     ' alabala',
//     'Astronomy',
//     'the apple'
// ];
// var re = /^a/i;

// strings.forEach((str)=>
//     re.test(str) ?
//     console.log(str+' -> match!') :
//     console.log(str+'  -> NO match!')
// )

/* ---------------------------------- Notes --------------------------------- */
// /abc/ => 'abc'
// /[abc]/ => 'a', 'b', 'c'
// /[^abc]/ => ' ', '~', ' '
// /[0-5]/ => '0', '1' ... , '5'
// /[a-z0-9]/ => 'a', 'b', 'c', ...'z', '0', '1' ... , '9'


/* --------------------------------- Example -------------------------------- */
// const re = /[^aeiouy]/gi;
// const strings = [
//     'alabala',
//     ' alabala',
//     'Astronomy',
//     'the apple'
// ];

// strings.forEach((str)=>{
//     const res = str.match(re)
//     console.log(`${str} => ${res}`);
// })

/* ----------------------------- Charactes Class ---------------------------- */
// [0-9]        => digit          =>\d
// [^0-9]       => non digit      =>\D
// [a-zA-Z0-9_] => word caracters =>\w
// [^a-zA-Z0-9_] => word caracters =>\W
// [   ]           => white spaces   => \s
// [^\n]        => any symbol, exc\n  => .


// const text = `word1 word2\tword3 word4
// word5`;
// console.log( text.split(/\s/));


/* ------------------------------- Quontifiers ------------------------------ */
// Notes:
// /a*/ => '','a', 'aa',..., 'aaaaaaaaaaaaaaaaaaaaaaaa'
// /a+/ => 'a', 'aa',..., 'aaaaaaaaaaaaaaaaaaaaaaaa'
// /a?/ => '', 'a',

// TASK: valid password:
// 1. only letters or digits, _
// 2. at least 5 symbols long


const passwords = [
    'alabala',      // ok
    'alab_la',      // ok
    'a labala',     // not ok (1)
    '!!!labala',     // not ok (1)
    'Ala',          // not ok (2)
    '12345678'      // ok
];

const re = /^\w{5,}$/
passwords.forEach((str)=>{
    const res = str.match(re)
    console.log(`${str} => ${res?'ok':'not ok'}`);
})

/* ---------------------------------- notes --------------------------------- */
// /a.*a/ => 'aa', 'a.a', 'a........a'

// 'alalbala'

// /a?/ => 'a', ''
// /a??/ => '', 'a'

// /a{2,4}/ => 'aaaa',  'aaa', 'aa'
// /a{2,4}?/ => 'aa', 'aaa', 'aaaa'
// /^a$/ => 'a'

// 1aaaa1