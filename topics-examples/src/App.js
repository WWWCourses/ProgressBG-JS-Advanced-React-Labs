import React from 'react';
// import TodoList from "./components/TodoList";
// import AddTodoCC from "./components/AddTodoCC";
import Parent from "./components/ChildParent";


console.log(`App is loaded`)
function App(props) {
  return (
    <div className="App">
      <Parent/>
    </div>
  );
}

export default App;
