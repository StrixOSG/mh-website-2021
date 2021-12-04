import React from "react";
import Icon from '../../../Shared/icon';
import { IconPath } from '../../../../constants/icon-path';

export default function SkillsDevelopment() {
    return (
        <div className="bg-white rounded-md w-80 sm:w-96 mt-4 md:mt-0 md:mr-4">
            <div className="bg-purple rounded-t-md h-2"></div>
            <div className="py-4 text-3xl sm:text-4xl text-gray-600">
                <p>Development</p>
                <p>Experience</p>
                <div className="mt-6 font-serif text-2xl sm:text-3xl">
                    <p className="text-purple mb-2">Languages</p>
                    <div className="grid grid-cols-6 justify-center items-center px-6">
                        <Icon iconPath={IconPath.angular}></Icon>
                        <Icon iconPath={IconPath.c}></Icon>
                        <Icon iconPath={IconPath.cplusplus}></Icon>
                        <Icon iconPath={IconPath.csharp}></Icon>
                        <Icon iconPath={IconPath.css}></Icon>
                        <Icon iconPath={IconPath.html}></Icon>
                        <Icon iconPath={IconPath.javascript}></Icon>
                        <Icon iconPath={IconPath.jquery}></Icon>
                        <Icon iconPath={IconPath.laravel}></Icon>
                        <Icon iconPath={IconPath.mysql}></Icon>
                        <Icon iconPath={IconPath.nestjs}></Icon>
                        <Icon iconPath={IconPath.nodejs}></Icon>
                        <Icon iconPath={IconPath.php}></Icon>
                        <Icon iconPath={IconPath.postgresql}></Icon>
                        <Icon iconPath={IconPath.typescript}></Icon>
                        <Icon iconPath={IconPath.react}></Icon>
                        <Icon iconPath={IconPath.sass}></Icon>
                    </div>
                </div>
                <div className="my-6 mb-4 font-serif text-2xl sm:text-3xl">
                    <p className="text-purple mb-2">Tools</p>
                    <div className="grid grid-cols-5 justify-center items-center px-6">
                        <Icon iconPath={IconPath.aws}></Icon>
                        <Icon iconPath={IconPath.docker}></Icon>
                        <Icon iconPath={IconPath.github}></Icon>
                        <Icon iconPath={IconPath.heroku}></Icon>
                        <Icon iconPath={IconPath.unity}></Icon>
                        <Icon iconPath={IconPath.webpack}></Icon>
                        <Icon iconPath={IconPath.yarn}></Icon>
                    </div>
                </div>
            </div>
        </div>
    );
}