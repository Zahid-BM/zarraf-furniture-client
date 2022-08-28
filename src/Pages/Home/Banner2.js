import React from 'react';
import BannerImg from '../../resources/images/banner.jpg'

const Banner2 = () => {
    return (
        <section class="relative bg-white">
            <img
                class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-30 sm:opacity-100"
                src={BannerImg}
                alt="Couple on a bed with a dog"
            />

            <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

            <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
                <div class="max-w-xl text-center sm:text-left">
                    <h1 class="text-3xl font-extrabold sm:text-6xl">
                        Let us find your 
                        <strong class="font-extrabold text-indigo-700 sm:block">
                            Forever Home.
                        </strong>
                    </h1>

                    <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-dark">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>

                    <div class="flex flex-wrap gap-4 mt-8 text-center">
                        <button class="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring" >
                            <span class="absolute inset-y-0 left-0 w-[2px] transition-all bg-indigo-600 group-hover:w-full group-active:bg-indigo-500"></span>

                            <span class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
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