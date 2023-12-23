import { OrderConfirmationContainer, OrderConfirmationText } from "./order-confirmation.styles";

const OrderConfirmation = () => {
    return (
        <OrderConfirmationContainer>
            <OrderConfirmationText>
                Congratulations! Order Successfuly Created
            </OrderConfirmationText>
        </OrderConfirmationContainer>
    )
}

export default OrderConfirmation;