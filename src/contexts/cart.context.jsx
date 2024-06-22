import { createContext, useState, useEffect } from "react";

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

  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpenState, setIsCartOpenState] = useState(false);
  const [cartItemsState, setCartItemsState] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItemsState.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItemsState]);

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
    cartCount: cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
