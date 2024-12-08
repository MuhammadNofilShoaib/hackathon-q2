import Image from 'next/image';
import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { FaStarHalf } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Item from '@/components/Item';

const page = () => {
    return (
        <div className='max-w-[1440px] mx-auto overflow-hidden'>
            
            <div className=" h-full md:h-[100px] bg-[#F9F1E7] flex justify-start items-center py-2 md:py-0 px-5 md:px-[100px] gap-[24px] mb-[56.6px]">
                <div className="flex justify-center items-center gap-[20px]">
                    <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Home</h1>
                    <h1 className="flex justify-center items-center"><SlArrowRight className='scale-[1]' /></h1>
                </div>
                <div className="flex justify-center items-center gap-[20px]">
                    <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Shop</h1>
                    <h1 className="flex justify-center items-center"><SlArrowRight className='scale-[1]' /></h1>
                </div>
                <div className="flex justify-center items-center text-[#9F9F9F] font-[400] ">|</div>
                <div className="font-[400] text-[16px] text-black leading-[24px]">Asgaard sofa</div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center md:items-start gap-[105px] lg:gap-[10px] xl:gap-[105px] mx-5 md:mx-[100px] lg:mx-2 xl:mx-[100px] mb-[56.6px] lg:w-screen xl:w-full">
                <div className="flex flex-col lg:flex-row justify-center items-start gap-[32px]">
                    <div className="grid grid-cols-1 grid-rows-4 justify-center items-center gap-[32px] lg:hidden xl:grid">
                        <div className="flex justify-center items-center bg-[#F9F1E7] w-[76px] h-[80px] rounded-[10px]">
                            <Image src="/itemimg1.png" alt='image1' width={83} height={55}></Image>
                        </div>

                        <div className="flex justify-center items-center bg-[#F9F1E7] w-[76px] h-[80px] rounded-[10px]">
                            <Image src="/itemimg1.png" alt='image1' width={83} height={55}></Image>
                        </div>
                        <div className="flex justify-center items-center bg-[#F9F1E7] w-[76px] h-[80px] rounded-[10px]">
                            <Image src="/itemimg1.png" alt='image1' width={83} height={55}></Image>
                        </div>
                        <div className="flex justify-center items-center bg-[#F9F1E7] w-[76px] h-[80px] rounded-[10px]">
                            <Image src="/itemimg1.png" alt='image1' width={83} height={55}></Image>
                        </div>
                    </div>

                    <div className="md:flex justify-center items-center bg-[#F9F1E7] h-[500px] w-[423px] rounded-[10px] hidden">
                        <Image src="/bigpic.png" alt='image2' width={481} height={391}></Image>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center md:items-start gap-[18px]">
                   <div className="">
                   <h1 className="font-[400] text-[42px] leading-[63px]">Asgaard sofa</h1>
                   <h1 className="font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">Rs. 250,000.00</h1>
                   </div>
                    <div className="flex justify-center items-center gap-[20px] mt-2">
                        <div className="flex justify-center items-center gap-1">
                        <FaStar className='scale-[1] text-[#FFC700]' />
                        <FaStar className='scale-[1] text-[#FFC700]' />
                        <FaStar className='scale-[1] text-[#FFC700]' />
                        <FaStar className='scale-[1] text-[#FFC700]' />
                        <FaStarHalf className='scale-[1] text-[#FFC700]' />
                        </div>
                        <div className="font-[400] text-xl text-[#9F9F9F]">|</div>
                        <div className="font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F]">5 Customer Review</div>
                    </div>
                    <h1 className="font-[400] text-[13px] text-black text-center md:text-left w-screen md:w-full mx-5 md:mx-0 custom:w-[424px] mt-3">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</h1>

                    <h1 className="font-[400] text-[14px] leading-[21px] text-[#9F9F9F]">Size</h1>
                    <div className="flex justify-center items-center gap-[12px]">
                        <div className="flex justify-center items-center size-[30px] rounded-[5px] bg-[#F9F1E7] text-black font-[400] text-[13px] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out">XL</div>
                        <div className="flex justify-center items-center size-[30px] rounded-[5px] bg-[#F9F1E7] text-black font-[400] text-[13px] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out">L</div>
                        <div className="flex justify-center items-center size-[30px] rounded-[5px] bg-[#F9F1E7] text-black font-[400] text-[13px] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out">XS</div>
                    </div>

                    <h1 className="font-[400] text-[14px] leading-[21px] text-[#9F9F9F]">Color</h1>
                    <div className="flex justify-center items-center gap-[12px]">
                        <div className="flex justify-center items-center size-[30px] bg-[#816DFA] text-black font-[400] text-[13px] rounded-full hover:ring-1 ring-black duration-300 ease-in-out"></div>
                        <div className="flex justify-center items-center size-[30px] bg-[#000000] text-black font-[400] text-[13px] rounded-full hover:ring-1 ring-black duration-300 ease-in-out"></div>
                        <div className="flex justify-center items-center size-[30px] bg-[#B88E2F] text-black font-[400] text-[13px] rounded-full hover:ring-1 ring-black duration-300 ease-in-out"></div>
                        
                      
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-[12px]">
                        <div className="w-[123px] h-[64px] flex justify-between px-3 rounded-[10px] items-center gap-3 border border-[#9F9F9F] bg-white">
                            <h1 className="font-[500] text-[16px] leading-6">-</h1>
                            <h1 className="font-[500] text-[16px] leading-6">1</h1>
                            <h1 className="font-[500] text-[16px] leading-6">+  </h1>

                        </div>
                        <div className="w-[215px] h-[64px] flex justify-center px-3 rounded-[10px] items-center gap-3 border border-[#9F9F9F] bg-white">Add To Cart</div>

                        <div className="w-[215px] h-[64px] flex justify-center px-3 rounded-[10px] items-center gap-3 border border-[#9F9F9F] bg-white">+ Compare</div>
                    </div>

                    <div className="w-[605.1px] h-[1px] bg-[#D9D9D9] my-[40px]"></div>

                    <div className="flex justify-center items-center gap-[12px]">
                        <div className="flex flex-col justify-start items-start gap-2">
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">SKU</h1>
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Category</h1>
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Tags</h1>
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Share</h1>

                        </div>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">:</h1>
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">:</h1>
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">:</h1>
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">:</h1>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">SS001</h1>
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Sofas</h1>
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Sofa, Chair, Home, Shop</h1>
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#000000] flex justify-center items-center gap-[12px]">
                            <FaFacebook />
                            <FaLinkedin />
                            <FaTwitter />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <hr  className='mb-[56.6px]'/>
            <div className="lg:flex flex-col justify-center items-center gap-[37px] mx-[100px] hidden ">
                <div className="flex justify-center items-center gap-[52px]">
                    <h1 className="font-[500] text-[24px] leading-[36px] text-[#000000]">Description</h1>
                    <h1 className="font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">Additional Information</h1>
                    <h1 className="font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">Reviews [5]</h1>

                </div>
                <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F] w-[1026px]">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</h1>
                <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F] w-[1026px]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</h1>

                <div className="flex justify-center gap-[37px] items-center">
                    <div className="bg-[#f9f1e7] rounded-[10px]">
                    <Image src="/sofa.png" alt='sofa' width={605} height={348}></Image>
                    </div>
                    <div className="bg-[#f9f1e7] rounded-[10px]">
                    <Image src="/sofa.png" alt='sofa' width={605} height={348}></Image>
                    </div>
                </div>
                
            </div>

            <hr  className='my-[56.6px]'/>

            <div className="flex flex-col justify-center items-center gap-[62.5px] mb-[56.6px]">
        <h1 className="font-[700] text-[30px] md:text-[40px] leading-[48px] text-[#3A3A3A]">Related Products</h1>
        <div className="space-y-[30px]">
          <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 custom:grid-cols-4 custom:grid-rows-1 justify-center items-center gap-8">

            <Item dis={-30} disCol="#E97171" disVis="flex" imgUrl="/item1.png" heading="Syltherine" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="flex" />

            <Item dis={30} disCol="#E97171" disVis="hidden" imgUrl="/item2.png" heading="Leviosa" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="hidden" />

            <Item dis={-50} disCol="#E97171" disVis="flex" imgUrl="/item3.png" heading="Lolito" heading2="Luxury big sofa" newRate={700000} preRate={3500000} preRateVis="flex" />

            <Item dis="NEW" disCol="#2EC1AC" disVis="flex" imgUrl="/item4.png" heading="Respira" heading2="Outdoor bar table and stool" newRate={500000} preRate={3500000} preRateVis="hidden" />

          </div>
          <div className="flex justify-center items-center">
            <button className="text-[#B88E2F] font-[600] text-[16px] leading-[24px] w-[245px] h-[48px] border-[1px] border-[#B88E2F]">Show More</button>
          </div>
        </div>

      </div>


        </div>
    )
}

export default page
