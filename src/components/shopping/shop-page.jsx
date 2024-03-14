import { useParams, Link } from "react-router-dom"

function ShowCategories() {
    return (
        <div>
            <span>Electronics</span>
            <span>Jewelry</span>
            <span>Clothing</span>
        </div>
    )
}

function ShopCategoriesNavigation() {
    return (
        <ul>
            <li><Link to='/shop/electronics'>Electronics</Link></li>
            <li><Link to='/shop/jewelry'>Jewelry</Link></li>
            <li><Link to='/shop/clothing'>Clothing</Link></li>
        </ul>
    )
}

function ShopCategories({category}) {
    return (
        <>
                {category === "electronics" ? <Electronics></Electronics> :
                category === "jewelry" ? <Jewelry></Jewelry> :
                category === 'clothing' && <ClothingNavigation></ClothingNavigation>}
        </>
    )
}

function Electronics() {
    return (
        <div>electronics</div>
    )
}

function Jewelry() {
    return (
        <div>jewelry</div>
    )
}

function MensClothing() {
    return (
        <>
        
        </>
    )
}

function WomensClothing() {
    return (
        <>
        
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

export {ShopCategoriesNavigation, ShopCategories, ShowCategories, MensClothing, WomensClothing}