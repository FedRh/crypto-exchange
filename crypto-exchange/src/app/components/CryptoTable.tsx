"use client"
import React, { useEffect, useState } from 'react';

export interface Product {
    symbol: string,
    name: string;
    price: string;
    change: string;
    rank: number;
    iconUrl: string
}

const CryptoTable = () => {



    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        const asyncCall = async () => {

            const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'f67a9ff7f1mshf8394067360d966p1313d8jsnd701481182a6',
                    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                }
            };
            try {
                // fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
                const response = await (await fetch(url, options)).json()
                console.log(response.data.coins)
                setProducts(response.data.coins)
                // setJoke(response)
            } catch (error) {
                console.log("fetch", error)
            }
        }

        asyncCall()

    }, []);


    return (
        <>
            <div className="inline-flex rounded-md shadow-sm">
                <a href="#" aria-current="page" className="px-4 py-1 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-2xl hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-black dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    1h
                </a>
                <a href="#" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-black dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    7h
                </a>
                <a href="#" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-black dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    24h
                </a>
            </div>
            <div className="relative overflow-x-auto  border border-gray-800 rounded-2xl">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-bold text-white">
                                Rank
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold text-white">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold text-white">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold text-white">
                                24h Change
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold text-white">
                                Image
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr
                                key={index}
                                className={`bg-white dark:bg-black hover:bg-gray-800 ${index > 6 ? 'hidden' : ''}`}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {++index}
                                </th>
                                <td className="px-8 py-4">
                                    <div className='flex items-center'>
                                        <img className='mr-5' style={{ width: "2rem", height: "2rem" }} src={product.iconUrl} alt="" /><span className='font-bold text-white text-left'>{product.name} </span> | {product.symbol.toUpperCase()}
                                    </div>
                                </td>
                                <td className="px-8 py-4 font-bold text-white">${product.price}</td>
                                <td className="px-8 py-4">
                                    <p className={` py-2 bg-opacity-75 rounded-lg text-center ${+product.change > 0 ? 'text-green-500 bg-green-700  bg-opacity-20' : 'text-red-500 bg-red-700  bg-opacity-20'}`}>{product.change}%</p>
                                </td>
                                <td className="px-8 py-4">

                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </>
    );
};

export default CryptoTable;
