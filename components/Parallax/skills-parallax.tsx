import { ParallaxLayer } from '@react-spring/parallax';
import React from "react";
import styles from './skills-parallax.module.css';

export default function SkillsParallax() {
    return (
        <div>
            <ParallaxLayer offset={0.9} speed={1} className="grid grid-rows-1 place-items-center xl:grid-cols-2 xl:grid-rows-none">
                <div className="hidden xl:flex xl:flex-col xl:justify-center xl:items-center xl:my-16 xl:mt-0 xl:mr-32">
                    <img className={`${styles.owl} w-3/12 sm:w-2/12 lg:w-2/12 xl:w-5/12 mb-6`} src="/owls/owl-hover.svg" />
                    <img className="w-7/12 sm:w-5/12 lg:w-4/12 xl:w-full" src="/bitmoji/bitmoji-surprise.svg" />
                </div>
                <div className="text-center text-3xl px-4 md:text-5xl xl:justify-self-start md:flex xl:text-7xl">
                    <div className="bg-white rounded-md h-96 w-72 mt-4 md:mt-0 md:mr-4">
                        <div className="bg-purple rounded-t-md h-2"></div>
                        <div className="mt-4 text-xl sm:text-4xl text-gray-600">
                            <p>Development</p>
                            <p>Experience</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md h-96 w-72 mt-4 md:mt-0">
                        <div className="bg-teal rounded-t-md h-2"></div>
                        <div className="mt-4 text-xl sm:text-4xl text-gray-600">
                            <p>Design & General</p>
                            <p>Experience</p>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

        </div>
    );
}