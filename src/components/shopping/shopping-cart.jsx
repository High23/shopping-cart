import { useEffect, useState } from 'react'
import  styles  from './shop-page.module.css'
import  styled  from '/src/App.module.css'
import { addOneToQuantity, subtractOneFromQuantity } from './shop-page'

function ShoppingCart({cart, setCart}) {
    const [totalPrice, setTotalPrice] = useState(loadTotalPrice(cart))

    return (
        <>
            {cart.length <= 0 ? 
            <div className={styles.empty}>
                Your cart is empty! Shop around to fill it up.
            </div> 
            : 
            cart.map((item, index) => {
                return (
                    <div className={styled.cartItem} key={item.id}>
                        <div className={styled.itemImage} style={{backgroundImage: `url(${item.image})`}}></div>
                        <div className={styled.itemInfo}>
                            <h2 className={styled.itemTitle}>{item.title}</h2>
                            <div className={styles.priceAndRatings}>
                                <span>Price: ${item.price}</span>
                                <div>Total price: ${item.totalPrice}</div>
                                <form action="">
                                    <span>
                                        <button type="button"  onClick={() => {
                                            let input = document.querySelectorAll('#quantity-of-selected-product')[index];
                                            if (Number(input.value) - 1 < 1) return;
                                            subtractOneFromQuantity(index)
                                            subtractOneFromCart(index, cart, setCart)
                                            updateTotalPrice(totalPrice, setTotalPrice, item, 'subtract')
                                        }}>-</button>
                                        <input type="number" name="product quantity" id="quantity-of-selected-product" onChange={inputChange} defaultValue={item.quantity}></input>
                                        <button type="button" onClick={() => {
                                            addOneToQuantity(index)
                                            addOneFromCart(index, cart, setCart)
                                            updateTotalPrice(totalPrice, setTotalPrice, item, 'add')
                                        }}>+</button>
                                    </span>
                                    <button type="button" onClick={() => {
                                        deleteItemFromCart(cart, setCart, index)
                                        setTotalPrice(total => total = total - item.totalPrice)
                                    }}>Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )
                })
            }
            <div className={styled.summary}>
                <h2>Summary</h2>
                <div>Sum of items: ${totalPrice}</div>
                <div>Sales tax: ${Math.ceil(totalPrice * 0.06)}</div>
                <div>Total: ${totalPrice + Math.ceil(totalPrice * 0.06)}</div>
            </div>
        </>
    )
}

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

function inputChange(e) {
    
}

export default ShoppingCart