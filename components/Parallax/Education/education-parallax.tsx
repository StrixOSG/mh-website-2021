import { ParallaxLayer } from '@react-spring/parallax';
import React from "react";
import { IconPath } from '../../../constants/icon-path';
import Icon from '../../Shared/icon';
import Fire from '../../Shared/Particles/Fire/fire';
import styles from './education-parallax.module.css';

export default function EducationParallax() {
    return (
        <div>
            <ParallaxLayer offset={1} speed={1} className="flex justify-center items-center flex-col xl:flex-row">
                <div className="flex justify-center items-center relative rounded-md bg-purple h-96 md:w-160 md:h-72 p-4 mx-2 z-10">
                    <img className="w-32 hidden md:block md:mx-6 md:w-48" src="/uofr-logo.png" />
                    <div className="flex flex-col space-y-4 justify-center items-center w-72 text-white z-10">
                        <div className="flex justify-between items-center w-60 md:w-full">
                            <p className="text-2xl">Bachelors in <br /> Computer Science</p>
                            <Fire className="absolute -top-34 right-14 md:-top-28 md:right-20 w-14 h-52" id="wizardFire"></Fire>
                            <Icon iconPath={IconPath.wizard} width={50} height={50}></Icon>
                        </div>
                        <div className="flex justify-between items-center w-60 md:w-full">
                            <p className="text-2xl">Minor in <br /> Creative Tech</p>
                            <div className="flex flex-col items-center justify-center">
                                <div className={styles.cubeContainer}>
                                    <Icon iconPath={IconPath.arCube} width={25} height={25}></Icon>
                                </div>
                                <Icon iconPath={IconPath.arStand} width={50} height={50}></Icon>
                            </div>
                        </div>
                        <img className="w-32 md:hidden" src="/uofr-logo.png" />
                    </div>
                    <img className="absolute -left-14 -bottom-1 h-64 sm:-left-18 sm:h-80" src="/bitmoji/bitmoji-books.svg" />
                    <img className="absolute -top-20 right-0 w-20 sm:-top-25 sm:w-24" src="/owls/owl-read-no-tail.svg" />
                </div>
                <div className="absolute h-96 w-96 md:w-160 md:h-72 z-0 mb-2">
                    <img className="absolute -top-16 -right-52 z-0" src="/tree-branch-orange.svg" />
                </div>
            </ParallaxLayer>

        </div>
    );
}