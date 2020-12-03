const renderData = function(output, data){
	output.innerHTML = data;
}

const nodes={
	output:  document.getElementsByClassName('output')[0],
	getDataBtn: document.getElementsByClassName('getDataBtn')[0],
};

const dataURL = "data/loremIpsum.txt";


nodes.getDataBtn.addEventListener('click', function(){
	fetch(dataURL)
	.then(function (response) {
		if( response.text){
			return response.text();
		}else{
			throw new Error("No response.text")
		}
	})
	.then(function (responseText) {
		// nodes.output.innerHTML = responseText;
		renderData(nodes.output, responseText);
	})
	.catch( function(error){
		console.error('Upss, an error occurred');
		console.error(error.message);
	});
});