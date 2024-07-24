'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import logo from "../Assets/logo1.png"
import { CiShoppingCart } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { useRef } from 'react';

const NavBar = () => {

  const togglecart = () =>{
    if(ref.current.classList.contains("translate-x-full")){
      ref.current.classList.remove("translate-x-full")
      ref.current.classList.add("translate-x-0")
    }else if(!ref.current.classList.contains("translate-x-full")){
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("translate-x-full")
    }
  }

  const ref = useRef()

  return (
    <div className='flex flex-col justify-center items-center px-1 py-1 m-4 md:flex-row md:justify-start md:items-center shadow-lg bg-gray-200'>
      <Link href={"/"}>
        <div className="logo my-2 mx-5">
          <Image className='border border-gray-200 rounded-full' src={logo} alt="" width={40} height={40}/>
        </div>
      </Link>
      <div className="nav">
        <ul className='flex items-center space-x-5 my-2 mx-2 md:space-x-10 md:text-md'>
          <Link href={"/tshirts"}><li>T-Shirts</li></Link>
          <Link href={"/hoodies"}><li>Hoodies</li></Link>
          <Link href={"/stickers"}><li>Stickers</li></Link>
          <Link href={"/mugs"}><li>Mugs</li></Link>
        </ul>
      </div>
      <div onClick={togglecart} className="cart absolute md:mr-8 top-8 right-7 md:top-10 cursor-pointer text-3xl md:text-2xl">
        <CiShoppingCart />
      </div>

      <div ref={ref} className='w-72 h-full sidecart absolute top-3 right-0 bg-gray-200 border border-1 px-8 py-10 rounded-2xl transform transition-transform translate-x-full z-50'>
        <div className="font-bold text-center text-xl">Sopping Cart</div>
        <div onClick={togglecart} className="absolute top-5 right-2 cursor-pointer text-2xl"><IoIosCloseCircle /></div>
        <ol className='list-decimal flex flex-col'>
          <li>
            <div className='item flex justify-between items-center my-4'>
              <div className='text-sm'>T-Shirt - wear the code</div>
              <div className=' border border-1 flex flex-row justify-between items-center'><FaPlusCircle className='mx-2 cursor-pointer' />1<FaMinusCircle className='mx-2 cursor-pointer' /></div>
            </div>
          </li>
          <li>
            <div className='item flex justify-between items-center my-4'>
              <div className='text-sm'>T-Shirt - wear the code</div>
              <div className=' border border-1 flex flex-row justify-between items-center'><FaPlusCircle className='mx-2 cursor-pointer' />1<FaMinusCircle className='mx-2 cursor-pointer' /></div>
            </div>
          </li>
          <li>
            <div className='item flex justify-between items-center my-4'>
              <div className='text-sm'>T-Shirt - wear the code</div>
              <div className=' border border-1 flex flex-row justify-between items-center'><FaPlusCircle className='mx-2 cursor-pointer' />1<FaMinusCircle className='mx-2 cursor-pointer' /></div>
            </div>
          </li>
          <li>
            <div className='item flex justify-between items-center my-4'>
              <div className='text-sm'>T-Shirt - wear the code</div>
              <div className=' border border-1 flex flex-row justify-between items-center'><FaPlusCircle className='mx-2 cursor-pointer' />1<FaMinusCircle className='mx-2 cursor-pointer' /></div>
            </div>
          </li>
          <li>
            <div className='item flex justify-between items-center my-4'>
              <div className='text-sm'>T-Shirt - wear the code</div>
              <div className=' border border-1 flex flex-row justify-between items-center'><FaPlusCircle className='mx-2 cursor-pointer' />1<FaMinusCircle className='mx-2 cursor-pointer' /></div>
            </div>
          </li>
          <li>
            <div className='item flex justify-between items-center my-4'>
              <div className='text-sm'>T-Shirt - wear the code</div>
              <div className=' border border-1 flex flex-row justify-between items-center'><FaPlusCircle className='mx-2 cursor-pointer' />1<FaMinusCircle className='mx-2 cursor-pointer' /></div>
            </div>
          </li>
        </ol>
        <div className='flex'>
          <button className="flex mr-2 items-center mt-2 text-white bg-indigo-500 border-0 py-3 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">
          <IoBagCheck className='mr-2'/>Checkout
          </button>
          <button className="flex ml-2 items-center mt-2 text-white bg-indigo-500 border-0 py-3 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">
          Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
