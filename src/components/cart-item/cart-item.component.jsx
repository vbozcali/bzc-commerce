import { CartItemContainer, Img, ItemDetails, ItemName, ItemPrice } from './cart-item.styles';

const CartItem = ({cartItem}) => {
    const { name, imageUrl, quantity, price } = cartItem;

    return (
        <CartItemContainer>
            <Img src={imageUrl} alt={name} />

            <ItemDetails>
                <ItemName className='name'>{name}</ItemName>

                <ItemPrice className='price'>{quantity} x ${price}</ItemPrice>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;