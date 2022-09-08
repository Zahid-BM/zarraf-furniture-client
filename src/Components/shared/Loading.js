import React from 'react';
import { Blocks } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='grid place-items-center'>
            <Blocks
                visible={true}
                height="120"
                width="120"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
            <h1 className="text-2xl">Loading...........</h1>
        </div>
    );
};

export default Loading;