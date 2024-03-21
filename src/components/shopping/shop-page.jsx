import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import  styles  from './shop-page.module.css'
import { addItemsToCart, subtractOneFromQuantity, addOneToQuantity, getCategoryData } from "./shop-page.js"

function ShowCategories() {
    return (
        <div>
            <span>Electronics</span>
            <span>Jewelry</span>
            <span>Clothing</span>
        </div>
    )
}

function ShopCategoriesNavigation({category}) {
    return (
        <ul>
            <li><Link to='/shop/electronics'>Electronics</Link></li>
            <li><Link to='/shop/jewelery'>Jewelry</Link></li>
            <li><Link to='/shop/clothing'>Clothing</Link></li>
            {category === 'clothing' && <ClothingNavigation></ClothingNavigation>}
        </ul>
    )
}

function ShopCategories({category, type, cart, setCart}) {
    const [items, setItems] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() =>  {
        if (category === 'clothing' && type === 'men') {
            getCategoryData(setItems, setError, setLoading, "men's clothing")
            return
        } else if (category === 'clothing' && type === 'women') {
            getCategoryData(setItems, setError, setLoading, "women's clothing")
            return
        } else if (category === 'clothing' && type === undefined){
            return
        }
        getCategoryData(setItems, setError, setLoading, category)
    }, [category, type])

    return (
        <>
            {category === "electronics" ? <Electronics fetchedItems={items} loading={loading} cart={cart} setCart={setCart}></Electronics> :
            category === "jewelery" ? <Jewelry fetchedItems={items} loading={loading} cart={cart} setCart={setCart}></Jewelry> :
            type === 'men' ? <MensClothing fetchedItems={items} loading={loading} cart={cart} setCart={setCart}></MensClothing> : 
            type === 'women' && <WomensClothing fetchedItems={items} loading={loading} cart={cart} setCart={setCart}></WomensClothing> }
        </>
    )
}

function Electronics({fetchedItems, loading, cart, setCart}) {
    return (
        <>
            {!loading && 
            <section className={styles.electronics} aria-label="productContainer">
                {fetchedItems.map((item, index) => {
                    return (
                        <div key={item.id} className={styles.productContainer}>
                            <img src={item.image} alt="" className={styles.productImage}></img>
                            <div>${item.price}</div>
                            <div>{item.rating.rate}({item.rating.count})</div>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                            <form action="">
                                <span>
                                    <input type="number" name="product quantity" id="quantity-of-selected-product" defaultValue={0}></input>
                                    <button type="button" onClick={() => {
                                        addOneToQuantity(index)
                                    }}>+</button>
                                    <button type="button" onClick={() => {
                                        subtractOneFromQuantity(index)
                                    }}>-</button>
                                </span>
                                <button type="button"  onClick={() => {
                                    addItemsToCart(item, index, cart, setCart)
                                }}>Add to cart</button>
                            </form>
                        </div>
                    )
                })}
            </section>}
        </>
    )
}

function Jewelry({fetchedItems, loading, cart, setCart}) {
    return (
        <>
            {!loading && 
            <section className={styles.electronics} aria-label="productContainer">
                {fetchedItems.map((item, index) => {
                    return (
                        <div key={item.id} className={styles.productContainer}>
                            <img src={item.image} alt="" className={styles.productImage}></img>
                            <div>${item.price}</div>
                            <div>{item.rating.rate}({item.rating.count})</div>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                            <form action="">
                                <span>
                                    <input type="number" name="product quantity" id="quantity-of-selected-product" defaultValue={0}></input>
                                    <button type="button" onClick={() => {
                                        addOneToQuantity(index)
                                    }}>+</button>
                                    <button type="button" onClick={() => {
                                        subtractOneFromQuantity(index)
                                    }}>-</button>
                                </span>
                                <button type="button"  onClick={() => {
                                    addItemsToCart(item, index, cart, setCart)
                                }}>Add to cart</button>
                            </form>
                        </div>
                    )
                })}
            </section>}
        </>
    )
}

function MensClothing({fetchedItems, loading, cart, setCart}) {
    return (
        <>
            {!loading && 
            <section className={styles.electronics} aria-label="productContainer">
                {fetchedItems.map((item, index) => {
                    return (
                        <div key={item.id} className={styles.productContainer}>
                            <img src={item.image} alt="" className={styles.productImage}></img>
                            <div>${item.price}</div>
                            <div>{item.rating.rate}({item.rating.count})</div>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                            <form action="">
                                <span>
                                    <input type="number" name="product quantity" id="quantity-of-selected-product" defaultValue={0}></input>
                                    <button type="button" onClick={() => {
                                        addOneToQuantity(index)
                                    }}>+</button>
                                    <button type="button" onClick={() => {
                                        subtractOneFromQuantity(index)
                                    }}>-</button>
                                </span>
                                <button type="button"  onClick={() => {
                                    addItemsToCart(item, index, cart, setCart)
                                }}>Add to cart</button>
                            </form>
                        </div>
                    )
                })}
            </section>}
        </>
    )
}

function WomensClothing({fetchedItems, loading, cart, setCart}) {
    return (
        <>
            {!loading && 
            <section className={styles.electronics} aria-label="productContainer">
                {fetchedItems.map((item, index) => {
                    return (
                        <div key={item.id} className={styles.productContainer}>
                            <img src={item.image} alt="" className={styles.productImage}></img>
                            <div>${item.price}</div>
                            <div>{item.rating.rate}({item.rating.count})</div>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                            <form action="">
                                <span>
                                    <input type="number" name="product quantity" id="quantity-of-selected-product" defaultValue={0}></input>
                                    <button type="button" onClick={() => {
                                        addOneToQuantity(index)
                                    }}>+</button>
                                    <button type="button" onClick={() => {
                                        subtractOneFromQuantity(index)
                                    }}>-</button>
                                </span>
                                <button type="button"  onClick={() => {
                                    addItemsToCart(item, index, cart, setCart)
                                }}>Add to cart</button>
                            </form>
                        </div>
                    )
                })}
            </section>}
        </>
    )
}

function ClothingNavigation() {
    return (
        <ul>
            <li><Link to='/shop/clothing/men'>Men&apos;s Clothing</Link></li>
            <li><Link to='/shop/clothing/women'>Women&apos;s clothing</Link></li>
        </ul>
    )
}

export {ShopCategoriesNavigation, ShopCategories, Electronics}