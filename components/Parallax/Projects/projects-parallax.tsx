import { ParallaxLayer } from '@react-spring/parallax';
import React from "react";
import { IconPath } from '../../../constants/icon-path';
import Project from './Project/project';

export default function ProjectsParallax() {
    return (
        <ParallaxLayer offset={3} speed={1} className="flex justify-center items-center">
            <div className="bg-white rounded-md w-80 sm:w-96 mt-4 md:mt-0">
                <div className="bg-teal rounded-t-md h-2"></div>
                <div className="flex flex-col justify-center items-center py-4 text-gray-600">
                    <p className="font-display text-3xl sm:text-4xl">Projects & Work</p>
                    <div className="mt-2 w-full px-8 sm:mt-6">
                        <Project iconPath={IconPath.memoryKPR} title='memoryKPR' description='Development Lead at memoryKPR. memoryKPR is a website and app that ensures you are always only one click away from that special place dedicated to you capturing, crafting, reliving, and protecting your stories.'></Project>
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    );
}