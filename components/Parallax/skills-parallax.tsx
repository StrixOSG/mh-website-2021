import { ParallaxLayer } from '@react-spring/parallax';
import React from "react";
import styles from './skills-parallax.module.css';

export default function SkillsParallax() {
    return (
        <div>
            <ParallaxLayer offset={0.65} speed={0.4} className="flex flex-col justify-center xl:flex-row">
                <div className="flex flex-col justify-center order-2 items-center mt-16 xl:mt-0 xl:order-1 xl:mr-32">
                    <img className={`${styles.owl} w-3/12 sm:w-2/12 lg:w-2/12 xl:w-5/12`} src="/owls/owl-hover.svg"/>
                    <img className="w-7/12 sm:w-5/12 lg:w-4/12 xl:w-full" src="/bitmoji/bitmoji-surprise.svg"/>
                </div>
                <div className="flex items-center justify-end text-center text-3xl order-1 xl:order-2 md:text-5xl xl:text-7xl xl:justify-center xl:mr-80">
                    <div className="bg-white rounded-md w-96 h-96">
                        <div className="bg-purple rounded-t-md w-96 h-2"></div>
                        <div className="mt-4 text-4xl text-gray-600">
                            <p>Development</p>
                            <p>Experience</p>
                        </div>
                    </div>
                    <div className="bg-white ml-4 rounded-md w-96 h-96">
                        <div className="bg-teal rounded-t-md w-96 h-2"></div>
                        <div className="mt-4 text-4xl text-gray-600">
                            <p>Design & General</p>
                            <p>Experience</p>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.43} speed={0.6} className="flex justify-end opacity-40">
                <img src="/Cloud-2.svg" className="w-40 mt-16 md:mr-40 md:w-56" />
            </ParallaxLayer>
            <ParallaxLayer offset={0.32} speed={0.6} className="flex justify-center opacity-40">
                <img src="/Cloud-1.svg" className="w-40 mt-32 mr-40 md:w-56" />
            </ParallaxLayer>
        </div>
    );
}