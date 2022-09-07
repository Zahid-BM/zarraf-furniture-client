import React from 'react';
import UseAllFurniture from '../../../hooks/UseAllFurniture';
import SingleLatestItem from './SingleLatestItem';

const LatestItems = () => {
    const [allFurniture] = UseAllFurniture();
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {
                    allFurniture.map(singleFurniture => <SingleLatestItem
                        key={singleFurniture._id}
                        latestFurniture={singleFurniture}

                    />)
                }
            </div>

        </>
    );
};

export default LatestItems;