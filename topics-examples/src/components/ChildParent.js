import React from 'react';

class Parent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
      return (
        <Child/>
      )
  }
}

function Child(props) {
    let userName = "";

    function btnClick(e){
        userName = document.querySelector('input[type="text"]').value;
        console.log(`userName: ${userName}`);
    }
    return(
        <div>
          <label>userName: <input type="text"/></label>
          <button onClick={btnClick}>OK</button>
          {/* TODO: why not works */}
          <div>{userName}</div>
        </div>
    )
}

export default Parent;