"use client";
import React, { useContext } from "react";
import { IoBagCheck } from "react-icons/io5";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import cartContextt from "../context/cart/cartContext";

const page = () => {
  const context = useContext(cartContextt);
  const { cart, addToCart, removeFromCart, subTotal } = context;

  return (
    <div className="container m-auto font-bold">
      <h1 className="text-center m-2">CheckOut</h1>
      <div className="mx-auto flex my-4">
        <div className="p-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="name" className="leading-7 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="email" className="leading-7 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className="mb-2">
          <label htmlFor="address" className="leading-7 text-sm">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="m-auto flex my-4">
        <div className="p-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="phone" className="leading-7 text-sm">
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="city" className="leading-7 text-sm">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="p-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="state" className="leading-7 text-sm">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="pincode" className="leading-7 text-sm">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="w-full sidecart bg-gray-200 p-8 my-4 rounded-2xl">
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
                <div className="item flex space-x-16 items-center my-4">
                  <div className="text-sm">{cart[k].name}</div>
                  <div className="flex flex-row items-center"> 
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
        <div className="total">SubTotal:₹{subTotal}</div>
      </div>
      <div className="m-2 text-sm">
      <button className="flex mr-2 items-center mt-2 text-white bg-indigo-500 border-0 py-3 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">
      <IoBagCheck className='mr-2'/>Pay ₹{subTotal}
      </button>
      </div>
    </div>
  );
};

export default page;
