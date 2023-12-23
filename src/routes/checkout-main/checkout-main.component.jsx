
import './checkout-main.styles';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout-main.styles";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import PaymentForm from '../../components/payment-form/payment-form.component';

const CheckoutMain = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <Total>Total: ${cartTotal}</Total>
            <PaymentForm />
        </CheckoutContainer>
    )
}

export default CheckoutMain;