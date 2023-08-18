import Button from "../button/button.component";
import './product-card.styles.scss';

import { useContext } from "react";
import { CartContext } from "../../context/cart.contex";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product)

    return (
        <div className="product-card-container">
            <img src={imageUrl} />

            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

            <Button onClick={() => addProductToCart(product)} buttonType="inverted">Add to card</Button>
        </div>
    )
}

export default ProductCard;