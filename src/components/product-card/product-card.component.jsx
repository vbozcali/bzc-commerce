import { ProductCardContainer, Image, Footer, Name, Price, ButtonContainer } from "./product-card.styles";
import Button from '../button/button.component';
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainer>
            <Image src={imageUrl} />

            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>

            <ButtonContainer>
                <Button onClick={() => addProductToCart(product)} buttonType="inverted">Add to card</Button>
            </ButtonContainer>
        </ProductCardContainer>
    )
}

export default ProductCard;