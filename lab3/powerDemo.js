function power(b,n) {
	if(n===0){
		return 1;
	}else{
		return b*power(b, n-1)
	}
}


// power();

console.log( Math.pow(2,-3));
console.log( power(2, 3) );
console.log( power(2, 10) );
console.log( power(3, 8) );

// n>1:
// 	power(2,4) = 2 * power(2,3)
// n = 1:
// 	power(1) = 1
// n = 0
// power(2,0) = 1
// n < 1:
//

