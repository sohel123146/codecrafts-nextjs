import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import logo from "../Assets/logo1.png"
import { CiShoppingCart } from "react-icons/ci";
const NavBar = () => {
  return (
    <div className='flex flex-col justify-center items-center px-2 py-2 m-4 md:flex-row md:justify-start md:items-center'>
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
      <div className="cart absolute top-8 right-7 md:top-10">
        <CiShoppingCart className='text-5xl md:text-2xl'/>
      </div>
    </div>
  )
}

export default NavBar
