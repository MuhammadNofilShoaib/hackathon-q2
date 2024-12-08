import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Item {
    dis: string | number,
    disVis: string,
    disCol: string,
    imgUrl: string,
    heading: string,
    heading2: string,
    newRate: number,
    preRate: number,
    preRateVis: string
}

const Item = ({ dis, disVis, disCol, imgUrl, heading, heading2, newRate, preRate, preRateVis }: Item) => {
    return (
        <div>
          <Link href="/item">
          <div className="flex flex-col  w-[285px] bg-[#F4F5F7] hover:saturate-200 hover:shadow-lg duration-300 ease-in-out relative">
                <div className={`size-[48px] rounded-full absolute top-6 left-[213px] ${disVis} justify-center items-center`} style={{ backgroundColor: disCol }}>
                    <h1 className={`text-[#fafafa] font-[500] text-[16px] leading-6`}>{dis}</h1>
                </div>
                <Image src={imgUrl} alt="ima" width={285} height={301}></Image>
                <div className="flex flex-col justify-center items-start gap-2 py-2 pl-4 h-[145px]">
                    <h1 className="font-[600] text-[24px] leading-[28px] text-[#3A3A3A]">{heading}</h1>
                    <h1 className="font-[500] text-[16px] leading-[24px] text-[#898989]">{heading2}</h1>
                    <div className="flex justify-center items-center gap-4">
                        <h1 className="font-[600] text-[20px] leading-[30px] text-[#3A3A3A]">Rp {newRate}</h1>
                        <h1 className={`font-[400] text-[16px] leading-6 line-through text-[#B0B0B0] ${preRateVis}`}>Rp {preRate}</h1>
                    </div>
                </div>
            </div></Link>
        </div>
    )
}

export default Item
