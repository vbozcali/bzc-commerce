import { Route, Routes } from 'react-router-dom';
import CheckoutComplete from '../checkout-complete/checkout-complete.component';
import CheckoutMain from '../checkout-main/checkout-main.component';

const Checkout = () => {
    return (
        <Routes>
            <Route index element={<CheckoutMain />} />
            <Route path="checkoutcomplete" element={<CheckoutComplete />} />
        </Routes>
    )
}

export default Checkout;