import React from "react";
import Icon from '../../../Shared/icon';
import { IconPath } from '../../../../constants/icon-path';

export default function SkillsDesign() {
    return (
        <div className="bg-white rounded-md w-80 sm:w-96 mt-4 md:mt-0">
            <div className="bg-cadet-blue rounded-t-md h-2"></div>
            <div className="py-4 text-gray-600 text-3xl px-4 sm:text-4xl sm:px-8">
                <p className="font-display text-center">Design & General</p>
                <p className="font-display text-center">Experience</p>
                <div className="text-2xl mt-2 sm:mt-6 sm:text-3xl">
                    <p className=" mb-4">Tools</p>
                    <div className="grid grid-cols-5">
                        <Icon iconPath={IconPath.aftereffects} toolTip="Adobe After Effects"></Icon>
                        <Icon iconPath={IconPath.illustrator} toolTip="Adobe Illustrator"></Icon>
                        <Icon iconPath={IconPath.photoshop} toolTip="Adobe Photoshop"></Icon>
                        <Icon iconPath={IconPath.premiere} toolTip="Adobe Premiere"></Icon>
                        <Icon iconPath={IconPath.xd} toolTip="Adobe XD"></Icon>
                        <Icon iconPath={IconPath.blender} toolTip="Blender"></Icon>
                        <Icon iconPath={IconPath.figma} toolTip="Figma"></Icon>
                    </div>
                </div>
                <div className="text-2xl mt-2 sm:mt-6 sm:text-3xl">
                    <p className=" mb-4">Skills & Interests</p>
                    <ul className="list-disc text-lg text-left ml-6">
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