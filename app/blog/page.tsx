import Image from 'next/image'
import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { HiBookmark } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';

const page = () => (
    <div className='max-w-[1440px] mx-auto'>

        <div className="flex flex-col justify-center items-center bg-[url('/image5.png')] w-screen custom:w-[1440px] h-[316px]">
            <Image src="/logo.png" alt="logo" width={77} height={77} loading="lazy"/>
            <h1 className='font-[500] text-[48px] leading-[72px] text-black'>Blog</h1>
            <div className="flex justify-center items-center gap-1">
                <Link href="/" className='font-[500] text-[16px] leading-6 text-black hover:underline underline-offset-4'>Home</Link>
                <h1 className='flex justify-center items-center'><SlArrowRight className='scale-90' /></h1>
                <h1 className='font-[300] text-[16px] leading-6 text-black'>Blog</h1>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start my-[56.6px] mx-[40px] xl:mx-[100px]">

            <div className="flex flex-col justify-center items-center gap-[56.6px]">

                <div className="flex flex-col justify-start items-start gap-[20px]">
                    <Image src="/blog1.png" alt='blog1' width={817} height={500} loading="lazy"></Image>

                    <div className="flex justify-start items-center gap-[30px]">
                        <div className="flex justify-center items-center gap-[18px]">
                            <h1 className=""><RiAdminFill className='scale-150 text-[#9F9F9F]' /></h1>
                            <h1 className="capitalize font-[400] text-[16px] leading-6 text-[#9F9F9F]">Admin</h1>
                        </div>
                        <div className="flex justify-center items-center gap-[18px]">
                            <h1 className=""><SlCalender className='scale-150 text-[#9f9f9f]' /></h1>
                            <h1 className="capitalize font-[400] text-[16px] leading-6 text-[#9F9F9F]">14 Oct 2022</h1>
                        </div>
                        <div className="flex justify-center items-center gap-[18px]">
                            <h1 className=""><HiBookmark className='scale-150 text-[#9f9f9f]' /></h1>
                            <h1 className="capitalize font-[400] text-[16px] leading-6 text-[#9F9F9F]">Wood</h1>
                        </div>

                    </div>

                    <h1 className="font-[500] text-[30px] leading-[45px] text-black">Going all-in with millennial design</h1>
                    <h1 className="font-[400] text-[15px] leading-[22.5px] text-[#9F9F9F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</h1>
                    <h1 className="font-[400] text-[16px] leading-[24px] text-black underline underline-offset-8">Read more</h1>


                </div>

                <div className="flex flex-col justify-start items-start gap-[20px]">
                    <Image src="/blog2.png" alt='blog2' width={817} height={500} loading="lazy"></Image>

                    <div className="flex justify-start items-center gap-[30px]">
                        <div className="flex justify-center items-center gap-[18px]">
                            <h1 className=""><RiAdminFill className='scale-150 text-[#9F9F9F]' /></h1>
                            <h1 className="capitalize font-[400] text-[16px] leading-6 text-[#9F9F9F]">Admin</h1>
                        </div>
                        <div className="flex justify-center items-center gap-[18px]">
                            <h1 className=""><SlCalender className='scale-150 text-[#9f9f9f]' /></h1>
                            <h1 className="capitalize font-[400] text-[16px] leading-6 text-[#9F9F9F]">14 Oct 2022</h1>
                        </div>
                        <div className="flex justify-center items-center gap-[18px]">
                            <h1 className=""><HiBookmark className='scale-150 text-[#9f9f9f]' /></h1>
                            <h1 className="capitalize font-[400] text-[16px] leading-6 text-[#9F9F9F]">Wood</h1>
                        </div>

                    </div>

                    <h1 className="font-[500] text-[30px] leading-[45px] text-black">Exploring new ways of decorating</h1>
                    <h1 className="font-[400] text-[15px] leading-[22.5px] text-[#9F9F9F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</h1>
                    <h1 className="font-[400] text-[16px] leading-[24px] text-black underline underline-offset-8">Read more</h1>


                </div>

                <div className="flex flex-col justify-start items-start gap-[20px]">
                    <Image src="/blog3.png" alt='blog3' width={817} height={500} loading="lazy"></Image>

                    <div className="flex justify-start items-center gap-[30px]">
                        <div className="flex justify-center items-center gap-[18px]">
                            <h1 className=""><RiAdminFill className='scale-150 text-[#9F9F9F]' /></h1>
                            <h1 className="capitalize font-[400] text-[16px] leading-6 text-[#9F9F9F]">Admin</h1>
                        </div>
                        <div className="flex justify-center items-center gap-[18px]">
                            <h1 className=""><SlCalender className='scale-150 text-[#9f9f9f]' /></h1>
                            <h1 className="capitalize font-[400] text-[16px] leading-6 text-[#9F9F9F]">14 Oct 2022</h1>
                        </div>
                        <div className="flex justify-center items-center gap-[18px]">
                            <h1 className=""><HiBookmark className='scale-150 text-[#9f9f9f]' /></h1>
                            <h1 className="capitalize font-[400] text-[16px] leading-6 text-[#9F9F9F]">Wood</h1>
                        </div>

                    </div>

                    <h1 className="font-[500] text-[30px] leading-[45px] text-black">Handmade pieces that took time to make</h1>
                    <h1 className="font-[400] text-[15px] leading-[22.5px] text-[#9F9F9F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</h1>
                    <h1 className="font-[400] text-[16px] leading-[24px] text-black underline underline-offset-8">Read more</h1>


                </div>


            </div>

            <div className="flex flex-col justify-start items-start">

                <div className="flex justify-between px-4 items-center w-[311px] h-[58px] rounded-[10px] border-[1px] border-[#9F9F9F] mb-[50.6px] mt-8 lg:mt-0">
                    <input type="text" className="" />
                    <h1 className="flex justify-center items-center"><CiSearch className='scale-[2]' /> </h1>
                </div>

                <div className="flex flex-col justify-start items-start gap-[24px] mx-[30px] mb-[50.6px]">
                    <h1 className="font-[500] text-[24px] leading-[36px] text-black">Categories</h1>
                    <div className="flex justify-between items-center w-[251px] ">
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Crafts</h1>
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">2</h1>
                    </div>
                    <div className="flex justify-between items-center w-[251px] ">
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Crafts</h1>
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">2</h1>
                    </div>
                    <div className="flex justify-between items-center w-[251px] ">
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Design</h1>
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">8</h1>
                    </div>
                    <div className="flex justify-between items-center w-[251px] ">
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Handmade</h1>
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">7</h1>
                    </div>
                    <div className="flex justify-between items-center w-[251px] ">
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Interior</h1>
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">1</h1>
                    </div>
                    <div className="flex justify-between items-center w-[251px] ">
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Wood</h1>
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">6</h1>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start gap-[24px] mx-[30px]">
                    <h1 className="font-[500] text-[24px] leading-[36px] text-black">Related</h1>


                    <div className="flex justify-between items-center gap-[24px] w-[252px]">

                        <div className="flex justify-center items-center rounded-[10px]">
                            <Image src="/blog3.png" alt='blog' width={80} height={80} className='w-[80px] h-[80px] rounded-[10px] object-cover' loading="lazy"></Image>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-3">

                            <h1 className="font-[400] text-[14px] leading-[21px]">Modern home in Milan</h1>
                            <h1 className="font-[400] text-[12px] leading-[18px] text-[#9F9F9F]">03 Aug 2022</h1>

                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-[24px] w-[252px]">

                        <div className="flex justify-center items-center rounded-[10px]">
                            <Image src="/blog3.png" alt='blog' width={80} height={80} className='w-[80px] h-[80px] rounded-[10px] object-cover' loading="lazy"></Image>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-3">

                            <h1 className="font-[400] text-[14px] leading-[21px]">Modern home in Milan</h1>
                            <h1 className="font-[400] text-[12px] leading-[18px] text-[#9F9F9F]">03 Aug 2022</h1>

                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-[24px] w-[252px]">

                        <div className="flex justify-center items-center rounded-[10px]">
                            <Image src="/blog3.png" alt='blog' width={80} height={80} className='w-[80px] h-[80px] rounded-[10px] object-cover' loading="lazy"></Image>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-3">

                            <h1 className="font-[400] text-[14px] leading-[21px]">Modern home in Milan</h1>
                            <h1 className="font-[400] text-[12px] leading-[18px] text-[#9F9F9F]">03 Aug 2022</h1>

                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-[24px] w-[252px]">

                        <div className="flex justify-center items-center rounded-[10px]">
                            <Image src="/blog3.png" alt='blog' width={80} height={80} className='w-[80px] h-[80px] rounded-[10px] object-cover' loading="lazy"></Image>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-3">

                            <h1 className="font-[400] text-[14px] leading-[21px]">Modern home in Milan</h1>
                            <h1 className="font-[400] text-[12px] leading-[18px] text-[#9F9F9F]">03 Aug 2022</h1>

                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-[24px] w-[252px]">

                        <div className="flex justify-center items-center rounded-[10px]">
                            <Image src="/blog3.png" alt='blog' width={80} height={80} className='w-[80px] h-[80px] rounded-[10px] object-cover' loading="lazy"></Image>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-3">

                            <h1 className="font-[400] text-[14px] leading-[21px]">Modern home in Milan</h1>
                            <h1 className="font-[400] text-[12px] leading-[18px] text-[#9F9F9F]">03 Aug 2022</h1>

                        </div>
                    </div>

                </div>

            </div>

        </div>

        <div className="flex justify-center items-end gap-[10px] md:gap-[38px] mb-[56.6px]">
            <div className="size-[40px] md:size-[60px] flex justify-center items-center text-[20px] font-[400] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out rounded-[10px]">1</div>
            <div className="size-[40px] md:size-[60px] flex justify-center items-center text-[20px] font-[400] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out rounded-[10px]">2</div>
            <div className="size-[40px] md:size-[60px] flex justify-center items-center text-[20px] font-[400] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out rounded-[10px]">3</div>
            <div className="w-[80px] h-[40px] md:w-[98px]  md:h-[60px] flex justify-center items-center text-[20px] font-[400] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out rounded-[10px]">Next</div>
        </div>

    </div>
)

export default page
