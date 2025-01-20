"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SlArrowRight } from 'react-icons/sl';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrTrophy } from 'react-icons/gr';
import { GoVerified } from 'react-icons/go';
import { FaShippingFast } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
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
    quantity: number;
}


export default function CartPage() {
    const [sanityData, setSanityData] = useState<Product[]>([]);
    const [cart, setCart] = useState<{ id: string; quantity: number }[]>([]);
    const [cartItems, setCartItems] = useState<(Product & { quantity: number })[]>([]);

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

            const data: Product[] = await client.fetch(query); // Replace `client` with your actual Sanity client
            setSanityData(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const savedCart: { id: string; quantity: number }[] = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(savedCart);

        const items = savedCart
            .map((cartItem) => {
                const product = sanityData.find((p) => p._id === cartItem.id);
                if (product) {
                    return { ...product, quantity: cartItem.quantity };
                }
                return null;
            })
            .filter((item): item is Product & { quantity: number } => Boolean(item)); // Type guard
        setCartItems(items);
    }, [sanityData]);

    const updateQuantity = (id: string, quantity: number) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        const updatedItems = updatedCart
            .map((cartItem) => {
                const product = sanityData.find((p) => p._id === cartItem.id);
                if (product) {
                    return { ...product, quantity: cartItem.quantity };
                }
                return null;
            })
            .filter((item): item is Product & { quantity: number } => Boolean(item));
        setCartItems(updatedItems);
    };

    const removeFromCart = (id: string) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        const updatedItems = updatedCart
            .map((cartItem) => {
                const product = sanityData.find((p) => p._id === cartItem.id);
                if (product) {
                    return { ...product, quantity: cartItem.quantity };
                }
                return null;
            })
            .filter((item): item is Product & { quantity: number } => Boolean(item));
        setCartItems(updatedItems);
    };

    const clearCart = () => {
        setCart([]);
        setCartItems([]);
        localStorage.removeItem("cart");
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="max-w-[1440px] mx-auto overflow-hidden">
            <div className="flex flex-col justify-center items-center bg-[url('/image5.png')] w-full custom:w-[1440px] h-[316px]">
                <Image src="/logo.png" alt="logo" width={77} height={77} />
                <h1 className="font-[500] text-[48px] leading-[72px] text-black text-center">Cart</h1>
                <div className="flex justify-center items-center gap-1 text-center">
                    <Link href="/" className='font-[500] text-[16px] leading-6 text-black hover:underline underline-offset-4'>Home</Link>
                    <h1 className="flex justify-center items-center">
                        <SlArrowRight className="scale-90" />
                    </h1>
                    <h1 className="font-[300] text-[16px] leading-6 text-black">Cart</h1>
                </div>
            </div>

            <div className="flex flex-col custom:flex-row justify-between items-start lg:items-center custom:items-start mx-4 lg:mx-[100px] lg:gap-5 my-[56px] gap-8 xl:gap-0">
                <div className="flex flex-col justify-start items-center gap-[56px] w-full lg:w-auto">
                    {cartItems.length > 0 ? (
                        <div className="overflow-x-auto w-full">
                            <table className="w-full lg:w-[817px] table-auto bg-[#F9F1E7] rounded-lg">
                                <thead>
                                    <tr className="h-[55px] bg-[#F9F1E7] rounded-lg text-left">
                                        <th className="px-2 sm:px-4 lg:px-[30px] py-2 font-[500] text-[14px] lg:text-[16px] leading-6">Product</th>
                                        <th className="px-2 sm:px-4 lg:px-[30px] py-2 font-[500] text-[14px] lg:text-[16px] leading-6">Quantity</th>
                                        <th className="px-2 sm:px-4 lg:px-[30px] py-2 font-[500] text-[14px] lg:text-[16px] leading-6">Price</th>
                                        <th className="px-2 sm:px-4 lg:px-[30px] py-2 font-[500] text-[14px] lg:text-[16px] leading-6">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item._id} className="border-t">
                                            <td className="flex flex-col md:flex-row items-start md:items-center gap-2 px-2 sm:px-4 lg:px-[30px] py-4">
                                                <Image
                                                    src={urlFor(item.productImage).url()}
                                                    alt={item.title}
                                                    width={70}
                                                    height={70}
                                                    className="w-[70px] h-[70px] rounded-lg object-cover border border-[#9F9F9F]"
                                                />
                                                <span className="font-[400] text-[14px] lg:text-[16px] leading-[24px] text-[#9F9F9F]">
                                                    {item.title}
                                                </span>
                                            </td>
                                            <td className="px-2 sm:px-4 lg:px-[30px] py-4 font-[500] text-[14px] lg:text-[16px] leading-6 text-[#9F9F9F]">
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    min={1}
                                                    onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                                                    className="py-2 w-16 lg:w-20 bg-[#f9f1e7] border border-black/40 flex justify-center items-center rounded-md px-2"
                                                />
                                            </td>
                                            <td className="px-2 sm:px-4 lg:px-[30px] py-4 font-[500] text-[14px] lg:text-[16px] leading-6 text-[#9F9F9F]">
                                                Rs. {item.price * item.quantity}
                                            </td>
                                            <td className="px-2 sm:px-4 lg:pl-[50px] py-4">
                                                <button onClick={() => removeFromCart(item._id)} className="flex justify-center items-center">
                                                    <RiDeleteBinLine className="text-[#B88E2F] scale-150 hover:text-red-700 hover:shadow-red-700 shadow-lg rounded-sm hover:rotate-12 duration-300 ease-in-out hover:scale-[2]" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    ) : (
                        <p className="text-center">Your cart is empty !</p>
                    )}
                </div>


                <div className="w-full lg:w-[393px] h-auto bg-[#F9F1E7] rounded-lg px-[20px] lg:px-[75px] py-3 flex flex-col justify-start items-center">
                    <h1 className="font-[600] text-[32px] leading-[48px] text-black text-center">Cart Totals</h1>
                    <div className="flex justify-between items-center gap-[20px] lg:gap-[50px] mt-[56px] w-full">
                        <h1 className="font-[500] text-[16px] text-black">Subtotal</h1>
                        <h1 className="font-[500] text-[16px] text-[#9F9F9F]">Rs. {totalPrice}</h1>
                    </div>
                    <div className="flex justify-between items-center gap-[20px] lg:gap-[50px] mt-[26px] w-full">
                        <h1 className="font-[500] text-[16px] text-black">Total</h1>
                        <h1 className="font-[500] text-[20px] text-[#B88E2F]">Rs. {totalPrice}</h1>
                    </div>
                    <Link href="/checkout">
                        <button className="w-[222px] h-[58.95px] border border-black rounded-[15px] mt-[50px] hover:bg-black hover:text-white ease-in-out duration-300">
                            Check Out
                        </button>
                    </Link>
                    <button onClick={clearCart} className="w-[222px] h-[58.95px] border border-red-500 rounded-[15px] mt-[10px] text-red-500 hover:bg-red-500 hover:text-white ease-in-out duration-300">
                        Clear Cart
                    </button>
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

    );
}

