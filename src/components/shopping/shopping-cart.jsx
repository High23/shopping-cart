import { useState } from 'react'
import  styles  from './shop-page.module.css'
import  styled  from '/src/App.module.css'
import { addOneToQuantity, subtractOneFromQuantity } from './shop-page'
import {inputChange, formSubmit, loadTotalPrice, deleteItemFromCart, addOneFromCart, subtractOneFromCart, updateTotalPrice} from './shopping-cart'

function ShoppingCart({cart, setCart}) {
    const [totalPrice, setTotalPrice] = useState(loadTotalPrice(cart))

    return (
        <>
            {cart.length <= 0 ? 
            <div className={styled.empty}>
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
                                <form action="" onSubmit={formSubmit}>
                                    <span>
                                        <button type="button"  onClick={() => {
                                            let input = document.querySelectorAll('#quantity-of-selected-product')[index];
                                            if (Number(input.value) - 1 < 1) return;
                                            subtractOneFromQuantity(index)
                                            subtractOneFromCart(index, cart, setCart)
                                            updateTotalPrice(totalPrice, setTotalPrice, item, 'subtract')
                                        }}>-</button>
                                        <input type="number" name="product quantity" id="quantity-of-selected-product" onChange={(element) => {
                                            inputChange(cart, setCart, index, element)
                                        }} defaultValue={item.quantity}></input>
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

export default ShoppingCart