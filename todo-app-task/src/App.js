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
      ],
    };

    this.userName = 'Ada';
    this.addTodo = this.addTodo.bind(this)

  }

  addTodo(newTodoTitle){
    // add newTodoTitle to state:
    const newTodoObj = {};
    newTodoObj.title = newTodoTitle;
    newTodoObj.id = this.state.todos[this.state.todos.length-1] +1;
    newTodoObj.completed = 0;

    console.log('@@@@@@@@@@@@@@@@@@@');
    console.log(this.state);
    console.log('====================================');

    this.setState({[this.state.todos]:1} )
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
