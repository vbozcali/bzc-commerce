import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ProductCardContainer, Image, Footer, Name, Price, ButtonContainer } from "./product-card.styles";
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product)

    return (
        <ProductCardContainer>
            <Image src={imageUrl} />

            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>

            <ButtonContainer>
                <Button onClick={() => addProductToCart(product)} buttonType="inverted">Add to card</Button>
            </ButtonContainer>
        </ProductCardContainer>
    )
}

export default ProductCard;