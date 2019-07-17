import React from 'react';

function TodoList(props) {


    // props = {
    //     'todos': ['Task 1', 'Task 2'],
    //     'x': 1
    // }
    return (
        props.todos.map( todo => <div>{todo}</div>)
    )
}

export default TodoList;
