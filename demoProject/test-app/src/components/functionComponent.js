import React from "react"

function H1Comp(params) {
	return React.createElement('h1', null,  "H1 function component");
}

function PComp(params) {
	return React.createElement('p', null,  "some paragraph");
}



export {H1Comp,PComp}