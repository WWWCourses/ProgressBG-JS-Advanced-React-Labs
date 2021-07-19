const products = [
	{
		code:1,
		name:"product1",
		category: "music",
		price:1
	},
	{
		code:2,
		name:"product2",
		category: "books",
		price:2
	},
	{
		code:3,
		name:"product3",
		category: "books",
		price:3
	},
	{
		code:4,
		name:"product4",
		category: "music",
		price:4
	}
]

function getProductPricesByForLoop() {
	let productsPrices = [];
	for (let i = 0; i < products.length; i++) {
		const element = products[i];
		productsPrices.push(element.price)
	}

	return productsPrices;
}

function getProductPricesByForEach() {
	let productsPrices = [];
	products.forEach( el=>productsPrices.push(el.price) )
	return productsPrices;
}

function getProductPricesByForMap() {
	return products.map( el=>el.price )
}

function getBooks(params) {
	return products.filter( el=>el.category === 'books')
}

function calcTotalPrice() {
	let total = products.reduce(  )
}

console.log( getBooks() );

