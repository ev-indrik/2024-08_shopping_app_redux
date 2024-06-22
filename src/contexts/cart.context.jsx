import { createContext, useState } from "react";

export const addCartItemHelper = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},

  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpenState, setIsCartOpenState] = useState(false);
  const [cartItemsState, setCartItemsState] = useState([]);

  const addItemToCartSetter = (productToAdd) => {
    const newCartItems = addCartItemHelper(cartItemsState, productToAdd);
    console.log(newCartItems);

    setCartItemsState(newCartItems);
  };

  const value = {
    isCartOpen: isCartOpenState,
    setIsCartOpen: setIsCartOpenState,
    addItemToCart: addItemToCartSetter,
    cartItems: cartItemsState,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
