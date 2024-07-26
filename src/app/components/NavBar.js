"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/logo1.png";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import { useRef } from "react";
import { useContext } from "react";
import cartContext from "../context/cart/cartContext";

const NavBar = () => {
  const context = useContext(cartContext);
  const { cart, addToCart, clearCart, removeFromCart, subTotal } = context;

  const togglecart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();

  return (
    <div className="flex flex-col justify-center items-center px-1 py-1 md:mt-0 mt-0 m-4 md:flex-row md:justify-start md:items-center shadow-lg bg-gray-200 sticky top-0 z-10">
      <Link href={"/"}>
        <div className="logo my-2 mx-5">
          <Image
            className="border border-gray-200 rounded-full"
            src={logo}
            alt=""
            width={40}
            height={40}
          />
        </div>
      </Link>
      <div className="nav">
        <ul className="flex items-center space-x-5 my-2 mx-2 md:space-x-10 md:text-md">
          <Link href={"/tshirts"}>
            <li>T-Shirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div className=" flex items-center cart absolute md:mr-8 top-5 right-4 md:top-5 cursor-pointer text-3xl md:text-2xl">
        <Link href={'/login'}><MdAccountCircle className="mr-2" /></Link>
        <CiShoppingCart onClick={togglecart} />
      </div>

      <div
        ref={ref}
        className="w-72 h-[100vh] sidecart absolute top-0 -right-4 bg-gray-200 border border-1 px-8 py-12 rounded-2xl transform transition-transform translate-x-full"
      >
        <div className="font-bold text-center text-xl">Sopping Cart</div>
        <div
          onClick={togglecart}
          className="absolute top-5 right-2 cursor-pointer text-2xl"
        >
          <IoIosCloseCircle />
        </div>

        <ol className="list-decimal flex flex-col">
          {Object.keys(cart).length === 0 && (
            <div className="my-4 text-base font-semibold">
              your cart is empty!
            </div>
          )}

          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                {" "}
                {/* Object.keys() converts keys into array */}
                <div className="item flex justify-between items-center my-4">
                  <div className="text-sm">{cart[k].name}</div>
                  <div className=" border border-1 flex flex-row justify-between items-center">
                    <FaMinusCircle
                      onClick={() =>
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="mx-2 cursor-pointer"
                    />
                    {cart[k].qty}
                    <FaPlusCircle
                      onClick={() =>
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="mx-2 cursor-pointer"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="total">SubTotal: ₹{subTotal}</div>
        <div className="flex">
          <Link href={"/checkout"}>
            <button className="flex mr-2 items-center mt-2 text-white bg-indigo-500 border-0 py-3 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">
              <IoBagCheck className="mr-2" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex ml-2 items-center mt-2 text-white bg-indigo-500 border-0 py-3 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
