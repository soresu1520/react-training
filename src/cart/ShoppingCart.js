import { useEffect } from "react";

const ShoppingCart = () => {

    useEffect(() => {
        document.title = "Shopping Cart";
    }, []);

    return(
        <div>
            <h1>Cart</h1>
        </div>
    )

}

export default ShoppingCart;