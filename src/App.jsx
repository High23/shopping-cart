import { useState } from 'react'
import styles from './App.module.css'
import NavigationBar from './components/navigation-bar/navigation-bar'
import { useParams } from 'react-router-dom'
import ShowHomePage from './components/home-page/home-page'
import { ShopCategoriesNavigation, ShopCategories} from './components/shopping/shop-page.jsx'
import ShoppingCart from './components/shopping/shopping-cart'


function App() {
    const { directory } = useParams()
    const { category } = useParams()
    const [cart, setCart] = useState([])

    return (
        <div className={styles.container}>
            <header>The Modern Shop</header>
            <NavigationBar cart={cart}></NavigationBar>
            <main className={directory === undefined ? styles.homepage : directory === 'cart' ? styles.cart : ''}>
                {directory === 'cart' &&
                <ShoppingCart cart={cart} setCart={setCart} ></ShoppingCart> }
                {directory === 'shop' ? <ShopCategoriesNavigation></ShopCategoriesNavigation> : 
                directory === undefined && <ShowHomePage></ShowHomePage>}
                {category !== undefined && <ShopCategories category={category} cart={cart} setCart={setCart} ></ShopCategories>}
            </main>
        </div>
    )
}

export default App
