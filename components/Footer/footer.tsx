import React from "react";
import { IconPath } from "../../constants/icon-path";
import Icon from "../Shared/icon";

export default function Footer() {
    return (
        <div className="flex flex-col justify-center items-center absolute bottom-0 right-2 sm:right-10">
            <p className="font-serif text-white opacity-70 text-xl sm:text-2xl">LET'S CONNECT</p>
            <div className="hidden sm:flex justifty-center items-center">
                <a target="_blank" href="https://github.com/StrixOSG" rel="noopener noreferrer" tabIndex={0}>
                    <Icon iconPath={IconPath.github} width={50} height={50}></Icon>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/matthew-hamilton-aa3271108/" rel="noopener noreferrer" tabIndex={0}>
                    <Icon iconPath={IconPath.linkedIn} width={50} height={50}></Icon>
                </a>
                <a href="mailto:matthewhamiltonweb@gmail.com">
                    <Icon iconPath={IconPath.email} width={50} height={50}></Icon>
                </a>
            </div>
            <div className="flex sm:hidden justifty-center items-center">
                <a target="_blank" href="https://github.com/StrixOSG" rel="noopener noreferrer" tabIndex={0}>
                    <Icon iconPath={IconPath.github} width={40} height={40}></Icon>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/matthew-hamilton-aa3271108/" rel="noopener noreferrer" tabIndex={0}>
                    <Icon iconPath={IconPath.linkedIn} width={40} height={40}></Icon>
                </a>
                <a href="mailto:matthewhamiltonweb@gmail.com">
                    <Icon iconPath={IconPath.email} width={40} height={40}></Icon>
                </a>
            </div>
        </div>
    )
}