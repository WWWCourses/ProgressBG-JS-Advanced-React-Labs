import React from 'react';


class AddTodoCC extends React.Component{
  constructor(props){
    super(props);

    this.now = Date.now();

    // This problem solution: bind event handlers:
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    console.dir(e);

    console.log('====================================');
    console.log(`e.target: ${e.target}`);
    console.log('====================================');

    let clickedAt = new Date(this.now+e.timeStamp);
    console.log(`${e.target.id} was clicked at ${clickedAt.toLocaleString()}`);
  }

  render(){
    return(
      <div>
        <input type="text"/>
        <button id='btn2' onClick={this.clickHandler}>Add</button>
      </div>
    )
  }
}

export default AddTodoCC;



