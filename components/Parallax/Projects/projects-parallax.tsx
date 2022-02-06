import { ParallaxLayer } from '@react-spring/parallax';
import Link from 'next/link';
import React from "react";
import ScrollContainer from 'react-indiana-drag-scroll';
import { IconPath } from '../../../constants/icon-path';
import Project from './Project/project';
import SvgTreeBranchGreen from '../../Shared/Svgs/svg-tree-branch-green';
import SvgOwlLookLeftHiddenTalon from '../../Shared/Svgs/owls/svg-owl-look-left-hidden-talon';

export default function ProjectsParallax() {
    return (
        <div>
            <ParallaxLayer offset={3.05} speed={0.05} className="opacity-40">
                <img src="/Cloud-1.svg" className="w-40 ml-20 md:ml-96 md:w-56" />
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={1} className="flex justify-center items-center">
                <div className="relative bg-white rounded-md w-80 sm:w-96 mt-4 md:mt-0 z-10">
                    <div className="bg-red rounded-t-md h-2"></div>
                    <div className="relative flex flex-col justify-center py-4 text-gray-600 px-4 sm:px-8 z-10">
                        <p className="font-display text-3xl sm:text-4xl">Projects & Work</p>
                        <p>Curious to learn more? Check out my GitHub in the bottom right or shoot me a message.</p>
                        <ScrollContainer className="w-full space-y-8 h-80 mt-6">
                            <Project
                                iconPath={IconPath.memoryKPR}
                                title='memoryKPR'
                                learnMore={true}
                                externalUrl='https://www.memorykpr.com/'
                                description='Currently the Development Lead at memoryKPR! A website and app that ensures you are always only one click away from that special place dedicated to you capturing, crafting, reliving, and protecting your stories.'></Project>
                            <Project
                                iconPath={IconPath.arGlasses}
                                title='AR for Dementia'
                                learnMore={true}
                                externalUrl='https://dl.acm.org/doi/10.1145/3463914.3463918'
                                description='Alongside my colleagues, I helped design an AR system called My Daily Routine (MDR) for people living with Dementia and their care partners. This was a part of my research work at the UofR and was published by ACM as a part of the ICVARS 2021 Conference, which I had the opportunity to present at virtually.'></Project>
                            <Project
                                iconPath={IconPath.urmaps}
                                iconStyle="rounded-xl"
                                title='URMaps'
                                description='Mobile maps application developed for the University of Regina. Learned and implemented classical and advanced pathfinding techniques, indoor navigation, and AR'></Project>
                            <Project
                                iconPath={IconPath.reddit}
                                title='Reddit Redesign'
                                description='Completed a UI redesign of Reddit based on best practices in my CS280 class with a friend. This was before Reddit had released their new UI and it turns out we were extremely close to what Reddit was thinking for their updated UI.'></Project>
                        </ScrollContainer>
                    </div>
                </div>
                <div className="absolute w-160 h-128 sm:h-112 z-0 mb-2">
                    <div className="absolute -top-10 right-10 sm:top-auto sm:bottom-24 sm:-right-32">
                        <SvgTreeBranchGreen></SvgTreeBranchGreen>
                    </div>
                    <div className="absolute -top-20 right-28 w-24 sm:w-auto sm:top-auto sm:bottom-32 sm:right-2 sm:mb-1">
                        <SvgOwlLookLeftHiddenTalon></SvgOwlLookLeftHiddenTalon>
                    </div>
                </div>
                <Link href="/secret-gaming-room">
                    <a>
                        <img className="absolute -left-4 w-64 -bottom-10 sm:-bottom-16 sm:w-auto" src="/bitmoji/bitmoji-trapdoor.svg" />
                    </a>
                </Link>
            </ParallaxLayer>
        </div>
    );
}