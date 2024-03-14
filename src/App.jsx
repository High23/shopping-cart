import { useState } from 'react'
import styles from './App.module.css'
import NavigationBar from './components/navigation-bar/navigation-bar'
import { useParams } from 'react-router-dom'
import ShowHomePage from './components/home-page/home-page'
import { ShopCategoriesNavigation, ShopCategories, ShowCategories, MensClothing, WomensClothing } from './components/shopping/shop-page'


function App() {
    const { directory } = useParams()
    const {category} = useParams()
    const {type} = useParams()
    return (
        <>
            <header>Shopping cart Project</header>
            <NavigationBar></NavigationBar>
            <main>
                {directory === 'shop' ?
                <ShopCategoriesNavigation></ShopCategoriesNavigation> :
                <ShowHomePage></ShowHomePage>
                }
                <ShopCategories category={category}></ShopCategories>
                {type === 'men' ? <MensClothing></MensClothing> : type === 'womens' && <WomensClothing></WomensClothing>}
            </main>
        </>
    )
}

export default App
