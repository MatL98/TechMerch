import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateCart = (cart) => {
    const itemsSort = cart.sort((a, b) => (a._id > b._id ? 1 : -1));
    setCart(itemsSort);
  };

  const addToCart = (item) => {
    if (isInCart(item._id)) {
      itemUpdate(item);
    } else {
      updateCart([...cart, item]);
    }
  };

  const removeItem = (idCar) => {
    let itemException = cart.filter((prod) => prod.idcar !== idCar);
    setCart(itemException);
  };

  const isInCart = (id) => cart.some((itm) => itm._id  === id);

  const itemUpdate = (item) => {
    const cartCopy = cart.slice();
    const i = cartCopy.findIndex((itm) => itm._id  === item._id );
    if (cartCopy[i].quantity  === item.quantity ) {
			let newItem = {...item, quantity: item.quantity + 1}
      cartCopy.splice(i, 1, newItem);
      updateCart(cartCopy);
    }
  };

  const cleanCart = () => {
    setCart([]);
  };

  const itemsInCart = () => cart.length < 1;
  const countItems = () => cart.length;

  const totalCart = () => {
    return cart.reduce(
      (acc, prod) => acc + prod.price * prod.quantity,
      0
    );
  };
  const totalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  }; 

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        totalQuantity,
        totalCart,
        isInCart,
        cleanCart,
        itemsInCart,
        countItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
