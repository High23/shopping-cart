
async function getCategoryData(setItems, setError, setLoading, category) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`, {mode: 'cors'})
        if (response.status >= 400) {
            throw new Error(`Fetching status error. The status is ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        setItems(data)
        setError(null)
    } catch (error) {
        setError(error.message);
        console.log(error.message)
        setItems(null)
    } finally {
        setLoading(false)
    }
}

function addOneToQuantity(index) {
    let input = document.querySelectorAll('#quantity-of-selected-product')[index];
    input.value = Number(input.value) + 1;
}

function subtractOneFromQuantity(index) {
    let input = document.querySelectorAll('#quantity-of-selected-product')[index];
    if (Number(input.value) <= 0) {
        return
    }
    input.value = Number(input.value) - 1;
}

function addItemsToCart(item, index, cart, setCart) {
    const input = document.querySelectorAll('#quantity-of-selected-product')[index];
    const itemQuantity = Number(input.value);
    
    if (cart.length === 0) {
        setCart([{itemInfo: item, quantity: itemQuantity }])
    } else if (cart.some((obj) => obj.productId === item.id)) {
        let cartCopy = cart;
        for (let i = 0; i < cartCopy.length; i++) {
            if (cartCopy[i].itemInfo.id === item.id) {
                cartCopy[i].quantity += itemQuantity;
            }
        }
        setCart(cartCopy)
    } else {
        setCart([...cart, {itemInfo: item, quantity: itemQuantity}])
    }
}

export {addItemsToCart, subtractOneFromQuantity, addOneToQuantity, getCategoryData}