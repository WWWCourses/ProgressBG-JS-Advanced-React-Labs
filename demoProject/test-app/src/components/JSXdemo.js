import "./JSXdemo.css";

let x = 6;

const isOdd = x=> x%2 ? <b>Odd</b> : <b>Even</b>;
const applyClass = x=> x%2 ? "blue-border" : "red-border";


function JSXDemo() {
  return <div className={applyClass(x)}>
	  {x} is {isOdd(x)}
  </div>;
}

export default JSXDemo;