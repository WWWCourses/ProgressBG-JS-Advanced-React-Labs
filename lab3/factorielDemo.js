// fact(n):
// n>=1  => fact(n)= n*fact(n-1);
// n==0: => 1

function fact(n) {
	// return n*(n-1)*(n-2)*(n-3)*(n-4)
	// console.log(`n = ${n}`);

	if(n>=1){
		return n*fact(n-1);
	}else {
		return 1
	}
}

let res = fact(3); // 6
console.log(`f(n): ${res}`);


// fact(3) = ?
// n=3

// 3 * fact(2) =

// n = 2
// 2 * fact(1) = 2*1 = 2

// n = 1
// 1 * fact(0) = 1

// fact(0) = 1
// n = 0

