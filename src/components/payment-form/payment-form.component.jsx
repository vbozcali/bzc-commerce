import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer, PaymentButton, PaymentSuccessfulContainer, PaymentSuccessfulText, PaymentSuccessfulImage } from "./payment-form.styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useNavigate } from 'react-router-dom';
import { clearWholeCartItems } from '../../store/cart/cart.action';
    
const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [isOrderSuccessful, setIsOrderSuccesful] = useState(false);

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const clearWholeCart = () => dispatch(clearWholeCartItems(cartItems));

    const paymentHandler = async (event) => {
        event.preventDefault(0);

        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json());

        const { paymentIntent: { client_secret } } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest'
                }
            }
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error);
        } else {
            // navigate.push('/order-complete');

            setIsOrderSuccesful(true);
            clearWholeCart(cartItems);

            return false;

            if (paymentResult.paymentIntent.status == 'succeeded') {
                alert('payment successful');
            }
        }
    }

    return (
        <PaymentFormContainer>
            {isOrderSuccessful ? (
                <PaymentSuccessfulContainer>
                    <PaymentSuccessfulText>
                        <PaymentSuccessfulImage src="https://cdn4.iconfinder.com/data/icons/essentials-72/24/040_-_Tick-256.png" />
                        Order Successfuly Created
                    </PaymentSuccessfulText>
                </PaymentSuccessfulContainer>
            ) : ''}

            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;