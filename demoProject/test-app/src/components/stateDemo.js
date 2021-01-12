import React from 'react';

/// Create Counter Stateless Component
function Counter(props) {
	return <div>{props.count}</div>
}

export default class StateDemo extends React.Component{
	constructor(){
		super();



		this.userName = "Ada";

		this.state = {
			count: 1
		}

		console.log( this.state );

		this.increment = this.increment.bind(this);

	}

	increment(){
		console.log(`increment handler activeted`);
		// this.state.count += 1; // do not mutate state directly
		this.setState(
			{
				count: this.state.count + 1
			}
		)

		console.log( this.state );
	}

	someMethod(){
		this.increment();
	}

	render(){
		return <div className="StateDemo">
			<h1>State Demo</h1>
			<Counter count={this.state.count} />
			<button onClick={this.increment}>Increment</button>
			<button>Decrement</button>
		</div>
	}
}