import Image from 'next/image'
import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { GrTrophy } from "react-icons/gr";
import { GoVerified } from "react-icons/go";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const page = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>

            <div className="flex flex-col justify-center items-center bg-[url('/image5.png')] w-full custom:w-[1440px] h-[316px] mb-[98px] px-4 sm:px-8">
                <Image src="/logo.png" alt="logo" width={77} height={77} />
                <h1 className="font-[500] text-[36px] sm:text-[48px] leading-[54px] sm:leading-[72px] text-black text-center">Contact</h1>
                <div className="flex justify-center items-center gap-1 text-center">
                    <h1 className="font-[500] text-[14px] sm:text-[16px] leading-6 text-black">Home</h1>
                    <h1 className="flex justify-center items-center">
                        <SlArrowRight className="scale-90" />
                    </h1>
                    <h1 className="font-[300] text-[14px] sm:text-[16px] leading-6 text-black">Contact</h1>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center px-4 sm:px-8">
                <div className="flex flex-col justify-center items-center text-center mb-[40px] sm:mb-[133px]">
                    <h1 className="font-[600] text-[28px] sm:text-[36px] leading-[42px] sm:leading-[54px] text-black">Get In Touch With Us</h1>
                    <h1 className="font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#9F9F9F]">
                        For More Information About Our Product & Services. Please Feel Free To Drop Us <br className="hidden sm:block" />
                        An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[1058px] mb-[40px] sm:mb-[63px] gap-8 lg:gap-0">
                    <div className="flex flex-col justify-start items-start gap-[42px]">
                        <div className="flex justify-center items-start gap-[25px]">
                            <h1><IoLocationSharp className="scale-[1.5] sm:scale-[2]" /></h1>
                            <div className="flex flex-col justify-start items-start">
                                <h1 className="font-[500] text-[20px] sm:text-[24px] leading-[28px] sm:leading-[36px] text-black">Address</h1>
                                <h1 className="font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
                                    236 5th SE Avenue, New <br />
                                    York NY10000, United <br />
                                    States
                                </h1>
                            </div>
                        </div>

                        <div className="flex justify-center items-start gap-[25px]">
                            <h1><IoCall className="scale-[1.5] sm:scale-[2]" /></h1>
                            <div className="flex flex-col justify-start items-start">
                                <h1 className="font-[500] text-[20px] sm:text-[24px] leading-[28px] sm:leading-[36px] text-black">Phone</h1>
                                <h1 className="font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
                                    Mobile: +(84) 546-6789 <br />
                                    Hotline: +(84) 456-6789
                                </h1>
                            </div>
                        </div>

                        <div className="flex justify-center items-start gap-[25px]">
                            <h1><FaClock className="scale-[1]" /></h1>
                            <div className="flex flex-col justify-start items-start">
                                <h1 className="font-[500] text-[20px] sm:text-[24px] leading-[28px] sm:leading-[36px] text-black">Hours</h1>
                                <h1 className="font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
                                    Mon-Fri: 9:00am - 6:00pm <br />
                                    Sat-Sun: Closed
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-[20px] w-full lg:w-auto">
                        <div className="flex flex-col justify-center items-start gap-[10px]">
                            <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Your name</h1>
                            <input type="text" placeholder="Abc" className="w-full lg:w-[528.75px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                        </div>

                        <div className="flex flex-col justify-center items-start gap-[10px]">
                            <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Email address</h1>
                            <input type="text" placeholder="Abc@def.com" className="w-full lg:w-[528.75px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                        </div>

                        <div className="flex flex-col justify-center items-start gap-[10px]">
                            <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Subject</h1>
                            <input type="text" placeholder="This is optional" className="w-full lg:w-[528.75px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                        </div>

                        <div className="flex flex-col justify-center items-start gap-[10px]">
                            <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Message</h1>
                            <input type="text" placeholder="Hi! I’d like to ask about" className="w-full lg:w-[528.75px] h-[120px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
                        </div>

                        <button className="bg-[#B88E2F] w-full lg:w-[237px] h-[55px] rounded-[5px] border-[1px] text-white font-[400] text-[14px] sm:text-[16px] leading-6">Submit</button>
                    </div>
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
