import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../Components/shared/Loading';
import UseAllFurniture from '../../../hooks/UseAllFurniture';
import SingleLatestItem from './SingleLatestItem';

const LatestItems = () => {
    const [allFurniture] = UseAllFurniture();
    return (
        <div className='container mx-auto my-16'>
            <div class="text-center">
                <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

                <p class="max-w-lg mx-auto mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                    quia tempore delect
                </p>

            </div>
            {
                allFurniture.length ?
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 ">
                        {

                            allFurniture.map(singleFurniture => <SingleLatestItem
                                key={singleFurniture._id}
                                latestFurniture={singleFurniture}

                            />)
                        }
                    </div> : <Loading />
            }

            <div className='text-center'>
                <Link to={'/allFurniture'}>
                    <button class="inline-flex items-center px-8 py-3 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
                        <span class="text-sm font-medium">
                            All Furniture
                        </span>

                        <svg class="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LatestItems;