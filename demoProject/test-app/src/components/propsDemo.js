import React from 'react';

function PropsInFunction(props) {

	// console.dir(props);
	return <div className="PropsInFunction">
		<h2>Props in Function Component</h2>
		<div>Hello, {props.userName}</div>
	</div>
}


class PropsInClass extends React.Component{
	render(){
		console.dir(this);
		return <div className="PropsInClass">
			<h2>Props in Class Component</h2>
			<div>Hello, {this.props.userName}</div>
		</div>
	}
}



class PropsDemo extends React.Component {
    render() {
        return (
			<div className="PropsDemo">
				<PropsInFunction id="test" userName="Ada">test</PropsInFunction>
				<PropsInClass id="test" userName="Byron"></PropsInClass>
			</div>
		)

    }
}



export default PropsDemo


