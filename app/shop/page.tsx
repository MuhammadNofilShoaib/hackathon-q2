import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { IoMdOptions } from "react-icons/io";
import { BsFillGridFill } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";
import Item from '@/components/Item';
import { GrTrophy } from "react-icons/gr";
import { GoVerified } from "react-icons/go";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const page = () => (
    <div className='max-w-[1440px] mx-auto'>
        <div className="flex flex-col justify-center items-center bg-[url('/image5.png')] w-screen custom:w-[1440px] h-[316px]">
            <h1 className='font-[500] text-[48px] leading-[72px] text-black'>Shop</h1>
            <div className="flex justify-center items-center gap-1">
                <h1 className='font-[500] text-[16px] leading-6 text-black'>Home</h1>
                <h1 className='flex justify-center items-center'><SlArrowRight className='scale-90' /></h1>
                <h1 className='font-[300] text-[16px] leading-6 text-black'>Shop</h1>
            </div>
        </div>

        <div className="bg-[#F9F1E7] h-full p-4 lg:py-0 lg:h-[100px] flex flex-col lg:flex-row justify-center lg:justify-between items-center px-[56px] mb-[56.6px]">
            <div className="md:flex justify-center items-center gap-[20px] hidden">
                <div className="flex justify-center items-center gap-3">
                    <h1 className='flex justify-center items-center'><IoMdOptions className='scale-[1]' /></h1>
                    <h1 className="font-[400] text-[20px] leading-[30px]">Filter</h1>
                </div>
                <h1 className='flex justify-center items-center'><BsFillGridFill className='scale-[1]' /></h1>
                <h1 className='flex justify-center items-center'><IoMdOptions className='scale-[1]' /></h1>
                <h1 className='flex justify-center items-center'><BsViewList className='scale-[1]' /> </h1>
                <h1 className='flex justify-center items-center font-[700] text-[#9F9F9F] text-[20px]'>|</h1>
                <h1 className='flex justify-center items-center font-[400] text-[#000000] text-[16px] leading-[24px]'>Showing 1–16 of 32 results</h1>

            </div>
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-3">
                <div className="flex justify-center items-center gap-[17px]">
                    <h1 className="font-[400] text-[20px] leading-[30px]">Show</h1>
                    <div className="size-[55px] bg-white font-[400] text-[20px] leading-[30px] flex justify-center items-center text-[#9F9F9F]">16</div>
                </div>
                <div className="flex justify-center items-center gap-[17px]">
                    <h1 className="font-[400] text-[20px] leading-[30px] whitespace-nowrap">Sort by</h1>
                    <div className="h-[55px] w-[188px] bg-white font-[400] text-[20px] leading-[30px] flex pl-[17px] items-center text-[#9F9F9F]">Default</div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-[16] md:grid-cols-2 md:grid-rows-8 lg:grid-cols-3 lg:grid-rows-6 custom:grid-cols-4 custom:grid-rows-4 justify-center items-center gap-[30px] mx-5 md:mx-[56.6px] mb-[56.6px] justify-items-center">
            <Item dis={-30} disCol="#E97171" disVis="flex" imgUrl="/item1.png" heading="Syltherine" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="flex" />

            <Item dis={30} disCol="#E97171" disVis="hidden" imgUrl="/item2.png" heading="Leviosa" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="hidden" />

            <Item dis={-50} disCol="#E97171" disVis="flex" imgUrl="/item3.png" heading="Lolito" heading2="Luxury big sofa" newRate={700000} preRate={3500000} preRateVis="flex" />

            <Item dis="NEW" disCol="#2EC1AC" disVis="flex" imgUrl="/item4.png" heading="Respira" heading2="Outdoor bar table and stool" newRate={500000} preRate={3500000} preRateVis="hidden" />

            <Item dis={-30} disCol="#E97171" disVis="flex" imgUrl="/item1.png" heading="Syltherine" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="flex" />

            <Item dis={30} disCol="#E97171" disVis="hidden" imgUrl="/item2.png" heading="Leviosa" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="hidden" />

            <Item dis={-50} disCol="#E97171" disVis="flex" imgUrl="/item3.png" heading="Lolito" heading2="Luxury big sofa" newRate={700000} preRate={3500000} preRateVis="flex" />

            <Item dis="NEW" disCol="#2EC1AC" disVis="flex" imgUrl="/item4.png" heading="Respira" heading2="Outdoor bar table and stool" newRate={500000} preRate={3500000} preRateVis="hidden" />

            <Item dis={-30} disCol="#E97171" disVis="flex" imgUrl="/item1.png" heading="Syltherine" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="flex" />

            <Item dis={30} disCol="#E97171" disVis="hidden" imgUrl="/item2.png" heading="Leviosa" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="hidden" />

            <Item dis={-50} disCol="#E97171" disVis="flex" imgUrl="/item3.png" heading="Lolito" heading2="Luxury big sofa" newRate={700000} preRate={3500000} preRateVis="flex" />

            <Item dis="NEW" disCol="#2EC1AC" disVis="flex" imgUrl="/item4.png" heading="Respira" heading2="Outdoor bar table and stool" newRate={500000} preRate={3500000} preRateVis="hidden" />

            <Item dis={-30} disCol="#E97171" disVis="flex" imgUrl="/item1.png" heading="Syltherine" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="flex" />

            <Item dis={30} disCol="#E97171" disVis="hidden" imgUrl="/item2.png" heading="Leviosa" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="hidden" />

            <Item dis={-50} disCol="#E97171" disVis="flex" imgUrl="/item3.png" heading="Lolito" heading2="Luxury big sofa" newRate={700000} preRate={3500000} preRateVis="flex" />

            <Item dis="NEW" disCol="#2EC1AC" disVis="flex" imgUrl="/item4.png" heading="Respira" heading2="Outdoor bar table and stool" newRate={500000} preRate={3500000} preRateVis="hidden" />

            <Item dis={-30} disCol="#E97171" disVis="flex" imgUrl="/item1.png" heading="Syltherine" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="flex" />

            <Item dis={30} disCol="#E97171" disVis="hidden" imgUrl="/item2.png" heading="Leviosa" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="hidden" />

            <Item dis={-50} disCol="#E97171" disVis="flex" imgUrl="/item3.png" heading="Lolito" heading2="Luxury big sofa" newRate={700000} preRate={3500000} preRateVis="flex" />

            <Item dis="NEW" disCol="#2EC1AC" disVis="flex" imgUrl="/item4.png" heading="Respira" heading2="Outdoor bar table and stool" newRate={500000} preRate={3500000} preRateVis="hidden" />
        </div>

        <div className="flex justify-center items-end gap-[10px] md:gap-[38px] mb-[56.6px]">
            <div className="size-[40px] md:size-[60px] flex justify-center items-center text-[20px] font-[400] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out rounded-[10px]">1</div>
            <div className="size-[40px] md:size-[60px] flex justify-center items-center text-[20px] font-[400] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out rounded-[10px]">2</div>
            <div className="size-[40px] md:size-[60px] flex justify-center items-center text-[20px] font-[400] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out rounded-[10px]">3</div>
            <div className="w-[80px] h-[40px] md:w-[98px]  md:h-[60px] flex justify-center items-center text-[20px] font-[400] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out rounded-[10px]">Next</div>
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
