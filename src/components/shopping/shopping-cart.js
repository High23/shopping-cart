function loadTotalPrice(cart) {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].totalPrice
    }
    return total
}

function updateTotalPrice(totalPrice, setTotalPrice, item, operation) {
    let newTotal = totalPrice
    if (operation === 'add') {
        newTotal = newTotal + item.price
    } else {
        newTotal = newTotal - item.price
    }
    setTotalPrice(newTotal)
}

function subtractOneFromCart(index, cart, setCart) {
    let cartCopy = cart;
    cartCopy[index].quantity -= 1;
    cartCopy[index].totalPrice = cartCopy[index].totalPrice - cartCopy[index].price;
    setCart([...cartCopy]);
}

function addOneFromCart(index, cart, setCart) {
    let cartCopy = cart;
    cartCopy[index].quantity += 1;
    cartCopy[index].totalPrice = cartCopy[index].totalPrice + cartCopy[index].price;
    setCart([...cartCopy]);
}

function deleteItemFromCart(cart, setCart, index) {
    let cartCopy = cart;
    cartCopy.splice(index, 1)
    setCart([...cartCopy])
}

function formSubmit(e) {
    e.preventDefault()
}

function inputChange(cart, setCart, index, element) {
    let cartCopy = cart;
    cartCopy[index].quantity = element.target.value;
    cartCopy[index].totalPrice = Number(cartCopy[index].quantity) * cartCopy[index].price;
    setCart([...cartCopy]);
}

export {inputChange, formSubmit, loadTotalPrice, deleteItemFromCart, addOneFromCart, subtractOneFromCart, updateTotalPrice}