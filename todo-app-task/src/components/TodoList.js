import React from 'react';
import Todo from "./Todo";

function TodoList(props) {
    return (
        <div>
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