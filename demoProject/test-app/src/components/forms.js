import React from "react";

class Forms extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			"userName": "",
			"userAge": "",
			"userAgreed": false,
			"outputText": "the output will be changed on btn click",
		}
	}

	handleChange = (e)=>{
		// console.dir(e.target);

		// HW: refactor the code bellow,using the ES6 computed_property_names:
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
		switch(e.target.name) {
			case "userName":
				this.setState({
					"userName": e.target.value
				})
				break;
			case "userAge":
				this.setState({
					"userAge": e.target.value
				})
				break;
			case "userAgreed":
				this.setState({
					"userAgreed": e.target.checked
				})
				break;
			default:
				// code block
		}
	}

	// HW: implement handleClick method, which will be fired on each button click event.
	// Note, that each button will set a different state porperty, which will update the output div

	render(){
		return <div>
			<div><label>name: <input type="text" name="userName"
				onChange={this.handleChange}
				value={this.state.userName}/></label></div>
			<div><label>age: <input type="number" name="userAge"
				onChange={this.handleChange}
				value={this.state.userAge}/></label></div>
			<div><label>I agree: <input type="checkbox" name="userAgreed"
				onChange={this.handleChange}
				value={this.state.userAgreed}/></label></div>
			<hr/>
			<div>
				<button>get userName</button>
				<button>get userAge</button>
				<button>get userAgreed</button>
			</div>
			<hr/>
			<div>{this.state.outputText}</div>
			<hr/>
		</div>;
	}
}

export default Forms
