import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import  styles  from './shop-page.module.css'
import { addItemsToCart, subtractOneFromQuantity, addOneToQuantity, getCategoryData } from "./shop-page.js"
import { formSubmit } from "./shopping-cart.js"

function ShopCategoriesNavigation() {
    return (
        <ul className={styles.shopCategoryNavigationBar}>
            <li><Link to='/shop/electronics' className={styles.shopNavigationBarButton}>Electronics</Link></li>
            <li><Link to='/shop/jewelery' className={styles.shopNavigationBarButton}>Jewelry</Link></li>
            <li><Link to='/shop/mens-clothing' className={styles.shopNavigationBarButton}>Men&apos;s Clothing</Link></li>
            <li><Link to='/shop/womens-clothing' className={styles.shopNavigationBarButton}>Women&apos;s Clothing</Link></li>
        </ul>
    )
}

function ShopCategories({category, cart, setCart}) {
    const [items, setItems] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() =>  {
        if (category === 'mens-clothing') {
            getCategoryData(setItems, setError, setLoading, "men's clothing")
            return
        } else if (category === 'womens-clothing') {
            getCategoryData(setItems, setError, setLoading, "women's clothing")
            return
        } else if (category === undefined){
            return
        }
        getCategoryData(setItems, setError, setLoading, category)
    }, [category])

    return (
        <>
            {!loading && <CategoryItems fetchedItems={items} loading={loading} cart={cart} setCart={setCart}></CategoryItems> }
        </>
    )
}

function CategoryItems({fetchedItems, loading, cart, setCart}) {
    return (
        <>
            {!loading && 
            <section className={styles.products} aria-label="productContainer">
                {fetchedItems.map((item, index) => {
                    item = {...item, price: Math.ceil(item.price)}
                    return (
                        <div key={item.id} className={styles.productContainer}>
                            <span><img src={item.image} alt="" className={styles.productImage}></img></span>
                            <div className={styles.productInfo}>
                                <h4>{item.title}</h4>
                                <div className={styles.priceAndRatings}>
                                    <span>{item.rating.rate}/5 stars ({item.rating.count} reviews) </span>
                                    <span>Price: ${item.price}</span>
                                </div>
                                <form action="" onSubmit={formSubmit}>
                                    <span>
                                        <button type="button" onClick={() => {
                                            subtractOneFromQuantity(index)
                                        }}>-</button>
                                        <input type="number" name="product quantity" id="quantity-of-selected-product" defaultValue={1}></input>
                                        <button type="button" onClick={() => {
                                            addOneToQuantity(index)
                                        }}>+</button>
                                    </span>
                                    <button type="button" onClick={() => {
                                        addItemsToCart(item, index, cart, setCart)
                                    }}>Add to cart</button>
                                </form>
                            </div>
                        </div>
                    )
                })}
            </section>
            }
        </>
    )
}

export {ShopCategoriesNavigation, ShopCategories, CategoryItems}