import { ParallaxLayer } from '@react-spring/parallax';
import React from "react";
import styles from './skills-parallax.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
SwiperCore.use([Pagination]);
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

export default function SkillsParallax() {
    return (
        <div>
            <ParallaxLayer offset={0.7} speed={0.4} className="grid grid-rows-2 place-items-center xl:grid-cols-2 xl:grid-rows-none">
                <div className="flex flex-col justify-center items-center my-16 xl:mt-0 xl:mr-32">
                    <img className={`${styles.owl} w-3/12 sm:w-2/12 lg:w-2/12 xl:w-5/12 mb-6`} src="/owls/owl-hover.svg"/>
                    <img className="w-7/12 sm:w-5/12 lg:w-4/12 xl:w-full" src="/bitmoji/bitmoji-surprise.svg"/>
                </div>
                <div className="text-center text-3xl md:text-5xl xl:text-7xl">
                    <Swiper slidesPerView={1.5} spaceBetween={40} centeredSlides={true} grabCursor={true} pagination={{"dynamicBullets": true}} breakpoints={{
                            "1024": {
                                "slidesPerView": 1.5,
                                "spaceBetween": 70
                            },
                        }}>
                        <SwiperSlide>
                            <div className="bg-white rounded-md h-96">
                                <div className="bg-purple rounded-t-md w-full h-2"></div>
                                <div className="mt-4 text-xl sm:text-4xl text-gray-600">
                                    <p>Development</p>
                                    <p>Experience</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white rounded-md h-96">
                                <div className="bg-teal rounded-t-md w-full h-2"></div>
                                <div className="mt-4 text-xl sm:text-4xl text-gray-600">
                                    <p>Design & General</p>
                                    <p>Experience</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </ParallaxLayer>

        </div>
    );
}