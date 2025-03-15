var all_products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
];

function display_products(){
    var productList = '';
    all_products.map((product)=>{
        productList += 
        ` <div class="col-lg-3 col-md-6 mb-3">
            <div class="card p-3 shadow">
                <h5>${product.name}</h5>
                <p>Price: ₹${product.price}</p>
                <button class="btn btn-primary" onclick='addToCart(${product.id})'>Add to Cart</button>
            </div>
        </div>`
    })
    document.getElementById('productList').innerHTML = productList;
}
display_products()

var cart = [];

// function addToCart(productID){
//     var product = all_products.find(a => a.id === productID);
//     cart.push(product)
//     display_cart(cart)
// }

function addToCart(productID){
    var product = all_products.find(a => a.id === productID);
    var existingProduct = cart.find(a => a.id === productID);
    
    if(existingProduct){
        existingProduct.quantity++;
    }
    else{
        product.quantity = 1;
        cart.push(product)
    }

    display_cart(cart)
}

function display_cart(cartData){
    var cartList = '';
    cartData.map((product) => {
        cartList += 
        `<tr>
            <td>${product.name}</td>
            <td>₹${product.price}</td>
            <td>${product.quantity}</td>
            <td>${product.price * product.quantity}</td>
            <td><button class="btn btn-danger btn-sm" onclick='removeFromCart(${product.id})'>Remove</button></td>
        </tr>`;
    });
    document.getElementById('cartList').innerHTML = cartList;
}

function removeFromCart(productID){
    var product = all_products.find(a => a.id === productID);

    if(product && product.quantity > 1){
        product.quantity--;
    }
    else{
        cart = cart.filter(product => product.id !== productID);
    }

    display_cart(cart)
}

function searchProducts() {
    var searchValue = document.getElementById('searchInput').value;
    // var searchValue = document.getElementById('searchInput').value.toLowerCase();

    // var filterData = all_products.filter(product =>
    //     product.name.includes(searchValue)
    // );
    var filterData = all_products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );

    var searchList = '';
    filterData.forEach((product) => {
        searchList += `
        <div class="col-lg-6 col-md-6 mb-3">
            <div class="card p-3 shadow">
                <h5>${product.name}</h5>
                <p>Price: ₹${product.price}</p>
                <button class="btn btn-primary" onclick='addToCart(${product.id})'>Add to Cart</button>
            </div>
        </div>`;
    });

    document.getElementById('searchProducts').innerHTML = searchList || '<p class="text-center w-100 text-danger">No products found</p>';
}
