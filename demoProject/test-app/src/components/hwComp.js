import "./JSXdemo.css";

let numbers = [1,2,3,4];

const HWComp = ()=>{
	return (
		<div>
			<h1>HW: lists with dynamic borders</h1>
			{numbers.map( (el,i)=>
				<li key={i} className={el%2?"blue-border":"red-border"}>
					Item {el}
				</li>
			)}
		</div>
	)
}


export default HWComp