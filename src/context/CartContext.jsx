import React, { useContext, useState } from 'react';
import { getFromLocalStorage } from '../utils/addToLocalStorage';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cartArr, setCartArr] = useState(
        localStorage.getItem('items') ? getFromLocalStorage() : []
    );
    return (
        <CartContext.Provider
            value={{ cartArr: cartArr, setCartArr: setCartArr }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
