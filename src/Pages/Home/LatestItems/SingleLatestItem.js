import React from 'react';

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
                        <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleLatestItem;