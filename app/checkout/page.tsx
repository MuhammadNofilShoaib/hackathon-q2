"use client"
import Image from 'next/image'
import { SlArrowRight } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import React, { useState, useEffect } from "react";
import { urlFor } from '@/sanity/lib/image';

interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    tags: string,
    dicountPercentage: number;
    productImage: string;
    slug: { current: string };
    isNew: boolean,
}


const Page = () => {
    const [sanityData, setSanityData] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<Product[]>([]);

    // Fetch data from Sanity
    useEffect(() => {
        const fetchData = async () => {
            const query = `*[_type == "product"] {
    _id,
    title,
    description,
    productImage,
    price,
    tags,
    dicountPercentage,
    isNew,
    slug
}`;

            const data: Product[] = await client.fetch(query);
            setSanityData(data);
        };

        fetchData();
    }, []);

    // Load cart items from localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]") as string[]; // Assuming _id is string
        const items = savedCart.map((id) => sanityData.find((p) => p._id === id)).filter(Boolean) as Product[];
        setCartItems(items);
    }, [sanityData]);

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cart");
        alert("Your order has been placed!");
    };
    return (
        <div className='max-w-[1440px] mx-auto overflow-hidden'>

            <div className="flex flex-col justify-center items-center bg-[url('/image5.png')] w-full custom:w-[1440px] h-[316px] mb-[56.6px]">
                <Image src="/logo.png" alt="logo" width={77} height={77} />
                <h1 className="font-[500] text-[48px] leading-[72px] text-black text-center">Checkout</h1>
                <div className="flex justify-center items-center gap-1 text-center">
                    <Link href="/" className='font-[500] text-[16px] leading-6 text-black hover:underline underline-offset-4'>Home</Link>
                    <h1 className="flex justify-center items-center">
                        <SlArrowRight className="scale-90" />
                    </h1>
                    <h1 className="font-[300] text-[16px] leading-6 text-black">Checkout</h1>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row justify-center xl:justify-between xl:items-start items-center mx-[20px] md:mx-[100px]">


                <div className="flex flex-col justify-start items-center xl:items-start gap-[20px] w-full lg:w-auto mb-[100px]">
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



                <div className="w-full xl:w-[533px] h-full flex flex-col justify-center items-center gap-6 lg:mt-[60px] mt-0">

                    <div className="w-full lg:w-[533px]">
                        {cartItems.length > 0 ? (
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="bg-[#F9F1E7] rounded-lg text-left">
                                        <th className="px-[10px] py-4 font-[500] text-[24px] leading-[36px] text-black">Product</th>
                                        <th className="px-[10px] py-4 font-[500] text-[24px] leading-[36px] text-black">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item._id} className="border-t">
                                            <td className="flex items-center gap-4 px-[10px] py-4">
                                                <Image
                                                    src={urlFor(item.productImage).url()}
                                                    alt={item.title}
                                                    width={70}
                                                    height={70}
                                                    className="w-[70px] h-[70px] rounded-lg object-cover"
                                                />
                                                <span className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">{item.title}</span>
                                            </td>
                                            <td className="pl-[50px] py-4 font-[400] text-[16px] leading-[24px] text-black">
                                                Rs. {item.price}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr className="border-t">
                                        <td className="px-[10px] py-4 font-[400] text-[24px] leading-[38px] text-black">Total</td>
                                        <td className="px-[10px] py-4 font-[700] text-[22px] sm:text-[24px] leading-[38px] text-[#B88E2F]">Rs. {totalPrice}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        ) : (
                            <p className="text-center">Your cart is empty</p>
                        )}
                    </div>


                    <hr className='w-full lg:w-[533px]' />

                    <div className="flex flex-col justify-start items-start gap-[20px]">
                        <h1 className="font-[400] text-[16px] leading-6 text-black flex justify-center items-center gap-4"><span><GoDotFill className='scale-[2]' /></span>Direct Bank Transfer</h1>

                        <h1 className="font-[300] text-[16px] leading-6 text-[#9F9F9F] text-justify">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</h1>

                       

                        <h1 className="font-[300] text-[16px] leading-6 text-[#000000] text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy.</span></h1>

                        <div className="flex justify-start items-center w-full mb-5 mt-[19px]">
                            <button onClick={clearCart} className="w-full lg:w-[318px] h-[64px] rounded-[15px] border-[1px] border-black font-[400] text-[20px] leading-[30px] hover:text-white hover:bg-black duration-300 ease-in-out">Place order</button>
                        </div>
                    </div>



                </div>

            </div>



        </div>
    )
}

export default Page
