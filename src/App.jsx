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
    const { type } = useParams()
    const [cart, setCart] = useState([])
    return (
        <>
            <header>Shopping cart Project</header>
            <NavigationBar cart={cart}></NavigationBar>
            <main>
                {directory === 'shop' ?
                <ShopCategoriesNavigation category={category}></ShopCategoriesNavigation> :
                directory === 'cart' ?
                <ShoppingCart cart={cart}></ShoppingCart> :
                <ShowHomePage></ShowHomePage>
                }
                <ShopCategories category={category} type={type} cart={cart} setCart={setCart}></ShopCategories>
            </main>
        </>
    )
}

export default App
