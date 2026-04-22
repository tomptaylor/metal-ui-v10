import { atom } from 'nanostores';

export const cartItems = atom<number>(0);

// Ensure this name matches what the component imports
export const addToCart = () => {
    cartItems.set(cartItems.get() + 1);
};