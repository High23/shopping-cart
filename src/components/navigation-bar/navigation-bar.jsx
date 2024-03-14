import { Link } from "react-router-dom"
import styles from "./navigation-bar.module.css"

function NavigationBar() {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
        </ul>
    )
}

export default NavigationBar