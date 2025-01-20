"use client";
import React, { useState, useEffect } from 'react';
import { SlArrowRight } from "react-icons/sl";
import { FaStarHalf } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import Image from 'next/image';

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
    quantity: number;
}

interface PageProps {
    params: {
        slug: string;
    };
}

const Page = ({ params }: PageProps) => {
    const [productData, setProductData] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const query = `*[_type == "product" && slug.current == $slug] {
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

            const product = await client.fetch(query, { slug: params.slug });
            setProductData(product[0]);
        };

        fetchProduct();
    }, [params.slug]);

    const addToCart = (id: string) => {
        // Retrieve the cart from localStorage or initialize it as an empty array
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
        // Check if the product already exists in the cart
        const existingProductIndex = savedCart.findIndex((item: { id: string; quantity: number }) => item.id === id);
    
        if (existingProductIndex !== -1) {
            // If the product exists, increase its quantity
            savedCart[existingProductIndex].quantity += 1;
            localStorage.setItem('cart', JSON.stringify(savedCart));
            alert('Product quantity increased!');
        } else {
            // If the product does not exist, add it to the cart with quantity 1
            savedCart.push({ id, quantity: 1 });
            localStorage.setItem('cart', JSON.stringify(savedCart));
            alert('Product added to cart!');
        }
    };
    

    if (!productData) {
        return <div className="text-center py-20">Product not found</div>;
    }


    return (
        <div className='max-w-[1440px] mx-auto overflow-hidden'>

            <div className="h-full md:h-[100px] bg-[#F9F1E7] flex justify-start items-center py-2 md:py-0 px-5 md:px-[100px] gap-[24px] mb-[56.6px]">
                <div className="flex justify-center items-center gap-[20px]">
                    <Link href="/" className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F] hover:underline underline-offset-4 hover:text-black duration-300 ease-in-out">Home</Link>
                    <h1 className="flex justify-center items-center"><SlArrowRight className='scale-[1]' /></h1>
                </div>
                <div className="flex justify-center items-center gap-[20px]">
                    <Link href="/shop" className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F] hover:underline underline-offset-4 hover:text-black duration-300 ease-in-out">Shop</Link>
                    <h1 className="flex justify-center items-center"><SlArrowRight className='scale-[1]' /></h1>
                </div>
                <div className="flex justify-center items-center text-[#9F9F9F] font-[400] ">|</div>
                <div className="font-[400] text-[16px] text-black leading-[24px]">{productData.title}</div>
            </div>

            <div className="flex flex-col lg:flex-row  md:items-start gap-[105px] lg:gap-[10px] xl:gap-[105px] mx-5 md:mx-[100px] lg:mx-2 xl:mx-[100px] mb-[56.6px] lg:w-screen xl:w-full">
                <div className="flex flex-col md:flex-row justify-center items-start gap-[32px]">
                    <div className="grid grid-cols-2 md:grid-cols-1 justify-center items-center gap-[32px] lg:hidden xl:grid">
                        <div className="flex justify-center items-center bg-[#F9F1E7] w-[76px] h-[80px] rounded-[10px]">
                            <Image src={urlFor(productData.productImage).url()} alt={productData.title} width={83} height={55} className='rounded-lg w-full h-full object-cover'></Image>
                        </div>

                        <div className="flex justify-center items-center bg-[#F9F1E7] w-[76px] h-[80px] rounded-[10px]">
                            <Image src={urlFor(productData.productImage).url()} alt={productData.title} width={83} height={55} className='rounded-lg w-full h-full object-cover'></Image>
                        </div>
                        <div className="flex justify-center items-center bg-[#F9F1E7] w-[76px] h-[80px] rounded-[10px]">
                            <Image src={urlFor(productData.productImage).url()} alt={productData.title} width={83} height={55} className='rounded-lg w-full h-full object-cover'></Image>
                        </div>
                        <div className="flex justify-center items-center bg-[#F9F1E7] w-[76px] h-[80px] rounded-[10px]">
                            <Image src={urlFor(productData.productImage).url()} alt={productData.title} width={83} height={55} className='rounded-lg w-full h-full object-cover'></Image>
                        </div>
                    </div>

                    <div className="md:flex justify-center items-center bg-[#F9F1E7] h-[500px] w-[423px] rounded-[10px] hidden">
                        <Image src={urlFor(productData.productImage).url()} alt={productData.title} width={481} height={391} className='rounded-lg w-full h-full object-cover'></Image>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center md:items-start gap-[18px]">
                    <div className="">
                        <h1 className="font-[400] text-[42px] leading-[63px]">{productData.title}</h1>
                        <h1 className="font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">Rs. {productData.price}</h1>
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
                    <h1 className="font-[400] text-[13px] text-black md:text-left text-justify w-screen md:w-full px-4 md:px-0 md:mx-0 lg:w-[400px] custom:w-[424px] mt-3 ">{productData.description}</h1>

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

                        <button onClick={() => addToCart(productData._id)} className="w-[215px] h-[64px] flex justify-center px-3 rounded-[10px] items-center gap-3 border border-[#9F9F9F] bg-white hover:bg-black/10 hover:shadow-lg shadow-black duration-300 ease-in-out">Add To Cart</button>

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
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">{productData.tags}</h1> 
                            <h1 className="font-[400] text-[16px] leading-[24px] text-[#000000] flex justify-center items-center gap-[12px]">
                                <FaFacebook />
                                <FaLinkedin />
                                <FaTwitter />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mb-[56.6px]' />
            <div className="lg:flex flex-col justify-center items-center gap-[37px] mx-[100px] hidden ">
                <div className="flex justify-center items-center gap-[52px]">
                    <h1 className="font-[500] text-[24px] leading-[36px] text-[#000000]">Description</h1>
                    <h1 className="font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">Additional Information</h1>
                    <h1 className="font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">Reviews [5]</h1>

                </div>
                <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F] w-[1026px]">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</h1>
                <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F] w-[1026px]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</h1>

                <div className="flex justify-center gap-[37px] items-center">
                    <div className="bg-[#f9f1e7] rounded-[10px] w-[605px]">
                        <Image src={urlFor(productData.productImage).url()} alt={productData.title} width={605} height={348} className='w-full h-full object-cover rounded-lg'></Image>
                    </div>
                    <div className="bg-[#f9f1e7] rounded-[10px] w-[605px]">
                        <Image src={urlFor(productData.productImage).url()} alt={productData.title} width={605} height={348} className='w-full h-full object-cover rounded-lg saturate-200'></Image>
                    </div>
                </div>

            </div>

            <hr className='my-[56.6px]' />

            <div className="flex justify-center items-center mb-[56.6px]">
            <Link href="/shop" className="w-56 lg:w-[318px] h-[64px] rounded-[15px] border-[1px] border-black/40 font-[400] text-[20px] leading-[30px] text-black/70 hover:text-white hover:bg-black duration-300 ease-in-out flex justify-center items-center">
                Shop more...
            </Link>
            </div>




        </div>
    )
}

export default Page
