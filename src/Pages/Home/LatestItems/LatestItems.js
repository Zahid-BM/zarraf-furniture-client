import React from 'react';
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16 ">
                        {

                            allFurniture.map(singleFurniture => <SingleLatestItem
                                key={singleFurniture._id}
                                latestFurniture={singleFurniture}

                            />)
                        }
                    </div> : <Loading />
            }

        </div>
    );
};

export default LatestItems;