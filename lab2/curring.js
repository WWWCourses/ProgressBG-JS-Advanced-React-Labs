const sum = function(x){
	console.log(`x = ${x}`);
    return function(y){
        return x+y;
    }
}


console.log( "sum:", sum(2)(3) );