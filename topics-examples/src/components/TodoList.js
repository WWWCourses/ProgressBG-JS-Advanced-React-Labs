import React from 'react';
import Todo from "./Todo";
import AddTodo from "./AddTodo";

class TodoList extends React.Component{

  constructor(){
    super();

    this.state = {
      'todos' :  [
        {'title': 'Todo 1', 'completed': false},
        {'title': 'Todo 2', 'completed': true},
        {'title': 'Todo 3', 'completed': false},
        {'title': 'Todo 4', 'completed': false},
      ]
    };
  }

  addTodo(todo){
    // this.state.todos.push(todo);
    console.log(todo);
  }

  getTodo(e){
    // this.state.todos.push(todo);
    console.log(e.target.value);
  }

  render(){
    return  (
          <div>
            <AddTodo
              onAddTodo={this.addTodo}
              onGetTodo={this.getTodo}
            />
            <ul>
              {this.state.todos.map( todo =>
                <Todo title={todo.title} completed={todo.completed}/>
              )}
            </ul>
          </div>
        )
  }
}


export default TodoList



