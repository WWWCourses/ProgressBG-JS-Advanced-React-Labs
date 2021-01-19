const state = {
	"todoTitle":"",
	"todoCompleted":false
}

function toggleTodoCompleted(currentState) {
	return {
		"todoTitle":"",
		"todoCompleted":!currentState.todoCompleted
	}
}

let newState = toggleTodoCompleted(state);
console.dir(newState.todoCompleted); // false
