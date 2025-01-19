'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    tags: string;
    dicountPercentage: number;
    productImage: string;
    slug: { current: string };
    isNew: boolean;
}

interface ItemProps {
    searchQuery: string;
}

const Item: React.FC<ItemProps> = ({ searchQuery }) => {
    const [sanityData, setSanityData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
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

            const data = await client.fetch(query);
            setSanityData(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    const filteredData = sanityData.filter((product) => {
        const tagsString = Array.isArray(product.tags) ? product.tags.join(", ") : product.tags;
        return (
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tagsString.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-xl font-semibold text-gray-600">
                        Loading products...
                    </h1>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 custom:grid-cols-4 justify-center items-center gap-[30px] mx-5 md:mx-[56.6px] mb-[56.6px] justify-items-center">
                    {filteredData.map((item) => (
                        <div key={item._id}>
                            <Link href={`shop/${item.slug.current}`}>
                                <div className="flex flex-col w-[285px] bg-[#F4F5F7] hover:saturate-200 hover:shadow-lg duration-300 ease-in-out relative">
                                    <div className="size-[48px] rounded-full absolute top-6 left-[213px] flex justify-center items-center bg-red-500">
                                        <h1 className="text-[#fafafa] font-[500] text-[15px] leading-6">
                                            -{item.dicountPercentage}%
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center w-[285px] h-[301px] bg-[#fff3e3] overflow-hidden">
                                        <Image
                                            src={urlFor(item.productImage).url()}
                                            alt={item.title}
                                            width={285}
                                            height={301}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center items-start gap-2 py-2 pl-4 h-[145px]">
                                        <h1 className="font-[600] text-[24px] leading-[28px] text-[#3A3A3A]">
                                            {item.title}
                                        </h1>
                                        <h1 className="font-[500] text-[16px] leading-[24px] text-[#898989]">
                                            This is a {item.title}
                                        </h1>
                                        <div className="flex justify-center items-center gap-4">
                                            <h1 className="font-[600] text-[20px] leading-[30px] text-[#3A3A3A]">
                                                Rs {item.price}
                                            </h1>
                                            <h1 className="font-[400] text-[16px] leading-6 line-through text-[#B0B0B0]">
                                                Rs {item.price + 90}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Item;
