const AJAXcall = function(callback){
	// create a XMLHttpRequest object
	// var xhr = window.XMLHttpRequest ?
	// 	new XMLHttpRequest() :
	// 	new ActiveXObject("Microsoft.XMLHTTP");

	var xhr = new XMLHttpRequest() ;

	// initializes the request:
	xhr.open("GET", dataURL, true);

	// EventHandler, that will be fired each time when the xhr state changes
	let serverStateCounter = 1;
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// finally do something with content:
			nodes.output.innerHTML = this.responseText;
		};
	};

	// sends the request:
	xhr.send();
};


const nodes={
	output:  document.getElementsByClassName('output')[0],
	getDataBtn: document.getElementsByClassName('getDataBtn')[0],
};

const dataURL = "data/loremIpsum.txt";

nodes.getDataBtn.addEventListener('click', function(){
	// AJAXcall(renderData(nodes.output));
	AJAXcall();
});