import Image from 'next/image';
import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrTrophy } from "react-icons/gr";
import { GoVerified } from "react-icons/go";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import Link from 'next/link';

const page = () => {
    return (
        <div className='max-w-[1440px] mx-auto overflow-hidden'>
            <div className="flex flex-col justify-center items-center bg-[url('/image5.png')] w-full custom:w-[1440px] h-[316px]">
                <Image src="/logo.png" alt="logo" width={77} height={77} />
                <h1 className="font-[500] text-[48px] leading-[72px] text-black text-center">Cart</h1>
                <div className="flex justify-center items-center gap-1 text-center">
                    <h1 className="font-[500] text-[16px] leading-6 text-black">Home</h1>
                    <h1 className="flex justify-center items-center">
                        <SlArrowRight className="scale-90" />
                    </h1>
                    <h1 className="font-[300] text-[16px] leading-6 text-black">Cart</h1>
                </div>
            </div>

            <div className="flex flex-col custom:flex-row justify-between items-start lg:items-center custom:items-start mx-4 lg:mx-[100px] my-[56px] gap-8 lg:gap-0">
                <div className="flex flex-col justify-start items-center gap-[56px] w-full lg:w-auto">
                    <div className="w-full hidden lg:w-[817px] h-[55px] bg-[#F9F1E7] md:flex justify-between items-center px-[30px]">
                        <h1 className="font-[500] text-[16px] leading-6">Product</h1>
                        <h1 className="font-[500] text-[16px] leading-6">Price</h1>
                        <h1 className="font-[500] text-[16px] leading-6">Quantity</h1>
                        <h1 className="font-[500] text-[16px] leading-6">Subtotal</h1>
                    </div>
                    <div className="w-full lg:w-[817px] h-auto flex flex-col md:flex-row justify-between items-center pr-[30px] gap-4 lg:gap-0">
                        <div className="flex justify-start items-center gap-3">
                            <div className="flex justify-center items-center bg-[#F9F1E7] size-[105px] rounded-[10px]">
                                <Image src="/sofa.png" alt="sofa" width={111} height={90} />
                            </div>
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Asgaard sofa</h1>
                        </div>
                        <h1 className="font-[500] text-[16px] leading-6 text-[#9F9F9F]">Rs. 250,000.00</h1>
                        <div className="size-8 border-[1px] border-[#9F9F9F] rounded-[5px] flex justify-center items-center font-[500] text-[16px] leading-6">
                            1
                        </div>
                        <h1 className="font-[400] text-[16px] leading-6 text-[#9F9F9F]">Rs. 250,000.00</h1>
                        <h1>
                            <RiDeleteBinLine className="text-[#B88E2F] scale-150" />
                        </h1>
                    </div>
                </div>

                <div className="w-full lg:w-[393px] h-auto bg-[#F9F1E7] px-[20px] lg:px-[75px] py-3 flex flex-col justify-start items-center">
                    <h1 className="font-[600] text-[32px] leading-[48px] text-black text-center">Cart Totals</h1>
                    <div className="flex justify-between items-center gap-[20px] lg:gap-[50px] mt-[56px] w-full">
                        <h1 className="font-[500] text-[16px] text-black">Subtotal</h1>
                        <h1 className="font-[500] text-[16px] text-[#9F9F9F]">Rs. 250,000.00</h1>
                    </div>
                    <div className="flex justify-between items-center gap-[20px] lg:gap-[50px] mt-[26px] w-full">
                        <h1 className="font-[500] text-[16px] text-black">Total</h1>
                        <h1 className="font-[500] text-[20px] text-[#B88E2F]">Rs. 250,000.00</h1>
                    </div>
                    <Link href="/checkout">
                    <button className="w-[222px] h-[58.95px] border border-black rounded-[15px] mt-[50px]">
                        Check Out
                    </button></Link>
                </div>
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
}

export default page
