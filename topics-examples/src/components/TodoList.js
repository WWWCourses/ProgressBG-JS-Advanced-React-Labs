import React from 'react';
import  Todo from "./Todo";

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
  render(){
    return  (
          <div>
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



