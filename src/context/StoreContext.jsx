import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: 1, // increment item count or add it if it doesn't exist
      }
    ));
    } else{
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId]+1, // increment item count or add it if it doesn't exist
      }
    ));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 }; // decrement item count if greater than 1
      } else {
        const { [itemId]: _, ...rest } = prev; // remove item when its count is 0
        return rest;
      }
    });
  };

  useEffect(() => {

  }, [cartItems]

  )

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
  };

  const updateCartItemQuantity = (itemId, quantity) => {
    if (quantity === 0) {
      setCartItems((prev) => {
        const { [itemId]: _, ...rest } = prev; // Remove item if quantity is 0
        return rest;
      });
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: quantity, // Update item quantity directly
      }));
    }
  };
  

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
