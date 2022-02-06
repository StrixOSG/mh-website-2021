import { ParallaxLayer } from '@react-spring/parallax';
import React from "react";
import styles from './skills-parallax.module.css';
import SkillsDevelopment from './Skills-Development/skills-development';
import SkillsDesign from './Skills-Design/skills-design';
import SvgOwlHover from '../../Shared/Svgs/owls/svg-owl-hover';

export default function SkillsParallax() {
    return (
        <div>
            <ParallaxLayer offset={1.9} speed={0.5} className="flex justify-end opacity-40">
                <img src="/Cloud-2.svg" className="w-40 mt-16 md:mr-40 md:w-56" />
            </ParallaxLayer>
            <ParallaxLayer offset={2.1} speed={0.5} className="opacity-40">
                <img src="/Cloud-1.svg" className="w-56 ml-40 md:w-72" />
            </ParallaxLayer>
            <ParallaxLayer offset={2.5} speed={0.05} className="flex justify-end opacity-40">
                <img src="/Cloud-2.svg" className="w-40 md:mr-40 md:w-56" />
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1} className="flex justify-center items-center flex-col xl:flex-row">
                <div className="hidden xl:flex xl:flex-col xl:justify-center xl:items-center xl:my-16 xl:mt-0 xl:mr-32">
                    <div className={`${styles.owl} w-3/12 sm:w-2/12 lg:w-2/12 xl:w-5/12 mb-6`}>
                        <SvgOwlHover></SvgOwlHover>
                    </div>
                    <img className="w-7/12 sm:w-5/12 lg:w-4/12 xl:w-full" src="/bitmoji/bitmoji-surprise.svg" />
                </div>
                <div className="text-left px-4 md:flex xl:justify-self-start">
                    <SkillsDevelopment></SkillsDevelopment>
                    <SkillsDesign></SkillsDesign>
                </div>
            </ParallaxLayer>
        </div>
    );
}