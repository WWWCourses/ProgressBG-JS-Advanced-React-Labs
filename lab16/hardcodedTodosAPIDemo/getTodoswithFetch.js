const fetchData = function(url){
	fetch(url)
	.then( r => r.json() )
	.then( data => {
		render(nodes.output, data);
	})
}

const render = function(output, todos ) {
	todos.forEach( todo=>{
		output.innerHTML += `<li><span>${todo.title}</span><span>${todo.completed?'Yes':'No'}</span></li>`;
	} )
}

const nodes={
	output:  document.querySelector('.output'),
	getDataBtn: document.querySelector('.getDataBtn'),
};

const dataURL = "data/todos.json";

nodes.getDataBtn.addEventListener('click', function(){
	console.log(`1`);
	fetchData(dataURL);
	console.log(`2`);
});