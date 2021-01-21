import React from "react";

class LifeCycles extends React.Component{

	constructor(props){
		super(props)
		console.log(`constructor called`);
		this.state = {
			'text': "LifeCycles Component"
		}
	}

	render(){
		console.log(`render called`);
		return <div>
			<h1>{this.state.text}</h1>
			<button onClick={_=>this.setState({text:"LifeCycles Component Changed!"})}>Change LifeCycles Component</button>
		</div>;
	}

	componentDidMount(){
		console.log(`componentDidMount called`);
	}

	shouldComponentUpdate(){
		console.log(`componentDidMount called`);
		return true;
	}

	componentDidUpdate(prevProps, prevState){
		console.log(`componentDidUpdate`);
		console.log(`prevProps:${prevProps}`);
		console.log(`prevState:${prevState}`);
	}

	componentWillUnmount(){
		console.log(`componentWillUnmount`);
	}
}

export default LifeCycles
