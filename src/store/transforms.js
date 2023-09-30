import { createTransform } from "redux-persist";

const cartTransform = createTransform(
    (inboundState, key) => {
        const { isCartOpen, ...rest } = inboundState;
        return { ...rest };
    }
);

export default cartTransform;


