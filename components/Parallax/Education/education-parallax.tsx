import { ParallaxLayer } from '@react-spring/parallax';
import React from "react";
import { IconPath } from '../../../constants/icon-path';
import Icon from '../../Shared/icon';

export default function EducationParallax() {
    return (
        <div>
            <ParallaxLayer offset={2.5} speed={1} className="flex justify-center items-center flex-col xl:flex-row">
                <div className="flex justify-center items-center relative rounded-md bg-purple h-96 md:w-160 md:h-72 p-4 mx-2 z-10">
                    <img className="w-32 hidden md:block md:mx-6 md:w-48" src="/uofr-logo.png" />
                    <div className="flex flex-col space-y-4 justify-center items-center w-72 text-white z-10">
                        <div className="flex justify-between items-center w-full">
                            <p className="text-2xl">Bachelors in <br /> Computer Science</p>
                            <Icon iconPath={IconPath.wizard} width={50} height={50}></Icon>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <p className="text-2xl">Minor in <br /> Creative Tech</p>
                            <Icon iconPath={IconPath.ar} width={50} height={50}></Icon>
                        </div>
                        <img className="w-32 md:hidden" src="/uofr-logo.png" />
                    </div>
                    <img className="absolute -left-44 -bottom-4 sm:-left-56 h-112" src="/bitmoji/bitmoji-books.svg" />
                    <img className="absolute -top-20 right-0 w-20 sm:-top-25 sm:w-24" src="/owls/owl-read-no-tail.svg" />
                </div>
                <div className="absolute h-96 w-96 md:w-160 md:h-72 z-0 mb-2">
                    <img className="absolute -top-16 -right-52 z-0" src="/tree-branch-orange.svg" />
                </div>
            </ParallaxLayer>

        </div>
    );
}