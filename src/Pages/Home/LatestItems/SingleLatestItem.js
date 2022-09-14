import React from 'react';
import { BsFillCartPlusFill } from "react-icons/bs";

const SingleLatestItem = ({ latestFurniture }) => {
    const { id, picture, name, model, price, warranty, description, deliveryInfo } = latestFurniture;

    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto  my-4">
                <div className="w-full h-64  bg-gray-300 bg-center bg-cover rounded-lg shadow-md " style={{
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
                            <div className="modal-box bg-zinc-200">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle bg-indigo-800 absolute right-2 top-2 hover:bg-red-600 transition hover:scale-110">✕</label>
                                <h3 className="font-bold text-lg text-center rounded-md ">{name}</h3>


                                <ul class="w-auto text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 mt-3">
                                    <li class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">Model : {model}</li>
                                    <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Warranty : {warranty}</li>
                                    <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Delivery : {deliveryInfo}</li>
                                    <li class="py-2 px-4 w-full rounded-b-lg">Description : {description}</li>
                                </ul>

                                <div className="modal-action flex flex-row items-center justify-center">
                                    <button className='bg-indigo-800 rounded px-6 py-2 text-white flex flex-row items-center justify-center transition hover:scale-110'>BUY NOW <BsFillCartPlusFill className='ml-3 text-xl' /></button>
                                </div>
                            </div>
                        </div>
                        {/* modal ends */}
                    </div>


                    <div className=''>
                        <button className="py-1 text-md font-semibold text-white bg-indigo-800  rounded w-full flex flex-row items-center justify-center uppercase transition hover:scale-110">Buy Now <BsFillCartPlusFill className='ml-3 text-xl' /></button>
                    </div>
                </div>
                {/* The button to open modal  */}

            </div>

        </div>
    );
};

export default SingleLatestItem;