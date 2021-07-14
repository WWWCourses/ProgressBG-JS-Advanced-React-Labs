function sortByKey(arr) {
	arr.sort((a,b)=>{
		return a.priority < b.priority ? -1:1
	});
	return arr;
}

function filterByKey(arr, key, value) {
	return arr.filter( todo=>todo[key]===value)
}

function reduce(params) {

}

function createArrayFromRangeProcedural(start, end, step=1){
	const arr = [];
	for(let i=start; i<=end; i+=step){
		arr.push(i)
	}

	return arr;
}
function createArrayFromRangeFunctionl(start, end, step=1) {


}

console.log( createArrayFromRangeProcedural(1,10,2));
console.log( createArrayFromRangeFunctionl(1,10,2));

function restructureByKey(arr){

}

const todos = [
	{
		title:'Todo1',
		priority:'low'
	},
	{
		title:'Todo2',
		priority:'low'
	},
	{
		title:'Todo3',
		priority:'high'
	},
	{
		title:'Todo4',
		priority:'medium'
	},
	{
		title:'Todo5',
		priority:'high'
	},
	{
		title:'Todo6',
		priority:'low'
	},
]

let todosGroupedByPriority = {
	'low' :[
		{
			title:'Todo2',
			priority:'low'
		},
		{
			title:'Todo6',
			priority:'low'
		},
	],
	'medium': [
		{
			title:'Todo4',
			priority:'medium'
		}
	]
}

// sortByKey(todos);
// note that sort mutates the array in place

// console.log(todos);

// const filtered = filterByKey(todos, 'priority', 'low');
// console.log(filtered);


