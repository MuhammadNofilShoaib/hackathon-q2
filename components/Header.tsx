"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import { FiAlignRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";


const Header = () => {

  const [click, setClick] = useState(false);
  const [cartClick, setCartClick] = useState(false);


  const ToogleMenu = () => {
    setClick(!click);
    if (cartClick) setCartClick(false);
  }

  return (
    <div className="md:h-[100px] bg-white max-w-[1440px] mx-auto font-sans text-4xl overflow-hidden">
      <div className="flex justify-between items-center px-[20px] md:px-[54px] py-[29px] ">
        <div className="flex items-center gap-[5px]">
          <Image loading="lazy" src="/logo.png" alt="logo" width={50} height={32} />
          <Link href="/" className="font-[700] text-[34px] text-[#000000] capitalize">FurniAura</Link>
        </div>

        <div className="hidden lg:flex gap-[75px]">
          <Link href="/" className="capitalize font-[500] text-[16px] text-black leading-[24px] hover:underline underline-offset-2 duration-300 ease-in-out">Home</Link>
          <Link href="/shop" className="capitalize font-[500] text-[16px] text-black leading-[24px] hover:underline underline-offset-2 duration-300 ease-in-out">Shop</Link>
          <Link href="/blog" className="capitalize font-[500] text-[16px] text-black leading-[24px] hover:underline underline-offset-2 duration-300 ease-in-out">Blog</Link>
          <Link href="/contact" className="capitalize font-[500] text-[16px] text-black leading-[24px] hover:underline underline-offset-2 duration-300 ease-in-out">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-[45px]">
          <Link href="/checkout"><IoBagCheckOutline className="scale-100 hover:text-orange-400 ease-in-out duration-300" /></Link>
          <Link href="/cart"><BsCart3 className='hover:text-orange-500 ease-in-out duration-300' /></Link>
        </div>

        <div className="lg:hidden flex justify-center items-center">
          <button onClick={ToogleMenu} className={`${click ? "rotate-180" : "rotate-0"} duration-500 ease-in-out`}>
            {click ? <IoClose className='hover:text-red-600 ease-in-out duration-300' /> : <FiAlignRight className='hover:text-orange-400 ease-in-out duration-300' />}
          </button>
        </div>
      </div>

      <div
        className={`${click ? "flex" : "hidden"
          } ease-in-out duration-500 flex flex-col justify-center items-center gap-5 absolute top-[80px] p-3 overflow-hidden bg-white rounded-md border border-black/50 w-full lg:hidden z-40`}
      >
        <Link href="/" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Home</Link>
        <Link href="/shop" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Shop</Link>
        <Link href="/blog" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Blog</Link>
        <Link href="/contact" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Contact</Link>
        <Link href="/cart" className="capitalize font-[500] text-[16px] text-black leading-[24px] flex  justify-center items-center gap-2">Cart <BsCart3 className='hover:text-orange-500 ease-in-out duration-300' /></Link>
        <Link href="/checkout" className="capitalize font-[500] text-[16px] text-black leading-[24px] flex  justify-center items-center gap-2">Checkout <IoBagCheckOutline className="scale-100 hover:text-orange-400 ease-in-out duration-300" /></Link>

      </div>


    </div>


  )
}

export default Header