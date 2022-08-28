import React from 'react';
import BannerImg from '../../resources/images/banner.jpg'

const Banner2 = () => {
    return (
        <section className="relative bg-blue-100">
            <img
                className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-30 sm:opacity-100"
                src={BannerImg}
                alt="Couple on a bed with a dog"
            />

            <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-blue-100 sm:to-transparent"></div>

            <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-6xl">
                        Let us find your <br />
                        <strong className="font-extrabold text-indigo-700 sm:block">
                            Forever Home.
                        </strong>
                    </h1>

                    <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-dark">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="mt-8 text-center sm:text-left">
                        <button className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring" >
                            <span className="absolute inset-y-0 left-0 w-[2px] transition-all bg-indigo-600 group-hover:w-full group-active:bg-indigo-500"></span>

                            <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                                Download
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner2;