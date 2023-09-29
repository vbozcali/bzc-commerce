import './cart-icon.styles';
import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { toggleCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
    const dispatch = useDispatch();

    const isCartOpen = useSelector(selectIsCartOpen);   
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => {
        dispatch(toggleCartOpen(!isCartOpen));
    };

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />

            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;