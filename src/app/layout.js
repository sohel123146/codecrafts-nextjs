'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "codecrafts.com - wear the code",
  description: "codecrafts.com - wear the code",
};

export default function RootLayout({ children }) {
  const [cart,setCart] = useState({})
  const [subTotal,setSubTotal] = useState(0)

  const saveCart = (mycart) =>{
    localStorage.setItem('cart',JSON.stringify(mycart)) //storing mycart(obj) with the key 'cart'
  }

  const addToCart = (itemCode,qty,prize,name,szie,variant) => {
    let newCart = {...cart};  //creating copy of the cart states are immutable 
    // checking if the item already exists in the cart
    if(itemCode in cart){
      newCart[itemCode].qty = newCart[itemCode].qty + qty //if items exists then increases the qty
    }else{
      newCart[itemCode] = {qty,prize,name,szie,variant}  //if it dosen't exixts the addeding into the cart
    }
    setCart(newCart)   //finally setting cart state
    saveCart(newCart)  //locally storing cart even if the page gets reload cart state should be in its present tstae
  }



  return (
    <html lang="en">
      <body className={inter.className}>
          <NavBar/>
          {children}
          <Footer/>
        </body>
    </html>
  );
}
