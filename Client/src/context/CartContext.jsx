/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  function removeFromCart(productId) {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
