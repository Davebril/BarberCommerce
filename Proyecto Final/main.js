let carts = document.querySelectorAll('.add-cart');

let products = [
	{
	   marca: "Acme",
	   modelo: "Munich",
	   anio: 2010,
	   precio: 500.00,
	   inCart: 0
	},
	{
	   marca: "Argen",
	   modelo: "Paris",
	   anio: 2011,
	   precio: 550,
	   inCart: 0
	},
	{
	   marca: "Canon",
	   modelo: "Madrid",
	   anio: 2012,
	   precio: 600,
       inCart: 0
	},
	{
	   marca: "Doral",
	   modelo: "Roma",
	   anio: 2013,
	   precio: 400,
	   inCart: 0
	},
	{
	   marca: "King",
	   modelo: "London",
	   anio: 2014,
	   precio: 490,
	   inCart: 0
	}
];
	   

for (let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
	     cartNumbers(products[i]);
	     totalCost(products[i]);
	})
}

function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');

	if(productNumbers) {
	document.querySelector('.cart span').textContent = productNumbers;
	}
}



function cartNumbers(product) {
	let productNumbers = localStorage.getItem('cartNumbers');

	productNumbers = parseInt(productNumbers);

	if( productNumbers ) {
	localStorage.setItem('cartNumbers', productNumbers + 1);
	document.querySelector('.cart span').textContent = 	productNumbers + 1;
	} else {
	localStorage.setItem('cartNumbers', 1);
	document.querySelector('.cart span').textContent = 1;
	}
	setItems(product);
}

function setItems(product) {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	if(cartItems != null) {

	   if(cartItems[product.modelo] == undefined) {
		cartItems = {
		   ...cartItems,
		   [product.modelo]: product
		}
	   }

	   cartItems[product.modelo].InCart += 1;
	} else {
	product.inCart = 1;
	cartItems = {
		[product.modelo]: product
	}
	}
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {

	let cartCost = localStorage.getItem('totalCost');
	
	
	console.log(typeof cartCost);
	
	if(cartCost != null) {
		cartCost = parseInt(cartCost);
	    localStorage.setItem("totalCost", cartCost + product.precio);
	} else {
	localStorage.setItem("totalCost", product.precio);
	}
}

function displayCart() {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);

	let productContainer = document.querySelector(".products");
	let cartCost = localStorage.getItem('totalCost');
	console.log(cartItems);
	if (cartItems && productContainer) {
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
			<div class="product">
		 	    <ion-icon name="close-circle"></ion-icon>
			    <img src="./images/${item.modelo}.png">
			    <span>${item.marca}</span>
			</div>
			<div class="price">$${item.precio},00</div>
			<div class="quantity">
				<ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
				<span>${item.inCart}</span>
				<ion-icon class="increase"
				name="arrow-dropright-circle"></ion-icon>
			</div>
			<div class="total">
				$${item.inCart * item.precio},00
			</div>
			`;	
	});

	productContainer.innerHTML += `
	    <div class="basketTotalContainer">
		<h4 class="basketTotalTitle">
			Basket Total
		</h4>
		<h4 class="basketTotal">
			$${cartCost},00
		</h4> 
	`;	
	}	
}

onLoadCartNumbers();
displayCart();