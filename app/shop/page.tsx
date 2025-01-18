import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import Item from '@/components/Item';
import { GrTrophy } from "react-icons/gr";
import { GoVerified } from "react-icons/go";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import Link from 'next/link';

const page = () => (
    <div className='max-w-[1440px] mx-auto'>
        <div className="flex flex-col justify-center items-center bg-[url('/image5.png')] w-screen custom:w-[1440px] h-[316px] mb-[56.6px]">
            <h1 className='font-[500] text-[48px] leading-[72px] text-black'>Shop</h1>
            <div className="flex justify-center items-center gap-1">
                <Link href="/" className='font-[500] text-[16px] leading-6 text-black hover:underline underline-offset-4'>Home</Link>
                <h1 className='flex justify-center items-center'><SlArrowRight className='scale-90' /></h1>
                <h1 className='font-[300] text-[16px] leading-6 text-black'>Shop</h1>
            </div>
        </div>

        

        <div className="">
            <Item />
            <Item />
            <Item />
        </div>

        <div className="flex justify-center items-end gap-[10px] md:gap-[38px] mb-[56.6px]">
            <Link href="/shop" className="size-[40px] md:size-[60px] flex justify-center items-center text-[20px] font-[400] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out rounded-[10px]">1</Link>
            <Link href="/shop" className="size-[40px] md:size-[60px] flex justify-center items-center text-[20px] font-[400] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out rounded-[10px]">2</Link>
            <Link href="/shop" className="size-[40px] md:size-[60px] flex justify-center items-center text-[20px] font-[400] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out rounded-[10px]">3</Link>
            <Link href="/shop" className="w-[80px] h-[40px] md:w-[98px]  md:h-[60px] flex justify-center items-center text-[20px] font-[400] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out rounded-[10px]">Next</Link>
        </div>

        <div className="h-full custom:h-[270px] w-full bg-[#FAF3EA] py-[20px] custom:py-[100px] px-[20px] md:px-[53px] flex flex-col lg:flex-row justify-center gap-[30px] md:justify-between items-center">
            <div className="flex justify-center items-center gap-1">
                <h1 className='size-[60px] flex justify-center items-center'><GrTrophy className='scale-[3]' /></h1>
                <div className="flex flex-col justify-center items-start">
                    <h1 className="font-[600] text-[25px] leading-[37.5px] text-[#242424]">High Quality</h1>
                    <h1 className="font-[500] text-[20px] leading-[30px] text-[#898989]">crafted from top materials</h1>

                </div>
            </div>

            <div className="flex justify-center items-center gap-1">
                <h1 className='size-[60px] flex justify-center items-center'><GoVerified className='scale-[3]' /></h1>
                <div className="flex flex-col justify-center items-start">
                    <h1 className="font-[600] text-[25px] leading-[37.5px] text-[#242424]">Warranty Protection</h1>
                    <h1 className="font-[500] text-[20px] leading-[30px] text-[#898989]">Over 2 years</h1>

                </div>
            </div>

            <div className="flex justify-center items-center gap-1">
                <h1 className='size-[80px] flex justify-center items-center'><FaShippingFast className='scale-[4]' /></h1>
                <div className="flex flex-col justify-center items-start">
                    <h1 className="font-[600] text-[25px] leading-[37.5px] text-[#242424]">Free Shipping</h1>
                    <h1 className="font-[500] text-[20px] leading-[30px] text-[#898989]">Order over 150 $</h1>

                </div>
            </div>

            <div className="flex justify-center items-center gap-1">
                <h1 className='size-[80px] flex justify-center items-center'><RiCustomerService2Fill className='scale-[4]' /> </h1>
                <div className="flex flex-col justify-center items-start">
                    <h1 className="font-[600] text-[25px] leading-[37.5px] text-[#242424]">24 / 7 Support</h1>
                    <h1 className="font-[500] text-[20px] leading-[30px] text-[#898989]">Dedicated support</h1>

                </div>
            </div>
        </div>
    </div>
)

export default page
