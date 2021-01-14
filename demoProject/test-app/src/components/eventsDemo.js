import React from "react";

function EventsDemoFunctionComp(props){
	function keyPressHandler() {
		console.log(`input`);
	}

	return <div>
		<h1>EventsDemoFunctionComp</h1>
		<label>user Name: <input onKeyPress={keyPressHandler} type="text" /></label>
	</div>
}

class EventsDemoClassComp extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			userNameValue : "output"
		}

		this.onClikHandler = this.onClikHandler.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onClikHandler(e){
		console.log(`Button was clicked, ${this.appName}`);
		this.setState({
			"userNameValue": "@@@@@@@@@@@"
		});
		console.dir(e);
	}
	onChange(e){
		this.setState({
			"userNameValue": e.target.value
		});
	}

	render(){
		return <div>
			<h1>EventsDemoClassComp</h1>
			<h2>App name: {this.appName}</h2>
			<label>user Name: <input onChange={this.onChange} type="text" name="userName" /></label>
			<button onClick={this.onClikHandler}>OK</button>
			<div className="output">{this.state.userNameValue}</div>
		</div>
	}
}


function EventsDemo(props) {
	return <div>
		<EventsDemoFunctionComp/>
		<EventsDemoClassComp/>
	</div>
}

export default EventsDemo