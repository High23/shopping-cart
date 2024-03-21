import { Link } from "react-router-dom"
import styles from "./navigation-bar.module.css"

function NavigationBar({cart}) {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
    )
}

export default NavigationBar