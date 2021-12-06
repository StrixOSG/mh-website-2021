import { ParallaxLayer } from '@react-spring/parallax';
import React from "react";
import styles from './skills-parallax.module.css';
import SkillsDevelopment from './Skills-Development/skills-development';
import SkillsDesign from './Skills-Design/skills-design';

export default function SkillsParallax() {
    return (
        <div>
            <ParallaxLayer offset={2} speed={1} className="flex justify-center items-center flex-col xl:flex-row">
                <div className="hidden xl:flex xl:flex-col xl:justify-center xl:items-center xl:my-16 xl:mt-0 xl:mr-32">
                    <img className={`${styles.owl} w-3/12 sm:w-2/12 lg:w-2/12 xl:w-5/12 mb-6`} src="/owls/owl-hover.svg" />
                    <img className="w-7/12 sm:w-5/12 lg:w-4/12 xl:w-full" src="/bitmoji/bitmoji-surprise.svg" />
                </div>
                <div className="text-center px-4 md:flex xl:justify-self-start">
                    <SkillsDevelopment></SkillsDevelopment>
                    <SkillsDesign></SkillsDesign>
                </div>
            </ParallaxLayer>

        </div>
    );
}