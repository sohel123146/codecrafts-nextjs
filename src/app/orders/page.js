"use client";
import Image from "next/image";
import React, { useContext } from "react";
import cartContext from "../context/cart/cartContext";

const page = () => {
  const context = useContext(cartContext);
  const { cart, subTotal } = context;
  return (
    <>
      {Object.keys(cart).length === 0 ? (
        <div className="h-[100vh] flex justify-center items-center text-xl font-bold">No orders placed</div>
      ) : (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  CODECRAFTS.COM
                </h2>
                <h1 className="text-green-900 text-3xl title-font font-medium mb-2">
                  Order ID: #82213
                </h1>
                <p className="leading-relaxed mb-2">
                  Your order has been successfully placed
                </p>
                <div className="flex mb-4">
                  <a className="flex-grow text-indigo-500 border-indigo-500 py-2 text-lg px-1">
                    Item Description
                  </a>
                  <a className="flex-grow text-center border-gray-300 py-2 text-lg px-1">
                    Quantity
                  </a>
                  <a className="flex-grow text-center border-gray-300 py-2 text-lg px-1">
                    Price
                  </a>
                </div>

                {Object.keys(cart).map((k) => (
                  <div key={k} className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">{cart[k].name}</span>
                    <span className="ml-auto text-gray-500">{cart[k].qty}</span>
                    <span className="ml-auto text-gray-900">
                      {cart[k].price}
                    </span>
                  </div>
                ))}

                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ₹{subTotal}
                  </span>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Track Order
                  </button>
                </div>
              </div>
              <Image
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://dummyimage.com/100x100"
                width={100}
                height={100}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default page;
