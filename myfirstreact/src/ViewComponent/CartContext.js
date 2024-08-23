// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext({
    cart: {},
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const addToCart = (menuItem) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            updatedCart[menuItem.menuId] = {
                ...menuItem,
                quantity: (updatedCart[menuItem.menuId]?.quantity || 0) + 1,
            };
            return updatedCart;
        });
    };

    const removeFromCart = (menuId) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[menuId]) {
                if (updatedCart[menuId].quantity > 1) {
                    updatedCart[menuId].quantity -= 1;
                } else {
                    delete updatedCart[menuId];
                }
            }
            return updatedCart;
        });
    };

    const clearCart = () => {
        setCart({});
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
