import React from 'react';


// {'title': 'Todo 1', 'completed': false},
// {'title': 'Todo 2', 'completed': true},
// {'title': 'Todo 3', 'completed': false},
// {'title': 'Todo 4', 'completed': false},

export default function Todo(props) {
    return  (
      <li>{props.title} ({props.completed?'Done':'Not Done'})</li>
    )
}



