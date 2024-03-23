import { Link } from "react-router-dom"
import styled from "../navigation-bar/navigation-bar.module.css"


function ShowHomePage() {
    return (
        <>
            <h1>The Modern Shop</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non quam non nibh elementum tincidunt eget et ipsum. Ut tristique turpis ac nulla pharetra condimentum.</p>
            <Link to="/shop" ><button className={styled.navigationBarButton}>Shop</button></Link>
        </>
    )
}

export default ShowHomePage