/* eslint-disable react/prop-types */

import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  //   function to add to cart and check if the product exists
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        // If the product already exists in the cart, increase its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        // Otherwise, add the product to the cart with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  //   remove from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  //   increase or decreace quantity
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      return prevCart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      );
    });
  };

  //   clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Logout
  const logout = () => {
    setUser(null);
    // Redirect to sign-in page
    window.location.href = "/signin";
  };

  // { cart, setCart, user, setUser, logout }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
