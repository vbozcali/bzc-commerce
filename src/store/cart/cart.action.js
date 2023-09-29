import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
    const indexExistingItem = cartItems.find(({ id }) => id === productToAdd.id);

    if (indexExistingItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    if (cartItemToRemove.quantity == 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}

export const addItemToCart = (cartItems, productToAdd) => {
    const updatedItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedItems);
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const updatedItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedItems);
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const updatedItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedItems);
}

export const toggleCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)