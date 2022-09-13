import React from 'react';
import { BsFillCartPlusFill } from "react-icons/bs";

const SingleLatestItem = ({ latestFurniture }) => {
    const { id, picture, name, model, price, warranty, description } = latestFurniture;

    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto  my-4">
                <div className="w-full h-64  bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{
                    backgroundImage: `url(${picture})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}></div>

                <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{name}</h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">{price}</span>
                        {/* modal starts */}
                        <label htmlFor="my-modal-3" className="btn btn-xs modal-button px-2 py-1 text-xs font-semibold text-white uppercase hover:bg-indigo-800 bg-zinc-400 rounded border-0">Details</label>
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box bg-gray-100">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle bg-indigo-800 absolute right-2 top-2 hover:bg-red-600">✕</label>
                                <h3 className="font-bold text-lg">{name} Details!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div className="modal-action flex flex-row items-center justify-center">
                                    <button className='bg-indigo-800 hover:bg-green-500 rounded px-6 py-2 text-white flex flex-row items-center justify-center'>BUY NOW <BsFillCartPlusFill className='ml-3 text-xl' /></button>
                                </div>
                            </div>
                        </div>
                        {/* modal ends */}
                    </div>


                    <div className=''>
                        <button className="py-1 text-md font-semibold text-white bg-indigo-800 hover:bg-green-500 rounded w-full flex flex-row items-center justify-center uppercase">Buy Now <BsFillCartPlusFill className='ml-3 text-xl' /></button>
                    </div>
                </div>
                {/* The button to open modal  */}

            </div>

        </div>
    );
};

export default SingleLatestItem;