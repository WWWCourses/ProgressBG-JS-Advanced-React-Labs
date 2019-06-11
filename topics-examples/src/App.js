import React from 'react';
import TodoList from "./components/TodoList";
import AddTodoFC from "./components/AddTodoFC";


console.log(`App is loaded`)
function App(props) {
  return (
    <div className="App">
      <AddTodoFC/>
      <TodoList/>
    </div>
  );
}

export default App;
