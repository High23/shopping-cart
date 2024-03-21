import { useEffect, useState } from "react"
import { getCategoryData } from "./shop-page.js"
import  styles  from './shop-page.module.css'

function ShoppingCart({cart}) {
    return (
        <span>
            {cart.length > 0 && 
                cart.map((item) => {
                    return (
                        <div key={item.itemInfo.id}>
                            <img src={item.itemInfo.image} alt="" className={styles.productImage}></img>
                            <div>${item.itemInfo.price}</div>
                            <div>{item.itemInfo.rating.rate}({item.itemInfo.rating.count})</div>
                            <div>{item.itemInfo.title}</div>
                            <div>{item.itemInfo.description}</div>
                        </div>
                    )
                })
            }
        </span>
    )
}

export default ShoppingCart