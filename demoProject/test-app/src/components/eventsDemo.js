function keyPressHandler() {
	console.log(`input`);
}

export default function EventsDemo(props){
	return <div>
		<h1>Events demo</h1>
		<label>user Name: <input onKeyPress={keyPressHandler} type="text" /></label>
	</div>
}