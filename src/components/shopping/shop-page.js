async function getCategoryData(setItems, setError, setLoading, category) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`, {mode: 'cors'});
        if (response.status >= 400) {
            throw new Error(`Fetching status error. The status is ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
        setError(null);
    } catch (error) {
        setError(error.message);
        setItems(null);
    } finally {
        setLoading(false);
    }
}

function addOneToQuantity(index) {
    let input = document.querySelectorAll('#quantity-of-selected-product')[index];
    input.value = Number(input.value) + 1;
}

function subtractOneFromQuantity(index) {
    let input = document.querySelectorAll('#quantity-of-selected-product')[index];
    if (Number(input.value) <= 1) {
        return
    }
    input.value = Number(input.value) - 1;
}

function addItemsToCart(item, index, cart, setCart) {
    const input = document.querySelectorAll('#quantity-of-selected-product')[index];
    const itemQuantity = Number(input.value);
    let cartCopy = cart;
    if (cartCopy.length === 0) {
        setCart([{id: item.id, title: item.title, price: item.price, image: item.image, quantity: itemQuantity, totalPrice: itemQuantity * item.price }]);
    }
    for (let i = 0; i < cartCopy.length; i++) {
        let cartItem = cartCopy[i]
        if (cartItem.id === item.id) {
            cartItem.quantity += itemQuantity;
            cartItem.totalPrice = cartItem.quantity * item.price;
            setCart(cartCopy);
            break;
        }
    }
    if (!cartCopy.some(obj => obj.id === item.id)) {
        setCart([...cart, {id: item.id, title: item.title, price: item.price, image: item.image, quantity: itemQuantity, totalPrice: itemQuantity * item.price }]);
    }
}

export {addItemsToCart, subtractOneFromQuantity, addOneToQuantity, getCategoryData}