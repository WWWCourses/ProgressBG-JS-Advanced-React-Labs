function outer(){
    let x = 5;

    function inner(){
        console.log(x);//
    }

	// inner();
    return inner;
}


let foo = outer();

// let foo = function inner(){
// 	console.log(5);//
// }

foo();




