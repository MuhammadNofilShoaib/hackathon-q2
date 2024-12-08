"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdContact } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FiAlignRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";



const Header = () => {

    const [click, setClick] = useState(false);
    const [cartClick, setCartClick] = useState(false);


    const ToogleMenu = () => {
        setClick(!click);
      }
    const ToggleCart = () => {
      setCartClick(!cartClick);
    }
  

    return (
        <div className="md:h-[100px] bg-white max-w-[1440px] mx-auto font-sans text-4xl overflow-hidden">
        <div className="flex justify-between items-center px-[20px] md:px-[54px] py-[29px] ">
          <div className="flex items-center gap-[5px]">
            <Image src="/logo.png" alt="logo" width={50} height={32} />
            <h1 className="font-[700] text-[34px] text-[#000000] capitalize">Furniro</h1>
          </div>
      
          <div className="hidden lg:flex gap-[75px]">
            <Link href="/" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Home</Link>
            <Link href="/shop" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Shop</Link>
            <Link href="/blog" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Blog</Link>
            <Link href="/contact" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Contact</Link>
          </div>
      
          <div className="hidden md:flex items-center gap-[45px]">
            <IoMdContact className="w-[23px] h-[18px] scale-[2]" />
            <CiSearch className="scale-100" />
            <CiHeart className="scale-100" />
           <button onClick={ToggleCart}>{cartClick ? <IoClose />  : <BsCart3/>}</button>
          </div>
      
          <div className="lg:hidden flex justify-center items-center">
            <button onClick={ToogleMenu}>
              {click ? <IoClose /> : <FiAlignRight/>}
            </button>
          </div>
        </div>
      
        <div
          className={`${
            click ? "opacity-100" : "opacity-0"
          } ease-in-out duration-300 flex flex-col justify-center items-center gap-5 absolute top-[80px] p-3 bg-white rounded-md border border-black/50 w-full lg:hidden`}
        >
          <Link href="/" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Home</Link>
          <Link href="/shop" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Shop</Link>
          <Link href="/blog" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Blog</Link>
          <Link href="/contact" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Contact</Link>
          <Link href="/cart" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Cart</Link>

        </div>

        <div className={`hidden md:flex flex-col justify-start items-start gap-[24px] ${cartClick ? "opacity-100" : "opacity-0"} ease-in-out duration-300 absolute z-50 bg-white w-[417px] h-[746px] lg:left-[570px] md:left-[320px] px-[23px] py-[28px]`}>
          <div className="flex justify-between items-center w-[350px]">
            <h1 className="font-[600] text-[24px] leading-[36px] text-black">Shopping Cart</h1>
            <button onClick={ToggleCart} className="flex justify-center items-center font-bold text-2xl"><IoClose /></button>
          </div>

          <hr className='w-full' />

          <div className="flex justify-between items-center gap-[24px] w-[350px]">
            <div className="size-[108px] bg-[#B88E2F]/20 flex justify-center items-center rounded-[10px]">
            <Image src="/sofa.png" alt='sofa' width={108} height={108}></Image>
            </div>
            <div className="flex flex-col justify-start items-start">
              <h1 className="font-[400] text-[16px] leading-6 text-black">Asgaard sofa</h1>
              <div className="flex justify-start items-center gap-2">
              <h1 className="font-[300] text-[16px] leading-6 text-black">1</h1>
              <h1 className="font-[300] text-[16px] leading-6 text-black">X</h1>
              <h1 className="font-[500] text-[12px] leading-[18px] text-[#B88E2F]">Rs. 250,000.00</h1>
              </div>
            </div>
            <div className="flex justify-center items-center">
            <IoMdCloseCircle className='text-black/50' /></div>
          </div>

          <div className="flex justify-between items-center gap-[24px] w-[350px]">
            <div className="size-[108px] bg-[#B88E2F]/20 flex justify-center items-center rounded-[10px]">
            <Image src="/sofa.png" alt='sofa' width={108} height={108}></Image>
            </div>
            <div className="flex flex-col justify-start items-start">
              <h1 className="font-[400] text-[16px] leading-6 text-black">Asgaard sofa</h1>
              <div className="flex justify-start items-center gap-2">
              <h1 className="font-[300] text-[16px] leading-6 text-black">1</h1>
              <h1 className="font-[300] text-[16px] leading-6 text-black">X</h1>
              <h1 className="font-[500] text-[12px] leading-[18px] text-[#B88E2F]">Rs. 250,000.00</h1>
              </div>
            </div>
            <div className="flex justify-center items-center">
            <IoMdCloseCircle className='text-black/50' /></div>
          </div>

          <hr className='w-full absolute bottom-[84px]' />

          <div className="flex justify-between items-center w-[350px] absolute bottom-[30px]">
            <Link href="/cart">
            <button className="py-[6px] px-[30px] rounded-[50px] border border-black font-[400] text-[12px] leading-[18px]">Cart</button></Link>
            <Link href="/">
            <button className="py-[6px] px-[30px] rounded-[50px] border border-black font-[400] text-[12px] leading-[18px]">Checkpoint</button></Link>
            <Link href="/">
            <button className="py-[6px] px-[30px] rounded-[50px] border border-black font-[400] text-[12px] leading-[18px]">Comparison</button></Link>
          </div>
        </div>
      </div>
      

    )
}

export default Header
