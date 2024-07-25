"use client";
import React, { useState, useEffect } from "react";
import CartContext from "./cartContext";

const CartState = (props) => {
  const [cart, setCart] = useState({}); //initally our cart is an object
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        //if the error occurs at anytime of point i used useEffect so that uses cant struck there aftee reload making cart empty
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      Console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (mycart) => {
    localStorage.setItem("cart", JSON.stringify(mycart)); // storing mycart(obj) with the key 'cart'
    let subt = 0;
    let keys = Object.keys(mycart);
    for (let key of keys) {
        subt += mycart[key].price * mycart[key].qty;
    }
    // console.log(`Subtotal: ${subt}`);
    setSubTotal(subt)
};


  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = { ...cart }; //creating copy of the cart states are immutable
    // checking if the item already exists in the cart
    if (itemCode in cart) {
      newCart[itemCode].qty = newCart[itemCode].qty + qty; //if items exists then increases the qty
    } else {
      newCart[itemCode] = { qty, price, name, size, variant }; //if it dosen't exixts the addeding into the cart
    }
    setCart(newCart); //finally setting cart state
    saveCart(newCart); //locally storing cart even if the page gets reload cart state should be in its present tstae
  };

  const clearCart = () => {
    setCart({}); //making both cart and localstorage clar
    saveCart({});
  };

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = { ...cart }; //creating copy of the cart states are immutable
    // checking if the item already exists in the cart
    if (itemCode in cart) {
      newCart[itemCode].qty = newCart[itemCode].qty - qty; //if items exists then decrease the qty
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]; //if the qty <=0 delete the itemcode to prevent it to from -ve
    }
    setCart(newCart); //finally setting cart state
    saveCart(newCart); //locally storing cart even if the page gets reload cart state should be in its present tstae
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart, subTotal }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
