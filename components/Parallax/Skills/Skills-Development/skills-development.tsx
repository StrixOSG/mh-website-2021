import React from "react";
import Icon from '../../../Shared/icon';
import { IconPath } from '../../../../constants/icon-path';

export default function SkillsDevelopment() {
    return (
        <div className="bg-white rounded-md w-80 sm:w-96 mt-4 md:mt-0 md:mr-4">
            <div className="bg-purple rounded-t-md h-2"></div>
            <div className="py-4 text-gray-600 text-3xl px-4 sm:text-4xl sm:px-8">
                <p className="font-display text-center">Development</p>
                <p className="font-display text-center">Experience</p>
                <div className="mt-6 text-2xl sm:text-3xl">
                    <p className="mb-4">Languages</p>
                    <div className="grid grid-cols-6">
                        <Icon iconPath={IconPath.angular} toolTip="Angular"></Icon>
                        <Icon iconPath={IconPath.c} toolTip="C"></Icon>
                        <Icon iconPath={IconPath.cplusplus} toolTip="C++"></Icon>
                        <Icon iconPath={IconPath.csharp} toolTip="C#"></Icon>
                        <Icon iconPath={IconPath.css} toolTip="CSS"></Icon>
                        <Icon iconPath={IconPath.html} toolTip="HTML"></Icon>
                        <Icon iconPath={IconPath.javascript} toolTip="JavaScript"></Icon>
                        <Icon iconPath={IconPath.jquery} toolTip="JQuery"></Icon>
                        <Icon iconPath={IconPath.laravel} toolTip="Laravel"></Icon>
                        <Icon iconPath={IconPath.mysql} toolTip="MySQL"></Icon>
                        <Icon iconPath={IconPath.nestjs} toolTip="NestJS"></Icon>
                        <Icon iconPath={IconPath.nodejs} toolTip="NodeJS"></Icon>
                        <Icon iconPath={IconPath.php} toolTip="PHP"></Icon>
                        <Icon iconPath={IconPath.postgresql} toolTip="PostgreSQL"></Icon>
                        <Icon iconPath={IconPath.typescript} toolTip="TypeScript"></Icon>
                        <Icon iconPath={IconPath.react} toolTip="React"></Icon>
                        <Icon iconPath={IconPath.sass} toolTip="Sass"></Icon>
                    </div>
                </div>
                <div className="my-6 mb-4 text-2xl sm:text-3xl">
                    <p className="mb-4">Tools</p>
                    <div className="grid grid-cols-5 justify-center items-center">
                        <Icon iconPath={IconPath.aws} toolTip="AWS"></Icon>
                        <Icon iconPath={IconPath.docker} toolTip="Docker"></Icon>
                        <Icon iconPath={IconPath.github} toolTip="GitHub"></Icon>
                        <Icon iconPath={IconPath.heroku} toolTip="Heroku"></Icon>
                        <Icon iconPath={IconPath.unity} toolTip="Unity"></Icon>
                        <Icon iconPath={IconPath.webpack} toolTip="Webpack"></Icon>
                        <Icon iconPath={IconPath.yarn} toolTip="Yarn"></Icon>
                    </div>
                </div>
            </div>
        </div>
    );
}