const getInputValueFromId = id => {
    const inputField = document.getElementById(id);
    inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
};
const addProduct = () => {
    const product = getInputValueFromId('product-name-field');
    const quantity = getInputValueFromId('product-quantity-field');
    //display product on quantity
    displayProduct(product,quantity);
    //save to local storage
    saveItemToLocalStorage(product, quantity);
};

const getShoppingCartFromLocalStorage = () => {
    let saveCart = localStorage.getItem('cart');
    let cart = {};
    if (saveCart) {
        cart = JSON.parse(saveCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();

    //add product to the object as properties
    cart[product] = quantity;
    const cartString = JSON.stringify(cart);
    //save to storage
    localStorage.setItem('cart', cartString);

}

const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
};
const displayStoredProduct = () => {
    const cart = getShoppingCartFromLocalStorage();
    for(const product in cart){
        const quantity = cart[product];
        console.log(product , quantity);
        displayProduct(product, quantity);
    }
}
displayStoredProduct();