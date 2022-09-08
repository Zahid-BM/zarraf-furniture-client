import React from 'react';
import { BsFillCartPlusFill } from "react-icons/bs";

const SingleLatestItem = ({ latestFurniture }) => {
    const { id, picture, name, model, price, warranty, description } = latestFurniture;
    return (
        <div>
            <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto hover:transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300 my-4">
                <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{
                    backgroundImage: `url(${picture})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}></div>

                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{name}</h3>

                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span class="font-bold text-gray-800 dark:text-gray-200">{price}</span>
                        <button class="px-2 py-1 text-xs font-semibold text-white uppercase bg-indigo-800 rounded">Details</button>
                    </div>
                    <div className=''>
                        <button class="py-1 text-md font-semibold text-white bg-indigo-800 rounded w-full flex flex-row items-center justify-center uppercase">Buy Now <BsFillCartPlusFill className='ml-3 text-xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleLatestItem;