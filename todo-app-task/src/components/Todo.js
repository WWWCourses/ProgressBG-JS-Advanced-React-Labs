import React from 'react';

export default function Todo(props) {
    return(
        <li>{props.todo.title}/{props.todo.completed}</li>
    )
}

