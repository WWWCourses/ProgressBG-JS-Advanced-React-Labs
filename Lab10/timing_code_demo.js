function variant1(arr) {
    // Calculate sum of arr el squares
    let total_sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        total_sum+=element**3
    }
    console.log(`Variant1: total_sum: ${total_sum}`);
}

function variant2(arr) {
    let total_sum = arr.reduce(  (acc,el)=>acc+el**3 );
    console.log(`Variant2: total_sum: ${total_sum}`);
}


const end = 1_000_000
let arr = Array.from(new Array(end), (_, i)=>{
    return i+1;
})

console.time('Variant1')
variant1(arr)
console.timeEnd('Variant1')

console.time('Variant2')
variant2(arr)
console.timeEnd('Variant2')