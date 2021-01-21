import React from "react";

class Forms extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			"userName": "Ada",
			"userAge": "",
			"userAgreed": false,
			"outputText": "the output will be changed on btn click",
		}
	}

	handleClick = (name)=> {
		console.log(name);

		this.setState({
			"outputText":this.state[name].toString()
		})
	}

	handleChange = (e)=>{
		// console.dir(e.target);

		// HW: refactor the code bellow,using the ES6 computed_property_names:
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
		const value = e.target.name === "userAgreed"? e.target.checked: e.target.value;
		const name = e.target.name;

		this.setState({
			[name]:value
		})

		// switch(e.target.name) {
		// 	case "userName":
		// 		this.setState({
		// 			"userName": e.target.value
		// 		})
		// 		break;
		// 	case "userAge":
		// 		this.setState({
		// 			"userAge": e.target.value
		// 		})
		// 		break;
		// 	case "userAgreed":
		// 		this.setState({
		// 			"userAgreed": e.target.checked
		// 		})
		// 		break;
		// 	default:
		// 		// code block
		// }
	}

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
				<button onClick={(e)=>this.handleClick("userName",e)}>get userName</button>
				<button onClick={(e)=>this.handleClick("userAge",e)}>get userAge</button>
				<button onClick={(e)=>this.handleClick("userAgreed",e)}>get userAgreed</button>
			</div>
			<hr/>
			<div>{this.state.outputText}</div>
			<hr/>
		</div>;
	}
}

export default Forms
