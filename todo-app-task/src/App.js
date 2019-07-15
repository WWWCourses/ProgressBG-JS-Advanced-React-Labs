import React from 'react';
import './App.css';

import {Header} from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
// import {DeleteAllTodos} from "./components/DeleteAllTodos";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'todos': [
        {
          'id': 1,
          'title': 'task1',
          'completed': 0
        },
        {
          'id': 2,
          'title': 'task2',
          'completed': 1
        },
        {
          'id': 3,
          'title': 'task3',
          'completed': 0
        },
      ]
    };

    this.userName = 'Ada';
    this.addTodo = this.addTodo.bind(this)

  }

  addTodo(newTodoTitle){
    console.log('====================================');
    console.log(`newTodoTitle: ${newTodoTitle}`);
    console.log('====================================');
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos}/>
        {/* <DeleteAllTodos/> */}
      </div>
    );
  }
}

export default App;
