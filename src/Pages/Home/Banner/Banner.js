import React from 'react';

const Banner = () => {
    return (

        <section
            class="overflow-hidden bg-yellow-100 sm:grid sm:grid-cols-2 sm:items-center lg:h-screen"
        >
            <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                <div class="max-w-xl mx-auto text-center sm:text-left">
                    <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    </h2>

                    <p class="hidden text-gray-700 md:mt-4 md:block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                        tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
                        fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
                        duis.
                    </p>

                    <div class="mt-4 md:mt-8">
                        <a
                            href="#"
                            class="relative inline-block group focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            <span
                                class="relative z-10 block px-12 py-3 text-sm font-medium text-white transition bg-gray-900 rounded group-hover:scale-105"
                            >
                                Get Started Today
                            </span>

                            <span
                                class="absolute inset-0 transition scale-105 rounded bg-gray-900/25 -rotate-3 group-hover:rotate-0"
                            ></span>
                        </a>
                    </div>
                </div>
            </div>

            <img
                alt="#"
                src="https://cdn.pixabay.com/photo/2022/01/28/09/26/azadi-tower-6974106_960_720.jpg"
                class="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end border-l-4 border-t-4 border-gray-900"
            />
        </section>

    );
};

export default Banner;