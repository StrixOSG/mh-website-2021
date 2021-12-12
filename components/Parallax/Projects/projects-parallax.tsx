import { ParallaxLayer } from '@react-spring/parallax';
import React from "react";
import ScrollContainer from 'react-indiana-drag-scroll';
import { IconPath } from '../../../constants/icon-path';
import Project from './Project/project';

export default function ProjectsParallax() {
    return (
        <ParallaxLayer offset={3} speed={1} className="flex justify-center items-center">
            <div className="bg-white rounded-md w-80 sm:w-96 mt-4 md:mt-0">
                <div className="bg-cadet-blue rounded-t-md h-2"></div>
                <div className="flex flex-col justify-center py-4 text-gray-600 px-4 sm:px-8">
                    <p className="font-display text-3xl sm:text-4xl">Projects & Work</p>
                    <p>Curious to learn more? Check out my GitHub in the bottom right or shoot me an email.</p>
                    <ScrollContainer className="w-full space-y-8 h-80 mt-6">
                        <Project
                            iconPath={IconPath.memoryKPR}
                            title='memoryKPR'
                            learnMore={true}
                            externalUrl='https://www.memorykpr.com/'
                            description='Currently the Development Lead at memoryKPR! A website and app that ensures you are always only one click away from that special place dedicated to you capturing, crafting, reliving, and protecting your stories.'></Project>
                        <Project
                            iconPath={IconPath.urmaps}
                            iconStyle="rounded-xl"
                            title='URMaps'
                            externalUrl='https://www.memorykpr.com/'
                            description='Mobile maps application developed for the University of Regina. Learned and implemented classical and advanced pathfinding techniques, indoor navigation, and AR'></Project>
                        <Project
                            iconPath={IconPath.reddit}
                            title='Reddit Redesign'
                            externalUrl='https://www.memorykpr.com/'
                            description='Completed a UI redesign of Reddit based on best practices in my CS280 class with a friend. This was before Reddit had released their new UI and it turns out we were extremely close to what Reddit was thinking for their updated UI.'></Project>
                    </ScrollContainer>
                </div>
            </div>
        </ParallaxLayer>
    );
}