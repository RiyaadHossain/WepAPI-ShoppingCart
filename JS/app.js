// Get All Variables
const productInput = document.getElementById('product-input')
const productCont = document.getElementById('product-container')
const searchBtn = document.getElementById('search-btn')

/* Enter Function */
const enter = event => {
    if (event.key === 'Enter') {
        searchBtn.click()
    }

}

/* Set Enter Key */
productInput.addEventListener('keyup', enter)

/* ============== Add Product Button ============== */
const addProduct = () => {
    const product = productInput.value 

    // Show in the UI 
    showProduct(product)

    // Add to Local Storage 
    addInStorage(product)

    // Emptify the Box 
    productInput.value = ''
}

/* Function to Show in the UI */
const showProduct = product => {
    const item = document.createElement('p')
    item.classList.add('lead')
    item.innerText = product
    productCont.appendChild(item)
}

/* Function to Store in Local Storage */
const addInStorage = product => {
    // Get the cart
    const cart = getCart()
    if (cart[product]) {
        cart[product] = cart[product] + 1
    } else {
        cart[product] = 1
    }
    const cartString = JSON.stringify(cart)
    localStorage.setItem('Cart Container' ,cartString)
}

/* Get Cart Function */
const getCart = () => {
    let cart = localStorage.getItem('Cart Container')
    if (cart) {
        cart = JSON.parse(cart)
    } else {
        cart = {}
    }
    return cart
}

/* Show Stored Product */
const storedProduct = () => {
    const cart = getCart()
    for (const item in cart) {
        showProduct(item)
    }
} 
storedProduct()