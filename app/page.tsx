import Item from "@/components/Item";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { SlArrowRight } from "react-icons/sl";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-[20px] md:mx-auto overflow-hidden">

      <div className="bg-[url('/image1.png')] custom:w-[1440px] h-[716.83px] lg:flex lg:justify-center items-center custom:justify-end custom:items-center custom:pr-[56px] mb-[56.6px] hidden lg:w-screen overflow-hidden">
         <div className="custom:bg-[#FFF3E3] lg:bg-[#FFF3E3]/70 w-[643px] h-[443px] lg:absolute lg:backdrop-blur-sm custom:static rounded-[10px] pt-[62px] px-[39px]">
          <h1 className="text-[#333333] font-[600] text-[16px] leading-6 tracking-[3px]">New Arrival</h1>
          <h1 className="text-[#B88E2F] font-[700] text-[52px] leading-[65px] mb-[17px]">Discover Our <br /> New Collection</h1>
          <h1 className="text-[#333333] font-[500] text-[18px] leading-6 mb-[46px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. U <br />t elit tellus, luctus nec ullamcorper mattis.</h1>
          <button className="uppercase w-[222px] h-[74px] py-[25px] px-[72px] bg-[#B88E2F] text-white font-[700] text-[16px]">BUY NOW</button>

        </div>
      </div> 

      <div className="flex flex-col justify-center items-center gap-[62.5px] mb-[56.6px] md:mx-[56px]">

        <div className="flex flex-col justify-center items-center">
          <h1 className="font-[700] text-[32px] leading-[48px] text-[#333333]">Browse The Range</h1>
          <h1 className="font-[400] text-[20px] leading-[30px] text-[#333333] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

        </div>

        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-[20px]">
          <div className="flex flex-col justify-center items-center gap-[30px]">
            <Image src="/sub1.png" alt="image" width={381} height={480} className=""></Image>
            <h1 className="font-[600] text-[24px] leading-[36px] text-center">Dining</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-[30px]">
            <Image src="/sub2.png" alt="image" width={381} height={480} className=""></Image>
            <h1 className="font-[600] text-[24px] leading-[36px] text-center">Living</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-[30px]">
            <Image src="/sub3.png" alt="image" width={381} height={480} className=""></Image>
            <h1 className="font-[600] text-[24px] leading-[36px] text-center">Bedroom</h1>
          </div>
        </div>

      </div>

      <div className="flex flex-col justify-center items-center gap-[62.5px] mb-[56.6px]">
        <h1 className="font-[700] text-[40px] leading-[48px] text-[#3A3A3A]">Our Products</h1>
        <div className="space-y-[30px]">
          <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-3 lg:grid-rows-4 custom:grid-cols-4 custom:grid-rows-2 justify-center items-center gap-8">

            <Item dis={-30} disCol="#E97171" disVis="flex" imgUrl="/item1.png" heading="Syltherine" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="flex" />

            <Item dis={30} disCol="#E97171" disVis="hidden" imgUrl="/item2.png" heading="Leviosa" heading2="Stylish cafe chair" newRate={2500000} preRate={3500000} preRateVis="hidden" />

            <Item dis={-50} disCol="#E97171" disVis="flex" imgUrl="/item3.png" heading="Lolito" heading2="Luxury big sofa" newRate={700000} preRate={3500000} preRateVis="flex" />

            <Item dis="NEW" disCol="#2EC1AC" disVis="flex" imgUrl="/item4.png" heading="Respira" heading2="Outdoor bar table and stool" newRate={500000} preRate={3500000} preRateVis="hidden" />


            <Item dis="NEW" disCol="#2EC1AC" disVis="hidden" imgUrl="/item5.png" heading="Grifo" heading2="Night lamp" newRate={1500000} preRate={3500000} preRateVis="hidden" />

            <Item dis="NEW" disCol="#2EC1AC" disVis="flex" imgUrl="/item6.png" heading="Muggo" heading2="Small Mug" newRate={150000} preRate={3500000} preRateVis="flex" />

            <Item dis={-50} disCol="#E97171" disVis="flex" imgUrl="/item7.png" heading="Pingky" heading2="Cute bed set" newRate={700000} preRate={14000000} preRateVis="flex" />

            <Item dis="NEW" disCol="#2EC1AC" disVis="flex" imgUrl="/item8.png" heading="Potty" heading2="Minimalist flower pot" newRate={500000} preRate={3500000} preRateVis="hidden" />
          </div>
          <div className="flex justify-center items-center">
            <button className="text-[#B88E2F] font-[600] text-[16px] leading-[24px] w-[245px] h-[48px] border-[1px] border-[#B88E2F]">Show More</button>
          </div>
        </div>

      </div>

      <div className="bg-[#FCF8F3] h-[670px] lg:flex justify-between px-[100px] items-center mb-[56.6px] hidden">
        <div className="flex flex-col justify-center items-start gap-[25px]">
          <div className="space-y-1">
            <h1 className="font-[700] text-[40px] leading-[48px] text-[#3A3A3A]">50+ Beautiful rooms <br /> inspiration</h1>
            <h1 className="font-[500] text-[16px] leading-6 text-[#616161]">Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</h1>
          </div>
          <button className="w-[176px] h-[48px] bg-[#B88E2F] text-[16px] text-white font-[600] leading-6">Explore More</button>

        </div>
        <div className="flex justify-center items-start gap-5">
          <div className="flex justify-center items-center bg-[url('/image3.png')] w-[404px] h-[582px] object-cover relative">
            <div className="w-[217px] h-[130px] bg-white/70 absolute top-[428px] left-[28px] flex justify-center items-start flex-col pl-[40px]">
              <h1 className="font-[500] text-[16px] leading-6 text-[#616161]">01 <span>----</span> BedRoom</h1>
              <h1 className="font-[600] text-[28px] leading-[33px] text-[#3A3A3A]">Inner Peace</h1>

            </div>
            <div className="flex justify-center items-center w-[48px] h-[48px] bg-[#B88E2F] text-white absolute bottom-[24px] right-[111px]">
              <GoArrowRight className="scale-[1.5]" />
            </div>

          </div>

          <div className="custom:flex flex-col justify-center gap-[50px] items-start hidden">
            <div className="bg-[url('/image4.png')] w-[372px] h-[486px] relative flex justify-end items-center">
              <div className="size-12 bg-white rounded-full flex justify-center items-center shadow-[0px_4px_14px_1px_#00000050] absolute -right-[20px]"><SlArrowRight className="scale-[1] text-[#B88E2F]" /> </div>
            </div>
            <div className="flex justify-start items-center gap-[20px]">
              <div className="size-[11px] bg-[#D8D8D8] rounded-full hover:bg-[#B88E2F] hover:ring-1 ring-[#B88E2F] ring-offset-4 duration-300 ease-in-out"></div>
              <div className="size-[11px] bg-[#D8D8D8] rounded-full hover:bg-[#B88E2F] hover:ring-1 ring-[#B88E2F] ring-offset-4 duration-300 ease-in-out"></div>
              <div className="size-[11px] bg-[#D8D8D8] rounded-full hover:bg-[#B88E2F] hover:ring-1 ring-[#B88E2F] ring-offset-4 duration-300 ease-in-out"></div>
              <div className="size-[11px] bg-[#D8D8D8] rounded-full hover:bg-[#B88E2F] hover:ring-1 ring-[#B88E2F] ring-offset-4 duration-300 ease-in-out"></div>

            </div>
          </div>
        </div>
      </div>

      <div className="md:flex flex-col justify-center items-center mb-[56.6px] hidden ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#616161] font-[600] text-[20px] text-center leading-[30px] ">Share your setup with </h1>
          <h1 className="text-[#3A3A3A] font-[700] text-[40px] text-center leading-[48px] ">#FuniroFurniture </h1>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/image2.png" alt="image2" width={1799} height={721} className="w-screen custom:w-[1799px]"></Image>
        </div>
      </div>

    </div>
  );
}
