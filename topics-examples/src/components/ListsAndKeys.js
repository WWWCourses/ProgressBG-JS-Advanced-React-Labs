import React from 'react';

function ItemsList(props) {
    const items = ['Item1', 'Item2', 'Item3'];
    return (
        <ul>
            {items.map( (item, index) => <Item key={index} item={item} />)}
        </ul>
    )
}

function Item(props) {
    return (
        <li>{props.item}</li>
    )
}

export function ListsAndKeys(props) {
    const skills = ['HTML', 'CSS', 'JS'];

    return  (
       <div><ItemsList/></div>

    )
}




