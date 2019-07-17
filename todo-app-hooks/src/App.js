import React, {useState} from 'react';

import './App.css';
import TodoList from "./components/TodoList";

function App() {
  const todosList =  ['Task 1', 'Task 2'];

  const newTask = 'Task 3';

  // this.state = {
  //   'todos':  ['Task 1', 'Task 2'];
  // }

  const [todos, addTodo] = useState(todosList);

  return (
    <div className="App">
      <TodoList todos={todos} x="1"/>
      <button onClick={ () => addTodo([...todos, newTask])}>Add</button>
      {/* onClick={() => setCount(count + 1)} */}
    </div>
  );
}


export default App;
