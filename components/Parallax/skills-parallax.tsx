import { ParallaxLayer } from '@react-spring/parallax';
import React from "react";
import styles from './skills-parallax.module.css';
import Icon from '../Shared/icon';
import { IconPath } from '../../constants/icon-path';

export default function SkillsParallax() {
    return (
        <div>
            <ParallaxLayer offset={1} speed={1} className="grid grid-rows-1 place-items-center xl:grid-cols-2 xl:grid-rows-none">
                <div className="hidden xl:flex xl:flex-col xl:justify-center xl:items-center xl:my-16 xl:mt-0 xl:mr-32">
                    <img className={`${styles.owl} w-3/12 sm:w-2/12 lg:w-2/12 xl:w-5/12 mb-6`} src="/owls/owl-hover.svg" />
                    <img className="w-7/12 sm:w-5/12 lg:w-4/12 xl:w-full" src="/bitmoji/bitmoji-surprise.svg" />
                </div>
                <div className="text-center text-3xl px-4 md:text-5xl xl:justify-self-start md:flex xl:text-7xl">
                    <div className="bg-white rounded-md sm:w-96 mt-4 md:mt-0 md:mr-4">
                        <div className="bg-purple rounded-t-md h-2"></div>
                        <div className="mt-4 text-3xl sm:text-4xl text-gray-600">
                            <p>Development</p>
                            <p>Experience</p>
                        </div>
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
                        <div className="my-6 font-serif text-2xl sm:text-3xl">
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
                    <div className="bg-white rounded-md w-80 mt-4 md:mt-0">
                        <div className="bg-teal rounded-t-md h-2"></div>
                        <div className="mt-4 text-xl sm:text-4xl text-gray-600">
                            <p>Design & General</p>
                            <p>Experience</p>
                            <div className="mt-6 font-serif text-2xl sm:text-3xl">
                                <p className="text-teal mb-2">Tools</p>
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
                            <div className="mt-6 font-serif text-2xl sm:text-3xl">
                                <p className="text-teal mb-2">Skills & Interests</p>
                                <div className="grid grid-cols-5 justify-center items-center px-6">
                                    {/* List of skills and interests */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

        </div>
    );
}