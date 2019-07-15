import React from 'react';
import Todo from "./Todo";

function TodoList(props) {
    const skills = ['HTML', 'CSS', 'JS'];
    // => [<li>HTML</li>, ]

    return (
        <div>
            <h1>{props.x}</h1>
            <ul>
                {
                    props.todos.map( todo =>
                        <Todo key={todo.id} todo={todo}/>
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList;