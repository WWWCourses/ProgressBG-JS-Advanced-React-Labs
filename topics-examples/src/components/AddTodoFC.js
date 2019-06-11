import React from 'react';

export default function AddTodoFC(props) {
  // TODO: check why is not logged first
  console.log(`AddTodoFC is loaded`)
  let now = Date.now();


  function clickHandler(e) {
    let clickedAt = new Date(now+e.timeStamp);
    console.log(`${e.target.id} was clicked at ${clickedAt.toLocaleString()}`);
  }

  return  (
    <div>
      <input type="text"/>
      <button id='btn1' onClick={clickHandler}>Add</button>
    </div>
  )
}



