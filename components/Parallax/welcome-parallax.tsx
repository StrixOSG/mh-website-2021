import { ParallaxLayer } from '@react-spring/parallax';
import React from "react";
import styles from './main-parallax.module.css';

export default function WelcomeParallax() {
    return (
        <div>
            <ParallaxLayer offset={0} speed={0.2} className="flex flex-col xl:flex-row justify-center">
                <div className="flex flex-col justify-center order-2 items-center xl:order-1">
                    <div className={styles.bitmojiSpaceContainer}>
                        <div className={styles.bitmojiSpaceText}>
                            <p className="absolute text-xl left-28 top-10 xl:left-52 xl:text-3xl xl:top-12">Hi, I'm Matt</p>
                        </div>
                        <div className={styles.bitmojiSpace}>
                            <img className="w-7/12 xl:w-full" src="/bitmoji/bitmoji-space.svg"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-end text-3xl order-1 xl:order-2 md:text-5xl lg:text-7xl xl:justify-center">
                    <h1 className="text-white">WEB | APP | GAME</h1>
                    <h1 className="mt-1 text-white">DEVELOPMENT & DESIGNS</h1>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.43} speed={0.6} className="flex justify-end opacity-40">
                <img src="/Cloud-2.svg" className="w-40 mt-16 md:mr-40 md:w-56" />
            </ParallaxLayer>
            <ParallaxLayer offset={0.32} speed={0.6} className="flex justify-center opacity-40">
                <img src="/Cloud-1.svg" className="w-40 mt-32 mr-40 md:w-56" />
            </ParallaxLayer>
        </div>
    )
}