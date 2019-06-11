import React from 'react';

class Parent extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        color: 'red'
    }

    // This problem solution: bind event handlers:
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(color){
    this.setState({
        'color': color
    })
  }

  render(){
      return(){
          <Child changeColor={this.changeColor} />
      }
  }
}

function Child(params) {
    const clickHandler = e=>props.changeColor(e.target.value);

    return(
        <div>
            <button onClick={clickHandler} value="green">Green</button>
            <button onClick={clickHandler} value="blue">blue</button>
        </div>
    )
}

export default Parent;