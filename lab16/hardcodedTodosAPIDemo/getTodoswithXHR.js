const AJAXcall = function(){
	var xhr = new XMLHttpRequest() ;

	// initializes the request:
	xhr.open("GET", dataURL, false);

	// EventHandler, that will be fired each time when the xhr state changes
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			// finally do something with content:
			render(nodes.output, JSON.parse(this.responseText));
		};
	};

	// sends the request:
	xhr.send();
};

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
	// AJAXcall(renderData(nodes.output));
	console.log(`1`);
	AJAXcall();
	console.log(`2`);

	// let todos = [
	// 	{'title':'todo1', 'completed':false}
	// ];
	// render(nodes.output, todos);
});