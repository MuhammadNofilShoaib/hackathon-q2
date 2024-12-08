import Image from 'next/image'
import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { FaRegCircle } from "react-icons/fa";


const page = () => {
    return (
        <div className='max-w-[1440px] mx-auto overflow-hidden'>
            
            <div className="flex flex-col justify-center items-center bg-[url('/image5.png')] w-full custom:w-[1440px] h-[316px] mb-[56.6px]">
                <Image src="/logo.png" alt="logo" width={77} height={77} />
                <h1 className="font-[500] text-[48px] leading-[72px] text-black text-center">Checkout</h1>
                <div className="flex justify-center items-center gap-1 text-center">
                    <h1 className="font-[500] text-[16px] leading-6 text-black">Home</h1>
                    <h1 className="flex justify-center items-center">
                        <SlArrowRight className="scale-90" />
                    </h1>
                    <h1 className="font-[300] text-[16px] leading-6 text-black">Checkout</h1>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row justify-between items-start mx-[20px] md:mx-[100px]">


                <div className="flex flex-col justify-start items-center md:items-start gap-[20px] w-full lg:w-auto mb-[100px]">
                    <h1 className="font-[600] text-[36px] leading-[54px] text-black">Billing details</h1>

                    <div className="flex justify-center items-center gap-[24px]">
                        <div className="flex flex-col justify-center items-start gap-[10px]">
                            <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] capitalize">First name</h1>
                            <input type="text" placeholder="" className="w-full lg:w-[211px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-[10px]">
                            <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] capitalize">last name</h1>
                            <input type="text" placeholder="" className="w-full lg:w-[211px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-[10px]">
                        <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Company Name / Optional</h1>
                        <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-[10px]">
                        <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Country / Region</h1>
                        <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-[10px]">
                        <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Street address</h1>
                        <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-[10px]">
                        <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Town / City</h1>
                        <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-[10px]">
                        <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Province</h1>
                        <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-[10px]">
                        <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">ZIP code</h1>
                        <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-[10px]">
                        <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Phone</h1>
                        <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-[10px]">
                        <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Email address</h1>
                        <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-[10px]">
                        <input type="text" placeholder="Additional information" className="w-full lg:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                    </div>


                </div>

                <div className="w-full xl:w-[533px] h-full lg:h-[616px] flex flex-col justify-start items-start gap-6 lg:mt-[60px] mt-0">
                    <div className="w-full lg:w-[533px] flex justify-between items-center">
                        <h1 className="font-[500] text-[24px] leading-[36px] text-black">Product</h1>
                        <h1 className="font-[500] text-[24px] leading-[36px] text-black">Subtotal</h1>

                    </div>

                    <div className="w-full lg:w-[533px] flex justify-between items-center">
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Asgaard sofa x 1</h1>
                        <h1 className="font-[400] text-[16px] leading-[24px] text-black">Rs. 250,000.00</h1>
                    </div>
                    <div className="w-full lg:w-[533px] flex justify-between items-center">
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[black]">Subtotal</h1>
                        <h1 className="font-[400] text-[16px] leading-[24px] text-black">Rs. 250,000.00</h1>
                    </div>
                    <div className="w-full lg:w-[533px] flex justify-between items-center">
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[black]">Subtotal</h1>
                        <h1 className="font-[700] text-[24px] leading-[38px] text-[#B88E2F]">Rs. 250,000.00</h1>
                    </div>

                    <hr className='w-full lg:w-[533px]' />

                    <div className="flex flex-col justify-start items-start gap-[20px]">
                        <h1 className="font-[400] text-[16px] leading-6 text-black flex justify-center items-center gap-4"><span><GoDotFill className='scale-[2]' /></span>Direct Bank Transfer</h1>

                        <h1 className="font-[300] text-[16px] leading-6 text-[#9F9F9F] text-justify">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</h1>

                        <div className="flex flex-col justify-start items-start gap-[10px]">
                            <h1 className="font-[400] text-[16px] leading-6 text-[#9F9F9F] flex justify-center items-center gap-4"><span><FaRegCircle className='scale-[1]' /></span>Direct Bank Transfer</h1>

                            <h1 className="font-[400] text-[16px] leading-6 text-[#9F9F9F] flex justify-center items-center gap-4"><span><FaRegCircle className='scale-[1]' /></span>Cash On Delivery</h1>
                        </div>

                        <h1 className="font-[300] text-[16px] leading-6 text-[#000000] text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy.</span></h1>

                        <div className="flex justify-center items-center w-full lg:w-[533px] mb-5 lg:mb-0 mt-[19px]">
                            <button className="w-full lg:w-[318px] h-[64px] rounded-[15px] border-[1px] border-black font-[400] text-[20px] leading-[30px]">Place order</button>
                        </div>
                    </div>



                </div>

            </div>
            

            
        </div>
    )
}

export default page
