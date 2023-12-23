import { useParams } from "react-router-dom";
import OrderConfirmation from "../../components/order-confirmation/order-confirmation.component";

const CheckoutComplete = () => {
    const param = useParams();

    return (
        <OrderConfirmation />
    )
}

export default CheckoutComplete;