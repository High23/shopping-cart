import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import  styles  from './shop-page.module.css'
import { addItemsToCart, subtractOneFromQuantity, addOneToQuantity, getCategoryData } from "./shop-page.js"

function ShopCategoriesNavigation({category}) {
    return (
        <ul className={styles.shopCategoryNavigationBar}>
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
                    return (
                        <div key={item.id} className={styles.productContainer}>
                            <span><img src={item.image} alt="" className={styles.productImage}></img></span>
                            <div className={styles.productInfo}>
                                <h4>{item.title}</h4>
                                <div className={styles.priceAndRatings}>
                                    <span>{item.rating.rate}/5 stars ({item.rating.count} reviews) </span>
                                    <span>Price: ${item.price}</span>
                                </div>
                                <form action="">
                                    <span>
                                        <button type="button" onClick={() => {
                                            subtractOneFromQuantity(index)
                                        }}>-</button>
                                        <input type="number" name="product quantity" id="quantity-of-selected-product" defaultValue={0}></input>
                                        <button type="button" onClick={() => {
                                            addOneToQuantity(index)
                                        }}>+</button>
                                    </span>
                                    <button type="button"  onClick={() => {
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

function ClothingNavigation() {
    return (
        <ul>
            <li><Link to='/shop/clothing/men'>Men&apos;s Clothing</Link></li>
            <li><Link to='/shop/clothing/women'>Women&apos;s clothing</Link></li>
        </ul>
    )
}

export {ShopCategoriesNavigation, ShopCategories, CategoryItems}