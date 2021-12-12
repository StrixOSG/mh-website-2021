import React from "react";
import Icon from '../../../Shared/icon';
import { IconPath } from '../../../../constants/icon-path';

export default function SkillsDesign() {
    return (
        <div className="bg-white rounded-md w-80 sm:w-96 mt-4 md:mt-0">
            <div className="bg-cadet-blue rounded-t-md h-2"></div>
            <div className="py-4 text-3xl sm:text-4xl text-gray-600">
                <p className="font-display">Design & General</p>
                <p className="font-display">Experience</p>
                <div className="text-2xl mt-2 sm:mt-6 sm:text-3xl">
                    <p className=" mb-4">Tools</p>
                    <div className="grid grid-cols-5 justify-center items-center px-6">
                        <Icon iconPath={IconPath.aftereffects}></Icon>
                        <Icon iconPath={IconPath.illustrator}></Icon>
                        <Icon iconPath={IconPath.photoshop}></Icon>
                        <Icon iconPath={IconPath.premiere}></Icon>
                        <Icon iconPath={IconPath.xd}></Icon>
                        <Icon iconPath={IconPath.blender}></Icon>
                        <Icon iconPath={IconPath.figma}></Icon>
                    </div>
                </div>
                <div className="text-2xl mt-2 sm:mt-6 sm:text-3xl">
                    <p className=" mb-4">Skills & Interests</p>
                    <ul className="list-disc text-lg text-left ml-10">
                        <li>Full stack dev, UX, AR</li>
                        <li>Learning new tech</li>
                        <li>Growing startups</li>
                        <li>Team & task management</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}