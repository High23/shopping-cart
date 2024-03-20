import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import  styles  from './shop-page.module.css'

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

function ShopCategories({category, type}) {
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
            {category === "electronics" ? <Electronics fetchedItems={items} loading={loading}></Electronics> :
            category === "jewelery" ? <Jewelry fetchedItems={items} loading={loading}></Jewelry> :
            type === 'men' ? <MensClothing fetchedItems={items} loading={loading}></MensClothing> : 
            type === 'women' && <WomensClothing fetchedItems={items} loading={loading}></WomensClothing> }
        </>
    )
}

function Electronics({fetchedItems, loading}) {
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
                            <button type="button">Add to cart</button>
                        </form>
                    </div>
                )
            })}
        </section>}
    </>
    )
}

function Jewelry({fetchedItems, loading}) {
    return (
    <>
        {!loading && 
        <section className={styles.electronics}>
            {fetchedItems.map((item) => {
                return (
                    <div key={item.id} className={styles.productContainer}>
                        <img src={item.image} alt="" className={styles.productImage}></img>
                        <div>${item.price}</div>
                        <div>{item.rating.rate}({item.rating.count})</div>
                        <div>{item.title}</div>
                        <div>{item.description}</div>
                    </div>
                )
            })}
        </section>}
    </>
    )
}

function MensClothing({fetchedItems, loading}) {
    return (
    <>
        {!loading && 
        <section className={styles.electronics} aria-label="productContainer">
            {fetchedItems.map((item) => {
                return (
                    <div key={item.id} className={styles.productContainer}>
                        <img src={item.image} alt="" className={styles.productImage}></img>
                        <div>${item.price}</div>
                        <div>{item.rating.rate}({item.rating.count})</div>
                        <div>{item.title}</div>
                        <div>{item.description}</div>
                    </div>
                )
            })}
        </section>}
    </>
    )
}

function WomensClothing({fetchedItems, loading}) {
    return (
    <>
        {!loading && 
        <section className={styles.electronics} aria-label="productContainer">
            {fetchedItems.map((item) => {
                return (
                    <div key={item.id} className={styles.productContainer}>
                        <img src={item.image} alt="" className={styles.productImage}></img>
                        <div>${item.price}</div>
                        <div>{item.rating.rate}({item.rating.count})</div>
                        <div>{item.title}</div>
                        <div>{item.description}</div>
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

export {ShopCategoriesNavigation, ShopCategories, ShowCategories, MensClothing, WomensClothing, Electronics}