import './cart-icon.styles';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/cart.context';
import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.styles';

const CartIcon = () => {
    const { toggleCartOpen, isCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => {
        toggleCartOpen(!isCartOpen);
    };

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />

            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;