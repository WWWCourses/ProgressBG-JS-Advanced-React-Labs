import { useState } from 'react';

function Counter({initialCount}) {
	const [count, setCount] = useState(initialCount);
	console.log(`count: ${count}`);
	return (
		<div>
			Count: {count}
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
			<button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
		</div>
	);
}
function HooksDemo(props) {
	return <div>
	<h1>Hooks demo</h1>
	<Counter initialCount={1}/>
	</div>
}
export default HooksDemo