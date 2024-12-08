import React from 'react'

const Footer = () => {
  return (
    <div className='h-[505px] max-w-[1440px] mx-auto border-t border-black/20'>
        <div className="flex flex-col lg:flex-row justify-between items-start bg-white pt-[48px] pb-[36px] mx-5 md:mx-[100px]">
            <div className="flex flex-col justify-start items-start text-start gap-[50px]">
                <h1 className='font-[700] text-[24px] leading-[36px] text-black'>Funiro.</h1>
                <h1 className='font-[400] text-[16px] leading-[24px] text-[#9F9F9F]'>400 University Drive Suite 200 Coral <br /> Gables,<br />
                FL 33134 USA</h1>

            </div>
            <div className="flex  flex-col md:flex-row justify-start items-start gap-[144px]">

                <div className="flex flex-col justify-start items-start gap-[55px]">
                    <h1 className='font-[500] text-[16px] leading-6 text-[#9F9F9F]'>Links</h1>
                    <h1 className='font-[500] text-[16px] leading-6 text-[#000000]'>Home</h1>
                    <h1 className='font-[500] text-[16px] leading-6 text-[#000000]'>Shop</h1>
                    <h1 className='font-[500] text-[16px] leading-6 text-[#000000]'>About</h1>
                    <h1 className='font-[500] text-[16px] leading-6 text-[#000000]'>Contact</h1>


                </div>

                <div className="flex flex-col justify-start items-start gap-[55px]">
                    <h1 className='font-[500] text-[16px] leading-6 text-[#9F9F9F]'>Help</h1>
                    <h1 className='font-[500] text-[16px] leading-6 text-[#000000]'>Payment Options</h1>
                    <h1 className='font-[500] text-[16px] leading-6 text-[#000000]'>Returns</h1>
                    <h1 className='font-[500] text-[16px] leading-6 text-[#000000]'>Privacy Policies</h1>
                </div>

                <div className="flex flex-col justify-start items-start gap-[55px]">
                    <h1 className='font-[500] text-[16px] leading-6 text-[#9F9F9F]'>Newsletter</h1>
                    <div className="flex flex-row md:flex-col lg:flex-row justify-start items-center gap-[20px]">
                        <input type="text" placeholder='Enter Your Email Address' className='w-[200px] border-b border-black' />
                        <h1 className='font-[500] text-[14px] leading-[21px] border-b border-black'>SUBSCRIBE</h1>
                    </div>
                </div>

            </div>
        </div>
        <hr className='mx-5 md:mx-[100px]' />
        <div className="flex justify-start items-center my-[35px] mx-5 md:mx-[100px]">
            <h1 className='font-[400] text-[16px] leading-[24px]'>2023 furino. All rights reverved</h1>
        </div>
      
    </div>
  )
}

export default Footer
