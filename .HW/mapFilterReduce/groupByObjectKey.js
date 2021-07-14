function sortByKey(arr) {
	arr.sort((a,b)=>{
		return a.priority < b.priority ? -1:1
	});
	return arr;
}
function createDOMElement(tagName, content, parentNode){
	const el = document.createElement(tagName);
	el.innerHTML = content;
	parentNode.appendChild(el)
}

// function createNewGroupContainter(tagName, content, parentNode){

// }
function fillNewGroupTemplate(groupName, todo) {
	return `
		<span class="group-name">${groupName}</span>
		<ul>
			<li class="item">${todo.title} => ${todo.priority}</li>
		</ul>
	`
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

const dom = {
	root: document.querySelector('div.root')
}


createDOMElement('ul',"test",dom.root);

sortByKey(todos);
// note that sort mutates the array in place
console.log(todos);


let currentGroupName = '';
todos.forEach( todo => {
	if(todo.priority !== currentGroupName){
		currentGroupName = todo.priority;
		// create new group element
		createDOMElement
		const newGroupHTML = fillNewGroupTemplate(currentGroupName, todo);
		console.log(newGroupHTML);

	}
} )

