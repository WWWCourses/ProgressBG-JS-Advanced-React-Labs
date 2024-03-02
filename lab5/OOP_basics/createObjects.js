/* ---------------------------- By Object literal --------------------------- */
// let paul =  {
//         'name': 'Paul',
//         'score':5,
//         getName:function() {
//             console.log(`Get Name`);
//         },
//         setScore: function(newGPA) {
//             console.log(`setScore`);
//         }
// };

// let john =  {
//     'name': 'John',
//     'scor': 4,
//     getName:function() {
//         console.log(`Get Name`);
//     },
//     setScore: function(newGPA) {
//         console.log(`setScore`);
//     }
// };


/* -------------------------- By "Factory" Function ------------------------- */

// function studentFactory(name, score) {
//     const obj = {}

//     obj.name = name;
//     obj.score = score;
//     obj.getName =function() {
//         console.log(`Get Name`);
//     };
//     obj.setScore= function(newGPA) {
//         console.log(`setScore`);
//     }

//     return obj;
// }

// const paul = studentFactory('Paul', 5)
// const john = studentFactory('John', 4)

/* ------------------------ By "Constructor" Function ----------------------- */
function Student(name, score) {
    // this = {}
    this.name = name;
    this.score = score;
    this.getName =function() {
        console.log(`Get Name`);
    };
    this.setScore= function(newGPA) {
        console.log(`setScore`);
    }

    // return this
}


const paul = new Student('Paul', 5);
const john = new Student('John', 4);

let students = [paul,john]

// TASK: find student with max score
max_score = 0
best_student = {}

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if(student.score>=max_score){
        max_score = student.score
        best_student = student
    }
}

console.log(`Best student is : ${best_student.name}`);


