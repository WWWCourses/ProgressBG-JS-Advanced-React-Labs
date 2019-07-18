import React, {useState} from 'react';

import './App.css';
import Counter from "./components/TodoList";

function App() {
  const todosList =  ['Task 1', 'Task 2'];

  const newTask = 'Task 3';

  // this.state = {
  //   'todos':  ['Task 1', 'Task 2'];
  // }

  // const [todos, addTodo] = useState(todosList);

  return (
    <div className="App">
      <Counter ic="0"/>
    </div>
  );
}


export default App;
