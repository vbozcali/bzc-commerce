import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.contex';

const CartIcon = () =>{
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => {    
        setIsCartOpen(!isCartOpen);

        console.log(isCartOpen);
    };

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon  className='shopping-icon' />
    
            <div className="item-count">0</div>
        </div>
    )
}

export default CartIcon;