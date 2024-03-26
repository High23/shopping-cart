import { Link } from "react-router-dom"
import styles from "./navigation-bar.module.css"

function NavigationBar({cart}) {
    return (
        <ul className={styles.navigationBar}>
            <li><Link to='/' className={styles.navigationBarButton}>Home</Link></li>
            <li><Link to="/shop" className={styles.navigationBarButton}>Shop</Link></li>
            <li><Link to="/cart" className={styles.navigationBarButton}>Cart {cart.length > 0 && `(${cart.length})`}</Link></li>
        </ul>
    )
}

export default NavigationBar